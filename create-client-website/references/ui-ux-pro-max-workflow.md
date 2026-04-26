# UI/UX Pro Max (bundled)

Data-driven design search (BM25 over curated CSVs): styles, colors, typography, landing patterns, UX guidelines, charts, product types, and **stack-specific** rows (use **`nextjs`** for sites built through create-client-website).

Full command reference, domains, stacks, checklists, and examples: [`ui-ux-pro-max/SKILL.md`](../ui-ux-pro-max/SKILL.md).

**Path:** `<PATH_TO_CREATE_CLIENT_WEBSITE_SKILL>` — same as in [create-client-website/SKILL.md](../SKILL.md) (directory with this skill’s root `SKILL.md`).

## When to use it in the client flow

| Moment | Suggested use |
| --- | --- |
| After **Inventory** / during **Ask Style Direction** | Run **`--design-system`** once with a query built from product type, industry, and style keywords from the questionnaire or screenshots. |
| During **Shape** | Supplement with `--domain` searches (e.g. `ux`, `typography`, `landing`) if the brief needs more specificity. |
| During **Craft** | Run **`--stack nextjs`** for implementation-oriented snippets; combine with [`design-rules.md`](design-rules.md) and Impeccable shared laws — UI/UX Pro Max suggests patterns; Impeccable enforces register, bans, and craft quality. |
| Before ship | Use the **Pre-Delivery Checklist** at the bottom of [`ui-ux-pro-max/SKILL.md`](../ui-ux-pro-max/SKILL.md) as an extra pass alongside [`impeccable/reference/polish.md`](../impeccable/reference/polish.md). |

## Required first command (typical)

From any shell (paths resolved absolutely or relative to your checkout):

```bash
python3 <PATH_TO_CREATE_CLIENT_WEBSITE_SKILL>/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <style keywords>" --design-system -p "<Client or project name>"
```

Then add stack guidance for Next.js:

```bash
python3 <PATH_TO_CREATE_CLIENT_WEBSITE_SKILL>/ui-ux-pro-max/scripts/search.py "<same or refined keywords>" --stack nextjs
```

## Optional persistence

To write `design-system/MASTER.md` (and optional `design-system/pages/<page>.md`) under the **client repo**, run from the **client project root** and add `--persist` (and optionally `--page "..."`) per [`ui-ux-pro-max/SKILL.md`](../ui-ux-pro-max/SKILL.md). Align persisted rules with `DESIGN.md` / Impeccable **document** flow if both exist.

## Prerequisites

Python 3 must be available (`python3`, `py -3`, or `python`). See the **Prerequisites** section in [`ui-ux-pro-max/SKILL.md`](../ui-ux-pro-max/SKILL.md).

## Relationship to Impeccable

- **UI/UX Pro Max** → breadth of searchable UI patterns, palettes, and stack tips.  
- **Impeccable** → PRODUCT/DESIGN context, brand vs product register, absolute bans, copy rules, and polish/audit commands.

Use both; if they conflict on a detail, prefer **Impeccable** for tone, bans, and copy, and Pro Max for optional pattern inspiration.
