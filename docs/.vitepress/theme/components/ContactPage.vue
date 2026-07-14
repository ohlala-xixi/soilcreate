<template>
  <main class="sc-container">
    <div class="sc-contact-header">
      <h1>Contact SoilCreate</h1>
      <div class="sc-heading-line"></div>
      <p>Contact <strong>SoilCreate</strong> for expert geotechnical monitoring instruments, precision sensor systems, and project support. Whether you need technical guidance, installation support, or a quote for your project, our team is ready to assist you. Reach out using the contact form, email, or WhatsApp below.</p>
    </div>

    <div class="sc-contact-wrapper">
      <div class="sc-info-card">
        <div class="sc-info-item">
          <div class="sc-icon">✉️</div>
          <div class="sc-info-content">
            <strong>Email Enquiries</strong>
            <a href="mailto:sophia@kstpropack.com" @click="trackEvent('email_click', { location: 'contact_page' })">sophia@kstpropack.com</a>
          </div>
        </div>
        <div class="sc-info-item">
          <div class="sc-icon">📞</div>
          <div class="sc-info-content">
            <strong>WhatsApp / Phone</strong>
            <a href="https://wa.me/8615356046033" target="_blank" rel="noopener" @click="trackEvent('whatsapp_click', { location: 'contact_page' })">+86 15356046033</a>
          </div>
        </div>
        <div class="sc-info-item">
          <div class="sc-icon">🏢</div>
          <div class="sc-info-content">
            <strong>Headquarters</strong>
            <span>Shanghai, China</span>
          </div>
        </div>
      </div>

      <div class="sc-form-container">
        <ContactInquiryForm product-name="Contact SoilCreate" />
      </div>
    </div>
  </main>
</template>
