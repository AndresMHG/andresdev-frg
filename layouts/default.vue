<script setup lang="ts">
// JSON-LD base — siempre presente en todas las páginas
useStructuredData(localBusinessSchema(), websiteSchema())
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <WhatsAppButton />
  </div>
</template>
