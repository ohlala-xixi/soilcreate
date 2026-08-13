<script setup>
import { computed, ref } from 'vue'
import { spanishCategories, spanishProductCards } from '../data/spanish.js'
import { openInquiry } from '../utils/inquiry.js'

const activeFilter = ref('all')
const openCategoryIds = ref(new Set(spanishCategories.map((category) => category.id)))

const categoryCounts = computed(() => {
  const counts = { all: spanishProductCards.length }
  for (const product of spanishProductCards) {
    counts[product.categoryId] = (counts[product.categoryId] || 0) + 1
    counts[product.subcategoryId] = (counts[product.subcategoryId] || 0) + 1
  }
  return counts
})

const filteredProducts = computed(() => {
  if (activeFilter.value === 'all') return spanishProductCards
  return spanishProductCards.filter(
    (product) => product.categoryId === activeFilter.value || product.subcategoryId === activeFilter.value
  )
})

const setFilter = (filterId) => {
  activeFilter.value = filterId
  const parent = spanishCategories.find((category) => category.children?.some((child) => child.id === filterId))
  if (parent) {
    openCategoryIds.value = new Set([...openCategoryIds.value, parent.id])
  }
}

const isCategoryOpen = (categoryId) => openCategoryIds.value.has(categoryId)

const toggleCategory = (categoryId) => {
  const next = new Set(openCategoryIds.value)
  next.has(categoryId) ? next.delete(categoryId) : next.add(categoryId)
  openCategoryIds.value = next
}
</script>

<template>
  <div class="sc-products-hero">
    <div class="sc-products-hero-inner">
      <h1>Productos</h1>
      <div class="sc-heading-line"></div>
      <p>
        Cinco categorias, una cadena completa de monitoreo: deformacion, asentamiento, esfuerzo, ambiente,
        adquisicion de datos y plataforma cloud.
      </p>
    </div>
  </div>

  <main class="sc-container sc-products-page">
    <div class="sc-catalog-layout">
      <aside class="sc-sidebar" aria-label="Categorias de productos">
        <div class="sc-sidebar-header">Categorias</div>
        <ul class="sc-category-list">
          <li class="sc-has-submenu">
            <button class="sc-category-title" :class="{ active: activeFilter === 'all' }" type="button" @click="setFilter('all')">
              Todos los productos ({{ categoryCounts.all }})
            </button>
          </li>
          <li v-for="category in spanishCategories" :key="category.id" class="sc-has-submenu">
            <div class="sc-category-row">
              <button class="sc-category-title" :class="{ active: activeFilter === category.id }" type="button" @click="setFilter(category.id)">
                {{ category.label }} ({{ categoryCounts[category.id] || 0 }})
              </button>
              <button class="sc-category-toggle" type="button" @click="toggleCategory(category.id)">
                {{ isCategoryOpen(category.id) ? '−' : '+' }}
              </button>
            </div>
            <ul v-show="isCategoryOpen(category.id)" class="sc-submenu">
              <li v-for="child in category.children" :key="child.id">
                <button class="sc-sub-item" :class="{ active: activeFilter === child.id }" type="button" @click="setFilter(child.id)">
                  {{ child.label }}
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <a href="/specs/monitoring-product-selection-manual.pdf" class="sc-sidebar-manual-download" download>
          <span>↓</span>
          Manual de seleccion
        </a>
      </aside>

      <section class="sc-product-grid-area">
        <div class="sc-grid">
          <article v-for="product in filteredProducts" :key="product.sku" class="sc-product-card">
            <a :href="product.href" class="sc-card-image">
              <img :src="product.image" :alt="product.imageAlt || product.name" width="480" height="300" loading="lazy" decoding="async" />
            </a>
            <div class="sc-card-sku">{{ product.sku }}</div>
            <h3 class="sc-card-title">
              <a :href="product.href">{{ product.name }}</a>
            </h3>
            <p class="sc-card-summary">{{ product.summary }}</p>
            <div class="sc-card-actions">
              <a :href="product.href" class="sc-card-link">Ver detalles</a>
              <button type="button" class="sc-card-quote" @click="openInquiry(product.name)">Cotizar</button>
            </div>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>
