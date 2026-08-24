import en from './en.json'

export const locales = { en } as const
export type Locale = keyof typeof locales
export const defaultLocale: Locale = 'en'
export const availableLocales = Object.keys(locales) as Locale[]

export function t(key: string): string {
  const value = key
    .split('.')
    .reduce<unknown>(
      (acc, part) => (acc as Record<string, unknown>)?.[part],
      locales[defaultLocale]
    )
  return typeof value === 'string' ? value : key
}
