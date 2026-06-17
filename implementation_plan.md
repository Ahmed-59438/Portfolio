# Implementation Plan - Cinematic AI Systems Builder Portfolio

This document outlines the detailed design and implementation strategy for building Muhammad Ahmed's **Cinematic AI Systems Builder Identity Website** based on the updated Figma guidelines and gap analysis.

---

## User Review Required

> [!IMPORTANT]
> This plan has been fully updated to shift the website from a standard portfolio to a **Startup-Grade Cinematic Identity System**. It implements the exact typography scale, hero layering, narrative structuring, skill hierarchy, and motion physics required.

---

## Technical & Visual Architecture

### 1. Typography System (Figma-Aligned & Premium)
- **Headings** (Space Grotesk): Only for identity names and section/narrative titles.
- **Body** (Manrope): Only for readable content, utilizing light/regular weights.
- **Mono** (JetBrains Mono): Only for technical metadata, tags, labels, and system status lines.
- **Scale System**:
  - `H1` (Hero Name): `text-6xl md:text-8xl` (72–96px)
  - `H2` (Section Titles): `text-4xl md:text-6xl` (48–64px)
  - `H3` (Card/Subsection Titles): `text-2xl md:text-4xl` (28–36px)
  - `Body` (Content): `text-base md:text-lg` (16–18px)
  - `Small` (Tags/Labels): `text-xs md:text-sm` (12–14px)
- **Hero Typography Stack Ordering**:
  1. Name (largest, dominant - Space Grotesk)
  2. Tagline (secondary narrative - Manrope body text scale)
  3. Labels (monospace system identity - JetBrains Mono)
  4. CTAs (smallest, functional layer)
- **Spacing/Alignment**: Clean left-alignment for text elements with strict 8/16/24/32px vertical margins.

### 2. Brand Voice & Narrative Identity Rules
- **Brand Voice**: Confident, technical, minimal, founder-like. Avoid words like "student", "learning", "project", or "beginner". Use verbs like "architected", "systems designed", "developed frameworks", "orchestrated".
- **Visual Focus Rule**: Only **ONE** focal point per screen. In the Hero section, the focal point is the face (sharp image, edge-blurred, backlit by glow); all other elements (navigation, side buttons) must visually support and lead to this central focus without distraction.
- **Narrative Flow**:
  1. **Who he is** (`Hero`): High-impact cinematic visual identity.
  2. **How he thinks** (`About`): Editorial layout framing his systems engineering mindset.
  3. **What he builds** (`Projects`): Hard proof of concepts using problem-framing and architecture.
  4. **What he is becoming** (`Skills` & `Timeline`): Skill clusters and evolutionary milestones.
  5. **Exit** (`Contact`): Minimal, clean call to action.

### 3. Visual, Performance & Accessibility Constraints
- **Color Palette**:
  - Background: `#050505` (Deep Black)
  - Surface: `#0D0D0D` (Sleek Slate)
  - Accent: `#FFB347` (Amber)
  - Glow: `#FF8A00` (Amber glow, controlled opacity 10-25%)
- **Accessibility**:
  - Maintain a contrast ratio of $\ge$ 4.5:1 for all interactive text.
  - Implement descriptive `aria-label` attributes for all buttons and icon links.
  - Integrate Framer Motion hooks that disable complex motion if a user `prefers-reduced-motion`.
  - Enable robust keyboard navigation with standard focus rings and tab indexes.
- **Performance**:
  - Use `next/image` with proper sizing and priority preloading for the hero asset.
  - Zero heavy third-party particle engines; use pure CSS animation and light SVG gradients for background blooms.
  - Lazy load sections below the fold using Next.js dynamics or Framer Motion viewport triggers.

---

## Proposed Changes

We will construct a new Next.js App Router project in the currently empty workspace folder.

> [!IMPORTANT]
> **Modular Execution Strategy**: The codebase will be built sequentially in modules (section-by-section) rather than all at once. We will first set up the framework and styles, then implement and polish the Hero section, and move forward with subsequent sections only after verification.

```
src/
 ├── app/
 │    ├── page.tsx
 │    ├── layout.tsx
 │    ├── globals.css
 ├── components/
 │    ├── Navbar.tsx
 │    ├── Button.tsx
 │    ├── Card.tsx
 ├── sections/
 │    ├── Hero.tsx (Who he is)
 │    ├── About.tsx (How he thinks)
 │    ├── Projects.tsx (What he builds)
 │    ├── Skills.tsx (Supporting capabilities)
 │    ├── Timeline.tsx (Evolution Narrative)
 │    ├── Contact.tsx (Exit/Gateway)
 ├── lib/
 │    ├── animations.ts
```

---

### Phase 1: Global Setup

#### [NEW] [tailwind.config.ts](file:///c:/Users/mahma/OneDrive/Desktop/VS%20code%20codings/my%20projects/portfolio/tailwind.config.ts)
Configure styling classes:
- Custom font families mapping Space Grotesk, Manrope, and JetBrains Mono.
- Custom background colors matching `#050505` and `#0D0D0D`.
- Custom glowing utility classes (`shadow-glow`, `text-glow`).

#### [NEW] [src/app/globals.css](file:///c:/Users/mahma/OneDrive/Desktop/VS%20code%20codings/my%20projects/portfolio/src/app/globals.css)
- Import fonts from `@next/font/google` in `layout.tsx` and configure custom CSS variables.
- Add a persistent 5% dark grain noise overlay globally on the body to enhance the premium cinema feel.
- Set up responsive layouts using standard tailwind utilities.

---

### Phase 2: Navigation & Core Primitives

#### [NEW] [src/components/Navbar.tsx](file:///c:/Users/mahma/OneDrive/Desktop/VS%20code%20codings/my%20projects/portfolio/src/components/Navbar.tsx)
- Top navigation featuring the minimal `MA` logo.
- Interactive text links styled with JetBrains Mono, sliding in on mount.
- Backed by a high-end backdrop blur/glass effect with a thin, low-opacity border.
- **Navbar Behavior Rules**:
  - Hides completely on scroll down.
  - Reappears instantly on scroll up.
  - Highlights active menu options via a viewport-based scroll spy tracker.
  - Backdrop blur intensity increases dynamically as scroll depth increases.

#### [NEW] [src/components/Button.tsx](file:///c:/Users/mahma/OneDrive/Desktop/VS%20code%20codings/my%20projects/portfolio/src/components/Button.tsx)
- Premium button interactions with hover scales (1.02x) and magnet-follow animations using framer-motion coordinates.

#### [NEW] [src/components/Card.tsx](file:///c:/Users/mahma/OneDrive/Desktop/VS%20code%20codings/my%20projects/portfolio/src/components/Card.tsx)
- Solid surfaces using `#0D0D0D` with a subtle hover border transition.
- Soft elevation translation (2-4px lift) and a light dynamic glow border.

---

### Phase 3: Narrative Sections

#### [NEW] [src/sections/Hero.tsx](file:///c:/Users/mahma/OneDrive/Desktop/VS%20code%20codings/my%20projects/portfolio/src/sections/Hero.tsx)
- **Visual Setup**:
  - **Left Side**: White and Amber H1 heading ("Muhammad Ahmed"), monospace badges, clear tech CTAs.
  - **Right Side (Background Integration)**: 
    - Large portrait layer positioned slightly off-center (height 90-110vh, partially cropped).
    - Blend effects: `mix-blend-mode: screen` or `soft-light` (customizable/configurable), opacity: 70-90%, heavy blur/mask on edges using CSS mask-image or gradient overlay.
    - Fades: Smooth bottom fade to solid `#050505`, left fade into the text area.
    - Lighting: Soft radial amber glow behind the head.
- **Depth Layering & Background**:
  - Foreground text positioned above the image.
  - Radial amber glows positioned behind the image.
  - Subtle noise texture overlay on the top layer.
- **Mobile Responsive Strategies**:
  - Portrait becomes background layer behind copy rather than being side-by-side or stacked.
  - Hero text overlay aligns over the bottom-left of the portrait screen.
  - Glow effects are dimmed by 40% on mobile screens to save brightness contrast.
  - Tilt effects are disabled on touch-enabled and mobile screens.

#### [NEW] [src/sections/About.tsx](file:///c:/Users/mahma/OneDrive/Desktop/VS%20code%20codings/my%20projects/portfolio/src/sections/About.tsx)
- **Narrative Theme**: "How he thinks".
- **Visuals**: Left displays a static, secondary editorial photo (`media__1781705304155.png`) featuring amber rim lighting.
- **Copy**: Highlights a systems-first methodology, backend architecture planning, and computational design over simple coding.

#### [NEW] [src/sections/Projects.tsx](file:///c:/Users/mahma/OneDrive/Desktop/VS%20code%20codings/my%20projects/portfolio/src/sections/Projects.tsx)
- **Narrative Theme**: "What he builds" (Proof of architectural depth).
- **Format**:
  1. **AI Rental Intelligence System**: Framed as a system designed to eliminate rental fraud using structured verification pipelines, predictive tenant scoring, and pricing intelligence logic.
  2. **AI Model Development Journey**: Focused on dataset architectures, ML parameter iterations, and deployment pipelines.
  3. **Backend Architecture System**: Focused on designing high-throughput CRUD frameworks, robust validation protocols, and horizontal scalability patterns.
  4. **AI Agent Workflow System**: Showcasing autonomous orchestration, multi-step prompt chaining, and event-driven automation pipelines.

#### [NEW] [src/sections/Skills.tsx](file:///c:/Users/mahma/OneDrive/Desktop/VS%20code%20codings/my%20projects/portfolio/src/sections/Skills.tsx)
- **Hierarchy Structure**:
  - **Core Skills**: AI Systems, Backend Architecture, System Design Thinking.
  - **Supporting Skills**: C++, Python, Arduino / Embedded Circuits.
  - **Tools**: Google Colab, GitHub, Antigravity, n8n, Claude, Vapi, Grok.
- Minimal group cards displaying clean monospace labels with subtle hover highlight properties.

#### [NEW] [src/sections/Timeline.tsx](file:///c:/Users/mahma/OneDrive/Desktop/VS%20code%20codings/my%20projects/portfolio/src/sections/Timeline.tsx)
- **Narrative Theme**: "Evolution Narrative Timeline" (Growth of perspective).
- **Milestones**:
  - **Logic Building Phase (C++)**: Grasping computational loops, memory layout, and resource architecture.
  - **System Structuring Phase (Backend)**: Moving from code scripts to scalable APIs and network layers.
  - **Experimentation Phase (AI Models)**: Understanding predictive math and data pipeline tuning.
  - **Agent Thinking Phase (Automation)**: Orchestrating autonomous workflows and prompt-chained task executors.
  - **Product Thinking Phase (Startup Vision)**: Fusing electronics, backend scale, and agent intelligence into cohesive user products.

#### [NEW] [src/sections/Contact.tsx](file:///c:/Users/mahma/OneDrive/Desktop/VS%20code%20codings/my%20projects/portfolio/src/sections/Contact.tsx)
- Glassmorphic card mapping critical gateways (Email, GitHub, LinkedIn, Phone).
- A clean, authoritative exit footer containing copyright and system stats.

---

### Phase 4: Motion & Ambient Systems

#### [NEW] [src/lib/animations.ts](file:///c:/Users/mahma/OneDrive/Desktop/VS%20code%20codings/my%20projects/portfolio/src/lib/animations.ts)
Implement three distinct motion layers with exact physics criteria:
- **Eases & Durations**: Every animation must use `easing: cubic-bezier(0.22, 1, 0.36, 1)` (easeOutQuart) and duration within `0.6s to 1.2s`. Linear animations are strictly forbidden.
- **Scroll Physics**: Implement smooth, weighted scroll mechanics instead of instant cuts or browser default jumps to convey depth and premium momentum.
- **Visual Layers**:
  1. **Micro Motion**: Subtle hover lifts (2–4px), text scaling (1.02x), and light cursor magnetic pull.
  2. **Section Motion**: Smooth fade + blur reveal transitions triggered when elements enter the viewport.
  3. **Background Motion**: Extremely slow, drifting radial glow coordinates and a subtle parallax offset of the background layers relative to scroll depth.

---

## Verification Plan

### Automated Verification
- Execute compile checks (`npm run build`) and type validations.
- Verify production bundles for speed optimization (Next.js performance thresholds).

### Manual Verification
- Test scroll physics, mobile stacked adjustments, and responsiveness.
- Check navbar link transitions and active element scroll spies.
