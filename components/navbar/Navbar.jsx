"use client";

import React, { useState, useEffect } from "react";
import Button from "../shared/Button";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import { navItem } from "../../helpers/data";
import Link from "next/link";
import { MobileNavBar } from "..";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 100)
      );
    }
  }, []);

  return (
    <div
      className={`flex z-50 items-center bg-primary bg-transparent justify-between py-3 px-6 md:px-20 sticky top-0 backdrop-blur ${
        scroll && "shadow-sm"
      }`}
    >
      <Link href="/">
        <div className="px-2 pt-1 border cursor-pointer border-secondary">
          <span className="text-lg font-bold font-sfmono text-secondary">
            JA
          </span>
        </div>
      </Link>

      <div>
        {/* <MenuAlt3Icon /> */}
        <MenuAlt3Icon
          className="block w-8 h-8 cursor-pointer text-secondary md:hidden"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      <motion.div
        whileInView={{ y: [-30, 0] }}
        transition={{ duration: 0.5, type: "tween" }}
        className="items-center hidden gap-5 font-sfmono md:flex"
      >
        {navItem.map(({ title, id, destination }) => (
          <motion.a
            whileHover={{ y: [0, -2] }}
            transition={{ duration: 0.25, type: "tween" }}
            href={`/#${destination}`}
            key={id}
            className=""
          >
            <span className="text-xs cursor-pointer text-secondary">
              {id}.
              <span className="text-gray hover:text-secondary">{title}</span>{" "}
            </span>
          </motion.a>
        ))}

        {/* {renderThemeChanger()} */}
        <Button text="Resume" size="xs" />
      </motion.div>

      {/* mobile menu start */}
      {menuOpen && (
        <div
          className={`${
            menuOpen && "backdrop-filter"
          } fixed left-0 right-0 bottom-0 h-screen w-full lg:hidden bg-[#0000003d] z-[99999]`}
          onClick={() => setMenuOpen(false)}
        >
          <AnimatePresence>
            <motion.div
              initial={{ x: [0, 100, 0] }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="fixed top-0 right-0 w-screen h-screen bg-primary"
              onClick={(e) => e.stopPropagation()}
            >
              <MobileNavBar setMenuOpen={setMenuOpen} />
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      {/* mobile menu end */}
    </div>
  );
};

export default Navbar;
