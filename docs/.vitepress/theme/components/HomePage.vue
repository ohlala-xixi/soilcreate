<script setup>
import CompanyCapabilities from './CompanyCapabilities.vue'
import catalog from '../data/products.json'

const hotProducts = catalog.products.filter((product) => product.categoryId === 'inclinometers').slice(0, 3)
</script>

<template>
  <section class="sc-hero">
    <div class="sc-hero-inner">
      <h1>Precision Tilt Monitoring</h1>
      <div class="sc-heading-line"></div>
      <p>Reliable data for your most critical projects.</p>
      <div class="sc-hero-actions">
        <a href="/products/" class="sc-btn-primary">Explore Products</a>
        <button type="button" class="sc-btn-secondary sc-js-enquiry" data-product="Engineering Consultation">Contact Engineering</button>
      </div>
    </div>
  </section>

  <div class="sc-trust-bar">
    <span>✓ PRECISION CALIBRATED</span>
    <span>✓ REAL-TIME DATA LOGGING</span>
    <span>✓ SMART SYSTEM INTEGRATION</span>
    <span>✓ IP68 EXTREME DURABILITY</span>
  </div>

  <CompanyCapabilities :show-profile="false" :show-services="false" />

  <section class="sc-categories">
    <div class="sc-section-title">
      <h2>Our Hot Products</h2>
      <div class="sc-heading-line"></div>
    </div>

    <div class="sc-grid">
      <a v-for="product in hotProducts" :key="product.sku" :href="product.href" class="sc-cat-card">
        <div class="sc-cat-img">
          <img :src="product.image" :alt="product.name" loading="lazy" decoding="async">
        </div>
        <div class="sc-cat-content">
          <h3>{{ product.name }}</h3>
          <p>{{ product.summary }}</p>
          <div class="sc-cat-link">View Details ➔</div>
        </div>
      </a>
    </div>

    <div class="sc-explore-wrapper">
      <a href="/products/" class="sc-btn-primary">Explore More</a>
    </div>
  </section>

  <CompanyCapabilities :show-authority="false" :show-profile="false" />

  <TrustSection />
</template>
