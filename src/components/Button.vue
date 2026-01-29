<template>
  <component
    :is="isLink ? Link : 'button'"
    v-bind="componentAttrs"
    :href="isLink ? href : undefined"
    :type="!isLink ? type : undefined"
    :data-disabled="disabled ? '' : undefined"
    :data-hover="isHovered ? '' : undefined"
    :data-focus="isFocused ? '' : undefined"
    :class="buttonClass"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @focus="isFocused = true"
    @blur="isFocused = false"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed, ref, useAttrs } from 'vue'
import { clsx } from 'clsx'
import Link from './Link.vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  href: {
    type: String,
    default: undefined,
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const attrs = useAttrs()
const isHovered = ref(false)
const isFocused = ref(false)

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-transparent bg-gray-950 shadow-md',
    'text-base font-medium whitespace-nowrap text-white',
    'data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15',
    'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'text-base font-medium whitespace-nowrap text-gray-950',
    'data-disabled:bg-white/15 data-disabled:opacity-40 data-hover:bg-white/20',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)]',
    'rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
    'text-sm font-medium whitespace-nowrap text-gray-950',
    'data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50',
  ),
}

const isLink = computed(() => typeof props.href === 'string')

const buttonClass = computed(() => clsx(attrs.class, variants[props.variant]))

const componentAttrs = computed(() => ({
  ...attrs,
  class: buttonClass.value,
  disabled: props.disabled,
}))
</script>
