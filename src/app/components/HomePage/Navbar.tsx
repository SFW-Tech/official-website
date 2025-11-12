"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import CompanyDropdownMenu from "./TopSection/CompanyDropdownMenu";
import Servicesdropdownmenu from "./TopSection/Servicesdropdownmenu";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [hamburgerlist, sethamburgerlist] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    // 🔹 Ref for mobile menu container
    const menuRef = useRef<HTMLDivElement>(null);

    const handlehamburger = () => {
        sethamburgerlist((prev) => !prev);
        // Reset dropdowns when opening/closing menu
        if (hamburgerlist) {
            setMobileCompanyOpen(false);
            setMobileServicesOpen(false);
        }
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                sethamburgerlist(false);
                setMobileCompanyOpen(false);
                setMobileServicesOpen(false);
            }
        };
        if (hamburgerlist) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [hamburgerlist]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className={`fixed ${pathname === "/" ? (scrolled ? "top-1.5" : "top-10") : scrolled ? "top-2" : "top-0"
                } left-0 right-0 z-50 flex gap-10 justify-between items-center transition-all duration-300 ease-in-out 
                ${scrolled
                    ? "bg-[#001A5A] text-white shadow-lg mx-2 px-6 md:px-18 lg:px-28 py-6 md:py-5 rounded-2xl"
                    : "bg-transparent text-white mx-2 px-6 md:px-18 lg:px-28 py-6 md:py-5"
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
            <div className="hidden lg:flex flex-1 justify-center gap-8 text-sm font-semibold items-center whitespace-nowrap">
                <Link
                    href="/"
                    className={`cursor-pointer pt-3 px-5 pb-3 rounded-sm transition-colors duration-500 ease-in-out 
                    hover:bg-[#59d7f7] hover:text-black 
                     ${pathname === "/" ? "bg-[#59d7f7] text-black px-5 rounded-md" : ""}`}
                >
                    Home
                </Link>
                <CompanyDropdownMenu />
                <Servicesdropdownmenu />
                <Link
                    href="/blog"
                    className={`cursor-pointer pt-3 px-5 pb-3 rounded-sm transition-colors duration-500 ease-in-out 
                  hover:bg-[#59d7f7] hover:text-black 
                      ${pathname === "/blog" ? "bg-[#59d7f7] text-black px-5 rounded-md" : ""}`}
                >
                    Blog
                </Link>
                <Link
                    href="/contact"
                    className={`cursor-pointer pt-3 px-5 pb-3 rounded-sm transition-colors duration-500 ease-in-out 
      hover:bg-[#59d7f7] hover:text-black 
      ${pathname === "/contact" ? "bg-[#59d7f7] text-black px-5 rounded-md" : ""}`}
                >
                    Contact
                </Link>
            </div>

            {/* Hamburger */}
            <div className="lg:hidden mobile-menu-container" ref={menuRef}>
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

                <AnimatePresence>
                    {hamburgerlist && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute top-16 left-0 right-0 bg-[#001A5A] text-white px-6 py-4 rounded-2xl shadow-xl z-50"
                        >
                            <div className="flex flex-col space-y-1 overflow-hidden rounded-lg">
                                {/* Home */}
                                <Link
                                    href="/"
                                    className={`cursor-pointer py-3 hover:bg-white/10 transition rounded-md px-2 ${pathname === "/" ? "bg-[#59d7f7] text-black py-2 font-semibold" : ""
                                        }`}
                                    onClick={() => sethamburgerlist(false)}
                                >
                                    Home
                                </Link>

                                {/* Company Dropdown */}
                                <div className="py-2">
                                    <button
                                        className={`w-full text-left flex items-center justify-between hover:bg-white/10 transition rounded-md px-2 py-1 ${pathname === "/aboutus" || pathname === "/careers"
                                            ? "bg-[#59d7f7] text-black font-semibold py-2"
                                            : ""
                                            }`}
                                        onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                                    >
                                        Company
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 transition-transform duration-300 ${mobileCompanyOpen ? "rotate-180" : "rotate-0"
                                                }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <AnimatePresence>
                                        {mobileCompanyOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                                className="mt-2 ml-4 space-y-1 overflow-hidden"
                                            >
                                                <Link
                                                    href="/aboutus"
                                                    className={`block py-2 px-3 rounded-md hover:bg-white/10 transition text-sm ${pathname === "/aboutus" ? "bg-[#59d7f7] text-black font-semibold" : ""
                                                        }`}
                                                    onClick={() => sethamburgerlist(false)}
                                                >
                                                    About Us
                                                </Link>
                                                <Link
                                                    href="/careers"
                                                    className={`block py-2 px-3 rounded-md hover:bg-white/10 transition text-sm ${pathname === "/careers" ? "bg-[#59d7f7] text-black font-semibold" : ""
                                                        }`}
                                                    onClick={() => sethamburgerlist(false)}
                                                >
                                                    Careers
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Services Dropdown */}
                                <div className="py-2">
                                    <button
                                        className={`w-full text-left flex items-center justify-between hover:bg-white/10 transition rounded-md px-2 py-1 ${[
                                            "/webapplications",
                                            "/mobileapplications",
                                            "/websitedevelopment",
                                            "/e-commerce",
                                            "/odoo",
                                            "/ai",
                                            "/sap",
                                            "/servicenow",
                                            "/staffaugmentation"
                                        ].includes(pathname)
                                            ? "bg-[#59d7f7] text-black font-semibold py-2"
                                            : ""
                                            }`}
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                    >
                                        Services & Solutions
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : "rotate-0"
                                                }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <AnimatePresence>
                                        {mobileServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                                className="mt-2 ml-4 space-y-1 overflow-hidden"
                                            >
                                                <Link
                                                    href="/webapplications"
                                                    className={`block py-2 px-3 rounded-md hover:bg-white/10 transition text-sm ${pathname === "/webapplications" ? "bg-[#59d7f7] text-black font-semibold" : ""
                                                        }`}
                                                    onClick={() => sethamburgerlist(false)}
                                                >
                                                    Web Applications
                                                </Link>
                                                <Link
                                                    href="/mobileapplications"
                                                    className={`block py-2 px-3 rounded-md hover:bg-white/10 transition text-sm ${pathname === "/mobileapplications" ? "bg-[#59d7f7] text-black font-semibold" : ""
                                                        }`}
                                                    onClick={() => sethamburgerlist(false)}
                                                >
                                                    Mobile Applications
                                                </Link>
                                                <Link
                                                    href="/websitedevelopment"
                                                    className={`block py-2 px-3 rounded-md hover:bg-white/10 transition text-sm ${pathname === "/websitedevelopment" ? "bg-[#59d7f7] text-black font-semibold" : ""
                                                        }`}
                                                    onClick={() => sethamburgerlist(false)}
                                                >
                                                    Website
                                                </Link>
                                                <Link
                                                    href="/e-commerce"
                                                    className={`block py-2 px-3 rounded-md hover:bg-white/10 transition text-sm ${pathname === "/e-commerce" ? "bg-[#59d7f7] text-black font-semibold" : ""
                                                        }`}
                                                    onClick={() => sethamburgerlist(false)}
                                                >
                                                    E-Commerce
                                                </Link>
                                                <Link
                                                    href="/ai"
                                                    className={`block py-2 px-3 rounded-md hover:bg-white/10 transition text-sm ${pathname === "/ai" ? "bg-[#59d7f7] text-black font-semibold" : ""
                                                        }`}
                                                    onClick={() => sethamburgerlist(false)}
                                                >
                                                    AI
                                                </Link>
                                                <Link
                                                    href="/sap"
                                                    className={`block py-2 px-3 rounded-md hover:bg-white/10 transition text-sm ${pathname === "/sap" ? "bg-[#59d7f7] text-black font-semibold" : ""
                                                        }`}
                                                    onClick={() => sethamburgerlist(false)}
                                                >
                                                    SAP
                                                </Link>
                                                <Link
                                                    href="/odoo"
                                                    className={`block py-2 px-3 rounded-md hover:bg-white/10 transition text-sm ${pathname === "/odoo" ? "bg-[#59d7f7] text-black font-semibold" : ""
                                                        }`}
                                                    onClick={() => sethamburgerlist(false)}
                                                >
                                                    ODOO
                                                </Link>
                                                {/* <Link
                                                    href="/servicenow"
                                                    className={`block py-2 px-3 rounded-md hover:bg-white/10 transition text-sm ${
                                                        pathname === "/servicenow" ? "bg-[#59d7f7] text-black font-semibold" : ""
                                                    }`}
                                                    onClick={() => sethamburgerlist(false)}
                                                >
                                                    Service Now
                                                </Link> */}
                                                <Link
                                                    href="/staffaugmentation"
                                                    className={`block py-2 px-3 rounded-md hover:bg-white/10 transition text-sm ${pathname === "/staffaugmentation" ? "bg-[#59d7f7] text-black font-semibold" : ""
                                                        }`}
                                                    onClick={() => sethamburgerlist(false)}
                                                >
                                                    Staff Augmentation
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Blog */}
                                <Link
                                    href="/blog"
                                    className={`cursor-pointer py-2 hover:bg-white/10 transition rounded-md px-2 block ${pathname === "/blog" ? "bg-[#59d7f7] text-black font-semibold py-2" : ""
                                        }`}
                                    onClick={() => sethamburgerlist(false)}
                                >
                                    Blog
                                </Link>

                                {/* Contact */}
                                <Link
                                    href="/contact"
                                    className={`cursor-pointer py-2 hover:bg-white/10 transition rounded-md px-2 block ${pathname === "/contact" ? "bg-[#59d7f7] text-black font-semibold py-2" : ""
                                        }`}
                                    onClick={() => sethamburgerlist(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default Navbar;
