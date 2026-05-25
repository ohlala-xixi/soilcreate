<script setup>
import { computed, ref } from 'vue'
import { products } from '../data/products.js'

const nameQuery = ref('')
const scenarioQuery = ref('')
const timeWindow = ref('all')

const timeWindowLabels = {
  all: 'All updates',
  '90d': 'Last 90 days',
  '180d': 'Last 180 days',
  '2026': '2026 only'
}

const parseDate = (value) => new Date(`${value}T00:00:00Z`)

const withinWindow = (updatedAt, value) => {
  if (value === 'all') return true

  const now = new Date('2026-05-25T00:00:00Z')
  const updated = parseDate(updatedAt)
  const diffDays = Math.floor((now - updated) / (1000 * 60 * 60 * 24))

  if (value === '90d') return diffDays <= 90
  if (value === '180d') return diffDays <= 180
  if (value === '2026') return updated.getUTCFullYear() === 2026
  return true
}

const filteredProducts = computed(() => {
  const nameNeedle = nameQuery.value.trim().toLowerCase()
  const scenarioNeedle = scenarioQuery.value.trim().toLowerCase()

  return products.filter((product) => {
    const nameHit =
      !nameNeedle ||
      product.name.toLowerCase().includes(nameNeedle) ||
      product.category.toLowerCase().includes(nameNeedle)

    const scenarioText = [...product.destinations, ...product.applications].join(' ').toLowerCase()
    const scenarioHit = !scenarioNeedle || scenarioText.includes(scenarioNeedle)

    return nameHit && scenarioHit && withinWindow(product.updatedAt, timeWindow.value)
  })
})
</script>

<template>
  <section class="catalog-layout">
    <div class="filter-panel">
      <h2 class="section-title">Filter the catalog</h2>
      <p class="section-copy">
        Search by product name, destination, or application. No public prices are shown here.
        Inquiry requests stay one-to-one.
      </p>

      <div class="filter-grid">
        <label>
          Product name
          <input v-model="nameQuery" type="text" placeholder="Pneumatic Grease Pump" />
        </label>

        <label>
          Destination or application
          <input
            v-model="scenarioQuery"
            type="text"
            placeholder="Southeast Asia, slope stability, dam works"
          />
        </label>

        <label>
          Updated range
          <select v-model="timeWindow">
            <option v-for="(label, key) in timeWindowLabels" :key="key" :value="key">
              {{ label }}
            </option>
          </select>
        </label>
      </div>
    </div>

    <div class="catalog-grid">
      <article v-for="product in filteredProducts" :key="product.slug" class="catalog-card">
        <span class="eyebrow">{{ product.category }}</span>
        <h3>{{ product.name }}</h3>
        <p>{{ product.summary }}</p>
        <ul>
          <li><strong>Destinations:</strong> {{ product.destinations.join(', ') }}</li>
          <li><strong>Applications:</strong> {{ product.applications.join(', ') }}</li>
          <li><strong>Updated:</strong> {{ product.updatedAt }}</li>
        </ul>
        <div class="cta-row">
          <a class="button button--primary" :href="product.slug">View details</a>
          <a class="button button--ghost" href="/contact/">Request quote</a>
        </div>
      </article>
    </div>

    <p v-if="filteredProducts.length === 0" class="muted">
      No matches found. Broaden the name, destination, or time filter.
    </p>
  </section>
</template>

