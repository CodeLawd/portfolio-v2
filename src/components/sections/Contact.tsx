"use client";

import React from "react";
import { ENGINEER_PROFILE } from "@/config/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="mb-24">
      <div className=" bg-zinc-900/30 rounded-lg pl-0 p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
          Take a coffee ☕ and let's talk
        </h3>
        <p className="text-zinc-400 leading-relaxed mb-2">
          Got a question or proposal, or just want to say hello?
        </p>
        <p className="text-zinc-400 leading-relaxed mb-8">
          Go ahead.
        </p>
        <a
          href={`mailto:${ENGINEER_PROFILE.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#fac748] text-zinc-950 font-semibold rounded-lg hover:bg-[#fac748]/90 transition-colors group"
        >
          Say Hello
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
}
