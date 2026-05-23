# andres.dev — Site institucional

Site comercial em **Nuxt 3** com SEO local 100% otimizado para **Fazenda Rio Grande – PR**.

## Stack

- **Nuxt 3.14+** com SSG (geração estática) — carrega abaixo de 1s
- **Tailwind CSS** — estilização rápida
- **@nuxtjs/seo** — pacote unificado: sitemap, robots, schema.org, og-image, link-checker
- **@nuxt/content** — blog em Markdown
- **@nuxt/image** — imagens otimizadas em WebP/AVIF
- **@vueuse/nuxt** — composables úteis

## Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Modo dev (http://localhost:3000)
npm run dev

# 3. Gerar versão estática pra deploy
npm run generate

# 4. Preview da versão gerada
npm run preview
```

## Deploy na Vercel (grátis)

```bash
# Instalar Vercel CLI uma vez
npm i -g vercel

# Deploy
vercel
```

Ou conecte o repositório GitHub no painel da Vercel — deploy automático a cada push.

## Configurar o domínio

1. Compre `andresdev.com.br` em [registro.br](https://registro.br) (~R$ 40/ano)
2. Na Vercel, vá em Project Settings → Domains → Add
3. Cole o domínio e siga as instruções de DNS (CNAME ou A record)

## Antes de publicar — checklist

- [ ] Trocar o telefone WhatsApp em `components/WhatsAppButton.vue`, `components/AppFooter.vue`, `pages/contato.vue`, `nuxt.config.ts`
- [ ] Trocar o e-mail em `components/AppFooter.vue`, `pages/contato.vue`, `nuxt.config.ts`
- [ ] Trocar o Instagram `@andresdev.frg` se for diferente
- [ ] Conferir o endereço em `nuxt.config.ts` (schemaOrg → address)
- [ ] Substituir `/public/favicon.svg` e `/public/logo.svg` por logos finais
- [ ] Substituir a `https://andresdev.com.br` em todos os lugares pelo domínio real
- [ ] Cadastrar o site no [Google Search Console](https://search.google.com/search-console)
- [ ] Enviar `https://andresdev.com.br/sitemap.xml` ao Search Console
- [ ] Criar o perfil no Google Meu Negócio e linkar o site

## SEO local — o que esse site já tem

- ✅ `<html lang="pt-BR">`
- ✅ Meta `geo.region`, `geo.placename`, `geo.position`
- ✅ Schema.org `LocalBusiness` com endereço, geo, horários, `areaServed`
- ✅ Schema.org `Service`, `Article`, `Breadcrumb`, `WebSite`, `WebPage`
- ✅ Sitemap.xml automático
- ✅ robots.txt configurado (libera busca, bloqueia AI scrapers indesejados)
- ✅ OG Image dinâmico (compartilhamento WhatsApp/Facebook bonito)
- ✅ Canonical URL em todas as páginas
- ✅ Renderização estática (SSG) — Core Web Vitals altos
- ✅ Imagens em WebP/AVIF com lazy load
- ✅ Conteúdo de blog otimizado com palavras-chave locais (`"Fazenda Rio Grande"`, `"perto de mim"`, nomes de bairros)
- ✅ Compressão de assets ativada
- ✅ View transitions ativadas

## Estrutura

```
.
├── app.vue
├── nuxt.config.ts
├── tailwind.config.js
├── assets/css/main.css
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── WhatsAppButton.vue
│   └── OgImageDefault.vue
├── content/blog/        ← artigos em Markdown
├── layouts/default.vue
├── pages/
│   ├── index.vue
│   ├── servicos.vue
│   ├── precos.vue
│   ├── portfolio.vue
│   ├── contato.vue
│   └── blog/
│       ├── index.vue
│       └── [...slug].vue
└── public/
    ├── favicon.svg
    └── logo.svg
```

---

Feito em Fazenda Rio Grande, com Nuxt 3 ⚡
