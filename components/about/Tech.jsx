import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { tech } from "../../helpers/data";

const Tech = () => {
  return (
    <div className="mt-10">
      <p className="text-sm md:text-base text-gray">
        Here are a few technologies I’ve been working with recently:
      </p>
      <div className="grid max-w-md grid-cols-2 gap-2 mt-2">
        {tech?.map((tech, idx) => (
          <div className="flex items-center gap-2" key={idx}>
            <BiRightArrow className="w-3 h-3 text-secondary" />
            <span className="w-full text-xs md:text-sm text-gray font-sfmono">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
