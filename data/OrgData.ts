import { CVOrg } from '~/model/CVModel'

export const orgUrls: Partial<Record<CVOrg, string>> = {
  [CVOrg.REVENUECAT]: 'https://www.revenuecat.com',
  [CVOrg.CABIFY]: 'https://cabify.com',
  [CVOrg.NEXTCLOUD]: 'https://nextcloud.com',
  [CVOrg.CITIUS]: 'https://citius.gal'
}
