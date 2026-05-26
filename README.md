# [Rafael Lima](https://rafael.adm.br)

Página pessoal — single-page HTML estática hospedada no GitHub Pages.

## Stack

- HTML + CSS puros (sem framework, sem build)
- GitHub Pages (deploy automático no push para `main`)

## Estrutura

- `index.html` — página única (Sobre, Empresas, Filosofias, Manifesto)
- `assets/css/` — estilos
- `assets/img/` — imagens (foto, logos, signature)
- `assets/favicon/` — favicons e webmanifest
- `css_browser_selector/` — demo standalone da lib css_browser_selector
- `.well-known/` — WKD (Web Key Directory) da chave GPG de contato@rafael.adm.br
- `CNAME` — mapeamento do domínio rafael.adm.br
- `pre-2026/` — arquivo da versão Jekyll anterior do site

## Rodando localmente

```bash
python3 -m http.server 4000
```

Acesse <http://localhost:4000>.

## Deploy

Push para `main` → GitHub Pages publica em <https://rafael.adm.br>.
