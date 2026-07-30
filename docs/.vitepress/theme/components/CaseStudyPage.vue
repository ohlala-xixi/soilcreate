<script setup>
import { computed, ref } from 'vue'
import { contactEmail, formspreeEndpoint } from '../data/site.js'
import { trackEvent } from '../utils/tracking.js'

const subscriberEmail = ref('')
const subscribing = ref(false)
const subscribeStatus = ref('')
const subscribeStatusType = ref('success')
const activeCategory = ref('all')

const categories = [
  { id: 'inclinometer-basics', label: 'Inclinometer Basics' },
  { id: 'product-guides', label: 'Product Guides' },
  { id: 'installation-troubleshooting', label: 'Installation & Troubleshooting' },
  { id: 'monitoring-applications', label: 'Monitoring Applications' },
  { id: 'data-alarms-risk-warning', label: 'Data, Alarms & Risk Warning' },
  { id: 'automation-monitoring-technology', label: 'Automation & Monitoring Technology' },
  { id: 'distributor-procurement-insights', label: 'Distributor & Procurement Insights' },
  { id: 'solutions-field-notes', label: 'Solutions & Field Notes' }
]

const articles = [
  {
    title: 'Automated Inclinometer Installation Troubleshooting: Common Field Errors and Fixes',
    href: '/solutions/automated-inclinometer-installation-troubleshooting-common-field-errors-and-fixes',
    categoryId: 'installation-troubleshooting',
    category: 'Installation & Troubleshooting',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Field technician checking automated inclinometer installation quality on a geotechnical monitoring site',
    summary: 'A practical troubleshooting guide for installation teams who need cleaner inclinometer data, fewer site returns, and faster commissioning.'
  },
  {
    title: 'Automated Inclinometer Monitoring System: From Sensor Data to Cloud Alarms',
    href: '/solutions/automated-inclinometer-monitoring-system-from-sensor-data-to-cloud-alarms',
    categoryId: 'automation-monitoring-technology',
    category: 'Automation & Monitoring Technology',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Automated inclinometer monitoring system sending sensor data to a cloud alarm platform',
    summary: 'See how sensors, data loggers, telemetry, alarm rules, and cloud dashboards work together in a real monitoring workflow.'
  },
  {
    title: 'Bridge Health Monitoring System: What to Track from Construction to Operation',
    href: '/solutions/bridge-health-monitoring-system-what-to-track-from-construction-to-operation',
    categoryId: 'monitoring-applications',
    category: 'Monitoring Applications',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Bridge health monitoring system with sensors tracking deformation and structural response',
    summary: 'A field-focused guide to bridge monitoring points, sensor choices, alarm logic, and long-term maintenance data.'
  },
  {
    title: 'Dam Safety Monitoring System: How Seepage, Deformation, Rainfall, and Water Level Work Together',
    href: '/solutions/dam-safety-monitoring-system',
    categoryId: 'monitoring-applications',
    category: 'Monitoring Applications',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Dam safety monitoring system combining seepage deformation rainfall and water level data',
    summary: 'A practical look at dam monitoring data streams and how teams use them together instead of reacting to one sensor alone.'
  },
  {
    title: 'Deep Excavation Collapse Case Study: What Monitoring Failure Teaches Contractors',
    href: '/solutions/deep-excavation-collapse-case-study-what-monitoring-failure-teaches-contractors',
    categoryId: 'solutions-field-notes',
    category: 'Solutions & Field Notes',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Infrastructure bridge project representing deep excavation and geotechnical monitoring risk control',
    summary: 'A practical field note on how linked monitoring data, alarm rules, and data quality checks help contractors interpret deep excavation movement before risks escalate.'
  },
  {
    title: 'Deep Excavation Horizontal Displacement Monitoring: Warning Signs Before Failure',
    href: '/solutions/deep-excavation-horizontal-displacement-monitoring-warning-signs',
    categoryId: 'data-alarms-risk-warning',
    category: 'Data, Alarms & Risk Warning',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Deep excavation horizontal displacement monitoring chart showing early warning signs',
    summary: 'Learn what abnormal lateral movement can look like before a deep excavation turns into a site emergency.'
  },
  {
    title: 'Deep Excavation Horizontal Displacement Monitoring with Strut Force, Settlement, and Groundwater',
    href: '/solutions/deep-excavation-horizontal-displacement-monitoring-strut-force-settlement-groundwater',
    categoryId: 'data-alarms-risk-warning',
    category: 'Data, Alarms & Risk Warning',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Deep excavation monitoring dashboard comparing displacement strut force settlement and groundwater',
    summary: 'A guide to reading excavation movement together with strut force, settlement, and groundwater instead of judging one curve in isolation.'
  },
  {
    title: 'Deep Excavation Monitoring Alarm Values: Why Cumulative Movement and Rate Both Matter',
    href: '/solutions/deep-excavation-monitoring-alarm-values-why-cumulative-movement-and-rate-both-matter',
    categoryId: 'data-alarms-risk-warning',
    category: 'Data, Alarms & Risk Warning',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Deep excavation monitoring alarm thresholds comparing cumulative movement and displacement rate',
    summary: 'A clear explanation of how alarm values work and why both total displacement and movement speed matter on site.'
  },
  {
    title: 'Flexible Inclinometer Specification Guide for Geotechnical Monitoring Procurement',
    href: '/solutions/flexible-inclinometer-specification-guide-for-geotechnical-monitoring-procurement',
    categoryId: 'distributor-procurement-insights',
    category: 'Distributor & Procurement Insights',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Flexible inclinometer specification sheet for geotechnical monitoring procurement teams',
    summary: 'A buyer-friendly checklist for accuracy, range, temperature stability, communication, installation, and long-term service.'
  },
  {
    title: 'Flexible Inclinometer vs Traditional Inclinometer',
    href: '/solutions/flexible-inclinometer-vs-traditional-inclinometer',
    categoryId: 'product-guides',
    category: 'Product Guides',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Flexible inclinometer compared with traditional inclinometer casing and probe monitoring',
    summary: 'Compare flexible array systems and traditional inclinometer probes by workflow, risk, labor, data frequency, and life-cycle cost.'
  },
  {
    title: 'Inclinometer Operation and Error Control: A Field Guide for Reliable Readings',
    href: '/solutions/inclinometer-operation-and-error-control-a-field-guide-for-reliable-readings',
    categoryId: 'installation-troubleshooting',
    category: 'Installation & Troubleshooting',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Field engineer controlling inclinometer reading errors during geotechnical monitoring',
    summary: 'A field guide for reducing reading noise, drift, casing issues, operator mistakes, and reporting errors.'
  },
  {
    title: 'Inclinometer Selection Guide: Deep Excavation, Slope, Dam, and Tunnel Projects',
    href: '/solutions/inclinometer-selection-guide-deep-excavation-slope-dam-tunnel',
    categoryId: 'product-guides',
    category: 'Product Guides',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Inclinometer selection guide for excavation slope dam and tunnel monitoring projects',
    summary: 'Choose the right inclinometer setup by project risk, installation conditions, data frequency, and procurement priorities.'
  },
  {
    title: 'Open-Pit Mine Slope Monitoring: How Automation Reduces Inspection Blind Spots',
    href: '/solutions/open-pit-mine-slope-monitoring-how-automation-reduces-inspection-blind-spots',
    categoryId: 'monitoring-applications',
    category: 'Monitoring Applications',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Open-pit mine slope monitoring system reducing inspection blind spots with automated sensors',
    summary: 'A practical monitoring plan for mine slopes where manual inspection alone can miss deep movement and fast-changing risk.'
  },
  {
    title: 'Slope Monitoring System: How Deep Displacement, Rainfall, and Groundwater Work Together',
    href: '/solutions/slope-monitoring-system-how-deep-displacement-rainfall-and-groundwater-work-together',
    categoryId: 'monitoring-applications',
    category: 'Monitoring Applications',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Slope monitoring system combining deep displacement rainfall and groundwater data',
    summary: 'Understand how slope monitoring teams connect movement, rainfall, groundwater, and alarm rules into one risk picture.'
  },
  {
    title: 'SoilCreate Inclinometer Selection Guide for Different Geotechnical Projects',
    href: '/solutions/soilcreate-inclinometer-selection-guide-for-different-geotechnical-projects',
    categoryId: 'distributor-procurement-insights',
    category: 'Distributor & Procurement Insights',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'SoilCreate inclinometer selection guide for contractors distributors and monitoring service companies',
    summary: 'A procurement guide for matching SoilCreate inclinometer options to site risk, budget, installation limits, and service needs.'
  },
  {
    title: 'Tunnel Monitoring System: How to Track Convergence and Rock Mass Stability Over Time',
    href: '/solutions/tunnel-monitoring-system-how-to-track-convergence-and-rock-mass-stability-over-time',
    categoryId: 'monitoring-applications',
    category: 'Monitoring Applications',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Tunnel monitoring system tracking convergence deformation and rock mass stability',
    summary: 'A site-ready guide to tunnel convergence, crown settlement, surrounding rock response, and automated alarm workflows.'
  },
  {
    title: 'What Is a 3D Flexible Displacement Array (SAA)? A Practical Guide',
    href: '/solutions/what-is-a-3d-flexible-displacement-array-saa-a-practical-guide',
    categoryId: 'inclinometer-basics',
    category: 'Inclinometer Basics',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: '3D flexible displacement array SAA used for automated geotechnical deformation monitoring',
    summary: 'A plain-English guide to SAA systems, how they measure shape and displacement, and where they fit in geotechnical monitoring.'
  },
  {
    title: 'What Is a Geotechnical Inclinometer? Types, Uses, and Monitoring Value',
    href: '/solutions/what-is-a-geotechnical-inclinometer-types-uses-monitoring-value',
    categoryId: 'inclinometer-basics',
    category: 'Inclinometer Basics',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'Geotechnical inclinometer types and monitoring value for lateral ground movement',
    summary: 'A simple guide to inclinometer types, common applications, and why lateral movement data matters for project risk control.'
  },
  {
    title: 'What Is an In-Place Inclinometer (IPI)? A Practical Guide for Geotechnical Monitoring',
    href: '/solutions/what-is-an-in-place-inclinometer-ipi-a-practical-guide-for-geotechnical-monitoring',
    categoryId: 'inclinometer-basics',
    category: 'Inclinometer Basics',
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    imageAlt: 'In-place inclinometer IPI installed for continuous geotechnical monitoring',
    summary: 'Learn how IPI systems work, when they beat manual readings, and what buyers should check before procurement.'
  }
]

const categoryCounts = computed(() => {
  const counts = { all: articles.length }
  for (const article of articles) {
    counts[article.categoryId] = (counts[article.categoryId] || 0) + 1
  }
  return counts
})

const filteredArticles = computed(() => {
  if (activeCategory.value === 'all') return articles
  return articles.filter((article) => article.categoryId === activeCategory.value)
})

const setCategory = (categoryId) => {
  activeCategory.value = categoryId
}

const submitSubscribe = async () => {
  subscribing.value = true
  subscribeStatus.value = ''

  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _subject: 'Solutions Subscription',
        subject: 'Solutions Subscription',
        form_name: 'case_study_subscription',
        recipient: contactEmail,
        email: subscriberEmail.value
      })
    })

    if (!response.ok) throw new Error('Subscription failed')

    trackEvent('sign_up', {
      form_name: 'case_study_subscription'
    })
    subscriberEmail.value = ''
    subscribeStatusType.value = 'success'
    subscribeStatus.value = '✓ Subscribed successfully'
  } catch (error) {
    subscribeStatusType.value = 'error'
    subscribeStatus.value = 'Subscription failed. Please try again later.'
  } finally {
    subscribing.value = false
  }
}
</script>


<template>
  <div class="sc-cs-hero">
    <div class="sc-cs-hero-inner">
      <h1>Solutions & Projects</h1>
      <div class="sc-heading-line"></div>
      <p>Explore practical monitoring solutions for deep excavations, slopes, dams, tunnels, and industrial sites. SoilCreate helps contractors and distributors choose reliable, cost-effective instruments that fit real project budgets and field conditions.</p>
      <form class="sc-cs-subscribe" @submit.prevent="submitSubscribe">
        <label for="case-study-subscribe">More project solutions, delivered monthly.</label>
        <div class="sc-cs-subscribe-row">
          <input
            id="case-study-subscribe"
            v-model="subscriberEmail"
            type="email"
            name="email"
            placeholder="Your Business Email"
            autocomplete="email"
            required
          />
          <button type="submit" :disabled="subscribing">
            {{ subscribing ? 'Loading...' : 'Subscribe' }}
          </button>
        </div>
        <p v-if="subscribeStatus" class="sc-cs-subscribe-status" :class="subscribeStatusType">
          {{ subscribeStatus }}
        </p>
      </form>
    </div>
  </div>

  <main class="sc-container sc-news-container">
    <div class="sc-catalog-layout sc-news-layout">
      <aside class="sc-sidebar sc-news-sidebar" aria-label="Solutions categories">
        <div class="sc-sidebar-header">Solutions Categories</div>
        <ul class="sc-category-list">
          <li class="sc-has-submenu">
            <button
              class="sc-category-title"
              :class="{ active: activeCategory === 'all' }"
              type="button"
              @click="setCategory('all')"
            >
              All News ({{ categoryCounts.all }})
            </button>
            <ul class="sc-submenu">
              <li v-for="category in categories" :key="category.id">
                <button
                  class="sc-sub-item"
                  :class="{ active: activeCategory === category.id }"
                  type="button"
                  @click="setCategory(category.id)"
                >
                  {{ category.label }}
                  <span v-if="categoryCounts[category.id]">({{ categoryCounts[category.id] }})</span>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      <section class="sc-product-grid-area sc-news-grid-area">
        <div v-if="filteredArticles.length" class="sc-cs-grid sc-cs-grid--sidebar">
          <a v-for="article in filteredArticles" :key="article.href" :href="article.href" class="sc-cs-card">
            <div class="sc-cs-img">
              <img
                :src="article.image"
                :alt="article.imageAlt"
                width="480"
                height="300"
                loading="lazy"
                decoding="async"
              >
              <span class="sc-cs-tag">{{ article.category }}</span>
            </div>
            <div class="sc-cs-content">
              <h3>{{ article.title }}</h3>
              <p>{{ article.summary }}</p>
              <span class="sc-cs-readmore">Read Article ➔</span>
            </div>
          </a>
        </div>
        <div v-else class="sc-news-empty">
          <h2>Articles coming soon</h2>
          <p>This category is ready for future SEO articles and field notes.</p>
        </div>
      </section>
    </div>
  </main>
</template>
