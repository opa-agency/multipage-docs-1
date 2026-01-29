<template>
  <main v-if="post" class="overflow-hidden">
    <GradientBackground />
    <Container>
      <Navbar />
      <Subheading class="mt-16">{{ dayjs(post.publishedAt).format('dddd, MMMM D, YYYY') }}</Subheading>
      <Heading as="h1" class="mt-2">{{ post.title }}</Heading>
      <div class="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
        <div class="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
          <div v-if="post.author" class="flex items-center gap-3">
            <img v-if="post.author.image" alt="" :src="post.author.image.url" class="aspect-square size-6 rounded-full object-cover" />
            <div class="text-sm/5 text-gray-700">{{ post.author.name }}</div>
          </div>
          <div v-if="Array.isArray(post.categories)" class="flex flex-wrap gap-2">
            <Link
              v-for="categoryItem in post.categories"
              :key="categoryItem.slug"
              :href="`/blog?category=${categoryItem.slug}`"
              class="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
            >
              {{ categoryItem.title }}
            </Link>
          </div>
        </div>
        <div class="text-gray-700">
          <div class="max-w-2xl xl:mx-auto">
            <img
              v-if="post.mainImage"
              :alt="post.mainImage.alt || ''"
              :src="post.mainImage.url"
              class="mb-10 aspect-3/2 w-full rounded-2xl object-cover shadow-xl"
            />
            <div class="prose prose-gray max-w-none">
              <template v-for="(block, index) in post.content" :key="index">
                <h2
                  v-if="block._type === 'block' && block.style === 'h2'"
                  class="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0"
                >
                  {{ blockText(block) }}
                </h2>
                <h3
                  v-else-if="block._type === 'block' && block.style === 'h3'"
                  class="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0"
                >
                  {{ blockText(block) }}
                </h3>
                <blockquote
                  v-else-if="block._type === 'block' && block.style === 'blockquote'"
                  class="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0"
                >
                  {{ blockText(block) }}
                </blockquote>
                <p v-else-if="block._type === 'block'" class="my-10 text-base/8 first:mt-0 last:mb-0">
                  {{ blockText(block) }}
                </p>
              </template>
            </div>
            <div class="mt-10">
              <Button variant="outline" href="/blog">
                <ChevronLeftIcon class="size-4" />
                Back to blog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <Footer />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ChevronLeftIcon } from '@heroicons/vue/20/solid'
import dayjs from 'dayjs'
import Button from '../components/Button.vue'
import Container from '../components/Container.vue'
import Footer from '../components/Footer.vue'
import GradientBackground from '../components/GradientBackground.vue'
import Link from '../components/Link.vue'
import Navbar from '../components/Navbar.vue'
import Heading from '../components/Heading.vue'
import Subheading from '../components/Subheading.vue'
import { getPostBySlug } from '../data/blog-posts'

const route = useRoute()
const router = useRouter()

const post = computed(() => getPostBySlug(route.params.slug))

if (!post.value) {
  router.replace('/not-found')
}

function blockText(block) {
  if (!block || !block.children) return ''
  return block.children.map((child) => child.text).join('')
}
</script>
