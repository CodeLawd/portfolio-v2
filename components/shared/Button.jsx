import React from "react";

const Button = ({ text, size, Icon }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://drive.google.com/file/d/1tdvcg-1vh76Ztwrq6AVW8NXQLuCectPP/view?usp=share_link"
      className={`border hover:bg-[#5ff1cf33] text-gray border-secondary rounded-md px-8 py-3 text-${size} ml-2`}
    >
      {text}
    </a>
  );
};

export default Button;
