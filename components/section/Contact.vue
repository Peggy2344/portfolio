<script setup>
const { scale } = defineProps({
  scale: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <ClientOnly>
    <div class="md:m-10 z-[1] bg-primary md:bg-lightBlack">
      <GrainCard class-name="h-[100vh] md:h-[calc(100vh-80px)] bg-primary md:rounded-br-[120px] lg:rounded-br-[196px] md:mt-[40px]">
        <div class="flex items-center justify-center">
          <TextHoverEffect
            class="w-[100%] md:w-[60%] max-w-[1000px]"
            text="CONTACT"
            :opacity="1"
            :style="{ transform: `scale(${scale})` }"
          />
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
