import React from "react";
import { aboutInfo } from "../../helpers/data";
import Tech from "./Tech";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutInfo = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{ y: [100, 0] }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative flex flex-col items-center gap-10 mt-5 md:flex-row"
    >
      <div className="text-[#8892B0] w-full">
        <p className="text-sm text-justify md:text-base">
          I'm a software developer from Lagos, Nigeria. I am a passionate
          professional with various skills and experience spanning across Full
          Stack Development, UI/UX Design, Mobile Development and Technical
          Writing. I am also passionate about{" "}
          <span className="text-secondary"> kids </span> learning to code.
          <br /> <br />
          I'm a member of Data Science Nigeria (DSN), Google Developers Club
          (Ilorin), Facebook Developers Club (Lagos) and have also spoken in
          small tech meet-ups.
        </p>
        {aboutInfo?.map(({ title, text }, idx) => (
          <div className="my-5" key={idx}>
            <span className="inline-flex text-lg font-semibold text-gray font-calibreBlack ">
              <div className="w-2 h-2 mt-2 mr-3 border rounded-full border-secondary" />{" "}
              {title}
            </span>
            <p className="text-sm md:text-base text-justifyj">{text}</p>
          </div>
        ))}

        <Tech />
      </div>
      <div className="sticky w-full mx-auto cursor-pointer md:w-full top-24 group">
        {/* <Image
          src={"/joshua.jpg"}
          alt="joshua alexander"
          layout="fill"
          placeholder="blur"
          blurDataURL="https://cdn.impression.co.uk/2021/03/loading1.gif"
          className="hidden rounded-md grayscale-0 group-hover:grayscale  w-full h-[90%] object-cover object-top sticky z-10"
        /> */}
        <img
          src={"/joshua-new.jpg"}
          alt="joshua alexander"
          className="sticky z-10 block object-cover object-top w-full transition-all duration-500 rounded-md grayscale group-hover:grayscale-0"
        />
        <div className="absolute w-full h-full transition-all duration-150 border-2 rounded-md border-secondary grayscale group-hover:grayscale-0 group-hover:top-3 group-hover:-right-3 top-4 -right-4"></div>
      </div>
    </motion.div>
  );
};

export default AboutInfo;
