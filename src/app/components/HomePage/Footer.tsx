"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedLocation, setExpandedLocation] = useState<string | null>(null);

    const locations = {
        india: {
            contacts: [
                { type: "Sales", numbers: ["+91 98941 13103", "+91 99943 17168"] },
                { type: "Career", numbers: ["+91 73977 20330"] }
            ],
            offices: [
                {
                    type: "Registered Office",
                    address: "#6, Ground Floor, Kaanchan, North Huzur Road, Coimbatore, Tamil Nadu, 641018",
                    link: "https://maps.app.goo.gl/2UZnYQSZTpfRNFsy9"
                },
                {
                    type: "Development Center",
                    address: "7/2A, Shreesha Building, First Floor, Singanallur, Coimbatore, Tamil Nadu, 641005",
                    link: "https://maps.app.goo.gl/Z6ZCF68WdCUyozsX7"
                },
                {
                    type: "Branch",
                    address: "C-Block 904, Riddhi's, Pramukh Elegance, Jeedimetla, Hyderabad, Telangana, 500055",
                    link: "https://maps.app.goo.gl/C4w8P7kSMqyQjgHP8"
                }
            ]
        },
        singapore: [
            {
                type: "Office",
                address: "60 Paya Lebar Road #06-28, Paya Lebar Square, Singapore 409051",
                link: "https://maps.app.goo.gl/rQex92vFNuAp66kE7",
                phone: [
                    { type: "Sales", number: "+65 9073 1373" },
                    { type: "Sales", number: "+65 9108 2034" }
                ]
            }
        ],
        germany: [
            {
                type: "Office",
                address: "Coming Soon!!",
                link:"",
                phone: [
                    { type: "Sales", number: "+49 XXX XXXX XXX" }
                ]
            }
        ]
    };

    // Animation variants for smooth expand/collapse
    const containerVariants: Variants = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: "auto",
            opacity: 1,
            transition: {
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.2, delay: 0.1 }
            }
        },
        exit: {
            height: 0,
            opacity: 0,
            transition: {
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.2 }
            }
        }
    };

    return (
        <div
            className='w-full bg-blue-950 bg-cover bg-center'
            style={{ backgroundImage: "url('/assets/Home/footerassets/footerbg.png')" }}
        >
            {/* Top Section */}
            <div className='px-4 sm:px-6 md:px-12 lg:px-20 xl:px-46 py-5'>
                {/* CTA Section */}
                <div className='flex flex-col sm:flex-row justify-between text-white items-start sm:items-center gap-4'>
                    <h3 className='text-lg sm:text-xl text-center sm:text-left'>
                        Need any expert business & Consulting services?
                    </h3>
                    <button className="connectbutton" onClick={() => setIsOpen(true)}>
                        <span className="animatebutton"></span>
                        <span className="buttonbg">Connect with us</span>
                    </button>
                </div>

                {/* Main Grid - 4 Columns */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 text-sm'>
                    {/* Column 1: Locations with Expandable View */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold text-base'>Our Offices</h2>
                        <hr className="border-gray-400 opacity-40" />

                        {/* India */}
                        <div className='border-b border-gray-700 pb-2'>
                            <button
                                onClick={() => setExpandedLocation(expandedLocation === 'india' ? null : 'india')}
                                className='flex items-center justify-between w-full text-left group'
                            >
                                <div className='flex items-center gap-2'>
                                    <img src="https://flagcdn.com/w20/in.png" alt="India" className='w-5 h-3.5' />
                                    <span className='font-medium text-sm group-hover:text-[#59D7F7]'>India (3)</span>
                                </div>
                                <motion.svg
                                    className='w-4 h-4'
                                    animate={{ rotate: expandedLocation === 'india' ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </motion.svg>
                            </button>

                            <AnimatePresence>
                                {expandedLocation === 'india' && (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={containerVariants}
                                        className='overflow-hidden'
                                    >
                                        <div className='mt-2 space-y-2 pl-1'>
                                            {locations.india.offices.map((office, idx) => (
                                                <div key={idx} className='text-xs mb-3'>
                                                    <p className='text-gray-200 font-medium'>{office.type}</p>
                                                    <p className='text-gray-400 leading-relaxed mb-1'>{office.address}</p>
                                                    <Link
                                                        href={office.link}
                                                        target='_blank'
                                                        className='text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 mt-1'
                                                    >
                                                        Direction →
                                                    </Link>
                                                </div>
                                            ))}

                                            {/* Contact Numbers */}
                                            <div className='mt-4 pt-2 border-t border-gray-700'>
                                                <p className='text-gray-200 font-medium mb-1'>Contact:</p>
                                                {locations.india.contacts.map((contact, idx) => (
                                                    <p key={idx} className='text-cyan-300 text-xs'>
                                                        {contact.type}: {contact.numbers.join(', ')}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Singapore */}
                        <div className='border-b border-gray-700 pb-2'>
                            <button
                                onClick={() => setExpandedLocation(expandedLocation === 'singapore' ? null : 'singapore')}
                                className='flex items-center justify-between w-full text-left group'
                            >
                                <div className='flex items-center gap-2'>
                                    <img src="https://flagcdn.com/w20/sg.png" alt="Singapore" className='w-5 h-3.5' />
                                    <span className='font-medium text-sm group-hover:text-[#59D7F7]'>Singapore</span>
                                </div>
                                <motion.svg
                                    className='w-4 h-4'
                                    animate={{ rotate: expandedLocation === 'singapore' ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </motion.svg>
                            </button>

                            <AnimatePresence>
                                {expandedLocation === 'singapore' && (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={containerVariants}
                                        className='overflow-hidden'
                                    >
                                        <div className='mt-2 pl-1'>
                                            {locations.singapore.map((loc, idx) => (
                                                <div key={idx} className='text-xs mb-3'>
                                                    <p className='text-gray-200 font-medium'>{loc.type}</p>
                                                    <p className='text-gray-400 leading-relaxed mb-1'>{loc.address}</p>
                                                    {loc.phone && (
                                                        <div className='mt-1'>
                                                            {Object.entries(
                                                                loc.phone.reduce((acc, phone) => {
                                                                    if (!acc[phone.type]) acc[phone.type] = [];
                                                                    acc[phone.type].push(phone.number);
                                                                    return acc;
                                                                }, {} as Record<string, string[]>)
                                                            ).map(([type, numbers], i) => (
                                                                <p key={i} className='text-cyan-300'>
                                                                    {type}: {numbers.join(', ')}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    )}
                                                    <Link
                                                        href={loc.link}
                                                        target='_blank'
                                                        className='text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 mt-1'
                                                    >
                                                        Direction →
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Germany */}
                        <div>
                            <button
                                onClick={() => setExpandedLocation(expandedLocation === 'germany' ? null : 'germany')}
                                className='flex items-center justify-between w-full text-left group'
                            >
                                <div className='flex items-center gap-2'>
                                    <img src="https://flagcdn.com/w20/de.png" alt="Germany" className='w-5 h-3.5' />
                                    <span className='font-medium text-sm group-hover:text-[#59D7F7]'>Germany</span>
                                </div>
                                <motion.svg
                                    className='w-4 h-4'
                                    animate={{ rotate: expandedLocation === 'germany' ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </motion.svg>
                            </button>

                            <AnimatePresence>
                                {expandedLocation === 'germany' && (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={containerVariants}
                                        className='overflow-hidden'
                                    >
                                        <div className='mt-2 pl-1'>
                                            {locations.germany.map((loc, idx) => (
                                                <div key={idx} className='text-xs mb-3'>
                                                    <p className='text-gray-200 font-medium'>{loc.type}</p>
                                                    <p className='text-gray-400 leading-relaxed mb-1'>{loc.address}</p>
                                                    {loc.phone && (
                                                        <div className='mt-1'>
                                                            {Object.entries(
                                                                loc.phone.reduce((acc, phone) => {
                                                                    if (!acc[phone.type]) acc[phone.type] = [];
                                                                    acc[phone.type].push(phone.number);
                                                                    return acc;
                                                                }, {} as Record<string, string[]>)
                                                            ).map(([type, numbers], i) => (
                                                                <p key={i} className='text-cyan-300'>
                                                                    {type}: {numbers.join(', ')}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    )}
                                                    <Link
                                                        href={loc.link}
                                                        target='_blank'
                                                        className='text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 mt-1'
                                                    >
                                                        Direction →
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Column 2: Contact Info */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold text-base'>Get In Touch</h2>
                        <hr className="border-gray-400 opacity-40" />

                        {/* Email Section */}
                        <div className='space-y-1'>
                            <div>
                                <p className='text-xs text-gray-300 font-medium'>Sales Enquiry:</p>
                                <a href="mailto:sales@sfwtechnologies.com" className='text-sm hover:text-[#59D7F7]'>
                                    sales@sfwtechnologies.com
                                </a>
                            </div>
                            <div>
                                <p className='text-xs text-gray-300 font-medium'>Career Enquiry:</p>
                                <a href="mailto:info@sfwtechnologies.com" className='text-sm hover:text-[#59D7F7]'>
                                    info@sfwtechnologies.com
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Column 3: Services */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold text-base'>Our Services</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <Link href="/webapplications" className='hover:text-[#59D7F7] text-sm'>Web Application</Link>
                        <Link href="/mobileapplications" className='hover:text-[#59D7F7] text-sm'>Mobile Application</Link>
                        <Link href="/sap" className='hover:text-[#59D7F7] text-sm'>SAP</Link>
                        <Link href="/ai" className='hover:text-[#59D7F7] text-sm'>Artificial Intelligence</Link>
                        <Link href="/staffaugmentation" className='hover:text-[#59D7F7] text-sm'>Staff Augmentation</Link>
                        <Link href="/odoo" className='hover:text-[#59D7F7] text-sm'>Odoo</Link>
                    </div>

                    {/* Column 4: Quick Links & QR */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold text-base'>Quick Links</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <Link href="/careers" className='hover:text-[#59D7F7] text-sm'>Careers</Link>
                        <Link href="/contact" className='hover:text-[#59D7F7] text-sm'>Contact Us</Link>

                        <div className='mt-3'>
                            <img src="/assets/QrCode/BitlyQr.png" alt="Qr Code" className='max-h-20 w-auto mb-1' />
                            <p className='text-white font-semibold text-xs'>Scan For Location</p>
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
                    <p className=''>Registered As : SFW Technologies India Pvt Ltd  </p>

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
        </div>
    );
}

export default Footer;