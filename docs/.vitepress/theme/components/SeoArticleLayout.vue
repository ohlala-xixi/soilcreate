<script setup>
import { computed } from 'vue'
import { Content, useData } from 'vitepress'
import { openInquiry } from '../utils/inquiry.js'

const { frontmatter } = useData()

const takeaways = computed(() => frontmatter.value.takeaways || [])
const fallbackProducts = [
  {
    title: 'In-Place Inclinometer (IPI)',
    href: '/products/geotechnical-monitoring/inclinometer-sensor',
    summary: 'Automated borehole deformation monitoring for slopes, excavations, retaining walls, tunnels, and dams.',
    image: '/images/products/in-place-inclinometer/in-place-inclinometer-ipi-product.jpg',
    imageAlt: 'SoilCreate in-place inclinometer IPI sensor chain'
  },
  {
    title: 'Shape Displacement Array',
    href: '/products/geotechnical-monitoring/flexible-inclinometer',
    summary: 'Modular 3D deformation monitoring for boreholes, embankments, slopes, and retaining structures.',
    image: '/images/products/flexible-inclinometer/flexible-inclinometer-product.jpg',
    imageAlt: 'SoilCreate shape displacement array flexible inclinometer'
  },
  {
    title: 'Portable Inclinometer',
    href: '/products/geotechnical-monitoring/high-precision-sliding-inclinometer',
    summary: 'Bluetooth sliding inclinometer system for manual borehole deformation surveys.',
    image: '/images/products/sliding-inclinometer/high-precision-sliding-inclinometer-product.jpg',
    imageAlt: 'SoilCreate portable Bluetooth sliding inclinometer system'
  }
]
const articleMeta = computed(() => [
  ['Category', frontmatter.value.category],
  ['Reading time', frontmatter.value.readingTime],
  ['Updated', frontmatter.value.updated],
  ['Primary topic', frontmatter.value.primaryKeyword]
].filter(([, value]) => value))
const relatedProducts = computed(() => {
  const products = frontmatter.value.relatedProducts || frontmatter.value.products || []
  return products.length ? products : fallbackProducts
})
const relatedArticles = computed(() => (frontmatter.value.relatedArticles || []).slice(0, 4))
</script>

<template>
  <article class="sc-article-detail">
    <nav class="sc-breadcrumb sc-article-breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> <span>/</span>
      <a href="/solution">Solutions</a> <span>/</span>
      <strong>{{ frontmatter.title }}</strong>
    </nav>

    <header class="sc-article-hero">
      <div class="sc-article-kicker">{{ frontmatter.category || 'SoilCreate Insights' }}</div>
      <h1>{{ frontmatter.title }}</h1>
      <p>{{ frontmatter.description }}</p>
      <div v-if="articleMeta.length" class="sc-article-meta">
        <div v-for="([label, value]) in articleMeta" :key="label">
          <span>{{ label }}</span>
          <strong>{{ value }}</strong>
        </div>
      </div>
    </header>

    <figure v-if="frontmatter.image" class="sc-article-cover">
      <img :src="frontmatter.image" :alt="frontmatter.imageAlt || frontmatter.title" loading="lazy" decoding="async" />
      <figcaption>Featured image: {{ frontmatter.imageAlt || frontmatter.title }}</figcaption>
    </figure>

    <section v-if="takeaways.length" class="sc-article-takeaways">
      <h2>Key Takeaways</h2>
      <ol>
        <li v-for="item in takeaways" :key="item">{{ item }}</li>
      </ol>
    </section>

    <div class="sc-article-shell">
      <div class="sc-article-content">
        <Content />
      </div>
    </div>

    <section class="sc-article-final-cta">
      <div v-if="relatedProducts.length" class="sc-article-link-block">
        <h2>Related Products</h2>
        <div class="sc-article-link-grid">
          <a v-for="item in relatedProducts" :key="item.href || item.title" :href="item.href" class="sc-article-link-card">
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.imageAlt || item.title || item.name"
              width="360"
              height="220"
              loading="lazy"
              decoding="async"
            />
            <div class="sc-article-link-card__body">
              <strong>{{ item.title || item.name }}</strong>
              <span>{{ item.summary || item.description || 'View product details' }}</span>
            </div>
          </a>
        </div>
      </div>

      <div v-if="relatedArticles.length" class="sc-article-link-block">
        <h2>Related Articles</h2>
        <div class="sc-article-link-grid">
          <a v-for="item in relatedArticles" :key="item.href || item.title" :href="item.href" class="sc-article-link-card">
            <strong>{{ item.title }}</strong>
            <span>{{ item.summary || item.category || 'Read article' }}</span>
          </a>
        </div>
      </div>

      <div class="sc-article-final-cta__inner">
        <h2>Need a Monitoring Plan?</h2>
        <p>Share project depth, risk type, reading frequency, alarm needs, and site communication limits.</p>
        <button type="button" class="sc-btn-primary" @click="openInquiry(frontmatter.title)">
          Discuss Project
        </button>
      </div>
    </section>
  </article>
</template>
