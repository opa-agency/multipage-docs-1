<template>
  <div :class="clsx($attrs.class, 'group/item relative')">
    <PlusGridIcon placement="top left" class="hidden group-first/item:block" />
    <PlusGridIcon placement="top right" />
    <PlusGridIcon
      placement="bottom left"
      class="hidden group-first/item:group-last/row:block"
    />
    <PlusGridIcon placement="bottom right" class="hidden group-last/row:block" />
    <slot />
  </div>
</template>

<script setup>
import { clsx } from 'clsx'
import PlusGridIcon from './PlusGridIcon.vue'
</script>
