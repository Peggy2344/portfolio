<script setup>
const { scale } = defineProps({
  scale: {
    type: Number,
    default: 1,
  },
})

const items = [
  { href: 'https://github.com/Peggy2344', text: 'Github', type: 'link' },
  { href: 'mailto:peggy102104@gmail.com', text: 'Email', type: 'link' },
]

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <ClientOnly>
    <div class="md:m-10 z-[1] bg-primary md:bg-lightBlack">
      <GrainCard class-name="h-[100vh] md:h-[calc(100vh-80px)] bg-primary md:rounded-br-[120px] lg:rounded-br-[196px] md:mt-[40px]">
        <div class="flex flex-col h-full">
          <div class="flex items-center justify-center">
            <TextHoverEffect
              class="w-[100%] md:w-[60%] max-w-[1000px]"
              text="CONTACT"
              :opacity="1"
              :style="{ transform: `scale(${scale})` }"
            />
          </div>
          <div class="flex flex-col gap-10 mt-auto mb-10 ml-10">
            <div class="container flex justify-center md:justify-start">
              <NavBar
                :items="items"
              />
            </div>
            <div class="container flex items-center justify-center md:justify-start">
              <div class="text-sm">
                © Copyright {{ currentYear }}. All rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </GrainCard>
      <div class="contents">
        <GrainCard class-name="w-[200px] h-[200px] lg:w-[384px] lg:h-[384px] bg-primary rounded-full border-lightBlack border-2 flex items-center justify-center lg:p-[70px] p-[30px] absolute md:bottom-[40px] md:right-[40px] md:top-auto md:left-auto top-[20%] left-[50%] translate-x-[-50%] md:translate-x-0">
          <NuxtImg
            src="/images/avatar.jpg"
            class="w-full h-full rounded-full"
          />
        </GrainCard>
      </div>
    </div>
  </ClientOnly>
</template>
