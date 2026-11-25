# AGENTS.md

This site is made with [Notestack](https://github.com/yx-elite/notestack), a theme for Fumadocs study-notes sites.

Before you write or edit a note, read `node_modules/@yx-elite/notestack/WRITING.md`. It covers pages, the sidebar, every component, images, the glossary and the writing style. It ships with the theme, so it always matches the installed version. If `node_modules/` is missing, run `npm install` first.

- Notes go in `content/docs/`, glossary terms in `content/glossary.json`, shared images in `public/`.
- Change `site.config.ts` only when asked.
- Don't edit `app/`, `lib/` or the config files, and don't add dependencies: they are a few lines that load the theme.
- Run `npm run build` before you finish. It must pass.

(In the Notestack repository itself, `starter/` is the template for new sites: follow the repository's root AGENTS.md there, not this file.)
