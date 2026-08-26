import type { Skill } from '../model/CVModel'

// Keyed by every Skill, so a typo in a CV item's skills list is a type error.
export const skillLabels: Record<Skill, string> = {
  app_analytics: 'App analytics',
  app_architecture: 'App architecture',
  frontend: 'Front end development',
  infrastructure: 'Infrastructure management',
  mobile: 'Mobile development',
  openSource: 'Open source development',
  research: 'Research',
  scripting: 'Scripting'
}
