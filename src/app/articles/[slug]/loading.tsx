import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-[#fac748]/30">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-zinc-900 w-3/4 rounded"></div>
          <div className="h-4 bg-zinc-900 w-1/4 rounded"></div>
          <div className="h-64 bg-zinc-900 rounded"></div>
          <div className="space-y-4">
            <div className="h-4 bg-zinc-900 rounded"></div>
            <div className="h-4 bg-zinc-900 rounded"></div>
            <div className="h-4 bg-zinc-900 w-5/6 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
