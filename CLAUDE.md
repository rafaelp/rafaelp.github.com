# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rafael Lima's personal site (rafael.adm.br) — single-page static HTML hosted on GitHub Pages.

## Tech Stack

- Pure HTML + CSS (no framework, no build step)
- GitHub Pages (static file serving)

## Structure

- `index.html` — single-page site (Sobre, Empresas, Filosofias, Manifesto)
- `assets/css/style.css` — site styles
- `assets/img/` — images used by index.html (foto, logos, signature)
- `css_browser_selector/` — standalone showcase page for css_browser_selector library
- `.well-known/` — WKD (Web Key Directory) for contato@rafael.adm.br GPG key
- `CNAME` — custom domain mapping to rafael.adm.br
- `pre-2026/` — archive of the previous Jekyll-based site (not actively served as homepage)
- `evangelizacao/` — separate Next.js project (the Evangelização Espírita blog migrated off
  WordPress.com), deployed to Vercel with Root Directory `evangelizacao`. It is NOT part of
  the GitHub Pages site: `.nojekyll` keeps Pages from rendering its Markdown, and `robots.txt`
  disallows `/evangelizacao/`. See `evangelizacao/README.md`.

## Development

No build step. Edit HTML/CSS directly. Preview locally with any static server:

```bash
python3 -m http.server 4000
```

## Deployment

Automatic via GitHub Pages on push to `main`. Custom domain: `rafael.adm.br` (see `CNAME`).

## Language

Site content is in Brazilian Portuguese.
