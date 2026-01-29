<template>
  <div class="flex flex-col gap-2">
    <div class="flex h-9 gap-2">
      <div v-for="key in row1" :key="key" :class="keyClass(key)">
        <span class="text-[10px] font-medium text-gray-600">{{ key }}</span>
      </div>
    </div>
    <div class="flex h-9 gap-2">
      <div v-for="key in row2" :key="key" :class="keyClass(key)">
        <span class="text-[10px] font-medium text-gray-600">{{ key }}</span>
      </div>
    </div>
    <div class="flex h-9 gap-2">
      <div v-for="key in row3" :key="key" :class="keyClass(key)">
        <span class="text-[10px] font-medium text-gray-600">{{ key }}</span>
      </div>
    </div>
    <div class="flex h-9 gap-2">
      <div v-for="key in row4" :key="key" :class="keyClass(key)">
        <span class="text-[10px] font-medium text-gray-600">{{ key }}</span>
      </div>
    </div>
    <div class="flex h-9 gap-2">
      <div v-for="key in row5" :key="key" :class="keyClass(key)">
        <span class="text-[10px] font-medium text-gray-600">{{ key }}</span>
      </div>
    </div>
    <div class="flex h-9 gap-2">
      <div :class="keyClass('LeftCommand', 'w-16')">
        <span class="text-[10px] font-medium text-gray-600">Cmd</span>
      </div>
      <div :class="keyClass('LeftShift', 'w-20')">
        <span class="text-[10px] font-medium text-gray-600">Shift</span>
      </div>
      <div :class="keyClass('Space', 'flex-1')">
        <span class="text-[10px] font-medium text-gray-600">Space</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { clsx } from 'clsx'

const props = defineProps({
  highlighted: { type: Array, default: () => [] },
})

const highlightSet = computed(() => new Set(props.highlighted))

const row1 = ['Esc', 'F1', 'F2', 'F3', 'F4']
const row2 = ['~', '1', '2', '3', '4', '5', '6', '7', '8']
const row3 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O']
const row4 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const row5 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

function keyClass(name, extra = '') {
  return clsx(
    extra,
    'flex flex-col items-center justify-center gap-0.5 px-1 py-px',
    'rounded-sm bg-white bg-linear-to-t from-black/3 shadow-2xs ring-1 ring-black/10',
    highlightSet.value.has(name) &&
      'ring-2 ring-blue-500/80 shadow-[0_0_0_1px_rgba(47,127,221,0.8)]',
  )
}
</script>
