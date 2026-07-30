<script setup>
import { computed } from 'vue'
import InquiryForm from './InquiryForm.vue'
import TechnologyStack from './TechnologyStack.vue'
import catalog from '../data/products.json'
import { importedProducts } from '../data/importedProducts.js'
import { rasberProductPages } from '../data/rasberProductPages.js'

const props = defineProps({
  product: {
    type: String,
    required: true
  }
})

const item = computed(() => importedProducts[props.product])
const rawHtml = computed(() => rasberProductPages[props.product] || '')
const dataChainSectionPattern =
  /<!-- ====== CLOUD-EDGE-DEVICE DATA CHAIN ====== -->\n<section>[\s\S]*?<div class="arch-banner reveal">FULL-CHAIN IN-HOUSE R&amp;D&nbsp;&nbsp;\|&nbsp;&nbsp;NO BLACK-BOX DEPENDENCE&nbsp;&nbsp;\|&nbsp;&nbsp;FULL DATA SOVEREIGNTY<\/div>\n  <\/div>\n<\/section>\n/
const usesSharedTechnologyStack = computed(
  () => props.product === 'data-acquisition-monitoring-cloud' && dataChainSectionPattern.test(rawHtml.value)
)
const rawHtmlBeforeTechnologyStack = computed(() => {
  if (!usesSharedTechnologyStack.value) return rawHtml.value
  return rawHtml.value.split(dataChainSectionPattern)[0] || rawHtml.value
})
const rawHtmlAfterTechnologyStack = computed(() => {
  if (!usesSharedTechnologyStack.value) return ''
  const parts = rawHtml.value.split(dataChainSectionPattern)
  return parts.length > 1 ? parts.slice(1).join('') : ''
})
const productByHref = computed(() => Object.fromEntries(catalog.products.map((product) => [product.href, product])))
const currentHrefByKey = {
  'sliding-inclinometer': '/products/deformation-monitoring/sliding-inclinometer',
  'in-place-inclinometer': '/products/deformation-monitoring/in-place-inclinometer',
  'flexible-inclinometer': '/products/deformation-monitoring/flexible-inclinometer',
  'gnss-monitoring-system': '/products/deformation-monitoring/gnss-monitoring-system',
  'hydrostatic-level-gauge': '/products/settlement-tilt-monitoring/hydrostatic-level-gauge',
  'tiltmeter-series': '/products/settlement-tilt-monitoring/tiltmeter-series',
  'wireless-tilt-vibration': '/products/settlement-tilt-monitoring/wireless-tilt-vibration',
  'vibrating-wire-sensors': '/products/stress-environment-monitoring/vibrating-wire-sensors',
  'data-acquisition-monitoring-cloud': '/products/data-acquisition/data-acquisition-monitoring-cloud'
}

const defaultRelatedCases = {
  deformation: [
    {
      title: 'Deep Foundation Pit Monitoring Cases',
      href: '/cases/deep-foundation-pit',
      category: 'Industry Cases',
      image: '/images/case/deep-foundation-pit/deep-foundation-pit-hero.jpg',
      summary: 'Deep excavation monitoring workflows with displacement, support force, groundwater, and alarms.'
    },
    {
      title: 'Slope and Landslide Monitoring Cases',
      href: '/cases/slope-landslide',
      category: 'Industry Cases',
      image: '/images/case/slope-landslide/geohazard-pipeline-monitoring.jpg',
      summary: 'Deep movement, rainfall, groundwater, and GNSS data for slope risk warning.'
    }
  ],
  settlement: [
    {
      title: 'Deep Foundation Pit Monitoring Cases',
      href: '/cases/deep-foundation-pit',
      category: 'Industry Cases',
      image: '/images/case/deep-foundation-pit/deep-foundation-pit-hero.jpg',
      summary: 'Settlement, displacement, support-force, groundwater, and cloud alarm workflows.'
    },
    {
      title: 'Rail Transit Monitoring Cases',
      href: '/cases/rail-transit',
      category: 'Industry Cases',
      image: '/images/case/rail-transit/rail-transit-hero.jpg',
      summary: 'Metro station and tunnel monitoring across construction and operation stages.'
    }
  ],
  stress: [
    {
      title: 'Water Conservancy and Dam Monitoring Cases',
      href: '/cases/water-dam',
      category: 'Industry Cases',
      image: '/images/case/water-dam/water-dam-hero.jpg',
      summary: 'Long-term deformation, seepage, settlement, and dam-safety monitoring workflows.'
    },
    {
      title: 'Deep Foundation Pit Monitoring Cases',
      href: '/cases/deep-foundation-pit',
      category: 'Industry Cases',
      image: '/images/case/deep-foundation-pit/deep-foundation-pit-hero.jpg',
      summary: 'Integrated excavation monitoring with displacement, force, groundwater, and warnings.'
    }
  ],
  data: [
    {
      title: 'Deep Foundation Pit Monitoring Cases',
      href: '/cases/deep-foundation-pit',
      category: 'Industry Cases',
      image: '/images/case/deep-foundation-pit/deep-foundation-pit-hero.jpg',
      summary: 'Integrated monitoring workflows using sensors, gateways, and cloud alarms.'
    },
    {
      title: 'Slope and Landslide Monitoring Cases',
      href: '/cases/slope-landslide',
      category: 'Industry Cases',
      image: '/images/case/slope-landslide/geohazard-pipeline-monitoring.jpg',
      summary: 'Slope monitoring with deformation, rainfall, groundwater, GNSS, and warnings.'
    }
  ]
}

const defaultRelatedSolutions = {
  deformation: [
    {
      title: 'Inclinometer Selection Guide',
      href: '/solutions/inclinometer-selection-guide-deep-excavation-slope-dam-tunnel',
      category: 'Product Guide',
      image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
      summary: 'Choose the right inclinometer setup by project risk, installation conditions, and data frequency.'
    },
    {
      title: 'Tunnel Monitoring System',
      href: '/solutions/tunnel-monitoring-system-how-to-track-convergence-and-rock-mass-stability-over-time',
      category: 'Monitoring Application',
      image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
      summary: 'Track tunnel convergence, crown settlement, rock mass response, and automated alarms.'
    }
  ],
  settlement: [
    {
      title: 'Bridge Health Monitoring System',
      href: '/solutions/bridge-health-monitoring-system-what-to-track-from-construction-to-operation',
      category: 'Monitoring Application',
      image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
      summary: 'Bridge monitoring points, sensor choices, alarm logic, and long-term maintenance data.'
    },
    {
      title: 'Tunnel Monitoring System',
      href: '/solutions/tunnel-monitoring-system-how-to-track-convergence-and-rock-mass-stability-over-time',
      category: 'Monitoring Application',
      image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
      summary: 'Convergence, settlement, deformation, and alarm workflows for tunnel projects.'
    }
  ],
  stress: [
    {
      title: 'Dam Safety Monitoring System',
      href: '/solutions/dam-safety-monitoring-system',
      category: 'Monitoring Application',
      image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
      summary: 'How seepage, deformation, rainfall, and water level data work together in dam monitoring.'
    },
    {
      title: 'Deep Excavation Monitoring with Strut Force and Groundwater',
      href: '/solutions/deep-excavation-horizontal-displacement-monitoring-strut-force-settlement-groundwater',
      category: 'Data & Alarms',
      image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
      summary: 'Read excavation movement together with strut force, settlement, and groundwater data.'
    }
  ],
  data: [
    {
      title: 'Automated Inclinometer Monitoring System',
      href: '/solutions/automated-inclinometer-monitoring-system-from-sensor-data-to-cloud-alarms',
      category: 'Automation & Monitoring Technology',
      image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
      summary: 'How sensors, data loggers, telemetry, alarm rules, and cloud dashboards work together.'
    },
    {
      title: 'Deep Excavation Monitoring Alarm Values',
      href: '/solutions/deep-excavation-monitoring-alarm-values-why-cumulative-movement-and-rate-both-matter',
      category: 'Data & Alarms',
      image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
      summary: 'Why cumulative movement and rate both matter in monitoring alarm values.'
    },
    {
      title: 'Open-Pit Mine Slope Monitoring',
      href: '/solutions/open-pit-mine-slope-monitoring-how-automation-reduces-inspection-blind-spots',
      category: 'Monitoring Application',
      image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
      summary: 'Automation reduces inspection blind spots in slope and mine monitoring.'
    },
    {
      title: 'Solutions',
      href: '/solutions/',
      category: 'Solutions',
      image: '/images/case/deep-foundation-pit/deep-foundation-pit-hero.jpg',
      summary: 'Practical SoilCreate monitoring solutions for critical projects.'
    }
  ]
}

const downloads = computed(() => {
  if (item.value?.downloads?.length) return item.value.downloads
  return [
    {
      name: `${item.value.title} Product Information`,
      meta: 'PDF | Selection manual',
      link: '/specs/monitoring-product-selection-manual.pdf'
    }
  ]
})

const relatedProducts = computed(() =>
  (item.value?.relatedProducts?.length
    ? item.value.relatedProducts.map((href) => productByHref.value[href]).filter(Boolean)
    : catalog.products.filter((product) => {
        const currentHref = currentHrefByKey[props.product]
        return product.href !== currentHref && product.category === item.value.category
      })
  ).slice(0, 4)
)

const relatedSolutions = computed(() => {
  if (item.value?.relatedSolutions?.length) return item.value.relatedSolutions.slice(0, 4)
  if (item.value.category === 'Deformation Monitoring') return defaultRelatedSolutions.deformation
  if (item.value.category === 'Settlement & Tilt Monitoring') return defaultRelatedSolutions.settlement
  if (item.value.category === 'Stress & Environment Monitoring') return defaultRelatedSolutions.stress
  return defaultRelatedSolutions.data
})

const relatedCases = computed(() => {
  if (item.value?.relatedCases?.length) return item.value.relatedCases.slice(0, 4)
  if (item.value.category === 'Deformation Monitoring') return defaultRelatedCases.deformation
  if (item.value.category === 'Settlement & Tilt Monitoring') return defaultRelatedCases.settlement
  if (item.value.category === 'Stress & Environment Monitoring') return defaultRelatedCases.stress
  return defaultRelatedCases.data
})
</script>

<template>
  <main v-if="item" class="sc-rasber-product-page">
    <div class="sc-rasber-shell">
      <div v-html="rawHtmlBeforeTechnologyStack"></div>
      <section v-if="usesSharedTechnologyStack" class="sc-rasber-tech-section">
        <div class="container">
          <TechnologyStack />
        </div>
      </section>
      <div v-if="usesSharedTechnologyStack" v-html="rawHtmlAfterTechnologyStack"></div>
    </div>

    <div class="sc-container sc-pdp-page sc-rasber-soilcreate-tail">
      <section v-if="downloads.length" class="sc-section" id="downloads">
        <h2 class="sc-section-title">Downloads & Resources</h2>
        <div class="sc-downloads-row">
          <a
            v-for="download in downloads"
            :key="download.link"
            :href="download.link"
            class="sc-download-card"
            download
          >
            <span class="sc-download-icon">📄</span>
            <div>
              <div class="sc-download-title">{{ download.name }}</div>
              <div class="sc-download-meta">{{ download.meta || 'PDF | Technical file' }}</div>
            </div>
          </a>
        </div>
      </section>

      <section v-if="relatedProducts.length" class="sc-section">
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

      <section v-if="relatedCases.length" class="sc-section">
        <h2 class="sc-section-title">Applications &amp; Case Studies</h2>
        <div class="sc-related-grid sc-case-related-grid">
          <a v-for="solution in relatedCases" :key="solution.href" :href="solution.href" class="sc-related-card sc-case-related-card">
            <div class="sc-related-img sc-case-related-img">
              <img v-if="solution.image" :src="solution.image" :alt="solution.imageAlt || solution.title" width="480" height="300" loading="lazy" decoding="async" />
              <span v-else>{{ solution.category || 'Cases' }}</span>
            </div>
            <div class="sc-related-title">{{ solution.title }}</div>
            <div class="sc-related-sku">{{ solution.summary }}</div>
          </a>
        </div>
      </section>

      <section v-if="relatedSolutions.length" class="sc-section">
        <h2 class="sc-section-title">Related Solutions</h2>
        <div class="sc-related-grid sc-case-related-grid">
          <a v-for="solution in relatedSolutions" :key="solution.href" :href="solution.href" class="sc-related-card sc-case-related-card">
            <div class="sc-related-img sc-case-related-img">
              <img v-if="solution.image" :src="solution.image" :alt="solution.imageAlt || solution.title" width="480" height="300" loading="lazy" decoding="async" />
              <span v-else>{{ solution.category || 'Solution' }}</span>
            </div>
            <div class="sc-related-title">{{ solution.title }}</div>
            <div class="sc-related-sku">{{ solution.summary }}</div>
          </a>
        </div>
      </section>

      <section class="sc-section" id="quote-form">
        <InquiryForm :product-name="item.title" />
      </section>

      <div class="sc-pdp-bottom-actions">
        <a href="/products/" class="sc-btn-secondary sc-btn-catalog">Back to Product Catalog</a>
      </div>
    </div>
  </main>
</template>
