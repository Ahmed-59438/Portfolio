"use client";

import React, { useEffect, useState } from "react";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Timeline", id: "timeline" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close mobile menu on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;

      // 2. Trigger scrolled state for backdrop styling
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 3. Scroll spy tracker
      const scrollPosition = currentScrollY + 160; // Offset for navbar height and leeway
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // offset navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`w-full transition-all duration-500 ${
          isScrolled || isOpen
            ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "hero")}
            className="font-heading text-lg font-bold text-white tracking-widest uppercase focus:outline-none"
            aria-label="Navigate to Hero section"
          >
            M<span className="text-[#FFB347]">A</span>.
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`font-heading text-sm tracking-wide transition-all duration-300 focus:outline-none ${
                  activeSection === item.id
                    ? "text-[#FFB347] font-semibold"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-full border border-white/5 bg-[#0D0D0D] text-zinc-400 hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden w-full px-6 pt-6 pb-4 flex flex-col gap-4 border-t border-white/5 mt-4 bg-[#050505]/95 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`font-heading text-sm tracking-widest uppercase transition-all duration-300 py-1 ${
                  activeSection === item.id
                    ? "text-[#FFB347] font-semibold pl-3 border-l-2 border-[#FFB347]"
                    : "text-zinc-400 hover:text-zinc-200 pl-3 border-l-2 border-transparent"
                }`}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
