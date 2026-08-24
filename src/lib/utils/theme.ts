import { browser } from '$app/environment'

const STORAGE_KEY = 'alvarobrey.com.darkTheme'

// The class is set by a blocking script in app.html before first paint, so the
// DOM is the source of truth for the current theme rather than localStorage.
export function isDark(): boolean {
  return browser && document.documentElement.classList.contains('dark')
}

export function storeDark(value: boolean): void {
  if (browser) localStorage.setItem(STORAGE_KEY, value.toString())
}

export function applyDark(value: boolean): void {
  if (browser) document.documentElement.classList.toggle('dark', value)
}
