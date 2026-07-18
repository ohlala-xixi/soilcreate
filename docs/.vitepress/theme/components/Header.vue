<script setup>
import { useRoute } from 'vitepress'
import { openInquiry } from '../utils/inquiry.js'
import { contactEmail, whatsappLink, whatsappNumber } from '../data/site.js'
import { trackEvent } from '../utils/tracking.js'

const route = useRoute()

const navItems = [
  { label: 'Home', href: '/', match: '/' },
  { label: 'About', href: '/about', match: '/about' },
  { label: 'Products', href: '/products/', match: '/products/' },
  { label: 'Cases', href: '/cases', match: '/cases' },
  { label: 'Solutions', href: '/solutions/', match: '/solutions/' },
  { label: 'Contact', href: '/contact', match: '/contact' }
]

const isActive = (item) => {
  if (item.match === '/') return route.path === '/'
  if (item.match === '/cases') return route.path === '/cases' || route.path.startsWith('/cases/')
  if (item.match === '/solutions/') return route.path === '/solutions/' || route.path.startsWith('/solutions/')
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
    <a href="/" class="sc-logo"><img src="/images/logo/soilcreate-icon.png" alt="SoilCreate icon" class="sc-logo-icon" />Soil<span>Create</span></a>
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
      <button class="sc-btn-quote" type="button" @click="openInquiry('General Inquiry')">
        Get a Quote
      </button>
    </nav>
  </header>
</template>
