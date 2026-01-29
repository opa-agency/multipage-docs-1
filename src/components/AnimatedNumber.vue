<template>
  <span ref="elementRef">{{ display }}</span>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  start: { type: Number, required: true },
  end: { type: Number, required: true },
  decimals: { type: Number, default: 0 },
})

const elementRef = ref(null)
const display = ref(props.start.toFixed(props.decimals))
let observer
let rafId

function animate() {
  const duration = 1200
  const startTime = performance.now()

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1)
    const value = props.start + (props.end - props.start) * progress
    display.value = value.toFixed(props.decimals)
    if (progress < 1) {
      rafId = requestAnimationFrame(tick)
    }
  }

  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  if (!elementRef.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animate()
        observer.disconnect()
      }
    },
    { threshold: 0.5 },
  )

  observer.observe(elementRef.value)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  if (rafId) cancelAnimationFrame(rafId)
})
</script>
