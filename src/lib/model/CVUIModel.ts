import { CVItemType } from './CVModel'

export const CVItemTypeColors: Record<CVItemType, string> = {
  [CVItemType.COURSE]: '#66bb6a',
  [CVItemType.EDUCATION]: '#ab47bc',
  [CVItemType.WORK]: '#e57373',
  [CVItemType.HOBBY]: '#64b5f6'
}

export const CVItemTypeLabels: Record<CVItemType, string> = {
  [CVItemType.COURSE]: 'Courses',
  [CVItemType.EDUCATION]: 'Education',
  [CVItemType.WORK]: 'Work',
  [CVItemType.HOBBY]: 'Hobby'
}

// Beside the data rather than in the catalogue: generate-cv-pdf.ts renders
// these same fields and can't reach Paraglide's browser runtime.
export const cvLabels = {
  skills: 'Key skills',
  tech: 'Key technologies',
  present: 'Present',
  filterAll: 'All'
}

export const CV_DATE_FORMAT = 'yyyy/MM'

export const visibleCVItemTypes: CVItemType[] = Object.values(
  CVItemType
).filter((type) => type !== CVItemType.COURSE)
