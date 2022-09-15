import React from "react";

const Button = ({ text, size, Icon }) => {
  return (
    <a
      target="_blank"
      href="https://docs.google.com/document/d/1prnCNhc6ovyO1CO_mj-xgzfGDZvSIovRAaZFxyOTMfQ/edit?usp=sharing"
      className={`border hover:bg-[#5ff1cf33] text-gray border-secondary rounded-md px-8 py-3 text-${size} ml-2`}
    >
      {text}
    </a>
  );
};

export default Button;
