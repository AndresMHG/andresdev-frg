import { serverQueryContent } from '#content/server'

/**
 * Sitemap dinámico — incluye páginas estáticas + posts del blog.
 * Accesible en /sitemap.xml
 */
export default defineEventHandler(async (event) => {
  const SITE_URL = 'https://andresdev.com.br'

  // Rutas estáticas
  const staticRoutes = [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/servicos', priority: 0.9, changefreq: 'monthly' },
    { loc: '/precos', priority: 0.9, changefreq: 'monthly' },
    { loc: '/blog', priority: 0.7, changefreq: 'weekly' },
    { loc: '/contato', priority: 0.6, changefreq: 'monthly' },
  ]

  // Posts del blog desde @nuxt/content
  let blogRoutes: Array<{ loc: string; priority: number; changefreq: string; lastmod?: string }> = []
  try {
    const docs = await serverQueryContent(event, '/blog').find()
    blogRoutes = docs.map((doc: any) => ({
      loc: doc._path,
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: doc.date || undefined,
    }))
  } catch (e) {
    // si content no tiene posts aún, seguimos
  }

  const all = [...staticRoutes, ...blogRoutes]
  const today = new Date().toISOString().split('T')[0]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.loc}</loc>
    <lastmod>${r.lastmod || today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')
  return xml
})
