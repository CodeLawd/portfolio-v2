"use client";

import React from "react";
import Button from "../shared/Button";
import { GoLightBulb } from "react-icons/go";
import { motion } from "framer-motion";
import { socialIcon } from "../../helpers/data";

const Header = () => {
  return (
    <div className="px-6 md:px-12 md:max-w-[80%] mx-auto flex items-center w-full h-[100vh] md:h-[85vh] relative">
      <div className="max-w-6xl mx-auto -mt-20 sm:mt-0">
        <span
          // whileInView={{ x: [-50, 0] }}
          // transition={{ duration: 1, type: "tween" }}
          className="px-4 py-2 text-sm rounded-md text-secondary font-sfmono"
        >
          Hi, my name is
        </span>
        <h1
          // whileInView={{ x: [-50, 0] }}
          // transition={{ duration: 1, type: "tween" }}
          className="mt-4 text-5xl font-black tracking-wider text-gray font-mouse md:text-8xl"
        >
          Joshua Alexander
          <span className="text-secondary animate-pulse">.</span>
        </h1>
        <h1
          // whileInView={{ x: [-50, 0] }}
          // transition={{ duration: 1, type: "tween" }}
          className="text-[#8892B0] py-2 font-mouse text-4xl md:text-7xl font-extrabold tracking-wider"
        >
          I bring
          <span className="text-secondary">
            &nbsp; ideas{" "}
            <GoLightBulb className="inline-flex w-8 animate-bounce" />{" "}
          </span>
          to reality<span className="text-secondary animate-pulse">.</span>
        </h1>
        {/* <p className="text-[#8892B0] py-3 lg:w-[65%] mt-5 mb-6 leading-8 md:leading-6 text-base">
          I'm a <span className="text-secondary">Software developer</span> who specializes in JavaScript Technologies
          (Node.js, Express, React/Next and MongoDB) to{" "}
          <span className="text-secondary"> solve business problems. </span> Currently, I’m focused on building
          accessible, human-centered products at{" "}
          <span className="text-secondary">
            <a href="https://radartrail.com" target="_blank" rel="noreferrer">
              Radartrail
            </a>
          </span>
          .
        </p> */}
        <p className="text-[#8892B0] py-3 lg:w-[75%] mt-5 mb-6 leading-8 md:leading-6 text-base">
          I'm a <span className="text-secondary">Software Engineer</span> with
          expertise in developing and deploying web applications using
          technologies such as React, Node.js, and MongoDB.{" "}
          <span className="text-secondary">Strong ability</span> to design,
          build and maintain RESTful APIs and deliver efficient, scalable and
          maintainable solutions. <span className="text-secondary">Proven</span>{" "}
          track record of leading cross-functional teams and delivering projects
          on time and to high standards.
        </p>
        <Button text="Check my resume" size="sm" />
      </div>

      <div className="fixed bottom-0 left-[5rem] hidden md:flex flex-col items-center gap-8">
        {socialIcon?.map(({ icon, link }, idx) => (
          <motion.a
            whileHover={{ y: [0, -4] }}
            transition={{ duration: 0.2, type: "tween" }}
            href={link}
            rel="noreferrer"
            key={idx}
            target="_blank"
            className="hover:text-secondary text-gray"
          >
            {icon}
          </motion.a>
        ))}
        <div className="w-[1px] h-[80px] bg-gray" />
      </div>

      <div className="fixed bottom-0 flex-col items-center hidden gap-5 right-16 md:flex">
        <motion.a
          href="mailto:alexander.joshua2018@gmail.com"
          whileHover={{ y: [0, -4] }}
          transition={{ duration: 0.2, type: "tween" }}
          rel="noreferrer"
          target="_blank"
          className="text-xs tracking-wider cursor-pointer text-gray font-sfmono hover:text-secondary"
          style={{
            textOrientation: "sideways",
            writingMode: "vertical-rl",
            letterSpacing: "2px",
          }}
        >
          alexander.joshua2018@gmail.com
        </motion.a>
        <div className="w-[1px] h-[80px] bg-gray" />
      </div>
    </div>
  );
};

export default Header;
