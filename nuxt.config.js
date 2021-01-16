import { messages } from './locales'

export default {
  target: 'static',
  head: {
    titleTemplate: '%s - alvarobrey.com',
    title: 'alvarobrey.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    'nuxt-compress'
  ],
  modules: ['nuxt-i18n'],
  build: {},
  // module configs
  vuetify: {
    customVariables: ['~/assets/vuetify-variables.scss'],
    optionsPath: '~/vuetify.options.ts'
  },
  i18n: {
    baseUrl: 'https://alvarobrey.com',
    seo: true,
    locales: [
      { code: 'en', iso: 'en-US' },
      {
        code: 'es',
        iso: 'es-ES'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages
    },
    detectBrowserLanguage: {
      onlyOnRoot: true
    }
  },
  moment: {
    locales: ['es']
  }
}
