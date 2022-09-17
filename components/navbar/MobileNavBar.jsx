import React from "react";
import Link from "next/link";
import { XIcon } from "@heroicons/react/outline";
import { navItem } from "../../helpers/data";
import Button from "../shared/Button";

const MobileNavBar = ({ setMenuOpen }) => {
  return (
    <aside className="flex items-center justify-center h-screen relative flex-col gap-6 py-8 px-4">
      <div className="px-2 flex justify-between items-center gap-8 mt-2 mb-4">
        <XIcon
          className="w-12 text-secondary cursor-pointer absolute right-10 top-10"
          onClick={() => setMenuOpen(false)}
        />
      </div>

      <nav className="mb-10">
        <ul className="flex flex-col text-center gap-6 ">
          {navItem?.map(({ id, title, destination }, i) => (
            <Link href={`#${destination}`} passHref={title == "Blog" && true} key={i}>
              <div>
                <p className="text-secondary text-sm font-sfmono">{id}.</p>
                <a
                  target={title == "Blog" && "_blank"}
                  className="text-accent font-semibold text-gray hover:text-accent font-sfmono cursor-pointer hover:text-secondary"
                  onClick={() => setMenuOpen(false)}
                >
                  {title}
                </a>
              </div>
            </Link>
          ))}
        </ul>
      </nav>

      <Button text="Resume" size="sm" />
    </aside>
  );
};

export default MobileNavBar;
