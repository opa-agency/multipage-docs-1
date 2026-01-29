<template>
  <Text variant="heading" :as="as" :dark="dark" :class="$attrs.class">
    <slot />
  </Text>
</template>

<script setup>
import Text from './Text.vue'

defineProps({
  as: { type: String, default: 'h2' },
  dark: { type: Boolean, default: false },
})
</script>
