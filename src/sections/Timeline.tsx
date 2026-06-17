"use client";

import React from "react";

interface TimelineEvent {
  phase: string;
  title: string;
  description: string;
  details: string;
}

const events: TimelineEvent[] = [
  {
    phase: "PHASE 01",
    title: "Logic Building & Fundamentals",
    description: "Deep dive into computational loops, memory management, and resource architectures using C++.",
    details: "Learned pointers, memory constraints, and core algorithms, establishing a foundational discipline in code efficiency and resource management.",
  },
  {
    phase: "PHASE 02",
    title: "Systems Structuring & Backend API Scale",
    description: "Transitioned from scripts to distributed RESTful architectures using Node.js and Express.",
    details: "Architected CRUD endpoints with strict validation middleware, database indexing patterns, rate limiters, and sub-100ms response latencies.",
  },
  {
    phase: "PHASE 03",
    title: "Intelligence & Data Experimentation",
    description: "Constructed data pipelines and trained predictive models.",
    details: "Built machine learning pipelines using Google Colab, engineering features, optimizing hyperparameters, and tracking convergence curves.",
  },
  {
    phase: "PHASE 04",
    title: "Agentic Logic & Orchestration",
    description: "Wired autonomous logic pipelines using advanced workflow state-machines.",
    details: "Designed event-driven prompt chains and auto-correcting agent loops using python scripts and n8n orchestration nodes.",
  },
  {
    phase: "PHASE 05",
    title: "Cohesive Product Engineering",
    description: "Fusing hardware interfaces, backend scaling, and intelligence into consumer products.",
    details: "Integrating physical microcontrollers (Arduino), cloud databases, and AI models into unified systems addressing real-world problems.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-zinc-900/50"
    >
      {/* Background glow bloom */}
      <div className="absolute bottom-[10%] left-[5%] z-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#FF8A00] opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-5xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-20">
          <span className="font-heading text-xs font-bold text-[#FFB347] tracking-widest uppercase mb-4">
            // Narrative
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Evolution Path
          </h2>
        </div>

        {/* Timeline structure */}
        <div className="relative border-l border-zinc-800/80 ml-4 md:ml-6 pl-8 md:pl-12 space-y-16">
          {events.map((event, idx) => (
            <div key={idx} className="relative group text-left">
              {/* Glowing vertical node marker */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#0D0D0D] border-2 border-zinc-800 group-hover:border-[#FFB347] transition-colors duration-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-[#FFB347] transition-colors duration-500 shadow-[0_0_8px_rgba(255,179,71,0.5)]" />
              </div>

              {/* Event Stack */}
              <div className="flex flex-col items-start max-w-3xl">
                {/* Phase identifier - Monospace */}
                <span className="font-mono-custom text-xs font-semibold text-[#FFB347] tracking-widest mb-2 uppercase">
                  {event.phase}
                </span>

                {/* Event Title - Heading */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 tracking-wide">
                  {event.title}
                </h3>

                {/* Short narrative descriptor */}
                <p className="font-sans text-zinc-300 text-sm sm:text-base font-normal leading-relaxed mb-3">
                  {event.description}
                </p>

                {/* Detailed technical breakdown */}
                <p className="font-sans text-zinc-500 text-xs sm:text-sm font-normal leading-relaxed pl-4 border-l border-zinc-900 group-hover:border-zinc-800 transition-colors duration-500">
                  {event.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
