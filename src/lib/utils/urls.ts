export const SITE_URL = 'https://alvarobrey.com'

// `trailingSlash: 'always'` puts a slash on every pathname; canonical URLs
// drop it, except on the root, to match the URLs the site already published.
export function canonicalPath(pathname: string): string {
  return pathname.replace(/(.)\/$/, '$1')
}

export function canonicalUrl(pathname: string): string {
  return SITE_URL + canonicalPath(pathname)
}

export function displayUrl(link: string): string {
  return link.replace(/^mailto:/, '').replace(/^https?:\/\//, '')
}
