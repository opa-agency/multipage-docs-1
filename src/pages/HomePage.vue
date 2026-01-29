<template>
  <div class="overflow-hidden">
    <div class="relative">
      <Gradient class="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container class="relative">
        <Navbar>
          <template #banner>
            <Link
              href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
              class="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              Radiant raises $100M Series A from Tailwind Ventures
              <ChevronRightIcon class="size-4" />
            </Link>
          </template>
        </Navbar>
        <div class="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 class="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Close every deal.
          </h1>
          <p class="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Radiant helps you sell more by revealing sensitive information about
            your customers.
          </p>
          <div class="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
            <Button variant="secondary" href="/pricing">See pricing</Button>
          </div>
        </div>
      </Container>
    </div>
    <main>
      <Container class="mt-10">
        <LogoCloud />
      </Container>
      <div class="bg-linear-to-b from-white from-50% to-gray-100 py-32">
        <div class="overflow-hidden">
          <Container class="pb-24">
            <Heading as="h2" class="max-w-3xl">
              A snapshot of your entire sales pipeline.
            </Heading>
            <Screenshot
              :width="1216"
              :height="768"
              src="/screenshots/app.png"
              class="mt-16 h-144 sm:h-auto sm:w-304"
            />
          </Container>
        </div>
        <Container>
          <Subheading>Sales</Subheading>
          <Heading as="h3" class="mt-2 max-w-3xl">
            Know more about your customers than they do.
          </Heading>

          <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <BentoCard
              eyebrow="Insight"
              title="Get perfect clarity"
              description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
              :fade="['bottom']"
              class="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
            >
              <template #graphic>
                <div class="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
              </template>
            </BentoCard>
            <BentoCard
              eyebrow="Analysis"
              title="Undercut your competitors"
              description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
              :fade="['bottom']"
              class="lg:col-span-3 lg:rounded-tr-4xl"
            >
              <template #graphic>
                <div class="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
              </template>
            </BentoCard>
            <BentoCard
              eyebrow="Speed"
              title="Built for power users"
              description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
              class="lg:col-span-2 lg:rounded-bl-4xl"
            >
              <template #graphic>
                <div class="flex size-full pt-10 pl-10">
                  <Keyboard :highlighted="['LeftCommand', 'LeftShift', 'D']" />
                </div>
              </template>
            </BentoCard>
            <BentoCard
              eyebrow="Source"
              title="Get the furthest reach"
              description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
              class="lg:col-span-2"
            >
              <template #graphic>
                <LogoCluster />
              </template>
            </BentoCard>
            <BentoCard
              eyebrow="Limitless"
              title="Sell globally"
              description="Radiant helps you sell in locations currently under international embargo."
              class="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
            >
              <template #graphic>
                <Map />
              </template>
            </BentoCard>
          </div>
        </Container>
      </div>
      <div class="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
        <Container>
          <Subheading dark>Outreach</Subheading>
          <Heading as="h3" dark class="mt-2 max-w-3xl">
            Customer outreach has never been easier.
          </Heading>

          <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <BentoCard
              dark
              eyebrow="Networking"
              title="Sell at the speed of light"
              description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
              :fade="['top']"
              class="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
            >
              <template #graphic>
                <div class="h-80 bg-[url(/screenshots/networking.png)] bg-size-[851px_344px] bg-no-repeat" />
              </template>
            </BentoCard>
            <BentoCard
              dark
              eyebrow="Integrations"
              title="Meet leads where they are"
              description="With thousands of integrations, no one will be able to escape your cold outreach."
              class="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
            >
              <template #graphic>
                <LogoTimeline />
              </template>
            </BentoCard>
            <BentoCard
              dark
              eyebrow="Meetings"
              title="Smart call scheduling"
              description="Automatically insert intro calls into your leads' calendars without their consent."
              class="lg:col-span-2 lg:rounded-bl-4xl"
            >
              <template #graphic>
                <LinkedAvatars />
              </template>
            </BentoCard>
            <BentoCard
              dark
              eyebrow="Engagement"
              title="Become a thought leader"
              description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
              :fade="['top']"
              class="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
            >
              <template #graphic>
                <div class="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
              </template>
            </BentoCard>
          </div>
        </Container>
      </div>
    </main>
    <Testimonials />
    <Footer />
  </div>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import BentoCard from '../components/BentoCard.vue'
import Button from '../components/Button.vue'
import Container from '../components/Container.vue'
import Footer from '../components/Footer.vue'
import Gradient from '../components/Gradient.vue'
import Keyboard from '../components/Keyboard.vue'
import Link from '../components/Link.vue'
import LinkedAvatars from '../components/LinkedAvatars.vue'
import LogoCloud from '../components/LogoCloud.vue'
import LogoCluster from '../components/LogoCluster.vue'
import LogoTimeline from '../components/LogoTimeline.vue'
import Map from '../components/Map.vue'
import Navbar from '../components/Navbar.vue'
import Screenshot from '../components/Screenshot.vue'
import Testimonials from '../components/Testimonials.vue'
import Heading from '../components/Heading.vue'
import Subheading from '../components/Subheading.vue'
</script>
