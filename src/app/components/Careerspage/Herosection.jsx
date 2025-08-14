import React from 'react'
import Navbar from '../HomePage/Navbar'

function Herosection() {
    return (
        <div className='w-full'>
            <div
                className="
                    w-full 
                    h-[320px] 
                    md:h-[420px] 
                    lg:h-[500px] 
                    xl:h-[578px]
                    bg-cover 
                    bg-center 
                    bg-no-repeat
                "
                style={{
                    backgroundImage: "url('/assets/Careers/Herosectionassets/2.png')",
                }}
            >
                <Navbar />

                <div className="pt-10 md:pt-28 lg:pt-40 xl:pt-[150px] flex justify-center px-4">
                    <div className='flex flex-col gap-4 items-center'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white'>Elevate Your Career</h1>
                    <h1 className="inline-block text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-amber-50">
                        Build Your Future With Us
                    </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection
