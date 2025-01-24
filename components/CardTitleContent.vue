<script setup lang="ts">
const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="border border-1 border-primary rounded-xl">
    <GrainCard class-name="flex items-center justify-center bg-primary h-[80px] rounded-t-xl">
      <h3 class="text-2xl font-bold md:text-3xl text-lightBlack">
        {{ title }}
      </h3>
    </GrainCard>
    <GrainCard class-name="text-lg bg-lightBlack text-lightPurple rounded-b-xl p-4 md:py-8 md:px-6">
      <slot name="content" />
    </GrainCard>
  </div>
</template>
