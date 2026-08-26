import type { Picture } from '@sveltejs/enhanced-img'

// The source PNGs must stay full-resolution: generate-cv-pdf.ts reads them
// from disk and inlines them at print size.
const logos = import.meta.glob<Picture>('../assets/orgs/*.png', {
  eager: true,
  query: { enhanced: true },
  import: 'default'
})

export function orgLogo(org: string | undefined): Picture | undefined {
  if (!org) return undefined
  return logos[`../assets/orgs/${org}.png`]
}
