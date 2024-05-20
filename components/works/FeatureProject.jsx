"use client";

import Image from "next/image";
import React from "react";
import { SectionTitle } from "..";
import { featuredProjects } from "../../helpers/data";
import { motion } from "framer-motion";
import Link from "next/link";

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

      {featuredProjects?.map(
        ({ title, description, stack, links, image, status }, idx) => (
          <motion.div
            viewport={{ once: true }}
            whileInView={{ y: [100, 0] }}
            transition={{ duration: 1, type: "tween" }}
            className={` ${
              !isOdd(idx) && "flex-row-reverse"
            } flex gap-5 my-10 relative items-center`}
            key={idx}
          >
            <Link
              href={links[1].url}
              target="_blank"
              referrer="noreferrer"
              className="hidden md:block w-[60%] h-full hover:border-[0.7px] border-[#c9c9c9] hover:rounded-md"
            >
              {/* <Image
                src={image}
                fill
                placeholder="blur"
                blurDataURL="https://cdn.impression.co.uk/2021/03/loading1.gif"
                className="object-cover h-[500px] w-[70%] rounded-md cursor-pointer grayscale hover:grayscale-0"
              /> */}

              <img
                src={image}
                alt="image"
                className="h-[420px] w-full object-cover rounded-md cursor-pointer grayscale hover:grayscale-0"
                loading="lazy"
              />
            </Link>

            <div
              className={`${
                !isOdd(idx) ? "md:text-left" : "md:text-right"
              } w-full md:w-[40%] h-full bg-[#10243f] md:bg-transparent p-8 rounded-md md:p-0 bg-cover bg-no-repeat`}
              // style={{ backgroundImage: `url(${image})`, opacity: 0.3 }}
              key={idx}
              // style={{ backgroundImage: url(`${image}`) }}
            >
              <p className="text-xs font-sfmono text-secondary">
                Featured Project
              </p>
              <span className="text-2xl font-bold text-gray">{title}</span>
              <div
                className={`${
                  !isOdd(idx) ? "" : "md:right-32"
                } p-0 md:p-5 text-sm  md:bg-[#10243f] rounded-md md:shadow-md relative my-5 z-10 md:w-[130%]`}
              >
                <p className="text-gray">{description}</p>
                <p className="mt-5 text-xs uppercase text-secondary md:text-sm ">
                  <span className="font-bold">Status:</span> &nbsp;
                  {status}
                </p>
              </div>
              <div
                className={`${
                  !isOdd(idx) ? "justify-start" : "md:justify-end"
                } flex gap-4`}
              >
                {stack?.map((stack, idx) => (
                  <span
                    key={idx}
                    className="text-xs capitalize font-sfmono text-gray"
                  >
                    {stack}
                  </span>
                ))}
              </div>
              <div
                className={`${
                  !isOdd(idx) ? "justify-start" : "md:justify-end"
                } flex gap-5 mt-5`}
              >
                {links?.map(({ url, icon }, idx) => (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    key={idx}
                    className="text-gray hover:text-secondary"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};

export default FeatureProject;
