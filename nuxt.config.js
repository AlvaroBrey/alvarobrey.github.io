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
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: BASE_URL + '/og_image.png'
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: BASE_URL + '/og_image.png'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        sizes: 'any',
        href: '/favicon.svg'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      {
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        'data-cf-beacon': '{"token": "dd5c5a36f4344624bd3ed5c1870c06c1"}',
        defer: true
      }
    ]
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  },
  css: ['~/assets/styles/global', '~/assets/styles/fonts'],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  modules: ['nuxt-i18n', '@nuxtjs/sitemap'],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        if (type === 'script' || type === 'style') {
          return true
        }
        if (type === 'font') {
          // only preload the regular woff2 fonts
          return /(regular|[357]00)\..*\.woff2$/.test(file)
        }
      }
    }
  },
  build: {
    extractCSS: true
  },
  generate: {
    fallback: '/404.html'
  },
  // module configs
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/styles/vuetify-variables.scss'],
    optionsPath: '~/vuetify.options.ts',
    defaultAssets: false
  },
  i18n: {
    baseUrl: BASE_URL,
    seo: true,
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'es', iso: 'es-ES' }
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
  sitemap: {
    hostname: BASE_URL,
    i18n: true
  }
}
