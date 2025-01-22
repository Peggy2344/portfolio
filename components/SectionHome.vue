<template>
  <ClientOnly>
    <GrainCard class-name="h-[calc(100vh-80px)] bg-primary rounded-tl-[196px] sticky top-[40px] transform-perspective-[1200px] will-change-transform mb-10">
      <GrainCard class-name="w-[384px] h-[384px] bg-primary rounded-full border-lightBlack border-2 flex items-center justify-center p-[70px] absolute top-0 left-0">
        <NuxtImg
          src="/images/avatar.jpg"
          class="w-full h-full rounded-full"
        />
      </GrainCard>
      <div class="flex items-center justify-end p-12">
        <NavBar />
      </div>
      <div class="absolute bottom-0 w-full -translate-x-1/2 left-1/2">
        <!-- <svg class="w-full h-full">
          <foreignObject class="w-full h-full">
            <h1 class="text-[180px] font-bold text-lightBlack text-center leading-[180px] tracking-wider">
              FANG YU
            </h1>
          </foreignObject>
        </svg> -->
        <div class="absolute bottom-0 w-full -translate-x-1/2 left-1/2">
          <div class="flex items-center justify-end pr-20">
            <h1 class="text-lightBlack text-[100px] font-bold leading-[180px] tracking-wider">
              Hi, I'm
            </h1>
            <!-- Changed justify-center to justify-end and added pr-20 -->
            <TextHoverEffect
              class="w-[60%]"
              text="FANG YU"
              :opacity="1"
            />
          </div>
        </div>
      </div>
    </GrainCard>
  </ClientOnly>
</template>
