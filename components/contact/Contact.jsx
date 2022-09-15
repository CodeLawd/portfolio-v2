import React from "react";
import SectionTitle from "../shared/SectionTitle";

const Contact = () => {
  return (
    <div
      className="px-6 md:px-12 pb-10 md:max-w-[80%] mt-32 mx-auto flex flex-col items-start justify-center w-full"
      id="contact"
    >
      <SectionTitle id="04" title="say hello" />

      <div className="mt-10 text-center mx-auto">
        <h2 className="text-gray text-2xl md:text-4xl font-bold">
          Take a coffee ☕ and let's talk <span className="text-secondary">.</span>
        </h2>
        <p className="max-w-xl my-8 text-gray leading-7 text-xl">
          Got a question or proposal, or just want to say hello? <br /> <br /> Go ahead.
        </p>

        <a
          href="mailto:alexander.joshua2018@gmail.com"
          className="border rounded-md border-secondary text-sm py-4 px-8 mx-auto text-center hover:bg-secondary hover:bg-opacity-10 mt-10 inline-block"
        >
          Say Hello
        </a>
      </div>
    </div>
  );
};

export default Contact;
