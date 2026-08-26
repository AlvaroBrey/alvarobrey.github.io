import { parse } from 'date-fns'
import { CVItemType, CVOrg } from '../model/CVModel'
import type { CVTimelineItem } from '../model/CVModel'
import { CV_DATE_FORMAT } from '../model/CVUIModel'

function parseDate(date: string): Date {
  return parse(date, CV_DATE_FORMAT, new Date())
}

// Typing the literals before the type is stamped on means skills and orgs are
// checked where they're written, rather than widening to string[] first.
type CVItemInput = Omit<CVTimelineItem, 'type'>

function withType(items: CVItemInput[], type: CVItemType): CVTimelineItem[] {
  return items.map((item) => ({ ...item, type }))
}

export const educationCVItems: CVTimelineItem[] = withType(
  [
    {
      key: 'ITDegree',
      note: 'End of Degree Project defense on September 2016, with title “Java Implementation of QRS clustering algorithm”. Adaptation of an existing signal processing algorithm for its deployment on Android devices.',
      title: 'Degree in Computer Science',
      shortDescription:
        'Advanced education related to computer science, including but not limited to: software programming, architecture and design, systems engineering and systems administration.',
      org: CVOrg.USC,
      startDate: parseDate('2012/09'),
      endDate: parseDate('2016/09')
    },
    {
      key: 'AIMasters',
      note: 'Degree imparted by the Spanish Association for Artificial Intelligence (AEPIA) and managed by the Menéndez Pelayo International University (UIMP).',
      title: 'Masters in Artificial Intelligence Research',
      shortDescription:
        'Education in machine learning, artificial intelligence, statistics and data analysis, and introduction to scientific research.',
      org: CVOrg.UIMP,
      startDate: parseDate('2017/09'),
      endDate: parseDate('2019/07')
    }
  ],
  CVItemType.EDUCATION
)

export const workCVItems: CVTimelineItem[] = withType(
  [
    {
      key: 'citius',
      title: 'Android Developer',
      shortDescription:
        'Android development, and occasional development on related projects. Research in medication adherence and mHealth. Main project: <a href="https://github.com/citiususc/calendula">Calendula</a>, an open-source medication management app.',
      org: CVOrg.CITIUS,
      startDate: parseDate('2016/10'),
      endDate: parseDate('2018/04'),
      skills: ['mobile', 'scripting', 'research', 'openSource'],
      tech: ['Android + Kotlin', 'Python, NodeJS']
    },
    {
      key: 'imagames',
      location: 'Santiago de Compostela',
      title: 'DevOps / Android Engineer',
      shortDescription:
        'Infrastructure and deployment management, monitoring and automation.\nResponsible for proposing and carrying out several extensive upgrades to development processes and infrastructure management, including containerization, automation and CI.<br>Android development for client apps, developing new features and maintaining several existing apps, and improving development experience and build times.<br>VueJS Frontend for admin dashboards and public applications.',
      org: CVOrg.IMAGAMES,
      startDate: parseDate('2018/12'),
      endDate: parseDate('2021/03'),
      skills: ['infrastructure', 'mobile', 'frontend', 'scripting'],
      tech: [
        'Docker + Ansible + Python',
        'Android + Kotlin + Java',
        'VueJs + Typescript'
      ]
    },
    {
      key: 'nextcloud',
      location: 'Remote',
      title: 'Android Engineer',
      shortDescription:
        'Android engineer at Nextcloud, a self-hosted, open-source file storage, sharing and productivity platform. Work on the main Nextcloud app for file management and sync on Android; additional work on the Nextcloud Talk chat and videocall app. Co-lead efforts to align app architecture and share code and config between different apps, with the intent to deduplicate efforts and facilitate cross-team work.',
      org: CVOrg.NEXTCLOUD,
      startDate: parseDate('2021/09'),
      endDate: parseDate('2023/03'),
      skills: ['mobile', 'openSource', 'app_architecture'],
      tech: ['Android + Kotlin + Java', 'Bash + Python', 'Github Actions']
    },
    {
      key: 'cabify',
      location: 'Remote',
      title: 'Senior Android Engineer',
      shortDescription:
        'Senior Android Engineer at Cabify, multi-mobility platform for people and parcels. Work on the main Rider public app, with millions of active users. Includes new feature development, maintenance and release management. Frequent contributor to process improvements, CI, and code sharing. Early adopter of AI tools, contributing rules, skills and setting up integrations.',
      org: CVOrg.CABIFY,
      startDate: parseDate('2023/03'),
      endDate: parseDate('2026/06'),
      skills: ['mobile', 'app_architecture', 'scripting', 'app_analytics'],
      tech: ['Android + Kotlin + Compose', 'Bash', 'Gitlab CI', 'Elixir']
    },
    {
      key: 'revenuecat',
      location: 'Remote',
      title: 'Senior SDK Engineer',
      shortDescription:
        'Senior SDK Engineer at RevenueCat, where we help developers make more money. Multiplatform with focus on Android.',
      org: CVOrg.REVENUECAT,
      startDate: parseDate('2026/06'),
      endDate: undefined
    }
  ],
  CVItemType.WORK
)

export const courseCVItems: CVTimelineItem[] = withType(
  [
    {
      key: 'machineLearning',
      title: 'Machine Learning',
      shortDescription:
        'Theory and assignments on neural networks, SVMs and other fundamental Machine Learning algorithms and related skills.',
      org: CVOrg.STANFORD,
      startDate: undefined,
      endDate: parseDate('2017/04')
    },
    {
      key: 'scalaFP',
      title: 'Functional Programming in Scala',
      shortDescription:
        'Introductory course to Scala and higher level functional programming concepts.',
      org: CVOrg.EPFL,
      startDate: undefined,
      endDate: parseDate('2019/06')
    }
  ],
  CVItemType.COURSE
)

export const hobbyItems: CVTimelineItem[] = withType(
  [
    {
      key: 'androidRoms',
      location: 'Personal project',
      title: 'Android ROM developer',
      shortDescription:
        'Development of CyanogenMOD (later LineageOS) ROMs for Android devices. Open-source development including regular releases. Work in applications, kernels and system configuration.',
      org: CVOrg.LINEAGEOS,
      startDate: parseDate('2015/06'),
      endDate: parseDate('2017/08'),
      skills: ['openSource', 'mobile', 'scripting'],
      tech: ['Android', 'Java, C', 'Bash, Python']
    }
  ],
  CVItemType.HOBBY
)

export const CVTimelineItems: CVTimelineItem[] = [
  ...educationCVItems,
  ...workCVItems,
  ...courseCVItems,
  ...hobbyItems
]
