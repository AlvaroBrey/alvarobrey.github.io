import { messages } from './locales'

const BASE_URL = 'https://alvarobrey.com'
export default {
  target: 'static',
  head: {
    titleTemplate: '%s - Álvaro Brey',
    title: 'alvarobrey.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Álvaro Brey is a Software Engineer and DevOps from Santiago de Compostela, Spain'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  },
  css: ['~/assets/styles/global'],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify', '@nuxtjs/moment'],
  modules: ['nuxt-i18n', '@nuxtjs/sitemap'],
  build: {},
  generate: {
    fallback: '/404.html'
  },
  // module configs
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/styles/vuetify-variables.scss'],
    optionsPath: '~/vuetify.options.ts'
  },
  i18n: {
    baseUrl: BASE_URL,
    seo: true,
    locales: [{ code: 'en', iso: 'en-US' }],
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
  },
  sitemap: {
    hostname: BASE_URL,
    i18n: true
  }
}
