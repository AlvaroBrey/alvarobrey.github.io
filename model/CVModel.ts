import moment from 'moment'

export enum CVItemType {
  WORK = 'work',
  EDUCATION = 'education',
  COURSE = 'course'
}

export class CVTimelineItem {
  translationKey: string
  organizationTranslationKey: string
  endDate: moment.Moment | undefined
  type: CVItemType

  constructor(
    translationKey: string,
    organizationTranslationKey: string,
    endDate: moment.Moment | undefined,
    type: CVItemType
  ) {
    this.translationKey = translationKey
    this.organizationTranslationKey = organizationTranslationKey
    this.endDate = endDate
    this.type = type
  }
}

export class CVTimelineItemWithStartDate extends CVTimelineItem {
  startDate: moment.Moment

  constructor(
    translationKey: string,
    organizationTranslationKey: string,
    endDate: moment.Moment | undefined,
    startDate: moment.Moment,
    type: CVItemType
  ) {
    super(translationKey, organizationTranslationKey, endDate, type)
    this.startDate = startDate
  }
}
