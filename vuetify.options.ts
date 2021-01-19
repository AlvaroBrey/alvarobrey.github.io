import { ThemeOptions, VuetifyThemeVariant } from 'vuetify/types/services/theme'
import { GlobalVuetifyPreset } from 'vuetify/types/services/presets'

const lightTheme: Partial<VuetifyThemeVariant> = {
  primary: '#4a4e69',
  secondary: '#fcf9f8',
  accent: '#C9ADA7'
}

// TODO tweak dark theme and enable switching in app
const darkTheme: Partial<VuetifyThemeVariant> = {
  primary: '#c9ada7',
  secondary: '#4A4E69',
  accent: '#C9ADA7'
}

const themeOptions: ThemeOptions = {
  dark: false,
  options: {
    customProperties: true
  },
  themes: {
    light: lightTheme,
    dark: darkTheme
  }
}

const vuetifyOptions: GlobalVuetifyPreset = {
  theme: themeOptions
}
// noinspection JSUnusedGlobalSymbols
export default vuetifyOptions
