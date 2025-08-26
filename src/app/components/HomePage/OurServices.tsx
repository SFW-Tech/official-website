"use client"

import React, { useState } from 'react'

function OurServices() {
    const [selected, setSelected] = useState(1);

    // Different gradient colors
    const gradients = {
        1: "bg-gradient-to-r from-[#FCF5F7] to-[#FCBFD0]",
        2: "bg-gradient-to-r from-violet-100 to-violet-300",
        3: "bg-gradient-to-r from-[#F3F9F1] to-[#B2F2BB]",
        4: "bg-gradient-to-r from-[#FFF4E6] to-[#FFD8A8]",
        5: "bg-gradient-to-r from-[#F8F0FC] to-[#D0BFFF]",
        6: "bg-gradient-to-r from-violet-100 to-violet-300",
    };

    return (
        <div className='w-full mt-10 md:mt-20 px-6 md:px-0'>
            <div className='flex leading-relaxed flex-col gap-3 justify-center items-center'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold text-gray-700'>Our Services</h1>
                <p className='text-center text-sm sm:text-base md:text-md lg:text-lg xl:text-base text-gray-500'>
                    Transform your Business with Advanced technologies
                </p>
            </div>

            <div className='md:pl-28'>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] mt-8 md:mt-22">

                    {/* Left Side */}
                    <div className='flex flex-col rounded-lg overflow-hidden'>
                        <div
                            onClick={() => setSelected(1)}
                            className={`flex items-center gap-4 p-4 cursor-pointer border-b border-gray-200 
                            ${selected === 1 ? gradients[1] : ""}`}>
                            <img src="/assets/Home/Ourservicesassets/service 1 icon.png" alt="" />
                            <p className='font-semibold text-lg'>Custom Application</p>
                        </div>

                        <div
                            onClick={() => setSelected(2)}
                            className={`flex items-center gap-4 p-4 cursor-pointer border-b border-gray-200 
                            ${selected === 2 ? gradients[2] : ""}`}>
                            <img src="/assets/Home/Ourservicesassets/service 2 icon.png" alt="" />
                            <p className='font-semibold text-lg'>Mobile Application</p>
                        </div>

                        <div
                            onClick={() => setSelected(3)}
                            className={`flex items-center gap-4 p-4 cursor-pointer border-b border-gray-200 
                            ${selected === 3 ? gradients[3] : ""}`}>
                            <img src="/assets/Home/Ourservicesassets/service 3 icon.png" alt="" />
                            <p className='font-semibold text-lg'>Web Application</p>
                        </div>

                          <div
                            onClick={() => setSelected(6)}
                            className={`flex items-center gap-4 p-4 cursor-pointer border-b border-gray-200 
                            ${selected === 6 ? gradients[6] : ""}`}>
                            <img src="/assets/Home/Ourservicesassets/service 5 icon.png" alt="" />
                            <p className='font-semibold text-lg'>AI</p>
                        </div>

                        <div
                            onClick={() => setSelected(4)}
                            className={`flex items-center gap-4 p-4 cursor-pointer border-b border-gray-200 
                            ${selected === 4 ? gradients[4] : ""}`}>
                            <img src="/assets/Home/Ourservicesassets/service 4 icon.png" alt="" />
                            <p className='font-semibold text-lg'>Servicenow</p>
                        </div>

                        <div
                            onClick={() => setSelected(5)}
                            className={`flex items-center gap-4 p-4 cursor-pointer border-b border-gray-200 
                            ${selected === 5 ? gradients[5] : ""}`}>
                            <img src="/assets/Home/Ourservicesassets/service 5 icon.png" alt="" />
                            <p className='font-semibold text-lg'>Staff Augmentation</p>
                        </div>

                      
                    </div>

                    {/* Right Side */}
                    <div className='relative md:-mt-50 lg:-mt-50 xl:-mt-80 hidden md:block'>
                        <img
                            src={`/assets/Home/Ourservicesassets/services${selected}.png`}
                            alt={`Service ${selected}`}
                            className="w-full h-[600px] lg:h-[700px] xl:h-[900px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices
