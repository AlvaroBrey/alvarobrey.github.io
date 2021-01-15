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
    endDate: parseDate('2016/09')
  },
  {
    key: 'AIMasters',
    org: CVOrg.UIMP,
    startDate: parseDate('2017/09'),
    endDate: parseDate('2019/07')
  }
].map((it) => Object.assign(it, { type: CVItemType.EDUCATION }))

export const workCVItems: CVTimelineItem[] = [
  {
    key: 'everis',
    org: CVOrg.EVERIS,
    startDate: parseDate('2015/06'),
    endDate: parseDate('2015/09')
  },
  {
    key: 'citius',
    org: CVOrg.CITIUS,
    startDate: parseDate('2016/10'),
    endDate: parseDate('2018/04'),
    skills: ['mobile', 'scripting', 'research', 'openSource'],
    tech: ['Android + Kotlin', 'Python, NodeJS']
  },
  {
    key: 'imagames',
    org: CVOrg.IMAGAMES,
    startDate: parseDate('2018/12'),
    endDate: undefined,
    skills: ['infrastructure', 'frontend', 'scripting'],
    tech: [
      'Docker + Compose + Kubernetes',
      'VueJs + Typescript',
      'Ansible + Python'
    ]
  }
].map((it) => Object.assign(it, { type: CVItemType.WORK }))

export const courseCVItems: CVTimelineItem[] = [
  {
    key: 'machineLearning',
    org: CVOrg.STANFORD,
    startDate: undefined,
    endDate: parseDate('2017/04')
  },
  {
    key: 'scalaFP',
    org: CVOrg.EPFL,
    startDate: undefined,
    endDate: parseDate('2019/06')
  }
].map((it) => Object.assign(it, { type: CVItemType.COURSE }))

export const hobbyItems: CVTimelineItem[] = [
  {
    key: 'androidRoms',
    org: undefined,
    startDate: parseDate('2015/06'),
    endDate: parseDate('2017/08'),
    type: CVItemType.HOBBY,
    skills: ['openSource', 'mobile', 'scripting'],
    tech: ['Android', 'Java, C', 'Bash, Python']
  }
]

export const CVTimelineItems: CVTimelineItem[] = [
  ...educationCVItems,
  ...workCVItems,
  ...courseCVItems,
  ...hobbyItems
]
