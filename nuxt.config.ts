// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
        tailwindcss()
    ]
  },

  modules: ['@nuxtjs/i18n', '@primevue/nuxt-module'],
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
        }
      }
    }
  },
  i18n: {
    defaultLocale: 'en',
      locales: [
          { code: 'en', name: 'English', file: 'en.json' },
          { code: 'ru', name: 'Russian', file: 'ru.json' }
      ]
  }
})