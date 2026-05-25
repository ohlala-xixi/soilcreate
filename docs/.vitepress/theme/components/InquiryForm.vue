<script setup>
import { computed, ref, watch } from 'vue'
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
  }
})

const emit = defineEmits(['submitted'])

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
const subjectLine = computed(() => 'SoilCreate inquiry: ' + props.productName)

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
    status.value = 'Formspree endpoint is not configured yet. Please contact us by email or WhatsApp.'
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
    status.value = 'Inquiry sent. Our team will respond by email.'
    emit('submitted')
  } catch (error) {
    statusType.value = 'error'
    status.value = 'Submission failed. Please email us directly or try again later.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="form-panel" :class="{ 'form-panel--compact': compact }">
    <h2 class="section-title">Make an enquiry</h2>
    <p class="section-copy">
      Submit your request without leaving the page. Price negotiation stays off the public catalog.
    </p>

    <form class="form-grid" @submit.prevent="submit">
      <label>
        Your name
        <input v-model="form.name" type="text" autocomplete="name" required />
      </label>

      <label>
        Company name
        <input v-model="form.company" type="text" autocomplete="organization" required />
      </label>

      <label>
        Work email
        <input v-model="form.email" type="email" autocomplete="email" required />
      </label>

      <label>
        Destination country
        <input v-model="form.country" type="text" autocomplete="country-name" required />
      </label>

      <label class="full">
        Requirement summary
        <textarea
          v-model="form.need"
          rows="5"
          required
          placeholder="Please share product model, quantity, project country, and technical requirements."
        />
      </label>

      <div class="full cta-row">
        <button class="button button--primary" type="submit" :disabled="submitting">
          {{ submitting ? 'Sending...' : 'Send inquiry' }}
        </button>
        <a class="button button--ghost" :href="'mailto:' + contactEmail + '?subject=' + encodeURIComponent(subjectLine)" @click="trackEvent('email_click', { location: 'product_inquiry_form', product_name: productName })">
          Email directly
        </a>
      </div>
    </form>

    <p v-if="status" class="status" :class="statusType">{{ status }}</p>
    <p class="muted">Contact: {{ contactEmail }} · WhatsApp: {{ whatsappNumber }}</p>
  </section>
</template>
