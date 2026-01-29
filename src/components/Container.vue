<template>
  <div :class="clsx($attrs.class, 'px-6 lg:px-8')">
    <div class="mx-auto max-w-2xl lg:max-w-7xl">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { clsx } from 'clsx'
</script>
