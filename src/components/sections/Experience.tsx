"use client";

import React from "react";
import { EXPERIENCE_DATA } from "@/config/data/portfolio";

export default function Experience() {
  return (
    <section className="mb-24">
      <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-widest mb-8">
        Experience
      </h3>
      <div className="space-y-12">
        {EXPERIENCE_DATA.map((role) => (
          <div
            key={role.id}
            className="group grid md:grid-cols-[120px_1fr] gap-4"
          >
            <div className="text-sm text-zinc-500 font-mono pt-1">
              {role.period}
            </div>
            <div className="flex-1 group">
              <h4 className="text-zinc-100 font-medium text-lg mb-1 group-hover:text-[#fac748] transition-colors">
                {role.role} · {role.company}
              </h4>
              <p className="text-zinc-400 leading-relaxed mb-4">
                {role.description[0]}
              </p>
              <div className="flex flex-wrap gap-2">
                {role.tech.map((tech) => (
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
