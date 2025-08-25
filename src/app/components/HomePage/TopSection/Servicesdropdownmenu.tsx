"use client"
import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Servicesdropdownmenu() {

    const pathname = usePathname()

    return (
        <div>
            <Menu as="div" className="relative inline-block">
                <MenuButton
                    className={`hidden md:flex gap-2 text-sm font-semibold py-3 ${pathname === "/webapplications" 
                        ? "bg-[#59d7f7] text-black px-5 rounded-md"
                        : ""
                        }`}                   >
                    Services & Solution
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    {/* <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" /> */}
                </MenuButton>

                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-[#59d7f7] shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    <div className="py-1">
                        <MenuItem>
                            <Link
                                href="/webapplications"
                                className="block px-4 py-2 text-sm text-black  data-focus:bg-cyan-300 data-focus:outline-hidden"
                            >
                                Web Applications
                            </Link>
                        </MenuItem>

                        <hr className='text-black' />





                    </div>
                </MenuItems>
            </Menu>
        </div>
    )
}

export default Servicesdropdownmenu