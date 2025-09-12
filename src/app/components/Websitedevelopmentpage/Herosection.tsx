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

                 <div className="pt-20 md:pt-28 lg:pt-40 xl:pt-[200px] pl-6 md:pl-12 lg:pl-10 xl:pl-[120px] flex flex-col gap-4 ">
                    <h1 className="inline-block text-xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-amber-50">
                       Elevate Your Digital Identity with Custom,
                    </h1>

                    <h1 className="inline-block text-xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-amber-50">
                        Responsive, and Scalable Web Solutions
                    </h1>


                    <p className="inline-block px-2 py-1 text-white rounded bg-gradient-to-r from-[#6F4124] via-[#6C1867] to-[#372C4B] w-fit">
                        Custom websites built for speed, style, and scalability
                    </p>





                </div>
            </div>
        </div>
    )
}

export default Herosection
