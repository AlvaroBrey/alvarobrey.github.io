import { ThemeOptions, VuetifyThemeVariant } from 'vuetify/types/services/theme'
import { GlobalVuetifyPreset } from 'vuetify/types/services/presets'

const lightTheme: Partial<VuetifyThemeVariant> = {
  primary: '#388E3C',
  secondary: '#eff3ef'
}

// TODO tweak dark theme and enable switching in app
const darkTheme: Partial<VuetifyThemeVariant> = {
  primary: '#4CAF50',
  secondary: '#3b3b49'
}

const themeOptions: ThemeOptions = {
  dark: true,
  options: {
    customProperties: true
  },
  themes: {
    light: lightTheme,
    dark: darkTheme
  }
}

const vuetifyOptions: GlobalVuetifyPreset = {
  icons: {
    iconfont: 'mdiSvg'
  },
  theme: themeOptions
}
// noinspection JSUnusedGlobalSymbols
export default vuetifyOptions
