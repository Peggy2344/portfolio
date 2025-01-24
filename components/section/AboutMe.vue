<template>
  <GrainCard class-name="px-6 md:p-10 pt-10 bg-lightBlack relative pt-[96px] h-fit overflow-visible gap-10 lg:container grid grid-cols-1 md:grid-cols-2">
    <div class="sticky top-[20px] md:top-[96px] h-min col-span-1">
      <BlurReveal
        :delay="0.2"
        :duration="0.75"
      >
        <h1 class="text-[50px] lg:text-[80px] font-bold text-center md:text-left text-primary mb-5">
          About Me
        </h1>
        <p class="text-lg leading-8 text-gray-300">
          I am a frontend engineer with over three years of experience, primarily working with Vue3 and Nuxt. I have also worked with React and Node.js, and my future goal is to progress towards becoming a full-stack engineer.
        </p>
      </BlurReveal>
    </div>
    <div class="flex flex-col col-span-1 gap-10">
      <CardTitleContent
        title="Experience"
        class="sticky md:top-[96px] top-[120px] h-min"
      >
        <template #content>
          <ContentExperience />
        </template>
      </CardTitleContent>
      <CardTitleContent
        title="Skills"
        class="sticky top-[96px] h-min"
      >
        <template #content>
          <ContentSkills />
        </template>
      </CardTitleContent>
    </div>
  </GrainCard>
</template>
