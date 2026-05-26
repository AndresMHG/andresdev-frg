<script setup lang="ts">
useSeoMeta({
  title: 'Preços – Sites a partir de R$ 397 em Fazenda Rio Grande',
  description:
    'Planos transparentes: Essencial R$ 397, Profissional R$ 697, Premium R$ 797. Site no ar em até 14 dias, sem mensalidade obrigatória.',
})

useStructuredData(
  breadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Preços', url: '/precos' },
  ]),
  offerSchema({
    name: 'Plano Essencial — Landing Page',
    description: 'Landing page de 1 página com WhatsApp, Google Maps, SEO local básico, hospedagem 1 ano e domínio .com.br. Entrega em 7 dias.',
    price: '397',
    url: '/precos',
  }),
  offerSchema({
    name: 'Plano Profissional — Site Institucional',
    description: 'Site institucional até 4 seções, Google Meu Negócio, Schema LocalBusiness, integração Instagram. Entrega em 10 dias.',
    price: '697',
    url: '/precos',
  }),
  offerSchema({
    name: 'Plano Premium Local — Site + SEO Avançado',
    description: 'Site completo com blog (2 artigos), Google Analytics 4, pixel Meta, Search Console e treinamento. Entrega em 14 dias.',
    price: '797',
    url: '/precos',
  }),
  faqSchema([
    {
      question: 'Tem mensalidade obrigatória?',
      answer: 'Não. Você paga o site uma vez e pronto. A manutenção mensal é totalmente opcional.',
    },
    {
      question: 'E se eu não gostar do resultado?',
      answer: 'Você só paga os 50% finais quando aprovar o site. Antes disso, fazemos quantos ajustes precisar.',
    },
    {
      question: 'Preciso entender de tecnologia pra usar?',
      answer: 'Não. Eu cuido de tudo: domínio, hospedagem, e-mail, atualizações. Você só recebe os clientes no WhatsApp.',
    },
    {
      question: 'Atende fora de Fazenda Rio Grande?',
      answer: 'Sim! Atendo toda a região: Mandirituba, Araucária, São José dos Pinhais e Curitiba. Presencial só em Fazenda Rio Grande.',
    },
  ]),
)

const planos = [
  {
    nome: 'Essencial',
    preco: 'R$ 397',
    parcela: 'ou 4x de R$ 99,25 sem juros',
    desc: 'Pra quem precisa estar no Google e no WhatsApp agora.',
    prazo: '7 dias',
    cta: 'Começar com Essencial',
    destaque: false,
    items: [
      'Landing page de 1 página',
      'Botão WhatsApp em destaque',
      'Google Maps embutido',
      'Formulário de contato',
      'SEO local básico (Fazenda Rio Grande)',
      'Hospedagem grátis no 1º ano',
      'Domínio .com.br incluso',
      'Certificado SSL (HTTPS)',
    ],
  },
  {
    nome: 'Profissional',
    preco: 'R$ 697',
    parcela: 'ou 6x de R$ 116,17 sem juros',
    desc: 'O mais escolhido. Pra negócios que querem profissionalismo.',
    prazo: '10 dias',
    cta: 'Quero o Profissional',
    destaque: true,
    items: [
      'Tudo do plano Essencial',
      'Até 4 seções (Sobre, Serviços, Galeria, Depoimentos)',
      'Cadastro Google Meu Negócio',
      'Schema.org LocalBusiness',
      'Otimização de imagens (WebP)',
      'Integração com Instagram',
      '3 ajustes inclusos após entrega',
      'Suporte por 30 dias',
    ],
  },
  {
    nome: 'Premium Local',
    preco: 'R$ 797',
    parcela: 'ou 6x de R$ 132,83 sem juros',
    desc: 'Pra quem quer dominar o Google em Fazenda Rio Grande.',
    prazo: '14 dias',
    cta: 'Quero o Premium',
    destaque: false,
    items: [
      'Tudo do plano Profissional',
      'Blog otimizado com 2 artigos iniciais',
      'Pixel Meta + Google Analytics 4',
      'Pixel de remarketing configurado',
      'Setup completo Google Search Console',
      'Relatório de SEO inicial',
      'Suporte por 60 dias',
      'Treinamento de 1h pra você gerenciar',
    ],
  },
]

const extras = [
  { nome: 'Manutenção Mensal', preco: 'R$ 49/mês', desc: 'Atualizações ilimitadas, backup e hospedagem.' },
  { nome: 'Conteúdo SEO Mensal', preco: 'R$ 97/mês', desc: '1 artigo otimizado + 4 posts pra rede social.' },
  { nome: 'Renovação de Domínio', preco: 'R$ 60/ano', desc: 'Manutenção do seu .com.br ano a ano.' },
  { nome: 'Google Meu Negócio Avulso', preco: 'R$ 197', desc: 'Cadastro e otimização completa.' },
]
</script>

<template>
  <section class="section bg-gradient-to-br from-brand-50 to-white">
    <div class="container-tight text-center">
      <span class="inline-flex items-center gap-2 rounded-full bg-brand-100 text-brand-800 px-3 py-1 text-xs font-semibold">Preços</span>
      <h1 class="mt-4 text-4xl sm:text-5xl">Planos transparentes, sem letra miúda</h1>
      <p class="mt-5 text-lg text-slate-600">Você paga 50% pra começar e 50% só quando o site estiver no ar.</p>
    </div>
  </section>

  <section class="section">
    <div class="container mx-auto px-4 grid md:grid-cols-3 gap-6 items-stretch">
      <article
        v-for="p in planos" :key="p.nome"
        class="card flex flex-col"
        :class="p.destaque ? 'ring-2 ring-brand-600 shadow-xl scale-[1.02]' : ''"
      >
        <div v-if="p.destaque" class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 text-white text-xs font-bold px-3 py-1">
          MAIS ESCOLHIDO
        </div>
        <h2 class="text-2xl">{{ p.nome }}</h2>
        <p class="mt-1 text-slate-600 text-sm">{{ p.desc }}</p>
        <div class="mt-5">
          <p class="text-4xl font-bold text-slate-900">{{ p.preco }}</p>
          <p class="text-xs text-slate-500">{{ p.parcela }}</p>
          <p class="mt-2 inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
            ⚡ Entrega em {{ p.prazo }}
          </p>
        </div>
        <ul class="mt-6 space-y-2 text-sm text-slate-700 flex-1">
          <li v-for="i in p.items" :key="i" class="flex items-start gap-2">
            <span class="text-brand-600 font-bold mt-0.5">✓</span>{{ i }}
          </li>
        </ul>
        <NuxtLink to="/contato" class="mt-6" :class="p.destaque ? 'btn-primary justify-center' : 'btn-secondary justify-center'">
          {{ p.cta }}
        </NuxtLink>
      </article>
    </div>
  </section>

  <section class="section bg-slate-50">
    <div class="container-tight">
      <div class="text-center">
        <h2 class="text-3xl">Extras opcionais</h2>
        <p class="mt-3 text-slate-600">Nada é obrigatório. Contrate só o que faz sentido pro seu negócio.</p>
      </div>
      <div class="mt-10 grid sm:grid-cols-2 gap-5">
        <div v-for="e in extras" :key="e.nome" class="card flex justify-between items-start gap-4">
          <div>
            <h3 class="text-lg">{{ e.nome }}</h3>
            <p class="text-sm text-slate-600 mt-1">{{ e.desc }}</p>
          </div>
          <p class="font-bold text-brand-700 whitespace-nowrap">{{ e.preco }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-tight">
      <h2 class="text-3xl text-center">Perguntas frequentes</h2>
      <div class="mt-10 space-y-4">
        <details class="card group">
          <summary class="cursor-pointer font-semibold list-none flex justify-between items-center">
            Tem mensalidade obrigatória?
            <span class="text-brand-600 group-open:rotate-180 transition">▼</span>
          </summary>
          <p class="mt-3 text-slate-600">Não. Você paga o site uma vez e pronto. A manutenção mensal é totalmente opcional.</p>
        </details>
        <details class="card group">
          <summary class="cursor-pointer font-semibold list-none flex justify-between items-center">
            E se eu não gostar do resultado?
            <span class="text-brand-600 group-open:rotate-180 transition">▼</span>
          </summary>
          <p class="mt-3 text-slate-600">Você só paga os 50% finais quando aprovar o site. Antes disso, fazemos quantos ajustes precisar.</p>
        </details>
        <details class="card group">
          <summary class="cursor-pointer font-semibold list-none flex justify-between items-center">
            Preciso entender de tecnologia pra usar?
            <span class="text-brand-600 group-open:rotate-180 transition">▼</span>
          </summary>
          <p class="mt-3 text-slate-600">Não. Eu cuido de tudo: domínio, hospedagem, e-mail, atualizações. Você só recebe os clientes no WhatsApp.</p>
        </details>
        <details class="card group">
          <summary class="cursor-pointer font-semibold list-none flex justify-between items-center">
            Atende fora de Fazenda Rio Grande?
            <span class="text-brand-600 group-open:rotate-180 transition">▼</span>
          </summary>
          <p class="mt-3 text-slate-600">Sim! Atendo toda a região: Mandirituba, Araucária, São José dos Pinhais e Curitiba. Presencial só em Fazenda Rio Grande.</p>
        </details>
      </div>
    </div>
  </section>
</template>
