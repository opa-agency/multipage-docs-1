import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../pages/HomePage.vue') },
  {
    path: '/company',
    name: 'company',
    component: () => import('../pages/CompanyPage.vue'),
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('../pages/PricingPage.vue'),
  },
  { path: '/blog', name: 'blog', component: () => import('../pages/BlogPage.vue') },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import('../pages/BlogPostPage.vue'),
  },
  { path: '/login', name: 'login', component: () => import('../pages/LoginPage.vue') },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../pages/NotFoundPage.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
