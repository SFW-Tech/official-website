"use client"
import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

function ServicesDropdownMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Menu as="div" className="relative inline-block">
        <MenuButton
          className={`hidden md:flex gap-2 text-sm font-semibold py-3 cursor-pointer hover:bg-[#59d7f7] hover:text-black px-2 rounded-md ${[
              "/webapplications",
              "/mobileapplications",
              "/websitedevelopment",
              "/e-commerce",
              "/odoo",
              "/ai"

            ].includes(pathname)
              ? "bg-[#59d7f7] text-black px-5 rounded-md"
              : ""
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
        </MenuButton>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -15, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-1 w-42 origin-top rounded-md bg-[#59d7f7] shadow-lg outline-1 outline-black/5 overflow-hidden"
            >
              <MenuItems static>
                <div className="py-1">
                  <MenuItem>
                    <Link
                      href="/webapplications"
                      className="block px-4 py-2 text-sm text-black text-center hover:bg-cyan-300"
                    >
                      Web Applications
                    </Link>
                  </MenuItem>

                  <hr className="border-black/30" />

                  <MenuItem>
                    <Link
                      href="/mobileapplications"
                      className="block px-4 py-2 text-sm text-black text-center hover:bg-cyan-300"
                    >
                      Mobile Applications
                    </Link>
                  </MenuItem>

                  <hr className="border-black/30" />

                  <MenuItem>
                    <Link
                      href="/websitedevelopment"
                      className="block px-4 py-2 text-sm text-black text-center hover:bg-cyan-300"
                    >
                      Website
                    </Link>
                  </MenuItem>

                  <hr className="border-black/30" />

                  <MenuItem>
                    <Link
                      href="/e-commerce"
                      className="block px-4 py-2 text-sm text-black text-center hover:bg-cyan-300"
                    >
                      E-Commerce
                    </Link>
                  </MenuItem>

                  <hr className="border-black/30" />

                  <MenuItem>
                    <Link
                      href="/ai"
                      className="block px-4 py-2 text-sm text-black text-center hover:bg-cyan-300"
                    >
                      AI
                    </Link>
                  </MenuItem>

                  <hr className="border-black/30" />

                  <MenuItem>
                    <Link
                      href="/odoo"
                      className="block px-4 py-2 text-sm text-black text-center hover:bg-cyan-300"
                    >
                      ODOO
                    </Link>
                  </MenuItem>
                  <hr className="border-black/30" />

                  <MenuItem>
                    <Link
                      href="/servicenow"
                      className="block px-4 py-2 text-sm text-black text-center hover:bg-cyan-300"
                    >
                      Service Now
                    </Link>
                  </MenuItem>

                  <hr className="border-black/30" />

                  <MenuItem>
                    <Link
                      href="/staffaugmentation"
                      className="block px-4 py-2 text-sm text-black text-center hover:bg-cyan-300"
                    >
                      Staff Augmentation
                    </Link>
                  </MenuItem>

                </div>
              </MenuItems>
            </motion.div>
          )}
        </AnimatePresence>
      </Menu>
    </div>
  );
}

export default ServicesDropdownMenu;
