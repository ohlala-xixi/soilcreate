import DefaultTheme from 'vitepress/theme'
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
  }
}

