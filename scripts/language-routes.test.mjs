import assert from 'node:assert/strict'
import { test } from 'node:test'
import { englishToSpanishRoutes, getEnglishRoute, getSpanishRoute } from '../docs/.vitepress/theme/data/languageRoutes.js'

test('all 16 translated routes resolve bidirectionally with route variants', () => {
  assert.equal(englishToSpanishRoutes.length, 16)
  for (const [english, spanish] of englishToSpanishRoutes) {
    for (const [source, destination, lookup] of [[english, spanish, getSpanishRoute], [spanish, english, getEnglishRoute]]) {
      const withoutSlash = source.replace(/\/$/, '') || '/'
      const variants = [source, withoutSlash, `${withoutSlash.replace(/\/$/, '')}/`, `${source}?source=test#section`]
      if (source !== '/') variants.push(`${withoutSlash}.html`)
      for (const variant of variants) assert.equal(lookup(variant), destination, variant)
    }
  }
  assert.equal(getSpanishRoute('/untranslated-page'), undefined)
})
