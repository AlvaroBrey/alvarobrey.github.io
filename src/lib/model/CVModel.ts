import type { Optional } from '../types/utilityTypes'

export enum CVItemType {
  COURSE = 'course',
  EDUCATION = 'education',
  WORK = 'work',
  HOBBY = 'hobby'
}

export enum CVOrg {
  CABIFY = 'cabify',
  CITIUS = 'citius',
  EPFL = 'epfl',
  EVERIS = 'everis',
  IMAGAMES = 'imagames',
  LINEAGEOS = 'lineageos',
  NEXTCLOUD = 'nextcloud',
  PARRABLE = 'parrable',
  REVENUECAT = 'revenuecat',
  STANFORD = 'stanford',
  UIMP = 'uimp',
  USC = 'usc'
}

export type Skill =
  | 'app_analytics'
  | 'app_architecture'
  | 'frontend'
  | 'infrastructure'
  | 'mobile'
  | 'openSource'
  | 'research'
  | 'scripting'

export interface CVTimelineItem {
  key: string
  title: string
  shortDescription?: string
  // Rendered by the CV PDF only -- unused in the components, not dead.
  location?: string
  note?: string
  org: Optional<CVOrg>
  startDate: Optional<Date>
  endDate: Optional<Date>
  type: CVItemType
  skills?: Skill[]
  tech?: string[]
}
