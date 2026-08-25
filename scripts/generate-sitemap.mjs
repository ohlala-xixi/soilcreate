import { promises as fs } from 'node:fs'
import { execFile } from 'node:child_process'
import path from 'node:path'
import { promisify } from 'node:util'

const siteUrl = 'https://soilcreate.com'
const docsDir = path.resolve('docs')
const distDir = path.resolve('docs/.vitepress/dist')
const output = path.join(distDir, 'sitemap.xml')
const execFileAsync = promisify(execFile)

const isIgnored = (file) => {
  const normalized = file.split(path.sep).join('/')
  return normalized.includes('/.vitepress/') || normalized.includes('/public/')
}

const isGitIgnored = async (file) => {
  try {
    await execFileAsync('git', ['check-ignore', '--quiet', '--', file])
    return true
  } catch (error) {
    if (error.code === 1) return false
    return false
  }
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

const walk = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === '.vitepress') continue
      files.push(...(await walk(fullPath)))
    } else if (entry.isFile() && entry.name.endsWith('.md') && !isIgnored(fullPath) && !(await isGitIgnored(fullPath))) {
      files.push(fullPath)
    }
  }

  return files
}

const parseFrontmatter = (content) => {
  if (!content.startsWith('---')) return {}
  const end = content.indexOf('\n---', 3)
  if (end === -1) return {}

  const frontmatter = {}
  const raw = content.slice(3, end).split('\n')
  for (const line of raw) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!match) continue
    const [, key, rawValue] = match
    const value = rawValue.trim().replace(/^['"]|['"]$/g, '')
    if (value === 'true') frontmatter[key] = true
    else if (value === 'false') frontmatter[key] = false
    else frontmatter[key] = value
  }
  return frontmatter
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

const files = await walk(docsDir)
const urls = []

for (const file of files) {
  const content = await fs.readFile(file, 'utf8')
  const frontmatter = parseFrontmatter(content)
  if (frontmatter.noindex === true) continue

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

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join(
  '\n'
)}\n</urlset>\n`

await fs.mkdir(distDir, { recursive: true })
await fs.writeFile(output, xml, 'utf8')
