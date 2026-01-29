<template>
  <main class="overflow-hidden bg-gray-50">
    <GradientBackground />
    <div class="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
      <div class="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
        <form action="#" method="POST" class="p-7 sm:p-11">
          <div class="flex items-start">
            <Link href="/" title="Home">
              <Logo :mark-only="true" class="h-9 fill-black" />
            </Link>
          </div>
          <h1 class="mt-8 text-base/6 font-medium">Bine ai revenit!</h1>
          <p class="mt-1 text-sm/5 text-gray-600">Autentifică-te în cont pentru a continua.</p>
          <div class="mt-8 space-y-3">
            <label class="text-sm/5 font-medium">Email</label>
            <input
              required
              autofocus
              type="email"
              name="email"
              class="block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6 focus:outline-2 focus:-outline-offset-1 focus:outline-black"
            />
          </div>
          <div class="mt-8 space-y-3">
            <label class="text-sm/5 font-medium">Parolă</label>
            <input
              required
              type="password"
              name="password"
              class="block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6 focus:outline-2 focus:-outline-offset-1 focus:outline-black"
            />
          </div>
          <div class="mt-8 flex items-center justify-between text-sm/5">
            <label class="flex items-center gap-3">
              <input
                type="checkbox"
                name="remember-me"
                class="size-4 rounded-sm border border-transparent shadow-sm ring-1 ring-black/10 checked:bg-black checked:ring-black focus:outline-2 focus:outline-offset-2 focus:outline-black"
              />
              <span>Ține-mă minte</span>
            </label>
            <Link href="#" class="font-medium hover:text-gray-600">Ai uitat parola?</Link>
          </div>
          <div class="mt-8">
            <Button type="submit" class="w-full">Autentificare</Button>
          </div>
        </form>
        <div class="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
          Nu ai cont?
          <Link href="#" class="font-medium hover:text-gray-600">Creează un cont</Link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Button from '../components/Button.vue'
import GradientBackground from '../components/GradientBackground.vue'
import Link from '../components/Link.vue'
import Logo from '../components/Logo.vue'
</script>
