<script setup>
import { computed } from 'vue'
import { importedCases } from '../data/importedCases.js'
import catalog from '../data/products.json'
import InquiryForm from './InquiryForm.vue'

const props = defineProps({
  page: {
    type: String,
    required: true
  }
})

const sourceHtml = computed(() => importedCases[props.page] || importedCases.index || '')
const ctaSection = computed(() => {
  const match = sourceHtml.value.match(/<section>\s*<div class="container">\s*<div class="cta-band[\s\S]*?<\/section>\s*<\/div>\s*$/)
  return match ? match[0].replace(/<\/div>\s*$/, '') : ''
})
const html = computed(() => {
  if (!ctaSection.value) return sourceHtml.value
  return sourceHtml.value.replace(ctaSection.value, '').replace(/<\/div>\s*$/, '')
})
const productsByHref = computed(() => Object.fromEntries(catalog.products.map((product) => [product.href, product])))
const relatedProductMap = {
  'deep-foundation-pit': [
    '/products/deformation-monitoring/in-place-inclinometer',
    '/products/deformation-monitoring/sliding-inclinometer',
    '/products/settlement-tilt-monitoring/hydrostatic-level-gauge',
    '/products/stress-environment-monitoring/vibrating-wire-sensors'
  ],
  'slope-landslide': [
    '/products/deformation-monitoring/gnss-monitoring-system',
    '/products/deformation-monitoring/in-place-inclinometer',
    '/products/deformation-monitoring/flexible-inclinometer',
    '/products/data-acquisition/data-acquisition-monitoring-cloud'
  ],
  'tunnel-convergence': [
    '/products/deformation-monitoring/flexible-inclinometer',
    '/products/settlement-tilt-monitoring/wireless-tilt-vibration',
    '/products/deformation-monitoring/in-place-inclinometer',
    '/products/data-acquisition/data-acquisition-monitoring-cloud'
  ],
  'water-dam': [
    '/products/stress-environment-monitoring/vibrating-wire-sensors',
    '/products/deformation-monitoring/gnss-monitoring-system',
    '/products/deformation-monitoring/flexible-inclinometer',
    '/products/settlement-tilt-monitoring/hydrostatic-level-gauge'
  ],
  'rail-transit': [
    '/products/deformation-monitoring/in-place-inclinometer',
    '/products/deformation-monitoring/sliding-inclinometer',
    '/products/settlement-tilt-monitoring/hydrostatic-level-gauge',
    '/products/data-acquisition/data-acquisition-monitoring-cloud'
  ],
  'bridge-structure': [
    '/products/settlement-tilt-monitoring/tiltmeter-series',
    '/products/settlement-tilt-monitoring/wireless-tilt-vibration',
    '/products/deformation-monitoring/gnss-monitoring-system',
    '/products/data-acquisition/data-acquisition-monitoring-cloud'
  ]
}
const relatedProducts = computed(() =>
  (relatedProductMap[props.page] || [])
    .map((href) => productsByHref.value[href])
    .filter(Boolean)
    .slice(0, 4)
)
</script>

<template>
  <div>
    <div v-html="html"></div>
    <section v-if="relatedProducts.length" class="sc-container sc-case-product-links">
      <h2 class="sc-section-title">Related Products</h2>
      <div class="sc-related-grid">
        <a v-for="product in relatedProducts" :key="product.href" :href="product.href" class="sc-related-card">
          <div class="sc-related-img">
            <img :src="product.image" :alt="product.imageAlt || product.name" width="480" height="300" loading="lazy" decoding="async" />
          </div>
          <div class="sc-related-title">{{ product.name }}</div>
          <div class="sc-related-sku">{{ product.sku }}</div>
        </a>
      </div>
    </section>
    <section class="sc-container sc-case-inquiry-section" id="quote-form">
      <InquiryForm />
    </section>
  </div>
</template>
