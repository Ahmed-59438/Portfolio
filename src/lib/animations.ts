// Premium Physics-based Easing Curve (easeOutQuart)
export const ELITE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Stagger animation container
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Subtle fade-in up reveal animation
export const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: ELITE_EASE,
    },
  },
};

// Fade-in reveal animation
export const fadeInVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.0,
      ease: ELITE_EASE,
    },
  },
};

// Hero Portrait reveal animation
export const portraitVariants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 0.8, // 80% opacity as defined in Figma blend options
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: ELITE_EASE,
      delay: 0.2,
    },
  },
};

// Floating animation for portraits or glowing backgrounds
export const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
