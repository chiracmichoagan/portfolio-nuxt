export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt',
    '@nuxtjs/i18n',
  ],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-03-11',
  i18n: {
    locales: [
      { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'it', iso: 'it-IT', name: 'Italiano', file: 'it.json' },
      { code: 'pt', iso: 'pt-PT', name: 'Português', file: 'pt.json' },
      { code: 'el', iso: 'el-GR', name: 'Ελληνικά', file: 'el.json' }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    lazy: true
  }
})