<script setup>
import { ref } from 'vue'
import { contactEmail, formspreeEndpoint, whatsappNumber } from '../data/site.js'
import { trackEvent } from '../utils/tracking.js'

const subscriberEmail = ref('')
const subscribing = ref(false)
const subscribeStatus = ref('')
const subscribeStatusType = ref('success')

const submitSubscribe = async () => {
  subscribing.value = true
  subscribeStatus.value = ''

  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _subject: '订阅',
        subject: '订阅',
        form_name: 'footer_subscription',
        recipient: contactEmail,
        email: subscriberEmail.value
      })
    })

    if (!response.ok) throw new Error('Subscription failed')

    trackEvent('sign_up', {
      form_name: 'footer_subscription'
    })
    subscriberEmail.value = ''
    subscribeStatusType.value = 'success'
    subscribeStatus.value = '✓ Subscribed successfully'
  } catch (error) {
    subscribeStatusType.value = 'error'
    subscribeStatus.value = 'Subscription failed. Please try again later.'
  } finally {
    subscribing.value = false
  }
}
</script>

<template>
  <footer class="sc-footer">
    <div class="sc-footer-grid">
      <div>
        <a href="/" class="sc-footer-brand">Soil<span>Create</span></a>
        <p class="sc-footer-desc">
          Precision geotechnical monitoring instruments and telemetry support for demanding engineering projects.
        </p>
        <ul class="sc-footer-contact-list sc-footer-contact-list--brand">
          <li>Email: {{ contactEmail }}</li>
          <li>WhatsApp: {{ whatsappNumber }}</li>
        </ul>
      </div>

      <div class="sc-footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/products/">All Products</a></li>
          <li><a href="/case">Case</a></li>
          <li><a href="/solution">Solutions</a></li>
        </ul>
      </div>

      <div class="sc-footer-col">
        <h4>Media</h4>
        <ul>
          <li><a href="https://www.youtube.com/channel/UC80anTRbKJSR3-jUU0fbX9g" class="sc-media-link" target="_blank" rel="noopener noreferrer">▶ YouTube</a></li>
          <li><a href="https://www.linkedin.com/company/soilcreate-geotechnical/" class="sc-media-link" target="_blank" rel="noopener noreferrer">in LinkedIn</a></li>
        </ul>
      </div>

      <div class="sc-footer-col">
        <h4>Stay Updated</h4>
        <div class="sc-newsletter">
          <form @submit.prevent="submitSubscribe">
            <p class="sc-newsletter-note">Engineering insights, delivered monthly</p>
            <input
              v-model="subscriberEmail"
              type="email"
              name="email"
              placeholder="Your Business Email"
              autocomplete="email"
              required
            />
            <button type="submit" :disabled="subscribing">
              {{ subscribing ? 'Loading...' : 'Subscribe' }}
            </button>
            <p v-if="subscribeStatus" class="sc-subscribe-status" :class="subscribeStatusType">
              {{ subscribeStatus }}
            </p>
          </form>
        </div>
      </div>
    </div>

    <div class="sc-footer-bottom">
      <div>&copy; 2026 SoilCreate. All Rights Reserved.</div>
      <div class="sc-footer-legal">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>
