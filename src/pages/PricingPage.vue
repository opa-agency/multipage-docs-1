<template>
  <main class="overflow-hidden">
    <GradientBackground />
    <Container>
      <Navbar />
      <Container class="mt-16">
        <Heading as="h1">Prețuri care cresc odată cu dimensiunea echipei.</Heading>
        <Lead class="mt-6 max-w-3xl">
          Companii din întreaga lume au închis milioane de tranzacții cu Radiant.
          Înscrie-te astăzi și vinde mai inteligent.
        </Lead>
      </Container>
    </Container>
    <div class="relative py-24">
      <Gradient class="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container class="relative">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div
            v-for="tier in tiers"
            :key="tier.slug"
            class="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
          >
            <div class="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
              <div class="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                <Subheading>{{ tier.name }}</Subheading>
                <p class="mt-2 text-sm/6 text-gray-950/75">{{ tier.description }}</p>
                <div class="mt-8 flex items-center gap-4">
                  <div class="text-5xl font-medium text-gray-950">${{ tier.priceMonthly }}</div>
                  <div class="text-sm/5 text-gray-950/75">
                    <p>USD</p>
                    <p>pe lună</p>
                  </div>
                </div>
                <div class="mt-8">
                  <Button :href="tier.href">Începe perioada gratuită</Button>
                </div>
                <div class="mt-8">
                  <h3 class="text-sm/6 font-medium text-gray-950">Începe să vinzi cu:</h3>
                  <ul class="mt-3 space-y-3">
                    <li
                      v-for="feature in tier.highlights"
                      :key="feature.description"
                      :data-disabled="feature.disabled ? '' : undefined"
                      class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
                    >
                      <span class="inline-flex h-6 items-center">
                        <PlusIcon class="size-3.75 shrink-0 fill-gray-950/25" />
                      </span>
                      <span v-if="feature.disabled" class="sr-only">Nu este inclus:</span>
                      {{ feature.description }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LogoCloud class="mt-24" />
      </Container>
    </div>
    <Container class="py-24">
      <table class="w-full text-left">
        <caption class="sr-only">Comparație planuri de preț</caption>
        <colgroup>
          <col class="w-3/5 sm:w-2/5" />
          <col class="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5" :data-selected="selectedTier === tiers[0] ? '' : undefined" />
          <col class="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5" :data-selected="selectedTier === tiers[1] ? '' : undefined" />
          <col class="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5" :data-selected="selectedTier === tiers[2] ? '' : undefined" />
        </colgroup>
        <thead>
          <tr class="max-sm:hidden">
            <td class="p-0" />
            <th
              v-for="tier in tiers"
              :key="tier.slug"
              scope="col"
              class="p-0 data-selected:table-cell max-sm:hidden"
              :data-selected="selectedTier === tier ? '' : undefined"
            >
              <Subheading as="div">{{ tier.name }}</Subheading>
            </th>
          </tr>
          <tr class="sm:hidden">
            <td class="p-0">
              <div class="relative inline-block">
                <Menu>
                  <MenuButton class="flex items-center justify-between gap-2 font-medium">
                    {{ selectedTier.name }}
                    <ChevronUpDownIcon class="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems class="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]">
                    <MenuItem v-for="tier in tiers" :key="tier.slug" v-slot="{ active }">
                      <Link
                        :href="`/pricing?tier=${tier.slug}`"
                        :data-selected="tier === selectedTier ? '' : undefined"
                        :class="['group flex items-center gap-2 rounded-md px-2 py-1', active ? 'bg-gray-200' : '']"
                      >
                        {{ tier.name }}
                        <CheckIcon class="hidden size-4 group-data-selected:block" />
                      </Link>
                    </MenuItem>
                  </MenuItems>
                </Menu>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon class="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colspan="3" class="p-0 text-right">
              <Button variant="outline" :href="selectedTier.href">Începe</Button>
            </td>
          </tr>
          <tr class="max-sm:hidden">
            <th class="p-0" scope="row">
              <span class="sr-only">Începe</span>
            </th>
            <td
              v-for="tier in tiers"
              :key="tier.slug"
              class="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              :data-selected="selectedTier === tier ? '' : undefined"
            >
              <Button variant="outline" :href="tier.href">Începe</Button>
            </td>
          </tr>
        </thead>
        <tbody v-for="section in sections" :key="section" class="group">
          <tr>
            <th scope="colgroup" colspan="4" class="px-0 pt-10 pb-0 group-first-of-type:pt-5">
              <div class="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                {{ section }}
              </div>
            </th>
          </tr>
          <tr v-for="feature in featureRows[section]" :key="feature" class="border-b border-gray-100 last:border-none">
            <th scope="row" class="px-0 py-4 text-sm/6 font-normal text-gray-600">
              {{ feature }}
            </th>
            <td
              v-for="tier in tiers"
              :key="tier.slug"
              class="p-4 data-selected:table-cell max-sm:hidden"
              :data-selected="selectedTier === tier ? '' : undefined"
            >
              <template v-if="getFeatureValue(tier, section, feature) === true">
                <CheckIcon class="size-4 fill-green-600" />
                <span class="sr-only">Inclus în {{ tier.name }}</span>
              </template>
              <template v-else-if="getFeatureValue(tier, section, feature) === false || getFeatureValue(tier, section, feature) === undefined">
                <MinusIcon class="size-4 fill-gray-400" />
                <span class="sr-only">Nu este inclus în {{ tier.name }}</span>
              </template>
              <template v-else>
                <div class="text-sm/6">{{ getFeatureValue(tier, section, feature) }}</div>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
    <div class="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div class="-mt-96 lg:-mt-52">
            <div class="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div class="rounded-4xl p-2 shadow-md shadow-black/5">
                <div class="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img alt="" src="/testimonials/tina-yards.jpg" class="aspect-3/4 w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure class="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p class="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                  Datorită Radiant, găsim leaduri noi pe care nu le-am fi găsit
                  niciodată prin metode legale.
                </p>
              </blockquote>
              <figcaption class="mt-auto">
                <p class="text-sm/6 font-medium text-white">Tina Yards</p>
                <p class="text-sm/6 font-medium">
                  <span class="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                    VP of Sales, Protocol
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
    <Footer />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon, MinusIcon } from '@heroicons/vue/20/solid'
import Button from '../components/Button.vue'
import Container from '../components/Container.vue'
import Footer from '../components/Footer.vue'
import Gradient from '../components/Gradient.vue'
import GradientBackground from '../components/GradientBackground.vue'
import Link from '../components/Link.vue'
import LogoCloud from '../components/LogoCloud.vue'
import Navbar from '../components/Navbar.vue'
import Heading from '../components/Heading.vue'
import Lead from '../components/Lead.vue'
import Subheading from '../components/Subheading.vue'

const tiers = [
  {
    name: 'Începător',
    slug: 'starter',
    description: 'Tot ce ai nevoie ca să începi să vinzi.',
    priceMonthly: 99,
    href: '#',
    highlights: [
      { description: 'Până la 3 membri în echipă' },
      { description: 'Până la 5 panouri de progres' },
      { description: 'Leaduri din platforme selecte' },
      { description: 'Integrări RadiantAI', disabled: true },
      { description: 'Analiză competitori', disabled: true },
    ],
    features: [
      { section: 'Funcționalități', name: 'Conturi', value: 3 },
      { section: 'Funcționalități', name: 'Panouri de progres', value: 5 },
      { section: 'Funcționalități', name: 'Platforme de sourcing', value: 'Selecte' },
      { section: 'Funcționalități', name: 'Contacte', value: 100 },
      { section: 'Funcționalități', name: 'Outreach asistat de AI', value: false },
      { section: 'Analiză', name: 'Analiză competitori', value: false },
      { section: 'Analiză', name: 'Raportare dashboard', value: false },
      { section: 'Analiză', name: 'Insight-uri comunitate', value: false },
      { section: 'Analiză', name: 'Analiză performanță', value: false },
      { section: 'Suport', name: 'Suport email', value: true },
      { section: 'Suport', name: 'Suport call center 24/7', value: false },
      { section: 'Suport', name: 'Manager dedicat de cont', value: false },
    ],
  },
  {
    name: 'Creștere',
    slug: 'growth',
    description: 'Toate extra-urile pentru echipa ta în creștere.',
    priceMonthly: 149,
    href: '#',
    highlights: [
      { description: 'Până la 10 membri în echipă' },
      { description: 'Panouri de progres nelimitate' },
      { description: 'Leaduri din peste 50 de platforme verificate' },
      { description: 'Integrări RadiantAI' },
      { description: '5 analize de competitori pe lună' },
    ],
    features: [
      { section: 'Funcționalități', name: 'Conturi', value: 10 },
      { section: 'Funcționalități', name: 'Panouri de progres', value: 'Nelimitat' },
      { section: 'Funcționalități', name: 'Platforme de sourcing', value: '100+' },
      { section: 'Funcționalități', name: 'Contacte', value: 1000 },
      { section: 'Funcționalități', name: 'Outreach asistat de AI', value: true },
      { section: 'Analiză', name: 'Analiză competitori', value: '5 / lună' },
      { section: 'Analiză', name: 'Raportare dashboard', value: true },
      { section: 'Analiză', name: 'Insight-uri comunitate', value: true },
      { section: 'Analiză', name: 'Analiză performanță', value: true },
      { section: 'Suport', name: 'Suport email', value: true },
      { section: 'Suport', name: 'Suport call center 24/7', value: true },
      { section: 'Suport', name: 'Manager dedicat de cont', value: false },
    ],
  },
  {
    name: 'Întreprindere',
    slug: 'enterprise',
    description: 'Flexibilitate suplimentară pentru a închide tranzacții la scară.',
    priceMonthly: 299,
    href: '#',
    highlights: [
      { description: 'Membri activi nelimitați' },
      { description: 'Panouri de progres nelimitate' },
      { description: 'Leaduri din peste 100 de platforme verificate' },
      { description: 'Integrări RadiantAI' },
      { description: 'Analize de competitori nelimitate' },
    ],
    features: [
      { section: 'Funcționalități', name: 'Conturi', value: 'Nelimitat' },
      { section: 'Funcționalități', name: 'Panouri de progres', value: 'Nelimitat' },
      { section: 'Funcționalități', name: 'Platforme de sourcing', value: '100+' },
      { section: 'Funcționalități', name: 'Contacte', value: 'Nelimitat' },
      { section: 'Funcționalități', name: 'Outreach asistat de AI', value: true },
      { section: 'Analiză', name: 'Analiză competitori', value: 'Nelimitat' },
      { section: 'Analiză', name: 'Raportare dashboard', value: true },
      { section: 'Analiză', name: 'Insight-uri comunitate', value: true },
      { section: 'Analiză', name: 'Analiză performanță', value: true },
      { section: 'Suport', name: 'Suport email', value: true },
      { section: 'Suport', name: 'Suport call center 24/7', value: true },
      { section: 'Suport', name: 'Manager dedicat de cont', value: true },
    ],
  },
]

const route = useRoute()

const selectedTier = computed(() => {
  const tierSlug = route.query.tier
  const found = tiers.find((tier) => tier.slug === tierSlug)
  return found || tiers[0]
})

const sections = computed(() => [...new Set(tiers[0].features.map(({ section }) => section))])

const featureRows = computed(() =>
  sections.value.reduce((acc, section) => {
    acc[section] = tiers[0].features.filter((feature) => feature.section === section).map((feature) => feature.name)
    return acc
  }, {}),
)

function getFeatureValue(tier, section, name) {
  return tier.features.find((feature) => feature.section === section && feature.name === name)?.value
}

const PlusIcon = {
  template: `
    <svg viewBox="0 0 15 15" aria-hidden="true">
      <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  `,
}
</script>
