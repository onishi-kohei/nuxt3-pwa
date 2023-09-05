// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,
      type: "module",
    },
    strategies: 'generateSW',
    workbox: {
      cleanupOutdatedCaches: false,
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    },
  },
})
