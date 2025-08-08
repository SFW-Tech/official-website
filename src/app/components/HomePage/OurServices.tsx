import React from 'react'

function OurServices() {
    return (

        <div className='w-full mt-20 '>


            <div className='flex leading-relaxed flex-col gap-3  justify-center items-center'>
                <h1 className='text-3xl font-bold text-gray-700'>Our Services</h1>
                <p className='text-lg text-gray-500'>Transform your Business with Advanced technologies</p>
            </div>

            <div className='pl-28'>




                <div className="grid grid-cols-[1fr_1.6fr] mt-22">

                    {/* Left Side */}

                    <div className='flex flex-col rounded-lg overflow-hidden'>

                        <div className='flex items-center gap-4 p-4 bg-gradient-to-r from-pink-100 to-pink-200 cursor-pointer border-b border-gray-200'>
                            <img src="/assets/Home/Ourservicesassets/service 1 icon.png" alt="" />
                            <p className='font-semibold text-lg'>Custom Application</p>
                        </div>

                        <div className='flex gap-4 items-center p-4 border-b border-gray-200'>
                            <img src="/assets/Home/Ourservicesassets/service 2 icon.png" alt="" />
                            <p className='font-semibold text-lg' >Mobile Application</p>
                        </div>

                        <div className='flex gap-4 items-center p-4 border-b border-gray-200'>
                            <img src="/assets/Home/Ourservicesassets/service 3 icon.png" alt="" />
                            <p className='font-semibold text-lg'>Web Application</p>
                        </div>

                        <div className='flex gap-4 items-center p-4 border-b border-gray-200'>
                            <img src="/assets/Home/Ourservicesassets/service 4 icon.png" alt="" />
                            <p className='font-semibold text-lg'>Servicenow</p>
                        </div>

                        <div className='flex gap-4 items-center p-4 border-b border-gray-200'>
                            <img src="/assets/Home/Ourservicesassets/service 5 icon.png" alt="" />
                            <p className='font-semibold text-lg'>Staff Augmentation</p>
                        </div>

                    </div>

                    {/* Right Side */}



                    <div className='relative -mt-70'>
                        <img src="/assets/Home/Ourservicesassets/service 3.png" alt="Our services image" className="w-full h-auto object-contain" />
                    </div>


                </div>

            </div>





        </div>
    )
}

export default OurServices