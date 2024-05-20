import React from "react";
import SectionTitle from "../shared/SectionTitle";

const Contact = () => {
  return (
    <div
      className="px-6 md:px-12 pb-10 md:max-w-[80%] mt-32 mx-auto flex flex-col items-start justify-center w-full"
      id="contact"
    >
      <SectionTitle id="04" title="say hello" />

      <div className="mx-auto mt-10 text-center">
        <h2 className="text-3xl font-bold text-gray md:text-4xl">
          Take a coffee ☕ and let's talk{" "}
          <span className="text-secondary">.</span>
        </h2>
        <p className="max-w-xl my-8 text-xl leading-7 text-gray">
          Got a question or proposal, or just want to say hello? <br /> <br />{" "}
          Go ahead.
        </p>

        <a
          href="mailto:alexander.joshua2018@gmail.com"
          className="inline-block px-8 py-4 mx-auto mt-10 text-sm text-center border rounded-md border-secondary text-gray hover:bg-secondary hover:bg-opacity-10"
        >
          Say Hello
        </a>
      </div>
    </div>
  );
};

export default Contact;
