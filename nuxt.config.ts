// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/portfolio/' : ''

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxt/icon',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },
  app: {
    baseURL: routerBase,
  },
  css: ['~/assets/main.css'],
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      }),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
