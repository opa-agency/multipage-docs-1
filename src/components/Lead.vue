<template>
  <Text variant="lead" :class="$attrs.class">
    <slot />
  </Text>
</template>

<script setup>
import Text from './Text.vue'
</script>
