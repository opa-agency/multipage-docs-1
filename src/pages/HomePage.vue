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
              Radiant atrage $100M în runda Series A de la Tailwind Ventures
              <ChevronRightIcon class="size-4" />
            </Link>
          </template>
        </Navbar>
        <div class="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 class="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Închide fiecare tranzacție.
          </h1>
          <p class="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Radiant te ajută să vinzi mai mult, dezvăluind informații sensibile
            despre clienții tăi.
          </p>
          <div class="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Începe</Button>
            <Button variant="secondary" href="/pricing">Vezi prețurile</Button>
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
              O imagine de ansamblu a întregului tău pipeline de vânzări.
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
          <Subheading>Vânzări</Subheading>
          <Heading as="h3" class="mt-2 max-w-3xl">
            Știi mai multe despre clienții tăi decât știu ei.
          </Heading>

          <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <BentoCard
              eyebrow="Perspectivă"
              title="Claritate perfectă"
              description="Radiant folosește inginerie socială pentru a construi o imagine financiară detaliată a leadurilor tale. Află bugetul, pachetul de compensații, CNP-ul și altele."
              :fade="['bottom']"
              class="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
            >
              <template #graphic>
                <div class="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
              </template>
            </BentoCard>
            <BentoCard
              eyebrow="Analiză"
              title="Depășește concurența"
              description="Cu data mining avansat, vei ști cu ce companii vorbesc leadurile tale și exact cât li se taxează."
              :fade="['bottom']"
              class="lg:col-span-3 lg:rounded-tr-4xl"
            >
              <template #graphic>
                <div class="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
              </template>
            </BentoCard>
            <BentoCard
              eyebrow="Viteză"
              title="Creat pentru utilizatori avansați"
              description="Nu a fost niciodată mai rapid să trimiți cold email întregii liste de contacte folosind scurtăturile noastre de tastatură."
              class="lg:col-span-2 lg:rounded-bl-4xl"
            >
              <template #graphic>
                <div class="flex size-full pt-10 pl-10">
                  <Keyboard :highlighted="['LeftCommand', 'LeftShift', 'D']" />
                </div>
              </template>
            </BentoCard>
            <BentoCard
              eyebrow="Sursă"
              title="Rază maximă"
              description="Ocolește acele legi incomode de confidențialitate pentru a găsi leaduri din cele mai neașteptate locuri."
              class="lg:col-span-2"
            >
              <template #graphic>
                <LogoCluster />
              </template>
            </BentoCard>
            <BentoCard
              eyebrow="Fără limite"
              title="Vinde global"
              description="Radiant te ajută să vinzi în locații aflate în prezent sub embargo internațional."
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
          <Subheading dark>Prospectare</Subheading>
          <Heading as="h3" dark class="mt-2 max-w-3xl">
            Prospectarea către clienți nu a fost niciodată mai simplă.
          </Heading>

          <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <BentoCard
              dark
              eyebrow="Relaționare"
              title="Vinde cu viteza luminii"
              description="Asistenții noștri RadiantAI analizează sentimentul conversațiilor în timp real, asigurându-te că ești mereu cu un pas înainte."
              :fade="['top']"
              class="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
            >
              <template #graphic>
                <div class="h-80 bg-[url(/screenshots/networking.png)] bg-size-[851px_344px] bg-no-repeat" />
              </template>
            </BentoCard>
            <BentoCard
              dark
              eyebrow="Integrări"
              title="Întâlnește leadurile acolo unde sunt"
              description="Cu mii de integrări, nimeni nu îți va scăpa de cold outreach."
              class="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
            >
              <template #graphic>
                <LogoTimeline />
              </template>
            </BentoCard>
            <BentoCard
              dark
              eyebrow="Întâlniri"
              title="Programare inteligentă a apelurilor"
              description="Inserează automat apeluri de introducere în calendarele leadurilor fără consimțământul lor."
              class="lg:col-span-2 lg:rounded-bl-4xl"
            >
              <template #graphic>
                <LinkedAvatars />
              </template>
            </BentoCard>
            <BentoCard
              dark
              eyebrow="Implicare"
              title="Devino un lider de opinie"
              description="RadiantAI scrie automat postări LinkedIn care leagă evenimentele curente de vânzările B2B, ajutându-te să-ți construiești reputația de lider de opinie."
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
