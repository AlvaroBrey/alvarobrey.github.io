export interface Page {
  translationKey: string
  routeName: string
}

const indexRouteName = 'index'
const aboutRouteName = 'about'

// todo make name optional to avoid repeating it all the time
export const pages: readonly Page[] = Object.freeze([
  {
    translationKey: 'home',
    routeName: indexRouteName
  },
  {
    translationKey: 'me',
    routeName: 'me'
  },
  {
    translationKey: 'cv',
    routeName: 'cv'
  },
  {
    translationKey: 'contact',
    routeName: 'contact'
  },
  {
    translationKey: 'about',
    routeName: aboutRouteName
  }
])

export function isHomeRoute(routeName: string | null | undefined) {
  return routeName?.startsWith(indexRouteName)
}

export function isAboutRoute(routeName: string | null | undefined) {
  return routeName?.startsWith(aboutRouteName)
}
