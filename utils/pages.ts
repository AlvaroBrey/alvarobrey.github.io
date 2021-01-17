export interface Page {
  translationKey: string
  routeName: string
}

// todo make name optional to avoid repeating it all the time
export const pages: readonly Page[] = Object.freeze([
  {
    translationKey: 'home',
    routeName: 'index'
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
    routeName: 'about'
  }
])

export function isHomeRoute(routeName: string | null | undefined) {
  return routeName?.startsWith('index')
}
