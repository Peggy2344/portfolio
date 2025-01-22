<script setup lang="ts">
import type { Skill } from '@/types/skills'

const skills = ref<Skill[]>([
  {
    name: 'Frontend',
    lists: ['Vue3', 'Nuxt', 'Typescript', 'Tailwind', 'Cordova'],
  },
  {
    name: 'Backend',
    lists: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    name: 'SEO',
    lists: ['Google Search Console', 'Google Analytics', 'Facebook Pixel'],
  },
  {
    name: 'Error Tracking',
    lists: ['Sentry', 'Firebase Crashlytics'],
  },
])

const combineSkills = computed(() => {
  return skills.value.map((skill: Skill) => {
    return {
      ...skill,
      lists: skill.lists.join(', '),
    }
  })
})
</script>

<template>
  <div class="p-6">
    <div
      v-for="skill in combineSkills"
      :key="skill.name"
      class="flex flex-col gap-2 p-4"
    >
      <h3 class="text-2xl text-primary">
        {{ skill.name }}
      </h3>
      <div>
        <p class="text-gray-300">
          {{ skill.lists }}
        </p>
      </div>
    </div>
  </div>
</template>
