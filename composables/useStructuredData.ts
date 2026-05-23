/**
 * Composable para inyectar JSON-LD (schema.org) de forma manual y type-safe.
 * Soporta múltiples bloques en una sola llamada.
 *
 * Uso:
 *   useStructuredData(localBusinessSchema(), breadcrumb([...]))
 */
export function useStructuredData(...schemas: Record<string, any>[]) {
  useHead({
    script: schemas.map((schema) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schema),
      // Importante: que Vue no escape los caracteres del JSON
      tagPosition: 'head',
    })),
  })
}

// -----------------------------------------------------
// Builders type-safe de los schemas más comunes
// -----------------------------------------------------

const SITE_URL = 'https://andresdev.com.br'

/** LocalBusiness — para SEO local en Fazenda Rio Grande. */
export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'andres.dev — Criação de Sites em Fazenda Rio Grande',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/og.png`,
  description:
    'Criação de landing pages profissionais para pequenos negócios em Fazenda Rio Grande - PR. Sites entregues em 7 dias com SEO local e WhatsApp integrado.',
  telephone: '+55-41-98864-8321',
  email: 'andres.dev.fazendariogrande@gmail.com',
  priceRange: 'R$ 397 - R$ 797',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Brasília',
    addressLocality: 'Fazenda Rio Grande',
    addressRegion: 'PR',
    postalCode: '83820-000',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -25.6526,
    longitude: -49.3066,
  },
  areaServed: [
    { '@type': 'City', name: 'Fazenda Rio Grande' },
    { '@type': 'City', name: 'Mandirituba' },
    { '@type': 'City', name: 'Araucária' },
    { '@type': 'City', name: 'São José dos Pinhais' },
    { '@type': 'City', name: 'Curitiba' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: [
    'https://wa.me/5541988648321',
  ],
})

/** WebSite — schema base del sitio. */
export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'andres.dev',
  inLanguage: 'pt-BR',
  publisher: { '@id': `${SITE_URL}/#business` },
})

/** Breadcrumb — array de { name, url } */
export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
  })),
})

/** Service — para páginas de servicios. */
export const serviceSchema = (opts: { name: string; description?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  description: opts.description,
  provider: { '@id': `${SITE_URL}/#business` },
  areaServed: ['Fazenda Rio Grande', 'Mandirituba', 'Araucária', 'Curitiba'],
  serviceType: 'WebsiteDesign',
})

/** Article — para posts del blog. */
export const articleSchema = (opts: {
  headline: string
  description: string
  datePublished: string
  url: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: opts.headline,
  description: opts.description,
  datePublished: opts.datePublished,
  author: { '@type': 'Person', name: 'Andres', url: SITE_URL },
  publisher: { '@id': `${SITE_URL}/#business` },
  mainEntityOfPage: opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`,
})

/** FAQ — para sección de preguntas frecuentes. */
export const faqSchema = (items: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})
