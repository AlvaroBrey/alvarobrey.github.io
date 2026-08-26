import { CVOrg } from '../model/CVModel'

export interface Org {
  name: string
  url?: string
}

export const orgs: Record<CVOrg, Org> = {
  [CVOrg.CABIFY]: { name: 'Cabify', url: 'https://cabify.com' },
  [CVOrg.CITIUS]: {
    name: 'CiTIUS - University of Santiago de Compostela',
    url: 'https://citius.gal'
  },
  [CVOrg.EPFL]: { name: 'EPFL on Coursera' },
  [CVOrg.EVERIS]: { name: 'everis Spain' },
  [CVOrg.IMAGAMES]: { name: 'Imagames Gamification Services' },
  [CVOrg.LINEAGEOS]: { name: 'LineageOS' },
  [CVOrg.NEXTCLOUD]: { name: 'Nextcloud', url: 'https://nextcloud.com' },
  [CVOrg.PARRABLE]: { name: 'Parrable' },
  [CVOrg.REVENUECAT]: {
    name: 'RevenueCat',
    url: 'https://www.revenuecat.com'
  },
  [CVOrg.STANFORD]: { name: 'Stanford University on Coursera' },
  [CVOrg.UIMP]: { name: 'Menéndez Pelayo International University' },
  [CVOrg.USC]: { name: 'University of Santiago de Compostela' }
}
