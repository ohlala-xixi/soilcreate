import { defineConfig } from 'vitepress'

const siteUrl = 'https://soilcreate.com'
const siteName = 'SoilCreate'
const defaultDescription =
  'Industrial grease pumps and geotechnical monitoring equipment from a source factory built for global buyers.'
const defaultImage = `${siteUrl}/images/hero/home-hero.svg`

const routeFromPage = (page) => {
  const withoutIndex = page.replace(/(^|\/)index\.md$/, '$1')
  const withoutExt = withoutIndex.replace(/\.md$/, '')
  if (!withoutExt || withoutExt === '/') return '/'
  return `/${withoutExt.replace(/^\//, '')}/`
}

const absoluteUrl = (path) => new URL(path, siteUrl).toString()

const imageFromFrontmatter = (frontmatter) => {
  const image = frontmatter.ogImage || frontmatter.image
  if (!image) return defaultImage
  if (/^https?:\/\//.test(image)) return image
  return absoluteUrl(image)
}

export default defineConfig({
  lang: 'en-US',
  title: siteName,
  titleTemplate: ':title | SoilCreate',
  description: defaultDescription,
  cleanUrls: true,
  lastUpdated: true,
  appearance: false,
  themeConfig: {
    siteTitle: siteName,
    nav: [],
    sidebar: {
      '/products/': [
        {
          text: 'Product Catalog',
          items: [
            { text: 'Overview', link: '/products/' },
            {
              text: 'Pneumatic Grease Pump',
              link: '/products/grease-pumps/pneumatic-grease-pump'
            },
            {
              text: 'Electric Grease Pump',
              link: '/products/grease-pumps/electric-grease-pump'
            },
            {
              text: 'Inclinometer Sensor',
              link: '/products/geotechnical-monitoring/inclinometer-sensor'
            },
            {
              text: 'Piezometer Sensor',
              link: '/products/geotechnical-monitoring/piezometer-sensor'
            }
          ]
        }
      ]
    },
    socialLinks: [],
    footer: false
  },
  head: [
    [
      'script',
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NXV7CZGC');`
    ],
    ['meta', { name: 'theme-color', content: '#3A474E' }],
    ['meta', { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' }],
    ['meta', { name: 'author', content: siteName }],
    ['meta', { property: 'og:site_name', content: siteName }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
  transformHead({ page, pageData, title, description }) {
    const frontmatter = pageData.frontmatter || {}
    const route = routeFromPage(page)
    const canonical = frontmatter.canonical || absoluteUrl(route)
    const pageTitle = title || frontmatter.title || siteName
    const pageDescription = description || frontmatter.description || defaultDescription
    const image = imageFromFrontmatter(frontmatter)
    const robots = frontmatter.noindex
      ? 'noindex,nofollow'
      : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'

    return [
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { name: 'robots', content: robots }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }],
      ['meta', { name: 'twitter:image', content: image }]
    ]
  }
})
