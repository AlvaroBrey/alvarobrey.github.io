import en from './en.json'

export const locales = { en } as const
export type Locale = keyof typeof locales
export const defaultLocale: Locale = 'en'
export const availableLocales = Object.keys(locales) as Locale[]

export function t(key: string, params?: (string | number)[]): string {
  const value = key
    .split('.')
    .reduce<unknown>(
      (acc, part) => (acc as Record<string, unknown>)?.[part],
      locales[defaultLocale]
    )
  if (typeof value !== 'string') return key
  return params
    ? value.replace(/\{(\d+)\}/g, (_, i) => String(params[Number(i)] ?? ''))
    : value
}
