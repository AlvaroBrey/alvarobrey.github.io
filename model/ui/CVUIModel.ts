import { CVItemType } from '~/model/CVModel'

export const CVItemTypeColors: Record<CVItemType, string> = {
  [CVItemType.COURSE]: 'green lighten-1',
  [CVItemType.EDUCATION]: 'purple lighten-1',
  [CVItemType.WORK]: 'red lighten-2',
  [CVItemType.HOBBY]: 'blue lighten-2'
}

export const CV_DATE_FORMAT = 'YYYY/MM'
