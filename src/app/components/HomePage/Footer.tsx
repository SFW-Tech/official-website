"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence } from "framer-motion"
import ContactModal from './ContactModal'

function Footer() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className='w-full bg-blue-950 bg-cover bg-center'
            style={{ backgroundImage: "url('/assets/Home/footerassets/footerbg.png')" }}
        >
            {/* Top Section */}
            <div className='px-4 sm:px-6 md:px-12 lg:px-20 xl:px-46 py-5'>
                {/* Flex Section */}
                <div className='flex flex-col sm:flex-row justify-between text-white items-start sm:items-center gap-4'>
                    <h3 className='text-lg sm:text-xl text-center sm:text-left'>
                        Need any expert business & Consulting services?
                    </h3>

                    <button className="connectbutton" onClick={() => setIsOpen(true)}>
                        <span className="animatebutton"></span>
                        <span className="buttonbg">Connect with us</span>
                    </button>
                </div>

                {/* Grid ------------ */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-10 text-sm'>
                    {/* Quick Links */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold'>Quick Links</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <Link href="/careers">Careers</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>

                    {/* Services */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold'>Our Services</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <Link href="/websitedevelopment">Custom Application</Link>
                        <Link href="/mobileapplications">Mobile Application</Link>
                        <Link href="/webapplications">Web Application</Link>
                        <Link href="/ai">Artificial Intelligence</Link>
                        <Link href="/odoo">Odoo</Link>
                        <Link href="/staffaugmentation">Staff Augmentation</Link>
                        <Link href="/e-commerce">Ecommerce Applications</Link>
                        <Link href="/servicenow">ServiceNow</Link>
                    </div>

                    {/* Contact */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold'>Contact</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <p>Sales: +91 98941 13103 / +91 9994317168</p>
                        <p>Career: +91 73977 20330</p>
                        <p>Mailbox: info@sfwtechnologies.com</p>
                    </div>

                    {/* Address */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold'>Find us at</h2>
                        <hr className="border-gray-400 opacity-40" />

                        {/* Registered Office */}
                        <div className='flex gap-3 items-start'>
                            <div className='flex-shrink-0 mt-1'>
                                <img src="/assets/Home/footerassets/location.png" alt="Location" className="w-4 h-4" />
                            </div>
                            <div className='flex-1'>
                                <p className="text-white font-medium mb-1">Registered Office:</p>
                                <p className="text-gray-300 text-xs leading-relaxed">
                                    #6, Ground Floor, Kaanchan, North Huzur Road, Race Course, Coimbatore, Tamil Nadu, 641018
                                </p>
                                <button className="text-cyan-400 text-xs mt-2 flex items-center gap-1 hover:text-cyan-300 transition">
                                    <Link href="https://maps.app.goo.gl/2UZnYQSZTpfRNFsy9" target='blank'>
                                        Get Direction
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Development Center */}
                        <div className='flex gap-3 items-start'>
                            <div className='flex-shrink-0 mt-1'>
                                <img src="/assets/Home/footerassets/location.png" alt="Location" className="w-4 h-4" />
                            </div>
                            <div className='flex-1'>
                                <p className="text-white font-medium mb-1">Development Center:</p>
                                <p className="text-gray-300 text-xs leading-relaxed">
                                    7/2A, Shreesha Building, First Floor, Central Studio Road, Dhanalakshmi Puram South, Singanallur, Coimbatore, Tamil Nadu, 641005
                                </p>
                                <button className="text-cyan-400 text-xs mt-2 flex items-center gap-1 hover:text-cyan-300 transition">
                                    <Link href="https://maps.app.goo.gl/Z6ZCF68WdCUyozsX7" target='blank'>
                                        Get Direction
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Branch */}
                        <div className='flex gap-3 items-start'>
                            <div className='flex-shrink-0 mt-1'>
                                <img src="/assets/Home/footerassets/location.png" alt="Location" className="w-4 h-4" />
                            </div>
                            <div className='flex-1'>
                                <p className="text-white font-medium mb-1">Branch:</p>
                                <p className="text-gray-300 text-xs leading-relaxed">
                                    C - Block 904 , Riddhi's, Pramukh Elegance, Jeedimetla, Hyderabad, Telangana, 500055
                                </p>
                                <button className="text-cyan-400 text-xs mt-2 flex items-center gap-1 hover:text-cyan-300 transition">
                                    Get Direction
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className='px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-6'>
                <hr className="border-gray-400 opacity-40" />
            </div>

            {/* Bottom Section */}
            <div className='px-4 sm:px-6 md:px-12 lg:px-20 xl:px-36 pb-6 flex flex-col sm:flex-row justify-between items-center gap-4'>
                {/* Left */}
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 text-white text-xs sm:text-sm items-center sm:items-start'>
                    <p>©2025 Softworks Technologies. All Rights Reserved</p>
                    <div className="hidden sm:block h-4 border-l border-gray-400 opacity-40"></div>
                    <p>Terms & Conditions</p>
                    <div className="hidden sm:block h-4 border-l border-gray-400 opacity-40"></div>
                    <p>Privacy Policy</p>
                </div>

                {/* Right Icons */}
                <div className='flex gap-4 items-center text-white'>
                    <Link href="https://www.linkedin.com/company/softworks-technologies/?viewAsMember=true" target='blank'>
                        <img src="/assets/Home/footerassets/Linkedin.png" alt="Linkedin"
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 lg:w-8 cursor-pointer hover:scale-110 transition" />
                    </Link>
                    <Link href="https://x.com/Softworkstech1" target='blank'>
                        <img src="/assets/Home/footerassets/Twitter.png" alt="Twitter"
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 lg:w-8 cursor-pointer hover:scale-110 transition" />
                    </Link>
                    <Link href="https://www.instagram.com/softworkstech19/" target='blank'>
                        <img src="/assets/Home/footerassets/Insta.png" alt="Instagram"
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 lg:w-8 cursor-pointer hover:scale-110 transition" />
                    </Link>
                    <Link href="https://www.facebook.com/softworkstech19" target='blank'>
                        <img src="/assets/Home/footerassets/Facebook.png" alt="Facebook"
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 lg:w-8 cursor-pointer hover:scale-110 transition" />
                    </Link>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />}
            </AnimatePresence>
        </div>
    )
}

export default Footer
