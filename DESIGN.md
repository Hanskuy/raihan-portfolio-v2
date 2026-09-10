---
name: "Raihan Sundana Portfolio"
description: "A calm editorial-technical portfolio that lets verified engineering evidence lead."
colors:
  page-light: "#f4f5f7"
  surface-light: "#ffffff"
  surface-subtle-light: "#e9edf3"
  ink-light: "#111827"
  muted-light: "#536071"
  line-light: "#cdd4de"
  cobalt-light: "#2457d6"
  cobalt-strong-light: "#173fa8"
  cobalt-soft-light: "#dbe6ff"
  danger-light: "#b42318"
  success-light: "#14734a"
  header-light: "rgb(244 245 247 / 88%)"
  page-dark: "#111318"
  surface-dark: "#191d24"
  surface-subtle-dark: "#232a34"
  ink-dark: "#edf1f7"
  muted-dark: "#abb6c5"
  line-dark: "#39424f"
  cobalt-dark: "#8eaeff"
  cobalt-strong-dark: "#b6c9ff"
  cobalt-soft-dark: "#23345f"
  danger-dark: "#ff9b8f"
  success-dark: "#7fd6ae"
  header-dark: "rgb(17 19 24 / 88%)"
typography:
  display:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 5vw, 4.5rem)"
    fontWeight: 650
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.35rem)"
    fontWeight: 640
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.4vw, 1.16rem)"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.6
  mono:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.6
rounded:
  field: "12px"
  surface: "14px"
  mobile-item: "12px"
  pill: "999px"
spacing:
  compact: "0.5rem"
  control-gap: "0.75rem"
  component: "1.25rem"
  cluster: "2rem"
  section-mobile: "4.5rem"
  section-fluid: "clamp(5rem, 9vw, 8.5rem)"
  shell-gutter-mobile: "0.625rem"
  shell-gutter: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.cobalt-strong-light}"
    textColor: "#f8fbff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.72rem 1.12rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-light}"
    textColor: "#f8fbff"
    rounded: "{rounded.pill}"
  button-primary-dark:
    backgroundColor: "{colors.cobalt-dark}"
    textColor: "#10141c"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.72rem 1.12rem"
    height: "3rem"
  button-secondary:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.72rem 1.12rem"
    height: "3rem"
  field:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0.75rem 1rem"
    height: "3rem"
  evidence-card:
    backgroundColor: "{colors.surface-subtle-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.surface}"
    padding: "2rem"
---

# Design System: Raihan Sundana Portfolio

## Overview

**Creative North Star: "The Evidence Ledger"**

This is a calm editorial-technical system for a recruiter-facing portfolio. It treats verified work, measurable outcomes, and concise explanations like entries in a well-composed professional ledger: large enough to scan, structured enough to trust, and never decorated beyond the evidence it contains. The interface uses asymmetry selectively to make the strongest work feel authored while borders, spacing, and typography keep the whole page disciplined.

The system is human-scale rather than futuristic. Warm-neutral light surfaces and cool charcoal dark surfaces carry a restrained cobalt signal for actions, links, and focus. Geist Sans handles the editorial voice; Geist Mono distinguishes metadata, dates, workflow steps, and technical measurements. Cyberpunk imagery, fake terminal chrome, and ornamental metrics are outside the visual language.

**Key Characteristics:**

- Evidence-led editorial hierarchy with a left-weighted first viewport.
- One cobalt interaction signal across light and dark themes.
- Border and tonal-surface separation instead of ornamental shadow.
- Geist Sans for narrative and Geist Mono for technical proof.
- Restrained motion, generous section rhythm, and touch-friendly controls.

## Colors

The palette pairs low-chroma neutral surfaces with a single cobalt family, preserving clarity and credibility in both themes.

### Primary

- **Clear Cobalt** (`cobalt-light` / `cobalt-dark`): Interactive links, visible focus, hover emphasis, and the dark-theme primary action.
- **Deep Cobalt** (`cobalt-strong-light` / `cobalt-strong-dark`): The light-theme primary action and stronger link emphasis; it is the assertive endpoint of the same accent family, not a second brand color.
- **Cobalt Wash** (`cobalt-soft-light` / `cobalt-soft-dark`): Reserved supporting tint in the palette; use only when a low-emphasis accent surface is needed.

### Neutral

- **Cool Paper / Night Canvas** (`page-light` / `page-dark`): The full-page background and the base scrollbar track.
- **Clean Sheet / Charcoal Panel** (`surface-light` / `surface-dark`): Inputs, secondary actions, media fallback surfaces, and raised-by-tone groups.
- **Mist Panel / Slate Panel** (`surface-subtle-light` / `surface-subtle-dark`): Grouped evidence cards, hover fills, and the contact-form container.
- **Near-Black Ink / Frosted Ink** (`ink-light` / `ink-dark`): Primary text and strongest structural rules.
- **Steel Copy** (`muted-light` / `muted-dark`): Secondary text, metadata, captions, placeholders, and scrollbar thumbs.
- **Quiet Rule** (`line-light` / `line-dark`): Section dividers, component strokes, and inline evidence separators.
- **Translucent Header** (`header-light` / `header-dark`): The sticky navigation background beneath backdrop blur.
- **Measured Error** (`danger-light` / `danger-dark`): Field-level and form-level failure messages.
- **Measured Success** (`success-light` / `success-dark`): Confirmed form completion messaging.

**The One-Signal Rule.** Cobalt is the only chromatic interaction signal. Do not introduce competing accent colors for decoration, categories, or technology labels.

**The Theme-Pair Rule.** Consume semantic CSS variables rather than hard-coding theme-specific colors into components; every surface and text role must switch as a pair.

## Typography

**Display Font:** Geist Sans (with `system-ui` and `sans-serif` fallbacks)  
**Body Font:** Geist Sans (with `system-ui` and `sans-serif` fallbacks)  
**Label/Mono Font:** Geist Mono (with `ui-monospace` and `monospace` fallbacks)

**Character:** The single sans family keeps the portfolio contemporary and direct, while the mono companion acts as a precise annotation layer. Tight display tracking supplies editorial confidence; body copy remains relaxed and highly readable.

### Hierarchy

- **Display** (650, fluid display scale, 0.96 line-height): The name in the hero only; balance lines and keep the measure near 15 characters.
- **Headline** (640, fluid section scale, 1 line-height): Major section headings; keep the measure near 16 characters so headings form clear visual anchors.
- **Title** (600, responsive 2.25–3rem range, 1–1.02 line-height): Project titles and major evidence headings.
- **Body** (400, fluid body scale, 1.7 line-height): Explanations and narrative; cap the reusable body-copy measure at 65 characters.
- **Label** (500–620, 0.875rem): Navigation, controls, field labels, technology lists, captions, and small action copy.
- **Mono** (500 by default, 0.875rem): Locations, dates, contexts, workflow steps, measurement values, and technical metadata. Large numeric proof may scale to 4.5–6rem while retaining tabular numerals.

**The Annotation Rule.** Mono marks evidence and context; it does not replace the narrative voice or turn the interface into a simulated terminal.

**The Tight-Only-at-Scale Rule.** Negative tracking belongs to display, section, project, and large metric type. Body copy and controls keep natural spacing.

## Layout

The page uses a centered shell capped at 82rem, with 1rem side gutters above mobile and 0.625rem gutters below 768px. Major sections use a fluid vertical rhythm from 5rem to 8.5rem; mobile sections settle at 4.5rem. Every major section begins with a quiet full-width rule, making the page read as a sequence of evidence chapters.

Desktop composition is deliberately asymmetric. The hero uses an approximately 54/46 text-to-visual split; selected projects alternate approximately 61/39 and 40/60 relationships; Experience, About, Skills, and Contact use unequal editorial columns rather than interchangeable cards. At the large breakpoint (1024px), these compositions expand into columns. Below it, they become a single reading sequence. AirMalysis keeps its explanation and verified metrics before the application screenshot at every breakpoint.

At 768px, supporting pairs and data clusters may become two columns; below 768px, the system strictly collapses into one primary column except for compact, intrinsically safe groups such as the three project metrics and the mobile menu action pair. Horizontal workflow and technology flows are snap-scroll rows rather than cramped wrapping diagrams. Navigation switches from inline links to a 44px menu control below 1024px.

**The Evidence-First Grid Rule.** Unequal columns must express importance or reading order. Do not convert the portfolio into a repeated equal-card dashboard.

**The Single-Column Safety Rule.** Below 768px, preserve a clear top-to-bottom story and use horizontal scrolling only for compact technical sequences.

## Elevation & Depth

The system is flat by default and defines no box-shadow vocabulary. Depth comes from tonal layering, 1px borders, a translucent sticky header, and backdrop blur. White or charcoal surfaces sit against the page canvas; subtle panels group dense evidence without appearing to float.

The hero portrait is presented directly with a quiet outline and external caption so the supplied photograph stays credible and unaltered. The sticky navigation uses an 88% opaque theme-matched background with medium backdrop blur so page content remains perceptible without competing with the navigation.

**The Flat-By-Default Rule.** Do not add ambient card shadows. Use surface contrast and quiet rules first.

## Shapes

The recurring form language has three levels. Media and grouped surfaces use softly curved 14px corners. Inputs use a slightly tighter 12px radius. Compact controls, workflow chips, and scrollbar thumbs use the 999px pill silhouette. Structural page sections and text-led evidence rows remain square and are separated by borders instead of being boxed.

Borders are 1px and semantic: the quiet line color for most separation, primary ink only when an entry needs a stronger opening rule, and cobalt for interactive emphasis. Images are clipped to their soft surface radius; no decorative notches, angled corners, or glass cards are part of the system.

**The Selective-Curve Rule.** Round interactive controls, media, and true grouped surfaces. Keep document-like sections and evidence rows unboxed.

## Components

### Buttons

- **Shape:** Fully pill-shaped with a 3rem minimum height, centered inline content, 0.6rem icon gap, and compact horizontal padding.
- **Primary:** Deep cobalt with a matching border and cool-white text in light mode; light cobalt with near-black text in dark mode.
- **Hover / Focus:** Hover shifts to the clearer cobalt tone; keyboard focus uses the global 3px cobalt outline with a 3px offset; active presses scale to 0.98 over 120ms.
- **Secondary:** Theme surface with quiet border and primary ink; hover changes the border to cobalt and text to the strong accent.
- **Unavailable:** The resume action remains visibly button-shaped but uses reduced opacity and a not-allowed cursor, with explanatory accessible text.

### Chips

- **Style:** Workflow chips are surface-colored pills with a 1px quiet border, Geist Mono at 0.75rem, and compact 0.375rem by 0.75rem padding.
- **State:** They are informational, not selectable. In sequences they sit in a horizontal snap row and are joined visually by small right arrows.

### Cards / Containers

- **Corner Style:** Soft grouped-surface corners (14px).
- **Background:** Use the theme surface for quieter education/media containers and the subtle surface for stronger evidence or form grouping.
- **Shadow Strategy:** No shadows; rely on tonal contrast and borders.
- **Border:** Internal divisions use the quiet 1px rule. Whole-card outlines are generally omitted.
- **Internal Padding:** 1.5rem on compact/mobile layouts and 2–2.25rem on wider layouts.

### Inputs / Fields

- **Style:** Theme surface, primary ink, 1px quiet border, 12px corners, 3rem minimum height, and 1rem horizontal padding.
- **Focus:** The global 3px cobalt focus outline with a 3px offset remains visible; do not suppress it in favor of color-only feedback.
- **Error / Disabled:** Field errors appear directly beneath the relevant field in the semantic danger color. The submit button reduces opacity and changes cursor while loading; status copy is announced through a polite live region.

### Navigation

- **Desktop:** A 4.5rem sticky header with an 82rem shell. The wordmark is semibold with subtle tight tracking. Links and the theme control are 44px-tall pills in muted text; hover adds a subtle surface fill and returns text to primary ink.
- **Mobile:** A 44px bordered circular menu control opens a full-width, border-separated panel. Links become 48px-tall rows with 12px corners; theme and resume actions sit in a two-column action group.
- **Theme Control:** Cycles system, light, and dark, showing the current mode as text in addition to the sun icon. Manual choices persist; system mode follows the operating system.

### Evidence Patterns

- **Technical Flow:** A horizontally scrollable, snap-aligned sequence of mono pills; use when order matters and wrapping would hide the process.
- **Metric Cluster:** A border-led definition list with mono, tabular numbers. Metrics must be tied to named project outcomes rather than used as decorative counters.
- **Technology List:** Plain inline text items with a quiet underline, never filled badges or proficiency meters.
- **Editorial Media:** Use real supplied imagery with explicit aspect ratios and meaningful alternative text. AirMalysis uses the supplied result screenshot, research uses the authentic paper figure, and the confidential EGRC project uses a restrained text treatment. Do not fabricate screenshots or use conceptual technology artwork as proof.
- **Project Demo:** A responsive 16:9 video follows the project's written evidence, paired with a visible external YouTube link and a descriptive iframe title.

Motion is limited to 120–180ms state changes, the mobile menu reveal, the theme update, and smooth anchor scrolling. All transitions and scrolling reduce to effectively immediate behavior when the user requests reduced motion.

## Do's and Don'ts

### Do:

- **Do** lead each viewport and section with the strongest verified evidence and a clear reading order.
- **Do** use semantic theme variables so light, dark, and system behavior remain synchronized.
- **Do** reserve cobalt for actions, links, focus, and meaningful interactive state.
- **Do** use borders, whitespace, and tonal panels to group content before considering any new depth treatment.
- **Do** keep controls at least 44px tall, preserve visible focus, and pair status color with text and live-region semantics.
- **Do** use Geist Mono for dates, workflow, context, and quantitative proof.

### Don't:

- **Don't** introduce neon green, hacker motifs, fake code windows, terminal chrome, or cyberpunk decoration.
- **Don't** turn the work into identical three-card grids, decorative stat strips, or skill progress bars.
- **Don't** add ambient shadows, glassmorphism, extra accent hues, or gratuitous gradients.
- **Don't** use pills as a universal container shape; reserve them for compact controls and technical chips.
- **Don't** add continuous animation or motion that survives the reduced-motion preference.
- **Don't** fabricate screenshots, links, credentials, claims, or visual proof that the project does not have.
