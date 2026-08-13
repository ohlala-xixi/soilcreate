<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vitepress'
import { contactEmail, formspreeEndpoint, whatsappNumber } from '../data/site.js'
import { trackEvent } from '../utils/tracking.js'

const route = useRoute()
const subscriberEmail = ref('')
const subscribing = ref(false)
const subscribeStatus = ref('')
const subscribeStatusType = ref('success')
const isSpanish = computed(() => route.path === '/es/' || route.path.startsWith('/es/'))
const copy = computed(() => isSpanish.value
  ? {
      desc: 'Instrumentos de monitoreo geotecnico de precision y soporte de telemetria para proyectos de ingenieria exigentes.',
      quickLinks: 'Enlaces rapidos',
      about: 'Acerca de',
      products: 'Productos',
      cases: 'Casos',
      solutions: 'Soluciones',
      media: 'Media',
      stayUpdated: 'Mantengase actualizado',
      newsletterNote: 'Ideas de ingenieria, cada mes',
      emailPlaceholder: 'Correo empresarial',
      subscribe: 'Suscribirse',
      loading: 'Enviando...',
      subscribed: '✓ Suscripcion completada',
      failed: 'No se pudo suscribir. Intente de nuevo mas tarde.',
      rights: 'Todos los derechos reservados.',
      privacy: 'Politica de privacidad',
      terms: 'Terminos de servicio',
      subject: 'Suscripcion',
      formName: 'footer_subscription_es',
      hrefs: {
        home: '/es/',
        about: '/es/about',
        products: '/es/products/',
        cases: '/es/cases',
        solutions: '/es/solutions/',
        privacy: '/privacy',
        terms: '/terms'
      }
    }
  : {
      desc: 'Precision geotechnical monitoring instruments and telemetry support for demanding engineering projects.',
      quickLinks: 'Quick Links',
      about: 'About',
      products: 'All Products',
      cases: 'Cases',
      solutions: 'Solutions',
      media: 'Media',
      stayUpdated: 'Stay Updated',
      newsletterNote: 'Engineering insights, delivered monthly',
      emailPlaceholder: 'Your Business Email',
      subscribe: 'Subscribe',
      loading: 'Loading...',
      subscribed: '✓ Subscribed successfully',
      failed: 'Subscription failed. Please try again later.',
      rights: 'All Rights Reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      subject: '订阅',
      formName: 'footer_subscription',
      hrefs: {
        home: '/',
        about: '/about',
        products: '/products/',
        cases: '/cases',
        solutions: '/solutions/',
        privacy: '/privacy',
        terms: '/terms'
      }
    })

const submitSubscribe = async () => {
  subscribing.value = true
  subscribeStatus.value = ''

  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _subject: copy.value.subject,
        subject: copy.value.subject,
        form_name: copy.value.formName,
        recipient: contactEmail,
        email: subscriberEmail.value
      })
    })

    if (!response.ok) throw new Error('Subscription failed')

    trackEvent('sign_up', {
      form_name: copy.value.formName
    })
    subscriberEmail.value = ''
    subscribeStatusType.value = 'success'
    subscribeStatus.value = copy.value.subscribed
  } catch (error) {
    subscribeStatusType.value = 'error'
    subscribeStatus.value = copy.value.failed
  } finally {
    subscribing.value = false
  }
}
</script>

<template>
  <footer class="sc-footer">
    <div class="sc-footer-grid">
      <div>
        <a :href="copy.hrefs.home" class="sc-footer-brand">Soil<span>Create</span></a>
        <p class="sc-footer-desc">
          {{ copy.desc }}
        </p>
        <ul class="sc-footer-contact-list sc-footer-contact-list--brand">
          <li>Email: {{ contactEmail }}</li>
          <li>WhatsApp: {{ whatsappNumber }}</li>
        </ul>
      </div>

      <div class="sc-footer-col">
        <h4>{{ copy.quickLinks }}</h4>
        <ul>
          <li><a :href="copy.hrefs.about">{{ copy.about }}</a></li>
          <li><a :href="copy.hrefs.products">{{ copy.products }}</a></li>
          <li><a :href="copy.hrefs.cases">{{ copy.cases }}</a></li>
          <li><a :href="copy.hrefs.solutions">{{ copy.solutions }}</a></li>
        </ul>
      </div>

      <div class="sc-footer-col">
        <h4>{{ copy.media }}</h4>
        <ul>
          <li><a href="https://www.youtube.com/channel/UC80anTRbKJSR3-jUU0fbX9g" class="sc-media-link" target="_blank" rel="noopener noreferrer">▶ YouTube</a></li>
          <li><a href="https://www.linkedin.com/company/soilcreate-geotechnical/" class="sc-media-link" target="_blank" rel="noopener noreferrer">in LinkedIn</a></li>
        </ul>
      </div>

      <div class="sc-footer-col">
        <h4>{{ copy.stayUpdated }}</h4>
        <div class="sc-newsletter">
          <form @submit.prevent="submitSubscribe">
            <p class="sc-newsletter-note">{{ copy.newsletterNote }}</p>
            <input
              v-model="subscriberEmail"
              type="email"
              name="email"
              :placeholder="copy.emailPlaceholder"
              autocomplete="email"
              required
            />
            <button type="submit" :disabled="subscribing">
              {{ subscribing ? copy.loading : copy.subscribe }}
            </button>
            <p v-if="subscribeStatus" class="sc-subscribe-status" :class="subscribeStatusType">
              {{ subscribeStatus }}
            </p>
          </form>
        </div>
      </div>
    </div>

    <div class="sc-footer-bottom">
      <div>&copy; 2026 SoilCreate. {{ copy.rights }}</div>
      <div class="sc-footer-legal">
        <a :href="copy.hrefs.privacy">{{ copy.privacy }}</a>
        <a :href="copy.hrefs.terms">{{ copy.terms }}</a>
      </div>
    </div>
  </footer>
</template>
