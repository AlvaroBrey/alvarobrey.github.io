import type { Handle } from '@sveltejs/kit'

// Kit preloads js and css by default. Fonts are only discovered once the CSS
// has parsed, which costs a round trip behind `font-display: swap`.
export const handle: Handle = ({ event, resolve }) =>
  resolve(event, {
    preload: ({ type }) => type === 'js' || type === 'css' || type === 'font'
  })
