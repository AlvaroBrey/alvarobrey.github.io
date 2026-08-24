import type { RequestHandler } from './$types'
import { pages } from '$lib/utils/pages'

export const prerender = true

const BASE_URL = 'https://alvarobrey.com'

export const GET: RequestHandler = () => {
  const urls = pages
    .map((p) => `  <url><loc>${BASE_URL}${p.href}</loc></url>`)
    .join('\n')
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' }
  })
}
