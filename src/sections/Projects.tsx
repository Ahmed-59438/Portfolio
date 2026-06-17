"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  problem: string;
  approach: string;
  impact: string;
  href?: string;
}

const projects: ProjectItem[] = [
  {
    id: "rental-intel",
    number: "01",
    tag: "Proptech × ML",
    title: "AI Rental Intelligence System",
    description: "Designed as an end-to-end intelligent platform to mitigate fraud and optimize listings in rental markets.",
    problem: "Rental property ecosystems face high friction due to fraudulent applications, unverified identity credentials, and static pricing structures.",
    approach: "Architected a multi-layered verification pipeline using predictive classification models for fraud risk scoring and dynamic price optimization engines.",
    impact: "Significantly reduces transaction risk and automates tenant matching logic through unified system telemetry.",
    href: "https://github.com/Ahmed-59438",
  },
  {
    id: "model-journey",
    number: "02",
    tag: "ML Research",
    title: "AI Model Development Journey",
    description: "Formulating clean dataset engineering structures and automated machine learning experiments.",
    problem: "Iterative training processes often suffer from poor tracking, unoptimized dataset preprocessing, and manual hyperparameter tuning.",
    approach: "Designed training loops in Google Colab executing parallel parameter optimization trials, utilizing experiment tracking dashboards for model training metrics.",
    impact: "Accelerates model convergence and provides structured analysis of training iterations and loss optimization.",
    href: "https://github.com/Ahmed-59438",
  },
  {
    id: "backend-arch",
    number: "03",
    tag: "API Architecture",
    title: "Backend Architecture System",
    description: "Structuring production-ready high-availability CRUD frameworks with robust middleware logic.",
    problem: "Distributed systems scale poorly without strict request validation protocols, rate-limiting layers, and query optimization patterns.",
    approach: "Implemented modular API architectures using Node/Express, securing routes via custom validation middleware, token-based sessions, and database index layering.",
    impact: "Achieves predictable sub-100ms API response latency and guarantees horizontal scale capacity under heavy workloads.",
    href: "https://github.com/Ahmed-59438",
  },
  {
    id: "agent-workflow",
    number: "04",
    tag: "Agentic Workflows",
    title: "AI Agent Workflow System",
    description: "Orchestrating autonomous logic pipelines using advanced prompt chaining and event-driven triggers.",
    problem: "Traditional script-based automations fail to handle unstructured real-time inputs or recover gracefully from workflow API errors.",
    approach: "Developed state-machine workflow architectures using n8n and Python, mapping complex prompt chains with structured output parser boundaries.",
    impact: "Automates multi-system tasks autonomously, ensuring high accuracy via self-correction agent logic loops.",
    href: "https://github.com/Ahmed-59438",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-zinc-900/50"
    >
      <div className="relative w-full max-w-7xl mx-auto z-10">
        
        {/* Header Stack */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start text-left">
            <span className="font-heading text-xs font-bold text-[#FFB347] tracking-widest uppercase mb-4">
              // Projects
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Systems I've built
            </h2>
          </div>
          <div className="font-mono-custom text-sm text-zinc-500 tracking-wider">
            // 4 projects · ongoing
          </div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-[#0D0D0D] border border-white/5 hover:border-[#FFB347]/30 transition-all duration-500 hover:-translate-y-1.5 shadow-xl cursor-pointer focus-within:ring-2 focus-within:ring-[#FFB347]/50 overflow-hidden"
              tabIndex={0}
              aria-label={`Project card for ${project.title}`}
            >
              {/* Subtle background glow hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8A00]/0 via-[#FF8A00]/0 to-[#FF8A00]/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                {/* Top Row Details */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-heading text-2xl font-bold text-zinc-700 group-hover:text-[#FFB347]/40 transition-colors duration-500">
                    {project.number}
                  </span>
                  <span className="px-3 py-1 rounded-full border border-white/5 bg-[#050505]/60 font-heading text-[10px] sm:text-xs font-semibold text-zinc-400 tracking-wider uppercase backdrop-blur-sm group-hover:border-[#FFB347]/20 group-hover:text-[#FFB347] transition-all duration-500">
                    {project.tag}
                  </span>
                </div>

                {/* Main Content */}
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white group-hover:text-glow-amber transition-all duration-500 mb-4">
                  {project.title}
                </h3>
                
                <p className="font-sans text-zinc-400 text-sm sm:text-base font-normal leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Editorial Details System */}
                <div className="space-y-4 border-t border-zinc-900/60 pt-6 mt-6">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-heading text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">
                      Problem Context
                    </span>
                    <span className="font-sans text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed">
                      {project.problem}
                    </span>
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="font-heading text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">
                      System Approach
                    </span>
                    <span className="font-sans text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed">
                      {project.approach}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              {project.href && (
                <div className="flex items-center justify-end mt-8 pt-4 border-t border-zinc-900/40">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Link to source code for ${project.title}`}
                    className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-[#FFB347] tracking-wider uppercase hover:text-white transition-colors duration-300 focus:outline-none"
                  >
                    View System Source
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
