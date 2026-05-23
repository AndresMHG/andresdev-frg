<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
  <div class="w-full h-full flex flex-col justify-between p-16 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
    <div class="flex items-center gap-3 text-2xl font-bold">
      <span class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white text-brand-700">a.</span>
      <span>andres.dev</span>
    </div>
    <div>
      <p class="text-3xl opacity-90">Criação de Sites em</p>
      <h1 class="text-7xl font-bold mt-2">Fazenda Rio Grande</h1>
      <p class="text-2xl mt-6 opacity-90">{{ title || 'Landing pages a partir de R$ 397 · Entrega em 7 dias' }}</p>
    </div>
    <div class="flex justify-between items-end text-lg">
      <span>📍 Fazenda Rio Grande – PR</span>
      <span>andresdev.com.br</span>
    </div>
  </div>
</template>
