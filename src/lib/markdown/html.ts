import { absoluteUrl } from '../utils/urls'

const ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&nbsp;': ' '
}

// The locale strings carry a fixed, small tag set: <a>, <b>, <br> and newlines.
export function htmlToMarkdown(html: string): string {
  return html
    .replace(
      /<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g,
      (_, url: string, text: string) => `[${text}](${absoluteUrl(url)})`
    )
    .replace(/<\/?b>/g, '**')
    .replace(/<\/?code>/g, '`')
    .replace(/<\/?i>/g, '*')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z#0-9]+;/g, (entity) => ENTITIES[entity] ?? entity)
    .trim()
}
