<script setup>
import { computed } from 'vue'

const props = defineProps({
  locale: {
    type: String,
    default: 'en'
  }
})

const isSpanish = computed(() => props.locale === 'es')
const copy = computed(() => isSpanish.value
  ? {
      slogan: '"Su socio de confianza para soluciones de monitoreo geotecnico y estructural"',
      title: 'Por que los clientes confian en SoilCreate',
      items: [
        {
          title: 'Precision comprobada',
          text: 'Todos los instrumentos SoilCreate se calibran con estandares internacionales y se prueban para entregar datos precisos y consistentes.'
        },
        {
          title: 'Diseñado para entornos industriales',
          text: 'Nuestros productos trabajan en calor, humedad y condiciones de campo complejas durante proyectos exigentes.'
        },
        {
          title: 'Integracion fluida',
          text: 'Sensores, registradores y plataformas cloud se conectan para una recoleccion de datos eficiente en obra.'
        },
        {
          title: 'Soporte experto',
          text: 'Ingenieros y especialistas tecnicos apoyan la configuracion, instalacion y flujo de monitoreo a nivel global.'
        }
      ]
    }
  : {
      slogan: '"Your Trusted Partner For Geotechnical And Structural Monitoring Solutions"',
      title: 'Why Clients Trust SoilCreate',
      items: [
        {
          title: 'Proven Accuracy',
          text: 'All SoilCreate instruments are calibrated to international standards and tested for reliability, delivering precise and consistent data for confident decisions.'
        },
        {
          title: 'Built For Industrial Environments',
          text: 'Designed for rugged environments, our products perform in heat, humidity, and complex field conditions.'
        },
        {
          title: 'Seamless Integration',
          text: 'Our products connect sensors, loggers, and cloud platforms for efficient data collection across projects.'
        },
        {
          title: 'Expert Support',
          text: 'Engineers and technical specialists support configuration, setup, and monitoring workflows globally.'
        }
      ]
    })
</script>

<template>
  <section class="sc-trust-slogan">
    <h2>{{ copy.slogan }}</h2>
  </section>

  <section class="sc-why-trust">
    <h2 class="sc-why-title">{{ copy.title }}</h2>
    <div class="sc-why-grid">
      <div class="sc-why-item">
        <div class="sc-why-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-8.53 7.85l-2.12-2.12-1.06 1.06 3.18 3.18 6.01-6.01-1.06-1.06-4.95 4.95z"/></svg>
        </div>
        <div class="sc-why-content">
          <h3>{{ copy.items[0].title }}</h3>
          <p>{{ copy.items[0].text }}</p>
        </div>
      </div>

      <div class="sc-why-item">
        <div class="sc-why-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 12c-5.52 0-10-2.02-10-4.5v3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-3c0 2.48-4.48 4.5-10 4.5zm0 5c-5.52 0-10-2.02-10-4.5v3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-3c0 2.48-4.48 4.5-10 4.5z"/></svg>
        </div>
        <div class="sc-why-content">
          <h3>{{ copy.items[1].title }}</h3>
          <p>{{ copy.items[1].text }}</p>
        </div>
      </div>

      <div class="sc-why-item">
        <div class="sc-why-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 1H4C2.35 1 1 2.35 1 4v12h2V4c0-.55.45-1 1-1h12V1zm4 4H8c-1.65 0-3 1.35-3 3v12c0 1.65 1.35 3 3 3h12c1.65 0 3-1.35 3-3V8c0-1.65-1.35-3-3-3zm-1 14H9V9h10v10z"/></svg>
        </div>
        <div class="sc-why-content">
          <h3>{{ copy.items[2].title }}</h3>
          <p>{{ copy.items[2].text }}</p>
        </div>
      </div>

      <div class="sc-why-item">
        <div class="sc-why-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.09 13.36 4 12.69 4 12s.09-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.17.64.26 1.31.26 2s-.09 1.36-.26 2h-3.38z"/></svg>
        </div>
        <div class="sc-why-content">
          <h3>{{ copy.items[3].title }}</h3>
          <p>{{ copy.items[3].text }}</p>
        </div>
      </div>
    </div>
  </section>

</template>
