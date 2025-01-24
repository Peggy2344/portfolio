// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

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
    baseURL: '/portfolio/',
    buildAssetsDir: '/assets/',
  },
  css: ['~/assets/main.css'],
  experimental: {
    payloadExtraction: false,
  },
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
