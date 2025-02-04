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
    baseURL: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/portfolio/' : '/',
    buildAssetsDir: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/assets/' : '',
    head: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      title: 'Fang Yu - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Fang Yu - Frontend Developer Portfolio. Showcasing web development projects and skills in Vue.js, Nuxt, and modern web technologies.' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://peggy2344.github.io/portfolio/' },
        { property: 'og:title', content: 'Fang Yu - Portfolio' },
        { property: 'og:description', content: 'Fang Yu - Frontend Developer Portfolio. Showcasing web development projects and skills in modern web technologies.' },
        { property: 'og:image', content: 'https://peggy2344.github.io/portfolio/images/logo.png' },

        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://peggy2344.github.io/portfolio/' },
        { property: 'twitter:title', content: 'Fang Yu - Portfolio' },
        { property: 'twitter:description', content: 'Fang Yu - Frontend Developer Portfolio. Showcasing web development projects and skills in modern web technologies.' },
        { property: 'twitter:image', content: 'https://peggy2344.github.io/portfolio/images/logo.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
      ],
    },
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
