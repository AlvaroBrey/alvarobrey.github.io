import moment from 'moment'

export class CVTimelineItem {
  translationKey: string
  organizationTranslationKey: string
  endDate: moment.Moment | undefined

  constructor(
    translationKey: string,
    organizationTranslationKey: string,
    endDate: moment.Moment | undefined
  ) {
    this.translationKey = translationKey
    this.organizationTranslationKey = organizationTranslationKey
    this.endDate = endDate
  }
}

export class CVTimelineItemWithStartDate extends CVTimelineItem {
  startDate: moment.Moment

  constructor(
    translationKey: string,
    organizationTranslationKey: string,
    endDate: moment.Moment | undefined,
    startDate: moment.Moment
  ) {
    super(translationKey, organizationTranslationKey, endDate)
    this.startDate = startDate
  }
}
