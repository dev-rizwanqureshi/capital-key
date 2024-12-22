// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore

import axios from 'axios';

export default defineNuxtConfig({
  build: undefined,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  css: [  
    '~/assets/style/style.css',
    '~/assets/style/responsive.css',
    'bootstrap/dist/css/bootstrap.css',
  ],

  modules: [
      '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-simple-sitemap',
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Disallow: ''
    }]
  ],

  pinia: {
    autoImports:[
      'defineStore',
      ['defineStore', 'definePiniaStore']
    ],
  },

  googleFonts: {
    families:{
      'DM Sans':[300,400,500,600,700,800],
    }
  },

  imports:{
    dirs:["./stores"],
  },

  devtools: { enabled: true },
  modern: false,
  compatibilityDate: '2024-11-12',
})