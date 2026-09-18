# Hub Remontu — hero variants (2a line)

Next.js 15 (App Router, TypeScript) port of the three hero directions explored in design.
Same copy in all three; only the hero presentation differs.

    npm install
    npm run dev     # http://localhost:3000

## Routes

| Route     | Variant | Idea |
|-----------|---------|------|
| `/`       | index   | Side-by-side links to the three variants |
| `/hero-a` | **3a**  | Split: text left, full-height photo right |
| `/hero-b` | **3b**  | Full-bleed photo, headline over it, direction cards overlapping the bottom |
| `/hero-c` | **3c**  | Diptych "project / built" — the structure itself makes the argument |
| `/full/v1a` | **1a** | "Quiet luxury" — existing dark identity, cleaned typography and grid |
| `/full/v1b` | **1b** | "Light editorial" — cream base, serif display, portfolio as case rows |
| `/full/v1c` | **1c** | "Catalogue" — display type, blueprint dashes, filters + estimate calculator |
| `/full/v2a` | **2a** | "Two halves" — Architects / Builds as a page-wide vertical split |
| `/full/v2b` | **2b** | "Warm clay" — terracotta, soft radii, before/after, team faces |
| `/full/v2c` | **2c** | "Transparent process" — schedule and budget panel above the fold |

## Where things live

    app/
      layout.tsx           fonts + globals, <html lang="uk">
      globals.css          design tokens (CSS vars) + all component classes
      page.tsx             variant index
      hero-a|b|c/page.tsx  one page per variant, composed from components/
    components/
      SiteHeader.tsx       dark nav bar (variant="dark" | "over-photo")
      HeroSplit.tsx        3a hero
      HeroOverlay.tsx      3b hero
      HeroDiptych.tsx      3c hero
      DirectionsSplit.tsx  Architects / Builds split section
      SeamBanner.tsx       bronze "відповідаємо за стик" strip
      StatsRow.tsx         numeric row (takes any stat list)
      ProjectGrid.tsx      3-up project cards, each with its department badge
      ContactCta.tsx       dark closing block
      Socials.tsx          the four real social links, as filled circles
      Marquee.tsx          the live site's scrolling text band (TextSlide.tsx)
      ProcessRow.tsx       the live site's four-step process band
      VariantSwitcher.tsx  fixed 3a/3b/3c pill, review aid — delete for production
      full/
        full.module.css    palettes + all primitives for the six full pages
        v1a…v2c/page.tsx   one full page per variant (layout in the page,
                           facts imported from lib/content.ts)
      FullVariantSwitcher.tsx  fixed 1a…2c pill, review aid — delete for production
    lib/content.ts         every fact all nine pages state — see "Facts" below
    lib/photos.ts          every photo + its crop, shared by all nine pages

## Two style layers

The three hero pages (`/hero-*`) use semantic classes in `app/globals.css`.
The six full pages (`/full/*`) use one CSS Module, `app/full/full.module.css`:
each variant sets its palette as CSS vars on a `.v1a`…`.v2c` class
(`--bg --fg --acc --accHi --rule --muted --faint --radius --pad`) and then reuses
shared primitives (`.btn .fill .frame .grid3 .tile .stats`…). Adding a seventh
variant = one palette block + one page.

Per-element one-offs (photo `objectPosition`, a gantt bar's left/width, a
max-width on one paragraph) stay as inline `style` next to the markup — those
are data, not theme.

## Facts

`lib/content.ts` is the only place a number, price, name, phone, route or
service title may come from, and every value in it is lifted from the live site
at `../hub-remontu/hub-remontu-website` — the file names its source per block
(`src/constants/business.ts`, `src/data/services.tsx`,
`src/data/projectsShortInfo.tsx`, `src/components/Pricing/DepartmentPricing.tsx`,
`src/components/ArchitectureHome/*`, `src/components/Layout/{Navbar,Footer}.tsx`).

The six full pages used to hold their own inline copies of these values, and
they drifted: "180+ проєктів" (the site says 300+), "12 років" (13), "3 роки
гарантії" (the site promises a guarantee but never a term), "92% здано в строк"
(published nowhere), "від $35 / м²" for design and "від $290 / м²" for
renovation (Architects is «Індивідуальний розрахунок»; Builds is
«від 1000 $/м²» — 3.5× what the variants claimed). These are pages a client
reads as a quote, so an invented number is one they would have to defend.
Import from `lib/content.ts`; do not retype a value into a page.

The one deliberate exception is the 2a headline — «Хтось малює красиво…» is new
copy being proposed, not something the site says. It lives in `hero`, while the
site's own headline lives in `heroOriginal`, which 1a and 1b use.

## Conventions

* No CSS framework. Tokens are CSS custom properties in `globals.css`
  (`--ink`, `--paper`, `--bronze`, `--sand`, …); components use semantic
  class names. Nothing is inline-styled except image `objectPosition`,
  which is per-photo cropping data and lives next to the photo.
* Accents carry a contrast contract — see the comment above the palettes in
  `full.module.css`. `--acc` labels small text on `--bg` and must clear 4.5:1
  against it; `--accHi` is the *lighter* accent for dark panels; `--accHover`
  is only a hover background; `--onAcc` is the text inside a filled button.
  They were one value once, which is why bronze failed AA at 3.38:1 — don't
  collapse them back.
* Images go through `next/image` with `fill` + `sizes`. Every photo the site
  shows is declared once in `lib/photos.ts` together with the `objectPosition`
  crop that keeps its subject in frame; pages spread that entry (`...photos.x`)
  instead of repeating a path, so a swap there changes every variant at once.
  A `fill` image needs a positioned ancestor with a real height — if that box
  is a `<span>`, give it `display: block` or it collapses to 0x0.
* Copy is Ukrainian and lives only in `lib/content.ts` — swap that file to
  re-language the whole thing.
* The live site's one type device is outline text: the emphasised words of every
  heading are drawn as a hairline stroke instead of a fill (`.h1-outline-text`,
  `.section-title h2 span`). That is the global `.stroke` class, and it strokes
  with `--fg` so it works on any of the seven palettes. 1a, 3b and the marquee
  use it; the cream variants do not, because a hairline on cream disappears.
* 1a is the only variant that is *not* an exploration: it is the live site's own
  palette (`#161512` / `#ba8d6d` / `#e1dbd6` / `#9d9a97`, `#24231d` process
  band, dashed `#414040` rules, zero radius) and its only typeface, Geologica,
  which is why `--font-site` exists in `app/layout.tsx`. Two of its values
  deviate on purpose because the site's own fail AA — see the comment above the
  `.v1a` block.
* Breakpoints: a single `@media (max-width: 900px)` block at the end of each
  stylesheet holds all the mobile rules. Below it the header is one row —
  logo, menu toggle, primary CTA — with the nav in a drop panel
  (`components/NavMenu.tsx`, the only client component). Buttons in a `.btnRow`
  go full width so stacked pairs line up, `.mono` labels lose tracking and gain
  leading so they survive a wrap, and a lone third stat spans both columns.
  Header height went 119–163px to 64–80px, so every hero headline now sits
  above the fold. Mobile *art direction* is still undesigned: photo crops are
  the desktop `pos` values, not per-breakpoint choices.

## Known gaps

* Links now point at the live site's real routes (`/anketa-form`, `/portfolio`,
  `/posluhy/<slug>/`, `/tsiny`, `/contact-us`), but nothing is wired: there are
  no such pages in this repo, so every one of them 404s here. No forms, no
  analytics. Phone numbers are real `tel:` links.
* Project photos come from `public/images/backgrounds` — interiors, no people.
  Titles and areas are now the site's real ones, but a title still does not
  describe the room in the photo beside it: there are ten interiors and the
  portfolio has 300+ objects. Matching them needs the real project photos.
* 2b's team portraits and hero avatars are flat color swatches — the photo set
  contains no people, so real portraits are still pending.
* Source JPEGs are capped at 2560px on the long edge and re-encoded at q90
  (26 MB -> 14 MB), so git history stays small as the photo set churns. Only
  the three oversized files were touched; the rest were already lean. Re-run
  that pass on any new drop before committing it.
* Fonts load from Google Fonts via `next/font` — self-host before launch if you care about the ToS/GDPR angle.
