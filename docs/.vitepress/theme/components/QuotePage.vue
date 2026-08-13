<script setup>
import { contactEmail, whatsappLink, whatsappNumber } from '../data/site.js'
import { trackEvent } from '../utils/tracking.js'
import ContactInquiryForm from './ContactInquiryForm.vue'
</script>

<template>
  <main class="sc-container sc-quote-page">
    <section class="sc-contact-header sc-quote-header">
      <p class="sc-eyebrow">Request a Quote</p>
      <h1>Get a SoilCreate instrumentation quote</h1>
      <div class="sc-heading-line"></div>
      <p>
        Share your project type, monitoring target, quantity, and destination country.
        SoilCreate will review the requirement and respond with a suitable inclinometer
        or geotechnical monitoring configuration.
      </p>
    </section>

    <section class="sc-contact-wrapper">
      <aside class="sc-info-card">
        <h2>Quote information</h2>
        <p>
          For faster matching, include borehole depth, monitoring frequency, communication
          method, and whether the project requires manual surveys or automated monitoring.
        </p>

        <div class="sc-info-item">
          <div class="sc-info-content">
            <strong>Email</strong>
            <a :href="'mailto:' + contactEmail" @click="trackEvent('email_click', { location: 'quote_page' })">{{ contactEmail }}</a>
          </div>
        </div>

        <div class="sc-info-item">
          <div class="sc-info-content">
            <strong>WhatsApp</strong>
            <a :href="whatsappLink" target="_blank" rel="noopener" @click="trackEvent('whatsapp_click', { location: 'quote_page' })">{{ whatsappNumber }}</a>
          </div>
        </div>
      </aside>

      <div class="sc-form-container">
        <ContactInquiryForm product-name="Quote Request" />
      </div>
    </section>
  </main>
</template>
