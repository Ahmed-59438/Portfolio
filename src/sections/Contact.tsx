"use client";

import React from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "m.ahmad59438@gmail.com",
    href: "mailto:m.ahmad59438@gmail.com",
    icon: <Mail size={20} className="text-[#FFB347]" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-ahmed-340531338",
    href: "https://www.linkedin.com/in/muhammad-ahmed-340531338",
    icon: (
      <svg className="w-5 h-5 text-[#FFB347]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Ahmed-59438",
    href: "https://github.com/Ahmed-59438",
    icon: (
      <svg className="w-5 h-5 text-[#FFB347]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+92 328 0788061",
    href: "tel:+923280788061",
    icon: <Phone size={20} className="text-[#FFB347]" />,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-zinc-900/50"
    >
      {/* Volumetric background glow */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 z-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FF8A00] opacity-[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-5xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-heading text-xs font-bold text-[#FFB347] tracking-widest uppercase mb-4">
            // Gateway
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Initiate Contact
          </h2>
          <p className="font-sans text-zinc-400 text-base sm:text-lg font-light leading-relaxed max-w-md mt-4">
            Let's build systems that perform, scale, and learn.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Phone" && link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Phone" && link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between p-6 rounded-2xl bg-[#0D0D0D] border border-white/5 hover:border-[#FFB347]/30 transition-all duration-500 hover:-translate-y-1 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#FFB347]/50"
              aria-label={`Contact via ${link.label}: ${link.value}`}
            >
              <div className="flex items-center gap-4 text-left">
                <div className="p-3.5 rounded-xl bg-[#050505] border border-white/5 group-hover:border-[#FFB347]/20 transition-colors duration-500">
                  {link.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">
                    {link.label}
                  </span>
                  <span className="font-sans text-zinc-300 text-sm sm:text-base font-light group-hover:text-white transition-colors duration-500 break-all">
                    {link.value}
                  </span>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-zinc-600 group-hover:text-[#FFB347] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* Footer info */}
        <div className="flex flex-col items-center justify-center pt-12 border-t border-zinc-900/60 font-mono-custom text-[10px] sm:text-xs text-zinc-600 tracking-wider">
          <span>© {new Date().getFullYear()} MUHAMMAD AHMED. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </section>
  );
}
