import Image from "next/image";
import React from "react";
import { SectionTitle } from "..";
import { featuredProjects } from "../../helpers/data";
import { motion } from "framer-motion";

const FeatureProject = () => {
  const isOdd = (num) => {
    return num % 2 == 0;
  };

  return (
    <div
      className="px-6 md:px-12 pb-10 md:max-w-[80%] m-auto pt-32 flex flex-col items-start justify-center w-full"
      id="work"
    >
      <SectionTitle id="02" title="Some things I've built" />

      {featuredProjects?.map(({ title, description, stack, links, image }, idx) => (
        <motion.div
          whileInView={{ y: [40, 0] }}
          transition={{ duration: 1, type: "tween" }}
          className={` ${!isOdd(idx) && "flex-row-reverse"} flex gap-5 my-10 relative items-center`}
          key={idx}
        >
          <div className="hidden md:block w-[60%] h-full">
            <Image
              src={image}
              layout="responsive"
              width="100%"
              height="60"
              placeholder="blur"
              blurDataURL="https://cdn.impression.co.uk/2021/03/loading1.gif"
              className="grayscale hover:grayscale-0 rounded-md cursor-pointer w-full object-cover"
            />
          </div>

          <div
            className={`${
              !isOdd(idx) ? "md:text-left" : "md:text-right"
            } w-full md:w-[40%] h-full bg-[#10243f] md:bg-transparent p-8 rounded-md md:p-0`}
            key={idx}
            // style={{ backgroundImage: url(`${image}`) }}
          >
            <p className="font-sfmono text-xs text-secondary">Features Project</p>
            <span className="text-gray font-bold text-2xl">{title}</span>
            <div
              className={`${
                !isOdd(idx) ? "" : "md:right-32"
              } p-0 md:p-5 text-sm  md:bg-[#10243f] rounded-md shadow-md relative my-5 z-10 md:w-[130%]`}
            >
              <span className="text-gray">{description}</span>
            </div>
            <div className={`${!isOdd(idx) ? "justify-start" : "md:justify-end"} flex gap-4`}>
              {stack?.map((stack, idx) => (
                <span key={idx} className="text-xs font-sfmono text-gray capitalize">
                  {stack}
                </span>
              ))}
            </div>
            <div className={`${!isOdd(idx) ? "justify-start" : "md:justify-end"} flex gap-5 mt-5 overflow-x-scroll`}>
              {links?.map(({ url, icon }, idx) => (
                <a href={url} target="_blank" rel="noreferrer" key={idx} className="text-gray hover:text-secondary">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureProject;
