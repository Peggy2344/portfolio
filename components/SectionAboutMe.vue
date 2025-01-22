<template>
  <GrainCard class-name="grid grid-cols-2 bg-lightBlack py-20">
    <div class="top-0 p-10">
      <BlurReveal
        :delay="0.2"
        :duration="0.75"
        class="p-8"
      >
        <h1 class="text-[80px] font-bold text-left text-primary mb-5">
          About Me
        </h1>
        <p class="text-lg leading-8 text-lightPurple">
          我是一位擁有三年多前端開發經驗的工程師，目前主要開發技術為Vue3, Nuxt，接觸過React及nodejs，未來的目標是朝向全端工程師的方向前進。
        </p>
      </BlurReveal>
    </div>
    <div>
      <CardTitleContent title="Experience">
        <template #content>
          <ContentExperience />
        </template>
      </CardTitleContent>
      <CardTitleContent title="Skills">
        <template #content>
          <ContentSkills />
        </template>
      </CardTitleContent>
    </div>
  </GrainCard>
</template>
