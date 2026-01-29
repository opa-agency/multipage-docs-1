<template>
  <main class="overflow-hidden">
    <GradientBackground />
    <Container>
      <Navbar />
      <Subheading class="mt-16">Blog</Subheading>
      <Heading as="h1" class="mt-2">What’s happening at Radiant.</Heading>
      <Lead class="mt-6 max-w-3xl">
        Stay informed with product updates, company news, and insights on how to
        sell smarter at your company.
      </Lead>
    </Container>
    <div v-if="page === 1 && !category" class="mt-16 bg-linear-to-t from-gray-100 pb-14">
      <Container>
        <h2 class="text-2xl font-medium tracking-tight">Featured</h2>
        <div class="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div
            v-for="post in featuredPosts"
            :key="post.slug"
            class="relative flex flex-col rounded-3xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5"
          >
            <img
              v-if="post.mainImage"
              :alt="post.mainImage.alt || ''"
              :src="post.mainImage.url"
              class="aspect-3/2 w-full rounded-2xl object-cover"
            />
            <div class="flex flex-1 flex-col p-8">
              <div class="text-sm/5 text-gray-700">
                {{ dayjs(post.publishedAt).format('dddd, MMMM D, YYYY') }}
              </div>
              <div class="mt-2 text-base/7 font-medium">
                <Link :href="`/blog/${post.slug}`">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </Link>
              </div>
              <div class="mt-2 flex-1 text-sm/6 text-gray-500">{{ post.excerpt }}</div>
              <div v-if="post.author" class="mt-6 flex items-center gap-3">
                <img
                  v-if="post.author.image"
                  alt=""
                  :src="post.author.image.url"
                  class="aspect-square size-6 rounded-full object-cover"
                />
                <div class="text-sm/5 text-gray-700">{{ post.author.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <Container class="mt-16 pb-24">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <Menu>
          <MenuButton class="flex items-center justify-between gap-2 font-medium">
            {{ selectedCategoryTitle }}
            <ChevronUpDownIcon class="size-4 fill-gray-900" />
          </MenuButton>
          <MenuItems class="min-w-40 rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]">
            <MenuItem v-slot="{ active }">
              <Link
                href="/blog"
                :data-selected="!category ? '' : undefined"
                :class="['group grid grid-cols-[1rem_1fr] items-center gap-2 rounded-md px-2 py-1', active ? 'bg-gray-950/5' : '']"
              >
                <CheckIcon class="hidden size-4 group-data-selected:block" />
                <p class="col-start-2 text-sm/6">All categories</p>
              </Link>
            </MenuItem>
            <MenuItem v-for="cat in categories" :key="cat.slug" v-slot="{ active }">
              <Link
                :href="`/blog?category=${cat.slug}`"
                :data-selected="cat.slug === category ? '' : undefined"
                :class="['group grid grid-cols-[16px_1fr] items-center gap-2 rounded-md px-2 py-1', active ? 'bg-gray-950/5' : '']"
              >
                <CheckIcon class="hidden size-4 group-data-selected:block" />
                <p class="col-start-2 text-sm/6">{{ cat.title }}</p>
              </Link>
            </MenuItem>
          </MenuItems>
        </Menu>
        <Button variant="outline" href="/blog/feed.xml" class="gap-1">
          <RssIcon class="size-4" />
          RSS Feed
        </Button>
      </div>
      <div v-if="posts.length === 0" class="mt-6 text-gray-500">No posts found.</div>
      <div v-else class="mt-6">
        <div
          v-for="post in posts"
          :key="post.slug"
          class="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
        >
          <div>
            <div class="text-sm/5 max-sm:text-gray-700 sm:font-medium">
              {{ dayjs(post.publishedAt).format('dddd, MMMM D, YYYY') }}
            </div>
            <div v-if="post.author" class="mt-2.5 flex items-center gap-3">
              <img
                v-if="post.author.image"
                alt=""
                :src="post.author.image.url"
                class="aspect-square size-6 rounded-full object-cover"
              />
              <div class="text-sm/5 text-gray-700">{{ post.author.name }}</div>
            </div>
          </div>
          <div class="sm:col-span-2 sm:max-w-2xl">
            <h2 class="text-sm/5 font-medium">{{ post.title }}</h2>
            <p class="mt-3 text-sm/6 text-gray-500">{{ post.excerpt }}</p>
            <div class="mt-4">
              <Link :href="`/blog/${post.slug}`" class="flex items-center gap-1 text-sm/5 font-medium">
                <span class="absolute inset-0" />
                Read more
                <ChevronRightIcon class="size-4 fill-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div v-if="pageCount > 1" class="mt-6 flex items-center justify-between gap-2">
        <Button variant="outline" :href="previousPageUrl" :disabled="!previousPageUrl">
          <ChevronLeftIcon class="size-4" />
          Previous
        </Button>
        <div class="flex gap-2 max-sm:hidden">
          <Link
            v-for="pageIndex in pageCount"
            :key="pageIndex"
            :href="pageUrl(pageIndex)"
            :data-active="pageIndex === page ? '' : undefined"
            class="size-7 rounded-lg text-center text-sm/7 font-medium data-hover:bg-gray-100 data-active:shadow-sm data-active:ring-1 data-active:ring-black/10 data-active:data-hover:bg-gray-50"
          >
            {{ pageIndex }}
          </Link>
        </div>
        <Button variant="outline" :href="nextPageUrl" :disabled="!nextPageUrl">
          Next
          <ChevronRightIcon class="size-4" />
        </Button>
      </div>
    </Container>
    <Footer />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  RssIcon,
} from '@heroicons/vue/20/solid'
import dayjs from 'dayjs'
import Button from '../components/Button.vue'
import Container from '../components/Container.vue'
import Footer from '../components/Footer.vue'
import GradientBackground from '../components/GradientBackground.vue'
import Link from '../components/Link.vue'
import Navbar from '../components/Navbar.vue'
import Heading from '../components/Heading.vue'
import Lead from '../components/Lead.vue'
import Subheading from '../components/Subheading.vue'
import {
  getCategoriesData,
  getFeaturedPostsData,
  getPostsByCategory,
  getPostsCount,
} from '../data/blog-posts'

const route = useRoute()
const router = useRouter()

const postsPerPage = 5

const page = computed(() => {
  const value = route.query.page
  if (!value) return 1
  const parsed = parseInt(value, 10)
  if (Number.isNaN(parsed) || parsed < 1) {
    router.replace('/blog')
    return 1
  }
  return parsed
})

const category = computed(() => (typeof route.query.category === 'string' ? route.query.category : undefined))

const featuredPosts = computed(() => getFeaturedPostsData(3))
const categories = computed(() => getCategoriesData())

const postsData = computed(() => getPostsByCategory(category.value, page.value, postsPerPage))
const posts = computed(() => postsData.value.posts)

const selectedCategoryTitle = computed(() => {
  const match = categories.value.find((item) => item.slug === category.value)
  return match ? match.title : 'All categories'
})

const totalPosts = computed(() => getPostsCount(category.value))
const pageCount = computed(() => Math.ceil(totalPosts.value / postsPerPage))

const previousPageUrl = computed(() => (page.value > 1 ? pageUrl(page.value - 1) : undefined))
const nextPageUrl = computed(() => (page.value * postsPerPage < totalPosts.value ? pageUrl(page.value + 1) : undefined))

function pageUrl(targetPage) {
  const params = new URLSearchParams()
  if (category.value) params.set('category', category.value)
  if (targetPage > 1) params.set('page', targetPage.toString())
  return params.size !== 0 ? `/blog?${params.toString()}` : '/blog'
}
</script>
