export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined') return

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams)
  } else {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    })
  }

  if (typeof window.umami?.track === 'function') {
    window.umami.track(eventName, eventParams)
  }
}
