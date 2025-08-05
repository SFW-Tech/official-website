import React from 'react';

function Topbar() {
    return (
        <div className="w-full bg-white text-gray-800 text-sm">

            <div className="flex flex-wrap justify-between items-center px-4 sm:px-8 md:px-16 lg:px-28 py-2 gap-y-2">

                {/* Left Section */}
                <div className="flex flex-wrap items-center gap-4">

                    <div className="flex items-center gap-2">
                        <img src="/assets/Topbarassets/mail logo.png" alt="mail" className="w-4 h-4" />
                        <p className="text-xs sm:text-sm">info@sfwtechnologies.com</p>
                    </div>

                    <div className="hidden sm:block h-4 border-l border-gray-400"></div>

                    <div className="flex items-center gap-2">
                        <img src="/assets/Topbarassets/phone logo.png" alt="phone" className="w-4 h-4" />
                        <p className="text-xs sm:text-sm">+91 98941 13103</p>
                    </div>

                </div>


                {/* Right Section */}
                <div className="flex gap-3 sm:gap-4 items-center justify-center sm:justify-end w-full sm:w-auto">
                    <img src="/assets/Topbarassets/insta logo.png" alt="Instagram" className="w-4 h-4 cursor-pointer hover:scale-110 transition" />
                    <img src="/assets/Topbarassets/linkednin.png" alt="LinkedIn" className="w-4 h-4 cursor-pointer hover:scale-110 transition" />
                    <img src="/assets/Topbarassets/twitter.png" alt="Twitter" className="w-3 h-3 cursor-pointer hover:scale-110 transition" />
                    <img src="/assets/Topbarassets/fb.png" alt="Facebook" className="w-4 h-4 cursor-pointer hover:scale-110 transition" />
                </div>


            </div>
        </div>
    );
}

export default Topbar;
