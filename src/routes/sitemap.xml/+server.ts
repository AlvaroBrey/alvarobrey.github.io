import type { RequestHandler } from './$types'
import { pages } from '$lib/utils/pages'
import { SITE_URL, markdownUrl } from '$lib/utils/urls'

export const prerender = true

export const GET: RequestHandler = () => {
  const locs = pages.flatMap((p) => [
    `${SITE_URL}${p.href}`,
    markdownUrl(p.href)
  ])
  const urls = locs.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n')
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' }
  })
}
