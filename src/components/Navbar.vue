<template>
  <Disclosure as="header" class="pt-12 sm:pt-16">
    <PlusGrid>
      <PlusGridRow class="relative flex justify-between">
        <div class="relative flex gap-6">
          <PlusGridItem class="py-3">
            <Link href="/" title="Home">
              <Logo class="h-9" />
            </Link>
          </PlusGridItem>
          <div v-if="$slots.banner" class="relative hidden items-center py-3 lg:flex">
            <slot name="banner" />
          </div>
        </div>
        <nav class="relative hidden lg:flex">
          <PlusGridItem v-for="item in links" :key="item.href" class="relative flex">
            <Link
              :href="item.href"
              class="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5"
            >
              {{ item.label }}
            </Link>
          </PlusGridItem>
        </nav>
        <DisclosureButton
          class="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
          aria-label="Open main menu"
        >
          <Bars2Icon class="size-6" />
        </DisclosureButton>
      </PlusGridRow>
    </PlusGrid>
    <DisclosurePanel class="lg:hidden">
      <div class="flex flex-col gap-6 py-4">
        <div v-for="item in links" :key="item.href">
          <Link :href="item.href" class="text-base font-medium text-gray-950">
            {{ item.label }}
          </Link>
        </div>
      </div>
      <div class="absolute left-1/2 w-screen -translate-x-1/2">
        <div class="absolute inset-x-0 top-0 border-t border-black/5" />
        <div class="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars2Icon } from '@heroicons/vue/24/solid'
import Link from './Link.vue'
import Logo from './Logo.vue'
import PlusGrid from './PlusGrid.vue'
import PlusGridRow from './PlusGridRow.vue'
import PlusGridItem from './PlusGridItem.vue'

const links = [
  { href: '/pricing', label: 'Prețuri' },
  { href: '/company', label: 'Companie' },
  { href: '/blog', label: 'Blog' },
  { href: '/login', label: 'Autentificare' },
]
</script>
