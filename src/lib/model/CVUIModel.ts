import { CVItemType } from './CVModel'

export const CVItemTypeColors: Record<CVItemType, string> = {
  [CVItemType.COURSE]: '#66bb6a',
  [CVItemType.EDUCATION]: '#ab47bc',
  [CVItemType.WORK]: '#e57373',
  [CVItemType.HOBBY]: '#64b5f6'
}

export const CV_DATE_FORMAT = 'yyyy/MM'

// COURSE items are omitted from the site (and from the PDF's sections), so both
// the timeline and its filter chips work from this list rather than each
// excluding COURSE on their own.
export const visibleCVItemTypes: CVItemType[] = Object.values(
  CVItemType
).filter((type) => type !== CVItemType.COURSE)
