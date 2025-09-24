"use client"
import React, { useState } from 'react';

function Whychooseus() {
    const [activeCircle, setActiveCircle] = useState<number>(0);

    const circles = [
        {
            title: "Expert Team",
            desc: "Our team of experienced ecommerce developers brings extensive knowledge of various platforms, including Shopify, Magento, WooCommerce, and custom ecommerce solutions. We ensure that your website is built to suit your business model and target audience."
        },
        {
            title: "Tailored Solutions",
            desc: "We understand that no two businesses are the same. Our ecommerce website development services are designed to provide customized solutions that align with your business goals, ensuring a unique and personalized online shopping experience for your customers."
        },
        {
            title: "End-to-End Service",
            desc: "From design and development to maintenance and support, we offer complete ecommerce website development services that cover every aspect of building and managing an online store."
        },
        {
            title: "Scalable Growth",
            desc: "Our ecommerce solutions are built with scalability in mind, allowing your online store to grow alongside your business. We design flexible and robust platforms that can handle increasing traffic, larger inventories, and expanded operations, ensuring your store evolves with your needs."
        }
    ];

    const backgroundImage = activeCircle !== null
        ? `url('/assets/e-commerce/Whychooseus/${circles[activeCircle].title}.jpg')`
        : 'none';

    return (
        <div className="transition-all duration-500">

            {/* Heading */}
            <div className="text-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                    Why choose Softworks?
                </h2>
            </div>

            {/* Main Container with background */}
            <div className='relative mt-6 sm:mt-8 md:mt-10 p-4 sm:p-6 md:p-10'
                style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                {/* Overlay for opacity */}
                <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

                {/* Content */}
                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Desktop: horizontal circles */}
                    <div className='hidden lg:grid grid-cols-4 gap-4 relative z-10'>
                        {circles.map((circle, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="relative flex flex-col items-center">
                                    <div
                                        onClick={() => setActiveCircle(index)}
                                        className={`rounded-full w-48 h-48 flex items-center justify-center text-center shadow-xl cursor-pointer transition-transform 
                                            ${activeCircle === index
                                                ? "bg-transparent text-white scale-105 border border-white"
                                                : "text-white"
                                            }`}
                                        style={{ backgroundColor: activeCircle !== index ? "rgba(89, 215, 247, 0.6)" : "transparent" }}
                                    >
                                        <span className="text-lg font-semibold">{circle.title}</span>
                                    </div>

                                    {activeCircle === index && (
                                        <div className="w-0.5 bg-white mt-2 h-44"></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile/Tablet: stacked circles with vertical layout */}
                    <div className='lg:hidden flex flex-col items-center gap-6 relative z-10'>
                        {circles.map((circle, index) => (
                            <div key={index} className="w-full flex flex-col items-center">
                                <div
                                    onClick={() => setActiveCircle(index)}
                                    className={`rounded-full w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center text-center shadow-xl cursor-pointer transition-transform 
                                        ${activeCircle === index
                                            ? "bg-transparent text-white scale-105 border border-white"
                                            : "text-white"
                                        }`}
                                    style={{ backgroundColor: activeCircle !== index ? "rgba(89, 215, 247, 0.6)" : "transparent" }}
                                >
                                    <span className="text-sm sm:text-base font-semibold">{circle.title}</span>
                                </div>

                                {/* Vertical line for active circle */}
                                {activeCircle === index && (
                                    <div className="w-0.5 bg-white mt-2 h-24 sm:h-28"></div>
                                )}

                                {/* Description below each circle */}
                                {activeCircle === index && (
                                    <div className="mt-4 px-4 text-center">
                                        <p className="text-white text-sm sm:text-base">{circle.desc}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Horizontal line for desktop below circles */}
                    <hr className="border-white hidden lg:block" />

                    {/* Paragraph Below Circles for desktop */}
                    {activeCircle !== null && (
                        <div className="mt-6 sm:mt-8 md:mt-10 p-2 sm:p-4 md:p-6 hidden lg:block">
                            <p className="text-white text-sm sm:text-base md:text-lg lg:text-lg">{circles[activeCircle].desc}</p>
                        </div>
                    )}

                </div>
            </div>

            {/* Bottom Paragraph */}
            <div className='mt-6 sm:mt-8 md:mt-12'>
                <p className="text-gray-700 leading-relaxed text-center px-4 sm:px-6 md:px-20 text-sm md:text-base">
                    An expert, traversable page with simple to-get to substance conveys a great client experience that drives prospect transformation. We realize how to assemble traffic with SEO and increment brand communication with substance. Moreover, we have practical experience in making and propelling Ecommerce stores that enable your customers to purchase while never getting the telephone.
                </p>
            </div>

        </div>
    )
}

export default Whychooseus;
