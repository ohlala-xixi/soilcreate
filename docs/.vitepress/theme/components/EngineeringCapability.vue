<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  locale: {
    type: String,
    default: 'en'
  }
})

const activeSlide = ref(0)
let rotationTimer

const slides = [
  {
    src: '/images/about/company-capability/patent-certificates.png',
    alt: 'SoilCreate patent certificates and software copyright certificates',
    fit: 'contain'
  },
  {
    src: '/images/case/rail-transit/rail-transit-hero.jpg',
    alt: 'Rail transit monitoring project supported by SoilCreate'
  },
  {
    src: '/images/case/water-dam/water-dam-hero.jpg',
    alt: 'Water and dam monitoring project supported by SoilCreate'
  }
]

const fieldImages = [
  {
    src: '/images/case/deep-foundation-pit/deep-foundation-pit-hero.jpg',
    alt: 'Deep foundation pit monitoring project'
  },
  {
    src: '/images/case/slope-landslide/geohazard-pipeline-monitoring.jpg',
    alt: 'Remote slope and geohazard monitoring project'
  },
  {
    src: '/images/products/gnss-monitoring-system/gnss-station-solar.jpg',
    alt: 'Solar-powered GNSS monitoring station in the field'
  }
]

const currentSlide = computed(() => slides[activeSlide.value])

const copy = computed(() => {
  return props.locale === 'es'
    ? {
        title: 'Capacidad de empresa e ingenieria',
        subtitle: 'Basado en proyectos reales, experiencia de ingenieria y monitoreo comprobado.',
        carouselPrevious: 'Mostrar imagen anterior de capacidad',
        carouselNext: 'Mostrar siguiente imagen de capacidad',
        galleryLabel: 'Galeria de imagenes de capacidad',
        galleryItem: 'Mostrar imagen de capacidad',
        intro:
          'SoilCreate se enfoca en soluciones de inclinometros, soporte de ingenieria, despliegue en campo y confiabilidad del producto. Entregamos servicios de extremo a extremo, desde el diseno y la integracion del sistema hasta la instalacion y operacion a largo plazo, ayudando a los clientes a construir sistemas de monitoreo mas seguros, inteligentes y eficientes.',
        proof: [
          '2016 Fundada',
          '500+ Socios',
          '200+ Patentes y derechos de software',
          '70,000+ Puntos de monitoreo anuales'
        ],
        note: 'Estos logros se basan en implementacion real de ingenieria y experiencia de monitoreo a largo plazo.',
        credentialsLabel: 'Capacidades de ingenieria',
        credentials: [
          ['ISO', '9001'],
          ['Estandar', 'militar'],
          ['Acreditacion', 'CNAS'],
          ['Control', 'independiente']
        ]
      }
    : {
        title: 'Company & Engineering Capability',
        subtitle: 'Built on real projects, engineering expertise, and proven monitoring experience.',
        carouselPrevious: 'Show previous capability image',
        carouselNext: 'Show next capability image',
        galleryLabel: 'Capability image gallery',
        galleryItem: 'Show capability image',
        intro:
          'SoilCreate is focused on inclinometer solutions, engineering support, field deployment, and product reliability. We deliver end-to-end services from design and system integration to installation and long-term operation, helping clients build safer, smarter, and more efficient monitoring systems.',
        proof: [
          '2016 Founded',
          '500+ Partners',
          '200+ Patents & Software Copyrights',
          '70,000+ Annual Monitoring Points'
        ],
        note: 'These achievements are based on real engineering deployment and long-term monitoring experience around the world.',
        credentialsLabel: 'Engineering capabilities',
        credentials: [
          ['ISO', '9001'],
          ['Military', 'Standard'],
          ['CNAS', 'Accredited'],
          ['Independently', 'Controllable']
        ]
      }
})

function selectSlide(index) {
  activeSlide.value = index
}

function moveSlide(step) {
  activeSlide.value = (activeSlide.value + step + slides.length) % slides.length
}

onMounted(() => {
  rotationTimer = window.setInterval(() => moveSlide(1), 5500)
})

onBeforeUnmount(() => {
  window.clearInterval(rotationTimer)
})
</script>

<template>
  <section class="sc-engineering-capability" aria-labelledby="engineering-capability-title">
    <div class="sc-engineering-heading">
      <h2 id="engineering-capability-title">{{ copy.title }}</h2>
      <div class="sc-heading-line"></div>
      <p>{{ copy.subtitle }}</p>
    </div>

    <div class="sc-engineering-grid">
      <div class="sc-engineering-gallery">
        <div class="sc-engineering-carousel">
          <button class="sc-engineering-carousel-control sc-engineering-carousel-control--previous" type="button" :aria-label="copy.carouselPrevious" @click="moveSlide(-1)">‹</button>
          <img
            :src="currentSlide.src"
            :alt="currentSlide.alt"
            :class="{ 'is-contained': currentSlide.fit === 'contain' }"
            width="900"
            height="680"
            loading="lazy"
            decoding="async"
          >
          <button class="sc-engineering-carousel-control sc-engineering-carousel-control--next" type="button" :aria-label="copy.carouselNext" @click="moveSlide(1)">›</button>
        </div>

        <div class="sc-engineering-carousel-dots" :aria-label="copy.galleryLabel">
          <button
            v-for="(_, index) in slides"
            :key="index"
            type="button"
            :class="{ 'is-active': index === activeSlide }"
            :aria-label="`${copy.galleryItem} ${index + 1}`"
            @click="selectSlide(index)"
          ></button>
        </div>

        <div class="sc-engineering-field-grid">
          <img
            v-for="image in fieldImages"
            :key="image.src"
            :src="image.src"
            :alt="image.alt"
            width="360"
            height="220"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>

      <div class="sc-engineering-copy">
        <p>{{ copy.intro }}</p>

        <ul class="sc-engineering-proof-list">
          <li v-for="item in copy.proof" :key="item"><span aria-hidden="true">✓</span><strong>{{ item }}</strong></li>
        </ul>

        <p class="sc-engineering-note">{{ copy.note }}</p>

        <div class="sc-engineering-credentials" :aria-label="copy.credentialsLabel">
          <article>
            <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17"/><path d="M7 24h34M24 7c5 5 7 11 7 17s-2 12-7 17c-5-5-7-11-7-17S19 12 24 7Z"/></svg>
            <span>{{ copy.credentials[0][0] }}<br>{{ copy.credentials[0][1] }}</span>
          </article>
          <article>
            <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6 38 11v10c0 9-5.8 16.5-14 20-8.2-3.5-14-11-14-20V11l14-5Z"/><path d="m24 16 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8 2.5-5Z"/></svg>
            <span>{{ copy.credentials[1][0] }}<br>{{ copy.credentials[1][1] }}</span>
          </article>
          <article>
            <strong class="sc-engineering-cnas">CNAS</strong>
            <span>{{ copy.credentials[2][0] }}<br>{{ copy.credentials[2][1] }}</span>
          </article>
          <article>
            <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="13" y="13" width="22" height="22" rx="2"/><rect x="19" y="19" width="10" height="10"/><path d="M7 16h6m-6 8h6m-6 8h6m22-16h6m-6 8h6m-6 8h6M16 7v6m8-6v6m8-6v6m-16 22v6m8-6v6m8-6v6"/></svg>
            <span>{{ copy.credentials[3][0] }}<br>{{ copy.credentials[3][1] }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
