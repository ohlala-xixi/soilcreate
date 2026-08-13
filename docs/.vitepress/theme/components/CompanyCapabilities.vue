<script setup>
import { computed } from 'vue'
import TechnologyStack from './TechnologyStack.vue'
import EngineeringCapability from './EngineeringCapability.vue'

const props = defineProps({
  locale: {
    type: String,
    default: 'en'
  },
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

const isSpanish = computed(() => props.locale === 'es')

const copy = computed(() => {
  const casesRoot = '/cases'
  return isSpanish.value
    ? {
        authority: 'El <span class="sc-company-highlight">equipo de I+D</span> especializado en sensores de desplazamiento profundo para monitoreo geotecnico.',
        whoKicker: 'Quienes somos',
        whoTitle: 'Un socio practico de monitoreo para contratistas y distribuidores.',
        whoParagraphs: [
          'SoilCreate ayuda a contratistas geotecnicos, empresas de monitoreo y distribuidores de equipos a construir una linea confiable de inclinometros sin la presion de costo de sistemas importados premium en cada proyecto.',
          'Nos enfocamos en instrumentos listos para campo, documentacion clara, soporte rapido, repuestos y una ruta practica desde lecturas manuales de sondeo hasta monitoreo automatizado con inclinometros fijos.',
          'Para distribuidores, ofrecemos mas que parametros de producto. Ayudamos con material comercial, seleccion de proyectos, capacitacion y opciones OEM o de marca neutra para ganar y apoyar mas proyectos de monitoreo.'
        ],
        learnMore: 'Conocer mas',
        capabilityKicker: 'Capacidad',
        capabilityTitle: 'Mas que un fabricante de sensores',
        capabilityIntro: 'Entregamos un ciclo completo desde la deteccion en campo hasta la toma de decisiones inteligente.',
        profilePoints: [
          {
            title: 'Contratistas geotecnicos',
            copy: 'Si su proyecto necesita monitoreo con inclinometros y el presupuesto no permite sistemas importados premium cada vez, SoilCreate ofrece instrumentos practicos, guia de instalacion y opciones de automatizacion.'
          },
          {
            title: 'Empresas de monitoreo',
            copy: 'Para equipos que pasan de lecturas manuales a monitoreo cloud, apoyamos inclinometros portatiles, cadenas IPI, arreglos flexibles, registradores, reportes y contenido tecnico de obra.'
          },
          {
            title: 'Distribuidores de equipos',
            copy: 'Para socios locales, preparamos paquetes exportables, materiales en ingles, capacitacion, repuestos y opciones OEM o marca neutra para fortalecer su linea de monitoreo.'
          }
        ],
        whatWeDo: 'Que hacemos',
        serviceCards: [
          {
            title: 'I+D de inclinometros<br>y fabricacion personalizada (OEM/ODM)',
            copy: 'Desarrollamos inclinometros y sistemas de sensores de alta precision, con servicios OEM y ODM flexibles para requisitos tecnicos especificos.'
          },
          {
            title: 'Diseno de proyecto, instalacion<br>y guia tecnica',
            copy: 'Ademas del hardware, ofrecemos soporte de ingenieria, diseno de sistemas de monitoreo, instalacion en sitio y guia tecnica dedicada.'
          },
          {
            title: 'Suministro integral<br>de equipos',
            copy: 'Suministramos instrumentos robustos de monitoreo y prueba para que su sitio tenga herramientas confiables de recoleccion de datos geotecnicos.'
          }
        ],
        manufacturerAdvantages: [
          { index: '01', title: 'I+D interna de pila completa', copy: 'Sensores, adquisicion, comunicaciones, plataforma cloud y analitica de IA desarrollados internamente. Control extremo a extremo, sin dependencia de caja negra.' },
          { index: '02', title: 'Alta precision · Valor competitivo', copy: 'SoilCreate entrega precision avanzada con precios practicos para proyectos de monitoreo de ingenieria a gran escala.' },
          { index: '03', title: 'Monitoreo como servicio', copy: 'Productos estandarizados y ecosistema de integradores: nos enfocamos en I+D mientras ayudamos a socios a entregar proyectos rapidamente.' }
        ],
        serviceSystemKicker: 'Sistema de servicio',
        serviceSystemTitle: 'Soporte tecnico de ciclo completo',
        serviceSystemIntro: 'Cuatro fases de servicio, desde el inicio del proyecto hasta operacion y mantenimiento a largo plazo.',
        servicePhases: [
          { index: '01', title: 'Diseno de solucion', copy: 'Analisis de necesidades, seleccion de sensores, distribucion de puntos y diseno del sistema alineado con geologia y codigos de monitoreo.' },
          { index: '02', title: 'Suministro de equipos', copy: 'Productos estandar desde stock con respuesta rapida para personalizacion; cada unidad incluye reporte QC y certificado de calibracion.' },
          { index: '03', title: 'Capacitacion tecnica', copy: 'Guia de instalacion en sitio, soporte remoto y capacitacion dedicada para socios.' },
          { index: '04', title: 'O&M continuo', copy: 'O&M en cloud, monitoreo remoto de estado de dispositivos y reportes periodicos de analisis de datos.' }
        ],
        serviceMetrics: [
          { value: '48 h', label: 'Envio de productos estandar' },
          { value: '7×24', label: 'Soporte tecnico remoto' },
          { value: '1 ano+', label: 'Periodo de garantia' },
          { value: '∞', label: 'Cuenta cloud de por vida' }
        ],
        scaleKicker: 'RENDIMIENTO EN CAMPO',
        scaleTitle: 'Probado a escala',
        scaleIntro: 'Implementacion real, no solo especificaciones.',
        scaleMetrics: [
          { value: '20,000+', label: 'Puntos IPI activos anualmente en proyectos' },
          { value: '50,000+', label: 'Puntos de inclinometro flexible activos anualmente' },
          { value: '5,000+ unidades', label: 'Inclinometros deslizantes entregados hasta la fecha' },
          { value: 'Hasta 300 m', label: 'Profundidad de monitoreo en sondeo comprobada en campo' }
        ],
        projectAreas: [
          { title: 'Transito ferroviario', copy: 'Portales de tunel, lineas de metro, estructuras de contencion y deformacion en sondeos.', image: '/images/case/rail-transit/rail-transit-hero.jpg', href: `${casesRoot}/rail-transit` },
          { title: 'Agua e hidroelectricidad', copy: 'Monitoreo de presas, laderas de embalses, deformacion ligada a filtracion y datos de largo plazo.', image: '/images/case/water-dam/water-dam-hero.jpg', href: `${casesRoot}/water-dam` },
          { title: 'Puentes y tuneles', copy: 'Respuesta estructural, convergencia de tuneles, movimiento de taludes y control de riesgo en construccion.', image: '/images/case/bridge-structure/bridge-structure-hero.jpg', href: `${casesRoot}/bridge-structure` },
          { title: 'Georiesgos y tuberias', copy: 'Movimiento de deslizamientos, riesgo en corredores de tuberias y alerta temprana en sitios remotos.', image: '/images/case/slope-landslide/geohazard-pipeline-monitoring.jpg', href: `${casesRoot}/slope-landslide` },
          { title: 'Grandes proyectos de energia', copy: 'Monitoreo de desplazamiento profundo para sitios costeros, energeticos e infraestructura exigente.', image: '/images/case/major-energy/major-energy-projects.jpg', href: `${casesRoot}/water-dam` },
          { title: 'Excavaciones profundas', copy: 'Monitoreo automatizado de estructuras de contencion durante todo el proceso de excavacion.', image: '/images/case/deep-foundation-pit/deep-foundation-pit-hero.jpg', href: `${casesRoot}/deep-foundation-pit` }
        ],
        solutions: 'Soluciones',
        solutionsHref: '/es/solutions/'
      }
    : {
        authority: 'The <span class="sc-company-highlight">Only R&amp;D Team</span> in China for Globally Leading Deep Horizontal Sensors.',
        whoKicker: 'Who We Are',
        whoTitle: 'A practical monitoring partner for contractors and distributors.',
        whoParagraphs: [
          'SoilCreate helps geotechnical contractors, monitoring service companies, and equipment distributors build a reliable inclinometer product line without the cost pressure of premium imported systems on every project.',
          'We focus on field-ready instruments, clear English documentation, faster support, spare parts, and a practical upgrade path from manual borehole readings to automated in-place monitoring.',
          'For distributors, we provide more than product parameters. We help prepare sales material, project selection guidance, training content, and OEM or neutral-logo options so local partners can win and support more monitoring projects.'
        ],
        learnMore: 'Learn more about us',
        capabilityKicker: 'Capability',
        capabilityTitle: 'More Than a Sensor Manufacturer',
        capabilityIntro: 'We deliver a complete closed loop from front-end sensing to intelligent decision-making.',
        profilePoints: [
          { title: 'Geotechnical Contractors', copy: 'If your project needs inclinometer monitoring but the budget cannot carry premium imported systems every time, SoilCreate gives you practical field instruments, installation guidance, and automated upgrade options.' },
          { title: 'Monitoring Service Companies', copy: 'For teams moving from manual readings to cloud-based monitoring, we support portable inclinometers, IPI chains, flexible arrays, data loggers, reporting workflows, and technical content your engineers can use on site.' },
          { title: 'Equipment Distributors', copy: 'For local partners, we prepare export-ready product packages, English materials, training support, spare parts, and OEM or neutral-logo options to help you build a stronger monitoring product line.' }
        ],
        whatWeDo: 'What We Do',
        serviceCards: [
          { title: 'Inclinometer R&amp;D<br>&amp; Custom Manufacturing (OEM/ODM)', copy: 'We specialize in the proprietary development of high-precision inclinometers and sensor systems, offering flexible OEM and ODM services to meet your specific technical requirements.' },
          { title: 'Project Design, Installation<br>&amp; Technical Guidance', copy: 'Beyond hardware, we provide comprehensive engineering support, optimal monitoring system designs, professional on-site installation, and dedicated technical guidance.' },
          { title: 'Comprehensive<br>Equipment Supply', copy: 'We are a trusted supplier of a full spectrum of robust monitoring and testing instruments, equipping your site with reliable tools for complete geotechnical data collection.' }
        ],
        manufacturerAdvantages: [
          { index: '01', title: 'Full-Stack In-House R&D', copy: 'Sensors, acquisition devices, communications, cloud platform and AI analytics — all five core modules developed in-house. End-to-end control, no black-box dependence.' },
          { index: '02', title: 'World-Leading Accuracy · High-Value Pricing', copy: 'SoilCreate delivers world-leading measurement accuracy with practical, high-value pricing for large-scale engineering monitoring projects.' },
          { index: '03', title: 'Monitoring-as-a-Service', copy: 'Standardized products plus an integrator ecosystem: we focus on technology R&D while empowering partners to deliver projects rapidly — a win-win division of labor.' }
        ],
        serviceSystemKicker: 'Service System',
        serviceSystemTitle: 'Full-Lifecycle Technical Support',
        serviceSystemIntro: 'Four phases of service, from project kickoff through long-term operation and maintenance.',
        servicePhases: [
          { index: '01', title: 'Solution Design', copy: 'Needs analysis, sensor selection, point layout and system design — aligned with project geology and monitoring codes.' },
          { index: '02', title: 'Equipment Supply', copy: 'Standard products from stock with fast response on customization; every unit ships with a QC factory report and calibration certificate.' },
          { index: '03', title: 'Technical Training', copy: 'On-site installation guidance, remote technical support and dedicated partner enablement training.' },
          { index: '04', title: 'Ongoing O&M', copy: 'Cloud-hosted O&M, remote device-status monitoring, and periodic data-analysis reports.' }
        ],
        serviceMetrics: [
          { value: '48 h', label: 'Standard-Product Shipping' },
          { value: '7×24', label: 'Remote Technical Support' },
          { value: '1 yr+', label: 'Warranty Period' },
          { value: '∞', label: 'Lifetime Cloud Account' }
        ],
        scaleKicker: 'FIELD PERFORMANCE',
        scaleTitle: 'Proven at Scale',
        scaleIntro: 'Real-world deployment, not just specifications.',
        scaleMetrics: [
          { value: '20,000+', label: 'IPI monitoring points in active projects annually' },
          { value: '50,000+', label: 'Flexible inclinometer monitoring points in active projects annually' },
          { value: '5,000+ units', label: 'Sliding inclinometers delivered to date' },
          { value: 'Up to 300 m', label: 'Field-proven borehole monitoring depth' }
        ],
        projectAreas: [
          { title: 'Rail Transit', copy: 'Tunnel portals, metro lines, retaining structures, and borehole deformation monitoring.', image: '/images/case/rail-transit/rail-transit-hero.jpg', href: `${casesRoot}/rail-transit` },
          { title: 'Water & Hydropower', copy: 'Dam safety monitoring, reservoir slopes, seepage-linked deformation, and long-term displacement data.', image: '/images/case/water-dam/water-dam-hero.jpg', href: `${casesRoot}/water-dam` },
          { title: 'Bridge & Tunnel', copy: 'Structural response, tunnel convergence, slope movement, and construction-stage risk control.', image: '/images/case/bridge-structure/bridge-structure-hero.jpg', href: `${casesRoot}/bridge-structure` },
          { title: 'Geohazard & Pipelines', copy: 'Landslide movement, pipeline corridor risk, and early-warning monitoring across remote sites.', image: '/images/case/slope-landslide/geohazard-pipeline-monitoring.jpg', href: `${casesRoot}/slope-landslide` },
          { title: 'Major Energy Projects', copy: 'Long-term deep-displacement monitoring for demanding coastal, power, and infrastructure sites.', image: '/images/case/major-energy/major-energy-projects.jpg', href: `${casesRoot}/water-dam` },
          { title: 'Deep Foundation Pits', copy: 'Automated retaining-structure monitoring through the full excavation process.', image: '/images/case/deep-foundation-pit/deep-foundation-pit-hero.jpg', href: `${casesRoot}/deep-foundation-pit` }
        ],
        solutions: 'Solutions',
        solutionsHref: '/solutions/'
      }
})
</script>

<template>
  <section class="sc-company-capabilities">
    <a v-if="showAuthority" href="/about" class="sc-company-authority" aria-label="Learn more about SoilCreate">
      <div class="sc-company-authority-inner">
        <h2 class="sc-company-headline" v-html="copy.authority"></h2>
      </div>
    </a>

    <div v-if="showProfile || showServices" class="sc-company-wrap">
      <div v-if="showProfile" class="sc-company-profile">
        <div class="sc-company-profile-copy">
          <h2 class="sc-company-eyebrow">{{ copy.whoKicker }}</h2>
          <h3>{{ copy.whoTitle }}</h3>

          <p v-for="paragraph in copy.whoParagraphs" :key="paragraph">{{ paragraph }}</p>

          <a v-if="showAuthority" :href="isSpanish ? '/es/about' : '/about'" class="sc-company-profile-link">{{ copy.learnMore }} <span aria-hidden="true">-></span></a>
        </div>

        <EngineeringCapability v-if="showEngineeringCapability" :locale="props.locale" />

        <div v-if="showManufacturerBlock" class="sc-manufacturer-block">
          <div class="sc-data-kicker">{{ copy.capabilityKicker }}</div>
          <h3>{{ copy.capabilityTitle }}</h3>
          <p>
            {{ copy.capabilityIntro }}
          </p>

          <div class="sc-manufacturer-grid">
            <article v-for="item in copy.manufacturerAdvantages" :key="item.title" class="sc-manufacturer-card">
              <span>{{ item.index }}</span>
              <h4>{{ item.title }}</h4>
              <p>{{ item.copy }}</p>
            </article>
          </div>
        </div>

        <div class="sc-company-profile-showcase">
          <div class="sc-company-profile-points">
            <article v-for="(item, index) in copy.profilePoints" :key="item.title">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <h4>{{ item.title }}</h4>
              <p>{{ item.copy }}</p>
            </article>
          </div>

          <div class="sc-company-profile-media">
            <img
              src="/images/case/rail-transit/rail-transit-hero.jpg"
              alt="Rail transit infrastructure project for geotechnical and structural monitoring"
              width="640"
              height="420"
              loading="lazy"
              decoding="async"
            >
          </div>
        </div>
      </div>

      <div v-if="showServices" class="sc-company-services">
        <div class="sc-company-services-heading">
          <h2 class="sc-company-services-title">{{ copy.whatWeDo }}</h2>
          <div class="sc-heading-line"></div>
        </div>

        <div class="sc-company-card-grid">
          <article class="sc-company-card">
            <div class="sc-company-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 v-html="copy.serviceCards[0].title"></h3>
            <p>{{ copy.serviceCards[0].copy }}</p>
          </article>

          <article class="sc-company-card">
            <div class="sc-company-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 v-html="copy.serviceCards[1].title"></h3>
            <p>{{ copy.serviceCards[1].copy }}</p>
          </article>

          <article class="sc-company-card">
            <div class="sc-company-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 v-html="copy.serviceCards[2].title"></h3>
            <p>{{ copy.serviceCards[2].copy }}</p>
          </article>
        </div>

        <EngineeringCapability v-if="showEngineeringCapability && !showProfile" :locale="props.locale" />

        <TechnologyStack v-if="showTechnologyStack" :locale="props.locale" />

        <div v-if="showTechnologyStack" class="sc-service-system">
          <div class="sc-data-kicker">{{ copy.serviceSystemKicker }}</div>
          <h3>{{ copy.serviceSystemTitle }}</h3>
          <p>{{ copy.serviceSystemIntro }}</p>

          <div class="sc-service-phase-grid">
            <article v-for="phase in copy.servicePhases" :key="phase.title" class="sc-service-phase-card">
              <span>{{ phase.index }}</span>
              <h4>{{ phase.title }}</h4>
              <p>{{ phase.copy }}</p>
            </article>
          </div>

          <div class="sc-service-metric-grid">
            <article v-for="metric in copy.serviceMetrics" :key="metric.label" class="sc-service-metric-card">
              <strong>{{ metric.value }}</strong>
              <p>{{ metric.label }}</p>
            </article>
          </div>
        </div>

        <div v-if="showScaleProof" class="sc-company-scale">
          <div class="sc-data-kicker">{{ copy.scaleKicker }}</div>
          <h2>{{ copy.scaleTitle }}</h2>
          <p class="sc-data-lede">
            {{ copy.scaleIntro }}
          </p>

          <div class="sc-scale-grid">
            <article v-for="item in copy.scaleMetrics" :key="item.label" class="sc-scale-card">
              <strong>{{ item.value }}</strong>
              <p>{{ item.label }}</p>
            </article>
          </div>

          <div class="sc-project-grid">
            <a
              v-for="project in copy.projectAreas"
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
          <a :href="copy.solutionsHref" class="sc-company-services-button">{{ copy.solutions }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
