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

    <section class="sc-quote-paths" aria-labelledby="quote-product-heading">
      <div class="sc-quote-section-heading">
        <p class="sc-eyebrow">Choose a starting point</p>
        <h2 id="quote-product-heading">Which measurement approach fits your project?</h2>
        <p>You do not need a finished specification. Start with the closest operating method and we will confirm the configuration.</p>
      </div>

      <div class="sc-quote-product-grid">
        <a href="/products/deformation-monitoring/sliding-inclinometer">
          <span>Manual surveys</span>
          <strong>Portable Sliding Inclinometer</strong>
          <small>For scheduled borehole surveys across multiple locations.</small>
        </a>
        <a href="/products/deformation-monitoring/in-place-inclinometer">
          <span>Automated monitoring</span>
          <strong>In-Place Inclinometer (IPI)</strong>
          <small>For continuous borehole displacement data and remote alarms.</small>
        </a>
        <a href="/products/deformation-monitoring/flexible-inclinometer">
          <span>Distributed deformation</span>
          <strong>Flexible Inclinometer / SAA</strong>
          <small>For continuous shape and deformation profiles along an installation.</small>
        </a>
      </div>
    </section>

    <section class="sc-quote-factors" aria-labelledby="quote-factors-heading">
      <div class="sc-quote-section-heading">
        <p class="sc-eyebrow">Quotation factors</p>
        <h2 id="quote-factors-heading">What determines the project quotation?</h2>
      </div>
      <dl class="sc-quote-factor-grid">
        <div>
          <dt>Measurement scope</dt>
          <dd>Monitoring target, borehole depth, number of locations, axes, and required accuracy.</dd>
        </div>
        <div>
          <dt>System configuration</dt>
          <dd>Probe or sensor quantity, cable length, readout, data logger, gateway, and accessories.</dd>
        </div>
        <div>
          <dt>Data delivery</dt>
          <dd>Manual collection or automation, sampling frequency, communications, cloud access, and alarms.</dd>
        </div>
        <div>
          <dt>Project delivery</dt>
          <dd>Destination country, documentation, installation support, commissioning, and delivery schedule.</dd>
        </div>
      </dl>
    </section>

    <section class="sc-contact-wrapper">
      <aside class="sc-info-card">
        <p class="sc-eyebrow">Before you submit</p>
        <h2>Details that speed up selection</h2>
        <p>
          For faster matching, include borehole depth, monitoring frequency, communication
          method, and whether the project requires manual surveys or automated monitoring.
        </p>

        <ul class="sc-quote-checklist">
          <li>Project application and monitoring target</li>
          <li>Depth, quantity, range, and accuracy</li>
          <li>Manual or automated data collection</li>
          <li>Destination and required delivery date</li>
        </ul>

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
