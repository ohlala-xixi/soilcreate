<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import CompanyCapabilities from './CompanyCapabilities.vue'
import HomeDataSections from './HomeDataSections.vue'
import catalog from '../data/products.json'
import { spanishFeaturedProducts } from '../data/spanish.js'

const props = defineProps({
  locale: {
    type: String,
    default: 'en'
  }
})

const isSpanish = computed(() => props.locale === 'es')

const englishHeroSlides = [
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

const spanishHeroSlides = [
  {
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    alt: 'Puente monitoreado con sistemas de inclinometro SoilCreate',
    title: 'Su especialista en inclinometros para monitoreo profundo del terreno'
  },
  {
    image: '/images/home/soilcreate-monitoring-instruments-hero.jpg',
    alt: 'Instrumentos SoilCreate de monitoreo geotecnico y adquisicion de datos',
    title: '5 CATEGORIAS · 30+ MODELOS DE SENSORES · CLOUD-EDGE-DEVICE'
  }
]

const copy = computed(() => isSpanish.value
  ? {
      previousHero: 'Mostrar imagen anterior',
      nextHero: 'Mostrar imagen siguiente',
      productsCta: 'Explorar productos',
      engineeringCta: 'Contactar ingenieria',
      consultationProduct: 'Consulta de ingenieria',
      trust: ['✓ PRECISION CALIBRADA', '✓ REGISTRO DE DATOS EN TIEMPO REAL', '✓ INTEGRACION INTELIGENTE', '✓ DURABILIDAD EXTREMA IP68'],
      hotProducts: 'Productos principales',
      viewDetails: 'Ver detalles ➔',
      exploreMore: 'Explorar mas',
      primaryActionLabel: 'Cases',
      primaryActionHref: '/es/cases'
    }
  : {
      previousHero: 'Show previous hero image',
      nextHero: 'Show next hero image',
      productsCta: 'Explore Products',
      engineeringCta: 'Contact Engineering',
      consultationProduct: 'Engineering Consultation',
      trust: ['✓ PRECISION CALIBRATED', '✓ REAL-TIME DATA LOGGING', '✓ SMART SYSTEM INTEGRATION', '✓ IP68 EXTREME DURABILITY'],
      hotProducts: 'Our Hot Products',
      viewDetails: 'View Details ➔',
      exploreMore: 'Explore More',
      primaryActionLabel: 'Cases',
      primaryActionHref: '/cases'
    })

const heroSlides = computed(() => isSpanish.value ? spanishHeroSlides : englishHeroSlides)
const activeHeroSlide = ref(0)
let heroTimer

const currentHeroSlide = computed(() => heroSlides.value[activeHeroSlide.value])

const moveHeroSlide = (step) => {
  activeHeroSlide.value = (activeHeroSlide.value + step + heroSlides.value.length) % heroSlides.value.length
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

const localizedHotProducts = computed(() => {
  if (!isSpanish.value) return hotProducts
  return spanishFeaturedProducts.map((product) => ({
    ...product,
    useLabel: {
      'sliding-inclinometer': 'Ideal para mediciones manuales en sondeos',
      'in-place-inclinometer': 'Ideal para monitoreo automatizado 24/7',
      'shape-array': 'Ideal para monitoreo profundo de deformacion 3D'
    }[product.subcategoryId]
  }))
})
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
      :aria-label="copy.previousHero"
      @click="moveHeroSlide(-1)"
    >
      ‹
    </button>
    <button
      type="button"
      class="sc-hero-arrow sc-hero-arrow--next"
      :aria-label="copy.nextHero"
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
        <a :href="isSpanish ? '/es/products/' : '/products/'" class="sc-btn-primary">{{ copy.productsCta }}</a>
        <button type="button" class="sc-btn-secondary sc-js-enquiry" :data-product="copy.consultationProduct">{{ copy.engineeringCta }}</button>
      </div>
    </div>
  </section>

  <div class="sc-trust-bar">
    <span v-for="item in copy.trust" :key="item">{{ item }}</span>
  </div>

  <CompanyCapabilities class="sc-home-authority-block" :locale="props.locale" :show-profile="false" :show-services="false" />

  <section class="sc-categories">
    <div class="sc-section-title">
      <h2>{{ copy.hotProducts }}</h2>
      <div class="sc-heading-line"></div>
    </div>

    <div class="sc-grid">
      <a v-for="product in localizedHotProducts" :key="product.sku" :href="product.href" class="sc-cat-card">
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
          <div class="sc-cat-link">{{ copy.viewDetails }}</div>
        </div>
      </a>
    </div>

    <div class="sc-explore-wrapper">
      <a :href="isSpanish ? '/es/products/' : '/products/'" class="sc-btn-primary">{{ copy.exploreMore }}</a>
    </div>
  </section>

  <CompanyCapabilities
    class="sc-home-work-block"
    :show-authority="false"
    :show-profile="false"
    :show-scale-proof="true"
    :show-engineering-capability="true"
    :primary-action-label="copy.primaryActionLabel"
    :primary-action-href="copy.primaryActionHref"
    :locale="props.locale"
  />

  <TrustSection :locale="props.locale" />

  <HomeDataSections :locale="props.locale" />
</template>
