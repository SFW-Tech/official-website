import React from 'react'

function CaseStudiesSection() {
    return (
        <div className="w-full mt-8 md:mt-20 px-6 sm:px-8 md:px-8 lg:px-12 xl:px-28">
            
            {/* Heading */}
            <div className="flex flex-col gap-3 justify-center items-center text-center leading-relaxed">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 md:mb-10">Case Studies</h1>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 md:gap-16 items-center">
                
                {/* Left Side */}
                <div className='flex flex-col rounded-lg overflow-hidden order-2 md:order-1'>
                    <div className="w-full p-6 border-b border-gray-200 font-semibold">
                        <p className="text-gray-500">Digital Transformation</p>
                    </div>
                    <div className="w-full p-6 border-b border-gray-200 font-semibold">
                        <p className="text-gray-500">Field Service Management</p>
                    </div>
                    <div className="w-full p-6 border-b border-gray-200 font-semibold">
                        <p className="text-gray-500">Appointment Booking System</p>
                    </div>
                    <div className="w-full p-6 border-b border-gray-200 font-semibold">
                        <p className="text-gray-500">Reverse Logistics Management</p>
                    </div>
                    <div className="w-full p-6 border-b border-gray-200 font-semibold">
                        <p className="text-gray-500">Food Application</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative w-full max-w-[650px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[365px] xl:h-[360px] mx-auto flex justify-center order-1 md:order-2 mt-20 md:mt-0">
                    <img
                        src="/assets/Home/Casestudyassets/case study 1.png"
                        alt="Image 1"
                        className="absolute top-0 left-0 w-full h-full object-cover shadow-lg z-50"
                    />
                    <img
                        src="/assets/Home/Casestudyassets/case study 2.png"
                        alt="Image 2"
                        className="absolute bottom-6 w-[90%] h-full object-cover shadow-lg z-40"
                    />
                    <img
                        src="/assets/Home/Casestudyassets/case study 3.png"
                        alt="Image 3"
                        className="absolute bottom-12 w-[80%] h-full object-cover shadow-lg z-30"
                    />
                    <img
                        src="/assets/Home/Casestudyassets/case study 4.png"
                        alt="Image 4"
                        className="absolute bottom-18 w-[70%] h-full object-cover shadow-lg z-20"
                    />
                    <img
                        src="/assets/Home/Casestudyassets/case study 5.png"
                        alt="Image 5"
                        className="absolute bottom-24 w-[60%] h-full object-cover shadow-lg z-10"
                    />
                </div>

            </div>
        </div>
    )
}

export default CaseStudiesSection
