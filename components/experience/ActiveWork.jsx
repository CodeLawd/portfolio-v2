import React from "react";

import { BiRightArrow } from "react-icons/bi";

const ActiveWork = ({ data }) => {
  return (
    <div className="w-full flex-grow">
      {data?.map(({ company, position, period, location, tasks }, idx) => (
        <div className="" key={idx}>
          <p className="text-lg text-gray font-semibold">
            {position} <span className="text-secondary">{company}</span>
          </p>
          <span className="text-sm font-sfmono text-white">
            {period} | {location}
          </span>
          {tasks?.map((task, idx) => (
            <div className="flex mt-2 gap-4 items-center mb-2" key={idx}>
              <BiRightArrow className="w-3 h-3 text-secondary" />
              <span className="text-gray leading-6 w-full text-justify">{task}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ActiveWork;
