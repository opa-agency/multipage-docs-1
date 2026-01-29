<template>
  <div
    :data-dark="dark ? 'true' : undefined"
    :class="clsx(
      $attrs.class,
      'group relative flex flex-col overflow-hidden rounded-lg',
      'bg-white shadow-xs ring-1 ring-black/5',
      'data-dark:bg-gray-800 data-dark:ring-white/15',
    )"
  >
    <div class="relative h-80 shrink-0">
      <slot name="graphic" />
      <div
        v-if="fade.includes('top')"
        class="absolute inset-0 bg-linear-to-b from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]"
      />
      <div
        v-if="fade.includes('bottom')"
        class="absolute inset-0 bg-linear-to-t from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]"
      />
    </div>
    <div class="relative p-10">
      <Subheading as="h3" :dark="dark">{{ eyebrow }}</Subheading>
      <p class="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
        {{ title }}
      </p>
      <p class="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { clsx } from 'clsx'
import Subheading from './Subheading.vue'

const props = defineProps({
  dark: { type: Boolean, default: false },
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  fade: { type: Array, default: () => [] },
})

const { dark, eyebrow, title, description, fade } = props
</script>
