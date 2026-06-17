"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUpVariants, fadeInVariants } from "@/lib/animations";

export default function About() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
      };

  return (
    <section
      id="about"
      className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#050505] py-24 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-zinc-900/50"
    >
      {/* Subtle background glow behind the card */}
      <div className="absolute top-[30%] left-[5%] z-0 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-[#FF8A00] opacity-5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative w-full max-w-7xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Portrait Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 shadow-2xl group">
            {/* Ambient amber rim glow behind the card boundary */}
            <div className="absolute inset-0 bg-[#FFB347]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 blur-sm" />
            
            {/* Raw <img> tag to maintain original HD clarity and contrast */}
            <img
              src="/images/about-portrait.png"
              alt="Muhammad Ahmed Editorial Portrait"
              className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-102"
              style={{
                imageRendering: "high-quality" as any,
              }}
            />

            {/* Subtle glassmorphic inner shadow ring overlay */}
            <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none z-20" />
            
            {/* Left/Bottom dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/30 to-transparent pointer-events-none z-10" />
          </div>
        </div>

        {/* Right Column: Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Section Indicator */}
          <span className="font-heading text-xs font-bold text-[#FFB347] tracking-widest uppercase mb-4">
            // About
          </span>

          {/* Heading - Space Grotesk */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-8">
            I build systems, <br />
            <span className="text-[#FFB347]">not just projects.</span>
          </h2>

          {/* Body Narrative - Manrope */}
          <div className="font-sans text-zinc-300 text-base sm:text-lg font-normal leading-relaxed space-y-6 max-w-2xl">
            <p>
              I architect intelligent solutions driven by a deep curiosity about complex systems. 
              My design philosophy is grounded in systems thinking — moving away from isolated features 
              and focusing on cohesive, scalable architectures that learn and adapt.
            </p>
            <p>
              Whether structuring high-throughput backend APIs, configuring autonomous multi-agent automation 
              workflows, or wiring low-level embedded hardware like Arduino, the engineering objective 
              remains identical: construct something structured, robust, and highly optimized.
            </p>
            <p className="border-l-2 border-[#FFB347]/30 pl-4 text-zinc-400 font-normal italic">
              "Working at the intersection of AI orchestration, microservices backend scale, and physical computing."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
