<script setup>
import { Content, useData } from 'vitepress'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ProductLayout from './components/ProductLayout.vue'
import CaseStudyLayout from './components/CaseStudyLayout.vue'
import SeoArticleLayout from './components/SeoArticleLayout.vue'
import InquiryModal from './components/InquiryModal.vue'
import { onMounted, onUnmounted } from 'vue'
import { openInquiry } from './utils/inquiry.js'
import { initSmartInquiryTriggers } from './utils/smartInquiryTriggers.js'

const { frontmatter } = useData()

const handleGlobalEnquiryClick = (event) => {
  const target = event.target.closest?.('.sc-js-enquiry')
  if (!target) return
  openInquiry(target.dataset.product || 'General Inquiry')
}

let disposeSmartInquiryTriggers

onMounted(() => {
  document.addEventListener('click', handleGlobalEnquiryClick)
  disposeSmartInquiryTriggers = initSmartInquiryTriggers()
})

onUnmounted(() => {
  document.removeEventListener('click', handleGlobalEnquiryClick)
  disposeSmartInquiryTriggers?.()
})
</script>

<template>
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXV7CZGC" height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <Header />
  <main class="sc-main">
    <ProductLayout v-if="frontmatter.layout === 'product'" />
    <CaseStudyLayout v-else-if="frontmatter.layout === 'case-study'" />
    <SeoArticleLayout v-else-if="frontmatter.layout === 'seo-article'" />
    <Content v-else />
  </main>
  <Footer />
  <InquiryModal />
</template>
