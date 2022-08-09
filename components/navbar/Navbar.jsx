import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Button from "../shared/Button";
import { MenuIcon, LightningBoltIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { navItem } from "../../helpers/data";
import Link from "next/link";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setScroll(window.pageYOffset > 100));
    }
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon className="h-6 w-6 flex-shrink-0 text-secondary" role="button" onClick={() => setTheme("light")} />
      );
    } else {
      return (
        <MoonIcon className="h-6 w-6 flex-shrink-0 text-secondary" role="button" onClick={() => setTheme("dark")} />
      );
    }
  };

  return (
    <div
      className={`flex z-50 items-center bg-primary dark:bg-transparent justify-between py-3 px-6 md:px-20 sticky top-0 backdrop-blur ${
        scroll && "shadow-sm"
      }`}
    >
      <Link href="/">
        <div className="border border-secondary px-2 pt-1 cursor-pointer">
          <span className="font-bold font-sfmono text-lg text-secondary">JA</span>
        </div>
      </Link>

      <div>
        {/* <MenuIcon /> */}
        <MenuIcon className="text-secondary h-8 w-8 cursor-pointer block md:hidden" />
      </div>

      <div className="font-sfmono md:flex items-center hidden gap-5">
        {navItem.map(({ title, id, destination }) => (
          <motion.a
            whileHover={{ y: [0, -2] }}
            transition={{ duration: 0.25, type: "tween" }}
            href={`/#${destination}`}
            key={id}
            className=""
          >
            <span className="cursor-pointer text-secondary text-xs">
              {id}.<span className="text-gray hover:text-secondary">{title}</span>{" "}
            </span>
          </motion.a>
        ))}

        {renderThemeChanger()}
        <Button text="Resume" size="xs" />
      </div>
    </div>
  );
};

export default Navbar;
