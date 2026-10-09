# Bede The Unremarkable

A small Jekyll site for GitHub Pages. Uses Markdown, custom layouts, CSS, and the GitHub Pages-supported RSS plugin.

## Publishing

Keep Settings → Pages set to Deploy from a branch, `main`, `/ (root)`. GitHub builds Jekyll automatically. Keep the existing `CNAME` file for the custom domain.

## Editing

Edit `index.md`, `writing.md`, `projects.md`, and `about.md` for page copy. Styles live in `assets/css/style.css`.

To publish an entry, create `_posts/YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your title"
---

Your text goes here.
```

Use the actual publication date; future-dated posts are not shown by default. Posts appear automatically on Home and Writing and in the RSS feed. No example posts are published in this starter.

## Local preview

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Visit http://localhost:4000. The site URL is configured for HTTPS once GitHub finishes provisioning the certificate.
