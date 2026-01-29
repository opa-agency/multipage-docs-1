<template>
  <main class="min-h-dvh bg-white">
    <Container class="pt-24">
      <Heading as="h1">Page not found</Heading>
      <Lead class="mt-6">The page you’re looking for doesn’t exist.</Lead>
      <div class="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </Container>
  </main>
</template>

<script setup>
import Button from '../components/Button.vue'
import Container from '../components/Container.vue'
import Heading from '../components/Heading.vue'
import Lead from '../components/Lead.vue'
</script>
