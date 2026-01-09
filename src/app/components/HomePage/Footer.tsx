"use client";
import Link from "next/link";
import React, { useState } from "react";
import ContactModal from "@/app/components/ModalForms/ContactModal";

function Footer() {
    const [isOpen, setIsOpen] = useState(false);

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
                link: "https://www.google.com/maps/search/Germany",
                phone: [
                    { type: "Sales", number: "+49 XXX XXXX XXX" }
                ]
            }
        ],
        canada: [
            {
                type: "Office",
                address: "123 Maple Street, Suite 400, Toronto, ON M5V 2L7, Canada",
                link: "https://maps.app.goo.gl/7YJkXm3Z9W2R8T6V7",
                phone: [
                    { type: "Sales", number: "+1 (416) 555-0123" }
                ]
            }
        ]
    };


    return (
        <div
            className='w-full bg-blue-950 bg-cover bg-center'
            style={{ backgroundImage: "url('/assets/Home/footerassets/footerbg.png')" }}
        >
            {/* Top Section */}
            <div className='px-4 sm:px-6 md:px-12 lg:px-20 xl:px-46 py-5'>
                {/* CTA Section */}
                <div className='flex flex-col sm:flex-row justify-between text-white items-center gap-4'>
                    <h3 className='text-lg sm:text-xl text-center sm:text-left'>
                        Need any expert business & Consulting services?
                    </h3>
                    <button className="connectbutton" onClick={() => setIsOpen(true)}>
                        <span className="animatebutton"></span>
                        <span className="buttonbg">Connect with us</span>
                    </button>
                </div>

                {/* Main Grid - 4 Columns */}
                {/* Address Grid - 5 Columns */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10 lg:mt-15 text-sm'>
                    {/* India */}
                    <div className='flex flex-col text-white gap-3'>
                        <div className='flex items-center gap-2'>
                            <img src="https://flagcdn.com/w20/in.png" alt="India" className='w-5 h-3.5' />
                            <h2 className='font-semibold text-base'>India</h2>
                        </div>
                        <hr className="border-gray-400 opacity-40" />
                        <div className='space-y-4'>
                            {locations.india.offices.map((office, idx) => (
                                <div key={idx} className='text-xs'>
                                    <p className='text-gray-200 font-medium'>{office.type}</p>
                                    <p className='text-gray-400 leading-relaxed'>{office.address}</p>
                                    <Link href={office.link} target='_blank' className='text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 mt-1'>
                                        Direction →
                                    </Link>
                                </div>
                            ))}
                            <div className='pt-2 border-t border-gray-700/50'>
                                <p className='text-gray-200 font-medium text-xs mb-1'>Contact:</p>
                                {locations.india.contacts.map((contact, idx) => (
                                    <p key={idx} className='text-cyan-300 text-xs'>
                                        {contact.type}: {contact.numbers.map((num, i) => (
                                            <React.Fragment key={i}>
                                                <a href={`tel:${num.replace(/\s+/g, '')}`} className="hover:underline">
                                                    {num}
                                                </a>
                                                {i < contact.numbers.length - 1 && " / "}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Singapore */}
                    <div className='flex flex-col text-white gap-3'>
                        <div className='flex items-center gap-2'>
                            <img src="https://flagcdn.com/w20/sg.png" alt="Singapore" className='w-5 h-3.5' />
                            <h2 className='font-semibold text-base'>Singapore</h2>
                        </div>
                        <hr className="border-gray-400 opacity-40" />
                        <div className='space-y-4 text-xs text-gray-400'>
                            {locations.singapore.map((loc, idx) => (
                                <div key={idx}>
                                    <p className='text-gray-200 font-medium'>{loc.type}</p>
                                    <p className='leading-relaxed'>{loc.address}</p>
                                    <div className='mt-2'>
                                        {Object.entries(
                                            loc.phone.reduce((acc: any, p: any) => {
                                                if (!acc[p.type]) acc[p.type] = [];
                                                acc[p.type].push(p.number);
                                                return acc;
                                            }, {})
                                        ).map(([type, numbers]: any, i) => (
                                            <p key={i} className='text-cyan-300'>
                                                {type}: {numbers.map((num: string, idx: number) => (
                                                    <React.Fragment key={idx}>
                                                        <a href={`tel:${num.replace(/\s+/g, '')}`} className="hover:underline">
                                                            {num}
                                                        </a>
                                                        {idx < numbers.length - 1 && " / "}
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                        ))}
                                    </div>
                                    <Link href={loc.link} target='_blank' className='text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 mt-1'>
                                        Direction →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Germany */}
                    <div className='flex flex-col text-white gap-3'>
                        <div className='flex items-center gap-2'>
                            <img src="https://flagcdn.com/w20/de.png" alt="Germany" className='w-5 h-3.5' />
                            <h2 className='font-semibold text-base'>Germany</h2>
                        </div>
                        <hr className="border-gray-400 opacity-40" />
                        <div className='space-y-4 text-xs text-gray-400'>
                            {locations.germany.map((loc, idx) => (
                                <div key={idx}>
                                    <p className='text-gray-200 font-medium'>{loc.type}</p>
                                    <p className='leading-relaxed'>{loc.address}</p>
                                    <div className='mt-2'>
                                        {Object.entries(
                                            loc.phone.reduce((acc: any, p: any) => {
                                                if (!acc[p.type]) acc[p.type] = [];
                                                acc[p.type].push(p.number);
                                                return acc;
                                            }, {})
                                        ).map(([type, numbers]: any, i) => (
                                            <p key={i} className='text-cyan-300'>
                                                {type}: {numbers.map((num: string, idx: number) => (
                                                    <React.Fragment key={idx}>
                                                        <a href={`tel:${num.replace(/\s+/g, '')}`} className="hover:underline">
                                                            {num}
                                                        </a>
                                                        {idx < numbers.length - 1 && " / "}
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                        ))}
                                    </div>
                                    <Link href={loc.link} target='_blank' className='text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 mt-1'>
                                        Direction →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Canada */}
                    <div className='flex flex-col text-white gap-3'>
                        <div className='flex items-center gap-2'>
                            <img src="https://flagcdn.com/w20/ca.png" alt="Canada" className='w-5 h-3.5' />
                            <h2 className='font-semibold text-base'>Canada</h2>
                        </div>
                        <hr className="border-gray-400 opacity-40" />
                        <div className='space-y-4 text-xs text-gray-400'>
                            {locations.canada.map((loc, idx) => (
                                <div key={idx}>
                                    <p className='text-gray-200 font-medium'>{loc.type}</p>
                                    <p className='leading-relaxed'>{loc.address}</p>
                                    <div className='mt-2'>
                                        {Object.entries(
                                            loc.phone.reduce((acc: any, p: any) => {
                                                if (!acc[p.type]) acc[p.type] = [];
                                                acc[p.type].push(p.number);
                                                return acc;
                                            }, {})
                                        ).map(([type, numbers]: any, i) => (
                                            <p key={i} className='text-cyan-300'>
                                                {type}: {numbers.map((num: string, idx: number) => (
                                                    <React.Fragment key={idx}>
                                                        <a href={`tel:${num.replace(/\s+/g, '')}`} className="hover:underline">
                                                            {num}
                                                        </a>
                                                        {idx < numbers.length - 1 && " / "}
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                        ))}
                                    </div>
                                    <Link href={loc.link} target='_blank' className='text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 mt-1'>
                                        Direction →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold text-base'>Get In Touch</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <div className='space-y-4 text-sm'>
                            <div>
                                <p className='text-xs text-gray-300 font-medium'>Sales Enquiry:</p>
                                <a href="mailto:sales@sfwtechnologies.com" className='hover:text-[#59D7F7]'>
                                    sales@sfwtechnologies.com
                                </a>
                            </div>
                            <div>
                                <p className='text-xs text-gray-300 font-medium'>Career Enquiry:</p>
                                <a href="mailto:info@sfwtechnologies.com" className='hover:text-[#59D7F7]'>
                                    info@sfwtechnologies.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-16 mb-8'>

                </div>

                {/* Second Grid - 3 Columns (Services, Quick Links, QR) */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-sm'>
                    {/* Column 1: Services */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold text-base'>Our Services</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <div className='grid grid-cols-2 gap-2'>
                            <Link href="/webapplications" className='hover:text-[#59D7F7] text-sm'>Web Application</Link>
                            <Link href="/mobileapplications" className='hover:text-[#59D7F7] text-sm'>Mobile Application</Link>
                            <Link href="/sap" className='hover:text-[#59D7F7] text-sm'>SAP</Link>
                            <Link href="/ai" className='hover:text-[#59D7F7] text-sm'>Artificial Intelligence</Link>
                            <Link href="/staffaugmentation" className='hover:text-[#59D7F7] text-sm'>Staff Augmentation</Link>
                            <Link href="/odoo" className='hover:text-[#59D7F7] text-sm'>Odoo</Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold text-base'>Quick Links</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <div className='flex flex-col gap-2'>
                            <Link href="/careers" className='hover:text-[#59D7F7] text-sm'>Careers</Link>
                            <Link href="/contact" className='hover:text-[#59D7F7] text-sm'>Contact Us</Link>
                            <Link href="/about" className='hover:text-[#59D7F7] text-sm'>About Us</Link>
                        </div>
                    </div>

                    {/* Column 3: QR Code */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold text-base'>Scan for Location</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <div className='flex items-center gap-4'>
                            <img src="/assets/QrCode/BitlyQr.png" alt="Qr Code" className='h-24 w-auto bg-white p-1 rounded-sm' />
                            <p className='text-gray-300 text-xs leading-relaxed'>
                                Quick access to our development center location via Google Maps.
                            </p>
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
            <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default Footer;