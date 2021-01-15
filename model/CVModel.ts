import moment from 'moment'
import { Optional } from '~/types/utilityTypes'

export enum CVItemType {
  COURSE = 'course',
  EDUCATION = 'education',
  WORK = 'work',
  HOBBY = 'hobby'
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

export interface CVTimelineItem {
  key: string
  org: Optional<CVOrg>
  startDate: Optional<moment.Moment>
  endDate: Optional<moment.Moment>
  type: CVItemType
  skills?: string[]
  tech?: string[]
}
