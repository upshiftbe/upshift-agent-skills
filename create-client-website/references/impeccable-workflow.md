# Impeccable workflow (bundled)

Use the full **Impeccable** pack under [`impeccable/`](../impeccable/SKILL.md) for design quality, process, and optional tooling. Do not duplicate Impeccable’s public site visual design or page copy.

**Path placeholder:** `<PATH_TO_CREATE_CLIENT_WEBSITE_SKILL>` is the directory that contains this skill’s root `SKILL.md` (same folder as `references/` and `assets/`, parent of `impeccable/`). When running scripts, set the shell’s **working directory** to the **client website project root** (where `PRODUCT.md` and/or `package.json` live), and use an absolute or resolved path to the script file.

## Phases aligned to client builds

| Phase | Goal | Follow |
| --- | --- | --- |
| **Teach** | Lock audience, brand, tone, anti-references, goals, constraints; seed `PRODUCT.md` (and optionally `DESIGN.md`). | [`impeccable/reference/teach.md`](../impeccable/reference/teach.md) |
| **Shape** | Decide visual and UX direction *before* heavy coding (brief, register, laws). | [`impeccable/reference/shape.md`](../impeccable/reference/shape.md) + [`design-rules.md`](design-rules.md) + style questionnaire |
| **Craft** | Implement the site (Next.js stack, CMS, content). | [`impeccable/reference/craft.md`](../impeccable/reference/craft.md) + [`netlify-decap.md`](netlify-decap.md) |
| **Polish** | Pre-ship pass: a11y, performance, responsive, copy, empty states, CMS edge cases. | [`impeccable/reference/polish.md`](../impeccable/reference/polish.md); add [`impeccable/reference/audit.md`](../impeccable/reference/audit.md) when you want a scored technical pass |
| **Maintain** | Tokens, components, CMS structure for consistency. | [`impeccable/reference/extract.md`](../impeccable/reference/extract.md) |

## Mandatory setup (from Impeccable)

Before substantive UI work in a repo:

1. **Context** — If `PRODUCT.md` / `DESIGN.md` exist or are needed, load them with the bundled loader (from **client project root**):

   `node <PATH_TO_CREATE_CLIENT_WEBSITE_SKILL>/impeccable/scripts/load-context.mjs`

   Consume the full JSON output; do not truncate with `head`, `tail`, `grep`, or `jq`. If `PRODUCT.md` is missing or placeholder, follow **teach** above, then reload.

2. **Register** — Decide **brand** vs **product** per [`impeccable/SKILL.md`](../impeccable/SKILL.md) (setup section), then open [`impeccable/reference/brand.md`](../impeccable/reference/brand.md) or [`impeccable/reference/product.md`](../impeccable/reference/product.md).

3. **Shared design laws** — Apply the “Shared design laws” section in [`impeccable/SKILL.md`](../impeccable/SKILL.md) (color, theme, typography, layout, motion, bans, copy, AI-slop test).

## Optional commands and references

The command menu and routing rules live in [`impeccable/SKILL.md`](../impeccable/SKILL.md) (Commands table). Examples: **document** (`reference/document.md`) to derive `DESIGN.md` from code, **critique**, **bolder** / **quieter**, **clarify**, **adapt**, **optimize**, **live** (browser iteration — see [`impeccable/reference/live.md`](../impeccable/reference/live.md)).

**Pin shortcuts:** from the client or monorepo root, `node <PATH_TO_CREATE_CLIENT_WEBSITE_SKILL>/impeccable/scripts/pin.mjs pin <command>` creates harness shortcuts when standalone **impeccable** or this **create-client-website** bundle is installed under a known skills directory (see script).

## UI/UX Pro Max (optional)

For BM25-backed design-system and stack searches (including **`--stack nextjs`**), see [ui-ux-pro-max-workflow.md](ui-ux-pro-max-workflow.md) and [`ui-ux-pro-max/SKILL.md`](../ui-ux-pro-max/SKILL.md). Use it alongside this workflow; Impeccable still governs register, bans, and copy.

## Client-specific guardrails

- Preserve real client facts; do not invent testimonials, awards, or legal claims.
- Treat questionnaire answers and screenshots as direction for an **original** site, not a one-to-one clone of a third-party design.
- Default stack and Netlify/Decap expectations stay in the root create-client-website `SKILL.md`.
