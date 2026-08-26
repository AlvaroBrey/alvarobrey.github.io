import { browser } from '$app/environment'

// Keep in sync with the pre-paint script in src/app.html, which sets the class
// before first paint and therefore can't import this module.
const STORAGE_KEY = 'alvarobrey.com.darkTheme'

// That script is what puts the class on <html>, so the DOM is the source of
// truth for the current theme rather than localStorage.
export function isDark(): boolean {
  return browser && document.documentElement.classList.contains('dark')
}

export function setDark(value: boolean): void {
  document.documentElement.classList.toggle('dark', value)
  localStorage.setItem(STORAGE_KEY, value.toString())
}
