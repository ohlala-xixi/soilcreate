<script setup>
defineProps({
  showAuthority: {
    type: Boolean,
    default: true
  },
  showProfile: {
    type: Boolean,
    default: true
  },
  showServices: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <section class="sc-company-capabilities">
    <a v-if="showAuthority" href="/about" class="sc-company-authority" aria-label="Learn more about SoilCreate">
      <div class="sc-company-authority-inner">
        <h2 class="sc-company-headline">
          The <span class="sc-company-highlight">Only R&amp;D Team</span> in China for Globally Leading Deep Horizontal Sensors.
        </h2>
      </div>
    </a>

    <div v-if="showProfile || showServices" class="sc-company-wrap">
      <div v-if="showProfile" class="sc-company-profile">
        <div class="sc-company-profile-copy">
          <h2 class="sc-company-eyebrow">Who We Are</h2>
          <h3>A practical monitoring partner for contractors and distributors.</h3>

          <p>
            SoilCreate helps geotechnical contractors, monitoring service companies, and equipment distributors build a reliable inclinometer product line without the cost pressure of premium imported systems on every project.
          </p>

          <p>
            We focus on field-ready instruments, clear English documentation, faster support, spare parts, and a practical upgrade path from manual borehole readings to automated in-place monitoring.
          </p>

          <p>
            For distributors, we provide more than product parameters. We help prepare sales material, project selection guidance, training content, and OEM or neutral-logo options so local partners can win and support more monitoring projects.
          </p>

          <a v-if="showAuthority" href="/about" class="sc-company-profile-link">Learn more about us <span aria-hidden="true">-></span></a>
        </div>

        <div class="sc-company-profile-showcase">
          <div class="sc-company-profile-points">
            <article>
              <span>01</span>
              <h4>Geotechnical Contractors</h4>
              <p>If your project needs inclinometer monitoring but the budget cannot carry premium imported systems every time, SoilCreate gives you practical field instruments, installation guidance, and automated upgrade options.</p>
            </article>

            <article>
              <span>02</span>
              <h4>Monitoring Service Companies</h4>
              <p>For teams moving from manual readings to cloud-based monitoring, we support portable inclinometers, IPI chains, flexible arrays, data loggers, reporting workflows, and technical content your engineers can use on site.</p>
            </article>

            <article>
              <span>03</span>
              <h4>Equipment Distributors</h4>
              <p>For local partners, we prepare export-ready product packages, English materials, training support, spare parts, and OEM or neutral-logo options to help you build a stronger monitoring product line.</p>
            </article>
          </div>

          <div class="sc-company-profile-media">
            <img src="/images/hero/bridge-hero.png" alt="Engineering site for geotechnical monitoring and project support">
          </div>
        </div>
      </div>

      <div v-if="showServices" class="sc-company-services">
        <div class="sc-company-services-heading">
          <h2 class="sc-company-services-title">What We Do</h2>
          <div class="sc-heading-line"></div>
        </div>

        <div class="sc-company-card-grid">
          <article class="sc-company-card">
            <div class="sc-company-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3>Inclinometer R&amp;D<br>&amp; Custom Manufacturing (OEM/ODM)</h3>
            <p>We specialize in the proprietary development of high-precision inclinometers and sensor systems, offering flexible OEM and ODM services to meet your specific technical requirements.</p>
          </article>

          <article class="sc-company-card">
            <div class="sc-company-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3>Project Design, Installation<br>&amp; Technical Guidance</h3>
            <p>Beyond hardware, we provide comprehensive engineering support, optimal monitoring system designs, professional on-site installation, and dedicated technical guidance.</p>
          </article>

          <article class="sc-company-card">
            <div class="sc-company-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3>Comprehensive<br>Equipment Supply</h3>
            <p>We are a trusted supplier of a full spectrum of robust monitoring and testing instruments, equipping your site with reliable tools for complete geotechnical data collection.</p>
          </article>
        </div>

        <div class="sc-company-services-actions">
          <a href="/products/" class="sc-company-services-button">Products</a>
          <a href="/case-study" class="sc-company-services-button">Solutions</a>
        </div>
      </div>
    </div>
  </section>
</template>
