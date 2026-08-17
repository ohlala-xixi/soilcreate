<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { openInquiry } from '../utils/inquiry.js'
import { contactEmail, whatsappLink, whatsappNumber } from '../data/site.js'
import { trackEvent } from '../utils/tracking.js'

const route = useRoute()

const englishToSpanish = {
  '/': '/es/',
  '/about': '/es/about',
  '/products/': '/es/products/',
  '/cases': '/es/cases',
  '/cases/deep-foundation-pit': '/es/cases/deep-foundation-pit',
  '/cases/rail-transit': '/es/cases/rail-transit',
  '/cases/slope-landslide': '/es/cases/slope-landslide',
  '/cases/water-dam': '/es/cases/water-dam',
  '/cases/tunnel-convergence': '/es/cases/tunnel-convergence',
  '/cases/bridge-structure': '/es/cases/bridge-structure',
  '/solutions/': '/es/solutions/',
  '/contact': '/es/contact',
  '/products/deformation-monitoring/in-place-inclinometer': '/es/products/deformation-monitoring/in-place-inclinometer',
  '/products/deformation-monitoring/flexible-inclinometer': '/es/products/deformation-monitoring/flexible-inclinometer',
  '/products/deformation-monitoring/sliding-inclinometer': '/es/products/deformation-monitoring/sliding-inclinometer'
}

const spanishToEnglish = Object.fromEntries(Object.entries(englishToSpanish).map(([english, spanish]) => [spanish, english]))
const isSpanish = computed(() => route.path === '/es/' || route.path.startsWith('/es/'))

const navItems = computed(() => isSpanish.value
  ? [
      { label: 'Inicio', href: '/es/', match: '/es/' },
      { label: 'Acerca de', href: '/es/about', match: '/es/about' },
      { label: 'Productos', href: '/es/products/', match: '/es/products/' },
      { label: 'Casos', href: '/es/cases', match: '/es/cases' },
      { label: 'Soluciones', href: '/es/solutions/', match: '/es/solutions/' },
      { label: 'Contacto', href: '/es/contact', match: '/es/contact' }
    ]
  : [
      { label: 'Home', href: '/', match: '/' },
      { label: 'About', href: '/about', match: '/about' },
      { label: 'Products', href: '/products/', match: '/products/' },
      { label: 'Cases', href: '/cases', match: '/cases' },
      { label: 'Solutions', href: '/solutions/', match: '/solutions/' },
      { label: 'Contact', href: '/contact', match: '/contact' }
    ])

const isProductDetailPath = (path) => path.startsWith('/products/') && path !== '/products/'

const englishHref = computed(() => isSpanish.value ? spanishToEnglish[route.path] || '/' : route.path)
const spanishHref = computed(() => {
  if (isSpanish.value) return route.path
  if (englishToSpanish[route.path]) return englishToSpanish[route.path]
  if (isProductDetailPath(route.path)) return route.path
  return '/es/'
})
const logoHref = computed(() => isSpanish.value ? '/es/' : '/')

const isActive = (item) => {
  if (item.match === '/') return route.path === '/'
  if (item.match === '/es/') return route.path === '/es/'
  if (item.match === '/cases') return route.path === '/cases' || route.path.startsWith('/cases/')
  if (item.match === '/es/cases') return route.path === '/es/cases' || route.path.startsWith('/es/cases/')
  if (item.match === '/solutions/') return route.path === '/solutions/' || route.path.startsWith('/solutions/')
  if (item.match === '/es/solutions/') return route.path === '/es/solutions/' || route.path.startsWith('/es/solutions/')
  return route.path.startsWith(item.match)
}
</script>

<template>
  <div class="sc-top-bar">
    <div class="sc-contact-info">
      <a :href="'mailto:' + contactEmail" @click="trackEvent('email_click', { location: 'top_bar' })">✉ {{ contactEmail }}</a>
      <a :href="whatsappLink" target="_blank" rel="noopener" @click="trackEvent('whatsapp_click', { location: 'top_bar' })">✆ WhatsApp: {{ whatsappNumber }}</a>
    </div>
  </div>

  <header class="sc-header">
    <a :href="logoHref" class="sc-logo"><img src="/images/logo/soilcreate-icon.png" alt="SoilCreate icon" class="sc-logo-icon" width="32" height="32" decoding="async" />Soil<span>Create</span></a>
    <nav class="sc-nav" aria-label="Primary navigation">
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        :class="{ active: isActive(item) }"
        :aria-current="isActive(item) ? 'page' : undefined"
      >
        {{ item.label }}
      </a>
      <button class="sc-btn-quote" type="button" @click="openInquiry(isSpanish ? 'Consulta general' : 'General Inquiry')">
        {{ isSpanish ? 'Cotizar' : 'Get a Quote' }}
      </button>
      <div class="sc-language-switch" role="group" :aria-label="isSpanish ? 'Seleccionar idioma' : 'Choose language'">
        <a
          :href="englishHref"
          class="sc-language-option"
          :class="{ active: !isSpanish }"
          :aria-current="!isSpanish ? 'page' : undefined"
          title="English"
        >EN</a>
        <a
          :href="spanishHref"
          class="sc-language-option"
          :class="{ active: isSpanish }"
          :aria-current="isSpanish ? 'page' : undefined"
          title="Español"
        >ES</a>
      </div>
    </nav>
  </header>
</template>
