import type { Handle } from '@sveltejs/kit'

// Kit preloads js and css only; fonts would otherwise wait for the CSS to
// parse.
export const handle: Handle = ({ event, resolve }) =>
  resolve(event, {
    preload: ({ type }) => type === 'js' || type === 'css' || type === 'font'
  })
