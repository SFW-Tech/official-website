import React from 'react';

function Calloutsection() {
    return (
        <div
            className="w-full h-[80px] sm:h-[135px] md:h-[145px] lg:h-[150px] xl:h-[155px] 
                       bg-cover bg-no-repeat bg-center flex sm:flex-row items-center 
                       justify-between px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 gap-4 sm:gap-0 text-center sm:text-left mt-8 md:mt-0"

            style={{ backgroundImage: "url('/assets/Home/Calloutassets/Callout section.png')" }}
        >
            {/* Left Text */}
            <div className="max-w-xl">
                <h1 className="text-white font-semibold text-xs sm:text-lg md:text-xl lg:text-2xl">
                    Need any expert business & consulting services?
                </h1>
            </div>

            {/* Right Button */}
            <div>
                <button className="bg-gradient-to-r from-orange-500 to-purple-600 
                                   hover:from-orange-600 hover:to-purple-700 text-white 
                                   font-semibold px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
                                   rounded-2xl shadow-lg cursor-pointer text-xs sm:text-sm md:text-base 
                                   transition-all duration-300">
                    Connect With Us
                </button>
            </div>
        </div>
    );
}

export default Calloutsection;
