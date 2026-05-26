<script setup lang="ts">
useSeoMeta({
  title: 'Serviços de Criação de Sites em Fazenda Rio Grande',
  description:
    'Landing pages, sites institucionais, cardápio digital, SEO local e Google Meu Negócio para empresas de Fazenda Rio Grande – PR.',
  ogTitle: 'Serviços – andres.dev | Sites em Fazenda Rio Grande',
})

useStructuredData(
  breadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Serviços', url: '/servicos' },
  ]),
  serviceSchema({
    name: 'Landing Page Profissional',
    description: 'Site de uma página com WhatsApp em destaque, Google Maps, formulário e SEO local básico. Hospedagem 1 ano inclusa.',
  }),
  serviceSchema({
    name: 'Site Institucional Completo',
    description: 'Site multi-páginas com Sobre, Serviços, Galeria, Depoimentos e Contato. Ideal para negócios consolidados.',
  }),
  serviceSchema({
    name: 'Cardápio Digital com QR Code',
    description: 'Cardápio online para lanchonetes e restaurantes de Fazenda Rio Grande, com pedido pelo WhatsApp e QR Code de mesa.',
  }),
  serviceSchema({
    name: 'SEO Local e Google Meu Negócio',
    description: 'Otimização para aparecer em buscas "perto de mim" em Fazenda Rio Grande, com cadastro completo no Google Meu Negócio e Schema LocalBusiness.',
  }),
  serviceSchema({
    name: 'Conteúdo SEO para Blog',
    description: 'Artigos otimizados de 800+ palavras para buscas locais ("dentista em Fazenda Rio Grande" e similares).',
  }),
  serviceSchema({
    name: 'Manutenção Mensal de Site',
    description: 'Atualizações ilimitadas, backup semanal, suporte por WhatsApp e relatório mensal de performance.',
  }),
)

const servicos = [
  {
    icon: '🌐',
    title: 'Landing Page Profissional',
    desc: 'Site de uma página com tudo que o cliente precisa pra te procurar: serviços, fotos, horário e WhatsApp.',
    items: ['1 página otimizada', 'WhatsApp + formulário', 'Google Maps embutido', 'Hospedagem 1 ano'],
  },
  {
    icon: '🏪',
    title: 'Site Institucional Completo',
    desc: 'Múltiplas páginas pra negócios com mais histórico: Sobre, Serviços, Galeria, Depoimentos, Contato.',
    items: ['Até 5 páginas', 'Galeria de fotos', 'Página de depoimentos', 'Blog opcional'],
  },
  {
    icon: '🍔',
    title: 'Cardápio Digital',
    desc: 'Pra lanchonetes e restaurantes de Fazenda Rio Grande pararem de pagar 27% pro iFood.',
    items: ['Categorias e fotos', 'Pedido pelo WhatsApp', 'Atualização fácil', 'QR Code de mesa'],
  },
  {
    icon: '📍',
    title: 'SEO Local + Google Meu Negócio',
    desc: 'Faço seu negócio aparecer quando alguém busca "perto de mim" em Fazenda Rio Grande.',
    items: ['Cadastro Google Meu Negócio', 'Schema.org LocalBusiness', 'Otimização de palavras-chave', 'Backlinks locais'],
  },
  {
    icon: '✍️',
    title: 'Conteúdo SEO para Blog',
    desc: 'Artigos otimizados pra você aparecer em buscas como "dentista em Fazenda Rio Grande".',
    items: ['Pesquisa de palavras-chave', 'Artigos de 800+ palavras', 'Otimização on-page', '1 a 4 artigos/mês'],
  },
  {
    icon: '🛠️',
    title: 'Manutenção Mensal',
    desc: 'Pra você não se preocupar com nada: atualizo horários, fotos, promoções e mantenho o site rápido.',
    items: ['Atualizações ilimitadas', 'Backup semanal', 'Suporte por WhatsApp', 'Relatório mensal'],
  },
]
</script>

<template>
  <section class="section bg-gradient-to-br from-brand-50 to-white">
    <div class="container-tight text-center">
      <span class="inline-flex items-center gap-2 rounded-full bg-brand-100 text-brand-800 px-3 py-1 text-xs font-semibold">Serviços</span>
      <h1 class="mt-4 text-4xl sm:text-5xl">Tudo o que seu negócio precisa pra <span class="text-brand-600">ser encontrado</span></h1>
      <p class="mt-5 text-lg text-slate-600">Sites, SEO local, cardápio digital e mais — feitos especialmente para o comércio de Fazenda Rio Grande.</p>
    </div>
  </section>

  <section class="section">
    <div class="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="s in servicos" :key="s.title" class="card">
        <div class="text-4xl">{{ s.icon }}</div>
        <h2 class="mt-3 text-xl">{{ s.title }}</h2>
        <p class="mt-2 text-slate-600">{{ s.desc }}</p>
        <ul class="mt-4 space-y-1 text-sm text-slate-700">
          <li v-for="i in s.items" :key="i" class="flex items-start gap-2">
            <span class="text-brand-600 font-bold">✓</span>{{ i }}
          </li>
        </ul>
      </article>
    </div>
  </section>

  <section class="section bg-slate-50">
    <div class="container-tight text-center">
      <h2 class="text-3xl">Não sabe qual escolher?</h2>
      <p class="mt-3 text-slate-600">Conta o que você faz que eu te indico o pacote ideal — sem custo, sem compromisso.</p>
      <NuxtLink to="/contato" class="btn-primary mt-6">Quero meu orçamento</NuxtLink>
    </div>
  </section>
</template>
