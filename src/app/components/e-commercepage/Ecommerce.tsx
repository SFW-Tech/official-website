import React from 'react'

function Ecommerce() {
    return (
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-8">


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">

                {/* text content */}
                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 text-gray-700 justify-center order-2 md:order-1">

                    <div className="text-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                            E-Commerce Website Development
                        </h2>
                    </div>


                    <p>
                        Softworks is a leading provider of innovative e-commerce website
                        solutions, dedicated to helping businesses establish a robust online
                        presence. Our team of experts works closely with you to understand your business goals,
                        ensuring that your online store not only looks great but also performs optimally.
                    </p>

                    <p>

                        Get secure, highly interactive and customized eCommerce web development solutions - to enhance your online business through our
                        cutting-edge eCommerce website development services.
                    </p>

                </div>


                {/* Image */}
                <div className="flex items-center justify-center">
                    <img
                        src="/assets/e-commerce/e-commerce/1.png"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded"
                        alt=""
                    />
                </div>


            </div>
        </div>
    )
}

export default Ecommerce