export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: eventName,
    ...eventParams
  })
}
