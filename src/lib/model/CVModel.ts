import type { Optional } from '../types/utilityTypes'

export enum CVItemType {
  EDUCATION = 'education',
  WORK = 'work',
  HOBBY = 'hobby'
}

export enum CVOrg {
  CABIFY = 'cabify',
  CITIUS = 'citius',
  IMAGAMES = 'imagames',
  LINEAGEOS = 'lineageos',
  NEXTCLOUD = 'nextcloud',
  REVENUECAT = 'revenuecat',
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
