import React from "react";
import { BsFolder } from "react-icons/bs";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { otherProjects } from "../../helpers/data";

const OtherProjects = () => {
  return (
    <div
      className="px-6 md:px-12 pb-10 md:max-w-[80%] m-auto pt-20 flex flex-col items-start justify-center w-full"
      id="#works"
    >
      <div className="text-center">
        <h2 className="text-gray font-bold text-2xl mb-10">That's Not All...</h2>

        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects?.map(({ url, github, title, description, stack }, idx) => (
            <a href={url} target="_blank" rel="noreferrer" key={idx}>
              <motion.div
                whileHover={{ y: [0, -8] }}
                transition={{ duration: 0.2, type: "spring" }}
                className="rounded-md bg-[#10243f] p-8 group text-left cursor-pointer"
              >
                <div className="flex flex-col justify-between">
                  <div className="">
                    <div className="flex items-center justify-between mb-8">
                      <BsFolder className="w-9 h-9 text-secondary" />
                      <div className="flex gap-5">
                        <a href={url} target="_blank" rel="noreferrer">
                          <FiExternalLink className="w-5 h-5 text-gray hover:text-secondary" />
                        </a>
                        {github && (
                          <a href={github} target="_blank" rel="noreferrer">
                            <FiGithub className="w-5 h-5 text-gray hover:text-secondary" />
                          </a>
                        )}
                      </div>
                    </div>

                    <span className="text-gray font-bold text-lg mb-3 inline-block group-hover:text-secondary">
                      {title}
                    </span>
                    <p className="text-sm text-gray leading-6">{description}</p>
                  </div>
                  <div className="flex gap-4 mt-8">
                    {stack?.map((stack, idx) => (
                      <span className="text-xs font-sfmono text-gray capitalize" key={idx}>
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
