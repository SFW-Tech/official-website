import React from 'react';

function Topbar() {
    return (
        <div className="w-full bg-white text-gray-800 text-sm">
            <div className="flex flex-wrap justify-between items-center px-4 sm:px-8 md:px-16 lg:px-28 py-2 gap-y-2">

                {/* Left Section */}
                <div className="flex justify-between w-full sm:w-auto sm:justify-start gap-4">
                    {/* Email */}
                    <div className="flex items-center gap-2">
                        <img src="/assets/Home/Topbarassets/mail logo.png" alt="mail" className="w-4 h-4" />
                        <p className="text-xs ">info@sfwtechnologies.com</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block h-4 border-l border-gray-400"></div>

                    {/* Phone */}
                    <div className="flex items-center gap-2">
                        <img src="/assets/Home/Topbarassets/phone logo.png" alt="phone" className="w-4 h-4" />
                        <p className="text-xs">+91 98941 13103</p>
                    </div>
                </div>

                {/* Right Section - Socials Media */}
                <div className="hidden sm:flex gap-3 sm:gap-4 items-center justify-center sm:justify-end w-full sm:w-auto">
                    <img src="/assets/Home/Topbarassets/insta logo.png" alt="Instagram" className="w-4 h-4 cursor-pointer hover:scale-110 transition" />
                    <img src="/assets/Home/Topbarassets/linkednin.png" alt="LinkedIn" className="w-4 h-4 cursor-pointer hover:scale-110 transition" />
                    <img src="/assets/Home/Topbarassets/twitter.png" alt="Twitter" className="w-3 h-3 cursor-pointer hover:scale-110 transition" />
                    <img src="/assets/Home/Topbarassets/fb.png" alt="Facebook" className="w-4 h-4 cursor-pointer hover:scale-110 transition" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
