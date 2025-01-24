<script setup lang="ts">
interface Props {
  position?: 'top-left' | 'bottom-right'
  rotatingText?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top-left',
  rotatingText: '',
  className: '',
})

const positionClasses = computed(() => ({
  'top-left': 'md:top-[40px] md:left-[40px] top-[40px] left-[50%] translate-x-[-50%] md:translate-x-0',
  'bottom-right': 'md:bottom-[40px] md:right-[40px] md:top-auto md:left-auto top-[20%] left-[50%] translate-x-[-50%] md:translate-x-0',
})[props.position])
</script>

<template>
  <GrainCard
    :class-name="`w-[200px] h-[200px] lg:w-[384px] lg:h-[384px] bg-primary rounded-full border-lightBlack border-2 flex items-center justify-center lg:p-[70px] p-[30px] absolute ${positionClasses} ${className}`"
  >
    <div
      v-if="rotatingText"
      class="absolute w-full h-full rotating-text"
    >
      <svg
        viewBox="0 0 100 100"
        class="w-full h-full"
      >
        <path
          id="textPath"
          d="M 50,50 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
          fill="none"
        />fill="none"
        />
        <text class="text-[10px] fill-lightBlack">
          <textPath
            href="#textPath"
            class="[dominant-baseline:mathematical]"
          ><tspan>✦ </tspan>{{ rotatingText }}<tspan>✦ </tspan></textPath>
        </text>
      </svg>
    </div>
    <img
      src="/images/avatar.jpg"
      class="w-full h-full rounded-full"
    >
  </GrainCard>
</template>

<style scoped>
.rotating-text {
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
