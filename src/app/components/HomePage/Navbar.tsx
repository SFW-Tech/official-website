"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CompanyDropdownMenu from "./TopSection/CompanyDropdownMenu";
import Servicesdropdownmenu from "./TopSection/Servicesdropdownmenu";
import { usePathname } from "next/navigation";

function Navbar() {
    const [hamburgerlist, sethamburgerlist] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();





    const handlehamburger = () => {
        sethamburgerlist((prev) => !prev);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div
            className={`fixed ${pathname === "/" && "top-10"}top-0 left-0 w-full z-50 flex gap-10 justify-between items-center px-6 lg:px-40 md:px-18 py-4 transition-colors duration-300 ${scrolled ? "bg-[#001A5A] text-white shadow-lg top-0" : "bg-transparent text-white"
                }`}
        >
            {/* Logo */}
            <Link href="/">
                <div className="flex items-center">
                    <img
                        src="/assets/Home/Navbarassets/logo.png"
                        alt="Softworks Logo"
                        className="h-10 w-auto"
                    />
                </div>
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-12 text-sm font-semibold items-center mx-auto lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                <Link
                    href="/"
                    className={`cursor-pointer pt-3 pb-3 rounded-sm ${pathname === "/" ? "bg-[#59d7f7] text-black px-5 rounded-md" : ""
                        }`}
                >
                    Home
                </Link>
                <CompanyDropdownMenu />
                <Servicesdropdownmenu />
                <Link
                    href="/blog"
                    className={`cursor-pointer pt-3 pb-3 rounded-sm ${pathname === "/blog"
                        ? "bg-[#59d7f7] text-black px-5 rounded-md"
                        : ""
                        }`}
                >
                    Blog
                </Link>
                <Link
                    href="/contact"
                    className={`cursor-pointer pt-3 pb-3 rounded-sm ${pathname === "/contact"
                        ? "bg-[#59d7f7] text-black px-5 rounded-md"
                        : ""
                        }`}
                >
                    Contact
                </Link>
            </div>

            {/* Hamburger */}
            <div className="md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 cursor-pointer"
                    onClick={handlehamburger}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>

                {hamburgerlist && (
                    <div className="absolute top-16 left-0 right-0 bg-white/10 backdrop-blur-lg text-white px-6 py-4 border-t z-40 rounded-b-xl shadow-xl border border-white/10">
                        <div className="flex flex-col divide-y divide-white/20 overflow-hidden rounded-lg">
                            <Link
                                href="/"
                                className="cursor-pointer py-3 hover:bg-white/10 transition"
                            >
                                Home
                            </Link>
                            <Link
                                href="/services"
                                className="cursor-pointer py-3 hover:bg-white/10 transition"
                            >
                                Services
                            </Link>
                            <Link
                                href="/aboutus"
                                className="cursor-pointer py-3 hover:bg-white/10 transition"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/careers"
                                className="cursor-pointer py-3 hover:bg-white/10 transition"
                            >
                                Careers
                            </Link>
                            <Link
                                href="/contact"
                                className="cursor-pointer py-3 hover:bg-white/10 transition"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
