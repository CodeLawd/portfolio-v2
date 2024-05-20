"use client";

import { AboutInfo, SectionTitle } from "..";

const About = () => {
  return (
    <div
      className="px-6 md:px-12 pb-10 md:max-w-[80%] mx-auto pt-20 w-full"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle id="00" title="About Me" />
        <AboutInfo />
      </div>
    </div>
  );
};

export default About;
