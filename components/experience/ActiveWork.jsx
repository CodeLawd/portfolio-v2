import React from "react";

import { BiRightArrow } from "react-icons/bi";

const ActiveWork = ({
  data: { company, position, period, location, tasks },
}) => {
  return (
    <div className="flex-grow w-full">
      <div>
        <p className="text-lg font-semibold text-gray">
          {position} <span className="text-secondary">{company}</span>
        </p>
        <span className="text-sm text-white font-sfmono">
          {period} | {location}
        </span>
        {tasks?.map((task, idx) => (
          <div className="flex items-start gap-4 mt-2 mb-2" key={idx}>
            <BiRightArrow className="w-3 h-3 mt-2 text-secondary" />
            <span className="w-full leading-6 text-gray md:text-justify">
              {task}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveWork;
