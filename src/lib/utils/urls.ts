export const SITE_URL = 'https://alvarobrey.com'

// `trailingSlash: 'always'` puts a slash on every pathname; canonical URLs
// drop it, except on the root, to match the URLs the site already published.
export function canonicalPath(pathname: string): string {
  return pathname.replace(/(.)\/$/, '$1')
}

export function canonicalUrl(pathname: string): string {
  return SITE_URL + canonicalPath(pathname)
}

// Mirrors live under the page's own path so Cloudflare can negotiate them by
// appending to the request path, with no rewrite functions above the free plan.
export function markdownPath(href: string): string {
  return href === '/' ? '/index.md' : `${href}/index.md`
}

export function markdownUrl(href: string): string {
  return SITE_URL + markdownPath(href)
}

export function displayUrl(link: string): string {
  return link.replace(/^mailto:/, '').replace(/^https?:\/\//, '')
}

export function absoluteUrl(link: string): string {
  return link.startsWith('/') ? SITE_URL + link : link
}
