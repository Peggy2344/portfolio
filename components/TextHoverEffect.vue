<template>
  <svg
    ref="svgRef"
    width="100%"
    height="100%"
    viewBox="0 0 350 100"
    xmlns="http://www.w3.org/2000/svg"
    class="select-none"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <defs>
      <linearGradient
        id="textGradient"
        gradientUnits="userSpaceOnUse"
        cx="50%"
        cy="50%"
        r="25%"
      >
        <stop
          v-if="hovered"
          offset="0%"
          stop-color="var(--yellow-500)"
        />
        <stop
          v-if="hovered"
          offset="25%"
          stop-color="var(--red-500)"
        />
        <stop
          v-if="hovered"
          offset="50%"
          stop-color="var(--blue-500)"
        />
        <stop
          v-if="hovered"
          offset="75%"
          stop-color="var(--cyan-500)"
        />
        <stop
          v-if="hovered"
          offset="100%"
          stop-color="var(--violet-500)"
        />
      </linearGradient>

      <!-- Radial Gradient -->
      <radialGradient
        id="revealMask"
        gradientUnits="userSpaceOnUse"
        r="20%"
        :cx="maskPosition.cx"
        :cy="maskPosition.cy"
        :style="{
          transition: `cx ${transitionDuration}ms ease-out, cy ${transitionDuration}ms ease-out`,
        }"
      >
        <stop
          offset="0%"
          stop-color="white"
        />
        <stop
          offset="100%"
          stop-color="black"
        />
      </radialGradient>

      <mask id="textMask">
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#revealMask)"
        />
      </mask>
    </defs>

    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      :stroke-width="strokeWidth"
      class="fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800"
    >
      {{ text }}
    </text>

    <!-- Animated Text Stroke -->
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      :stroke-width="strokeWidth"
      :style="strokeStyle"
      class="fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800"
    >
      {{ text }}
    </text>

    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      stroke="url(#textGradient)"
      :stroke-width="strokeWidth"
      mask="url(#textMask)"
      class="fill-transparent font-[helvetica] text-7xl font-bold"
    >
      {{ text }}
    </text>
  </svg>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { cn } from '~/lib/utils'

const props = defineProps({
  strokeWidth: {
    type: Number,
    default: 0.75,
  },
  text: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 200,
  },
  opacity: {
    type: Number,
    default: 0.75,
  },
})

const svgRef = ref<SVGSVGElement | null>(null)
const cursor = reactive({ x: 0, y: 0 })
const hovered = ref(false)

// Set transition duration for smoother animation
const transitionDuration = props.duration ? props.duration * 1000 : 200

// Reactive gradient position
const maskPosition = computed(() => {
  if (svgRef.value) {
    const svgRect = svgRef.value.getBoundingClientRect()
    const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100
    const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100
    return { cx: `${cxPercentage}%`, cy: `${cyPercentage}%` }
  }
  return { cx: '50%', cy: '50%' } // Default position
})

// Reactive style for stroke animation
const strokeStyle = computed(() => ({
  strokeDashoffset: hovered.value ? '0' : '1000',
  strokeDasharray: '1000',
  transition: 'stroke-dashoffset 4s ease-in-out, stroke-dasharray 4s ease-in-out',
}))

function handleMouseEnter() {
  hovered.value = true
}

function handleMouseLeave() {
  hovered.value = false
}

function handleMouseMove(e: MouseEvent) {
  cursor.x = e.clientX
  cursor.y = e.clientY
}

// Touch support
function handleTouchStart(e: TouchEvent) {
  hovered.value = true
  handleTouchMove(e) // Update the position on touch start
}

function handleTouchMove(e: TouchEvent) {
  const touch = e.touches[0]
  cursor.x = touch.clientX
  cursor.y = touch.clientY
}

function handleTouchEnd() {
  hovered.value = false
}

const scale = ref(1)
const lastScrollY = ref(window.scrollY)

const handleScroll = () => {
  if (!svgRef.value) return

  const rect = svgRef.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const currentScrollY = window.scrollY

  // Calculate visibility percentage
  const visiblePercentage = (viewportHeight - rect.top) / viewportHeight

  // Determine scroll direction
  const isScrollingDown = currentScrollY > lastScrollY.value
  // Update scale based on scroll direction
  if (isScrollingDown && currentScrollY > 100) {
    // Scale up when scrolling down (reduced maximum scale)
    scale.value = 1 + Math.max(0, Math.min(0.1, visiblePercentage)) // Changed from 1 to 0.5 for smaller scale
  }
  else if (!isScrollingDown) {
    // Scale back to 1 when scrolling up
    scale.value = 1 + Math.max(0, Math.min(0.1, visiblePercentage))
  }

  // Store current scroll position for next comparison
  lastScrollY.value = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Initialize lastScrollY
  lastScrollY.value = window.scrollY
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.select-none {
  user-select: none;
}

.transform-gpu {
  transform: translate3d(0, 0, 0);
  will-change: transform,;
}
</style>
