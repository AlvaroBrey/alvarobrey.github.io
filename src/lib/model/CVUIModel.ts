import { CVItemType } from './CVModel'

export const CVItemTypeColors: Record<CVItemType, string> = {
  [CVItemType.COURSE]: '#66bb6a',
  [CVItemType.EDUCATION]: '#ab47bc',
  [CVItemType.WORK]: '#e57373',
  [CVItemType.HOBBY]: '#64b5f6'
}

export const CV_DATE_FORMAT = 'yyyy/MM'
