import React from 'react'

function Footer() {
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

                    <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold px-5 py-2 md:px-8 md:py-4 lg:px-6 lg:py-3 rounded-2xl shadow-lg cursor-pointer text-sm md:text-base transition-all duration-300">
                        Connect With Us
                    </button>
                </div>




                {/* Grid ------------ */}

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-10 text-sm'>


                    
                    {/* Quick Links */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold'>Quick Links</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                    </div>

                    {/* Services */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold'>Our Services</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <p>Custom Application</p>
                        <p>Mobile Application</p>
                        <p>Web Application</p>
                        <p>Odoo</p>
                        <p>Staff Augmentation</p>
                        <p>Ecommerce Applications</p>
                        <p>ServiceNow</p>
                        <p>UX/UI Designing</p>
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
                                    Get Direction
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
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
                                    Get Direction
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
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
                    <img src="/assets/Home/footerassets/Insta.png" alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition" />
                    <img src="/assets/Home/footerassets/Linkedin.png" alt="Linkedin" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition" />
                    <img src="/assets/Home/footerassets/Twitter.png" alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition" />
                    <img src="/assets/Home/footerassets/Facebook.png" alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition" />
                </div>
            </div>
        </div>
    )
}

export default Footer
