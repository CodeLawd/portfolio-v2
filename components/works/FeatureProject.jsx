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
      className="px-6 md:px-12 pb-10 md:max-w-[80%] m-auto pt-20 flex flex-col items-start justify-center w-full"
      id="#works"
    >
      <SectionTitle id="02" title="Some things I've built" />

      {featuredProjects?.map(({ title, description, stack, links, image }, idx) => (
        <motion.div
          whileInView={{ y: [40, 0] }}
          transition={{ duration: 1, type: "tween" }}
          className={` ${!isOdd(idx) && "flex-row-reverse"} flex gap-5 my-10 relative items-center`}
          key={idx}
        >
          <div className="w-[60%] h-full">
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

          <div className={`${!isOdd(idx) ? "text-left" : "text-right"} w-[40%] h-full`} key={idx}>
            <p className="font-sfmono text-xs text-secondary">Features Project</p>
            <span className="text-gray font-bold text-2xl">{title}</span>
            <div
              className={`${
                !isOdd(idx) ? "" : "right-32"
              } p-5 text-sm text-le bg-[#10243f] rounded-md shadow-md relative my-5 z-10 w-[130%]`}
            >
              <span className="text-gray">{description}</span>
            </div>
            <div className={`${!isOdd(idx) ? "justify-start" : "justify-end"} flex gap-4`}>
              {stack?.map((stack, idx) => (
                <span key={idx} className="text-xs font-sfmono text-gray capitalize">
                  {stack}
                </span>
              ))}
            </div>
            <div className={`${!isOdd(idx) ? "justify-start" : "justify-end"} flex gap-5 mt-5`}>
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
