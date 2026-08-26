import { CVTimelineItems } from '../data/CVData'
import { contactLinks } from '../data/ContactData'
import { cvPdfAbout, cvPdfProfile } from '../data/CvPdfData'
import { whatIDo } from '../data/MeData'
import { orgs } from '../data/OrgData'
import { CVItemType } from '../model/CVModel'
import type { CVTimelineItem } from '../model/CVModel'
import { pageDescription, pageLabel } from './pages'
import { SITE_URL, displayUrl } from './urls'

const PERSON_ID = `${SITE_URL}/#person`
const SITE_ID = `${SITE_URL}/#website`

interface JsonLdNode {
  '@type': string
  '@id'?: string
  [key: string]: unknown
}

function organizationNode(item: CVTimelineItem, type: string): JsonLdNode {
  const org = item.org ? orgs[item.org] : undefined
  return { '@type': type, name: org?.name ?? '', url: org?.url }
}

function itemsOfType(type: CVItemType): CVTimelineItem[] {
  return CVTimelineItems.filter((item) => item.type === type)
}

function currentEmployers(): JsonLdNode[] {
  return itemsOfType(CVItemType.WORK)
    .filter((item) => item.endDate === undefined && item.org)
    .map((item) => organizationNode(item, 'Organization'))
}

function alumniOf(): JsonLdNode[] {
  return itemsOfType(CVItemType.EDUCATION)
    .filter((item) => item.org)
    .map((item) => organizationNode(item, 'EducationalOrganization'))
}

function knowsAbout(): string[] {
  return [...new Set(whatIDo.flatMap((entry) => entry.split(', ')))]
}

function sameAs(): string[] {
  return contactLinks
    .map((link) => link.link)
    .filter((link) => !link.startsWith('mailto:'))
}

function email(): string | undefined {
  const mail = contactLinks.find((link) => link.link.startsWith('mailto:'))
  return mail ? displayUrl(mail.link) : undefined
}

export function personNode(): JsonLdNode {
  const [addressLocality, addressCountry] = cvPdfProfile.location.split(', ')
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: cvPdfProfile.name,
    alternateName: 'Álvaro Brey',
    jobTitle: cvPdfProfile.headline,
    description: cvPdfAbout[0],
    url: SITE_URL,
    email: email(),
    address: { '@type': 'PostalAddress', addressLocality, addressCountry },
    knowsAbout: knowsAbout(),
    worksFor: currentEmployers(),
    alumniOf: alumniOf(),
    sameAs: sameAs()
  }
}

export function webSiteNode(): JsonLdNode {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE_URL,
    name: 'Álvaro Brey',
    description: pageDescription('/'),
    inLanguage: 'en',
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID }
  }
}

function breadcrumbNode(href: string): JsonLdNode | undefined {
  if (href === '/') return undefined
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: pageLabel('/'),
        item: SITE_URL
      },
      { '@type': 'ListItem', position: 2, name: pageLabel(href) }
    ]
  }
}

function pageNode(href: string, isProfile: boolean): JsonLdNode {
  const url = SITE_URL + (href === '/' ? '' : href)
  return {
    '@type': isProfile ? 'ProfilePage' : 'WebPage',
    '@id': `${SITE_URL}${href}#page`,
    url,
    name: pageLabel(href),
    description: pageDescription(href),
    inLanguage: 'en',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': PERSON_ID },
    ...(isProfile ? { mainEntity: { '@id': PERSON_ID } } : {})
  }
}

const PROFILE_PAGES = ['/', '/me', '/cv']

export function isProfilePage(href: string): boolean {
  return PROFILE_PAGES.includes(href)
}

export function pageGraph(href: string): string {
  const nodes = [
    pageNode(href, isProfilePage(href)),
    breadcrumbNode(href),
    ...(href === '/' ? [webSiteNode(), personNode()] : []),
    ...(href === '/me' || href === '/cv' ? [personNode()] : [])
  ].filter((node) => node !== undefined)

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes })
}
