import React from "react";
import { ENGINEER_PROFILE } from "@/config/data/portfolio";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <h1 className="text-4xl font-bold text-white tracking-tight mb-4">
        {ENGINEER_PROFILE.name}
      </h1>
      <h2 className="text-xl text-zinc-400 font-medium mb-6">
        {ENGINEER_PROFILE.title}
      </h2>
      <p className="text-zinc-400 leading-relaxed max-w-xl mb-8 text-base">
        {ENGINEER_PROFILE.bio}
      </p>

      {/* Download CV Button */}
      <div className="mb-8">
        <a
          href="/Joshua Alexander Resume.pdf"
          download="Joshua_Alexander_CV.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 border border-white/40 text-white/80 font-medium rounded-lg transition-colors text-xs hover:text-white hover:border-white"
        >
          <Download className="w-4 h-4" />
          Download CV
        </a>
      </div>

      <div className="flex gap-6">
        <a href={ENGINEER_PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href={ENGINEER_PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href={`mailto:${ENGINEER_PROFILE.email}`} className="text-zinc-500 hover:text-white transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
