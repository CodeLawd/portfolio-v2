import React from "react";

import { BiRightArrow } from "react-icons/bi";

const ActiveWork = ({ data }) => {
  return (
    <div className="w-full flex-grow">
      {data?.map(({ company, position, period, location, tasks }, idx) => (
        <div className="max-w-2xl" key={idx}>
          <p className="text-lg text-gray font-semibold">
            {position} <span className="text-secondary">{company}</span>
          </p>
          <span className="text-xs font-sfmono text-white">
            {period} | {location}
          </span>
          {tasks?.map((task, idx) => (
            <div className="flex mt-2 gap-4 items-start " key={idx}>
              <BiRightArrow className="w-4 h-4 mt-2 text-secondary" />
              <span className="text-sm text-gray leading-6">{task}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ActiveWork;
