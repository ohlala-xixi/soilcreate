<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import InquiryForm from './InquiryForm.vue'

const open = ref(false)
const productName = ref('General Inquiry')

const handleOpen = (event) => {
  productName.value = event.detail?.productName || 'General Inquiry'
  open.value = true
  document.documentElement.classList.add('sc-modal-open')
}

const close = ({ emitDismissed = true } = {}) => {
  const wasOpen = open.value
  open.value = false
  document.documentElement.classList.remove('sc-modal-open')
  if (wasOpen && emitDismissed) {
    window.dispatchEvent(new CustomEvent('soilcreate:inquiry-dismissed'))
  }
}

const handleSubmitted = () => {
  window.dispatchEvent(new CustomEvent('soilcreate:inquiry-submitted'))
  close({ emitDismissed: false })
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && open.value) close()
}

onMounted(() => {
  window.addEventListener('soilcreate:open-inquiry', handleOpen)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('soilcreate:open-inquiry', handleOpen)
  window.removeEventListener('keydown', handleKeydown)
  document.documentElement.classList.remove('sc-modal-open')
})
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="sc-inquiry-modal" role="dialog" aria-modal="true" aria-label="Inquiry form">
      <button class="sc-inquiry-modal__backdrop" type="button" aria-label="Close inquiry form" @click="close" />
      <div class="sc-inquiry-modal__panel">
        <button class="sc-inquiry-modal__close" type="button" aria-label="Close inquiry form" @click="close">×</button>
        <InquiryForm :product-name="productName" compact @submitted="handleSubmitted" />
      </div>
    </div>
  </Teleport>
</template>
