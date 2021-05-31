const LOCAL_STORAGE_DARK_THEME = 'alvarobrey.com.darkTheme'

export function getDefaultDarkValue(): boolean {
  if (process.browser) {
    const darkString = localStorage.getItem(LOCAL_STORAGE_DARK_THEME)
    if (darkString) {
      return darkString === 'true'
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return true
    }
  }
  return true
}
export function storeDarkValue(value: boolean) {
  if (process.browser) {
    localStorage.setItem(LOCAL_STORAGE_DARK_THEME, value.toString())
  }
}
