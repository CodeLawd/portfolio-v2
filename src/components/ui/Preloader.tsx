"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const WORDS = [
  "Initializing...",
  "Loading modules...",
  "Extracting assets...",
  "Verifying integrity...",
  "Launching..."
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds total
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % WORDS.length);
    }, duration / WORDS.length);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, duration + 500); // Slight delay after 100%

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-zinc-950 text-white"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-64 space-y-4">
        <div className="flex justify-between items-end">
          <span className="text-sm font-mono text-zinc-500">System Boot</span>
          <span className="text-sm font-mono text-zinc-500">{Math.round(count)}%</span>
        </div>
        
        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
          />
        </div>

        <div className="h-6 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={textIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-xs font-mono text-zinc-500 absolute w-full text-center"
            >
              {WORDS[textIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
