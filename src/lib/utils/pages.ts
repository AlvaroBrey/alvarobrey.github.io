import { canonicalPath } from './urls'

export interface Page {
  label: string
  href: string
  description: string
  // The header nav and the home page's buttons both list a subset of these.
  inNav: boolean
}

export const pages: readonly Page[] = Object.freeze([
  {
    label: 'Home',
    href: '/',
    description:
      'Álvaro Brey is a senior Android engineer from Santiago de Compostela, Spain, with experience in DevOps, web frontend and scripting.',
    inNav: true
  },
  {
    label: 'About me',
    href: '/me',
    description:
      'Álvaro Brey is an Android-focused software engineer who cares about automation, developer experience and open-source software.',
    inNav: true
  },
  {
    label: 'My CV',
    href: '/cv',
    description:
      'The career of Álvaro Brey, senior Android engineer: work history, education and open-source projects, with a downloadable PDF CV.',
    inNav: true
  },
  {
    label: 'Contact',
    href: '/contact',
    description:
      'Get in touch with Álvaro Brey, senior Android engineer, by email, LinkedIn or GitHub.',
    inNav: true
  },
  {
    label: 'About this page',
    href: '/about',
    description:
      'How alvarobrey.com is built: a static SvelteKit site in TypeScript and Tailwind CSS, open source on GitHub and deployed to GitHub Pages.',
    inNav: false
  },
  {
    label: 'Privacy',
    href: '/privacy',
    description:
      'What alvarobrey.com stores and collects: a theme preference in your browser, cookieless analytics, and nothing else.',
    inNav: false
  }
])

export const navPages: readonly Page[] = pages.filter((p) => p.inNav)
export const secondaryPages: readonly Page[] = pages.filter((p) => !p.inNav)

export function isHome(href: string): boolean {
  return href === '/'
}

export function isActive(pathname: string, href: string): boolean {
  return canonicalPath(pathname) === href
}

function findPage(href: string): Page | undefined {
  return pages.find((p) => p.href === href)
}

export function pageLabel(href: string): string {
  return findPage(href)?.label ?? ''
}

export function pageDescription(href: string): string {
  return findPage(href)?.description ?? ''
}
