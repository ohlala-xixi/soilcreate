import { trackEvent } from './tracking.js'

export const openInquiry = (productName = 'General Inquiry') => {
  if (typeof window === 'undefined') return
  trackEvent('inquiry_modal_open', {
    product_name: productName
  })
  window.dispatchEvent(
    new CustomEvent('soilcreate:open-inquiry', {
      detail: { productName }
    })
  )
}
