import React, { useState, useEffect } from "react"
import { useTheme } from "next-themes";
import Button from "../shared/Button"
import { MenuIcon, LightningBoltIcon, SunIcon, MoonIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const navItem = [
        {
            id: "00",
            title: "About",
            destination: "about"
        },
        {
            id: "01",
            title: "Experience",
            destination: "experience"
        },
        {
            id: "02",
            title: "Work",
            destination: "work"
        },
        {
            id: "03",
            title: "Blog",
            destination: "blog"
        },
        {
            id: "04",
            title: "Contact",
            destination: "contact"
        },
    ]

    useEffect(() => {
        setMounted(true);
    }, [])

    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <SunIcon className="h-6 w-6 mx-5 flex-shrink-0 mr-3 text-secondary" role="button" onClick={() => setTheme('light')} />
            )
        }

        else {
            return (
                <MoonIcon className="h-6 w-6 mx-5 flex-shrink-0 mr-3 text-secondary" role="button" onClick={() => setTheme('dark')} />
            )
        }
    };

    return (
        <div className="flex items-center justify-between py-5 px-6 md:px-12 shadow-lg  sticky top-0 backdrop-blur">
            <div className="border border-secondary px-2 pt-1">
                <span className="font-bold font-sfmono text-lg text-secondary">JA</span>
            </div>

            <div>
                {/* <MenuIcon /> */}
                <MenuIcon className="text-secondary h-8 w-8 cursor-pointer block md:hidden" />
            </div>

            <div className="font-sfmono md:flex items-center hidden">
                {navItem.map(({ title, id, destination }) => (
                    <a href={`#${destination}`} key={id} className="">
                        <span className="mx-4 cursor-pointer text-secondary text-sm">{id}.<span className="text-gray hover:text-secondary">{title}</span> </span>
                    </a>
                ))}

                {renderThemeChanger()}
                <Button text="Resume" size="sm" />
            </div>
        </div >
    )
}

export default Navbar