import { useState } from "react";
import { companyName, softrays, talkamnaija, brooks, radartrail } from "../../helpers/data";
import { ActiveWork, SectionTitle } from "..";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("radartrail");

  return (
    <div
      className="px-6 md:px-12 pb-10 md:max-w-[60%] mx-auto pt-28 h-[70vh] flex flex-col items-start justify-center w-full"
      id="experience"
    >
      <SectionTitle id="01" title="Where I've worked" />

      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[35%] flex-col overflow-x-scroll">
          {companyName?.map(({ name, tab }, idx) => (
            <div
              key={idx}
              className={`${
                activeTab === tab ? "md:border-0 " : "border-b-[2.5px] md:border-b-0 md:border-l md:border-gray-100"
              } mx-3`}
            >
              <p
                className={`${
                  activeTab === tab &&
                  "md:bg-secondary md:bg-opacity-10 text-secondary  md:border-l-[2.5px] border-secondary"
                }text-gray font-sfmono text-xs cursor-pointer p-4`}
                onClick={() => setActiveTab(tab)}
              >
                {name}
              </p>
            </div>
          ))}
        </div>

        {activeTab === "radartrail" && <ActiveWork data={radartrail} />}
        {activeTab === "brooks" && <ActiveWork data={brooks} />}
        {activeTab === "talkamnaija" && <ActiveWork data={talkamnaija} />}
        {activeTab === "softrays" && <ActiveWork data={softrays} />}
      </div>
    </div>
  );
};

export default Experience;
