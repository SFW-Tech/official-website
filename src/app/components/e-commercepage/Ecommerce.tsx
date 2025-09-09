import React from 'react'

function Ecommerce() {
    return (
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center">

                {/* Text content */}
                <div className="flex flex-col gap-4 text-gray-700 justify-center order-2 lg:order-1 px-2 sm:px-4 h-full">
                    <div className="text-center lg:text-left">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                            E-Commerce Website Development
                        </h2>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed text-center lg:text-left">
                        Softworks is a leading provider of innovative e-commerce website solutions,
                        dedicated to helping businesses establish a robust online presence. Our team of experts
                        works closely with you to understand your business goals, ensuring that your online store
                        not only looks great but also performs optimally. Get secure, highly interactive and customized
                        eCommerce web development solutions - to enhance your online business through our cutting-edge
                        eCommerce website development services.
                    </p>
                </div>

                {/* Image */}
                <div className="flex justify-center order-1 lg:order-2 h-full">
                    <img
                        src="/assets/e-commerce/e-commerce/1.png"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain rounded-md"
                        alt="E-Commerce Website"
                    />
                </div>
            </div>
        </div>
    )
}

export default Ecommerce
