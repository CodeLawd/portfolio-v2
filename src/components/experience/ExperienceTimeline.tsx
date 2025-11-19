"use client";

import React from "react";
import { ExperienceItem } from "@/types";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface ExperienceTimelineProps {
  data: ExperienceItem[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ data }) => {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar pr-4">
      <div className="relative pl-8 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[2px] before:bg-slate-800">
        {data.map((item, index) => (
          <div key={item.id} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[29px] top-2 w-6 h-6 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center group-hover:border-emerald-500 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all z-10">
              <div className="w-2 h-2 bg-slate-500 rounded-full group-hover:bg-emerald-400 transition-colors" />
            </div>

            {/* Content Card */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:bg-slate-900/60 hover:border-slate-700 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                    {item.role}
                  </h3>
                  <div className="text-emerald-500 font-mono text-sm mt-1 flex items-center gap-2">
                    <Briefcase className="w-3 h-3" />
                    {item.company}
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 text-xs text-slate-500 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {item.description.map((desc, i) => (
                  <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                    <span className="text-emerald-500/50 mt-1.5">▹</span>
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-950 text-slate-400 text-[10px] font-mono rounded border border-slate-800/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors"
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

export default ExperienceTimeline;
