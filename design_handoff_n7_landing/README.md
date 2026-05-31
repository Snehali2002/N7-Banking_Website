# Handoff: N7 Marketing Landing Page

## Overview
A single-page marketing website for **N7 / CB7** — a digital core-banking and fintech
platform by Linktia Infosystems. The page sells N7's banking products (Core Banking CB7,
Digital Banking N7, Open Banking, Loan Origination/Management) through a dark, premium
fintech aesthetic with a single light "out-of-the-box" interlude. It is a faithful,
pixel-level recreation of the Figma frame **"Frame 74"** (1440 × 9560 desktop artboard).

## About the Design Files
The files in this bundle are **design references implemented in HTML/React (Babel, in-browser)**.
They are a working prototype showing the intended look, layout, copy, and behavior — **not
production code to ship as-is**. The task is to **recreate these designs inside the target
codebase's environment** using its established conventions. React.js / Next.js is the
preferred target (the prototype is already structured as React components, so the mapping is
near 1:1). If no front-end environment exists yet, Next.js (App Router) + CSS Modules or
Tailwind is a sensible default.

Recommended production mapping:
- Each `components/*.jsx` file → a real component/module (drop the `window.X = X` globals and
  use ES `import`/`export`).
- `styles/tokens.css` → CSS custom properties / a theme file / Tailwind theme extension.
- `styles/app.css` → component-scoped styles (CSS Modules) or utility classes.
- Replace the in-browser Babel `<script>` tags with the framework's build pipeline.
- Self-host the fonts (Archivo, Chivo Mono) instead of the Google Fonts CDN for performance.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, gradients, and interactions are
all derived directly from the Figma source. Recreate pixel-perfectly. All values in the
Design Tokens section are exact.

## Layout System
- **Reference width:** 1440px. Content is capped at `--maxw: 1440px` and centered.
- **Horizontal padding (gutter):** `clamp(20px, 5.5vw, 80px)` — 80px at desktop, shrinking on
  small screens. In Figma all content starts at x=80.
- **Sections** stack vertically; each is a full-bleed `<section>` with an inner `.container`.
- The dark background `#000d12` runs the whole page except the **Marquee** (white) and the
  **Out-of-the-box** section (`#e9f4f9` light).
- Large ghost **watermark** letters ("CB7", "N7", "7") sit behind several sections at low
  opacity (`color: #06212c` on dark; `rgba(0,13,18,.05)` on light).
- Decorative **radial glow blobs**: circles filled with the brand gradient at 5–50% opacity.

## Screens / Views
This is one continuous scroll page. Sections, top to bottom:

### 1. Navigation (`components/nav.jsx`)
- **Layout:** Fixed, centered floating pill. `top: 16px`, `max-width: 716px`, `height: 56px`,
  `border-radius: 12px`. Background `rgba(47,47,47,.55)` with `backdrop-filter: blur(15px)`.
- **Contents:** brand "N7" (Archivo 500, 24px) left · links (Solutions, resources, About us;
  14px, opacity .85) center · primary "REQUEST DEMO" button right.
- **Behavior:** On scroll > 24px, background darkens to `rgba(10,16,20,.82)` + drop shadow.
  Link underline grows on hover. Below 760px the links + CTA hide and a hamburger toggles a
  dropdown mobile menu (animated).

### 2. Hero (`components/hero.jsx`)
- **Layout:** 2-col grid, `minmax(0,1fr) / minmax(0,1.02fr)`, gap 40px, vertically centered.
  `padding-top: 150px` (clears the fixed nav).
- **Left copy:** H1 "The new foundation of modern banking" (Archivo 500, 67px, -0.01em,
  line-height 1.18). Sub: "We drive innovation and growth, provide seamless customer
  experience and operational excellence" (16px, opacity .8, max-width 360px). Buttons:
  REQUEST DEMO (primary) + CONTACT US (outline). Trusted-by: label "trusted by:" + 6 wordmarks
  (Shell, SmartFinder, Zoomerr, ArtVenue, kontrastr, Waves) in `#586e84`, 19px, weight 700.
- **Right visual:** photo `assets/img/hero-photo.jpg` (`border-radius: 31px`, aspect 362/300)
  with two floating **glassmorphic cards** absolutely positioned over it:
  - *Balance card* (top-right): "Balance · Today" / "$42,295.00" (`#031a6e`, 800) / "USD · Down 2.4%".
  - *Recent activity card* (bottom-left): title + filter chips (This Day / **This Week** active
    `#031a6e` / This Month) + two transaction rows (icon tile, name·category, date, signed amount).
  - Cards: `background: rgba(255,255,255,.45)`, `blur(16px)`, `border-radius: 14px`, inner panel
    `rgba(255,255,255,.82)`. Hidden below 760px.
- A brand-gradient glow blob (399×399, opacity .5) sits top-right behind the photo.

### 3. Solutions (`components/solutions.jsx`)
- **Header:** H2 "All of our solutions are tailor-made to your needs" (Archivo 400, 37px,
  -0.01em, max-width 433px) + REQUEST DEMO button. 60px bottom margin.
- **Grid:** 3 columns, gap `40px 76px`. 5 cards (last row has 2).
- **Card:** abstract icon (47×47, tinted `#00b4fd` — see Assets) with optional right-aligned
  tag ("NBFC" on the two Loan cards; Chivo Mono 14px, opacity .55); title (Archivo 22px,
  opacity .92); body (16px, line-height 1.35, opacity .7); "learn more" link.
- **Cards & exact copy:**
  1. *Core Banking CB7* — "CB7 helps your financial institution improve the client experience,
     automate and optimize procedures, simplify banking operations for your employees, improve
     risk management, increase productivity, and ensure full regulatory compliance."
  2. *Digital Banking N7* — "N7 brings full capabilities across strategy, human-centred design,
     operations, engineering and data science to create and deliver disruptive innovation. Our
     approach to building digital banks is specifically designed to help clients"
  3. *Open Banking* — "Our API banking helps you to gain actionable insights, enable account
     aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive
     budgeting tools, and introduce enhanced credit scoring."
  4. *Loan Origination System* (tag NBFC) — same body as #2.
  5. *Loan Management System* (tag NBFC) — same body as #2.

### 4. Cloud / CB7 (`components/midsections.jsx` → CloudSection)
- **Layout:** 2-col grid (1.05fr / 1fr), gap 40px. Giant "CB7" watermark behind.
- **Left:** H2 "A complete cloud-based core banking." (53px) + "Faster time to market with our
  cloud-based core banking services" (max-width 330px) + REQUEST DEMO + learn more.
- **Right:** framed device mockup `assets/img/dashboard.png` (the AML analytics dashboard),
  `border-radius: 16px`, large soft shadow, image opacity .92.

### 5. Efficiency checklist (`components/midsections.jsx` → EfficiencySection)
- **Layout:** 2-col grid (1fr/1fr), gap 56px. Image LEFT (`assets/img/spreadsheet.png`), copy RIGHT.
- **Copy:** H3 "Run a more efficient, flexible,and digitally connected corebanking system"
  (Archivo 27px, max-width 500px). "What you will get:" (bold 16px). Two check columns:
  - Col 1: Customer-On Boarding · Managing deposits and withdrawals · Transaction management ·
    Interest Calculation · Payments processing (cash, cheques, mandates, NEFT, RTGS etc)
  - Col 2: CRM Activities · Configuring New Banking Products · Loan disbursal and Loan
    management · Establishing criteria for minimum balances, interest rates, number of
    withdrawals allowed and so on.
- **Check item:** 19px gradient circle (`linear-gradient(180deg,#00b4fd,#003ace 82%)`) with a
  white tick + 16px text at opacity .8.

### 6. CTA band (`components/midsections.jsx` → CTABand)
- Rounded panel (`border-radius: 27px`) with gradient `linear-gradient(105deg,#031e2a,#000d12 63%)`,
  giant "CB7" watermark. H2 "Take the full advantage of going paper-less now." (53px) + sub
  ("CB7 helps your financial institution improve the client experience, automate and optimize
  procedures, simplify banking operations"). Actions: CONTACT US (outline) + REQUEST DEMO.

### 7. Marquee (`components/lightsection.jsx` → Marquee)
- White band, `height: 116px`, overflowing horizontally. Infinite left scroll (`26s linear`),
  pauses on hover. Repeating unit: ✦ **N7** ✦ **Say** 👋 **to the new way of banking** ✦ **CB7**
  ✦ **Say** 👋 **to the new way of banking**. "N7"/"CB7" are Archivo 500, 47px with the brand
  gradient as text fill; "Say"/"to the new way of banking" are Archivo 700, 47px, `#000d12`. ✦
  are the X-pattern glyph (`#00b4fd`, 44px). 👋 is `assets/img/wave.png`.

### 8. Out-of-the-box (light) (`components/lightsection.jsx` → OutOfBox)
- **Background:** `#e9f4f9`, dark text `#000d12`. Big faint "N7" watermark top-center.
- **Header (top-left):** H2 "Digital banking out-of-the-box" (53px) + sub + learn more.
- **3 rows** (max-width 660px, centered, gap 90px), each a 2-col grid `268px / 1fr`, gap 76px:
  - Row 1 (phone left): "Fully compliant with regulatory requirement" + body + checks
    [Pre-Integrated Security System, Fully Compliant With Regulatory Requirement, Digitally
    Connected Core]. Screen: `screen-home.png`.
  - Row 2 (phone right, reversed): "No legacy IT systems" + body + checks [Adaptive &
    Intelligent API monetization, Ambient User Experience, Cloud-native With lower TCO].
    Screen: `screen-transaction.png`.
  - Row 3 (phone left): "No traditional branches" + body + checks [Branchless & Paperless
    Banking, Digital Transformation Capability, Optimized, Adoptable and Scalable]. Screen:
    `screen-profile.png`.
  - **Phone:** `width: 268px`, aspect 268/543. Bezel `assets/img/phone-bezel.png` overlaid
    (z-index 2) on a screen image inset at `left 5.6% / top 2.3% / 89% × 95.4%`, `border-radius: 30px`.
- **Dark CTA band** at the bottom (same component style as §6) with "N7" watermark + lead
  "N7 helps your financial institution improve the client experience…".

### 9. Fintech blog (`components/fintech.jsx`)
- **Layout:** 2-col grid `463px / 1fr`, gap 60px. Glow blob behind.
- **Left header:** H2 "Get yourself up-to-speed on all the things happening in fintech" (37px)
  + "Insights" outline button.
- **Right:** feature card (X-pattern thumb + meta) above a 2-up row of cards. Card meta:
  eyebrow "getting started" (`#2490bb` mono 12–14px) · title "How to transition from a
  traditional to a digital bank" (Archivo 27px) · byline "David Grohl" + "17/08/24" (`#64a8c4`,
  14px) · "read more" pill button. Cards: `#01141b`, radius 18px. Thumbs: inset `#07193c` panel
  with a 2×2 grid of X-pattern glyphs. "READ ALL INSIGHTS" link bottom-right.

### 10. Case studies (`components/casestudies.jsx`)
- Centered H2 "Our Case Studies". **Interactive carousel**: a wide main card (X-pattern thumb
  left, body right: eyebrow, title "How we help brand reach out to more people" up to 43px,
  brand wordmark e.g. "Zoomerr" in `#586e84`, read more) flanked by two peeking side cards
  (opacity .3, blurred, scaled .92, translated ±46%). Controls: circular prev/next arrows
  (`#00b4fd` outline → filled on hover) + dot indicators (active dot becomes a 38px pill,
  `#0b4b63`). Auto-advances every 7s; click dot/arrow to navigate.

### 11. Final CTA (`components/midsections.jsx` → CTAPlain)
- Plain (no band) 2-col: copy left ("Take the full advantage of going paper-less now." + sub)
  + actions right (CONTACT US outline + REQUEST DEMO).

### 12. Footer (`components/footer.jsx`)
- **Layout:** 2-col grid `440px / 1fr`. Left: huge "N7" wordmark (gradient text fill,
  up to 260px). Right: 3 columns, each = address block + links block.
  - Col 1: **London** address + **Solutions** links (Core Banking CB7, Digital Banking N7,
    Open Banking, Loan Origination System, Loan Management System, Digital Transformation).
  - Col 2: **Dubai** address + **N7 Banking** links (About Us, Solutions, Contact, Company,
    Careers, Insights, Core Team) + "Brand Center" (with arrow).
  - Col 3: **Pune** address + **Our Socials** (LinkedIn, X — each with an up-right arrow).
- Copyright line (opacity .3, 14px, max-width 780px): "Copyright © 2022 by Linktia Infosystems
  Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in
  England and Wales | Number of Incorporation 13100992]".
- Wide faint glow blob along the bottom.

## Interactions & Behavior
- **Nav:** scroll-state background change (threshold 24px); hover underline grow; mobile
  hamburger → animated dropdown; smooth-scroll anchor links (`#solutions`, `#fintech`, `#footer`, `#top`).
- **Scroll reveal:** elements with `.reveal` fade up 28px → 0 (`opacity 0→1`, `0.7s`
  cubic-bezier(.22,.61,.36,1)) via IntersectionObserver (threshold .12). Stagger via
  `transition-delay`. Respect `prefers-reduced-motion` (no transforms, marquee static).
- **Buttons:** primary lifts `translateY(-2px)` + stronger shadow on hover; outline inverts
  fill on hover.
- **learn more:** arrow slides right 4px, underline bar grows 33→56px on hover.
- **Marquee:** continuous CSS keyframe scroll, pause on hover.
- **Case carousel:** state-driven index; auto-advance 7s interval; prev/next + dots.
- **Hover** states on blog "read more", footer links (slide + color), case arrows/dots.

## State Management
Minimal, all local component state:
- `Nav`: `scrolled` (boolean, from scroll listener), `open` (boolean, mobile menu).
- `CaseStudies`: `idx` (active case index); `setInterval` auto-advance; `go(dir)` helper.
- `useReveal()`: a shared effect that wires the IntersectionObserver for `.reveal` elements.
No data fetching. In production, blog posts / case studies / solution cards would come from a
CMS or props — they are hard-coded arrays here (`SOLUTIONS`, `OOB_ROWS`, `CASES`, `OFFICES`,
`SOLUTIONS_LINKS`, `BANKING_LINKS`).

## Design Tokens
**Colors**
| Token | Hex | Use |
|---|---|---|
| `--c-bg` | `#000d12` | page background (dark) |
| `--c-bg-2` | `#01141b` | dark cards |
| `--c-bg-inner` | `#07193c` | inset blue thumbnail panels |
| `--c-bg-light` | `#e9f4f9` | light section bg / primary light text |
| `--c-band-from` / `--c-band-to` | `#031e2a` / `#000d12` | CTA band gradient |
| `--c-ink` | `#e9f4f9` | text on dark |
| `--c-ink-dark` | `#000d12` | text on light |
| `--c-watermark` | `#06212c` | ghost letters on dark |
| `--c-accent` | `#00b4fd` | primary accent |
| `--c-accent-2` | `#003ace` | gradient end |
| `--c-meta` | `#2490bb` | "getting started" eyebrow |
| `--c-byline` | `#64a8c4` | author / date |
| `--c-logo` | `#586e84` | trusted-by / case brand wordmarks |

**Gradients**
- Accent: `linear-gradient(180deg, #00b4fd 0%, #003ace 100%)` (buttons, big text fills)
- Check: `linear-gradient(180deg, #00b4fd 0%, #003ace 82%)`
- Band: `linear-gradient(105deg, #031e2a 0%, #000d12 63%)`

**Typography**
- Families: **Archivo** (400/500/600/700) display + body; **Chivo Mono** (400/500) labels,
  buttons, eyebrows.
- Fluid display (clamp, min @≈375px → max @1440px): hero `clamp(40px,…,67px)/500/-0.01em`;
  H2 `clamp(31px,…,53px)/400/-0.01em`; H2-small/H3 `clamp(28px,…,37px)`; card title
  `clamp(20px,…,27px)`; solution title 22px; body 16px (line-height 1.3–1.45); label 15px;
  small 14px.

**Radius:** button 10px · card 18px · CTA band 27px · nav 12px · hero photo 31px · phone screen 30px.
**Spacing:** section vertical padding ≈ 80–100px; gutter `clamp(20px,5.5vw,80px)`.
**Shadow (button):** `0 8px 22px -10px rgba(0,120,220,.7)` → hover `0 16px 34px -12px rgba(0,140,250,.85)`.
**Easing:** `cubic-bezier(0.22, 0.61, 0.36, 1)`.

**Breakpoints:** `≤1100px` two-col → stacked, hero visual reorders; `≤760px` mobile nav,
single-column grids, floating hero cards hidden, marquee text 34px.

## Assets
All copied from the Figma file into `assets/`:
- `img/hero-photo.jpg` — hero photograph (person using the app).
- `img/dashboard.png` — AML analytics dashboard mockup (Cloud section).
- `img/spreadsheet.png` — core-banking data view (Efficiency section).
- `img/phone-bezel.png` — iPhone bezel overlay for the light-section mockups.
- `img/screen-home.png`, `img/screen-transaction.png`, `img/screen-profile.png` — N7 app
  screens shown inside the phones.
- `img/wave.png` — 👋 wave used in the marquee.
- `icons/sol-corebank.svg`, `icons/sol-loanorig.svg`, `icons/sol-loanmgmt.svg` — abstract
  solution-card glyphs. `icons/x-pattern.svg` — the ✦ snowflake (also used inline). All are
  single-path `fill="currentColor"` glyphs; in the prototype they are tinted by applying the
  SVG as a CSS `mask` over an `#00b4fd` background (so the color is themeable). `icons/check.svg`
  — the tick (inlined as a React component).

**Note on logos:** the six "trusted by" wordmarks and case-study brand names are rendered as
styled text, not the original brand SVGs (they are decorative fictional brands shown at low
opacity in the source). If exact logo art is required, request the SVGs.

**Fonts:** Archivo + Chivo Mono are loaded from Google Fonts in the prototype; self-host them
in production.

## Files
The design lives in the project root (one level up from this folder), mirrored here under
`source/`:
- `N7 Landing Page.html` — entry point (font links, stylesheets, React/Babel script tags).
- `styles/tokens.css` — design tokens (CSS custom properties).
- `styles/app.css` — layout, components, responsive rules, animations.
- `components/ui.jsx` — shared primitives: buttons, LearnMore, Check, inline icons
  (ArrowDiag, CheckGlyph, XPattern/XGrid), `useReveal()`.
- `components/nav.jsx` · `hero.jsx` · `solutions.jsx` · `midsections.jsx` (Cloud, Efficiency,
  CTABand, CTAPlain) · `lightsection.jsx` (Marquee, OutOfBox, Phone) · `fintech.jsx` ·
  `casestudies.jsx` · `footer.jsx` · `app.jsx` (composition root).
- `assets/…` — images, icons (listed above).
