import React from "react";

const Button = ({ text, size, Icon }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://drive.google.com/file/d/1orCMDmuZxbQh6hk2PEQ9jASZd-r0dZ2J/view?usp=sharing"
      className={`border hover:bg-[#5ff1cf33] text-gray border-secondary rounded-md px-8 py-3 text-${size} ml-2`}
    >
      {text}
    </a>
  );
};

export default Button;
