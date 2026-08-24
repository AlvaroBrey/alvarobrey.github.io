import type { Picture } from '@sveltejs/enhanced-img'

// `?enhanced` makes vite-imagetools emit responsive WebP/AVIF variants at build
// time. The source PNGs stay untouched on disk -- scripts/generate-cv-pdf.ts
// reads them directly and needs the full-resolution originals.
const logos = import.meta.glob<Picture>('../assets/orgs/*.png', {
  eager: true,
  query: { enhanced: true },
  import: 'default'
})

export function orgLogo(org: string | undefined): Picture | undefined {
  if (!org) return undefined
  return logos[`../assets/orgs/${org}.png`]
}
