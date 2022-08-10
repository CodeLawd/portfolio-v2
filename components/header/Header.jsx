import React from "react";
import Button from "../shared/Button";
import { GoLightBulb } from "react-icons/go";
import { motion } from "framer-motion";
import { socialIcon } from "../../helpers/data";

const Header = () => {
  return (
    <motion.div
      // whileInView={{ scale: [200, 0] }}
      // animate={{ scale: [200, 0] }}
      // transition={{ duration: .3, ease: "easeIn", repeat: false }}
      className="px-6 md:px-12 md:max-w-[80%] mx-auto flex items-center w-full h-[100vh] md:h-[85vh] relative"
    >
      <div className="max-w-6xl mx-auto -mt-20 sm:mt-0">
        <span className="text-sm text-secondary font-sfmono dark:bg-none bg-primary py-2 px-4 rounded-md">
          Hi, my name is
        </span>
        <h1 className="dark:text-gray text-primary font-mouse text-5xl md:text-7xl mt-4 font-black tracking-wider">
          Joshua Alexander<span className="text-secondary animate-pulse">.</span>
        </h1>
        <h1 className="text-[#8892B0] py-2 font-mouse text-4xl md:text-6xl font-extrabold tracking-wider">
          I bring{" "}
          <span className="text-secondary">
            ideas <GoLightBulb className="inline-flex w-8 animate-bounce" />{" "}
          </span>
          to reality<span className="text-secondary animate-pulse">.</span>
        </h1>
        <p className="text-[#8892B0] py-3 lg:w-[65%] mt-5 mb-6 leading-8 md:leading-6 text-base">
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
        </p>

        <motion.a
          whileHover={{ scale: [1, 1.2] }}
          transition={{ duration: 0.4, type: "tween" }}
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1prnCNhc6ovyO1CO_mj-xgzfGDZvSIovRAaZFxyOTMfQ/edit?usp=sharing"
          className="border text-secondary border-secondary rounded-lg px-8 py-3 text-xs ml-2"
        >
          {" "}
          Checkout my resume!
        </motion.a>
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
            className="dark:hover:text-secondary dark:text-gray text-primary"
          >
            {icon}
          </motion.a>
        ))}
        <div className="w-[1px] h-[80px] dark:bg-gray bg-primary" />
      </div>

      <div className="fixed bottom-0 right-16 hidden md:flex flex-col items-center gap-5">
        <motion.a
          href="mailto:alexander.joshua2018@gmail.com"
          whileHover={{ y: [0, -4] }}
          transition={{ duration: 0.2, type: "tween" }}
          rel="noreferrer"
          target="_blank"
          className="dark:text-gray text-primary font-sfmono text-xstracking-wider text-xs dark:hover:text-secondary cursor-pointer"
          style={{ textOrientation: "sideways", writingMode: "vertical-rl", letterSpacing: "2px" }}
        >
          alexander.joshua2018@gmail.com
        </motion.a>
        <div className="w-[1px] h-[80px] dark:bg-gray bg-primary" />
      </div>
    </motion.div>
  );
};

export default Header;
