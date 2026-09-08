<script setup>
import { computed, nextTick, onMounted, onUnmounted, watch } from 'vue'
import { Content, useData, useRoute } from 'vitepress'
import { openInquiry } from '../utils/inquiry.js'
import { spanishCaseCards, spanishProductCards } from '../data/spanish.js'
import { getSpanishRoute } from '../data/languageRoutes.js'

const { frontmatter } = useData()
const route = useRoute()

const takeaways = computed(() => frontmatter.value.takeaways || [])
const answerFirst = computed(() => frontmatter.value.answerFirst || frontmatter.value.description)
const isSpanish = computed(() => route.path === '/es/' || route.path.startsWith('/es/'))
const copy = computed(() => isSpanish.value
  ? {
      home: 'Inicio',
      solutions: 'Soluciones',
      category: 'Categoría',
      readingTime: 'Tiempo de lectura',
      published: 'Publicado',
      updated: 'Actualizado',
      primaryTopic: 'Tema principal',
      takeaways: 'Puntos clave',
      featuredImage: 'Imagen destacada',
      relatedProducts: 'Productos relacionados',
      relatedArticles: 'Artículos relacionados',
      relatedCases: 'Casos relacionados',
      relatedSolutions: 'Soluciones relacionadas',
      viewProduct: 'Ver detalles del producto',
      readArticle: 'Leer artículo',
      readCase: 'Ver caso',
      readSolution: 'Leer solución',
      ctaTitle: '¿Necesita un plan de monitoreo?',
      ctaText: 'Comparta profundidad del proyecto, tipo de riesgo, frecuencia de lectura, necesidades de alarma y límites de comunicación del sitio.',
      ctaButton: 'Hablar del proyecto',
      tableRegion: 'Tabla técnica desplazable'
    }
  : {
      home: 'Home',
      solutions: 'Solutions',
      category: 'Category',
      readingTime: 'Reading time',
      published: 'Published',
      updated: 'Updated',
      primaryTopic: 'Primary topic',
      takeaways: 'Key Takeaways',
      featuredImage: 'Featured image',
      relatedProducts: 'Related Products',
      relatedArticles: 'Related Articles',
      relatedCases: 'Related Cases',
      relatedSolutions: 'Related Solutions',
      viewProduct: 'View product details',
      readArticle: 'Read article',
      readCase: 'Read case study',
      readSolution: 'Read solution',
      ctaTitle: 'Need a Monitoring Plan?',
      ctaText: 'Share project depth, risk type, reading frequency, alarm needs, and site communication limits.',
      ctaButton: 'Discuss Project',
      tableRegion: 'Scrollable technical table'
    })
const fallbackProducts = [
  {
    title: 'In-Place Inclinometer (IPI)',
    href: '/products/deformation-monitoring/in-place-inclinometer',
    summary: 'Automated borehole deformation monitoring for slopes, excavations, retaining walls, tunnels, and dams.',
    image: '/images/products/in-place-inclinometer/in-place-inclinometer-ipi-product.jpg',
    imageAlt: 'SoilCreate in-place inclinometer IPI sensor chain'
  },
  {
    title: 'Shape Displacement Array',
    href: '/products/deformation-monitoring/flexible-inclinometer',
    summary: 'Modular 3D deformation monitoring for boreholes, embankments, slopes, and retaining structures.',
    image: '/images/products/flexible-inclinometer/flexible-inclinometer-product.jpg',
    imageAlt: 'SoilCreate shape displacement array flexible inclinometer'
  },
  {
    title: 'Portable Inclinometer',
    href: '/products/deformation-monitoring/sliding-inclinometer',
    summary: 'Bluetooth sliding inclinometer system for manual borehole deformation surveys.',
    image: '/images/products/sliding-inclinometer/high-precision-sliding-inclinometer-product.jpg',
    imageAlt: 'SoilCreate portable Bluetooth sliding inclinometer system'
  }
]
const articleMeta = computed(() => [
  [copy.value.category, frontmatter.value.category],
  [copy.value.readingTime, frontmatter.value.readingTime],
  [copy.value.published, frontmatter.value.published || frontmatter.value.datePublished],
  [copy.value.updated, frontmatter.value.updated],
  [copy.value.primaryTopic, frontmatter.value.primaryKeyword]
].filter(([, value]) => value))
const relatedProducts = computed(() => {
  const products = frontmatter.value.relatedProducts || frontmatter.value.products || []
  return products.length ? products : fallbackProducts
})
const relatedArticles = computed(() => (frontmatter.value.relatedArticles || []).slice(0, 4))
const relatedCases = computed(() => (frontmatter.value.relatedCases || []).slice(0, 4))
const relatedSolutions = computed(() => (frontmatter.value.relatedSolutions || []).slice(0, 4))
const localizedCaseLinks = Object.fromEntries(spanishCaseCards.map((item) => [item.href, {
  ...item, href: getSpanishRoute(item.href) || item.href
}]))
const localizedRelatedCases = computed(() => relatedCases.value.map((item) => (
  isSpanish.value && localizedCaseLinks[item.href]
    ? { ...item, ...localizedCaseLinks[item.href], imageAlt: localizedCaseLinks[item.href].title }
    : item
)))
const localizedHref = (href) => {
  return isSpanish.value ? getSpanishRoute(href) || href : href
}
const localizedRelatedProducts = computed(() => relatedProducts.value.map((item) => {
  const href = localizedHref(item.href)
  const translated = isSpanish.value && spanishProductCards.find((product) => product.href === href)
  return { ...item, ...(translated || {}), href }
}))
const localizedRelatedSolutions = computed(() => relatedSolutions.value.map((item) => ({
  ...item,
  href: localizedHref(item.href)
})))

const wrapArticleTables = () => {
  document.querySelectorAll('.sc-article-content table').forEach((table, index) => {
    if (table.parentElement?.classList.contains('sc-article-table-wrap')) return
    const wrapper = document.createElement('div')
    wrapper.className = 'sc-article-table-wrap'
    wrapper.tabIndex = 0
    wrapper.setAttribute('role', 'region')
    wrapper.setAttribute('aria-label', `${copy.value.tableRegion} ${index + 1}`)
    table.before(wrapper)
    wrapper.appendChild(table)
  })
}

const clearPreviewFocus = () => {
  document.querySelectorAll('.seo-generator-focus').forEach((element) => element.classList.remove('seo-generator-focus'))
}

const focusPreviewModule = (event) => {
  if (event.origin !== 'http://127.0.0.1:5173') return
  if (event.data?.type !== 'soilcreate:focus-module') return
  clearPreviewFocus()
  const { moduleId, moduleType } = event.data
  let target
  if (moduleType === 'takeaways') target = document.querySelector('.sc-article-takeaways')
  else if (moduleType === 'internalLinks') target = document.querySelector('.sc-article-final-cta')
  else target = document.querySelector(`[data-seo-module="${CSS.escape(moduleId)}"]`)?.nextElementSibling
  if (!target) return
  target.classList.add('seo-generator-focus')
  target.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

onMounted(() => {
  wrapArticleTables()
  window.addEventListener('message', focusPreviewModule)
})
watch(
  () => route.path,
  () => nextTick(wrapArticleTables)
)
onUnmounted(() => window.removeEventListener('message', focusPreviewModule))
</script>

<template>
  <article class="sc-article-detail">
    <nav class="sc-breadcrumb sc-article-breadcrumb" aria-label="Breadcrumb">
      <a :href="isSpanish ? '/es/' : '/'">{{ copy.home }}</a> <span>/</span>
      <a :href="isSpanish ? '/es/solutions/' : '/solutions/'">{{ copy.solutions }}</a> <span>/</span>
      <strong>{{ frontmatter.title }}</strong>
    </nav>

    <header class="sc-article-hero">
      <div class="sc-article-kicker">{{ frontmatter.category || 'SoilCreate Insights' }}</div>
      <h1>{{ frontmatter.title }}</h1>
      <p v-if="answerFirst" class="sc-article-answer-first">{{ answerFirst }}</p>
      <div v-if="articleMeta.length" class="sc-article-meta">
        <div v-for="([label, value]) in articleMeta" :key="label">
          <span>{{ label }}</span>
          <strong>{{ value }}</strong>
        </div>
      </div>
    </header>

    <figure v-if="frontmatter.image" class="sc-article-cover">
      <img
        :src="frontmatter.image"
        :alt="frontmatter.imageAlt || frontmatter.title"
        width="1600"
        height="700"
        loading="lazy"
        decoding="async"
      />
      <figcaption>{{ copy.featuredImage }}: {{ frontmatter.imageAlt || frontmatter.title }}</figcaption>
    </figure>

    <section v-if="takeaways.length" class="sc-article-takeaways" data-seo-module="takeaways">
      <h2>{{ copy.takeaways }}</h2>
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
      <div v-if="localizedRelatedProducts.length" class="sc-article-link-block">
        <h2>{{ copy.relatedProducts }}</h2>
        <div class="sc-article-link-grid">
          <a v-for="item in localizedRelatedProducts" :key="item.href || item.title" :href="item.href" class="sc-article-link-card">
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
              <span>{{ item.summary || item.description || copy.viewProduct }}</span>
            </div>
          </a>
        </div>
      </div>

      <div v-if="relatedArticles.length" class="sc-article-link-block">
        <h2>{{ copy.relatedArticles }}</h2>
        <div class="sc-article-link-grid">
          <a v-for="item in relatedArticles" :key="item.href || item.title" :href="item.href" class="sc-article-link-card">
            <strong>{{ item.title }}</strong>
            <span>{{ item.summary || item.category || copy.readArticle }}</span>
          </a>
        </div>
      </div>

      <div v-if="localizedRelatedCases.length" class="sc-article-link-block">
        <h2>{{ copy.relatedCases }}</h2>
        <div class="sc-article-link-grid">
          <a v-for="item in localizedRelatedCases" :key="item.href || item.title" :href="item.href" class="sc-article-link-card">
            <img v-if="item.image" :src="item.image" :alt="item.imageAlt || item.title" width="360" height="220" loading="lazy" decoding="async" />
            <div class="sc-article-link-card__body"><strong>{{ item.title }}</strong><span>{{ item.summary || copy.readCase }}</span></div>
          </a>
        </div>
      </div>

      <div v-if="localizedRelatedSolutions.length" class="sc-article-link-block">
        <h2>{{ copy.relatedSolutions }}</h2>
        <div class="sc-article-link-grid">
          <a v-for="item in localizedRelatedSolutions" :key="item.href || item.title" :href="item.href" class="sc-article-link-card">
            <img v-if="item.image" :src="item.image" :alt="item.imageAlt || item.title" width="360" height="220" loading="lazy" decoding="async" />
            <div class="sc-article-link-card__body"><strong>{{ item.title }}</strong><span>{{ item.summary || copy.readSolution }}</span></div>
          </a>
        </div>
      </div>

      <div class="sc-article-final-cta__inner">
        <h2>{{ copy.ctaTitle }}</h2>
        <p>{{ copy.ctaText }}</p>
        <button type="button" class="sc-btn-primary" @click="openInquiry(frontmatter.title)">
          {{ copy.ctaButton }}
        </button>
      </div>
    </section>
  </article>
</template>
