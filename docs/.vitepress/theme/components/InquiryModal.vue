<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import InquiryForm from './InquiryForm.vue'

const route = useRoute()
const open = ref(false)
const modalRoot = ref(null)
const panel = ref(null)
const closeButton = ref(null)
const productName = ref('General Inquiry')
const locale = computed(() => route.path.startsWith('/es/') || route.path === '/es' ? 'es' : 'en')
const dialogLabel = computed(() => locale.value === 'es' ? 'Formulario de consulta' : 'Inquiry form')
const closeLabel = computed(() => locale.value === 'es' ? 'Cerrar formulario de consulta' : 'Close inquiry form')
let triggerElement = null
let inertedSiblings = []

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',')

const getFocusableElements = () =>
  [...(panel.value?.querySelectorAll(focusableSelector) || [])].filter((element) => {
    const style = window.getComputedStyle(element)
    return element.getClientRects().length > 0 && style.display !== 'none' && style.visibility !== 'hidden'
  })

const lockBackground = () => {
  if (!modalRoot.value) return
  inertedSiblings = [...document.body.children]
    .filter((element) => element !== modalRoot.value)
    .map((element) => ({
      element,
      inert: element.inert,
      ariaHidden: element.getAttribute('aria-hidden')
    }))

  for (const { element } of inertedSiblings) {
    element.inert = true
    element.setAttribute('aria-hidden', 'true')
  }
}

const unlockBackground = () => {
  for (const { element, inert, ariaHidden } of inertedSiblings) {
    element.inert = inert
    if (ariaHidden === null) element.removeAttribute('aria-hidden')
    else element.setAttribute('aria-hidden', ariaHidden)
  }
  inertedSiblings = []
}

const handleOpen = (event) => {
  if (!open.value) triggerElement = document.activeElement instanceof HTMLElement ? document.activeElement : null
  productName.value = event.detail?.productName || 'General Inquiry'
  open.value = true
  document.documentElement.classList.add('sc-modal-open')
}

const close = ({ emitDismissed = true } = {}) => {
  const wasOpen = open.value
  open.value = false
  document.documentElement.classList.remove('sc-modal-open')
  unlockBackground()
  if (wasOpen && emitDismissed) {
    window.dispatchEvent(new CustomEvent('soilcreate:inquiry-dismissed'))
  }
  if (wasOpen && triggerElement?.isConnected) {
    triggerElement.focus({ preventScroll: true })
  }
  triggerElement = null
}

const handleSubmitted = () => {
  window.dispatchEvent(new CustomEvent('soilcreate:inquiry-submitted'))
  close({ emitDismissed: false })
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && open.value) close()
}

const trapFocus = (event) => {
  if (!open.value || event.key !== 'Tab') return
  const focusableElements = getFocusableElements()
  if (!focusableElements.length) {
    event.preventDefault()
    panel.value?.focus()
    return
  }

  const first = focusableElements[0]
  const last = focusableElements[focusableElements.length - 1]
  if (!focusableElements.includes(document.activeElement)) {
    event.preventDefault()
    ;(event.shiftKey ? last : first).focus()
  } else if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

watch(open, async (isOpen) => {
  if (!isOpen) return
  await nextTick()
  if (!open.value) return
  closeButton.value?.focus({ preventScroll: true })
  lockBackground()
})

onMounted(() => {
  window.addEventListener('soilcreate:open-inquiry', handleOpen)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('soilcreate:open-inquiry', handleOpen)
  window.removeEventListener('keydown', handleKeydown)
  document.documentElement.classList.remove('sc-modal-open')
  unlockBackground()
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      ref="modalRoot"
      class="sc-inquiry-modal"
      role="dialog"
      aria-modal="true"
      :aria-label="dialogLabel"
      @keydown="trapFocus"
    >
      <button class="sc-inquiry-modal__backdrop" type="button" tabindex="-1" aria-hidden="true" @click="close" />
      <div ref="panel" class="sc-inquiry-modal__panel" tabindex="-1">
        <button ref="closeButton" class="sc-inquiry-modal__close" type="button" :aria-label="closeLabel" @click="close">×</button>
        <InquiryForm :product-name="productName" :locale="locale" compact @submitted="handleSubmitted" />
      </div>
    </div>
  </Teleport>
</template>
