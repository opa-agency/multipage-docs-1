<template>
  <component
    :is="linkTag"
    v-bind="linkAttrs"
    :to="!isExternal ? href : undefined"
    :href="isExternal ? href : undefined"
    :data-hover="isHovered ? '' : undefined"
    :data-focus="isFocused ? '' : undefined"
    :data-active="dataActive"
    :data-selected="dataSelected"
    :data-disabled="dataDisabled"
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
import { RouterLink } from 'vue-router'

const props = defineProps({
  href: { type: String, required: true },
  dataActive: { type: [Boolean, String], default: undefined },
  dataSelected: { type: [Boolean, String], default: undefined },
  dataDisabled: { type: [Boolean, String], default: undefined },
})

const attrs = useAttrs()
const isHovered = ref(false)
const isFocused = ref(false)

const isExternal = computed(() =>
  props.href.startsWith('http') ||
  props.href.startsWith('mailto:') ||
  props.href.endsWith('.xml'),
)

const linkTag = computed(() => (isExternal.value ? 'a' : RouterLink))

const linkAttrs = computed(() => ({
  ...attrs,
}))
</script>
