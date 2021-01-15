import moment from 'moment'
import { CVItemType, CVOrg, CVTimelineItem } from '~/model/CVModel'

const dateFormat = 'YYYY/MM'
function parseDate(date: string): moment.Moment {
  return moment(date, dateFormat)
}

export const educationCVItems: CVTimelineItem[] = [
  {
    key: 'ITDegree',
    org: CVOrg.USC,
    startDate: parseDate('2012/09'),
    endDate: parseDate('2016/09'),
    type: CVItemType.EDUCATION
  },
  {
    key: 'AIMasters',
    org: CVOrg.UIMP,
    startDate: parseDate('2017/09'),
    endDate: parseDate('2019/07'),
    type: CVItemType.EDUCATION
  }
]

export const workCVItems: CVTimelineItem[] = [
  {
    key: 'everis',
    org: CVOrg.EVERIS,
    startDate: parseDate('2015/06'),
    endDate: parseDate('2015/09'),
    type: CVItemType.WORK
  },
  {
    key: 'citius',
    org: CVOrg.CITIUS,
    startDate: parseDate('2016/10'),
    endDate: parseDate('2018/04'),
    type: CVItemType.WORK,
    skills: ['mobile', 'scripting', 'research'],
    tech: ['Android + Kotlin', 'Python, NodeJS']
  },
  {
    key: 'imagames',
    org: CVOrg.IMAGAMES,
    startDate: parseDate('2018/12'),
    endDate: undefined,
    type: CVItemType.WORK,
    skills: ['infrastructure', 'frontend', 'scripting'],
    tech: [
      'Docker + Compose + Kubernetes',
      'VueJs + Typescript',
      'Ansible + Python'
    ]
  }
]

export const courseCVItems: CVTimelineItem[] = [
  {
    key: 'machineLearning',
    org: CVOrg.STANFORD,
    startDate: undefined,
    endDate: parseDate('2017/04'),
    type: CVItemType.COURSE
  },
  {
    key: 'scalaFP',
    org: CVOrg.EPFL,
    startDate: undefined,
    endDate: parseDate('2019/06'),
    type: CVItemType.COURSE
  }
]

export const CVTimelineItems: CVTimelineItem[] = [
  ...educationCVItems,
  ...workCVItems,
  ...courseCVItems
]
