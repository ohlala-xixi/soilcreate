import DefaultTheme from 'vitepress/theme'
import { defineAsyncComponent } from 'vue'
import './style.css'
import Layout from './Layout.vue'
import ProductCatalog from './components/ProductCatalog.vue'
import ProductsList from './components/ProductsList.vue'
import InquiryForm from './components/InquiryForm.vue'
import ContactInquiryForm from './components/ContactInquiryForm.vue'
import TrustSection from './components/TrustSection.vue'
import ContactPage from './components/ContactPage.vue'
import AboutPage from './components/AboutPage.vue'
import HomePage from './components/HomePage.vue'
import CaseStudyPage from './components/CaseStudyPage.vue'
import ImportedCasePage from './components/ImportedCasePage.vue'
import ImportedProductPage from './components/ImportedProductPage.vue'
import HomeDataSections from './components/HomeDataSections.vue'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ProductCatalog', ProductCatalog)
    app.component('ProductsList', ProductsList)
    app.component('InquiryForm', InquiryForm)
    app.component('ContactInquiryForm', ContactInquiryForm)
    app.component('TrustSection', TrustSection)
    app.component('ContactPage', ContactPage)
    app.component('AboutPage', AboutPage)
    app.component('HomePage', HomePage)
    app.component('CaseStudyPage', CaseStudyPage)
    app.component('ImportedCasePage', ImportedCasePage)
    app.component('ImportedProductPage', ImportedProductPage)
    app.component('HomeDataSections', HomeDataSections)
    if (import.meta.env.DEV) {
      app.component('SiteManagerPage', defineAsyncComponent(() => import('./components/SiteManagerPage.vue')))
    }
  }
}
