import { promises as fs } from 'node:fs'
import { execFile } from 'node:child_process'
import path from 'node:path'
import { promisify } from 'node:util'
import { pathToFileURL } from 'node:url'
import { createMarkdownRenderer } from 'vitepress'

const siteUrl = 'https://soilcreate.com'
const docsDir = path.resolve('docs')
const distDir = path.resolve('docs/.vitepress/dist')
const output = path.join(distDir, 'sitemap.xml')
const execFileAsync = promisify(execFile)

export const collectIndexablePages = async (sourceDir) => {
  const cwd = path.resolve(sourceDir)
  // Build from the Git index; local files outside the index are never published URLs.
  const [tracked, ignored] = await Promise.all([
    execFileAsync('git', ['ls-files', '-z', '--cached', '--', '.'], { cwd }),
    execFileAsync('git', ['ls-files', '-z', '--cached', '--ignored', '--exclude-standard', '--', '.'], { cwd })
  ])
  const ignoredFiles = new Set(ignored.stdout.split('\0'))
  const markdown = await createMarkdownRenderer(cwd)
  const files = []
  for (const relative of [...new Set(tracked.stdout.split('\0'))].sort()) {
    if (!relative.endsWith('.md') || ignoredFiles.has(relative)) continue
    if (/^(?:\.vitepress|public|tools)\//.test(relative)) continue
    if (/(?:^|[\/._-])(?:drafts?|previews?)(?:[\/._-]|$)/i.test(relative)) continue
    const file = path.join(cwd, relative)
    let content
    try {
      content = await fs.readFile(file, 'utf8')
    } catch (error) {
      if (error.code === 'ENOENT') continue
      throw error
    }
    const env = {}
    markdown.render(content, env)
    const frontmatter = env.frontmatter || {}
    const enabled = (value) => value === true || value === 'true'
    if (['noindex', 'draft', 'preview'].some((key) => enabled(frontmatter[key]))) continue
    if (frontmatter.sitemap === false || frontmatter.sitemap === 'false') continue
    const robots = (frontmatter.head || []).filter(([tag, attrs]) => tag === 'meta' && /^(robots|googlebot)$/i.test(attrs?.name || ''))
    if (robots.some(([, attrs]) => /(?:^|[\s,])(noindex|none)(?:$|[\s,])/i.test(attrs.content || ''))) continue
    files.push(file)
  }
  return files
}

const routeFromFile = (file) => {
  const relative = path.relative(docsDir, file).split(path.sep).join('/')
  const withoutExt = relative.replace(/\.md$/, '')

  if (withoutExt === 'index') return '/'
  if (withoutExt.endsWith('/index')) return `/${withoutExt.slice(0, -'/index'.length)}/`
  return `/${withoutExt}`
}

const lastmodFromFile = async (file) => {
  const stats = await fs.stat(file)
  return stats.mtime.toISOString()
}

const sitemapHints = (route) => {
  if (route === '/') return { changefreq: 'weekly', priority: '1.0' }
  if (route === '/products/' || route === '/cases' || route === '/solutions/') return { changefreq: 'weekly', priority: '0.9' }
  if (route.startsWith('/products/') || route.startsWith('/cases/') || route.startsWith('/solutions/')) {
    return { changefreq: 'monthly', priority: '0.8' }
  }
  return { changefreq: 'monthly', priority: '0.7' }
}

const escapeXml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const xmlTag = (name, value) => (value ? `    <${name}>${escapeXml(value)}</${name}>\n` : '')

const generateSitemap = async () => {
  const files = await collectIndexablePages(docsDir)
  const urls = []

  for (const file of files) {
    const route = routeFromFile(file)
    const lastmod = await lastmodFromFile(file)
    const hints = sitemapHints(route)

    urls.push(
      `  <url>\n` +
        xmlTag('loc', `${siteUrl}${route}`) +
        xmlTag('lastmod', lastmod) +
        xmlTag('changefreq', hints.changefreq) +
        xmlTag('priority', hints.priority) +
        `  </url>`
    )
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`

  await fs.mkdir(distDir, { recursive: true })
  await fs.writeFile(output, xml, 'utf8')
  console.log(`Sitemap generated: ${urls.length} tracked indexable URLs`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) await generateSitemap()
