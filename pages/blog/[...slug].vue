<script setup lang="ts">
const { path } = useRoute()
const { data: post } = await useAsyncData(`post-${path}`, () => queryContent(path).findOne())

if (!post.value) {
  throw createError({ statusCode: 404, message: 'Artigo não encontrado' })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogTitle: post.value.title,
  ogDescription: post.value.description,
  ogType: 'article',
  articlePublishedTime: post.value.date,
  articleAuthor: ['Andres - andres.dev'],
})

useStructuredData(
  articleSchema({
    headline: post.value.title,
    description: post.value.description,
    datePublished: post.value.date,
    url: path,
  }),
  breadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.value.title, url: path },
  ]),
)
</script>

<template>
  <article class="section">
    <div class="container-tight">
      <NuxtLink to="/blog" class="text-sm text-brand-600 hover:underline">← Voltar ao blog</NuxtLink>
      <p class="mt-6 text-xs text-brand-700 font-semibold uppercase tracking-wider">{{ post.categoria }}</p>
      <h1 class="mt-2 text-4xl sm:text-5xl leading-tight">{{ post.title }}</h1>
      <p class="mt-4 text-lg text-slate-600">{{ post.description }}</p>
      <p class="mt-3 text-xs text-slate-500">{{ post.date }} · {{ post.tempoLeitura }}</p>

      <div class="mt-10 prose prose-slate prose-headings:text-slate-900 prose-a:text-brand-600 max-w-none">
        <ContentRenderer :value="post" />
      </div>

      <div class="mt-16 rounded-2xl bg-brand-50 p-8 text-center border border-brand-100">
        <h2 class="text-2xl">Quer um site assim pro seu negócio?</h2>
        <p class="mt-2 text-slate-700">A partir de R$ 397, entrega em 7 dias. Atendemos Fazenda Rio Grande e região.</p>
        <NuxtLink to="/contato" class="btn-primary mt-5">Pedir orçamento</NuxtLink>
      </div>
    </div>
  </article>
</template>
