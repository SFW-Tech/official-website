import React from 'react'

function Footer() {
    return (
        <div
            className='w-full bg-blue-950 bg-cover bg-center'
            style={{ backgroundImage: "url('/assets/Home/footerassets/footerbg.png')" }}
        >


            <div className='px-46 py-5'>

                {/* Flex section */}
                <div className='flex justify-between text-white items-center'>

                    <h3 className='text-xl'>Need any expert business & Consulting services?</h3>

                    <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 lg:px-6 lg:py-3 rounded-2xl shadow-lg cursor-pointer text-sm md:text-base lg:text-base transition-all duration-300">
                        Connect With Us
                    </button>

                </div>

                {/* Grid Section */}

                <div className='grid grid-cols-4 gap-6 mt-12 text-sm'>

                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold'>Quick Links</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                    </div>

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

                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold'>Contact</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <p>Sales: +91 98941 13103 / +91 9994317168</p>
                        <p>Career: +91 73977 20330</p>
                        <p>Mailbox: info@sfwtechnologies.com</p>
                    </div>




                    {/* Address Grid */}

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
                                    #6, Ground Floor, Kaanchan, North Huzur Road,<br />
                                    Race Course, Coimbatore, Tamil Nadu, 641018
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
                                    7/2A, Shreesha Building, First Floor, Central Studio<br />
                                    Road, Dhanalakshmi Puram South, Singanallur,<br />
                                    Coimbatore, TamilNadu, 641005
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
                                    C - Block 904 , Riddhi's, Pramukh Elegance ,<br />
                                    Jeedimetla, Hyderabad, Telangana, 500055
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

            <div className='px-28 py-6'>
                <hr className="border-gray-400 opacity-40" />

            </div>




            <div className='px-36 pb-6 flex justify-between items-center'>
                {/* Left Side */}

                <div className='flex gap-8 text-white  text-sm'>



                    <div>
                        <p>©2025 Softworks Technologies. All Rights Reserved</p>
                    </div>
                    <div className="hidden sm:block h-4 border-l border-gray-400 opacity-40"></div>
                    <div>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className="hidden sm:block h-4 border-l border-gray-400 opacity-40"></div>
                    <div>
                        Privacy Policy
                    </div>

                </div>



                {/* Right Side Logos */}

                <div className='flex gap-4  items-center text-white'>
                    <img src="/assets/Home/footerassets/Insta.png" alt="Instagram" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
                    <img src="/assets/Home/footerassets/Linkedin.png" alt="LinkedIn" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
                    <img src="/assets/Home/footerassets/Twitter.png" alt="Twitter" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
                    <img src="/assets/Home/footerassets/Facebook.png" alt="Facebook" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
                </div>




            </div>


        </div>
    )
}

export default Footer