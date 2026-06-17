"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ELITE_EASE } from "@/lib/animations";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "glass" | "accent";
  ariaLabel: string;
  normalCase?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  className = "",
  variant = "glass",
  ariaLabel,
  normalCase = false,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Spring physics for smooth hover magnetic pull
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Light magnetic pull (15px maximum deflection)
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * 0.25);
    y.set(distanceY * 0.25);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-[#FFB347] text-[#050505] font-semibold hover:bg-white shadow-[0_0_20px_rgba(255,179,71,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]";
      case "secondary":
        return "border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent";
      case "accent":
        return "border border-[#FFB347]/30 text-[#FFB347] hover:bg-[#FFB347]/10 hover:border-[#FFB347]/60 shadow-[0_0_15px_rgba(255,179,71,0.05)]";
      case "glass":
      default:
        return "glassmorphism text-zinc-300 hover:text-white border border-white/5 hover:border-white/20";
    }
  };

  const baseStyles = `relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-mono-custom tracking-wider ${
    normalCase ? "normal-case" : "uppercase"
  } transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFB347]/50 focus:ring-offset-2 focus:ring-offset-[#050505] cursor-pointer select-none`;

  const motionProps = prefersReducedMotion
    ? {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
      }
    : {
        style: { x: springX, y: springY },
        whileHover: { scale: 1.02, transition: { duration: 0.3, ease: ELITE_EASE } },
        whileTap: { scale: 0.98, transition: { duration: 0.1, ease: ELITE_EASE } },
      };

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`${baseStyles} ${getVariantStyles()} ${className}`}
        {...motionProps}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {isHovered && !prefersReducedMotion && (
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#FF8A00]/5 to-transparent blur-sm pointer-events-none animate-pulse" />
        )}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${getVariantStyles()} ${className}`}
      {...motionProps}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {isHovered && !prefersReducedMotion && (
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#FF8A00]/5 to-transparent blur-sm pointer-events-none animate-pulse" />
      )}
    </motion.button>
  );
}
