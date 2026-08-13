<script setup>
import { spanishSolutionCards } from '../data/spanish.js'
</script>

<template>
  <main>
    <section class="sc-es-page-hero sc-es-page-hero--solutions">
      <div class="sc-es-page-hero-inner">
        <h1>Soluciones y proyectos</h1>
        <p>
          Guias practicas para elegir, instalar y conectar sistemas de inclinometro en excavaciones, taludes,
          tuneles, presas, minas y estructuras.
        </p>
      </div>
    </section>

    <section class="sc-es-section">
      <div class="sc-container">
        <div class="sc-section-heading">
          <p class="sc-data-kicker">Centro tecnico</p>
          <h2>Temas principales para seleccion y monitoreo</h2>
        </div>
        <div class="sc-es-card-grid sc-es-card-grid--three">
          <article v-for="card in spanishSolutionCards" :key="card.href" class="sc-es-info-card">
            <span>Guide</span>
            <h3>{{ card.title }}</h3>
            <p>{{ card.summary }}</p>
            <a class="sc-card-link sc-es-card-link-right" :href="card.href">Leer en ingles →</a>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
