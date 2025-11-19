"use client";

import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Code2,
  Terminal as TerminalIcon,
  Power,
  Activity,
  Github,
  Linkedin,
  Mail,
  Briefcase,
} from "lucide-react";
import SkillGraph from "@/components/dashboard/SkillGraph";
import Terminal from "@/components/terminal/Terminal";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import {
  SKILL_GRAPH_DATA,
  PROJECTS,
  EXPERIENCE_DATA,
  ENGINEER_PROFILE,
} from "@/config/data/portfolio";
import { ViewMode } from "@/types";

const HomePage: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewMode>(ViewMode.DASHBOARD);
  const [booting, setBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [systemOff, setSystemOff] = useState(false);

  // Simulated Boot Sequence
  useEffect(() => {
    const timer = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setBooting(false), 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  const handleShutdown = () => {
    setSystemOff(true);
  };

  const handleReboot = () => {
    setSystemOff(false);
    setBooting(true);
    setBootProgress(0);
  };

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  if (systemOff) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center font-mono text-slate-600 relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,1),rgba(0,0,0,1))]"></div>
        <div className="z-10 text-center space-y-6">
          <Power className="w-20 h-20 mx-auto opacity-20 text-red-900" />
          <div>
            <h2 className="text-2xl tracking-widest uppercase text-slate-500">
              System Standby
            </h2>
            <p className="text-xs mt-2 text-slate-700">SESSION_ID: NULL</p>
          </div>
          <button
            onClick={handleReboot}
            className="px-8 py-3 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-500 rounded-none text-sm transition-all tracking-widest uppercase hover:bg-emerald-950/10"
          >
            [ Initialize Reboot ]
          </button>
        </div>
      </div>
    );
  }

  if (booting) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center font-mono text-emerald-500">
        <div className="w-80 mb-6">
          <div className="flex justify-between text-xs mb-2 font-bold tracking-wider">
            <span>SYSTEM_INIT</span>
            <span>{Math.min(100, Math.floor(bootProgress))}%</span>
          </div>
          <div className="h-1 bg-emerald-950 rounded-none  relative">
            <div
              className="h-full bg-emerald-500 transition-all duration-100 ease-out relative shadow-[0_0_10px_rgba(16,185,129,0.8)]"
              style={{ width: `${bootProgress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-50"></div>
            </div>
          </div>
        </div>
        <div className="text-[10px] space-y-1 opacity-70 font-mono h-20 text-center">
          <p className="text-emerald-700">&gt; Loading Kernel...</p>
          {bootProgress > 20 && (
            <p className="text-emerald-600">
              &gt; Mounting React/NextJS modules...
            </p>
          )}
          {bootProgress > 40 && (
            <p className="text-emerald-500">
              &gt; Initializing AI Neural Uplink...
            </p>
          )}
          {bootProgress > 60 && (
            <p className="text-emerald-400">
              &gt; Decrypting Joshua&apos;s Portfolio Data...
            </p>
          )}
          {bootProgress > 80 && (
            <p className="text-emerald-300 animate-pulse">&gt; SYSTEM READY.</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-slate-950 text-slate-200 flex flex-col overflow-hidden selection:bg-emerald-500/30 font-mono relative">
      {/* Scanline Overlay - Moved here and pointer-events set to none explicitly to fix interaction issues */}
      <div className="absolute inset-0 animate-scanline pointer-events-none z-50"></div>

      {/* Top Navigation Bar */}
      <header className="h-16 border-b border-slate-800 bg-slate-900/80 backdrop-blur flex items-center justify-between px-4 md:px-6 relative z-40">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 bg-emerald-500/10 rounded border border-emerald-500/50 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <span className="font-header font-bold text-emerald-400 text-xl">
              J
            </span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-header font-bold text-lg tracking-wide text-white leading-tight">
              {ENGINEER_PROFILE.name}
            </h1>
            <p className="text-[10px] text-emerald-500 font-mono tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Online // {ENGINEER_PROFILE.title}
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2 p-1.5 bg-slate-900 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveView(ViewMode.DASHBOARD)}
            className={`flex items-center gap-2 px-4 py-2 rounded text-xs uppercase tracking-wider font-bold transition-all ${
              activeView === ViewMode.DASHBOARD
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/50"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Overview</span>
          </button>
          <button
            onClick={() => setActiveView(ViewMode.PROJECTS)}
            className={`flex items-center gap-2 px-4 py-2 rounded text-xs uppercase tracking-wider font-bold transition-all ${
              activeView === ViewMode.PROJECTS
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/50"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Modules</span>
          </button>
          <button
            onClick={() => setActiveView(ViewMode.EXPERIENCE)}
            className={`flex items-center gap-2 px-4 py-2 rounded text-xs uppercase tracking-wider font-bold transition-all ${
              activeView === ViewMode.EXPERIENCE
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/50"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Logs</span>
          </button>
          <button
            onClick={() => setActiveView(ViewMode.TERMINAL)}
            className={`flex items-center gap-2 px-4 py-2 rounded text-xs uppercase tracking-wider font-bold transition-all ${
              activeView === ViewMode.TERMINAL
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/50"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <TerminalIcon className="w-4 h-4" />
            <span>AI Uplink</span>
          </button>
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2 md:mr-4 md:border-r md:border-slate-800 md:pr-4">
            <button
              onClick={() => openLink(ENGINEER_PROFILE.github)}
              className="p-2 cursor-pointer text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </button>
            <button
              onClick={() => openLink(ENGINEER_PROFILE.linkedin)}
              className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                (window.location.href = `mailto:${ENGINEER_PROFILE.email}`)
              }
              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleShutdown}
            className="p-2 text-slate-500 hover:text-red-400 transition-colors hover:bg-red-950/20 rounded-lg"
            title="Shutdown System"
          >
            <Power className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex relative p-3 md:p-6 gap-6 z-10">
        {/* Left Column (Dynamic) */}
        <div
          className={`flex-1 flex flex-col gap-6 transition-all duration-500 h-full ${
            activeView === ViewMode.TERMINAL ? "md:w-1/2" : "w-full"
          }`}
        >
          {/* Conditional Views */}
          {activeView === ViewMode.DASHBOARD && (
            <div className="h-full flex flex-col xl:flex-row gap-6 overflow-y-auto custom-scrollbar">
              <div className="flex-1 flex flex-col gap-6 xl:h-full xl:overflow-y-auto xl:custom-scrollbar">
                {/* Intro Card */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 shadow-2xl relative shrink-0">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Code2 className="w-40 h-40" />
                  </div>
                  <div className="relative z-10">
                    <h2 className="font-header text-2xl mb-2 text-white">
                      Engineering the Future
                    </h2>
                    <p className="text-slate-400 leading-relaxed mb-5 max-w-2xl text-sm md:text-base">
                      {ENGINEER_PROFILE.bio}
                    </p>
                    <div className="flex gap-3 text-[10px] md:text-xs font-mono flex-wrap uppercase tracking-wider">
                      <div className="px-3 py-1.5 rounded bg-slate-950 border border-emerald-500/30 text-emerald-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        EXP: {ENGINEER_PROFILE.experience} YEARS
                      </div>
                      <div className="px-3 py-1.5 rounded bg-slate-950 border border-blue-500/30 text-blue-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        STACK: {ENGINEER_PROFILE.techStack.length} MODULES
                      </div>
                      <div className="px-3 py-1.5 rounded bg-slate-950 border border-rose-500/30 text-rose-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                        FOCUS: WEB. MOBILE AND AI
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skill Graph */}
                <div className="flex-1 relative bg-slate-900/30 rounded-xl border border-slate-800/50">
                  <div className="absolute top-3 left-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Activity className="w-3 h-3" />
                    Neural Skill Map
                  </div>
                  <SkillGraph data={SKILL_GRAPH_DATA} />
                </div>
              </div>

              {/* Side Panel for Dashboard */}
              <div className="w-full xl:w-96 flex flex-col gap-4 xl:h-full shrink-0 xl:">
                <div className="flex-1 bg-slate-900/50 rounded-xl border border-slate-800 p-5 overflow-y-auto custom-scrollbar">
                  <h3 className="text-xs font-bold text-slate-300 mb-4 flex items-center gap-2 uppercase tracking-widest border-b border-slate-800 pb-2">
                    <Activity className="w-3 h-3 text-emerald-500" />
                    System Logs (History)
                  </h3>
                  <div className="space-y-5">
                    {/* Preview of recent experience */}
                    {EXPERIENCE_DATA.slice(0, 3).map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-3 items-start group cursor-pointer"
                        onClick={() => setActiveView(ViewMode.EXPERIENCE)}
                      >
                        <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-shadow" />
                        <div>
                          <p className="text-xs text-slate-200 font-bold group-hover:text-emerald-400 transition-colors">
                            {item.role}
                          </p>
                          <p className="text-[11px] text-slate-400 leading-tight mt-1">
                            {item.company}
                          </p>
                          <p className="text-[9px] text-slate-600 mt-1 uppercase">
                            {item.period}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-800 text-center">
                    <button
                      onClick={() => setActiveView(ViewMode.EXPERIENCE)}
                      className="text-[10px] text-emerald-500 hover:text-emerald-400 uppercase tracking-widest"
                    >
                      View Full Logs
                    </button>
                  </div>
                </div>

                {/* Quick Chat Prompt */}
                <div
                  className="bg-emerald-950/30 border border-emerald-500/30 p-5 rounded-xl cursor-pointer hover:bg-emerald-900/20 transition-all group relative "
                  onClick={() => setActiveView(ViewMode.TERMINAL)}
                >
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TerminalIcon className="w-24 h-24 text-emerald-500" />
                  </div>
                  <p className="text-emerald-400 font-mono text-xs mb-2 font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-sm animate-pulse"></span>
                    ASK THE AI
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-3 relative z-10">
                    &quot;How much experience does Joshua have with AI Agents
                    and NestJS?&quot;
                  </p>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 uppercase border-b border-emerald-500/30 group-hover:text-emerald-400 group-hover:border-emerald-400 transition-all pb-0.5">
                      Initialize Terminal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === ViewMode.PROJECTS && (
            <div className="h-full flex flex-col ">
              <div className="flex justify-between items-end mb-4 px-2 shrink-0">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-emerald-500" />
                  <h2 className="font-header text-xl text-white">
                    Project Modules
                  </h2>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  TOTAL: {PROJECTS.length}
                </span>
              </div>
              <div className="flex-1 min-h-0">
                <ProjectGrid projects={PROJECTS} />
              </div>
            </div>
          )}

          {activeView === ViewMode.EXPERIENCE && (
            <div className="h-full flex flex-col ">
              <div className="flex justify-between items-end mb-4 px-2 shrink-0">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-emerald-500" />
                  <h2 className="font-header text-xl text-white">
                    System Logs
                  </h2>
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <ExperienceTimeline data={EXPERIENCE_DATA} />
              </div>
            </div>
          )}

          {activeView === ViewMode.TERMINAL && (
            <div className="h-full flex flex-col">
              <Terminal />
            </div>
          )}
        </div>

        {/* Persistent Side Terminal (Desktop only, when not in full terminal mode) */}
        {activeView !== ViewMode.TERMINAL && (
          <div className="hidden xl:block w-1/4 max-w-md h-full shrink-0">
            <Terminal />
          </div>
        )}
      </main>

      {/* Mobile Nav (Bottom) */}
      <nav className="md:hidden h-16 bg-slate-900 border-t border-slate-800 flex justify-around items-center px-4 z-50">
        <button
          onClick={() => setActiveView(ViewMode.DASHBOARD)}
          className={`flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
            activeView === ViewMode.DASHBOARD
              ? "text-emerald-400 bg-emerald-900/20"
              : "text-slate-500"
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-[9px] font-bold tracking-wide uppercase">
            Home
          </span>
        </button>
        <button
          onClick={() => setActiveView(ViewMode.PROJECTS)}
          className={`flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
            activeView === ViewMode.PROJECTS
              ? "text-emerald-400 bg-emerald-900/20"
              : "text-slate-500"
          }`}
        >
          <Code2 className="w-5 h-5" />
          <span className="text-[9px] font-bold tracking-wide uppercase">
            Work
          </span>
        </button>
        <button
          onClick={() => setActiveView(ViewMode.EXPERIENCE)}
          className={`flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
            activeView === ViewMode.EXPERIENCE
              ? "text-emerald-400 bg-emerald-900/20"
              : "text-slate-500"
          }`}
        >
          <Briefcase className="w-5 h-5" />
          <span className="text-[9px] font-bold tracking-wide uppercase">
            Logs
          </span>
        </button>
        <button
          onClick={() => setActiveView(ViewMode.TERMINAL)}
          className={`flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
            activeView === ViewMode.TERMINAL
              ? "text-emerald-400 bg-emerald-900/20"
              : "text-slate-500"
          }`}
        >
          <TerminalIcon className="w-5 h-5" />
          <span className="text-[9px] font-bold tracking-wide uppercase">
            AI Chat
          </span>
        </button>
      </nav>

      {/* Background Effects - pointer-events-none ensures clicks pass through to content */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.03),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.03),transparent_50%)]" />
      </div>
    </div>
  );
};

export default HomePage;
