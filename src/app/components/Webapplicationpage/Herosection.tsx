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
                    backgroundImage: "url('/assets/Webapplications/Heroassets/banner.png')",
                }}
            >
                <Navbar />

                <div className="pt-20 md:pt-28 lg:pt-40 xl:pt-[220px] pl-6 md:pl-12 lg:pl-20 xl:pl-[120px]">
                    <h1 className="inline-block text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-amber-50">
                        Web Applications
                    </h1>
                    
                </div>
            </div>
        </div>
    )
}

export default Herosection
