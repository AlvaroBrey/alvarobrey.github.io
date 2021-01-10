import moment from 'moment'

export enum CVItemType {
  COURSE = 'course',
  EDUCATION = 'education',
  WORK = 'work'
}

export enum CVOrg {
  CITIUS = 'citius',
  EPFL = 'epfl',
  EVERIS = 'everis',
  IMAGAMES = 'imagames',
  STANFORD = 'stanford',
  UIMP = 'uimp',
  USC = 'usc'
}

export class CVTimelineItem {
  key: string
  org: CVOrg
  endDate: moment.Moment | undefined
  type: CVItemType

  constructor(
    translationKey: string,
    org: CVOrg,
    endDate: moment.Moment | undefined,
    type: CVItemType
  ) {
    this.key = translationKey
    this.org = org
    this.endDate = endDate
    this.type = type
  }
}

export class CVTimelineItemWithStartDate extends CVTimelineItem {
  startDate: moment.Moment

  constructor(
    translationKey: string,
    org: CVOrg,
    endDate: moment.Moment | undefined,
    startDate: moment.Moment,
    type: CVItemType
  ) {
    super(translationKey, org, endDate, type)
    this.startDate = startDate
  }
}

export function isWithStartDate(
  item: CVTimelineItem
): item is CVTimelineItemWithStartDate {
  return (item as CVTimelineItemWithStartDate).startDate !== undefined
}
