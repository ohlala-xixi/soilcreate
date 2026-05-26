<script setup>
import { computed } from 'vue'
import { Content, useData } from 'vitepress'
import InquiryForm from './InquiryForm.vue'
import catalog from '../data/products.json'
import { openInquiry } from '../utils/inquiry.js'

const { frontmatter } = useData()

const productModel = computed(() => frontmatter.value.model || frontmatter.value.sku || 'Contact for model')
const productDescription = computed(() => frontmatter.value.description || frontmatter.value.short_desc || '')
const normalizedFeatures = computed(() =>
  (frontmatter.value.features || []).map((feature) =>
    typeof feature === 'string' ? feature : [feature.title, feature.desc].filter(Boolean).join(': ')
  )
)
const normalizedSpecs = computed(() =>
  (frontmatter.value.specs || []).map((item) => ({
    label: item.label || item.key || item.parameter || 'Parameter',
    value: item.value || ''
  }))
)
const normalizedDownloads = computed(() => {
  const downloads = frontmatter.value.downloads || []
  if (downloads.length) {
    return downloads.map((item) => ({
      name: item.name || frontmatter.value.title + ' Datasheet',
      meta: item.meta || 'PDF | Technical file',
      link: item.link || item.href || frontmatter.value.specPdf
    }))
  }
  return frontmatter.value.specPdf
    ? [{ name: frontmatter.value.title + ' Datasheet', meta: 'PDF | Technical file', link: frontmatter.value.specPdf }]
    : []
})
const productByHref = computed(() => {
  const pairs = catalog.products.map((product) => [product.href, product])
  return Object.fromEntries(pairs)
})
const normalizedRelatedProducts = computed(() =>
  (frontmatter.value.related || []).map((item) => {
    const product = productByHref.value[item.href] || {}
    return {
      ...item,
      label: item.label || product.name || 'Related Product',
      sku: item.sku || product.sku || 'View details',
      image: item.image || product.image || '',
      imageAlt: item.imageAlt || product.imageAlt || product.name || item.label || 'Related product image'
    }
  })
)
const normalizedCaseStudies = computed(() =>
  (frontmatter.value.relatedCaseStudies || frontmatter.value.caseStudies || []).map((item) => ({
    title: item.title || item.label || 'Case Study',
    href: item.href || item.link || '/case-study',
    category: item.category || item.projectType || 'Case Study',
    summary: item.summary || item.description || 'See how SoilCreate instruments support real engineering projects.',
    image: item.image || '',
    imageAlt: item.imageAlt || item.title || item.label || 'SoilCreate case study'
  }))
)
</script>

<template>
  <main class="sc-container sc-pdp-page">
    <nav class="sc-breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> <span>/</span>
      <a href="/products/">Products</a> <span>/</span>
      <a href="/products/">{{ frontmatter.category || 'Instrumentation' }}</a> <span>/</span>
      <strong>{{ frontmatter.title }}</strong>
    </nav>

    <section class="sc-product-hero">
      <div class="sc-product-visuals">
        <div class="sc-gallery-main">
          <img
            v-if="frontmatter.image"
            :src="frontmatter.image"
            :alt="frontmatter.imageAlt || frontmatter.title"
            width="720"
            height="540"
            loading="lazy"
            decoding="async"
          />
          <span v-else>[ Product Main Image ]</span>
        </div>
      </div>

      <div class="sc-product-info">
        <span class="sc-product-sku">Model: {{ productModel }}</span>
        <h1>{{ frontmatter.title }}</h1>
        <p class="sc-product-desc">{{ productDescription }}</p>

        <div class="sc-action-group">
          <button type="button" class="sc-btn-primary" @click="openInquiry(frontmatter.title)">
            Make an Enquiry
          </button>
          <a
            v-if="frontmatter.specPdf"
            :href="frontmatter.specPdf"
            class="sc-btn-secondary sc-btn-catalog-download"
            download
          >
            Catalog
          </a>
        </div>
      </div>
    </section>

    <section class="sc-section sc-overview-section">
      <h2 class="sc-section-title">Product Overview</h2>
      <div class="sc-overview-content">
        <Content />
      </div>
    </section>

    <section v-if="normalizedFeatures.length" class="sc-section">
      <h2 class="sc-section-title">Product Features</h2>
      <div class="sc-features-grid">
        <div v-for="feature in normalizedFeatures" :key="feature" class="sc-feature-item">
          <div class="sc-feature-icon">✓</div>
          <div class="sc-feature-text">{{ feature }}</div>
        </div>
      </div>
    </section>

    <section v-if="frontmatter.applications?.length" class="sc-section">
      <h2 class="sc-section-title">Applications</h2>
      <ul class="sc-apps-list">
        <li v-for="application in frontmatter.applications" :key="application">{{ application }}</li>
      </ul>
    </section>

    <section v-if="normalizedSpecs.length" class="sc-section">
      <h2 class="sc-section-title">Specifications</h2>
      <div class="sc-table-wrap">
        <table class="sc-specs-table">
          <tbody>
            <tr v-for="item in normalizedSpecs" :key="item.label">
              <th>{{ item.label }}</th>
              <td>{{ item.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sc-section" id="downloads" v-if="normalizedDownloads.length">
      <h2 class="sc-section-title">Downloads & Resources</h2>
      <div class="sc-downloads-row">
        <a v-for="download in normalizedDownloads" :key="download.link || download.name" :href="download.link" class="sc-download-card">
          <span class="sc-download-icon">📄</span>
          <div>
            <div class="sc-download-title">{{ download.name }}</div>
            <div class="sc-download-meta">{{ download.meta }}</div>
          </div>
        </a>
      </div>
    </section>

    <section v-if="normalizedRelatedProducts.length" class="sc-section">
      <h2 class="sc-section-title">Related Products</h2>
      <div class="sc-related-grid">
        <a v-for="item in normalizedRelatedProducts" :key="item.href" :href="item.href" class="sc-related-card">
          <div class="sc-related-img">
            <img v-if="item.image" :src="item.image" :alt="item.imageAlt" width="480" height="300" loading="lazy" decoding="async" />
            <span v-else>{{ item.imageLabel || '[ Related Product ]' }}</span>
          </div>
          <div class="sc-related-title">{{ item.label }}</div>
          <div class="sc-related-sku">{{ item.sku || 'View details' }}</div>
        </a>
      </div>
    </section>

    <section v-if="normalizedCaseStudies.length" class="sc-section">
      <h2 class="sc-section-title">Related Case Studies</h2>
      <div class="sc-related-grid sc-case-related-grid">
        <a v-for="item in normalizedCaseStudies" :key="item.href" :href="item.href" class="sc-related-card sc-case-related-card">
          <div class="sc-related-img sc-case-related-img">
            <img v-if="item.image" :src="item.image" :alt="item.imageAlt" width="480" height="300" loading="lazy" decoding="async" />
            <span v-else>{{ item.category }}</span>
          </div>
          <div class="sc-related-title">{{ item.title }}</div>
          <div class="sc-related-sku">{{ item.summary }}</div>
        </a>
      </div>
    </section>

    <section class="sc-section" id="quote-form">
      <InquiryForm :product-name="frontmatter.title" />
    </section>

    <div class="sc-pdp-bottom-actions">
      <a href="/products/" class="sc-btn-secondary sc-btn-catalog">Back to Product Catalog</a>
    </div>
  </main>
</template>
