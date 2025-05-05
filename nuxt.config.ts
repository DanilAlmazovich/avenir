// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
        tailwindcss()
    ]
  },

  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
      locales: [
          { code: 'en', name: 'English', file: 'en.json' },
          { code: 'ru', name: 'Russian', file: 'ru.json' }
      ]
  }
})