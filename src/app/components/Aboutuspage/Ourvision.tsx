import React from 'react'

function Ourvision() {
    return (
        <div>


            <div className='px-28 grid grid-cols-2 mt-8'>
                {/* Left grid */}
                <div className='flex gap-2'>

                    <div>
                        <img src="/assets/Aboutus/Ourvisionassets/1.png" alt="Ourvision1" className='h-96' />
                    </div>

                    <div>
                        <img src="/assets/Aboutus/Ourvisionassets/6.png" alt="Ourvision1" className='h-96' />
                    </div>

                    <div>
                        <img src="/assets/Aboutus/Ourvisionassets/3.png" alt="Ourvision1" className='h-96' />
                    </div>

                </div>

                {/* Right Grid */}

                <div className='flex flex-col gap-4 justify-center'>

                    <div>
                        <img src="/assets/Aboutus/Ourvisionassets/logo.png" alt="" />
                    </div>


                    <div>
                        <h1 className='text-3xl font-bold'>Our Vision</h1>
                    </div>


                    <div>
                        <p className='text-gray-600 leading-relaxed'>SoftWorks provide innovative software solutions to help you and your digital business space. We have been one of the leading Product development and Technology services companies in India since 2019, Serving clients across the globe. We design, develop, launch and enhance your products with our passionate and Technology experts. We also help you accelerate the efficiency and performance of your organization with our skilled Technology services.</p>
                    </div>



                </div>

            </div>


        </div>
    )
}

export default Ourvision