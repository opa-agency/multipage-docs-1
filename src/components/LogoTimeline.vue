<template>
  <div aria-hidden="true" class="relative h-full overflow-hidden">
    <div class="absolute inset-0 top-8 z-10 flex items-center justify-center">
      <div
        class="absolute inset-0 backdrop-blur-md"
        :style="{
          maskImage,
          WebkitMaskImage: maskImage,
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }"
      />
      <div class="relative flex size-24 items-center justify-center rounded-xl bg-linear-to-t from-white/5 to-white/25 shadow-sm ring-1 ring-white/10 outline outline-offset-[-5px] outline-white/5 ring-inset">
        <Logo :mark-only="true" class="h-9 fill-white" />
      </div>
    </div>
    <div class="@container absolute inset-0 grid grid-cols-1 pt-8">
      <div class="group relative">
        <div class="absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r from-white/15 from-[2px] to-[2px] bg-size-[12px_100%]" />
        <div class="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-white/5 from-[2px] to-[2px] bg-size-[12px_100%] group-last:hidden" />
        <div class="absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]" style="--move-x-from:-100%; --move-x-to:calc(100%+100cqw); animation-duration: 30s;">
          <img alt="" src="/logo-timeline/loom.svg" class="size-4" />
          <span class="text-sm/6 font-medium text-white">Loom</span>
        </div>
        <div class="absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]" style="--move-x-from:-100%; --move-x-to:calc(100%+100cqw); animation-duration: 30s; animation-delay: -8s;">
          <img alt="" src="/logo-timeline/gmail.svg" class="size-4" />
          <span class="text-sm/6 font-medium text-white">Gmail</span>
        </div>
      </div>
      <div class="group relative">
        <div class="absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r from-white/15 from-[2px] to-[2px] bg-size-[12px_100%]" />
        <div class="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-white/5 from-[2px] to-[2px] bg-size-[12px_100%] group-last:hidden" />
        <div class="absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]" style="--move-x-from:-100%; --move-x-to:calc(100%+100cqw); animation-duration: 40s; animation-delay: -40s;">
          <img alt="" src="/logo-timeline/asana.svg" class="size-4" />
          <span class="text-sm/6 font-medium text-white">Asana</span>
        </div>
        <div class="absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]" style="--move-x-from:-100%; --move-x-to:calc(100%+100cqw); animation-duration: 40s; animation-delay: -20s;">
          <img alt="" src="/logo-timeline/microsoft-teams.svg" class="size-4" />
          <span class="text-sm/6 font-medium text-white">Microsoft Teams</span>
        </div>
      </div>
      <div class="group relative">
        <div class="absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r from-white/15 from-[2px] to-[2px] bg-size-[12px_100%]" />
        <div class="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-white/5 from-[2px] to-[2px] bg-size-[12px_100%] group-last:hidden" />
        <div class="absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]" style="--move-x-from:-100%; --move-x-to:calc(100%+100cqw); animation-duration: 40s; animation-delay: -10s;">
          <img alt="" src="/logo-timeline/google-calendar.svg" class="size-4" />
          <span class="text-sm/6 font-medium text-white">Google Calendar</span>
        </div>
        <div class="absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]" style="--move-x-from:-100%; --move-x-to:calc(100%+100cqw); animation-duration: 40s; animation-delay: -32s;">
          <img alt="" src="/logo-timeline/google-drive.svg" class="size-4" />
          <span class="text-sm/6 font-medium text-white">Google Drive</span>
        </div>
      </div>
      <div class="group relative">
        <div class="absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r from-white/15 from-[2px] to-[2px] bg-size-[12px_100%]" />
        <div class="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-white/5 from-[2px] to-[2px] bg-size-[12px_100%] group-last:hidden" />
        <div class="absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]" style="--move-x-from:-100%; --move-x-to:calc(100%+100cqw); animation-duration: 45s; animation-delay: -45s;">
          <img alt="" src="/logo-timeline/basecamp.svg" class="size-4" />
          <span class="text-sm/6 font-medium text-white">Basecamp</span>
        </div>
        <div class="absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]" style="--move-x-from:-100%; --move-x-to:calc(100%+100cqw); animation-duration: 45s; animation-delay: -23s;">
          <img alt="" src="/logo-timeline/discord.svg" class="size-4" />
          <span class="text-sm/6 font-medium text-white">Discord</span>
        </div>
      </div>
      <div class="group relative">
        <div class="absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r from-white/15 from-[2px] to-[2px] bg-size-[12px_100%]" />
        <div class="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-white/5 from-[2px] to-[2px] bg-size-[12px_100%] group-last:hidden" />
        <div class="absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]" style="--move-x-from:-100%; --move-x-to:calc(100%+100cqw); animation-duration: 60s; animation-delay: -55s;">
          <img alt="" src="/logo-timeline/hubspot.svg" class="size-4" />
          <span class="text-sm/6 font-medium text-white">Hubspot</span>
        </div>
        <div class="absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]" style="--move-x-from:-100%; --move-x-to:calc(100%+100cqw); animation-duration: 60s; animation-delay: -20s;">
          <img alt="" src="/logo-timeline/slack.svg" class="size-4" />
          <span class="text-sm/6 font-medium text-white">Slack</span>
        </div>
      </div>
      <div class="group relative">
        <div class="absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r from-white/15 from-[2px] to-[2px] bg-size-[12px_100%]" />
        <div class="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-white/5 from-[2px] to-[2px] bg-size-[12px_100%] group-last:hidden" />
        <div class="absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]" style="--move-x-from:-100%; --move-x-to:calc(100%+100cqw); animation-duration: 40s; animation-delay: -9s;">
          <img alt="" src="/logo-timeline/adobe-creative-cloud.svg" class="size-4" />
          <span class="text-sm/6 font-medium text-white">Adobe Creative Cloud</span>
        </div>
        <div class="absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]" style="--move-x-from:-100%; --move-x-to:calc(100%+100cqw); animation-duration: 40s; animation-delay: -28s;">
          <img alt="" src="/logo-timeline/zoom.svg" class="size-4" />
          <span class="text-sm/6 font-medium text-white">Zoom</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Logo from './Logo.vue'

const maskImage = computed(() => {
  const svg =
    '<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="12" fill="black"/></svg>'
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
})
</script>
