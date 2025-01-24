<script setup lang="ts">
const { scale, style } = defineProps({
  scale: {
    type: Number,
    default: 1,
  },
  style: {
    type: Object,
    default: () => ({}),
  },
})

const navItems = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#project', text: 'Project' },
  { href: '#contact', text: 'Contact' },
]
</script>

<template>
  <ClientOnly>
    <GrainCard
      class-name="sticky top-0 z-[1] h-[100vh] w-full transform-perspective-[1200px] will-change-transform bg-lightBlack md:p-10"
      :style="style"
    >
      <div class="contents">
        <AvatarCard
          position="top-left"
          rotating-text="FRONTEND DEVELOPER"
          class-name="z-[1]"
        />
      </div>
      <GrainCard
        class-name="h-full bg-primary md:rounded-tl-[120px] lg:rounded-tl-[196px] pt-[260px] md:pt-0"
      >
        <div class="flex items-center justify-center md:justify-end md:p-12">
          <NavBar
            :items="navItems"
            class="text-center md:text-left"
          />
        </div>
        <div class="absolute bottom-0 w-full -translate-x-1/2 left-1/2">
          <div class="absolute bottom-0 w-full -translate-x-1/2 left-1/2">
            <div class="flex flex-col items-center justify-center lg:pr-20 lg:justify-end lg:flex-row">
              <h1 class="text-lightBlack text-[50px] md:text-[70px] lg:text-[90px] font-bold leading-[180px] tracking-wider hidden md:block">
                Hi, I'm
              </h1>
              <TextHoverEffect
                class="w-[100%] md:w-[70%] lg:w-[45%]"
                text="FANG YU"
                :opacity="1"
                :style="{ transform: `scale(${scale})` }"
              />
            </div>
          </div>
        </div>
      </GrainCard>
    </GrainCard>
  </ClientOnly>
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
