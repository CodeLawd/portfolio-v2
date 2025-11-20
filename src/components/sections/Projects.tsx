"use client";

import React from "react";
import { PROJECTS } from "@/config/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="mb-24">
      <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-widest mb-8">
        Selected Work
      </h3>
      <div className="grid gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group bg-zinc-900/30 rounded-lg pl-0 p-6 hover:border-zinc-700 transition-colors"
          >
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-zinc-100 font-medium text-lg group-hover:text-[#fac748] transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </h4>
                <span className="text-xs font-mono text-zinc-500">{project.role}</span>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
