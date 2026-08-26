import { canonicalPath } from './urls'

export interface Page {
  label: string
  href: string
}

export const pages: readonly Page[] = Object.freeze([
  { label: 'Home', href: '/' },
  { label: 'About me', href: '/me' },
  { label: 'My CV', href: '/cv' },
  { label: 'Contact', href: '/contact' },
  { label: 'About this page', href: '/about' }
])

export function isHome(href: string): boolean {
  return href === '/'
}

export function isAbout(href: string): boolean {
  return href === '/about'
}

export function isActive(pathname: string, href: string): boolean {
  return canonicalPath(pathname) === href
}

export function pageLabel(href: string): string {
  return pages.find((p) => p.href === href)?.label ?? ''
}
