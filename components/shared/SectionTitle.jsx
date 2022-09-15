import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, id }) => {
  const circle = [0, 1, 2, 3, 4];

  return (
    <motion.div
      whileInView={{ x: [-50, 0] }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-start gap-5"
    >
      <span className="text-xl font-semibold text-gray capitalize">
        <span className="font-sfmono text-secondary">{id}.</span> {title}
      </span>
      <div className="flex gap-2">
        {circle?.map((circle, idx) => (
          <div className="rounded-full h-2 w-2 border border-secondary mt-2 animate-pulse" key={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionTitle;
