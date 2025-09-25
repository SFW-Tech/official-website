"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"
import { fadeDown, headingVariant, staggerContainer } from "../../../../animations/animations";
import AnimateOnView from "../../../../animations/AnimateOnView";

function CaseStudiesSection() {
    const [selected, setSelected] = useState(0);
    const router = useRouter()
    const intervalTime = 4500;


    const images = [
        {
            src: "/assets/Home/Casestudyassets/case study 1.png",
            alt: "Digital Transformation",
            link: "/case-studies/Digital-transformation"
        },
        {
            src: "/assets/Home/Casestudyassets/case study 2.png",
            alt: "Field Service Management",
            link: "/case-studies/Resolve"
        },
        {
            src: "/assets/Home/Casestudyassets/case study 3.png",
            alt: "Appointment Booking System",
            link: "/case-studies/Appointment-booking"
        },
        {
            src: "/assets/Home/Casestudyassets/case study 4.png",
            alt: "Reverse Logistics Management",
            link: "/case-studies/Reverse-logistics"
        },
        {
            src: "/assets/Home/Casestudyassets/case study 5.png",
            alt: "Food Application",
            link: "/case-studies/Food-application"
        },
    ];

    const caseStudyTitles = [
        "Digital Transformation",
        "Resolve",
        "Appointment Booking System",
        "Reverse Logistics Management",
        "Food Application",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSelected((prev) => (prev + 1) % images.length);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-full mt-8 md:mt-20 px-6 sm:px-8 md:px-8 lg:px-12 xl:px-28">
            {/* Heading */}
            <AnimateOnView
                variants={headingVariant}

                className="flex flex-col gap-3 justify-center items-center text-center leading-relaxed">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 md:mb-10">
                    Case Studies
                </h1>
            </AnimateOnView>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 md:gap-16 items-center">


                {/* Left Side */}
                <AnimateOnView variants={fadeDown} className="flex flex-col rounded-lg overflow-hidden order-2 md:order-1"

                >

                    {caseStudyTitles.map((title, idx) => {
                        const gradients = [
                            "from-blue-100 to-blue-900",
                            "from-teal-100 to-teal-700",
                            "from-rose-100 to-rose-900",
                            "from-amber-100 to-amber-900",
                            "from-indigo-100 to-indigo-900",
                        ];

                        return (
                            <div
                                key={idx}
                                onClick={() => setSelected(idx)}
                                className={`w-full p-6 border-b border-gray-200 font-semibold cursor-pointer transition-all duration-300 
                ${selected === idx
                                        ? `bg-gradient-to-r ${gradients[idx]} text-gray-900 hover:text-cyan-800`
                                        : "text-gray-500"
                                    }`}
                            >
                                {title}
                            </div>
                        );
                    })}

                    {/* All Case Studies Option */}
                    <div
                        onClick={() => router.push("/case-studies")}
                        className="w-full p-6 font-semibold cursor-pointer transition-all duration-300 
            text-gray-700 hover:text-black
            border-t-2 border-gray-100"
                    >
                        <div className="flex items-center justify-end gap-2">
                            <span>View All Case Studies</span>
                            <motion.span
                                className="text-xl font-bold"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                                </svg>

                            </motion.span>
                        </div>
                    </div>
                </AnimateOnView>

                {/* Right Side */}
                <AnimateOnView variants={fadeDown} className="relative w-full max-w-[650px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[365px] xl:h-[360px] mx-auto flex justify-center order-1 md:order-2 mt-20 md:mt-0 lg:mt-21"

                >
                    {images.map((img, idx) => {
                        let pos = (idx - selected + images.length) % images.length;

                        if (pos === 0) {
                            return (
                                <div
                                    key={idx}
                                    className="absolute top-0 left-0 w-full h-full z-5"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover shadow-lg transition-all duration-500"
                                    />
                                    <motion.button
                                        onClick={() => (router.push(img.link))}

                                        transition={{ duration: 1 }}
                                        whileTap={{ scale: 0.97 }}
                                        whileHover="hover"
                                        className="absolute bottom-0 left-0 w-full 
                    bg-black/80 hover:bg-black/70 
                    text-white py-3 
                    flex items-center justify-center gap-2
                    transition-all duration-300 cursor-pointer"
                                    >
                                        {/* Text */}
                                        <motion.span
                                            className="font-semibold text-sm"
                                            variants={{
                                                hover: { x: 4, transition: { duration: 0.3, ease: "easeOut" } }
                                            }}>
                                            View Case Study
                                        </motion.span>

                                        {/* Arrow */}
                                        <motion.span
                                            className="font-bold text-lg"
                                            variants={{
                                                hover: { x: 8, transition: { duration: 0.3, ease: "easeOut" } }
                                            }}

                                        >
                                        </motion.span>
                                    </motion.button>
                                </div>
                            );
                        }

                        else if (pos <= 4) {
                            return (
                                <div
                                    key={idx}
                                    style={{
                                        bottom: `${pos * 24}px`,
                                        width: `${100 - pos * 10}%`,
                                        zIndex: 5 - pos * 10,
                                    }}
                                    className="absolute h-full"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover shadow-lg rounded-lg transition-all duration-500"
                                    />
                                    <button
                                        onClick={() => (router.push(img.link))}
                                        className="absolute bottom-0 left-0 w-full bg-opacity-60 hover:bg-opacity-80 text-white py-2 flex items-center justify-center transition-all duration-300"
                                    >
                                        <span className="font-semibold text-xs mr-1">View Case</span>
                                        <span className="font-bold text-sm">›</span>
                                    </button>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </AnimateOnView>
            </div>
        </div>
    );
}


export default CaseStudiesSection;