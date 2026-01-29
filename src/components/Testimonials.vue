<template>
  <div class="overflow-hidden py-32">
    <Container>
      <div>
        <Subheading>What everyone is saying</Subheading>
        <Heading as="h3" class="mt-2">Trusted by professionals.</Heading>
      </div>
    </Container>
    <div
      ref="scrollRef"
      class="mt-16 flex gap-8 px-(--scroll-padding) [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]"
      @scroll="onScroll"
    >
      <div
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.name"
        class="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
        @click="scrollTo(index)"
      >
        <img :alt="testimonial.name" :src="testimonial.img" class="absolute inset-x-0 top-0 aspect-square w-full object-cover" />
        <div aria-hidden="true" class="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%" />
        <figure class="relative p-10">
          <blockquote>
            <p class="relative text-xl/7 text-white">
              <span aria-hidden="true" class="absolute -translate-x-full">“</span>
              {{ testimonial.quote }}
              <span aria-hidden="true" class="absolute">”</span>
            </p>
          </blockquote>
          <figcaption class="mt-6 border-t border-white/20 pt-6">
            <p class="text-sm/6 font-medium text-white">{{ testimonial.name }}</p>
            <p class="text-sm/6 font-medium">
              <span class="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                {{ testimonial.title }}
              </span>
            </p>
          </figcaption>
        </figure>
      </div>
      <div class="w-2xl shrink-0 sm:w-216" />
    </div>
    <Container class="mt-16">
      <div class="flex justify-between">
        <div>
          <p class="max-w-sm text-sm/6 text-gray-600">
            Join the best sellers in the business and start using Radiant to hit
            your targets today.
          </p>
          <div class="mt-2">
            <Link href="#" class="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600">
              Get started
              <ArrowLongRightIcon class="size-5" />
            </Link>
          </div>
        </div>
        <div class="hidden sm:flex sm:gap-2">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.name"
            :data-active="activeIndex === index ? '' : undefined"
            :aria-label="`Scroll to testimonial from ${testimonial.name}`"
            class="size-2.5 rounded-full border border-transparent bg-gray-300 transition data-active:bg-gray-400 hover:bg-gray-400 forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4"
            @click="scrollTo(index)"
          />
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowLongRightIcon } from '@heroicons/vue/20/solid'
import Container from './Container.vue'
import Heading from './Heading.vue'
import Link from './Link.vue'
import Subheading from './Subheading.vue'

const testimonials = [
  {
    img: '/testimonials/tina-yards.jpg',
    name: 'Tina Yards',
    title: 'VP of Sales, Protocol',
    quote:
      'Thanks to Radiant, we’re finding new leads that we never would have found with legal methods.',
  },
  {
    img: '/testimonials/conor-neville.jpg',
    name: 'Conor Neville',
    title: 'Head of Customer Success, TaxPal',
    quote: 'Radiant made undercutting all of our competitors an absolute breeze.',
  },
  {
    img: '/testimonials/amy-chase.jpg',
    name: 'Amy Chase',
    title: 'Head of GTM, Pocket',
    quote: 'We closed a deal in literally a few minutes because we knew their exact budget.',
  },
  {
    img: '/testimonials/veronica-winton.jpg',
    name: 'Veronica Winton',
    title: 'CSO, Planeteria',
    quote: 'We’ve managed to put two of our main competitors out of business in 6 months.',
  },
  {
    img: '/testimonials/dillon-lenora.jpg',
    name: 'Dillon Lenora',
    title: 'VP of Sales, Detax',
    quote: 'I was able to replace 80% of my team with RadiantAI bots.',
  },
  {
    img: '/testimonials/harriet-arron.jpg',
    name: 'Harriet Arron',
    title: 'Account Manager, Commit',
    quote: 'I’ve smashed all my targets without having to speak to a lead in months.',
  },
]

const scrollRef = ref(null)
const activeIndex = ref(0)

function onScroll() {
  if (!scrollRef.value || !scrollRef.value.children[0]) return
  const width = scrollRef.value.children[0].clientWidth
  const x = scrollRef.value.scrollLeft
  activeIndex.value = Math.floor(x / width)
}

function scrollTo(index) {
  if (!scrollRef.value || !scrollRef.value.children[0]) return
  const gap = 32
  const width = scrollRef.value.children[0].offsetWidth
  scrollRef.value.scrollTo({ left: (width + gap) * index, behavior: 'smooth' })
}
</script>
