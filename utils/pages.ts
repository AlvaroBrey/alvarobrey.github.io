export interface Page {
  translationKey: string
  routeName: string
}

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
    translationKey: 'about',
    routeName: 'about'
  }
])
