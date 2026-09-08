export const englishToSpanishRoutes = [
  ['/', '/es/'],
  ['/about', '/es/about'],
  ['/products/', '/es/products/'],
  ['/cases', '/es/cases'],
  ['/cases/deep-foundation-pit', '/es/cases/deep-foundation-pit'],
  ['/cases/rail-transit', '/es/cases/rail-transit'],
  ['/cases/slope-landslide', '/es/cases/slope-landslide'],
  ['/cases/water-dam', '/es/cases/water-dam'],
  ['/cases/tunnel-convergence', '/es/cases/tunnel-convergence'],
  ['/cases/bridge-structure', '/es/cases/bridge-structure'],
  ['/solutions/', '/es/solutions/'],
  ['/solutions/deep-excavation-monitoring-huajiachi-station', '/es/solutions/deep-excavation-monitoring-huajiachi-station-es'],
  ['/contact', '/es/contact'],
  ['/products/deformation-monitoring/in-place-inclinometer', '/es/products/deformation-monitoring/in-place-inclinometer'],
  ['/products/deformation-monitoring/flexible-inclinometer', '/es/products/deformation-monitoring/flexible-inclinometer'],
  ['/products/deformation-monitoring/sliding-inclinometer', '/es/products/deformation-monitoring/sliding-inclinometer']
]

export const normalizeRoute = (route) => {
  if (!route) return '/'
  const pathname = route.split(/[?#]/, 1)[0].replace(/\.html$/, '')
  return pathname.replace(/\/+$/, '') || '/'
}

export const englishToSpanishRouteMap = new Map(englishToSpanishRoutes.map(([english, spanish]) => [normalizeRoute(english), spanish]))
export const spanishToEnglishRouteMap = new Map(englishToSpanishRoutes.map(([english, spanish]) => [normalizeRoute(spanish), english]))

export const getEnglishRoute = (route) => spanishToEnglishRouteMap.get(normalizeRoute(route))
export const getSpanishRoute = (route) => englishToSpanishRouteMap.get(normalizeRoute(route))
