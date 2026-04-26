---
name: create-client-website
description: Create a fresh, deployable client website from an existing website URL, uploaded screenshots, or provided client information. Use when Codex needs to discover client content, extract or organize pages/copy/assets, ask style-direction questions, and build a redesigned website using pnpm, TypeScript, Next.js, React, Tailwind, lucide-react, tw-animate-css, Decap CMS, ESLint, Prettier, and Netlify deployment. Includes the full Impeccable pack (impeccable/) and UI/UX Pro Max (ui-ux-pro-max/, Python search.py + data CSVs) for teach → shape → craft → polish → maintain, data-driven design-system search, Next.js stack guidance, PRODUCT.md/DESIGN.md context, and optional pin/live tooling.
---

# Create Client Website

## Overview

Create a new client website from real client inputs. Preserve the client's content and business facts, but create an original design and a fresh deployable codebase.

Use this stack by default for fresh projects: pnpm, TypeScript, Next.js, React, Tailwind, lucide-react, tw-animate-css, Decap CMS, ESLint, Prettier, and Netlify.

## Bundled Impeccable

This skill vendors the complete **Impeccable** tree under [`impeccable/`](impeccable/SKILL.md): shared design laws, brand vs product registers, every command reference under `impeccable/reference/`, and Node scripts under `impeccable/scripts/` (`load-context.mjs`, `pin.mjs`, `live*.mjs`, etc.).

**`<PATH_TO_CREATE_CLIENT_WEBSITE_SKILL>`** means the directory containing *this* `SKILL.md` (sibling of `impeccable/`, `references/`, `assets/`). Resolve it from the workspace path or the user’s skills install location.

For design and implementation quality, follow [references/impeccable-workflow.md](references/impeccable-workflow.md) so discovery and stack work stay aligned with Impeccable setup (context load, register, laws) and command references.

## Bundled UI/UX Pro Max

This skill vendors **[`ui-ux-pro-max/`](ui-ux-pro-max/SKILL.md)** (Python `scripts/search.py`, `core.py`, `design_system.py`, and `data/` CSVs). Use it for **`--design-system`** and domain/stack searches during style direction and shaping. Default **stack flag** for this skill is **`nextjs`** (see `ui-ux-pro-max/SKILL.md` and [references/ui-ux-pro-max-workflow.md](references/ui-ux-pro-max-workflow.md)). Requires Python 3 on the machine running the script.

## Core Flow

1. Discover the client source.
2. Extract and inventory the content.
3. Ask for visual direction.
4. Shape the site brief and design system.
5. Craft the website.
6. Polish, validate, and prepare for Netlify.

## Discover

Ask for the client source first when it is missing:

- Current website URL
- Written business/client information
- Uploaded files, screenshots, brand assets, or copy

If the user provides an existing website, retrieve the available pages and extract content. If browsing or scraping is unavailable, ask for pasted content, screenshots, exports, or selected pages.

Use [references/discovery.md](references/discovery.md) for the content extraction checklist.

## Inventory

Before designing, summarize the content inventory:

- Pages and likely navigation
- Business description, services, products, locations, audience, and differentiators
- Headlines, CTAs, testimonials, case studies, contact details, social links, and SEO metadata
- Images, logos, brand marks, colors, and assets that can be reused
- Missing, ambiguous, or risky facts

Do not invent testimonials, certifications, prices, awards, legal claims, team members, locations, or statistics. Mark unknown content as missing and use editable placeholders only when unavoidable.

Use [references/content-model.md](references/content-model.md) for the default Decap CMS content model.

## Ask Style Direction

Ask multiple-choice questions after the content inventory. The first answer must represent the current client website's apparent style when a current site exists.

Always support uploaded screenshots as visual references. If screenshots are provided, analyze them for layout structure, typography, palette, density, navigation treatment, button/card treatment, imagery style, and overall mood. Use screenshots as design inspiration, not as content sources, unless the user explicitly says they contain client content.

Do not directly copy a proprietary design one-to-one. Translate observed qualities into an original client-specific design.

Use [references/style-questionnaire.md](references/style-questionnaire.md) and [references/screenshot-style-analysis.md](references/screenshot-style-analysis.md).

Optionally run **UI/UX Pro Max** after you have product type, industry, and style keywords (from inventory or answers): `python3 <PATH_TO_CREATE_CLIENT_WEBSITE_SKILL>/ui-ux-pro-max/scripts/search.py "<keywords>" --design-system -p "<Client name>"`, then `--stack nextjs` for implementation hints. See [references/ui-ux-pro-max-workflow.md](references/ui-ux-pro-max-workflow.md). Treat output as input to the brief, not a substitute for Impeccable laws or client facts.

## Shape

Follow the full Impeccable loop: **teach → shape → craft → polish → maintain**. Route each phase with [references/impeccable-workflow.md](references/impeccable-workflow.md), which links into [`impeccable/SKILL.md`](impeccable/SKILL.md) and [`impeccable/reference/`](impeccable/reference/shape.md) (setup, register, shared laws, then shape/craft/polish/extract as needed). Supplement shaping with [references/ui-ux-pro-max-workflow.md](references/ui-ux-pro-max-workflow.md) when you want searchable pattern and palette recommendations.

Create a concise brief before coding:

- Audience and conversion goal
- Voice and content tone
- Selected visual direction and anti-references
- Page map and content priorities
- Design system direction: color, type scale, spacing, section rhythm, components, motion
- CMS collections needed

When working in a repo, write durable decisions into `PRODUCT.md` or `DESIGN.md` if these files already exist or if the project needs them. After they exist or change, load context from the **client project root** with `node <PATH_TO_CREATE_CLIENT_WEBSITE_SKILL>/impeccable/scripts/load-context.mjs` (see `impeccable/SKILL.md` setup — consume full JSON, no truncation).

## Craft

If no app exists, create a fresh Next.js project using the required stack. Prefer copying the starter structure from `assets/next-client-site-template/` when useful, then adapt it to the client.

If an app already exists, inspect it first and adapt to the repo's patterns while preserving the required stack choices where feasible.

Build the actual website, not a mockup or brief. The first viewport must clearly identify the client and their offer. Use client-specific content throughout.

Default implementation expectations:

- App Router with TypeScript
- Tailwind 4 styling
- `lucide-react` icons for UI actions and feature icons
- `tw-animate-css` for purposeful motion utilities
- Decap CMS under `public/admin`
- Content in editable markdown, JSON, or MDX-compatible files
- `netlify.toml` for deployment
- ESLint and Prettier configs
- Responsive header, footer, homepage, core content pages, and contact flow
- Accessible semantic markup and keyboard-friendly navigation

Use [references/design-rules.md](references/design-rules.md) and [references/netlify-decap.md](references/netlify-decap.md). For implementation discipline and anti-slop checks, apply the shared design laws and register guidance in [`impeccable/SKILL.md`](impeccable/SKILL.md).

## Polish And Validate

Use [`impeccable/reference/polish.md`](impeccable/reference/polish.md) as the primary pre-ship design pass, in addition to the checks below. Run [`impeccable/reference/audit.md`](impeccable/reference/audit.md) when a structured a11y/perf/responsive audit is appropriate. Optionally add the **Pre-Delivery Checklist** in [`ui-ux-pro-max/SKILL.md`](ui-ux-pro-max/SKILL.md) for common UI polish items (icons, hover, contrast, layout breakpoints).

Before finishing:

- Check the new site represents the extracted content.
- Confirm the design is meaningfully new unless the user selected the current style.
- Test responsive layouts and text overflow.
- Check forms, navigation, missing images, long labels, and CMS-managed content.
- Run `pnpm lint`, `pnpm typecheck`, `pnpm build`, and Prettier checks when available.
- Start the local dev server and share the URL when the user should inspect the result.

If a command fails because dependencies are missing, install with pnpm when allowed. If network access is blocked, request approval.

## Maintain

After the website exists, consolidate repeated colors, typography, spacing, sections, and components into reusable tokens and components. Keep Decap CMS fields aligned with the implemented sections so non-developers can edit the finished site. For systematic extraction, follow [`impeccable/reference/extract.md`](impeccable/reference/extract.md).
