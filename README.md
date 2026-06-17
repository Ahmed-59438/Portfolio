# Muhammad Ahmed | AI Systems Builder Portfolio

A premium, cinematic personal portfolio engineered to showcase technical capabilities at the intersection of **Artificial Intelligence orchestration**, **high-availability backend systems**, and **embedded hardware circuits**.

---

## 🛠️ Tech Stack & Architecture

This project was built from the ground up prioritizing speed, design aesthetics, and robust viewport adaptability:

*   **Framework:** [Next.js](https://nextjs.org/) (App Router) & React 19 — Chosen for instant page transitions, native server-side pre-rendering, and robust component architecture.
*   **Language:** [TypeScript](https://www.typescript.org/) — Ensures full static type checking, preventing runtime execution faults and securing state transitions.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) — Leveraged for modular styling, fluid spacing tokens, and absolute consistency with a high-fidelity Figma design system.
*   **Animations:** [Framer Motion](https://www.framer.com/motion/) — Powers cinematic page-load animations, progressive scroll-spy active state tracking, and adaptive coordinate-based mouse tilt effects.
*   **Icons & Assets:** Optimized Inline SVGs — Swapped heavy external packages with raw vector graphics to keep the production bundle extremely lightweight and prevent compilation warnings.

---

## 🧠 Why This Tech Stack? (Architectural Choices)

1.  **Sub-100ms Performance & SEO:** 
    Using Next.js App Router allows us to statically pre-render the pages. This yields near-zero load times, clean search engine indexability, and immediate image loading.
2.  **Fluid Motion & Interface Contrast:** 
    A startup-grade website must feel alive. Framer Motion drives subtle micro-interactions (e.g. project card elevations, line progress trackers) that scale down cleanly. Radial amber glows (`#FFB347` & `#FF8A00`) blend into an absolute black background (`#050505`) to create visual depth.
3.  **Adaptive Responsive Engineering:**
    Instead of relying on heavy Javascript listener loops for layout scaling, layouts utilize native CSS grid structures (`grid-cols-1 md:grid-cols-2 lg:grid-cols-12`). This moves layout computation to the browser's render thread, keeping scrolling butter-smooth on mobile devices.

---

## ⚡ Engineering & Optimization Highlights

To deliver a high-quality production website, several platform-specific optimizations were implemented:

*   **Windows Font ClearType Fix:** To bypass a common Windows subpixel font rasterizer bug where thin font weights (`font-light` / 300) render with jagged edges and uneven spacing, the typography uses a normalized `font-normal` (400) weight combined with custom letter-spacing (`-0.0125em`) and `text-rendering: optimizeLegibility`. This keeps body text razor-sharp across all platforms.
*   **React Rules of Hooks Adherence:** Avoided hydration mismatch crashes by moving vector coordinates and transforms to the component's top-level state.
*   **Adaptive Viewport Optimization:**
    *   Dynamic mouse-tilt and parallax animations are programmatically bypassed on touchscreens to protect performance.
    *   Radial ambient glow opacities are reduced by over 40% on mobile to preserve readability contrast.
    *   Default Next.js SVG templates and documentation files have been completely cleaned out to keep the workspace lightweight.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or later).

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Ahmed-59438/Portfolio.git
    cd Portfolio
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Development Server

Run the development server locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build Production

Build the optimized production package:
```bash
npm run build
```
This compiles the application, runs TypeScript checks, and exports optimized static chunks under the `.next` directory.
