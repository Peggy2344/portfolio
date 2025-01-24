<script setup>
const config = useRuntimeConfig()
const baseURL = config.app.baseURL

const profolioProjects = [
  {
    company: 'CryptoVibe',
    year: '2025',
    title: 'Full-Stack Crypto Analytics Platform',
    description: 'A full-stack platform for real-time cryptocurrency tracking and analytics, featuring live portfolio management, market data visualization, and sentiment analysis. Built with Vue.js and Node.js.',
    tools: ['Vue3', 'Node.js', 'Express', 'websocket', 'highcharts.js', 'shadcn'],
    repo: 'https://github.com/Peggy2344/crypto-dashboard',
    backendRepo: 'https://github.com/Peggy2344/crypto-dashboard-backend',
    live: 'https://crypto-dashboard-two-psi.vercel.app/',
    image: `${baseURL}images/crypto-vibe.png`,
    type: 'desktop',
  },
  {
    company: 'HIKER',
    year: '2022',
    title: 'Gear Online Shop',
    description: 'Developed a full-stack e-commerce platform using Vue.js and Node.js, featuring state management with Vuex, responsive UI with Vuetify, secure user authentication, and MongoDB integration for data persistence.',
    tools: ['Vue2', 'Vuex', 'Node.js', 'MongoDB', 'Express', 'Vuetify'],
    repo: 'https://github.com/Peggy2344/hiker',
    live: 'https://peggy2344.github.io/hiker/#/',
    image: `${baseURL}images/hiker.png`,
    type: 'desktop',
  },
  {
    company: 'Translate Linebot',
    year: '2022',
    title: 'English-Thai Translation & News Line Bot',
    description: 'Developed a LINE messaging bot that provides instant English-Thai translations and news updates, integrating Longdo Dictionary API for translations and NewsAPI for real-time news delivery.',
    tools: ['LINE Messaging API', 'Node.js', 'Longdo Dictionary API', 'NewsAPI'],
    repo: 'https://github.com/Peggy2344/linebot',
    image: `${baseURL}gif/translate-linebot.gif`,
    type: 'phone',
  },
]
</script>

<template>
  <div class="flex flex-col items-center w-full gap-5 py-2 md:gap-20 md:py-6">
    <GrainCard
      v-for="(project, projectIndex) in profolioProjects"
      :key="project.title"
      class="md:sticky pt-8 pb-0 pl-8 pr-8 bg-gray-200 border-2 md:pt-12 md:px-10 lg:pt-16 lg:px-20 border-primary rounded-xl max-w-[1200px]"
      :style="{ top: `calc(var(--project-offset) + ${projectIndex * 20}px)` }"
    >
      <div class="lg:grid lg:grid-cols-2 lg:gap-16">
        <div class="lg:pb-16">
          <div class="inline-flex gap-2 text-sm font-bold tracking-widest text-transparent uppercase bg-clip-text bg-gradient-to-r from-pink-300 to-primary">
            <span>{{ project.company }}</span>
            <span>&bull;</span>
            <span>{{ project.year }}</span>
          </div>
          <h3 class="mt-2 text-2xl text-white md:text-4xl md:mt-5">
            {{ project.title }}
          </h3>
          <hr class="mt-4 border-t-2 border-white/5 md:mt-5">
          <div class="grid grid-cols-1 gap-6 mb-8 md:mb-0">
            <p class="mt-4 text-base text-white/50 md:mt-5">
              {{ project.description }}
            </p>
            <div>
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="tool in project.tools"
                  :key="tool"
                  class="px-2 py-1 text-sm rounded-2xl text-lightBlack/90 bg-primary"
                >
                  {{ tool }}
                </li>
              </ul>
            </div>
          </div>
          <div class="flex gap-5 md:mt-10">
            <a
              v-if="project.repo"
              class="flex items-center gap-1 group"
              :href="project.repo"
              target="_blank"
            >
              <Icon
                name="lucide:github"
                class=" text-white/50 group-hover:text-primary size-5"
              />
              <p class="text-white group-hover:underline">repository</p>
            </a>
            <a
              v-if="project.live"
              class="flex items-center gap-1 cursor-pointer group"
              :href="project.live"
              target="_blank"
            >
              <Icon
                name="lucide:link"
                class=" text-white/50 group-hover:text-primary size-5"
              />
              <p class="text-white group-hover:underline">open live site</p>
            </a>
          </div>
        </div>
        <div class="relative">
          <SafariMockUp
            v-if="project.type === 'desktop'"
            class="w-full mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none h-fit"
            :src="project.image"
            :alt="project.title"
          />
          <div
            v-if="project.type === 'phone'"
            class="w-full mt-8 -mb-4 lg:w-auto md:-mb-0 lg:relative h-[300px] lg:h-[350px] flex items-center justify-center"
          >
            <iPhoneMockUp
              :src="project.image"
              class="w-auto h-full max-h-[300px] lg:max-h-[350px] object-contain "
            />
          </div>
        </div>
      </div>
    </GrainCard>
  </div>
</template>
