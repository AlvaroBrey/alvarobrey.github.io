import { browser } from '$app/environment'

// Duplicated in the pre-paint script in src/app.html, which runs before any
// module loads. Renaming this silently orphans saved preferences.
const STORAGE_KEY = 'alvarobrey.com.darkTheme'

// That script sets the class, so the DOM leads localStorage here.
export function isDark(): boolean {
  return browser && document.documentElement.classList.contains('dark')
}

export function setDark(value: boolean): void {
  document.documentElement.classList.toggle('dark', value)
  localStorage.setItem(STORAGE_KEY, value.toString())
}
