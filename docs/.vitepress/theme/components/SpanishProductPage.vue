<script setup>
import { computed } from 'vue'
import InquiryForm from './InquiryForm.vue'
import { spanishProductPages } from '../data/spanish.js'

const props = defineProps({
  product: {
    type: String,
    required: true
  }
})

const item = computed(() => spanishProductPages[props.product])
const relatedProducts = computed(() =>
  (item.value?.related || [])
    .map((key) => ({ ...spanishProductPages[key], href: `/es/products/deformation-monitoring/${key}` }))
    .filter((product) => product.title)
)
</script>

<template>
  <main v-if="item" class="sc-es-product-detail">
    <section class="sc-es-product-hero">
      <div class="sc-container sc-es-product-hero-grid">
        <div>
          <p class="sc-data-kicker">{{ item.category }}</p>
          <h1>{{ item.h1 }}</h1>
          <p>{{ item.description }}</p>
          <div class="sc-es-product-meta">
            <span>{{ item.model }}</span>
            <span>{{ item.bestFor }}</span>
          </div>
          <div class="sc-hero-actions">
            <a class="sc-btn-primary" href="#inquiry">Solicitar cotizacion</a>
            <a v-if="item.downloads?.[0]" class="sc-btn-outline sc-btn-outline--dark" :href="item.downloads[0].href" download>Catalogo</a>
          </div>
        </div>
        <div class="sc-es-product-visual">
          <img :src="item.image" :alt="item.imageAlt" width="760" height="520" decoding="async" />
        </div>
      </div>
    </section>

    <section class="sc-es-section">
      <div class="sc-container sc-es-two-column">
        <div>
          <p class="sc-data-kicker">Descripcion general</p>
          <h2>Para que proyecto se utiliza</h2>
          <p>{{ item.overview }}</p>
        </div>
        <div class="sc-es-feature-panel">
          <h2>Caracteristicas clave</h2>
          <ul>
            <li v-for="feature in item.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="sc-es-section sc-es-section--gray">
      <div class="sc-container">
        <div class="sc-section-heading">
          <p class="sc-data-kicker">Especificaciones</p>
          <h2>Parametros tecnicos principales</h2>
        </div>
        <div class="sc-es-table-wrap">
          <table class="sc-es-spec-table">
            <tbody>
              <tr v-for="row in item.specs" :key="row[0]">
                <th>{{ row[0] }}</th>
                <td>{{ row[1] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="sc-es-section">
      <div class="sc-container">
        <div class="sc-section-heading">
          <p class="sc-data-kicker">Aplicaciones</p>
          <h2>Escenarios recomendados</h2>
        </div>
        <div class="sc-es-pill-grid">
          <span v-for="application in item.applications" :key="application">{{ application }}</span>
        </div>
      </div>
    </section>

    <section class="sc-es-section sc-es-section--gray">
      <div class="sc-container">
        <h2 class="sc-es-left-title">Descargas y recursos</h2>
        <div class="sc-resource-list">
          <a v-for="download in item.downloads" :key="download.href" class="sc-resource-card" :href="download.href" download>
            <span>▣</span>
            <div>
              <strong>{{ download.label }}</strong>
              <small>PDF | Archivo tecnico</small>
            </div>
          </a>
        </div>

        <h2 class="sc-es-left-title">Productos relacionados</h2>
        <div class="sc-related-grid">
          <a v-for="product in relatedProducts" :key="product.model" :href="product.href" class="sc-related-card">
            <img :src="product.image" :alt="product.imageAlt" width="360" height="220" loading="lazy" decoding="async" />
            <strong>{{ product.title }}</strong>
            <span>{{ product.model }}</span>
          </a>
        </div>

        <h2 class="sc-es-left-title">Applications & Case Studies</h2>
        <div class="sc-es-card-grid sc-es-card-grid--two">
          <a class="sc-es-info-card" href="/es/cases">
            <span>Case</span>
            <h3>Casos industriales</h3>
            <p>Excavaciones, tuneles, presas, taludes, puentes y energia con monitoreo geotecnico aplicado.</p>
          </a>
          <a class="sc-es-info-card" href="/es/solutions/">
            <span>Solution</span>
            <h3>Guias tecnicas</h3>
            <p>Seleccion de instrumentos, datos, alarmas, instalacion y comparacion entre IPI, SAA y Portable Sliding Inclinometer.</p>
          </a>
        </div>
      </div>
    </section>

    <section id="inquiry" class="sc-es-section">
      <div class="sc-container">
        <InquiryForm :product-name="item.title" locale="es" />
        <a class="sc-back-catalog" href="/es/products/">← Volver al catalogo de productos</a>
      </div>
    </section>
  </main>
</template>
