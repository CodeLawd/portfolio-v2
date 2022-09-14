import React from "react";
import { socialIcon } from "../../helpers/data";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="text-center pt-20 pb-8 mx-auto max-w-[80%]">
      <div className="flex items-center justify-between gap-8 mb-8 md:hidden">
        {socialIcon?.map(({ link, icon }, idx) => (
          <motion.a
            whileHover={{ y: [0, -4] }}
            transition={{ duration: 0.2, type: "tween" }}
            href={link}
            key={idx}
            rel="noreferrer"
            target="_blank"
            className="hover:text-secondary text-gray"
          >
            {icon}
          </motion.a>
        ))}
      </div>
      <span className="font-sfmono text-gray text-xs hover:text-secondary cursor-pointer">
        Built by Joshua Alexander ❤️
      </span>
    </div>
  );
};

export default Footer;
