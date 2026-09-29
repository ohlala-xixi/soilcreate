export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined') return

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams)
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: eventName,
    ...eventParams
  })
}
