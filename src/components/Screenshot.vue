<template>
  <div
    :style="{ '--width': width, '--height': height }"
    :class="clsx(
      $attrs.class,
      'relative aspect-[var(--width)/var(--height)] [--radius:var(--radius-xl)]',
    )"
  >
    <div class="absolute -inset-(--padding) rounded-[calc(var(--radius)+var(--padding))] shadow-xs ring-1 ring-black/5 [--padding:--spacing(2)]" />
    <img :src="src" alt="" class="h-full rounded-(--radius) shadow-2xl ring-1 ring-black/10" />
  </div>
</template>

<script setup>
import { clsx } from 'clsx'

defineProps({
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  src: { type: String, required: true },
})
</script>
