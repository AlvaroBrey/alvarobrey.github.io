import { compareDesc } from 'date-fns'
import { CVItemType, CVTimelineItem } from '~/model/CVModel'
import { Optional } from '~/types/utilityTypes'

export function getCompareDate(item: CVTimelineItem): Optional<Date> {
  return item.startDate ?? item.endDate
}

export function sortTimelineItems(
  a: CVTimelineItem,
  b: CVTimelineItem
): number {
  const aDate = getCompareDate(a)
  const bDate = getCompareDate(b)
  if (aDate === undefined) return -1
  if (bDate === undefined) return 1
  return compareDesc(aDate, bDate)
}

export function shouldShowOrgName(item: CVTimelineItem): boolean {
  return item.org !== undefined && item.type !== CVItemType.HOBBY
}
