import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdtemp, mkdir, writeFile, rm, readFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { test } from 'node:test'
import { collectIndexablePages } from './generate-sitemap.mjs'

test('sitemap includes only tracked indexable Markdown and preserves local previews', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'soilcreate-sitemap-'))
  try {
    execFileSync('git', ['init', '--quiet', root])
    const sourceDir = path.join(root, 'docs')
    await mkdir(sourceDir)
    const fixtures = {
      'index.md': '# Home',
      'published.md': '---\ntitle: Published\n---\n# Published',
      'draft.md': '# Draft',
      'hidden.md': '---\nnoindex: true\n---',
      'pending.md': '---\ndraft: true # editorial review\n---',
      'staged-preview.md': '# Preview',
      'private.md': '---\nhead:\n  - - meta\n    - name: robots\n      content: noindex,follow\n---',
      'excluded.md': '---\nsitemap: false\n---',
      'ignored.md': '# Ignored even if already tracked',
      'deleted.md': '# Removed from worktree'
    }
    for (const [name, content] of Object.entries(fixtures)) await writeFile(path.join(sourceDir, name), content)
    execFileSync('git', ['add', 'docs'], { cwd: root })
    await writeFile(path.join(root, '.gitignore'), 'docs/ignored.md\ndocs/seo-generator-preview.md\n')
    await writeFile(path.join(sourceDir, 'seo-generator-preview.md'), '# Local preview')
    await writeFile(path.join(sourceDir, 'untracked.md'), '# Untracked')
    await rm(path.join(sourceDir, 'deleted.md'))
    const pages = await collectIndexablePages(sourceDir)
    assert.deepEqual(pages.map((file) => path.basename(file)), ['index.md', 'published.md'])
    assert.equal(await readFile(path.join(sourceDir, 'seo-generator-preview.md'), 'utf8'), '# Local preview')
  } finally {
    await rm(root, { recursive: true, force: true })
  }
})

test('a missing Git repository stops generation instead of publishing unchecked files', async () => {
  const sourceDir = await mkdtemp(path.join(tmpdir(), 'soilcreate-no-git-'))
  try {
    await assert.rejects(collectIndexablePages(sourceDir), /not a git repository/)
  } finally {
    await rm(sourceDir, { recursive: true, force: true })
  }
})
