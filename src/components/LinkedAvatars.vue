<template>
  <div aria-hidden="true" class="isolate mx-auto grid h-full grid-cols-1">
    <svg
      viewBox="0 0 500 500"
      fill="none"
      class="col-start-1 row-start-1 size-full mask-[linear-gradient(to_bottom,black_90%,transparent),radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] mask-intersect"
    >
      <circle
        v-for="n in 42"
        :key="n"
        cx="250"
        cy="250"
        :r="n * 14 + 4"
        class="stroke-white"
        style="stroke-opacity: 0.15;"
      />
    </svg>
    <div class="z-10 col-start-1 row-start-1">
      <div class="mx-auto flex size-full max-w-md items-center justify-around">
        <img
          alt=""
          src="/linked-avatars/customer.jpg"
          class="size-20 rounded-full bg-white/15 ring-4 ring-white/10"
        />
        <img
          alt=""
          src="/linked-avatars/manager.jpg"
          class="size-20 rounded-full bg-white/15 ring-4 ring-white/10"
        />
      </div>
    </div>
    <div class="z-10 col-start-1 row-start-1 flex items-center justify-center">
      <div class="flex size-6 items-center justify-center rounded-full bg-linear-to-t from-green-500 to-green-300 shadow-sm">
        <CheckIcon class="size-4 text-white" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'
</script>
