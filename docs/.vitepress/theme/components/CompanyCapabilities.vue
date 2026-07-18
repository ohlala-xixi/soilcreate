<script setup>
import TechnologyStack from './TechnologyStack.vue'
import EngineeringCapability from './EngineeringCapability.vue'

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
  },
  showScaleProof: {
    type: Boolean,
    default: false
  },
  showManufacturerBlock: {
    type: Boolean,
    default: false
  },
  showTechnologyStack: {
    type: Boolean,
    default: false
  },
  showEngineeringCapability: {
    type: Boolean,
    default: false
  },
  primaryActionLabel: {
    type: String,
    default: 'Products'
  },
  primaryActionHref: {
    type: String,
    default: '/products/'
  }
})

const scaleMetrics = [
  { value: '20,000+', label: 'IPI monitoring points in active projects annually' },
  { value: '50,000+', label: 'Flexible inclinometer monitoring points in active projects annually' },
  { value: '5,000+ units', label: 'Sliding inclinometers delivered to date' },
  { value: 'Up to 300 m', label: 'Field-proven borehole monitoring depth' }
]

const projectAreas = [
  {
    title: 'Rail Transit',
    copy: 'Tunnel portals, metro lines, retaining structures, and borehole deformation monitoring.',
    image: '/images/case/rail-transit/rail-transit-hero.jpg',
    href: '/cases/rail-transit'
  },
  {
    title: 'Water & Hydropower',
    copy: 'Dam safety monitoring, reservoir slopes, seepage-linked deformation, and long-term displacement data.',
    image: '/images/case/water-dam/water-dam-hero.jpg',
    href: '/cases/water-dam'
  },
  {
    title: 'Bridge & Tunnel',
    copy: 'Structural response, tunnel convergence, slope movement, and construction-stage risk control.',
    image: '/images/case/bridge-structure/bridge-structure-hero.jpg',
    href: '/cases/bridge-structure'
  },
  {
    title: 'Geohazard & Pipelines',
    copy: 'Landslide movement, pipeline corridor risk, and early-warning monitoring across remote sites.',
    image: '/images/case/slope-landslide/geohazard-pipeline-monitoring.jpg',
    href: '/cases/slope-landslide'
  },
  {
    title: 'Major Energy Projects',
    copy: 'Long-term deep-displacement monitoring for demanding coastal, power, and infrastructure sites.',
    image: '/images/case/major-energy/major-energy-projects.jpg',
    href: '/cases/water-dam'
  },
  {
    title: 'Deep Foundation Pits',
    copy: 'Automated retaining-structure monitoring through the full excavation process.',
    image: '/images/case/deep-foundation-pit/deep-foundation-pit-hero.jpg',
    href: '/cases/deep-foundation-pit'
  }
]

const manufacturerAdvantages = [
  {
    index: '01',
    title: 'Full-Stack In-House R&D',
    copy: 'Sensors, acquisition devices, communications, cloud platform and AI analytics — all five core modules developed in-house. End-to-end control, no black-box dependence.'
  },
  {
    index: '02',
    title: 'World-Leading Accuracy · High-Value Pricing',
    copy: 'SoilCreate delivers world-leading measurement accuracy with practical, high-value pricing for large-scale engineering monitoring projects.'
  },
  {
    index: '03',
    title: 'Monitoring-as-a-Service',
    copy: 'Standardized products plus an integrator ecosystem: we focus on technology R&D while empowering partners to deliver projects rapidly — a win-win division of labor.'
  }
]

const servicePhases = [
  {
    index: '01',
    title: 'Solution Design',
    copy: 'Needs analysis, sensor selection, point layout and system design — aligned with project geology and monitoring codes.'
  },
  {
    index: '02',
    title: 'Equipment Supply',
    copy: 'Standard products from stock with fast response on customization; every unit ships with a QC factory report and calibration certificate.'
  },
  {
    index: '03',
    title: 'Technical Training',
    copy: 'On-site installation guidance, remote technical support and dedicated partner enablement training.'
  },
  {
    index: '04',
    title: 'Ongoing O&M',
    copy: 'Cloud-hosted O&M, remote device-status monitoring, and periodic data-analysis reports.'
  }
]

const serviceMetrics = [
  { value: '48 h', label: 'Standard-Product Shipping' },
  { value: '7×24', label: 'Remote Technical Support' },
  { value: '1 yr+', label: 'Warranty Period' },
  { value: '∞', label: 'Lifetime Cloud Account' }
]
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

        <EngineeringCapability v-if="showEngineeringCapability" />

        <div v-if="showManufacturerBlock" class="sc-manufacturer-block">
          <div class="sc-data-kicker">Capability</div>
          <h3>More Than a Sensor Manufacturer</h3>
          <p>
            We deliver a complete closed loop from front-end sensing to intelligent decision-making.
          </p>

          <div class="sc-manufacturer-grid">
            <article v-for="item in manufacturerAdvantages" :key="item.title" class="sc-manufacturer-card">
              <span>{{ item.index }}</span>
              <h4>{{ item.title }}</h4>
              <p>{{ item.copy }}</p>
            </article>
          </div>
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
            <img src="/images/case/rail-transit/rail-transit-hero.jpg" alt="Rail transit infrastructure project for geotechnical and structural monitoring">
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

        <EngineeringCapability v-if="showEngineeringCapability && !showProfile" />

        <TechnologyStack v-if="showTechnologyStack" />

        <div v-if="showTechnologyStack" class="sc-service-system">
          <div class="sc-data-kicker">Service System</div>
          <h3>Full-Lifecycle Technical Support</h3>
          <p>Four phases of service, from project kickoff through long-term operation and maintenance.</p>

          <div class="sc-service-phase-grid">
            <article v-for="phase in servicePhases" :key="phase.title" class="sc-service-phase-card">
              <span>{{ phase.index }}</span>
              <h4>{{ phase.title }}</h4>
              <p>{{ phase.copy }}</p>
            </article>
          </div>

          <div class="sc-service-metric-grid">
            <article v-for="metric in serviceMetrics" :key="metric.label" class="sc-service-metric-card">
              <strong>{{ metric.value }}</strong>
              <p>{{ metric.label }}</p>
            </article>
          </div>
        </div>

        <div v-if="showScaleProof" class="sc-company-scale">
          <div class="sc-data-kicker">FIELD PERFORMANCE</div>
          <h2>Proven at Scale</h2>
          <p class="sc-data-lede">
            Real-world deployment, not just specifications.
          </p>

          <div class="sc-scale-grid">
            <article v-for="item in scaleMetrics" :key="item.label" class="sc-scale-card">
              <strong>{{ item.value }}</strong>
              <p>{{ item.label }}</p>
            </article>
          </div>

          <div class="sc-project-grid">
            <a
              v-for="project in projectAreas"
              :key="project.title"
              class="sc-project-card"
              :href="project.href"
              :style="{ backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.04), rgba(15, 23, 42, 0.84)), url('${project.image}')` }"
            >
              <div>
                <h3>{{ project.title }}</h3>
                <p>{{ project.copy }}</p>
              </div>
            </a>
          </div>
        </div>

        <div class="sc-company-services-actions">
          <a :href="primaryActionHref" class="sc-company-services-button">{{ primaryActionLabel }}</a>
          <a href="/solutions/" class="sc-company-services-button">Solutions</a>
        </div>
      </div>
    </div>
  </section>
</template>
