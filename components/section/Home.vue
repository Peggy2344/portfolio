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
    <!-- <div
      ref="el"
      class="h-[100vh] md:h-[calc(100vh-80px)] md:rounded-tl-[196px] sticky top-[40px]md:px-10 z-[1]"
    > -->
    <GrainCard
      class-name="sticky top-0 z-[1] h-[100vh] w-full transform-perspective-[1200px] will-change-transform bg-lightBlack md:p-10"
      :style="style"
    >
      <div class="contents">
        <GrainCard class-name="w-[200px] h-[200px] lg:w-[384px] lg:h-[384px] bg-primary rounded-full border-lightBlack border-2 flex items-center justify-center lg:p-[70px] p-[30px] absolute md:top-[40px] md:left-[40px] top-[40px] left-[50%] translate-x-[-50%] md:translate-x-0 z-[1]">
          <div class="absolute w-full h-full rotating-text">
            <svg
              viewBox="0 0 100 100"
              class="w-full h-full"
            >
              <path
                id="textPath"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text class="text-[10px] tracking-[0.01em] fill-lightBlack">
                <textPath href="#textPath">FRONTEND DEVELOPER  </textPath>
              </text>
            </svg>
          </div>
          <NuxtImg
            src="/images/avatar.jpg"
            class="w-full h-full rounded-full"
          />
        </GrainCard>
      </div>
      <GrainCard
        class-name="h-full bg-primary md:rounded-tl-[120px] lg:rounded-tl-[196px]"
      >
        <div class="md:flex md:items-center md:justify-end md:p-12">
          <NavBar :items="navItems" />
        </div>
        <div class="absolute bottom-0 w-full -translate-x-1/2 left-1/2">
          <div class="absolute bottom-0 w-full -translate-x-1/2 left-1/2">
            <div class="flex flex-col items-center justify-center lg:pr-20 lg:justify-end lg:flex-row">
              <h1 class="text-lightBlack text-[50px] md:text-[70px] lg:text-[100px] font-bold leading-[180px] tracking-wider">
                Hi, I'm
              </h1>
              <TextHoverEffect
                class="w-[100%] md:w-[70%] lg:w-[40%]"
                text="FANG YU"
                :opacity="1"
                :style="{ transform: `scale(${scale})` }"
              />
            </div>
          </div>
        </div>
      </GrainCard>
    <!-- </div> -->
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
