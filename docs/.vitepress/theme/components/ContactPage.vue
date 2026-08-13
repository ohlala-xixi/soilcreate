<script setup>
import { computed } from 'vue'
import ContactInquiryForm from './ContactInquiryForm.vue'
import { contactEmail, whatsappLink, whatsappNumber } from '../data/site.js'
import { trackEvent } from '../utils/tracking.js'

const props = defineProps({
  locale: {
    type: String,
    default: 'en'
  }
})

const isSpanish = computed(() => props.locale === 'es')
const copy = computed(() => isSpanish.value
  ? {
      title: 'Contactar con SoilCreate',
      intro: 'Hable con SoilCreate sobre inclinometros, sensores geotecnicos, adquisicion de datos, nube de monitoreo y soporte tecnico para su proximo proyecto.',
      email: 'Email',
      phone: 'WhatsApp / Telefono',
      office: 'Sede',
      productName: 'Consulta SoilCreate',
      eventSuffix: 'contact_page_es'
    }
  : {
      title: 'Contact SoilCreate',
      intro: 'Contact SoilCreate for expert geotechnical monitoring instruments, precision sensor systems, and project support. Whether you need technical guidance, installation support, or a quote for your project, our team is ready to assist you. Reach out using the contact form, email, or WhatsApp below.',
      email: 'Email Enquiries',
      phone: 'WhatsApp / Phone',
      office: 'Headquarters',
      productName: 'Contact SoilCreate',
      eventSuffix: 'contact_page'
    })
</script>

<template>
  <main class="sc-container">
    <div class="sc-contact-header">
      <h1>{{ copy.title }}</h1>
      <div class="sc-heading-line"></div>
      <p>{{ copy.intro }}</p>
    </div>

    <div class="sc-contact-wrapper">
      <div class="sc-info-card">
        <div class="sc-info-item">
          <div class="sc-icon">✉️</div>
          <div class="sc-info-content">
            <strong>{{ copy.email }}</strong>
            <a :href="'mailto:' + contactEmail" @click="trackEvent('email_click', { location: copy.eventSuffix })">{{ contactEmail }}</a>
          </div>
        </div>
        <div class="sc-info-item">
          <div class="sc-icon">📞</div>
          <div class="sc-info-content">
            <strong>{{ copy.phone }}</strong>
            <a :href="whatsappLink" target="_blank" rel="noopener" @click="trackEvent('whatsapp_click', { location: copy.eventSuffix })">{{ whatsappNumber }}</a>
          </div>
        </div>
        <div class="sc-info-item">
          <div class="sc-icon">🏢</div>
          <div class="sc-info-content">
            <strong>{{ copy.office }}</strong>
            <span>Shanghai, China</span>
          </div>
        </div>
      </div>

      <div class="sc-form-container">
        <ContactInquiryForm :product-name="copy.productName" :locale="props.locale" />
      </div>
    </div>
  </main>
</template>
