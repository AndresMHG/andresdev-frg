---
title: "Checklist: o que um site profissional precisa ter em 2026"
description: "Lista prática do que todo site profissional de pequeno negócio precisa ter em 2026 — velocidade, SEO, WhatsApp, segurança e mobile."
date: "2026-05-16"
categoria: "Boas Práticas"
tempoLeitura: "6 min de leitura"
---

# Checklist: o que um site profissional precisa ter em 2026

Um site profissional não é mais só "ter presença online". Em 2026, com inteligência artificial nas buscas (Google AI Overviews, ChatGPT Search, Perplexity) e exigências mobile cada vez maiores, faltar algum desses itens significa não aparecer e não converter.

Abaixo, o checklist completo do que avalio antes de entregar qualquer projeto na andres.dev.

## Performance e velocidade

- [ ] Carrega em **menos de 1,5 segundo** no 4G
- [ ] Pontuação 90+ no PageSpeed Insights (mobile e desktop)
- [ ] **Imagens em WebP ou AVIF** (não PNG/JPG grandes)
- [ ] Lazy loading em fotos abaixo da dobra
- [ ] Sem JavaScript travando o render inicial
- [ ] Servido via CDN (Vercel, Cloudflare ou similar)
- [ ] Cache configurado

Site lento = cliente desistindo + Google rebaixando.

## Mobile-first

- [ ] Layout funciona perfeito em telas de 360px (celular básico)
- [ ] Botões com no mínimo **44x44px** de área de toque
- [ ] Texto legível sem zoom (mínimo 16px)
- [ ] Sem rolagem horizontal
- [ ] Menu funcional no celular (hamburger ou bottom nav)
- [ ] Formulário com teclado correto (numérico em telefone, e-mail em e-mail)

Mais de **75% dos acessos** em sites locais de Fazenda Rio Grande são via celular.

## SEO básico

- [ ] **Título único por página** (50–60 caracteres)
- [ ] **Meta description** atrativa (140–160 caracteres)
- [ ] URLs amigáveis (/servicos, não /page.php?id=4)
- [ ] H1 único por página
- [ ] Hierarquia H2/H3 lógica
- [ ] **Sitemap.xml** acessível em /sitemap.xml
- [ ] **robots.txt** sem bloqueios indevidos
- [ ] Canonical URL configurado
- [ ] Open Graph e Twitter Cards
- [ ] **Schema.org LocalBusiness** (essencial em FRG)
- [ ] **Schema.org FAQPage** se houver perguntas frequentes

## SEO local (essencial para Fazenda Rio Grande)

- [ ] Cidade no `<title>` da home
- [ ] Endereço completo no rodapé
- [ ] Mapa embutido apontando para o local exato
- [ ] Coordenadas no Schema LocalBusiness (-25.6526, -49.3066 para centro de FRG)
- [ ] Cadastro no Google Meu Negócio
- [ ] Links para bairros que atende (Eucaliptos, Pioneiros, Nações, etc.)

## Conversão

- [ ] **Botão WhatsApp** flutuante e fixo no canto
- [ ] CTA principal acima da dobra
- [ ] **Mensagem pré-preenchida** no link do WhatsApp
- [ ] Formulário de contato funcional (testado!)
- [ ] Telefone clicável (`tel:` link)
- [ ] E-mail clicável (`mailto:` link)
- [ ] Endereço com botão "Como chegar" (link pro Maps)
- [ ] Horário de atendimento visível

## Segurança

- [ ] **HTTPS** (certificado SSL ativo)
- [ ] Sem dependências com vulnerabilidades conhecidas
- [ ] Headers de segurança configurados (CSP, X-Frame-Options)
- [ ] Formulários com proteção anti-spam (honeypot ou Turnstile)
- [ ] Dados sensíveis nunca em URL ou localStorage

## LGPD (Lei Geral de Proteção de Dados)

- [ ] **Política de Privacidade** acessível
- [ ] **Termos de Uso** acessíveis
- [ ] Banner de cookies (se houver tracking)
- [ ] Justificativa legal para cada dado coletado
- [ ] E-mail de contato do encarregado (DPO)

## Acessibilidade

- [ ] **Contraste de texto** mínimo 4.5:1
- [ ] Imagens com texto alternativo (`alt`)
- [ ] Navegação via teclado funcional
- [ ] Sem texto só em imagem
- [ ] Foco visível em botões e links

## Analytics e monitoramento

- [ ] **Google Analytics 4** instalado
- [ ] **Google Search Console** configurado
- [ ] **Pixel de Meta** (se anuncia no Facebook/Instagram)
- [ ] Eventos de conversão configurados (clique no WhatsApp, envio de formulário)
- [ ] Uptime monitorado (UptimeRobot ou similar)

## Para aparecer em IA (novo em 2026)

- [ ] **llms.txt** acessível na raiz (mapa do conteúdo para LLMs)
- [ ] robots.txt **permitindo** bots como GPTBot, anthropic-ai, PerplexityBot
- [ ] Conteúdo estruturado em Q&A claro
- [ ] Schema FAQPage nas páginas com perguntas frequentes
- [ ] Resposta direta no início de cada artigo do blog (formato citável)

## Manutenção

- [ ] Backup automatizado
- [ ] Plano de atualização para domínio e SSL
- [ ] Contato com quem mantém claro
- [ ] Documentação básica de como editar conteúdo

## Como uso esse checklist

Antes de entregar cada site, rodo o checklist completo. Itens não aplicáveis são marcados como tal (e-commerce tem itens a mais; landing page tem alguns a menos). Você recebe relatório final.

Se você quer rodar esse checklist no seu site atual, me chama no WhatsApp +55 41 98864-8321 — faço auditoria gratuita de 30 minutos.
