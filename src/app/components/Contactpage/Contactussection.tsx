import React from 'react'

function Contactussection() {
    return (
        <div className='w-full mt-15 mb-4'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 xl:gap-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28'>

        {/* Left Side */}

                <div className='flex flex-col gap-10 lg:gap-12'>

                    {/* Top */}

                    <div className='flex-col gap-4 flex leading-relaxed'>

                        <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>Contact Us</h1>

                        <p className='text-gray-600'>
                            Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
                        </p>

                    </div>

                    <div className='flex-col'>

                        <div className='flex flex-col gap-6'>

                            {/* Address */}
                            <div className='flex gap-4 md:gap-6 items-start'>
                                <div className='p-4 md:p-5 rounded-xl border border-gray-200 flex-shrink-0'>
                                    <img
                                        src="assets/Contactus/Contactussectionassets/location.png"
                                        alt="location"
                                        className='h-8 w-8 object-contain'
                                    />
                                </div>

                                <div className='flex-1'>
                                    <h3 className='text-gray-900 font-medium'>Our Address</h3>
                                    <p className='text-gray-600'>
                                        7/2A, Shreesha Building, First Floor, Central Studio Road, Dhanalakshmi Puram South, Singanallur, Coimbatore, TamilNadu, 641005.
                                    </p>
                                </div>
                            </div>



                            {/* Mail */}
                            <div className='flex gap-4 md:gap-6 items-start'>
                                <div className='p-4 md:p-5 rounded-xl border border-gray-200 flex-shrink-0'>
                                    <img
                                        src="assets/Contactus/Contactussectionassets/mail.png"
                                        alt="mail"
                                        className='h-8 w-8 object-contain'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-gray-900 font-medium'>Our Mailbox</h3>
                                    <p className='text-gray-600'>info@sfwtechnologies.com</p>
                                </div>
                            </div>



                            {/* Sales */}
                            <div className='flex gap-4 md:gap-6 items-start'>
                                <div className='p-4 md:p-5 rounded-xl border border-gray-200 flex-shrink-0'>
                                    <img
                                        src="assets/Contactus/Contactussectionassets/sales.png"
                                        alt="sales"
                                        className='h-8 w-8 object-contain'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-gray-900 font-medium'>Sales</h3>
                                    <p className='text-gray-600'>Mobile/WhatsApp: +91 98941 13103 | 99943 17168</p>
                                </div>
                            </div>



                            {/* Career */}
                            <div className='flex gap-4 md:gap-6 items-start'>
                                <div className='p-4 md:p-5 rounded-xl border border-gray-200 flex-shrink-0'>
                                    <img
                                        src="assets/Contactus/Contactussectionassets/career.png"
                                        alt="career"
                                        className='h-8 w-8 object-contain'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-gray-900 font-medium'>Career</h3>
                                    <p className='text-gray-600'>Mobile: +91 73977 20330</p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

                

                {/* Right Side */}

                <div className='h-full'>
                    <form action="" className='rounded-2xl h-full w-full bg-violet-50'>
                        <h2 className='pt-8 flex justify-center text-2xl md:text-3xl font-semibold text-gray-800'>
                            Ready to Get Started?
                        </h2>
                        <p className='flex justify-center pt-2 text-gray-800 text-sm md:text-base px-4 text-center'>
                            Your email address will not be published. Required fields are marked *
                        </p>

                        <div className='flex-col flex gap-5 md:gap-6 px-6 md:px-10 lg:px-12 xl:px-13 py-5'>

                            <input
                                type="text"
                                className='bg-white rounded-md p-4 focus:outline-none focus:ring focus:ring-gray-400'
                                placeholder='Name *'
                                required
                            />
                            <input
                                type="email"
                                className='bg-white rounded-md p-4 focus:outline-none focus:ring focus:ring-gray-400'
                                placeholder='Email Address *'
                                required
                            />
                            <input
                                type="text"
                                className='bg-white rounded-md p-4 focus:outline-none focus:ring focus:ring-gray-400'
                                placeholder='Phone/Mobile number *'
                                required
                            />

                            <textarea
                                className='bg-white rounded-md p-4 h-32 focus:outline-none focus:ring focus:ring-gray-400'
                                placeholder='Please describe your requirement'
                                required
                            />

                            <div className="flex justify-end py-3">
                                <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 lg:px-6 lg:py-3 rounded-2xl shadow-lg cursor-pointer text-sm md:text-base transition-all duration-300">
                                    Submit
                                </button>
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contactussection