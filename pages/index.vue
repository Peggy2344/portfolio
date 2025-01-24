<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { computed, ref, onMounted } from 'vue'

const { y } = useScroll(window)
const contactRef = ref<HTMLElement | null>(null)
const triggerPoint = ref(0)
const vh = ref(0)

onMounted(() => {
  window.addEventListener('resize', updateMeasurements)
  nextTick(() => {
    updateMeasurements()
  })
})

const homeStyle = computed(() => {
  if (!y.value || y.value < vh.value) return {}
  const scrollProgress = Math.max(0, Math.min(1, y.value / vh.value))
  const translateY = scrollProgress * -(vh.value * 1.2)

  return {
    transformPerspective: '1200px',
    willChangeTransform: 'transform',
    transform: `translateY(${translateY}px)`,
    transition: 'transform 0.1s ease-out',
  }
})

const homeScale = computed(() => {
  if (!y.value) return 1
  const scrollProgress = Math.max(0, Math.min(1, y.value / vh.value))
  const scale = 1 + scrollProgress * 2
  return Math.min(scale, 2)
})

const contactScale = computed(() => {
  if (!y.value || y.value < triggerPoint.value) return 1

  const scrollProgress = Math.max(0, Math.min(1, (y.value - triggerPoint.value) / vh.value))
  const scale = 1 + (1 - scrollProgress) * 1.5
  return Math.min(scale, 2)
})

function updateMeasurements() {
  vh.value = window.innerHeight
  if (contactRef.value) {
    const contactRect = contactRef.value.getBoundingClientRect()
    triggerPoint.value = contactRect.top + window.scrollY - vh.value
  }
}
</script>

<template>
  <GrainCard class-name="relative w-full mx-auto overflow-visible h-min bg-lightBlack">
    <SectionHome
      :scale="homeScale"
      :style="homeStyle"
    />
    <GrainCard class-name="relative z-10 bg-lightBlack overflow-visible">
      <SectionAboutMe />
    </GrainCard>
    <GrainCard class-name="relative z-10 bg-lightBlack overflow-visible">
      <SectionProject />
    </GrainCard>
    <div
      ref="contactRef"
      class="h-[100vh] z-1"
    />
    <GrainCard class-name="fixed top-0 bottom-0 left-0 right-0 z-0 overflow-visible bg-lightBlack">
      <SectionContact :scale="contactScale" />
    </GrainCard>
  </GrainCard>
</template>
