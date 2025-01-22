<script setup lang="ts">
const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="border border-1 border-primary">
    <GrainCard class-name="flex items-center justify-center bg-primary h-[80px]">
      <h3 class="text-3xl font-bold text-lightBlack">
        {{ title }}
      </h3>
    </GrainCard>
    <GrainCard class-name="p-5 text-lg bg-lightBlack text-lightPurple">
      <slot name="content" />
    </GrainCard>
  </div>
</template>
