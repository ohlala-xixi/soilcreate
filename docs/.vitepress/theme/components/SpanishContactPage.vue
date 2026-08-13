<script setup>
import ContactInquiryForm from './ContactInquiryForm.vue'
import { contactEmail, whatsappLink, whatsappNumber } from '../data/site.js'
import { trackEvent } from '../utils/tracking.js'
</script>

<template>
  <main class="sc-container sc-es-contact-page">
    <div class="sc-contact-header">
      <h1>Contactar con SoilCreate</h1>
      <div class="sc-heading-line"></div>
      <p>
        Hable con SoilCreate sobre inclinometros, sensores geotecnicos, adquisicion de datos, nube de monitoreo
        y soporte tecnico para su proximo proyecto.
      </p>
    </div>

    <div class="sc-contact-wrapper">
      <div class="sc-info-card">
        <div class="sc-info-item">
          <div class="sc-icon">✉️</div>
          <div class="sc-info-content">
            <strong>Email</strong>
            <a :href="'mailto:' + contactEmail" @click="trackEvent('email_click', { location: 'contact_page_es' })">{{ contactEmail }}</a>
          </div>
        </div>
        <div class="sc-info-item">
          <div class="sc-icon">📞</div>
          <div class="sc-info-content">
            <strong>WhatsApp / Telefono</strong>
            <a :href="whatsappLink" target="_blank" rel="noopener" @click="trackEvent('whatsapp_click', { location: 'contact_page_es' })">{{ whatsappNumber }}</a>
          </div>
        </div>
        <div class="sc-info-item">
          <div class="sc-icon">🏢</div>
          <div class="sc-info-content">
            <strong>Sede</strong>
            <span>Shanghai, China</span>
          </div>
        </div>
      </div>

      <div class="sc-form-container">
        <ContactInquiryForm product-name="Consulta SoilCreate" locale="es" />
      </div>
    </div>
  </main>
</template>
