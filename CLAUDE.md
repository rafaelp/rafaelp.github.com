# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rafael Lima's personal portfolio and blog website (rafael.adm.br), built with Jekyll and hosted on GitHub Pages.

## Tech Stack

- **Jekyll 3.9.5** static site generator
- **Ruby 3.3.1** (see `.ruby-version`)
- **Bootstrap 3** + jQuery with plugins (Fancybox, Slick, Isotope)
- **GitHub Pages** gem (v231) for deployment

## Development Commands

```bash
# Install dependencies
bundle install

# Run local dev server (with auto-rebuild)
jekyll serve --watch --incremental

# Or use foreman (reads Procfile)
foreman start
```

## Architecture

### Content Structure

- `_posts/` — Blog posts (313 posts, Markdown/HTML with YAML frontmatter)
- `_layouts/` — Page templates (index, blog, post, page, mentoria, tags, error)
- `_includes/` — Reusable HTML fragments (head, footer, scripts)
- `_config.yml` — Jekyll configuration

### Site Sections

- **Homepage** (`index.html`) — One-page portfolio with smooth scrolling sections
- **Blog** (`blog/`) — Paginated blog with its own CSS/JS/fonts
- **Mentorship** (`mentoria/`) — Mentorship program pages
- **Podcast** (`voltandopracasa/`) — Podcast episode archive with MP3 files
- **Talks** (`palestras/`) — Presentations archive

### Key Configuration (`_config.yml`)

- Permalink pattern: `/p/:title`
- Excerpt separator: `<!--more-->`
- Pagination: 5 posts per page at `blog/page/:num`
- Plugins: jekyll-paginate, jekyll-sitemap

### Ruby Utility Scripts (root directory)

- `downmark_it.rb` — HTML to Markdown converter for blog content
- `import_from_google_docs.rb` — Imports posts from Google Docs via Drive API
- `extend_string.rb` — String extensions for accent removal and URL generation

### Frontend Assets

- `assets/` — Main site CSS, JS, images (Bootstrap, jQuery plugins)
- `blog/` — Blog-specific assets (separate from main site)

### Deployment

Automatic via GitHub Pages on push to master. Custom domain configured in `CNAME` → rafael.adm.br.

### Language

Site content is in **Brazilian Portuguese**.
