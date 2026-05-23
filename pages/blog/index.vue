<script setup lang="ts">
useSeoMeta({
  title: 'Blog – Dicas de Marketing Digital para Fazenda Rio Grande',
  description:
    'Conteúdo sobre criação de sites, SEO local e marketing digital para empresas de Fazenda Rio Grande e região.',
})

useStructuredData(
  breadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]),
)

const { data: posts } = await useAsyncData('blog-list', () =>
  queryContent('/blog').sort({ date: -1 }).find(),
)
</script>

<template>
  <section class="section bg-gradient-to-br from-brand-50 to-white">
    <div class="container-tight text-center">
      <span class="inline-flex items-center gap-2 rounded-full bg-brand-100 text-brand-800 px-3 py-1 text-xs font-semibold">Blog</span>
      <h1 class="mt-4 text-4xl sm:text-5xl">Dicas pra <span class="text-brand-600">crescer online</span> em Fazenda Rio Grande</h1>
      <p class="mt-5 text-lg text-slate-600">Marketing digital descomplicado pra quem tem pequeno negócio.</p>
    </div>
  </section>

  <section class="section">
    <div class="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="post in posts" :key="post._path"
        :to="post._path" class="card group"
      >
        <p class="text-xs text-brand-700 font-semibold uppercase tracking-wider">{{ post.categoria }}</p>
        <h2 class="mt-2 text-xl group-hover:text-brand-700">{{ post.title }}</h2>
        <p class="mt-2 text-sm text-slate-600 line-clamp-3">{{ post.description }}</p>
        <p class="mt-4 text-xs text-slate-500">{{ post.date }} · {{ post.tempoLeitura }}</p>
      </NuxtLink>
    </div>
  </section>
</template>
