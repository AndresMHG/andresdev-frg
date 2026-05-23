// https://nuxt.com/docs/api/configuration/nuxt-config
// SEO 100% manual con herramientas nativas de Nuxt 3 — sin meta-paquetes que rompan.
export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],

  // -----------------------------------------------------
  // URL canónico (usado en sitemap, JSON-LD, OG image)
  // -----------------------------------------------------
  runtimeConfig: {
    public: {
      siteUrl: 'https://andresdev.com.br',
      siteName: 'andres.dev — Criação de Sites em Fazenda Rio Grande',
      siteDescription:
        'Criação de landing pages e sites profissionais para o comércio e serviços de Fazenda Rio Grande (PR). Entrega em 7 dias, a partir de R$ 397.',
      whatsapp: '5541988648321',
      email: 'andres.dev.fazendariogrande@gmail.com',
    },
  },

  // -----------------------------------------------------
  // Meta tags globales (useHead defaults)
  // -----------------------------------------------------
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      titleTemplate: '%s · andres.dev — Sites em Fazenda Rio Grande',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0ea5e9' },
        { name: 'author', content: 'Andres — andres.dev' },
        { name: 'geo.region', content: 'BR-PR' },
        { name: 'geo.placename', content: 'Fazenda Rio Grande' },
        { name: 'geo.position', content: '-25.6526;-49.3066' },
        { name: 'ICBM', content: '-25.6526, -49.3066' },
        // Open Graph defaults
        { property: 'og:site_name', content: 'andres.dev' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://andresdev.com.br/og.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://andresdev.com.br/og.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://andresdev.com.br' },
      ],
    },
  },

  // -----------------------------------------------------
  // Contenido (blog)
  // -----------------------------------------------------
  content: {
    documentDriven: false,
    highlight: { theme: 'github-light' },
  },

  // -----------------------------------------------------
  // Performance / Core Web Vitals
  // -----------------------------------------------------
  experimental: {
    payloadExtraction: true,
    viewTransition: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/servicos', '/precos', '/blog', '/contato', '/sitemap.xml'],
    },
    compressPublicAssets: true,
  },

  image: {
    quality: 80,
    format: ['webp', 'avif'],
  },

  css: ['~/assets/css/main.css'],
})
