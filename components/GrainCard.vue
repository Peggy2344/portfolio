<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
  className?: string
  style?: CSSProperties
}>()

const classNames = twMerge(
  'bg-lightBlack relative after:content-[\'\'] after:absolute z-[0] overflow-hidden ',
  props.className,
)
</script>

<template>
  <div
    :class="classNames"
    :style="style"
  >
    <div
      class="absolute inset-0 -z-10 opacity-15"
      style="background-image: url('/images/grain.jpg');"
    />
    <slot />
  </div>
</template>
