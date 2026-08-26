import { canonicalPath } from './urls'

export interface Page {
  translationKey: string
  href: string
}

export const pages: readonly Page[] = Object.freeze([
  { translationKey: 'home', href: '/' },
  { translationKey: 'me', href: '/me' },
  { translationKey: 'cv', href: '/cv' },
  { translationKey: 'contact', href: '/contact' },
  { translationKey: 'about', href: '/about' }
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
