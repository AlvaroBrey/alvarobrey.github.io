import en from './en.json'

export function t(key: string): string {
  const value = key
    .split('.')
    .reduce<unknown>(
      (acc, part) => (acc as Record<string, unknown>)?.[part],
      en
    )
  return typeof value === 'string' ? value : key
}
