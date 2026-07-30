import { openInquiry } from './inquiry.js'
import { trackEvent } from './tracking.js'

const SESSION_DISMISSED_KEY = 'soilcreate_auto_inquiry_dismissed'
const LEAD_SUBMITTED_KEY = 'soilcreate_inquiry_submitted'
const DWELL_TIME_MS = 120000
const FRUSTRATION_WINDOW_MS = 30000
const FRUSTRATION_CLICK_LIMIT = 5
const DEAD_CLICK_DELAY_MS = 900

const effectiveSelectors = [
  'a[href]',
  'button',
  'input',
  'select',
  'textarea',
  'summary',
  '[role="button"]',
  '[role="link"]',
  '[contenteditable="true"]',
  '.sc-inquiry-modal'
].join(',')

const criticalSelectors = [
  '.sc-btn-quote',
  '.sc-btn-cta',
  '.sc-js-enquiry',
  '.sc-card-quote',
  '.sc-download-card',
  '.sc-btn-catalog-download',
  'a[href^="mailto:"]',
  'a[href*="wa.me"]',
  'a[href*="whatsapp"]',
  'a[download]'
].join(',')

const getPath = () => window.location.pathname + window.location.search + window.location.hash

const isSmartInquiryPage = () =>
  window.location.pathname.startsWith('/products/') ||
  window.location.pathname.startsWith('/solutions/')

const storageGet = (storage, key) => {
  try {
    return storage.getItem(key)
  } catch {
    return null
  }
}

const storageSet = (storage, key, value) => {
  try {
    storage.setItem(key, value)
  } catch {
    // Storage can be disabled in privacy modes.
  }
}

const hasAutoInquiryBlocked = () =>
  storageGet(window.sessionStorage, SESSION_DISMISSED_KEY) === '1' ||
  storageGet(window.localStorage, LEAD_SUBMITTED_KEY) === '1'

export const initSmartInquiryTriggers = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => {}
  }

  let disposed = false
  let autoOpened = false
  let clickTimes = []
  let lastEffectiveAt = Date.now()
  let currentPath = getPath()
  const pendingChecks = new Set()

  const resetDeadClicks = () => {
    clickTimes = []
    lastEffectiveAt = Date.now()
  }

  const markDismissed = () => {
    storageSet(window.sessionStorage, SESSION_DISMISSED_KEY, '1')
  }

  const markSubmitted = () => {
    storageSet(window.localStorage, LEAD_SUBMITTED_KEY, '1')
  }

  const triggerAutoInquiry = (reason, productName = 'Engineering Consultation') => {
    if (disposed || autoOpened || hasAutoInquiryBlocked()) return false

    autoOpened = true
    resetDeadClicks()
    trackEvent('auto_inquiry_trigger', {
      trigger_reason: reason,
      page_path: window.location.pathname
    })
    openInquiry(productName)
    return true
  }

  let dwellTimer

  const startDwellTimer = () => {
    if (dwellTimer) window.clearTimeout(dwellTimer)
    if (!isSmartInquiryPage()) return
    dwellTimer = window.setTimeout(() => {
      triggerAutoInquiry('dwell_120_seconds')
    }, DWELL_TIME_MS)
  }

  const checkRouteChange = () => {
    const nextPath = getPath()
    if (nextPath !== currentPath) {
      currentPath = nextPath
      resetDeadClicks()
      startDwellTimer()
      return true
    }
    return false
  }

  const scheduleDeadCriticalCheck = (target) => {
    if (!isSmartInquiryPage()) return

    const startPath = getPath()
    const startScrollX = window.scrollX
    const startScrollY = window.scrollY
    const checkId = window.setTimeout(() => {
      pendingChecks.delete(checkId)
      if (disposed || hasAutoInquiryBlocked()) return

      const pathChanged = getPath() !== startPath
      const scrolled = Math.abs(window.scrollX - startScrollX) > 8 || Math.abs(window.scrollY - startScrollY) > 8
      const modalOpen = document.documentElement.classList.contains('sc-modal-open')
      const href = target?.getAttribute?.('href') || ''
      const isActionButton = target?.tagName === 'BUTTON' || target?.getAttribute?.('role') === 'button'
      const shouldHaveFeedback =
        isActionButton ||
        href.startsWith('mailto:') ||
        href.includes('wa.me') ||
        target?.hasAttribute?.('download')

      if (!pathChanged && !scrolled && !modalOpen && shouldHaveFeedback) {
        triggerAutoInquiry('critical_click_no_feedback', 'Contact Request')
      }
    }, DEAD_CLICK_DELAY_MS)
    pendingChecks.add(checkId)
  }

  const handleClick = (event) => {
    if (!isSmartInquiryPage()) return
    if (checkRouteChange()) return

    const target = event.target?.closest?.(criticalSelectors)
    if (target) {
      scheduleDeadCriticalCheck(target)
      resetDeadClicks()
      return
    }

    if (event.target?.closest?.(effectiveSelectors)) {
      resetDeadClicks()
      return
    }

    const now = Date.now()
    clickTimes = clickTimes.filter((time) => now - time <= FRUSTRATION_WINDOW_MS)
    clickTimes.push(now)

    if (clickTimes.length >= FRUSTRATION_CLICK_LIMIT && now - lastEffectiveAt >= 5000) {
      triggerAutoInquiry('repeated_dead_clicks')
    }
  }

  const handleScroll = () => {
    resetDeadClicks()
  }

  const handleVisibilityChange = () => {
    if (!document.hidden) checkRouteChange()
  }

  const handleOpened = () => {
    resetDeadClicks()
  }

  const handleDismissed = () => {
    markDismissed()
  }

  const handleSubmitted = () => {
    markSubmitted()
  }

  document.addEventListener('click', handleClick, true)
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('popstate', checkRouteChange)
  const routePollTimer = window.setInterval(checkRouteChange, 1000)
  document.addEventListener('visibilitychange', handleVisibilityChange)
  window.addEventListener('soilcreate:open-inquiry', handleOpened)
  window.addEventListener('soilcreate:inquiry-dismissed', handleDismissed)
  window.addEventListener('soilcreate:inquiry-submitted', handleSubmitted)
  startDwellTimer()

  return () => {
    disposed = true
    if (dwellTimer) window.clearTimeout(dwellTimer)
    pendingChecks.forEach((checkId) => window.clearTimeout(checkId))
    window.clearInterval(routePollTimer)
    document.removeEventListener('click', handleClick, true)
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('popstate', checkRouteChange)
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    window.removeEventListener('soilcreate:open-inquiry', handleOpened)
    window.removeEventListener('soilcreate:inquiry-dismissed', handleDismissed)
    window.removeEventListener('soilcreate:inquiry-submitted', handleSubmitted)
  }
}
