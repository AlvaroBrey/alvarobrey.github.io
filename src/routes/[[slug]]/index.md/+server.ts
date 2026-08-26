import { error } from '@sveltejs/kit'
import type { EntryGenerator, RequestHandler } from './$types'
import { pageMarkdown } from '$lib/markdown/content'
import { pages } from '$lib/utils/pages'

export const prerender = true

export const entries: EntryGenerator = () =>
  pages.map((p) => ({ slug: p.href === '/' ? undefined : p.href.slice(1) }))

export const GET: RequestHandler = ({ params }) => {
  const href = params.slug ? `/${params.slug}` : '/'
  if (!pages.some((p) => p.href === href)) error(404)
  return new Response(pageMarkdown(href), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' }
  })
}
