<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import { contactEmail, formspreeEndpoint, whatsappNumber } from '../data/site.js'
import { trackEvent } from '../utils/tracking.js'

const props = defineProps({
  productName: {
    type: String,
    default: 'General Inquiry'
  },
  compact: {
    type: Boolean,
    default: false
  },
  locale: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['submitted'])
const route = useRoute()

const form = ref({
  name: '',
  company: '',
  email: '',
  country: '',
  need: ''
})
const submitting = ref(false)
const status = ref('')
const statusType = ref('success')

const endpointReady = computed(() => !formspreeEndpoint.includes('your-form-id'))
const effectiveLocale = computed(() => props.locale || (route.path.startsWith('/es/') || route.path === '/es' ? 'es' : 'en'))
const isSpanish = computed(() => effectiveLocale.value === 'es')
const subjectLine = computed(() => (isSpanish.value ? 'Consulta SoilCreate: ' : 'SoilCreate inquiry: ') + props.productName)
const copy = computed(() => isSpanish.value
  ? {
      title: 'Solicitar cotizacion',
      intro: 'Envie su solicitud sin salir de la pagina. La negociacion de precios se mantiene fuera del catalogo publico.',
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo de trabajo',
      country: 'Pais de destino',
      need: 'Resumen del requerimiento',
      placeholder: 'Comparta modelo, cantidad, pais del proyecto y requisitos tecnicos.',
      sending: 'Enviando...',
      submit: 'Enviar solicitud',
      emailDirectly: 'Enviar correo',
      contact: 'Contacto',
      success: 'Solicitud enviada. Nuestro equipo respondera por correo.',
      error: 'El envio fallo. Por favor escribanos por email o intente nuevamente.'
    }
  : {
      title: 'Make an enquiry',
      intro: 'Submit your request without leaving the page. Price negotiation stays off the public catalog.',
      name: 'Your name',
      company: 'Company name',
      email: 'Work email',
      country: 'Destination country',
      need: 'Requirement summary',
      placeholder: 'Please share product model, quantity, project country, and technical requirements.',
      sending: 'Sending...',
      submit: 'Send inquiry',
      emailDirectly: 'Email directly',
      contact: 'Contact',
      success: 'Inquiry sent. Our team will respond by email.',
      error: 'Submission failed. Please email us directly or try again later.'
    })

watch(
  () => props.productName,
  () => {
    status.value = ''
  }
)

const submit = async () => {
  submitting.value = true
  status.value = ''

  if (!endpointReady.value) {
    statusType.value = 'error'
    status.value = isSpanish.value
      ? 'Formspree aun no esta configurado. Contactenos por email o WhatsApp.'
      : 'Formspree endpoint is not configured yet. Please contact us by email or WhatsApp.'
    submitting.value = false
    return
  }

  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _subject: subjectLine.value,
        subject: subjectLine.value,
        product: props.productName,
        recipient: contactEmail,
        ...form.value
      })
    })

    if (!response.ok) {
      throw new Error('Submission failed')
    }

    trackEvent('generate_lead', {
      form_name: 'product_inquiry',
      product_name: props.productName,
      destination_country: form.value.country
    })
    form.value = { name: '', company: '', email: '', country: '', need: '' }
    statusType.value = 'success'
    status.value = copy.value.success
    emit('submitted')
  } catch (error) {
    statusType.value = 'error'
    status.value = copy.value.error
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="form-panel" :class="{ 'form-panel--compact': compact }">
    <h2 class="section-title">{{ copy.title }}</h2>
    <p class="section-copy">
      {{ copy.intro }}
    </p>

    <form class="form-grid" @submit.prevent="submit">
      <label>
        {{ copy.name }}
        <input v-model="form.name" type="text" autocomplete="name" required />
      </label>

      <label>
        {{ copy.company }}
        <input v-model="form.company" type="text" autocomplete="organization" required />
      </label>

      <label>
        {{ copy.email }}
        <input v-model="form.email" type="email" autocomplete="email" required />
      </label>

      <label>
        {{ copy.country }}
        <input v-model="form.country" type="text" autocomplete="country-name" required />
      </label>

      <label class="full">
        {{ copy.need }}
        <textarea
          v-model="form.need"
          rows="5"
          required
          :placeholder="copy.placeholder"
        />
      </label>

      <div class="full cta-row">
        <button class="button button--primary" type="submit" :disabled="submitting">
          {{ submitting ? copy.sending : copy.submit }}
        </button>
        <a class="button button--ghost" :href="'mailto:' + contactEmail + '?subject=' + encodeURIComponent(subjectLine)" @click="trackEvent('email_click', { location: 'product_inquiry_form', product_name: productName })">
          {{ copy.emailDirectly }}
        </a>
      </div>
    </form>

    <p v-if="status" class="status" :class="statusType">{{ status }}</p>
    <p class="muted">{{ copy.contact }}: {{ contactEmail }} · WhatsApp: {{ whatsappNumber }}</p>
  </section>
</template>
