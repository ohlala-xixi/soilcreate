<script setup>
import CompanyCapabilities from './CompanyCapabilities.vue'
</script>

<template>
  <section class="sc-about-hero">
    <div class="sc-hero-content">
      <h1>Better-Fit Monitoring<br>for Real Projects</h1>
      <div class="sc-heading-line"></div>
      <p>We help contractors and distributors choose the right inclinometer and monitoring products for each site. The goal is simple: reliable field data, practical support, and a cost-effective solution that makes sense for the project budget.</p>
    </div>
  </section>

  <CompanyCapabilities :show-authority="false" />

  <TrustSection />
</template>
