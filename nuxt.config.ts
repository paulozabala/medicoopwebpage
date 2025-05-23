// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui','@nuxt/fonts'],
  css: ['/assets/css/main.css'],
  runtimeConfig: {
    apiURL: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiDir: process.env.NUXT_API_URL, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
  devtools: { enabled: false },
  compatibilityDate: '2024-11-01',
  
})