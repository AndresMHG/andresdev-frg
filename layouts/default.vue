<script setup lang="ts">
// JSON-LD base — siempre presente en todas las páginas
useStructuredData(localBusinessSchema(), websiteSchema())

// Canonical y og:url dinámicos por página
const route = useRoute()
const { public: { siteUrl } } = useRuntimeConfig()
const canonical = computed(() => `${siteUrl}${route.path === '/' ? '' : route.path}`)

useHead({
  link: [{ rel: 'canonical', href: canonical }],
})
useSeoMeta({
  ogUrl: canonical,
})
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
