import { format } from 'date-fns'
import { CVTimelineItems } from '../data/CVData'
import { contactLinks } from '../data/ContactData'
import { whatIDo } from '../data/MeData'
import { orgs } from '../data/OrgData'
import { skillLabels } from '../data/SkillData'
import { CV_PDF_FILENAME } from '../generated/cvPdf'
import { CVItemType } from '../model/CVModel'
import type { CVTimelineItem } from '../model/CVModel'
import { CV_DATE_FORMAT, cvLabels } from '../model/CVUIModel'
import { m } from '../paraglide/messages'
import type { Optional } from '../types/utilityTypes'
import { shouldShowOrgName, sortTimelineItems } from '../utils/cvTimeline'
import { pageDescription, pageLabel, pages } from '../utils/pages'
import { SITE_URL, displayUrl, markdownUrl } from '../utils/urls'
import { htmlToMarkdown } from './html'

const CV_PDF_URL = `${SITE_URL}/files/${CV_PDF_FILENAME}`

function bullets(items: string[]): string {
  return items.map((item) => `- ${item}`).join('\n')
}

function paragraphs(...html: string[]): string {
  return html.map(htmlToMarkdown).join('\n\n')
}

function formatDate(date: Optional<Date>): string {
  return date ? format(date, CV_DATE_FORMAT) : cvLabels.present
}

function itemDates(item: CVTimelineItem): string {
  return item.startDate
    ? `${formatDate(item.startDate)} - ${formatDate(item.endDate)}`
    : formatDate(item.endDate)
}

function cvItem(item: CVTimelineItem): string {
  const org = shouldShowOrgName(item) && item.org ? orgs[item.org] : undefined
  const orgName = org?.url ? `[${org.name}](${org.url})` : org?.name
  const sections = [
    `### ${item.title}`,
    [orgName, itemDates(item)].filter(Boolean).join(' | '),
    item.shortDescription && htmlToMarkdown(item.shortDescription),
    item.skills &&
      `**${cvLabels.skills}**\n\n${bullets(item.skills.map((s) => skillLabels[s]))}`,
    item.tech && `**${cvLabels.tech}**\n\n${bullets(item.tech)}`
  ]
  return sections.filter(Boolean).join('\n\n')
}

function cvSection(type: CVItemType, heading: string): string {
  const items = [...CVTimelineItems]
    .filter((item) => item.type === type)
    .sort(sortTimelineItems)
    .map(cvItem)
  return [`## ${heading}`, ...items].join('\n\n')
}

const bodies: Record<string, () => string> = {
  '/': () =>
    [
      `# ${m.page_index_greeting()}`,
      paragraphs(m.page_index_introduction(), m.page_index_interests())
    ].join('\n\n'),

  '/me': () =>
    [
      `# ${pageLabel('/me')}`,
      paragraphs(
        m.page_me_intro(),
        m.page_me_automation(),
        m.page_me_opensource(),
        m.page_me_personal()
      ),
      `## ${m.page_me_what_ido()}`,
      bullets(whatIDo),
      `## ${m.page_me_what_ilike()}`,
      bullets([
        m.page_me_likes_automation(),
        m.page_me_likes_clean_code(),
        m.page_me_likes_open_source(),
        m.page_me_likes_fp(),
        m.page_me_likes_reproducible(),
        m.page_me_likes_pair_programming()
      ])
    ].join('\n\n'),

  '/cv': () =>
    [
      `# ${pageLabel('/cv')}`,
      `[Download as PDF](${CV_PDF_URL})`,
      cvSection(CVItemType.WORK, 'Work'),
      cvSection(CVItemType.EDUCATION, 'Education'),
      cvSection(CVItemType.HOBBY, 'Personal projects')
    ].join('\n\n'),

  '/contact': () =>
    [
      `# ${pageLabel('/contact')}`,
      bullets(
        contactLinks.map(
          (link) => `${link.label}: [${displayUrl(link.link)}](${link.link})`
        )
      )
    ].join('\n\n'),

  '/about': () =>
    [
      `# ${pageLabel('/about')}`,
      paragraphs(m.page_about_paragraph1(), m.page_about_paragraph2())
    ].join('\n\n')
}

export function pageMarkdown(href: string): string {
  const canonical = SITE_URL + (href === '/' ? '/' : href)
  return `${bodies[href]()}\n\n---\n\nCanonical page: ${canonical}\n`
}

export function llmsIndex(): string {
  const links = pages.map(
    (p) => `- [${p.label}](${markdownUrl(p.href)}): ${p.description}`
  )
  return [
    '# Álvaro Brey',
    `> ${pageDescription('/')}`,
    'Personal site and CV of Álvaro Brey. Every page below is also served as Markdown at the same path with a `.md` suffix.',
    '## Pages',
    links.join('\n'),
    '## Files',
    bullets([
      `[Curriculum vitae (PDF)](${CV_PDF_URL})`,
      `[Full site as Markdown](${SITE_URL}/llms-full.txt)`
    ]),
    ''
  ].join('\n\n')
}

export function llmsFull(): string {
  return pages.map((p) => bodies[p.href]()).join('\n\n---\n\n') + '\n'
}
