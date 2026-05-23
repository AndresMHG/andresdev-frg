<script setup lang="ts">
useSeoMeta({
  title: 'Contato – Peça seu orçamento de site em Fazenda Rio Grande',
  description: 'Fale com a andres.dev pelo WhatsApp, e-mail ou formulário. Orçamento em até 24h, sem compromisso.',
})

useStructuredData(
  breadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Contato', url: '/contato' },
  ]),
)

const form = reactive({
  nome: '',
  whatsapp: '',
  negocio: '',
  plano: 'Profissional',
  mensagem: '',
})

const enviarWhatsapp = () => {
  const txt = `Olá Andres! 👋%0A%0AMeu nome é ${form.nome}.%0AWhatsApp: ${form.whatsapp}%0ANegócio: ${form.negocio}%0APlano de interesse: ${form.plano}%0A%0A${form.mensagem || 'Gostaria de um orçamento para o meu site.'}`
  window.open(`https://wa.me/5541988648321?text=${txt}`, '_blank')
}
</script>

<template>
  <section class="section bg-gradient-to-br from-brand-50 to-white">
    <div class="container-tight text-center">
      <span class="inline-flex items-center gap-2 rounded-full bg-brand-100 text-brand-800 px-3 py-1 text-xs font-semibold">Contato</span>
      <h1 class="mt-4 text-4xl sm:text-5xl">Vamos conversar sobre o seu site?</h1>
      <p class="mt-5 text-lg text-slate-600">Respondo em até 4h em horário comercial.</p>
    </div>
  </section>

  <section class="section">
    <div class="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
      <!-- FORM -->
      <form @submit.prevent="enviarWhatsapp" class="card space-y-4">
        <h2 class="text-2xl">Peça um orçamento</h2>
        <div>
          <label class="block text-sm font-medium mb-1">Seu nome *</label>
          <input v-model="form.nome" required class="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none">
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">WhatsApp *</label>
          <input v-model="form.whatsapp" required placeholder="(41) 9 9999-9999" class="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none">
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Tipo de negócio *</label>
          <input v-model="form.negocio" required placeholder="Ex.: Salão de beleza, oficina, lanchonete..." class="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none">
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Plano de interesse</label>
          <select v-model="form.plano" class="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white">
            <option>Essencial (R$ 397)</option>
            <option>Profissional (R$ 697)</option>
            <option>Premium Local (R$ 797)</option>
            <option>Não sei ainda</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Conte um pouco do seu negócio</label>
          <textarea v-model="form.mensagem" rows="4" class="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
        </div>
        <button type="submit" class="btn-whatsapp w-full justify-center">
          Enviar pelo WhatsApp
        </button>
        <p class="text-xs text-slate-500 text-center">Ao enviar, você abre o WhatsApp com a mensagem já pronta.</p>
      </form>

      <!-- INFO -->
      <div class="space-y-6">
        <div class="card">
          <h3 class="text-lg">📍 Atendimento</h3>
          <p class="mt-2 text-slate-600">
            Atendimento presencial em <strong>Fazenda Rio Grande – PR</strong>, e remoto para toda a Região Metropolitana de Curitiba.
          </p>
        </div>

        <div class="card">
          <h3 class="text-lg">📱 WhatsApp direto</h3>
          <p class="mt-2 text-slate-600">Resposta em até 4h em dias úteis.</p>
          <a href="https://wa.me/5541988648321?text=Ol%C3%A1%20Andres!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20neg%C3%B3cio%20em%20Fazenda%20Rio%20Grande." rel="noopener" class="btn-whatsapp mt-3">(41) 98864-8321</a>
        </div>

        <div class="card">
          <h3 class="text-lg">✉️ E-mail</h3>
          <a href="mailto:andres.dev.fazendariogrande@gmail.com" class="text-brand-600 hover:underline mt-2 inline-block break-all">andres.dev.fazendariogrande@gmail.com</a>
        </div>

        <div class="card">
          <h3 class="text-lg">🕒 Horário</h3>
          <ul class="mt-2 text-slate-600 space-y-1">
            <li>Segunda a sexta: 9h às 18h</li>
            <li>Sábado: 9h às 13h</li>
            <li>Domingo: WhatsApp apenas</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
