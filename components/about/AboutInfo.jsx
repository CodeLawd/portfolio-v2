import React from "react";
import { aboutInfo } from "../../helpers/data";
import Tech from "./Tech";

const AboutInfo = () => {
  return (
    <div className="flex max-w-5xl mt-5 gap-10 flex-col md:flex-row">
      <div className="text-[#8892B0]">
        <p>
          Hello! My name is Joshua and I enjoy converting creative designs to code. My interest in web development
          started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom
          reblog button taught me a lot about HTML & CSS!
        </p>
        {aboutInfo?.map(({ title, text }, idx) => (
          <div className="my-5" key={idx}>
            <span className="text-gray font-calibreBlack text-lg font-semibold inline-flex ">
              <div className="rounded-full h-2 w-2 border border-secondary mr-3 mt-2" /> {title}
            </span>
            <p className="text-sm">{text}</p>
          </div>
        ))}

        <Tech />
      </div>
      <div className="w-[80%] sm:w-[70%] h-72 md:w-full relative sepia hover:sepia-0 mx-auto">
        <img src="/user.jpg" alt="" className="rounded-md w-full h-full object-cover  relative z-10" />
        <div className="border-2 border-secondary w-full h-full rounded-md absolute top-3 -right-3"></div>
      </div>
    </div>
  );
};

export default AboutInfo;
