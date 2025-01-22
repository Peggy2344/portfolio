<!-- ExperienceBlock.vue -->
<template>
  <div>
    <div
      v-for="(exp, index) in experiences"
      :key="index"
      class="grid grid-cols-7 gap-2"
    >
      <div class="col-span-2">
        <p class="text-sm text-gray-400">
          {{ exp.period }}
        </p>
      </div>
      <div class="grid col-span-5 gap-2">
        <p class="font-bold text-white">
          {{ exp.title }}
        </p>
        <p class="mb-2 text-gray-400">
          {{ exp.company }}
        </p>
        <p class="text-sm text-gray-300">
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
</template>

<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    company: '今網智慧',
    period: 'MAR 2021 - JUL 2024',
    title: '前端工程師',
    description: '負責公司產品的APP及網站的開發與維護工作，並在產品中導入Sentry進行錯誤監控並在團隊中進行教育訓練。',
    lists: [
      '與後端工程師、UI/UX 設計師及行銷部門協同合作，負責【智生活 App、廠商版 App、智樂家官網】的開發與維護，主要使用 Vue.js 和 Nuxt，並使用 Cordova 開發 App。',
      '內部系統開發與維護：開發多個內部系統網站，使用 Vue.js 架構',
      '錯誤追蹤：使用 Sentry 和 Firebase Crashlytics 進行應用程式錯誤的追蹤和修正',
    ],
    technologies: ['Vue3', 'React', 'Node.js', 'Sentry'],
  },
])
</script>
