// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro:{
    routeRules:{
      'api/**':{
        proxy:'http://localhost:8000/**'
      }
    }
  },
  runtimeConfig:{
    public:{
      baseUrl: '/api'
    }
  }

})
