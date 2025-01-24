<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    company: 'KNST CO., LTD',
    period: 'MAR 2021 - JUL 2024',
    title: 'Frontend Engineer',
    description: 'Responsible for developing and maintaining company products including apps and websites. Implemented Sentry for error monitoring and conducted team training.',
    lists: [
      'Collaborated with backend engineers, UI/UX designers, and marketing team to develop and maintain Apps and Websites using Vue.js and Nuxt, with Cordova for app development.',
      'Internal Systems: Developed and maintained multiple internal system websites using Vue.js framework',
      'Error Tracking: Implemented error tracking and resolution using Sentry and Firebase Crashlytics',
    ],
    technologies: ['Vue3', 'React', 'Node.js', 'Sentry'],
  },
])
</script>

<template>
  <div>
    <div
      v-for="(exp, index) in experiences"
      :key="index"
      class="grid grid-cols-1 gap-2"
    >
      <div class="grid">
        <div class="flex flex-col justify-between mb-4 md:flex-row">
          <div>
            <h2 class="mb-1 text-xl font-bold text-white">
              {{ exp.title }}
            </h2>
            <h3 class="text-gray-300 text-md">
              {{ exp.company }}
            </h3>
          </div>
          <p class="mt-2 text-sm text-gray-400 md:mt-0 md:text-right">
            {{ exp.period }}
          </p>
        </div>
        <div>
          <p class="text-sm leading-relaxed text-gray-300">
            {{ exp.description }}
          </p>
          <ul class="space-y-2 text-sm text-gray-300 list-disc list-inside">
            <li
              v-for="(list, listI) in exp.lists"
              :key="listI"
              class="tracking-wide"
            >
              {{ list }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
