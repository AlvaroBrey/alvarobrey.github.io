import { browser } from '$app/environment'

const STORAGE_KEY = 'alvarobrey.com.darkTheme'

export function getStoredDark(): boolean | undefined {
  if (!browser) return undefined
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === null ? undefined : stored === 'true'
}

export function storeDark(value: boolean): void {
  if (browser) localStorage.setItem(STORAGE_KEY, value.toString())
}

export function applyDark(value: boolean): void {
  if (browser) document.documentElement.classList.toggle('dark', value)
}
