"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

function ServicesDropdownMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activePaths = [
    "/webapplications",
    "/mobileapplications",
    "/websitedevelopment",
    "/e-commerce",
    "/odoo",
    "/ai",
    "/servicenow",
    "/staffaugmentation"
  ];

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button */}
      <button
        className={`hidden md:flex gap-2 text-sm font-semibold py-3 cursor-pointer hover:bg-[#59d7f7] hover:text-black px-3 rounded-md ${activePaths.includes(pathname) ? "bg-[#59d7f7] text-black" : ""
          }`}
      >
        Services & Solutions
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
            }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 z-10 mt-1 w-48 origin-top rounded-md bg-[#59d7f7] shadow-lg outline-1 outline-black/5"
          >
            <div className="">
              <Link href="/webapplications" className="block px-3 py-2 text-sm text-black text-center hover:bg-cyan-300 hover:rounded-md">
                Web Applications
              </Link>
              <hr className="border-black/30" />

              <Link href="/mobileapplications" className="block px-3 py-2 text-sm text-black text-center hover:bg-cyan-300">
                Mobile Applications
              </Link>
              <hr className="border-black/30" />

              <Link href="/websitedevelopment" className="block px-3 py-2 text-sm text-black text-center hover:bg-cyan-300">
                Website
              </Link>
              <hr className="border-black/30" />

              <Link href="/e-commerce" className="block px-3 py-2 text-sm text-black text-center hover:bg-cyan-300">
                E-Commerce
              </Link>
              <hr className="border-black/30" />

              <Link href="/ai" className="block px-3 py-2 text-sm text-black text-center hover:bg-cyan-300">
                AI
              </Link>
              <hr className="border-black/30" />

              <Link href="/odoo" className="block px-3 py-2 text-sm text-black text-center hover:bg-cyan-300">
                ODOO
              </Link>
              <hr className="border-black/30" />

              <Link href="/servicenow" className="block px-3 py-2 text-sm text-black text-center hover:bg-cyan-300">
                Service Now
              </Link>
              <hr className="border-black/30" />

              <Link href="/staffaugmentation" className="block px-3 py-2 text-sm text-black text-center hover:bg-cyan-300 hover:rounded-md">
                Staff Augmentation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ServicesDropdownMenu;
