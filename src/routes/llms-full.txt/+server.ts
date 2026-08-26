import type { RequestHandler } from './$types'
import { llmsFull } from '$lib/markdown/content'

export const prerender = true

export const GET: RequestHandler = () =>
  new Response(llmsFull(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  })
