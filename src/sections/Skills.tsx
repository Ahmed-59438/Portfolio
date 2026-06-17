"use client";

import React from "react";

interface SkillCluster {
  category: string;
  skills: string[];
}

const skillClusters: SkillCluster[] = [
  {
    category: "Core Competencies",
    skills: ["AI Systems", "Backend Architecture", "System Design Thinking"],
  },
  {
    category: "Languages & Hardware",
    skills: ["C++", "Python", "Arduino / Embedded Circuits"],
  },
  {
    category: "Tools & Ecosystems",
    skills: ["Google Colab", "GitHub", "n8n", "Claude", "Vapi", "Grok"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-zinc-900/50"
    >
      {/* Volumetric ambient background glow */}
      <div className="absolute top-[20%] right-[5%] z-0 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-[#FF8A00] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="font-heading text-xs font-bold text-[#FFB347] tracking-widest uppercase mb-4">
            // Capabilities
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Technical Stack
          </h2>
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillClusters.map((cluster, idx) => (
            <div
              key={idx}
              className="group flex flex-col p-8 rounded-2xl bg-[#0D0D0D] border border-white/5 hover:border-[#FFB347]/30 transition-all duration-500 shadow-xl"
            >
              {/* Category Title */}
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-6 tracking-wide">
                {cluster.category}
              </h3>

              {/* Badges container */}
              <div className="flex flex-wrap gap-2.5">
                {cluster.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-2 rounded-lg border border-white/5 bg-[#050505] font-mono-custom text-xs font-medium text-zinc-400 tracking-wide hover:border-[#FFB347]/30 hover:text-[#FFB347] transition-all duration-300 select-none shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
