"use client";

import React, { useState } from "react";
import { Project } from "@/types";
import { ExternalLink, Github, Code2 } from "lucide-react";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>("All");

  // Extract all unique tech stack items for filter
  const allTech = Array.from(
    new Set(projects.flatMap((p) => p.techStack))
  ).sort();
  const filters = ["All", ...allTech];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.techStack.includes(filter));

  return (
    <div className="flex flex-col h-full gap-6">
      {/* Filter Bar */}
      <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar shrink-0">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 text-[10px] uppercase tracking-wider rounded border transition-all whitespace-nowrap ${
              filter === f
                ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                : "bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 overflow-y-auto custom-scrollbar pr-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] flex flex-col"
          >
            {/* Image Area */}
            <div className="h-40 bg-slate-950 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="px-2 py-1 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[10px] rounded uppercase tracking-wider font-mono">
                  {project.role}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-header text-lg text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <button className="p-1.5 text-slate-500 hover:text-white hover:bg-slate-800 rounded transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-500 hover:text-emerald-400 hover:bg-slate-800 rounded transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] text-slate-500 font-mono px-1.5 py-0.5 bg-slate-950 rounded border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
