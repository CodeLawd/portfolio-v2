import { useState } from "react";
import { AboutInfo } from "..";

const About = () => {
  const circle = [0, 1, 2, 3, 4];
  return (
    <div className="px-6 md:px-12 pb-10 md:max-w-[80%] mx-auto pt-20 w-full" id="#about">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-start gap-5">
          <span className="text-xl font-semibold text-gray">
            <span className="font-sfmono text-secondary">00.</span> About Me
          </span>
          <div className="flex gap-2">
            {circle?.map((circle, idx) => (
              <div className="rounded-full h-2 w-2 border border-secondary mt-2 animate-pulse" key={idx} />
            ))}
          </div>
        </div>
        <AboutInfo />
      </div>
    </div>
  );
};

export default About;
