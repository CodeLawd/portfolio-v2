import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { tech } from "../../helpers/data";

const Tech = () => {
  return (
    <div className="">
      <p className="text-sm text-gray">Here are a few technologies I’ve been working with recently:</p>
      <div className="grid grid-cols-2 max-w-sm gap-2 mt-2">
        {tech?.map((tech, idx) => (
          <div className="flex items-center gap-2">
            <BiRightArrow className="w-3 h-3 text-secondary" />
            <span className="text-xs text-gray font-sfmono">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
