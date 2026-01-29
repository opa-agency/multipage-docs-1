<template>
  <main class="overflow-hidden">
    <GradientBackground />
    <Container>
      <Navbar />
      <Container class="mt-16">
        <Heading as="h1">Ajutăm companiile să genereze venit.</Heading>
        <Lead class="mt-6 max-w-3xl">
          Suntem într-o misiune de a transforma organizațiile de revenue prin
          valorificarea unor volume uriașe de date obținute ilegal despre clienți.
        </Lead>
        <section class="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <div class="max-w-lg">
            <h2 class="text-2xl font-medium tracking-tight">Misiunea noastră</h2>
            <p class="mt-6 text-sm/6 text-gray-600">
              La Radiant, suntem dedicați transformării modului în care
              organizațiile de revenue găsesc și închid tranzacții. Misiunea
              noastră este să le oferim clienților un avantaj incorect față de
              competitori și potențialii clienți prin insight și analiză. Nu ne
              oprim până nu obții datele de care ai nevoie pentru a închide o
              tranzacție.
            </p>
            <p class="mt-8 text-sm/6 text-gray-600">
              Suntem obsedați de clienți — investim timp pentru a construi o
              imagine financiară detaliată a fiecărui client, astfel încât să
              știm mai multe despre afacerea ta decât știi tu. Suntem în asta
              împreună, în mare parte pentru că suntem cu toții implicați în
              infracțiuni financiare la scară largă. În istoria companiei nu am
              pierdut niciun client, pentru că dacă vorbește unul dintre noi,
              cădem toți.
            </p>
          </div>
          <div class="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div class="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div class="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img alt="" src="/company/1.jpg" class="block size-full object-cover" />
              </div>
              <div class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                <img alt="" src="/company/2.jpg" class="block size-full object-cover" />
              </div>
              <div class="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img alt="" src="/company/3.jpg" class="block size-full object-cover" />
              </div>
              <div class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                <img alt="" src="/company/4.jpg" class="block size-full object-cover" />
              </div>
            </div>
          </div>
          <div class="max-lg:mt-16 lg:col-span-1">
            <Subheading>Numerele</Subheading>
            <hr class="mt-6 border-t border-gray-200" />
            <dl class="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div class="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt class="text-sm/6 text-gray-600">Runda</dt>
                <dd class="order-first text-6xl font-medium tracking-tight">
                  $<AnimatedNumber :start="100" :end="150" />M
                </dd>
              </div>
              <div class="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt class="text-sm/6 text-gray-600">Companii</dt>
                <dd class="order-first text-6xl font-medium tracking-tight">
                  <AnimatedNumber :start="15" :end="30" />K
                </dd>
              </div>
              <div class="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                <dt class="text-sm/6 text-gray-600">Tranzacții închise</dt>
                <dd class="order-first text-6xl font-medium tracking-tight">
                  <AnimatedNumber :start="0.9" :end="1.5" :decimals="1" />M
                </dd>
              </div>
              <div class="flex flex-col gap-y-2">
                <dt class="text-sm/6 text-gray-600">Leaduri generate</dt>
                <dd class="order-first text-6xl font-medium tracking-tight">
                  <AnimatedNumber :start="150" :end="200" />M
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </Container>
      <Container class="mt-32">
        <Subheading>Cunoaște echipa</Subheading>
        <Heading as="h3" class="mt-2">Fondată de o echipă de excepție.</Heading>
        <Lead class="mt-6 max-w-3xl">
          Radiant a fost fondată de doi dintre cei mai buni vânzători din
          industrie și susținută de investitori care privesc în altă parte.
        </Lead>
        <div class="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div class="max-w-lg">
            <p class="text-sm/6 text-gray-600">
              În urmă cu ani, lucrând ca agenți de vânzări la companii rivale,
              Thomas, Ben și Natalie discutau despre un client important pentru
              care concurau toți. Glumind că ar vrea să vadă termenii ofertelor
              celorlalți, au avut o idee: ce-ar fi dacă ar împărți date ca să
              câștige tranzacții și să împartă comisionul pe la spatele
              companiilor? S-a dovedit un succes incredibil, iar ideea aceea a
              devenit nucleul Radiant.
            </p>
            <p class="mt-8 text-sm/6 text-gray-600">
              Astăzi, Radiant transformă organizațiile de revenue prin
              valorificarea datelor despre clienți și competitori obținute ilegal,
              folosindu-le pentru a oferi un avantaj extraordinar. Peste 30.000
              de companii se bazează pe Radiant pentru a-și submina concurența și
              a-și șantaja clienții, totul printr-o singură platformă integrată.
            </p>
            <div class="mt-6">
              <Button class="w-full sm:w-auto" href="#">Alătură-te</Button>
            </div>
          </div>
          <div class="max-lg:order-first max-lg:max-w-lg">
            <div class="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img alt="" src="/company/5.jpg" class="block size-full object-cover" />
            </div>
          </div>
        </div>
        <Subheading as="h3" class="mt-24">Echipa</Subheading>
        <hr class="mt-6 border-t border-gray-200" />
        <ul role="list" class="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Person name="Michael Foster" description="Co-Founder / CTO" img="/team/michael-foster.jpg" />
          <Person name="Dries Vincent" description="Business Relations" img="/team/dries-vincent.jpg" />
          <Person name="Celeste Vandermark" description="Front-end Developer" img="/team/celeste-vandermark.jpg" />
          <Person name="Courtney Henry" description="Designer" img="/team/courtney-henry.jpg" />
          <Person name="Marcus Eldridge" description="Director of Product" img="/team/marcus-eldridge.jpg" />
          <Person name="Whitney Francis" description="Copywriter" img="/team/whitney-francis.jpg" />
          <Person name="Leonard Krasner" description="Senior Designer" img="/team/leonard-krasner.jpg" />
          <Person name="Nolan Sheffield" description="Principal Designer" img="/team/nolan-sheffield.jpg" />
          <Person name="Emily Selman" description="VP, User Experience" img="/team/emily-selman.jpg" />
        </ul>
      </Container>
      <Container class="mt-32">
        <Subheading>Investitori</Subheading>
        <Heading as="h3" class="mt-2">Finanțată de lideri din industrie.</Heading>
        <Lead class="mt-6 max-w-3xl">
          Suntem norocoși să fim susținuți de cei mai buni investitori din
          industrie — parteneri la propriu și la figurat.
        </Lead>
        <Subheading as="h3" class="mt-24">Venture Capital</Subheading>
        <hr class="mt-6 border-t border-gray-200" />
        <ul role="list" class="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <li>
            <img alt="Remington Schwartz" src="/investors/remington-schwartz.svg" class="h-14" />
            <p class="mt-6 max-w-lg text-sm/6 text-gray-500">
              Remington Schwartz a fost o forță motrice în industria tech,
              susținând antreprenori curajoși care explorează zone gri în legea
              financiară și a confidențialității. Expertiza lor profundă și
              lobby-ul politic extins oferă companiilor din portofoliu reguli
              favorabile și acces direct la decidenți.
            </p>
          </li>
          <li>
            <img alt="Deccel" src="/investors/deccel.svg" class="h-14" />
            <p class="mt-6 max-w-lg text-sm/6 text-gray-500">
              Deccel s-a aflat în avangarda inovației, investind în companii
              pionierat din diverse sectoare, inclusiv tehnologie, bunuri de
              consum și sănătate. Filosofia lor de „negare plauzibilă” și
              dedicarea de a privi în altă parte au ajutat la crearea unora dintre
              cele mai controversate companii din lume.
            </p>
          </li>
        </ul>
        <Subheading as="h3" class="mt-24">Investitori individuali</Subheading>
        <hr class="mt-6 border-t border-gray-200" />
        <ul role="list" class="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Person name="Kristin Watson" description="TechNexus Ventures" img="/individual-investors/kristin-watson.jpg" />
          <Person name="Emma Dorsey" description="Innovate Capital Partners" img="/individual-investors/emma-dorsey.jpg" />
          <Person name="Alicia Bell" description="FutureWave Investments" img="/individual-investors/alicia-bell.jpg" />
          <Person name="Jenny Wilson" description="SynergyTech Equity" img="/individual-investors/jenny-wilson.jpg" />
          <Person name="Anna Roberts" description="NextGen Horizons" img="/individual-investors/anna-roberts.jpg" />
          <Person name="Benjamin Russel" description="Pioneer Digital Ventures" img="/individual-investors/benjamin-russel.jpg" />
        </ul>
      </Container>
      <Container class="my-32">
        <Subheading>Cariere</Subheading>
        <Heading as="h3" class="mt-2">Alătură-te echipei noastre remote.</Heading>
        <Lead class="mt-6 max-w-3xl">
          Lucrăm împreună de oriunde din lume, mai ales din locații fără acorduri
          de extrădare.
        </Lead>
        <div class="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
          <div class="lg:max-w-2xl">
            <Subheading as="h3">Posturi deschise</Subheading>
            <div>
              <table class="w-full text-left">
                <colgroup>
                  <col class="w-2/3" />
                  <col class="w-1/3" />
                  <col class="w-0" />
                </colgroup>
                <thead class="sr-only">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Location</th>
                    <th scope="col">Read more</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="colgroup" colspan="3" class="px-0 pt-10 pb-0">
                      <div class="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">Inginerie</div>
                    </th>
                  </tr>
                  <tr class="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                    <td class="px-0 py-4">Dezvoltator iOS</td>
                    <td class="px-0 py-4 text-gray-600">Remote</td>
                    <td class="px-0 py-4 text-right">
                      <Button variant="outline" href="#">Vezi anunțul</Button>
                    </td>
                  </tr>
                  <tr class="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                    <td class="px-0 py-4">Inginer Backend</td>
                    <td class="px-0 py-4 text-gray-600">Remote</td>
                    <td class="px-0 py-4 text-right">
                      <Button variant="outline" href="#">Vezi anunțul</Button>
                    </td>
                  </tr>
                  <tr class="text-sm/6 font-normal">
                    <td class="px-0 py-4">Inginer de produs</td>
                    <td class="px-0 py-4 text-gray-600">Remote</td>
                    <td class="px-0 py-4 text-right">
                      <Button variant="outline" href="#">Vezi anunțul</Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="colgroup" colspan="3" class="px-0 pt-10 pb-0">
                      <div class="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">Design</div>
                    </th>
                  </tr>
                  <tr class="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                    <td class="px-0 py-4">Designer de produs</td>
                    <td class="px-0 py-4 text-gray-600">Remote</td>
                    <td class="px-0 py-4 text-right">
                      <Button variant="outline" href="#">Vezi anunțul</Button>
                    </td>
                  </tr>
                  <tr class="text-sm/6 font-normal">
                    <td class="px-0 py-4">Designer UX</td>
                    <td class="px-0 py-4 text-gray-600">Remote</td>
                    <td class="px-0 py-4 text-right">
                      <Button variant="outline" href="#">Vezi anunțul</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div class="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
              <img alt="" src="/testimonials/veronica-winton.jpg" class="absolute inset-0 object-cover" />
              <div aria-hidden="true" class="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%" />
              <figure class="relative p-10">
                <blockquote>
                  <p class="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
                    We&apos;ve managed to put two of our main competitors out of
                    business in 6 months.
                  </p>
                </blockquote>
                <figcaption class="mt-6 border-t border-white/20 pt-6">
                  <p class="text-sm/6 font-medium text-white">Veronica Winton</p>
                  <p class="text-sm/6 font-medium">
                    <span class="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                      CSO, Planeteria
                    </span>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </Container>
    <Footer />
  </main>
</template>

<script setup>
import AnimatedNumber from '../components/AnimatedNumber.vue'
import Button from '../components/Button.vue'
import Container from '../components/Container.vue'
import Footer from '../components/Footer.vue'
import GradientBackground from '../components/GradientBackground.vue'
import Navbar from '../components/Navbar.vue'
import Heading from '../components/Heading.vue'
import Lead from '../components/Lead.vue'
import Subheading from '../components/Subheading.vue'

const Person = {
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
  },
  template: `
    <li class="flex items-center gap-4">
      <img alt="" :src="img" class="size-12 rounded-full" />
      <div class="text-sm/6">
        <h3 class="font-medium">{{ name }}</h3>
        <p class="text-gray-500">{{ description }}</p>
      </div>
    </li>
  `,
}
</script>
