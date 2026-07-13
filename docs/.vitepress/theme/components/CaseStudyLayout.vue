<script setup>
import { computed } from 'vue'
import { Content, useData } from 'vitepress'
import { openInquiry } from '../utils/inquiry.js'

const { frontmatter } = useData()

const metrics = computed(() => frontmatter.value.metrics || [])
const products = computed(() => frontmatter.value.products || [])
const details = computed(() => [
  ['Industry', frontmatter.value.industry],
  ['Location', frontmatter.value.location],
  ['Project Type', frontmatter.value.projectType],
  ['Monitoring Scope', frontmatter.value.scope]
].filter(([, value]) => value))

const caseSections = computed(() => [
  {
    key: 'challenge',
    label: 'Project Challenge',
    icon: '△',
    text: frontmatter.value.challenge
  },
  {
    key: 'solution',
    label: 'SoilCreate Solutions',
    icon: '☼',
    text: frontmatter.value.solution
  },
  {
    key: 'result',
    label: 'Result',
    icon: '✓',
    text: frontmatter.value.result
  }
].filter((section) => section.text))
</script>

<template>
  <main class="sc-case-detail">
    <section class="sc-case-hero">
      <div class="sc-case-hero__media">
        <img v-if="frontmatter.image" :src="frontmatter.image" :alt="frontmatter.imageAlt || frontmatter.title" />
        <div v-else class="sc-case-placeholder">
          <div class="sc-case-placeholder__icon">⌂</div>
          <p>{{ frontmatter.imageAlt || frontmatter.title }}</p>
        </div>
      </div>
      <div class="sc-case-hero__content">
        <span class="sc-case-kicker">{{ frontmatter.industry || 'Solutions' }}</span>
        <h1>{{ frontmatter.title }}</h1>
        <p>{{ frontmatter.description }}</p>
        <button type="button" class="sc-case-cta" @click="openInquiry(frontmatter.title)">Discuss a Similar Project</button>
      </div>
    </section>

    <section v-if="details.length" class="sc-case-facts">
      <div v-for="([label, value]) in details" :key="label" class="sc-case-fact">
        <span>{{ label }}</span>
        <strong>{{ value }}</strong>
      </div>
    </section>

    <section v-if="metrics.length" class="sc-case-metrics">
      <div v-for="metric in metrics" :key="metric.label" class="sc-case-metric">
        <strong>{{ metric.value }}</strong>
        <span>{{ metric.label }}</span>
      </div>
    </section>

    <section v-if="caseSections.length" class="sc-case-story-grid">
      <article v-for="section in caseSections" :key="section.key" class="sc-case-story-card">
        <h2><span>{{ section.icon }}</span>{{ section.label }}</h2>
        <p>{{ section.text }}</p>
      </article>
    </section>

    <section v-else class="sc-case-body">
      <Content />
    </section>

    <section v-if="products.length" class="sc-case-products">
      <h2>Equipment Used</h2>
      <div class="sc-case-product-list">
        <a v-for="product in products" :key="product.href || product.name" :href="product.href || '/products/'" class="sc-case-product-chip">
          {{ product.name }}
        </a>
      </div>
    </section>
  </main>
</template>
