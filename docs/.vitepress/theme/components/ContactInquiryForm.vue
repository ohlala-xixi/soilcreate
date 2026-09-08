<script setup>
import { computed, ref } from 'vue'
import { contactEmail, formspreeEndpoint } from '../data/site.js'
import { trackEvent } from '../utils/tracking.js'

const props = defineProps({
  productName: {
    type: String,
    default: 'Contact SoilCreate'
  },
  locale: {
    type: String,
    default: 'en'
  }
})

const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: ''
})
const submitting = ref(false)
const status = ref('')
const statusType = ref('success')
const fieldId = (name) => `contact-inquiry-${props.locale || 'en'}-${name}`

const subjectLine = computed(() => 'SoilCreate inquiry: ' + props.productName)
const isSpanish = computed(() => props.locale === 'es')
const copy = computed(() => isSpanish.value
  ? {
      name: 'Nombre *',
      company: 'Empresa / Organizacion',
      email: 'Email *',
      phone: 'WhatsApp / Telefono',
      details: 'Detalles del proyecto / consulta *',
      phonePlaceholder: 'ej. +34 600 000 000',
      detailsPlaceholder: 'Comparta el tipo de proyecto, instrumento requerido, pais y requisitos tecnicos.',
      sending: 'Enviando...',
      submit: 'Enviar mensaje',
      success: 'Mensaje enviado. Nuestro equipo respondera por email.',
      error: 'El envio fallo. Por favor escribanos por email o intente nuevamente.'
    }
  : {
      name: 'Your Name *',
      company: 'Company / Organization',
      email: 'Your Email *',
      phone: 'WhatsApp / Phone',
      details: 'Project Details / Enquiry *',
      phonePlaceholder: 'e.g. +1 234 567 8900',
      detailsPlaceholder: 'Please provide details about the products you are interested in...',
      sending: 'Sending...',
      submit: 'Send Message',
      success: 'Message sent. Our team will respond by email.',
      error: 'Submission failed. Please email us directly or try again later.'
    })

const submit = async () => {
  submitting.value = true
  status.value = ''

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

    if (!response.ok) throw new Error('Submission failed')

    trackEvent('generate_lead', {
      form_name: 'contact_form',
      product_name: props.productName
    })
    form.value = { name: '', company: '', email: '', phone: '', message: '' }
    statusType.value = 'success'
    status.value = copy.value.success
  } catch (error) {
    statusType.value = 'error'
    status.value = copy.value.error
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <form class="sc-form" @submit.prevent="submit">
    <div class="sc-row">
      <div>
        <label :for="fieldId('name')">{{ copy.name }}</label>
        <input :id="fieldId('name')" v-model="form.name" type="text" name="name" autocomplete="name" required />
      </div>
      <div>
        <label :for="fieldId('company')">{{ copy.company }}</label>
        <input :id="fieldId('company')" v-model="form.company" type="text" name="company" autocomplete="organization" />
      </div>
    </div>

    <div class="sc-row">
      <div>
        <label :for="fieldId('email')">{{ copy.email }}</label>
        <input :id="fieldId('email')" v-model="form.email" type="email" name="email" autocomplete="email" required />
      </div>
      <div>
        <label :for="fieldId('phone')">{{ copy.phone }}</label>
        <input :id="fieldId('phone')" v-model="form.phone" type="tel" name="phone" autocomplete="tel" :placeholder="copy.phonePlaceholder" />
      </div>
    </div>

    <label :for="fieldId('message')">{{ copy.details }}</label>
    <textarea
      :id="fieldId('message')"
      v-model="form.message"
      name="message"
      rows="6"
      :placeholder="copy.detailsPlaceholder"
      required
    />

    <button type="submit" class="sc-btn-submit" :disabled="submitting">
      {{ submitting ? copy.sending : copy.submit }}
    </button>

    <p v-if="status" class="status" :class="statusType" role="status" aria-live="polite">{{ status }}</p>
  </form>
</template>
