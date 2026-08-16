import { defineConfig } from 'vitepress'

const siteUrl = 'https://soilcreate.com'
const siteName = 'SoilCreate'
const isProductionBuild = process.argv.includes('build')
const defaultDescription =
  'Advanced geotechnical monitoring instruments and precision sensor systems for global engineering projects.'
const defaultImage = `${siteUrl}/images/shared/hero/bridge-infrastructure-hero.jpg`
const logoImage = `${siteUrl}/images/logo/site-icon.png`

const stripDuplicateSiteName = (value) => {
  if (!value || typeof value !== 'string') return value
  const brandSuffix = new RegExp(`(?:\\s*\\|\\s*${siteName})+$`, 'i')
  const brandPrefix = new RegExp(`^${siteName}\\s*\\|\\s*`, 'i')
  const title = value.trim().replace(brandSuffix, '').replace(brandPrefix, '').trim()
  return title || siteName
}

const routeFromPage = (page) => {
  const withoutExt = page.replace(/\.md$/, '')
  if (withoutExt === 'index') return '/'
  if (withoutExt.endsWith('/index')) return `/${withoutExt.slice(0, -'/index'.length)}/`
  return `/${withoutExt.replace(/^\//, '')}`
}

const absoluteUrl = (path) => new URL(path, siteUrl).toString()

const imageFromFrontmatter = (frontmatter) => {
  const image = frontmatter.ogImage || frontmatter.image
  if (!image) return defaultImage
  if (/^https?:\/\//.test(image)) return image
  return absoluteUrl(image)
}

const stripTrailingSlash = (url) => url.replace(/\/$/, '')

const englishToSpanishRoutes = new Map([
  ['/', '/es/'],
  ['/about', '/es/about'],
  ['/products/', '/es/products/'],
  ['/cases', '/es/cases'],
  ['/solutions/', '/es/solutions/'],
  ['/contact', '/es/contact'],
  ['/products/deformation-monitoring/in-place-inclinometer', '/es/products/deformation-monitoring/in-place-inclinometer'],
  ['/products/deformation-monitoring/flexible-inclinometer', '/es/products/deformation-monitoring/flexible-inclinometer'],
  ['/products/deformation-monitoring/sliding-inclinometer', '/es/products/deformation-monitoring/sliding-inclinometer']
])

const spanishToEnglishRoutes = new Map([...englishToSpanishRoutes].map(([english, spanish]) => [spanish, english]))
const isSpanishRoute = (route) => route === '/es/' || route.startsWith('/es/')
const languageForRoute = (route) => isSpanishRoute(route) ? 'es-ES' : 'en-US'
const localeForRoute = (route) => isSpanishRoute(route) ? 'es_ES' : 'en_US'

const alternateLinksForRoute = (route) => {
  const englishRoute = isSpanishRoute(route) ? spanishToEnglishRoutes.get(route) : route
  const spanishRoute = isSpanishRoute(route) ? route : englishToSpanishRoutes.get(route)
  if (!englishRoute || !spanishRoute) return []

  return [
    ['link', { rel: 'alternate', hreflang: 'en', href: absoluteUrl(englishRoute) }],
    ['link', { rel: 'alternate', hreflang: 'es', href: absoluteUrl(spanishRoute) }],
    ['link', { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(englishRoute) }]
  ]
}

const breadcrumbSchema = (canonical, pageTitle) => {
  const path = new URL(canonical).pathname
  const segments = path.split('/').filter(Boolean)
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl
    }
  ]

  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const itemPath = segment === 'case-studies' && index === 0 ? '/solution' : currentPath
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: index === segments.length - 1 ? pageTitle : segment === 'case-studies' ? 'Solutions' : segment.replace(/-/g, ' '),
      item: stripTrailingSlash(absoluteUrl(itemPath))
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  }
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: logoImage,
  email: 'sales@soilcreate.com',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'sales@soilcreate.com',
      telephone: '+86-153-5604-6033',
      availableLanguage: ['English', 'Spanish', 'Chinese']
    }
  ]
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  publisher: {
    '@id': `${siteUrl}/#organization`
  },
  inLanguage: 'en-US'
}

const productSchema = (frontmatter, canonical, pageTitle, pageDescription, image, language) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: pageTitle,
  description: pageDescription,
  image,
  sku: frontmatter.model || frontmatter.sku,
  category: [frontmatter.category, frontmatter.subcategory].filter(Boolean).join(' > '),
  brand: {
    '@type': 'Brand',
    name: siteName
  },
  manufacturer: {
    '@id': `${siteUrl}/#organization`
  },
  url: canonical,
  inLanguage: language,
  additionalProperty: (frontmatter.specs || []).map((spec) => ({
    '@type': 'PropertyValue',
    name: spec.label || spec.key || spec.parameter,
    value: spec.value
  })).filter((item) => item.name && item.value)
})

const articleSchema = (frontmatter, canonical, pageTitle, pageDescription, image, language) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: pageTitle,
  description: pageDescription,
  image,
  author: {
    '@id': `${siteUrl}/#organization`
  },
  publisher: {
    '@id': `${siteUrl}/#organization`
  },
  mainEntityOfPage: canonical,
  inLanguage: language,
  about: frontmatter.industry || frontmatter.projectType || 'Geotechnical monitoring'
})

const schemaForPage = ({ frontmatter, canonical, pageTitle, pageDescription, image, route }) => {
  const schemas = [breadcrumbSchema(canonical, pageTitle)]
  const language = languageForRoute(route)

  if (route === '/' || route === '/es/') {
    schemas.push(organizationSchema, { ...websiteSchema, inLanguage: language })
  }

  if (frontmatter.layout === 'product' || frontmatter.schemaType === 'product') {
    schemas.push(productSchema(frontmatter, canonical, pageTitle, pageDescription, image, language))
  }

  if (frontmatter.layout === 'case-study' || frontmatter.layout === 'seo-article') {
    schemas.push(articleSchema(frontmatter, canonical, pageTitle, pageDescription, image, language))
  }

  return schemas
}

export default defineConfig({
  lang: 'en-US',
  title: siteName,
  titleTemplate: ':title | SoilCreate',
  description: defaultDescription,
  srcExclude: isProductionBuild ? ['tools/**'] : [],
  cleanUrls: true,
  lastUpdated: true,
  appearance: false,
  themeConfig: {
    siteTitle: siteName,
    nav: [],
    sidebar: {},
    socialLinks: [],
    footer: false
  },
  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-KBD5FBWBZK' }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KBD5FBWBZK');`
    ],
    [
      'script',
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NXV7CZGC');`
    ],
    ['link', { rel: 'icon', href: '/images/logo/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/logo/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/logo/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/logo/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#3A474E' }],
    ['meta', { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' }],
    ['meta', { name: 'author', content: siteName }],
    ['meta', { property: 'og:site_name', content: siteName }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
  transformPageData(pageData) {
    pageData.title = stripDuplicateSiteName(pageData.title)
  },
  transformHead({ page, pageData, title, description }) {
    const frontmatter = pageData.frontmatter || {}
    const route = routeFromPage(page)
    const canonical = frontmatter.canonical || absoluteUrl(route)
    const pageTitle = stripDuplicateSiteName(title || frontmatter.title || siteName)
    const pageDescription = description || frontmatter.description || defaultDescription
    const image = imageFromFrontmatter(frontmatter)
    const language = frontmatter.lang || languageForRoute(route)
    const robots = frontmatter.noindex
      ? 'noindex,nofollow'
      : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'

    const schemas = schemaForPage({ frontmatter, canonical, pageTitle, pageDescription, image, route })

    return [
      ['link', { rel: 'canonical', href: canonical }],
      ...alternateLinksForRoute(route),
      ['meta', { name: 'robots', content: robots }],
      ['meta', { property: 'og:locale', content: localeForRoute(route) }],
      ['meta', { property: 'og:type', content: frontmatter.layout === 'case-study' || frontmatter.layout === 'seo-article' ? 'article' : 'website' }],
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }],
      ['meta', { name: 'twitter:image', content: image }],
      ['meta', { name: 'language', content: language }],
      ...schemas.map((schema) => [
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(schema)
      ])
    ]
  }
})
