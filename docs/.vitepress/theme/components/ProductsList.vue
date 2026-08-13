<script setup>
import { computed, ref } from 'vue'
import catalog from '../data/products.json'
import { spanishCategories, spanishProductCards } from '../data/spanish.js'
import { openInquiry } from '../utils/inquiry.js'

const props = defineProps({
  locale: {
    type: String,
    default: 'en'
  }
})

const isSpanish = computed(() => props.locale === 'es')
const categories = computed(() => isSpanish.value ? spanishCategories : catalog.categories)
const products = computed(() => isSpanish.value ? spanishProductCards : catalog.products)
const activeFilter = ref('all')
const openCategoryIds = ref(new Set(catalog.categories.map((category) => category.id)))

const copy = computed(() => isSpanish.value
  ? {
      title: 'Productos',
      intro: 'Cinco categorias, una cadena completa de monitoreo: desde deformacion, asentamiento, esfuerzo y sensores ambientales hasta adquisicion de datos e integracion con plataforma.',
      sidebar: 'Categorias de productos',
      sidebarAria: 'Categorias de productos',
      all: 'Todos los productos',
      collapse: 'Contraer categoria',
      expand: 'Expandir categoria',
      manual: 'Manual de seleccion',
      viewDetails: 'Ver detalles',
      quote: 'Cotizar'
    }
  : {
      title: 'Products',
      intro: 'Five categories, one complete monitoring chain from deformation, settlement, stress and environment sensing to data acquisition and software platform integration.',
      sidebar: 'Product Categories',
      sidebarAria: 'Product categories',
      all: 'All Products',
      collapse: 'Collapse category',
      expand: 'Expand category',
      manual: 'Selection Manual',
      viewDetails: 'View Details',
      quote: 'Quote'
    })

const categoryCounts = computed(() => {
  const counts = { all: products.value.length }
  for (const product of products.value) {
    counts[product.categoryId] = (counts[product.categoryId] || 0) + 1
    counts[product.subcategoryId] = (counts[product.subcategoryId] || 0) + 1
  }
  return counts
})

const filteredProducts = computed(() => {
  if (activeFilter.value === 'all') return products.value
  return products.value.filter(
    (product) => product.categoryId === activeFilter.value || product.subcategoryId === activeFilter.value
  )
})

const setFilter = (filterId) => {
  activeFilter.value = filterId
  const parent = categories.value.find((category) => category.children?.some((child) => child.id === filterId))
  if (parent) {
    openCategoryIds.value = new Set([...openCategoryIds.value, parent.id])
  }
}

const isCategoryOpen = (categoryId) => openCategoryIds.value.has(categoryId)

const toggleCategory = (categoryId) => {
  const next = new Set(openCategoryIds.value)
  if (next.has(categoryId)) {
    next.delete(categoryId)
  } else {
    next.add(categoryId)
  }
  openCategoryIds.value = next
}
</script>

<template>
  <div class="sc-products-hero">
    <div class="sc-products-hero-inner">
      <h1>{{ copy.title }}</h1>
      <div class="sc-heading-line"></div>
      <p>{{ copy.intro }}</p>
    </div>
  </div>

  <main class="sc-container sc-products-page">
    <div class="sc-catalog-layout">
      <aside class="sc-sidebar" :aria-label="copy.sidebarAria">
        <div class="sc-sidebar-header">{{ copy.sidebar }}</div>
        <ul class="sc-category-list">
          <li class="sc-has-submenu">
            <button
              class="sc-category-title"
              :class="{ active: activeFilter === 'all' }"
              type="button"
              @click="setFilter('all')"
            >
              {{ copy.all }} ({{ categoryCounts.all }})
            </button>
          </li>

          <li v-for="category in categories" :key="category.id" class="sc-has-submenu">
            <div class="sc-category-row">
              <button
                class="sc-category-title"
                :class="{ active: activeFilter === category.id }"
                type="button"
                @click="setFilter(category.id)"
              >
                {{ category.label }} ({{ categoryCounts[category.id] || 0 }})
              </button>
              <button
                class="sc-category-toggle"
                type="button"
                :aria-expanded="isCategoryOpen(category.id)"
                :aria-label="isCategoryOpen(category.id) ? copy.collapse : copy.expand"
                @click="toggleCategory(category.id)"
              >
                {{ isCategoryOpen(category.id) ? '−' : '+' }}
              </button>
            </div>
            <ul v-show="isCategoryOpen(category.id)" class="sc-submenu">
              <li v-for="child in category.children" :key="child.id">
                <button
                  class="sc-sub-item"
                  :class="{ active: activeFilter === child.id }"
                  type="button"
                  @click="setFilter(child.id)"
                >
                  {{ child.label }}
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <a
          href="/specs/monitoring-product-selection-manual.pdf"
          class="sc-sidebar-manual-download"
          download
        >
          <span>↓</span>
          {{ copy.manual }}
        </a>
      </aside>

      <section class="sc-product-grid-area">
        <div class="sc-grid">
          <article v-for="product in filteredProducts" :key="product.sku" class="sc-product-card">
            <a :href="product.href" class="sc-card-image">
              <img
                v-if="product.image"
                :src="product.image"
                :alt="product.imageAlt || product.name"
                width="480"
                height="300"
                loading="lazy"
                decoding="async"
              />
              <span v-else>[ Image: {{ product.name }} ]</span>
            </a>
            <div class="sc-card-sku">{{ product.sku }}</div>
            <h3 class="sc-card-title">
              <a :href="product.href">{{ product.name }}</a>
            </h3>
            <p class="sc-card-summary">{{ product.summary }}</p>
            <div class="sc-card-actions">
              <a :href="product.href" class="sc-card-link">{{ copy.viewDetails }}</a>
              <button type="button" class="sc-card-quote" @click="openInquiry(product.name)">{{ copy.quote }}</button>
            </div>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>
