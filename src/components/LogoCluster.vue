<template>
  <div aria-hidden="true" class="relative h-full overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,var(--color-blue-500)_3%,transparent)_100%)] ring-1 ring-blue-500/8 ring-inset" style="width: 528px; height: 528px;" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,var(--color-blue-500)_5%,transparent)_100%)] ring-1 ring-blue-500/8 ring-inset" style="width: 400px; height: 400px;" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,var(--color-blue-500)_5%,transparent)_100%)] ring-1 ring-blue-500/8 ring-inset" style="width: 272px; height: 272px;" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,var(--color-blue-500)_10%,transparent)_100%)] ring-1 ring-blue-500/8 ring-inset" style="width: 144px; height: 144px;" />
      <div class="absolute inset-0 bg-linear-to-t from-white to-35%" />
    </div>
    <div class="absolute left-1/2 h-full w-104 -translate-x-1/2">
      <div class="absolute top-32 left-44 flex size-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
        <Logo :mark-only="true" class="h-9 fill-black" />
      </div>
      <img alt="" src="/logo-cluster/career-builder.svg" class="absolute size-16 rounded-full bg-white shadow-sm ring-1 ring-black/5" style="left: 360px; top: 144px;" />
      <img alt="" src="/logo-cluster/dribbble.svg" class="absolute size-16 rounded-full bg-white shadow-sm ring-1 ring-black/5" style="left: 285px; top: 20px;" />
      <img alt="" src="/logo-cluster/glassdoor.svg" class="absolute size-16 rounded-full bg-white shadow-sm ring-1 ring-black/5" style="left: 255px; top: 210px;" />
      <img alt="" src="/logo-cluster/linkedin.svg" class="absolute size-16 rounded-full bg-white shadow-sm ring-1 ring-black/5" style="left: 144px; top: 40px;" />
      <img alt="" src="/logo-cluster/upwork.svg" class="absolute size-16 rounded-full bg-white shadow-sm ring-1 ring-black/5" style="left: 36px; top: 56px;" />
      <img alt="" src="/logo-cluster/we-work-remotely.svg" class="absolute size-16 rounded-full bg-white shadow-sm ring-1 ring-black/5" style="left: 96px; top: 176px;" />
    </div>
  </div>
</template>

<script setup>
import Logo from './Logo.vue'
</script>
