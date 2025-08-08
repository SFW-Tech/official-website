import React from 'react'

function AboutUsComponent() {
    return (
        <div className='w-full pr-[120px] relative'>

            <div className='grid grid-cols-2'>

                {/* Left Side */}
                <div className='bg-cover bg-center p-28 text-white relative z-10'
                    style={{ backgroundImage: "url('/assets/Home/aboutusassets/aboutusbg.png')" }}
                >

                    <h1 className="text-3xl font-bold mb-4">About Us</h1>
                    <p className="leading-relaxed">SoftWorks provide innovative software solutions to help you and your digital business space. We have been one of the leading Product development and Technology services companies in India since 2019, Serving clients across the globe. We design, develop, launch and enhance your products with our passionate and Technology experts. We also help you accelerate the efficiency and performance of your organization with our skilled Technology services.</p>

                </div>

                {/* Right Side */}
                <div className='flex gap-20 relative z-10'>

                    <div className='pl-28'>
                        <img src="/assets/Home/aboutusassets/Rectangle.png" className='h-120 w-20' />
                    </div>

                    <div className='flex flex-col gap-12 justify-center'>

                        <div className='flex gap-4'>
                            <img src="/assets/Home/aboutusassets/about us icon 1.png" className='h-22 w-22' alt="" />
                            <p>With a passionate team of software experts, we design, develop, and enhance digital products to accelerate your business success.</p>
                        </div>

                        <div className='flex gap-4'>
                            <img src="/assets/Home/aboutusassets/about us icon 2.png" className='h-22 w-22' alt="" />
                            <p>We'll help you test bold new ideas while sharing yours.</p>
                        </div>

                        <div className='flex gap-4'>
                            <img src="/assets/Home/aboutusassets/about us icon 3.png" className='h-22 w-22' alt="" />
                            <p>We excel in providing tailored IT solutions, from web and mobile development to cloud and support services.</p>
                        </div>

                    </div>

                </div>


            </div>

            {/* Overlay Image */}

            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
                <img
                    src="/assets/Home/aboutusassets/about us image .png"
                    alt="Overlay"
                    className='w-70 h-70 object-cover shadow-lg'
                />
            </div>
        </div>
    )
}

export default AboutUsComponent