<template>
  <div class="relative mx-auto max-w-7xl">
    <div
      :class="clsx(
        'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
        'bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff]',
        'rotate-[-10deg] rounded-full blur-3xl',
      )"
    />
  </div>
</template>

<script setup>
import { clsx } from 'clsx'
</script>
