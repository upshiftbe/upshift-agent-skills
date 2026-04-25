# Netlify And Decap CMS

## Netlify

Include `netlify.toml` with the Next.js plugin and `pnpm build` command. Keep the publish directory aligned with the Netlify Next.js plugin defaults.

## Decap CMS

Place Decap files in `public/admin`:

- `index.html` loads Decap CMS.
- `config.yml` defines backend, media folders, and collections.

Use `backend: name: git-gateway` by default for Netlify Identity/Git Gateway. Use local backend only for local CMS testing when requested.

Keep CMS field names aligned with the implemented components. Do not create CMS collections that the site does not render.
