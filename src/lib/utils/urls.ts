export const SITE_URL = 'https://alvarobrey.com'

// `trailingSlash: 'always'` (see src/routes/+layout.ts) means every pathname
// arrives with a trailing slash. Canonical URLs and the sitemap drop it, except
// on the root, so they match the URLs the site published before the migration.
export function canonicalPath(pathname: string): string {
  return pathname.replace(/(.)\/$/, '$1')
}

export function canonicalUrl(pathname: string): string {
  return SITE_URL + canonicalPath(pathname)
}

export function displayUrl(link: string): string {
  return link.replace(/^mailto:/, '').replace(/^https?:\/\//, '')
}
