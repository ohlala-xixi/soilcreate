<script setup>
import { computed } from 'vue'
import CompanyCapabilities from './CompanyCapabilities.vue'
import HomeDataSections from './HomeDataSections.vue'

const props = defineProps({
  locale: {
    type: String,
    default: 'en'
  }
})

const isSpanish = computed(() => props.locale === 'es')
const copy = computed(() => isSpanish.value
  ? {
      title: 'Monitoreo mejor ajustado para proyectos reales',
      intro: 'Ayudamos a contratistas y distribuidores a elegir el inclinometro y los productos de monitoreo adecuados para cada sitio. El objetivo es simple: datos de campo confiables, soporte practico y una solucion rentable para el presupuesto del proyecto.'
    }
  : {
      title: 'Better-Fit Monitoring<br>for Real Projects',
      intro: 'We help contractors and distributors choose the right inclinometer and monitoring products for each site. The goal is simple: reliable field data, practical support, and a cost-effective solution that makes sense for the project budget.'
    })
</script>

<template>
  <section class="sc-about-hero">
    <div class="sc-hero-content">
      <h1 v-html="copy.title"></h1>
      <div class="sc-heading-line"></div>
      <p>{{ copy.intro }}</p>
    </div>
  </section>

  <CompanyCapabilities
    :locale="props.locale"
    :show-authority="false"
    :show-manufacturer-block="true"
    :show-technology-stack="true"
    :show-engineering-capability="true"
  />

  <TrustSection :locale="props.locale" />

  <HomeDataSections :locale="props.locale" :show-cta="false" />
</template>
