<template>
  <svg
    viewBox="0 0 15 15"
    aria-hidden="true"
    :class="clsx(
      $attrs.class,
      'absolute size-[15px] fill-black/10',
      yClass,
      xClass,
    )"
  >
    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
import { clsx } from 'clsx'

const props = defineProps({
  placement: { type: String, required: true },
})

const yClass = computed(() => (props.placement.split(' ')[0] === 'top' ? '-top-2' : '-bottom-2'))
const xClass = computed(() => (props.placement.split(' ')[1] === 'left' ? '-left-2' : '-right-2'))
</script>
