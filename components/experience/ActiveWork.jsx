import React from "react";

import { BiRightArrow } from "react-icons/bi";

const ActiveWork = ({ data }) => {
  return (
    <div>
      {data?.map(({ company, position, period, tasks }, idx) => (
        <div className="max-w-2xl" key={idx}>
          <p className="text-lg font-semibold">
            {position} <span className="text-secondary">{company}</span>
          </p>
          <span className="text-xs font-sfmono">{period}</span>
          {tasks?.map((task, idx) => (
            <div className="flex mt-4 gap-2" key={idx}>
              <BiRightArrow className="w-3 h-3 mt-1 text-secondary" />
              <span className="text-sm text-gray leading-7">{task}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ActiveWork;
