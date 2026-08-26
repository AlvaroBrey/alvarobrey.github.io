// Renders the downloadable CV PDF from the web CV data at build time.
import { createHash } from 'crypto'
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync
} from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { format } from 'date-fns'
import { launch } from 'puppeteer'
import { CVItemType } from '../src/lib/model/CVModel'
import { cvLabels } from '../src/lib/model/CVUIModel'
import type { CVTimelineItem } from '../src/lib/model/CVModel'
import type { Optional } from '../src/lib/types/utilityTypes'
import {
  shouldShowOrgName,
  sortTimelineItems
} from '../src/lib/utils/cvTimeline'
import { CVTimelineItems } from '../src/lib/data/CVData'
import { contactLinks } from '../src/lib/data/ContactData'
import {
  cvPdfAbout,
  cvPdfEducationSuffix,
  cvPdfLanguages,
  cvPdfLocations,
  cvPdfProfile,
  cvPdfSkills
} from '../src/lib/data/CvPdfData'
import type { LabeledValue } from '../src/lib/data/CvPdfData'
import { orgs } from '../src/lib/data/OrgData'
import { displayUrl } from '../src/lib/utils/urls'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUTPUT_DIR = join(ROOT, 'static', 'files')
const ORGS_DIR = join(ROOT, 'src', 'lib', 'assets', 'orgs')
const GENERATED_MODULE = join(ROOT, 'src', 'lib', 'generated', 'cvPdf.ts')
const FILENAME_PREFIX = 'cv_alvarobrey.'

const DISPLAY_DATE_FORMAT = 'MMM yyyy'

// The PDF has always been English-only -- its section headings are literals
// below -- so it carries its own chrome rather than depending on the app's
// i18n layer. Everything else it renders now comes from the data itself.

type Section = { title: string; type: CVItemType }
const SECTIONS: Section[] = [
  { title: 'Experience', type: CVItemType.WORK },
  { title: 'Education', type: CVItemType.EDUCATION },
  { title: 'Open source & hobbies', type: CVItemType.HOBBY }
]

function sectionHtml(title: string, body: string, extraClass = ''): string {
  const cls = extraClass ? `section ${extraClass}` : 'section'
  return `<section class="${cls}"><h2>${title}</h2>${body}</section>`
}

function formatDateRange(item: CVTimelineItem): string {
  if (!item.startDate) {
    return item.endDate ? format(item.endDate, DISPLAY_DATE_FORMAT) : ''
  }
  const start = format(item.startDate, DISPLAY_DATE_FORMAT)
  const end = item.endDate
    ? format(item.endDate, DISPLAY_DATE_FORMAT)
    : cvLabels.present
  return `${start} – ${end}`
}

function orgLogoDataUri(org: Optional<string>): Optional<string> {
  if (!org) return undefined
  const path = join(ORGS_DIR, `${org}.png`)
  if (!existsSync(path)) return undefined
  return `data:image/png;base64,${readFileSync(path).toString('base64')}`
}

function escapeAttr(value: string): string {
  return value.replace(/"/g, '&quot;')
}

function renderTech(item: CVTimelineItem): string {
  if (!item.tech?.length) return ''
  const techs = item.tech.flatMap((entry) => entry.split(/\s*\+\s*/))
  return `<p class="tech"><span class="tech-label">${cvLabels.tech}:</span> ${techs.join(
    ', '
  )}</p>`
}

function renderItem(item: CVTimelineItem): string {
  let org = ''
  if (shouldShowOrgName(item) && item.org) {
    const { name, url } = orgs[item.org]
    org = url ? `<a href="${escapeAttr(url)}">${name}</a>` : name
  }
  const location = cvPdfLocations[item.key]
  const paragraphs = [
    item.shortDescription,
    cvPdfEducationSuffix[item.key]
  ].filter(Boolean)
  const desc = paragraphs.length
    ? `<div class="desc">${paragraphs.map((p) => `<p>${p}</p>`).join('')}</div>`
    : ''
  const logo = orgLogoDataUri(item.org)
  const logoHtml = logo
    ? `<img class="logo" src="${logo}" alt="${escapeAttr(org)} logo" />`
    : '<div class="logo logo-placeholder"></div>'
  const subtitle = [org, location].filter(Boolean).join(' · ')
  return `
    <article class="entry">
      ${logoHtml}
      <div class="entry-body">
        <div class="entry-head">
          <div>
            <h3 class="role">${item.title}</h3>
            ${subtitle ? `<p class="org">${subtitle}</p>` : ''}
          </div>
          <p class="dates">${formatDateRange(item)}</p>
        </div>
        ${desc}
        ${renderTech(item)}
      </div>
    </article>`
}

function renderKeyValueSection(title: string, rows: LabeledValue[]): string {
  const body = rows
    .map(
      ({ label, value }) =>
        `<div class="kv"><span class="kv-label">${label}:</span> ${value}</div>`
    )
    .join('')
  return sectionHtml(title, body)
}

function renderAbout(): string {
  const body = cvPdfAbout.map((p) => `<p>${p}</p>`).join('')
  return sectionHtml('About me', body, 'about')
}

function renderSection(section: Section, items: CVTimelineItem[]): string {
  const rows = items
    .filter((it) => it.type === section.type)
    .sort(sortTimelineItems)
    .map(renderItem)
    .join('')
  if (!rows) return ''
  return sectionHtml(section.title, rows)
}

function contactRow(label: string, link: string, value: string): string {
  return `<div class="c-row"><span class="c-label">${label}</span><a href="${escapeAttr(
    link
  )}">${value}</a></div>`
}

function contactHtml(): string {
  const rows = contactLinks.map(({ label, link }) =>
    contactRow(label, link, displayUrl(link))
  )
  const site = cvPdfProfile.website
  rows.push(contactRow('Website', site, displayUrl(site)))
  return `<div class="contact">${rows.join('')}</div>`
}

function buildHtml(): string {
  const timeline = SECTIONS.map((s) => renderSection(s, CVTimelineItems)).join(
    ''
  )
  const sections =
    renderAbout() +
    timeline +
    renderKeyValueSection('Skills', cvPdfSkills) +
    renderKeyValueSection('Languages', cvPdfLanguages)
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  :root { --accent: #388E3C; --ink: #1b1b1b; --muted: #555; --line: #d8d8d8; }
  * { box-sizing: border-box; }
  @page { size: A4; margin: 16mm 19mm; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    color: var(--ink);
    font-size: 10.5px;
    line-height: 1.45;
  }
  a { color: var(--accent); text-decoration: none; }
  header.cv-header {
    display: flex; justify-content: space-between; align-items: flex-start; gap: 24px;
    border-bottom: 2px solid var(--accent); padding-bottom: 8px; margin-bottom: 14px;
  }
  header.cv-header h1 { margin: 0; font-size: 24px; line-height: 1.1; color: var(--accent); letter-spacing: 0.5px; }
  header.cv-header .headline { margin: 3px 0 0; font-size: 12px; font-weight: 500; }
  header.cv-header .location { margin: 2px 0 0; color: var(--muted); }
  .contact { margin-top: 5px; color: var(--muted); font-size: 10px; }
  .contact .c-row { display: grid; grid-template-columns: 62px 1fr; gap: 8px; margin-bottom: 2px; }
  .contact .c-label { color: var(--accent); font-weight: 600; }
  .section { margin-bottom: 12px; }
  .section > h2 {
    font-size: 12px; text-transform: uppercase; letter-spacing: 1.2px;
    color: var(--accent); margin: 0 0 8px; padding-bottom: 3px;
    border-bottom: 1px solid var(--line);
  }
  .entry {
    display: grid; grid-template-columns: 46px 1fr; gap: 18px;
    margin-bottom: 11px; break-inside: avoid; page-break-inside: avoid;
  }
  .logo { width: 46px; height: 46px; object-fit: contain; margin-top: 2px; }
  .logo-placeholder { width: 46px; height: 46px; }
  .entry-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
  .role { margin: 0; font-size: 12px; }
  .org { margin: 1px 0 0; color: var(--muted); font-weight: 500; }
  .dates { margin: 0; white-space: nowrap; color: var(--muted); font-size: 9.5px; }
  .desc { margin: 4px 0 0; }
  .desc p { margin: 0 0 4px; }
  .about p { margin: 0 0 6px; }
  .tech { margin: 5px 0 0; }
  .tech-label { font-weight: 600; }
  .kv { margin: 0 0 4px; break-inside: avoid; }
  .kv-label { color: var(--muted); font-weight: 500; }
</style>
</head>
<body>
  <header class="cv-header">
    <div class="identity">
      <h1>${cvPdfProfile.name}</h1>
      <p class="headline">${cvPdfProfile.headline}</p>
      <p class="location">${cvPdfProfile.location}</p>
    </div>
    ${contactHtml()}
  </header>
  ${sections}
</body>
</html>`
}

async function main() {
  const html = buildHtml()
  // Hash the HTML, not the rendered PDF: Chromium's PDF bytes aren't
  // deterministic (embedded creation date), which would churn the URL every build.
  const hash = createHash('sha256').update(html).digest('hex').slice(0, 8)
  const filename = `${FILENAME_PREFIX}${hash}.pdf`

  // Both `check` and `build` run this, so skip the Chromium launch when the
  // content hasn't changed since the last render.
  if (
    existsSync(join(OUTPUT_DIR, filename)) &&
    existsSync(GENERATED_MODULE) &&
    readFileSync(GENERATED_MODULE, 'utf8').includes(filename)
  ) {
    console.log(`Reusing static/files/${filename}`)
    return
  }

  const browser = await launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  try {
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'load' })
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true
    })

    mkdirSync(OUTPUT_DIR, { recursive: true })
    for (const file of readdirSync(OUTPUT_DIR)) {
      if (file.startsWith(FILENAME_PREFIX) && file.endsWith('.pdf')) {
        rmSync(join(OUTPUT_DIR, file))
      }
    }
    writeFileSync(join(OUTPUT_DIR, filename), pdf)

    mkdirSync(dirname(GENERATED_MODULE), { recursive: true })
    writeFileSync(
      GENERATED_MODULE,
      `// AUTO-GENERATED by scripts/generate-cv-pdf.ts - do not edit.\n` +
        `export const CV_PDF_FILENAME = '${filename}'\n`
    )

    console.log(`Generated static/files/${filename}`)
  } finally {
    await browser.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
