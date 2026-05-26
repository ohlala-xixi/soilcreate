<script setup>
import catalog from '../data/products.json'

const hotProducts = catalog.products.filter((product) => product.categoryId === 'inclinometers').slice(0, 3)
</script>

<template>
  <section class="sc-hero">
    <div class="sc-hero-inner">
      <h1>Industrial Precision.<br>Engineered for Extremes.</h1>
      <div class="sc-heading-line"></div>
      <p>From advanced geotechnical monitoring instruments to high-volume industrial pneumatic pumps, SoilCreate delivers robust solutions built for the world's most demanding projects.</p>
      <div class="sc-hero-actions">
        <a href="/products/" class="sc-btn-primary">Explore Products</a>
        <button type="button" class="sc-btn-secondary sc-js-enquiry" data-product="Engineering Consultation">Contact Engineering</button>
      </div>
    </div>
  </section>

  <div class="sc-trust-bar">
    <span>✓ Precision Calibrated</span>
    <span>✓ Global Export Ready</span>
    <span>✓ Custom Integration</span>
    <span>✓ Heavy-Duty Performance</span>
  </div>

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

  <TrustSection />
</template>
