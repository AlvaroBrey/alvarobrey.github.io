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

const dateFormat = 'YYYY/MM'
function parseDate(date: string): moment.Moment {
  return moment(date, dateFormat)
}

export const educationCVItems: CVTimelineItemWithStartDate[] = [
  new CVTimelineItemWithStartDate(
    'ITDegree',
    'usc',
    parseDate('2016/09'),
    parseDate('2012/09')
  ),
  new CVTimelineItemWithStartDate(
    'AIMasters',
    'uimp',
    parseDate('2019/07'),
    parseDate('2017/09')
  )
]

export const workCVItems: CVTimelineItemWithStartDate[] = [
  new CVTimelineItemWithStartDate(
    'everis',
    'everis',
    parseDate('2015/06'),
    parseDate('2015/09')
  ),
  new CVTimelineItemWithStartDate(
    'citius',
    'citius',
    parseDate('2018/04'),
    parseDate('2016/10')
  ),
  new CVTimelineItemWithStartDate(
    'imagames',
    'imagames',
    undefined,
    parseDate('2018/12')
  )
]

export const courseCVItems: CVTimelineItem[] = [
  new CVTimelineItem('machineLearning', 'coursera', parseDate('2017/04')),
  new CVTimelineItem('scalaFP', 'coursera', parseDate('2019/06'))
]

export const CVTimelineItems: CVTimelineItem[] = [
  ...educationCVItems,
  ...workCVItems,
  ...courseCVItems
]
