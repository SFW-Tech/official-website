import React from 'react'

function Ourvision() {
    return (
        <div>
            <div className='px-4 md:px-12 lg:px-20 xl:px-28 grid grid-cols-1 md:grid-cols-2 mt-8 gap-6 md:gap-10'>

                {/* Left grid */}
                <div className='flex gap-2 justify-center md:justify-start'>
                    <div>
                        <img
                            src="/assets/Aboutus/Ourvisionassets/1.png"
                            alt="Ourvision1"
                            className='h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover'
                        />
                    </div>

                    <div>
                        <img
                            src="/assets/Aboutus/Ourvisionassets/6.png"
                            alt="Ourvision1"
                            className='h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover'
                        />
                    </div>

                    <div>
                        <img
                            src="/assets/Aboutus/Ourvisionassets/3.png"
                            alt="Ourvision1"
                            className='h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover'
                        />
                    </div>
                </div>

                {/* Right Grid */}
                <div className='flex flex-col gap-4 justify-center px-4 md:px-0'>
                    <div>
                        <img src="/assets/Aboutus/Ourvisionassets/logo.png" alt="" className='max-w-[150px] md:max-w-[200px] lg:max-w-[250px]' />
                    </div>

                    <div>
                        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Our Vision</h1>
                    </div>

                    <div>
                        <p className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed'>
                            SoftWorks provide innovative software solutions to help you and your digital business space. We have been one of the leading Product development and Technology services companies in India since 2019, Serving clients across the globe. We design, develop, launch and enhance your products with our passionate and Technology experts. We also help you accelerate the efficiency and performance of your organization with our skilled Technology services.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ourvision
