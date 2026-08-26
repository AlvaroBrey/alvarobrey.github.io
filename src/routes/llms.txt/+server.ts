import type { RequestHandler } from './$types'
import { llmsIndex } from '$lib/markdown/content'

export const prerender = true

export const GET: RequestHandler = () =>
  new Response(llmsIndex(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  })
