import { useState } from "react";
import { companyName, workPlace } from "../../helpers/data";
import ActiveWork from "./ActiveWork";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("radatrail");
  const circle = [0, 1, 2, 3, 4];

  return (
    <div
      className="px-6 md:px-12 pb-10 md:max-w-[60%] m-auto pt-20 h-[100vh] flex flex-col items-start justify-center w-full"
      id="#experience"
    >
      <div className="flex items-center justify-start gap-5">
        <span className="text-xl font-semibold text-gray">
          <span className="font-sfmono text-secondary">01.</span> Where I've worked
        </span>
        <div className="flex gap-2">
          {circle?.map((circle, idx) => (
            <div className="rounded-full h-2 w-2 border border-secondary mt-2 animate-pulse" key={idx} />
          ))}
        </div>
      </div>

      <div className="mt-8 flex gap-5">
        <div className="w-[15rem]">
          {companyName?.map(({ name, tab }, idx) => (
            <div key={idx} className={`${activeTab === tab ? "border-0 " : "border-l border-gray-100"}`}>
              <p
                className={`${
                  activeTab === tab && "bg-secondary bg-opacity-10 text-secondary border-l-[2.5px] border-secondary"
                } p-4   text-gray font-sfmono text-sm cursor-pointer`}
                onClick={() => setActiveTab(tab)}
              >
                {name}
              </p>
            </div>
          ))}
        </div>

        {activeTab === "radartrail" && <ActiveWork data={workPlace} />}
        {activeTab === "brooks" && <ActiveWork data={workPlace} />}
        {activeTab === "talkamnaija" && <ActiveWork data={workPlace} />}
        {activeTab === "softrays" && <ActiveWork data={workPlace} />}
      </div>
    </div>
  );
};

export default Experience;
