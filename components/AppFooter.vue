<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-100 bg-slate-50 mt-12">
    <div class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div class="flex items-center gap-2 font-bold text-lg">
          <span class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">a.</span>
          <span>andres<span class="text-brand-600">.dev</span></span>
        </div>
        <p class="mt-3 text-sm text-slate-600">
          Sites profissionais para o comércio de <strong>Fazenda Rio Grande – PR</strong>.
          Entrega em 7 dias, a partir de R$ 397.
        </p>
      </div>

      <div>
        <h3 class="font-semibold text-slate-900 mb-3">Páginas</h3>
        <ul class="space-y-2 text-sm text-slate-600">
          <li><NuxtLink to="/servicos" class="hover:text-brand-700">Serviços</NuxtLink></li>
          <li><NuxtLink to="/precos" class="hover:text-brand-700">Preços</NuxtLink></li>
          <li><NuxtLink to="/blog" class="hover:text-brand-700">Blog</NuxtLink></li>
          <li><NuxtLink to="/contato" class="hover:text-brand-700">Contato</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-slate-900 mb-3">Atendemos</h3>
        <ul class="space-y-2 text-sm text-slate-600">
          <li>Fazenda Rio Grande</li>
          <li>Mandirituba</li>
          <li>Araucária</li>
          <li>São José dos Pinhais</li>
          <li>Curitiba e Região</li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-slate-900 mb-3">Contato</h3>
        <ul class="space-y-2 text-sm text-slate-600">
          <li>
            <a href="https://wa.me/5541988648321" rel="noopener" class="hover:text-brand-700">
              WhatsApp: (41) 98864-8321
            </a>
          </li>
          <li class="break-all">
            <a href="mailto:andres.dev.fazendariogrande@gmail.com" class="hover:text-brand-700">
              andres.dev.fazendariogrande@gmail.com
            </a>
          </li>
          <li class="text-slate-500">
            Atendimento de segunda a sábado
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-slate-200">
      <div class="container mx-auto px-4 py-6 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
        <p>© {{ year }} andres.dev — Fazenda Rio Grande, PR. Todos os direitos reservados.</p>
        <p>CNPJ MEI · Desenvolvido em Nuxt 3 ⚡</p>
      </div>
    </div>
  </footer>
</template>
