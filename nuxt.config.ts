import fs from 'fs'

const modulesAutoImportConfig = fs
  .readdirSync('./modules', { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => ({
    path: `~/modules/${dirent.name}`,
    pathPrefix: false,
    extensions: ['.vue']
  }))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Acompanhantes: conheça acompanhantes de todo o Brasil!',
      htmlAttrs: {
        lang: 'pt-br'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#263238' },

        {
          property: 'og:title',
          content: 'Acompanhantes: conheça acompanhantes de todo o Brasil!',
          key: 'og:title'
        },
        {
          property: 'og:site_name',
          content: 'Acompanhantes: conheça acompanhantes de todo o Brasil!'
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content:
            'Veja acompanhantes mulheres e homens, cis e trans em todo o Brasil com a Fatal Model. Acompanhantes verificados, entre em contato pelo WhatsApp e telefone!',
          key: 'og:description'
        },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@fatalmodel' }
      ]
    }
  },

  runtimeConfig: {
    public: {}
  },

  components: [{ path: '~/components', pathPrefix: false }, ...modulesAutoImportConfig],

  dir: {
    modules: 'nuxt-modules'
  },

  css: [
    'assets/css/normalize.css',
    'assets/css/app.css',
    'assets/css/fonts.css',
    'assets/css/title.css',
    'swiper/swiper-bundle.css',
    'swiper/components/navigation/navigation.min.css',
    'swiper/components/pagination/pagination.min.css',
    'swiper/components/lazy/lazy.min.css'
  ],

  devtools: { enabled: false },

  modules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', '@nuxt/test-utils/module', '@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/device'],

  eslint: {
    lintOnStart: false,
    emitWarning: false
  },

  build: {
    transpile: ['tslib']
  },

  experimental: {
    payloadExtraction: false
  },

  typescript: {
    typeCheck: true
  },

  nitro: {
    compressPublicAssets: true
  }
})
