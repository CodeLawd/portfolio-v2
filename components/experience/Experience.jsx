import { useState } from "react";
import { companyName, softrays, talkamnaija, brooks, radartrail } from "../../helpers/data";
import { ActiveWork, SectionTitle } from "..";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("radartrail");

  return (
    <div
      className="px-6 md:px-12 pb-10 md:max-w-[60%] mx-auto my-28 flex flex-col items-start justify-center w-full"
      id="experience"
    >
      <SectionTitle id="01" title="Where I've worked" />
      <div className="mt-8 flex gap-8">
        <div className="w-[12rem]">
          {companyName?.map(({ name, tab }, idx) => (
            <div key={idx} className={`${activeTab === tab ? "border-0 " : "border-l border-gray-100"}`}>
              <p
                className={`${
                  activeTab === tab && " bg-secondary bg-opacity-10 text-secondary border-l-[2.5px] border-secondary"
                } p-4   text-gray font-sfmono text-xs cursor-pointer`}
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
