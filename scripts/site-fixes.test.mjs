import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import config from '../docs/.vitepress/config.mjs'
import { englishToSpanishRoutes } from '../docs/.vitepress/theme/data/languageRoutes.js'
import { rasberProductPages } from '../docs/.vitepress/theme/data/rasberProductPages.js'
import { spanishProductPageHtml } from '../docs/.vitepress/theme/data/spanishProductPageHtml.js'

const builtHtml = (route) => readFileSync(new URL(`../docs/.vitepress/dist${route.endsWith('/') ? `${route}index` : route}.html`, import.meta.url), 'utf8')

test('all translated pages build with Spanish language and reciprocal hreflang', () => {
  for (const [english, spanish] of englishToSpanishRoutes) {
    for (const route of [english, spanish]) {
      const html = builtHtml(route)
      assert.ok(html.includes(`<html lang="${route === spanish ? 'es-ES' : 'en-US'}"`), route)
      assert.ok(html.includes(`hreflang="en" href="https://soilcreate.com${english}"`), route)
      assert.ok(html.includes(`hreflang="es" href="https://soilcreate.com${spanish}"`), route)
    }
  }
  assert.equal(config.locales.es.lang, 'es-ES')
})

test('all imported product breadcrumbs return to their language catalog', () => {
  assert.equal(Object.keys(rasberProductPages).length, 9)
  for (const html of Object.values(rasberProductPages)) assert.ok(html.includes('<a href="/products/">Products</a>'))
  for (const html of Object.values(spanishProductPageHtml)) assert.ok(html.includes('<a href="/es/products/">Productos</a>'))
})

test('IPI copy has conditional specifications, paired storage and translated comparison labels', () => {
  for (const html of [rasberProductPages['in-place-inclinometer'], spanishProductPageHtml['in-place-inclinometer']]) {
    assert.doesNotMatch(html, /1×10⁻⁸|1×10⁻⁵|instantaneous|cambios instantaneos|sub-one-year|three years or longer|each string buffers|over a year of history/)
  }
  const spanish = spanishProductPageHtml['in-place-inclinometer']
  for (const label of ['Cableado', 'Señal y direccionamiento', 'Peso de la varilla', 'Funcionamiento sin conexión']) assert.ok(spanish.includes(label))
  for (const label of ['Wiring', 'Signal &amp; addressing', 'Signal & addressing', 'Rod weight', 'Offline resilience']) assert.ok(!spanish.includes(label))
  assert.ok(spanish.includes('controlador o registrador asociado'))
  assert.ok(rasberProductPages['in-place-inclinometer'].includes('test duration and calibration conditions'))
})

test('an update date never becomes an inferred publication date', () => {
  const frontmatter = { layout: 'seo-article', updated: '2026-09-08', answerFirst: 'Existing answer-first summary' }
  const schema = (data) => config.transformHead({ page: 'solutions/test.md', pageData: { frontmatter: data } })
    .filter(([tag, attrs]) => tag === 'script' && attrs.type === 'application/ld+json')
    .map(([, , json]) => JSON.parse(json)).find((item) => item['@type'] === 'Article')
  const unpublished = schema(frontmatter)
  assert.equal(unpublished.datePublished, undefined)
  assert.equal(unpublished.dateModified, '2026-09-08')
  assert.equal(unpublished.abstract, frontmatter.answerFirst)
  assert.equal(unpublished.author['@type'], 'Organization')
  assert.equal(schema({ ...frontmatter, published: '2026-08-01' }).datePublished, '2026-08-01')
})

test('built sitemap excludes both local previews and has unique URLs', () => {
  const xml = readFileSync(new URL('../docs/.vitepress/dist/sitemap.xml', import.meta.url), 'utf8')
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
  assert.ok(urls.length > 0)
  assert.equal(new Set(urls).size, urls.length)
  assert.doesNotMatch(xml, /seo-generator-preview/)
})
