<template>
  <nav :class="variant === 'secondary' ? 'bg-secondary' : ''">
    <ul class="flex flex-col gap-6 p-0 list-none md:gap-12 md:flex-row">
      <li
        v-for="item in items"
        :key="item.href"
      >
        <a
          :href="item.href"
          :class="[
            'nav-link',
            variant === 'secondary' ? 'nav-link-secondary' : 'nav-link-primary',
          ]"
          @click.prevent="handleClick(item)"
        >
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  variant: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary'].includes(value),
  },
})

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleClick = (item) => {
  if (item.type === 'link') {
    window.open(item.href, '_blank')
  }
  else {
    scrollToSection(item.href)
  }
}
</script>

<style lang="postcss">
.nav-link {
  @apply text-lg cursor-pointer relative;
}

.nav-link-primary {
  @apply text-inherit;
}

.nav-link-primary::before {
  content: '';
  @apply absolute w-full h-[2px] bg-current top-[calc(100%+8px)] left-0 scale-x-0 origin-right transition-transform duration-300;
}

.nav-link-primary:hover::before {
  @apply scale-x-100 origin-left;
}

.nav-link-secondary {
  @apply text-gray-600 hover:text-gray-900 transition-colors duration-300;
}
</style>
