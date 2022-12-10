import React from "react";
import { aboutInfo } from "../../helpers/data";
import Tech from "./Tech";
import { motion } from "framer-motion";

const AboutInfo = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{ y: [100, 0] }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex mt-5 gap-10 flex-col md:flex-row relative"
    >
      <div className="text-[#8892B0] w-full">
        <p className="text-sm md:text-base text-justify">
          I'm a software developer from Lagos, Nigeria. I am a passionate professional with various skills and
          experience spanning across Full Stack Development, UI/UX Design, Mobile Development and Technical Writing. I
          am also passionate about <span className="text-secondary"> kids </span> learning to code.
          <br /> <br />
          I'm a member of Data Science Nigeria (DSN), Google Developers Club (Ilorin), Facebook Developers Club (Lagos)
          and have also spoken in small tech meet-ups.
        </p>
        {aboutInfo?.map(({ title, text }, idx) => (
          <div className="my-5" key={idx}>
            <span className="text-gray font-calibreBlack text-lg font-semibold inline-flex ">
              <div className="rounded-full h-2 w-2 border border-secondary mr-3 mt-2" /> {title}
            </span>
            <p className="text-sm md:text-base text-justifyj">{text}</p>
          </div>
        ))}

        <Tech />
      </div>
      <div className="w-full md:w-full mx-auto sticky top-24 group cursor-pointer">
        <img
          src="/joshua.jpg"
          alt="joshua alexander"
          className="rounded-md grayscale group-hover:grayscale-0 w-full h-[90%] object-cover object-top sticky z-10"
        />
        <div className="border-2 border-secondary grayscale transition-all duration-150 group-hover:grayscale-0 group-hover:top-3 group-hover:-right-3  w-full h-[90%] rounded-md absolute top-4 -right-4"></div>
      </div>
    </motion.div>
  );
};

export default AboutInfo;
