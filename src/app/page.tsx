"use client";

import React, { useState, useEffect, useRef } from "react";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Writing from "@/components/sections/Writing";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import MouseFollower from "@/components/ui/MouseFollower";
import Preloader from "@/components/ui/Preloader";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for fade effect - only after mount and loading complete
  // const { scrollYProgress } = useScroll({
  //   target: (isMounted && !isLoading) ? containerRef : undefined,
  //   offset: ["start start", "end start"]
  // });

  // Transform scroll to opacity - fade out as user scrolls down
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true);

    // Check if we've already visited in this session
    const hasVisited = sessionStorage.getItem("hasVisited");

    // if (hasVisited) {
    //   setIsLoading(false);
    // } else {
    //   // If not visited, show preloader and set flag
    //   // We'll set the flag when preloader completes
    // }
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasVisited", "true");
  };

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-[#fac748]/30">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <MouseFollower />
          <div
            ref={containerRef}
            className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 my-8 lg:my-4 lg:h-[calc(100vh-2rem)] border border-zinc-800/50 shadow-2xl rounded-2xl bg-zinc-950/50 backdrop-blur-sm lg:overflow-hidden"
          >
            <div className="lg:flex lg:justify-between lg:gap-4 lg:h-full">

              {/* Left Column: Fixed Header */}
              <header className="lg:flex lg:h-full lg:w-1/3 lg:flex-col lg:justify-between py-24 overflow-hidden">
                <div>
                  <Hero />
                </div>
                <footer className="hidden lg:block text-sm text-zinc-600">
                  <p>&copy; {new Date().getFullYear()} Joshua Alexander</p>
                </footer>
              </header>

              {/* Right Column: Scrollable Content */}
              <main className="lg:w-2/3 relative lg:h-full lg:overflow-y-auto scrollbar-hide ">
                <div className="pointer-events-none sticky top-0 z-20 -ml-6 -mr-6 h-24 bg-linear-to-b from-zinc-950 to-transparent lg:-ml-12 lg:-mr-24" />
                
                <div className="pb-24 pt-12">
                  <Experience />
                  <Writing />
                  {/* <Projects /> */}
                  <Contact />

                  <footer className="lg:hidden pt-12 border-t border-zinc-900 text-sm text-zinc-600">
                    <p>&copy; {new Date().getFullYear()} Joshua Alexander</p>
                  </footer>
                </div>
              </main>

            </div>
          </div>
        </>
      )}
    </div>
  );
}
