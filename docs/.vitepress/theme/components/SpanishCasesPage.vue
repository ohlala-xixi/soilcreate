<script setup>
import InquiryForm from './InquiryForm.vue'
import { spanishCaseCards } from '../data/spanish.js'
</script>

<template>
  <main>
    <section class="sc-es-page-hero sc-es-page-hero--cases">
      <div class="sc-es-page-hero-inner">
        <h1>Casos industriales</h1>
        <p>
          Aplicaciones de monitoreo geotecnico para excavaciones profundas, transito ferroviario, taludes,
          presas, tuneles, puentes y proyectos de energia.
        </p>
      </div>
    </section>

    <section class="sc-es-section">
      <div class="sc-container">
        <div class="sc-section-heading">
          <p class="sc-data-kicker">Aplicaciones</p>
          <h2>Escenarios de monitoreo con SoilCreate</h2>
        </div>
        <div class="sc-es-case-grid">
          <a v-for="card in spanishCaseCards" :key="card.href" class="sc-es-case-card" :href="card.href">
            <img :src="card.image" :alt="card.title" width="640" height="380" loading="lazy" decoding="async" />
            <div>
              <h3>{{ card.title }}</h3>
              <p>{{ card.summary }}</p>
              <span>Ver caso en ingles →</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="sc-es-section sc-es-section--inquiry">
      <div class="sc-container">
        <InquiryForm product-name="Consulta de casos SoilCreate" locale="es" />
      </div>
    </section>
  </main>
</template>
