<script setup>
import { ref } from 'vue'
import { spanishFeaturedProducts } from '../data/spanish.js'

const slides = [
  {
    image: '/images/shared/hero/bridge-infrastructure-hero.jpg',
    title: 'Su especialista en inclinometros para monitoreo de movimiento profundo del terreno'
  },
  {
    image: '/images/home/soilcreate-monitoring-instruments-hero.jpg',
    title: '5 categorias · 30+ modelos de sensores · Cloud-Edge-Device'
  }
]

const currentSlide = ref(0)

const setSlide = (index) => {
  currentSlide.value = index
}
</script>

<template>
  <div class="sc-es-home">
    <section
      v-for="(slide, index) in slides"
      v-show="currentSlide === index"
      :key="slide.title"
      class="sc-home-hero"
      :style="{ backgroundImage: `linear-gradient(rgba(38,50,61,.68), rgba(38,50,61,.68)), url('${slide.image}')` }"
    >
      <button class="sc-home-hero-arrow sc-home-hero-arrow--left" type="button" @click="setSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)" aria-label="Diapositiva anterior">‹</button>
      <button class="sc-home-hero-arrow sc-home-hero-arrow--right" type="button" @click="setSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)" aria-label="Siguiente diapositiva">›</button>
      <div class="sc-home-hero-content">
        <h1>{{ slide.title }}</h1>
        <div class="sc-heading-line"></div>
        <p>Datos confiables para sus proyectos mas criticos.</p>
        <div class="sc-hero-actions">
          <a class="sc-btn-primary" href="/es/products/">Explorar productos</a>
          <a class="sc-btn-outline" href="/es/contact">Contactar ingenieria</a>
        </div>
      </div>
    </section>

    <div class="sc-trust-bar">
      <span>✓ Precision calibrada</span>
      <span>✓ Registro de datos en tiempo real</span>
      <span>✓ Integracion de sistemas</span>
      <span>✓ Durabilidad IP68</span>
    </div>

    <section class="sc-es-section">
      <div class="sc-container">
        <div class="sc-section-heading">
          <h2>Productos principales</h2>
          <div class="sc-heading-line"></div>
        </div>
        <div class="sc-es-card-grid sc-es-card-grid--three">
          <article v-for="product in spanishFeaturedProducts" :key="product.sku" class="sc-es-product-card">
            <a :href="product.href" class="sc-es-product-image">
              <img :src="product.image" :alt="product.imageAlt" width="640" height="400" loading="lazy" decoding="async" />
            </a>
            <div class="sc-card-sku">{{ product.sku }}</div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.summary }}</p>
            <a class="sc-card-link sc-es-card-link-right" :href="product.href">Ver detalles →</a>
          </article>
        </div>
      </div>
    </section>

    <section class="sc-es-section sc-es-section--gray">
      <div class="sc-container">
        <div class="sc-section-heading">
          <h2>Que hacemos</h2>
          <div class="sc-heading-line"></div>
        </div>
        <div class="sc-es-card-grid sc-es-card-grid--three">
          <article class="sc-es-info-card">
            <span>01</span>
            <h3>I+D y fabricacion OEM/ODM</h3>
            <p>Desarrollamos sistemas de inclinometro, sensores MEMS y cadenas de monitoreo listas para proyectos globales.</p>
          </article>
          <article class="sc-es-info-card">
            <span>02</span>
            <h3>Diseno e instalacion de proyecto</h3>
            <p>Ayudamos a definir objetivos de monitoreo, layout de sensores, frecuencia de lectura y reglas de alarma.</p>
          </article>
          <article class="sc-es-info-card">
            <span>03</span>
            <h3>Suministro integral de equipos</h3>
            <p>Desde sensores y data loggers hasta comunicacion, nube, reportes y soporte tecnico para integradores.</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
