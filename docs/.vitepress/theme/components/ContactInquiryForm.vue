<script setup>
import { computed, ref } from 'vue'
import { contactEmail, formspreeEndpoint } from '../data/site.js'
import { trackEvent } from '../utils/tracking.js'

const props = defineProps({
  productName: {
    type: String,
    default: 'Contact SoilCreate'
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

const subjectLine = computed(() => 'SoilCreate inquiry: ' + props.productName)

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
    status.value = 'Message sent. Our team will respond by email.'
  } catch (error) {
    statusType.value = 'error'
    status.value = 'Submission failed. Please email us directly or try again later.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <form class="sc-form" @submit.prevent="submit">
    <div class="sc-row">
      <div>
        <label>Your Name *</label>
        <input v-model="form.name" type="text" name="name" autocomplete="name" required />
      </div>
      <div>
        <label>Company / Organization</label>
        <input v-model="form.company" type="text" name="company" autocomplete="organization" />
      </div>
    </div>

    <div class="sc-row">
      <div>
        <label>Your Email *</label>
        <input v-model="form.email" type="email" name="email" autocomplete="email" required />
      </div>
      <div>
        <label>WhatsApp / Phone</label>
        <input v-model="form.phone" type="tel" name="phone" autocomplete="tel" placeholder="e.g. +1 234 567 8900" />
      </div>
    </div>

    <label>Project Details / Enquiry *</label>
    <textarea
      v-model="form.message"
      name="message"
      rows="6"
      placeholder="Please provide details about the products you are interested in..."
      required
    />

    <button type="submit" class="sc-btn-submit" :disabled="submitting">
      {{ submitting ? 'Sending...' : 'Send Message' }}
    </button>

    <p v-if="status" class="status" :class="statusType">{{ status }}</p>
  </form>
</template>
