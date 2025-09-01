import React from 'react'

function Businessbenefits() {
    return (
        <div
            className="px-6 md:px-12 lg:px-20 xl:px-28 mt-8 mb-20"
            style={{ backgroundImage: "url('/assets/Mobileapplications/Businessbenefitsassets/bg.png')" }}
        >

            {/* Heading */}
            <div className='flex justify-center items-center'>
                <h1 className='text-2xl md:text-3xl font-bold'>Business Benefits</h1>
            </div>

            {/* Main Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-12 gap-10'>

                {/* Left Section */}
                <div className='flex flex-col gap-25'>

                    <div className='flex gap-4 md:translate-x-10 lg:translate-x-16 xl:translate-x-20'>
                        <div className='flex flex-col'>
                            <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800'>
                                Software as a Service
                            </h3>
                            <p className='text-sm md:text-base text-right text-gray-700'>
                                51% of smartphone users have discovered a new company or product.
                            </p>
                        </div>
                        <div>
                            <img src="/assets/Mobileapplications/Businessbenefitsassets/Saas.png" 
                                 className='w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20' alt="" />
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <div className='flex flex-col'>
                            <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800'>
                                Internet of Things
                            </h3>
                            <p className='text-sm md:text-base text-right text-gray-700'>
                                Move your SaaS products to mobile, Companies with a professional mobile.
                            </p>
                        </div>
                        <div>
                            <img src="/assets/Mobileapplications/Businessbenefitsassets/iot.png" 
                                 className='w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20' alt="" />
                        </div>
                    </div>

                    <div className='flex gap-4 md:translate-x-10 lg:translate-x-16 xl:translate-x-20'>
                        <div className='flex flex-col'>
                            <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800'>
                                Sports & Games
                            </h3>
                            <p className='text-sm md:text-base text-right text-gray-700'>
                                Develop a custom mobile app to thrive in a mobile market worth.
                            </p>
                        </div>
                        <div>
                            <img src="/assets/Mobileapplications/Businessbenefitsassets/sports.png" 
                                 className='w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20' alt="" />
                        </div>
                    </div>

                </div>

                {/* Center Image */}
                <div className='flex justify-center items-end'>
                    <img src="/assets/Mobileapplications/Businessbenefitsassets/Heroimage.png" 
                         alt="" 
                         className='h-[250px] md:h-[320px] lg:h-[380px] xl:h-[400px] w-[300px] md:w-[400px] lg:w-[500px] xl:w-[550px]' />
                </div>

                {/* Right Section */}
                <div className='flex flex-col gap-25'>

                    <div className='flex gap-4 md:-translate-x-10 lg:-translate-x-16 xl:-translate-x-20'>
                        <div>
                            <img src="/assets/Mobileapplications/Businessbenefitsassets/social.png" 
                                 className='w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20' alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800'>
                                Social Media
                            </h3>
                            <p className='text-sm md:text-base text-left text-gray-700'>
                                80% of time users spend in social media from their mobile devices.
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <div>
                            <img src="/assets/Mobileapplications/Businessbenefitsassets/businessmanagement.png" 
                                 className='w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20' alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800'>
                                Business Management
                            </h3>
                            <p className='text-sm md:text-base text-left text-gray-700'>
                                65% of sales representatives have achieved their quotas by adopting.
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-4 md:-translate-x-10 lg:-translate-x-16 xl:-translate-x-20'>
                        <div>
                            <img src="/assets/Mobileapplications/Businessbenefitsassets/trading.png" 
                                 className='w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20' alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800'>
                                Trading Systems
                            </h3>
                            <p className='text-sm md:text-base text-left text-gray-700'>
                                We provide top-tier mobile app development services for brokers.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Businessbenefits
