<script setup lang="ts">
useSeoMeta({
  title: 'Criação de Sites e Landing Pages em Fazenda Rio Grande – PR',
  description:
    'Sites profissionais para o comércio de Fazenda Rio Grande a partir de R$ 397. Entrega em 7 dias, WhatsApp integrado, SEO local e Google Maps. Peça seu orçamento.',
  ogTitle: 'Criação de Sites em Fazenda Rio Grande | andres.dev',
  ogDescription:
    'Landing pages prontas em 7 dias, a partir de R$ 397. Apareça no Google quando seu cliente buscar "perto de mim".',
  ogImage: 'https://andresdev.com.br/og.png',
  ogUrl: 'https://andresdev.com.br/',
  twitterCard: 'summary_large_image',
})

// JSON-LD: Service + Breadcrumb (LocalBusiness y WebSite ya vienen del layout)
useStructuredData(
  serviceSchema({
    name: 'Criação de Landing Pages em Fazenda Rio Grande',
    description:
      'Landing pages prontas em 7 dias, otimizadas para SEO local e integradas ao WhatsApp.',
  }),
  breadcrumbSchema([{ name: 'Início', url: '/' }]),
)

const beneficios = [
  { icon: '⚡', title: 'Entrega em 7 dias', desc: 'Site no ar rapidinho, sem promessas vazias.' },
  { icon: '📱', title: 'WhatsApp integrado', desc: 'O lead chega direto no seu celular.' },
  { icon: '📍', title: 'SEO local em FRG', desc: 'Apareça quando buscarem "perto de mim".' },
  { icon: '💰', title: 'A partir de R$ 397', desc: 'Sem mensalidade obrigatória.' },
  { icon: '🛠️', title: 'Suporte de gente da cidade', desc: 'Atendimento presencial em Fazenda Rio Grande.' },
  { icon: '🚀', title: 'Carrega em <1s', desc: 'Feito em Nuxt 3, hospedado na Vercel.' },
]

const nichos = [
  'Salões e barbearias', 'Lanchonetes e restaurantes', 'Oficinas mecânicas',
  'Clínicas e consultórios', 'Lojas de roupas', 'Pet shops',
  'Eletricistas e encanadores', 'Estética e bem-estar', 'Pedreiros e marceneiros',
  'Advogados e contadores', 'Imobiliárias', 'Personal trainers',
]

const passos = [
  { n: 1, title: 'Conversamos 20 min', desc: 'No WhatsApp ou presencial. Entendo seu negócio e quem é seu cliente.' },
  { n: 2, title: 'Você aprova o layout', desc: 'Mando uma prévia em 48h. Ajustamos até ficar do seu jeito.' },
  { n: 3, title: 'Site no ar em 7 dias', desc: 'Publico no seu domínio e cadastro no Google Meu Negócio.' },
  { n: 4, title: 'Você começa a receber clientes', desc: 'WhatsApp toca quando alguém preenche o formulário.' },
]
</script>

<template>
  <!-- HERO -->
  <section class="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50">
    <div class="container mx-auto px-4 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-brand-100 text-brand-800 px-3 py-1 text-xs font-semibold">
          <span class="h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
          Atendendo Fazenda Rio Grande e Região Metropolitana
        </span>

        <h1 class="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Seu negócio em
          <span class="text-brand-600">Fazenda Rio Grande</span>
          merece um site profissional.
        </h1>

        <p class="mt-5 text-lg text-slate-600 max-w-xl">
          Crio <strong>landing pages que aparecem no Google</strong> e levam clientes direto pro seu WhatsApp.
          Pronto em 7 dias, a partir de <strong>R$ 397</strong> — sem mensalidade obrigatória.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink to="/contato" class="btn-primary">
            Pedir orçamento grátis
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </NuxtLink>
          <NuxtLink to="/precos" class="btn-secondary">Ver preços</NuxtLink>
        </div>

        <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
          <li class="flex items-center gap-2">✅ Entrega em 7 dias</li>
          <li class="flex items-center gap-2">✅ Hospedagem 1 ano grátis</li>
          <li class="flex items-center gap-2">✅ Domínio .com.br incluso</li>
        </ul>
      </div>

      <div class="relative">
        <div class="absolute -inset-6 bg-gradient-to-tr from-brand-400/30 to-brand-200/30 blur-3xl rounded-full" />
        <div class="relative rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-brand-900/10 p-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="h-3 w-3 rounded-full bg-red-400" />
            <span class="h-3 w-3 rounded-full bg-yellow-400" />
            <span class="h-3 w-3 rounded-full bg-green-400" />
            <span class="ml-2 text-xs text-slate-500">salaodaroseli.com.br</span>
          </div>
          <div class="rounded-xl bg-gradient-to-br from-pink-100 to-brand-50 p-6">
            <p class="text-xs uppercase tracking-wider text-pink-700 font-semibold">Salão da Roseli · Eucaliptos</p>
            <h3 class="mt-2 text-2xl font-bold">Cabelo, unhas e estética em Fazenda Rio Grande</h3>
            <p class="mt-2 text-sm text-slate-600">Agendamento rápido pelo WhatsApp · Atendimento 6 dias por semana</p>
            <button class="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#25D366] text-white px-4 py-2 font-semibold text-sm">
              📱 Agendar pelo WhatsApp
            </button>
          </div>
          <p class="text-xs text-slate-400 mt-3">Exemplo ilustrativo</p>
        </div>
      </div>
    </div>
  </section>

  <!-- BENEFÍCIOS -->
  <section class="section">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl sm:text-4xl">Por que escolher a andres.dev?</h2>
        <p class="mt-3 text-slate-600">Atendimento local, preço justo e foco em uma coisa só: <strong>trazer cliente novo pro seu negócio</strong>.</p>
      </div>

      <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="b in beneficios" :key="b.title" class="card">
          <div class="text-3xl">{{ b.icon }}</div>
          <h3 class="mt-3 text-lg">{{ b.title }}</h3>
          <p class="mt-1 text-slate-600 text-sm">{{ b.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- NICHOS -->
  <section class="section bg-slate-50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl sm:text-4xl">Atendemos o comércio de Fazenda Rio Grande</h2>
        <p class="mt-3 text-slate-600">
          De salões em Eucaliptos a oficinas em Pioneiros, lanchonetes do centro a clínicas em Nações.
        </p>
      </div>
      <div class="mt-10 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        <span v-for="n in nichos" :key="n" class="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 shadow-sm">
          {{ n }}
        </span>
      </div>
    </div>
  </section>

  <!-- COMO FUNCIONA -->
  <section class="section">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl sm:text-4xl">Como funciona</h2>
        <p class="mt-3 text-slate-600">Sem complicação. 4 passos pro seu site estar no ar.</p>
      </div>

      <ol class="mt-12 grid md:grid-cols-4 gap-6">
        <li v-for="p in passos" :key="p.n" class="card relative">
          <div class="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center shadow-lg">
            {{ p.n }}
          </div>
          <h3 class="text-lg">{{ p.title }}</h3>
          <p class="mt-2 text-slate-600 text-sm">{{ p.desc }}</p>
        </li>
      </ol>
    </div>
  </section>

  <!-- CTA -->
  <section class="section bg-brand-600 text-white">
    <div class="container mx-auto px-4 text-center max-w-3xl">
      <h2 class="text-3xl sm:text-4xl text-white">Pronto pra aparecer no Google quando seu cliente buscar?</h2>
      <p class="mt-4 text-brand-100 text-lg">
        Orçamento sem compromisso em até 24h. Atendimento via WhatsApp ou presencial em Fazenda Rio Grande.
      </p>
      <div class="mt-8 flex justify-center flex-wrap gap-3">
        <a href="https://wa.me/5541988648321?text=Ol%C3%A1%20Andres!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20neg%C3%B3cio%20em%20Fazenda%20Rio%20Grande." rel="noopener" class="btn-whatsapp">
          Falar no WhatsApp agora
        </a>
        <NuxtLink to="/precos" class="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10 transition">
          Ver planos e preços
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
