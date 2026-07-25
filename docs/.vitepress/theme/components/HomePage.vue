<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import CompanyCapabilities from './CompanyCapabilities.vue'
import HomeDataSections from './HomeDataSections.vue'
import catalog from '../data/products.json'

const heroSlides = [
  {
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    alt: 'Bridge infrastructure monitored with SoilCreate inclinometer systems',
    title: 'Your Inclinometer Specialist for Deep Ground Movement Monitoring'
  },
  {
    image: '/images/home/soilcreate-monitoring-instruments-hero.jpg',
    alt: 'SoilCreate geotechnical monitoring instruments and data acquisition systems',
    title: '5 CATEGORIES · 30+ SENSOR MODELS · CLOUD-EDGE-DEVICE'
  }
]

const activeHeroSlide = ref(0)
let heroTimer

const currentHeroSlide = computed(() => heroSlides[activeHeroSlide.value])

const moveHeroSlide = (step) => {
  activeHeroSlide.value = (activeHeroSlide.value + step + heroSlides.length) % heroSlides.length
}

onMounted(() => {
  heroTimer = window.setInterval(() => {
    moveHeroSlide(1)
  }, 6500)
})

onBeforeUnmount(() => {
  if (heroTimer) window.clearInterval(heroTimer)
})

const hotProducts = catalog.products
  .filter((product) => ['in-place-inclinometer', 'shape-array', 'sliding-inclinometer'].includes(product.subcategoryId))
  .slice(0, 3)
  .map((product) => ({
    ...product,
    useLabel: {
      'sliding-inclinometer': 'Ideal for Manual Borehole Surveys',
      'in-place-inclinometer': 'Ideal for 24/7 Automated Monitoring',
      'shape-array': 'Ideal for Deep 3D Deformation Monitoring'
    }[product.subcategoryId]
  }))
</script>

<template>
  <section
    class="sc-hero"
    :style="{ '--sc-hero-image': `url('${currentHeroSlide.image}')` }"
    :aria-label="currentHeroSlide.alt"
  >
    <button
      type="button"
      class="sc-hero-arrow sc-hero-arrow--prev"
      aria-label="Show previous hero image"
      @click="moveHeroSlide(-1)"
    >
      ‹
    </button>
    <button
      type="button"
      class="sc-hero-arrow sc-hero-arrow--next"
      aria-label="Show next hero image"
      @click="moveHeroSlide(1)"
    >
      ›
    </button>

    <div class="sc-hero-inner">
      <h1>
        <span>{{ currentHeroSlide.title }}</span>
      </h1>
      <div class="sc-heading-line"></div>
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

  <CompanyCapabilities class="sc-home-authority-block" :show-profile="false" :show-services="false" />

  <section class="sc-categories">
    <div class="sc-section-title">
      <h2>Our Hot Products</h2>
      <div class="sc-heading-line"></div>
    </div>

    <div class="sc-grid">
      <a v-for="product in hotProducts" :key="product.sku" :href="product.href" class="sc-cat-card">
        <div class="sc-cat-img">
          <img
            :src="product.image"
            :alt="product.imageAlt || product.name"
            width="480"
            height="320"
            loading="lazy"
            decoding="async"
          >
        </div>
        <div class="sc-cat-content">
          <h3>{{ product.name }}</h3>
          <p>{{ product.summary }}</p>
          <span class="sc-cat-use-label">
            <span class="sc-cat-use-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M12 2.5 20 5.8v5.7c0 4.6-3.1 8.4-8 10-4.9-1.6-8-5.4-8-10V5.8L12 2.5Z" />
                <path d="m8.2 12.1 2.4 2.4 5.2-5.1" />
              </svg>
            </span>
            <span>{{ product.useLabel }}</span>
          </span>
          <div class="sc-cat-link">View Details ➔</div>
        </div>
      </a>
    </div>

    <div class="sc-explore-wrapper">
      <a href="/products/" class="sc-btn-primary">Explore More</a>
    </div>
  </section>

  <CompanyCapabilities
    class="sc-home-work-block"
    :show-authority="false"
    :show-profile="false"
    :show-scale-proof="true"
    :show-engineering-capability="true"
    primary-action-label="Cases"
    primary-action-href="/cases"
  />

  <TrustSection />

  <HomeDataSections />
</template>
