# Evangelização Espírita

Migração do blog <https://evangelizacao.rafael.adm.br> (WordPress.com) para um
projeto Next.js estático, pronto para a Vercel.

O conteúdo vive em arquivos Markdown no repositório — não há banco de dados nem
CMS externo. Publicar é editar um arquivo e dar push.

## Stack

- **Next.js 15** (App Router, TypeScript) — tudo pré-renderizado em build
- **Markdown** com frontmatter, lido por `gray-matter` e convertido por `unified`
  (remark + rehype)
- **CSS puro**, tema inspirado no [Casper](https://github.com/TryGhost/Casper),
  o tema padrão do Ghost, com modo claro, escuro e automático
- Sem dependências de runtime: o site é 100% estático

## Conteúdo migrado

| Item | Quantidade |
| --- | --- |
| Posts | 83 |
| Páginas | 2 (Colaboradores, Núcleo Rocinha da EECMN) |
| Categorias | 6 (Aulas, Dinâmicas, Estórias, Estudos, Rascunhos, Textos) |
| Comentários | 296 (arquivados, somente leitura) |
| Imagens | 0 — o blog original nunca teve imagens no conteúdo |

O único anexo que o blog original referenciava (`corpo_humano.pdf`, no post
[Montando o Corpo Humano](content/posts/2006-08-04-montando-o-corpo-humano.md))
já retornava 404 no WordPress.com e não existe em nenhuma cópia do
Internet Archive. O link foi mantido no texto como estava no original.

## Estrutura

```
app/
  page.tsx                 página inicial (feed que cresce ao rolar)
  [...slug]/page.tsx       posts (/AAAA/MM/DD/slug) e páginas (/slug)
  pagina/[page]/           páginas 2..N do feed (fallback sem JavaScript)
  categoria/[slug]/        feed por categoria
  arquivo/                 todos os posts agrupados por ano
  busca/                   busca client-side sobre o texto completo
  feed.xml/                RSS
  posts.json/              cartões do feed, para o carregamento ao rolar
  search-index.json/       índice de busca (JSON estático)
  sitemap.ts, robots.ts    SEO
components/                cabeçalho, rodapé, feed, comentários, seletor de tema
lib/
  content.ts               leitura dos arquivos de conteúdo
  markdown.ts              Markdown -> HTML
  site.ts                  título, descrição e URL base
content/
  posts/*.md               um arquivo por post
  pages/*.md               um arquivo por página
  data/comments.json       comentários arquivados, por ID do post
  data/categories.json     slug -> nome das categorias
```

### Frontmatter de um post

```yaml
---
title: "Montando o Corpo Humano"
slug: "montando-o-corpo-humano"
date: "2006-08-04"
permalink: "/2006/08/04/montando-o-corpo-humano"
categories:
  - "Aulas"
excerpt: "TEMA: Montando o corpo humano OBJETIVO: ..."
author: "Rafael Lima"
wordpressId: "36"
---
```

`permalink` é a URL da página e `wordpressId` liga o post aos seus comentários
em `content/data/comments.json`.

## Feed da página inicial

A home traz os 12 posts mais recentes já no HTML e vai acrescentando os
próximos conforme o leitor chega ao fim da página, 12 por vez. A lista completa
mora em `/posts.json` e é baixada uma única vez, só quando o primeiro lote
acaba — quem não rolar a página não paga por ela.

O botão "Carregar mais" é um link de verdade para `/pagina/2/`: sem JavaScript
ele continua levando aos posts mais antigos, e as rotas `/pagina/<n>/`
continuam existindo para isso e para os buscadores.

## URLs

Os permalinks do WordPress foram preservados: `/2006/08/04/montando-o-corpo-humano/`
continua funcionando. As demais URLs antigas redirecionam (301) via
`next.config.mjs`:

| Antes | Depois |
| --- | --- |
| `/feed/`, `/feed/atom/`, `/comments/feed/` | `/feed.xml` |
| `/category/<slug>/`, `/tag/<slug>/` | `/categoria/<slug>/` |
| `/page/<n>/` | `/pagina/<n>/` |
| `/2009/`, `/2009/02/` | `/arquivo/` |

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse <http://localhost:3000>.

Para conferir o build de produção:

```bash
npm run build && npm start
```

## Deploy na Vercel

O projeto vive em uma subpasta do repositório, então o único ajuste necessário é
apontar a Vercel para ela:

1. **New Project** → importe o repositório `rafaelp/rafaelp.github.com`
2. **Root Directory**: `evangelizacao`
3. Framework Preset: **Next.js** (detectado automaticamente)
4. Deploy

### Variável de ambiente

`NEXT_PUBLIC_SITE_URL` define a URL absoluta usada no sitemap, no RSS e nas tags
canônicas. Sem ela, a Vercel usa o domínio de produção do próprio deploy. Quando
o domínio `evangelizacao.rafael.adm.br` estiver apontado para a Vercel, defina:

```
NEXT_PUBLIC_SITE_URL=https://evangelizacao.rafael.adm.br
```

## Como o conteúdo foi extraído

Os posts, páginas e comentários vieram da API pública do WordPress.com
(`public-api.wordpress.com/rest/v1.1/sites/10514795`). O HTML de cada post foi
limpo (resíduos de colagem do Word, `style`/`class` inline, comentários
condicionais) e convertido para Markdown. As quebras de linha simples do
original viraram hard breaks CommonMark (`\` no fim da linha), preservando a
formatação em blocos de TEMA / OBJETIVO / IDADE / MATERIAL usada nas aulas.
