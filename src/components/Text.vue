<template>
  <component
    :is="as"
    v-if="variant === 'heading'"
    v-bind="attrs"
    :data-dark="dark ? 'true' : undefined"
    :class="headingClass"
  >
    <slot />
  </component>
  <component
    :is="as"
    v-else-if="variant === 'subheading'"
    v-bind="attrs"
    :data-dark="dark ? 'true' : undefined"
    :class="subheadingClass"
  >
    <slot />
  </component>
  <p v-else v-bind="attrs" :class="leadClass">
    <slot />
  </p>
</template>

<script setup>
import { computed, useAttrs } from 'vue'
import { clsx } from 'clsx'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  variant: {
    type: String,
    required: true,
  },
  as: {
    type: String,
    default: 'h2',
  },
  dark: {
    type: Boolean,
    default: false,
  },
})

const attrs = useAttrs()

const headingClass = computed(() =>
  clsx(
    'text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl',
  ),
)

const subheadingClass = computed(() =>
  clsx(
    'font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400',
  ),
)

const leadClass = computed(() => clsx('text-2xl font-medium text-gray-500'))
</script>
