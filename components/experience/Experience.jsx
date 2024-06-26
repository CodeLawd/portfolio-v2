"use client";

import { useState } from "react";
import {
  companyName,
  softrays,
  talkamnaija,
  brooks,
  radartrail,
  landa,
  nophin,
} from "../../helpers/data";
import { ActiveWork, SectionTitle } from "..";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("nophin");

  return (
    <div
      className="px-6 md:px-12 pb-10 md:max-w-[70%] mx-auto pt-28 h-[70vh] flex flex-col items-start justify-center w-full my-40 md:my-0"
      id="experience"
    >
      <SectionTitle id="01" title="Where I've worked" />

      <div className="flex flex-col gap-8 mt-8 md:flex-row">
        <div className="w-full md:w-[35%] flex-col">
          {companyName?.map(({ name, tab }, idx) => (
            <div
              key={idx}
              className={`${
                activeTab === tab ? "border-0" : "border-l border-gray"
              } mx-3`}
            >
              <p
                className={`text-gray ${
                  activeTab === tab &&
                  "bg-secondary bg-opacity-10 text-secondary  border-l-[2.5px] border-secondary"
                } font-sfmono text-xs cursor-pointer p-4 text-gray hover:bg-secondary hover:bg-opacity-5`}
                onClick={() => setActiveTab(tab)}
              >
                {name}
              </p>
            </div>
          ))}
        </div>

        {activeTab === "nophin" && <ActiveWork data={nophin} />}
        {activeTab === "landa" && <ActiveWork data={landa} />}
        {activeTab === "radartrail" && <ActiveWork data={radartrail} />}
        {activeTab === "brooks" && <ActiveWork data={brooks} />}
        {activeTab === "talkamnaija" && <ActiveWork data={talkamnaija} />}
        {activeTab === "softrays" && <ActiveWork data={softrays} />}
      </div>
    </div>
  );
};

export default Experience;
