import { parse } from 'date-fns'
import { CVItemType, CVOrg, CVTimelineItem } from '~/model/CVModel'
import { CV_DATE_FORMAT } from '~/model/ui/CVUIModel'

function parseDate(date: string): Date {
  return parse(date, CV_DATE_FORMAT, new Date())
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
    endDate: parseDate('2021/03'),
    skills: ['infrastructure', 'frontend', 'scripting'],
    tech: [
      'Docker + Compose + Kubernetes',
      'VueJs + Typescript',
      'Ansible + Python'
    ]
  },
  {
    key: 'parrable',
    org: CVOrg.PARRABLE,
    startDate: parseDate('2021/04'),
    endDate: parseDate('2021/08'),
    skills: ['infrastructure', 'scripting'],
    tech: ['SaltStack', 'Terraform', 'Google Cloud', 'Python + bash', 'Docker']
  },
  {
    key: 'nextcloud',
    org: CVOrg.NEXTCLOUD,
    startDate: parseDate('2021/09'),
    endDate: undefined,
    skills: ['mobile', 'openSource', 'app_architecture'],
    tech: ['Android + Kotlin + Java', 'Bash + Python', 'Github Actions']
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
