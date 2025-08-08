import React from 'react';

function Calloutsection() {
    return (
        <div
            className="w-full h-[155px] bg-contain bg-no-repeat bg-center flex items-center justify-between px-28"
            style={{ backgroundImage: "url('/assets/Home/Calloutassets/Callout section.png')" }}
        >
            <div>
                <h1 className="text-white font-semibold md:text-2xl">
                    Need any expert business & consulting services?
                </h1>
            </div>

            <div>
                <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg cursor-pointer text-sm md:text-base transition-all duration-300">
                    Connect With Us
                </button>
            </div>
        </div>
    );
}

export default Calloutsection;
