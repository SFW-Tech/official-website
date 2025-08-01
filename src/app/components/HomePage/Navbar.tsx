"use client";

import React, { useState } from "react";

function Navbar() {
    const [hamburgerlist, sethamburgerlist] = useState<boolean>(false);

    const handlehamburger = () => {
        sethamburgerlist((prev) => !prev);
    };

    return (
        <div className="sticky top-0 z-50 flex gap-10 justify-between items-center px-6 md:px-18 py-4 text-white">


            {/* Logo */}
            <div className="flex items-center">
                <img
                    src="/assets/Navbarassets/logo.png"
                    alt="Softworks Logo"
                    className="h-10 w-auto"
                />
            </div>


            {/* Menu for md (tablet) and above */}
            <div className="hidden md:flex gap-10 text-sm font-semibold items-center mx-auto">

                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">Services</p>
                <p className="cursor-pointer">About Us</p>
                <p className="cursor-pointer">Careers</p>
                <p className="cursor-pointer">Contacts</p>
            </div>



            {/* Hamburger for mobile (below md) */}
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
                            <p className="cursor-pointer py-3 hover:bg-white/10 transition">Home</p>
                            <p className="cursor-pointer py-3 hover:bg-white/10 transition">Services</p>
                            <p className="cursor-pointer py-3 hover:bg-white/10 transition">About Us</p>
                            <p className="cursor-pointer py-3 hover:bg-white/10 transition">Careers</p>
                            <p className="cursor-pointer py-3 hover:bg-white/10 transition">Contacts</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
