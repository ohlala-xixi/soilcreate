<script setup>
import { computed, ref } from 'vue'
import catalog from '../data/products.json'
import { openInquiry } from '../utils/inquiry.js'

const activeFilter = ref('all')

const categoryCounts = computed(() => {
  const counts = { all: catalog.products.length }
  for (const product of catalog.products) {
    counts[product.categoryId] = (counts[product.categoryId] || 0) + 1
    counts[product.subcategoryId] = (counts[product.subcategoryId] || 0) + 1
  }
  return counts
})

const filteredProducts = computed(() => {
  if (activeFilter.value === 'all') return catalog.products
  return catalog.products.filter(
    (product) => product.categoryId === activeFilter.value || product.subcategoryId === activeFilter.value
  )
})

const setFilter = (filterId) => {
  activeFilter.value = filterId
}
</script>

<template>
  <main class="sc-container">
    <div class="sc-page-intro">
      <h1>Industrial Equipment & Geotechnical Sensors</h1>
      <p>
        SoilCreate specializes in the supply of advanced geotechnical sensors and premium industrial equipment,
        ensuring maximum reliability for your critical projects.
      </p>
    </div>

    <div class="sc-catalog-layout">
      <aside class="sc-sidebar" aria-label="Product categories">
        <div class="sc-sidebar-header">Product Categories</div>
        <ul class="sc-category-list">
          <li class="sc-has-submenu">
            <button
              class="sc-category-title"
              :class="{ active: activeFilter === 'all' }"
              type="button"
              @click="setFilter('all')"
            >
              All Products ({{ categoryCounts.all }})
            </button>
          </li>

          <li v-for="category in catalog.categories" :key="category.id" class="sc-has-submenu">
            <button
              class="sc-category-title"
              :class="{ active: activeFilter === category.id }"
              type="button"
              @click="setFilter(category.id)"
            >
              {{ category.label }} ({{ categoryCounts[category.id] || 0 }})
            </button>
            <ul class="sc-submenu">
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
      </aside>

      <section class="sc-product-grid-area">
        <div class="sc-grid">
          <article v-for="product in filteredProducts" :key="product.sku" class="sc-product-card">
            <a :href="product.href" class="sc-card-image">
              <img v-if="product.image" :src="product.image" :alt="product.name" loading="lazy" />
              <span v-else>[ Image: {{ product.name }} ]</span>
            </a>
            <div class="sc-card-sku">{{ product.sku }}</div>
            <h3 class="sc-card-title">
              <a :href="product.href">{{ product.name }}</a>
            </h3>
            <p class="sc-card-summary">{{ product.summary }}</p>
            <div class="sc-card-actions">
              <a :href="product.href" class="sc-card-link">View Details</a>
              <button type="button" class="sc-card-quote" @click="openInquiry(product.name)">Quote</button>
            </div>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>
