<script setup lang="ts">
const open = ref(false)
const nav = [
  { to: '/', label: 'Início' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/precos', label: 'Preços' },
  { to: '/blog', label: 'Blog' },
  { to: '/contato', label: 'Contato' },
]
</script>

<template>
  <header class="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-100">
    <div class="container mx-auto px-4 flex items-center justify-between h-16">
      <NuxtLink to="/" class="flex items-center gap-2 font-bold text-lg" aria-label="andres.dev">
        <span class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">a.</span>
        <span>andres<span class="text-brand-600">.dev</span></span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-1" aria-label="Principal">
        <NuxtLink
          v-for="item in nav" :key="item.to" :to="item.to"
          class="px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-100 hover:text-brand-700"
        >{{ item.label }}</NuxtLink>
      </nav>

      <div class="hidden md:block">
        <NuxtLink to="/contato" class="btn-primary text-sm">Pedir orçamento</NuxtLink>
      </div>

      <button
        class="md:hidden p-2 rounded-lg hover:bg-slate-100"
        :aria-expanded="open" aria-label="Abrir menu"
        @click="open = !open"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div v-if="open" class="md:hidden border-t border-slate-100 bg-white">
      <nav class="px-4 py-3 flex flex-col gap-1" aria-label="Mobile">
        <NuxtLink
          v-for="item in nav" :key="item.to" :to="item.to"
          class="px-3 py-2 rounded-lg hover:bg-slate-100"
          @click="open = false"
        >{{ item.label }}</NuxtLink>
        <NuxtLink to="/contato" class="btn-primary mt-2 justify-center" @click="open = false">Pedir orçamento</NuxtLink>
      </nav>
    </div>
  </header>
</template>
