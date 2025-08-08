import React from 'react'

function CaseStudiesSection() {
    return (

        <div className='w-full mt-20 px-28'>


            <div className='flex leading-relaxed flex-col gap-3  justify-center items-center'>
                <h1 className='text-3xl font-bold text-gray-700'>Case Studies</h1>
            </div>


            <div className="grid grid-cols-2 mt-25 gap-16">

                {/* Left Side */}

                <div className='flex flex-col rounded-lg overflow-hidden'>

                    <div className="flex flex-col rounded-lg overflow-hidden w-full">

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



                </div>

                {/* Right Side */}



                <div className="relative w-[650px] h-[360px] md:w-[400px] md:h-[360px] lg:w-[350px] lg:h-[365px] xl:w-[480px] xl:h-[360px] mx-auto flex justify-center gap-6">
                    <img
                        src="/assets/Home/Casestudyassets/case study 1.png"
                        alt="Image 1"
                        className="absolute top-0 left-0 w-full h-full object-cover  shadow-lg z-50"
                    />
                    <img
                        src="/assets/Home/Casestudyassets/case study 2.png"
                        alt="Image 2"
                        className="absolute bottom-6  w-[90%] h-full object-cover  shadow-lg z-40"
                    />
                    <img
                        src="/assets/Home/Casestudyassets/case study 3.png"
                        alt="Image 3"
                        className="absolute bottom-12 w-[80%] h-full object-cover  shadow-lg z-30"
                    />
                    <img
                        src="/assets/Home/Casestudyassets/case study 4.png"
                        alt="Image 4"
                        className="absolute bottom-18 w-[70%] h-full object-cover  shadow-lg z-20"
                    />
                    <img
                        src="/assets/Home/Casestudyassets/case study 5.png"
                        alt="Image 5"
                        className="absolute bottom-24  w-[60%] h-full object-cover  shadow-lg z-10"
                    />

                </div>

            </div>





        </div>
    )
}

export default CaseStudiesSection