<template>
  <main class="min-h-dvh bg-white">
    <Container class="pt-24">
      <Heading as="h1">Pagina nu a fost găsită</Heading>
      <Lead class="mt-6">Pagina pe care o cauți nu există.</Lead>
      <div class="mt-8">
        <Button href="/">Înapoi acasă</Button>
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
