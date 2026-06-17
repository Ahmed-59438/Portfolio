"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { containerVariants, fadeInUpVariants, fadeInVariants } from "@/lib/animations";
import Button from "@/components/Button";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check mobile screen size and touch support
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse tilt animation coordinates (Desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const tiltX = useSpring(mouseY, springConfig);
  const tiltY = useSpring(mouseX, springConfig);

  // Rotate max 8 degrees on mouse move
  const rotateX = useTransform(tiltX, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(tiltY, [-0.5, 0.5], [-4, 4]);

  // Parallax transform values (top-level hooks)
  const parallaxX = useTransform(mouseX, [-0.5, 0.5], [10, -10]);
  const parallaxY = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Normalize coordinates to -0.5 to 0.5 range
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center bg-[#050505] pt-28 pb-20 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
      id="hero"
    >
      {/* 1. Background Layer (Deep Black) */}
      <div className="absolute inset-0 bg-[#050505] z-0" />

      {/* 2. Glow Layer (Radial amber glows overlaying the head/image boundary to blend them seamlessly) */}
      {/* Dimmed by 40% on mobile (opacity 0.15 on mobile, 0.25 on desktop) */}
      <div className="absolute top-[35%] md:top-[25%] right-[10%] md:right-[20%] z-30 w-[280px] md:w-[450px] h-[280px] md:h-[450px] bg-[#FF8A00] opacity-15 md:opacity-25 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[20%] left-[10%] z-10 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-[#FF8A00] opacity-5 md:opacity-10 rounded-full blur-[90px] pointer-events-none mix-blend-screen" />

      {/* 3. Portrait Layer (Cinematic background-integrated image - Desktop only) */}
      <motion.div
        style={{
          x: isMobile ? 0 : parallaxX,
          y: isMobile ? 0 : parallaxY,
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 0.95, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="hidden md:block absolute inset-y-0 right-0 w-[60%] lg:w-[50%] h-full z-20 pointer-events-none"
      >
        <div className="relative w-full h-full">
          {/* Using raw <img> tag to bypass Next.js image optimization compression and achieve pixel-perfect HD quality */}
          <img
            src="/images/hero-portrait.png"
            alt="Muhammad Ahmed Portrait"
            className="absolute inset-0 w-full h-full object-cover object-right-top select-none"
            style={{
              opacity: 0.95,
              maskImage: "linear-gradient(to right, transparent 24%, black 52%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 24%, black 52%)",
              imageRendering: "high-quality" as any,
            }}
          />

          {/* Mask Fades: Blending directly into #050505 background via CSS mask-image */}
          
          {/* Bottom Edge Fade */}
          <div className="absolute bottom-0 inset-x-0 h-[35%] bg-gradient-to-t from-[#050505] via-[#050505]/65 to-transparent z-30 pointer-events-none" />
        </div>
      </motion.div>

      {/* 4. Text & Badges Layer (Foreground, positioned above the image) */}
      <div className="relative w-full max-w-7xl z-40 flex flex-col md:grid md:grid-cols-12 gap-8 items-center pointer-events-none">
        
        {/* Mobile-Only Portrait (Left-aligned above the name, matching design language) */}
        <div className="md:hidden w-full flex justify-start mb-2 pointer-events-auto">
          <div className="relative w-36 h-36 rounded-2xl overflow-hidden border border-[#FFB347]/20 shadow-[0_0_25px_rgba(255,138,0,0.15)] bg-[#0D0D0D]">
            <img
              src="/images/hero-portrait.png"
              alt="Muhammad Ahmed Portrait"
              className="w-full h-full object-cover object-[70%_0%] scale-105 select-none"
              style={{
                imageRendering: "high-quality" as any,
              }}
            />
            {/* Subtle bottom dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Left-Aligned Identity Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full col-span-1 md:col-span-8 lg:col-span-7 flex flex-col items-start text-left pointer-events-auto"
        >
          {/* H1 - Name: Largest, dominant */}
          <motion.h1
            variants={fadeInUpVariants}
            className="text-glow-amber font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] mb-6 sm:mb-8"
          >
            Muhammad <br />
            <span className="text-[#FFB347]">Ahmed</span>
          </motion.h1>

          {/* Tagline - Secondary narrative */}
          <motion.p
            variants={fadeInUpVariants}
            className="text-zinc-300 font-sans text-lg sm:text-xl md:text-2xl font-normal tracking-tight leading-relaxed max-w-xl mb-6 sm:mb-8"
          >
            Building intelligent systems at the intersection of AI, backend engineering, and electronics
          </motion.p>

          {/* Labels - Space Grotesk system identity (Pill tags) */}
          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-wrap gap-2 mb-8 sm:mb-12 max-w-lg"
          >
            <span className="px-3.5 py-1.5 rounded-full border border-[#FFB347]/20 bg-[#0D0D0D]/80 font-heading text-xs font-bold text-[#FFB347] tracking-wider uppercase backdrop-blur-sm shadow-[0_0_10px_rgba(255,179,71,0.05)]">
              // Electronics & Computing Student
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-[#FFB347]/20 bg-[#0D0D0D]/80 font-heading text-xs font-bold text-[#FFB347] tracking-wider uppercase backdrop-blur-sm shadow-[0_0_10px_rgba(255,179,71,0.05)]">
              // Future AI Founder
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-[#FFB347]/20 bg-[#0D0D0D]/80 font-heading text-xs font-bold text-[#FFB347] tracking-wider uppercase backdrop-blur-sm shadow-[0_0_10px_rgba(255,179,71,0.05)]">
              // AI Systems Builder
            </span>
          </motion.div>

          {/* CTAs - Smallest, functional layer */}
          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto"
          >
            <Button
              href="mailto:m.ahmad59438@gmail.com"
              variant="primary"
              ariaLabel="Email Muhammad Ahmed"
              className="w-full sm:w-auto text-center"
              normalCase
            >
              <Mail size={16} />
              m.ahmad59438@gmail.com
            </Button>
            <Button
              href="https://www.linkedin.com/in/muhammad-ahmed-340531338"
              variant="glass"
              ariaLabel="Muhammad Ahmed LinkedIn Profile"
              className="w-full sm:w-auto text-center"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
              <ArrowUpRight size={14} className="text-zinc-500" />
            </Button>
            <Button
              href="tel:+923280788061"
              variant="secondary"
              ariaLabel="Call Muhammad Ahmed"
              className="w-full sm:w-auto text-center"
            >
              <Phone size={16} />
              +92 3280788061
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
