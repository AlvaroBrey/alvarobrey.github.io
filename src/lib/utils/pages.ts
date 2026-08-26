import { canonicalPath } from './urls'

export interface Page {
  label: string
  href: string
  description: string
}

export const pages: readonly Page[] = Object.freeze([
  {
    label: 'Home',
    href: '/',
    description:
      'Álvaro Brey is a senior Android engineer from Santiago de Compostela, Spain, with experience in DevOps, web frontend and scripting.'
  },
  {
    label: 'About me',
    href: '/me',
    description:
      'Álvaro Brey is an Android-focused software engineer who cares about automation, developer experience and open-source software.'
  },
  {
    label: 'My CV',
    href: '/cv',
    description:
      'The career of Álvaro Brey, senior Android engineer: work history, education and open-source projects, with a downloadable PDF CV.'
  },
  {
    label: 'Contact',
    href: '/contact',
    description:
      'Get in touch with Álvaro Brey, senior Android engineer, by email, LinkedIn or GitHub.'
  },
  {
    label: 'About this page',
    href: '/about',
    description:
      'How alvarobrey.com is built: a static SvelteKit site in TypeScript and Tailwind CSS, open source on GitHub and deployed to GitHub Pages.'
  }
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

function findPage(href: string): Page | undefined {
  return pages.find((p) => p.href === href)
}

export function pageLabel(href: string): string {
  return findPage(href)?.label ?? ''
}

export function pageDescription(href: string): string {
  return findPage(href)?.description ?? ''
}
