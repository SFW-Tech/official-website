"use client"
import React, { useState, useRef } from "react";
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown } from "../../../../animations/animations";
import { motion, AnimatePresence, useInView } from "framer-motion";

function Ourvision() {
    const [selected, setSelected] = useState<"vision" | "mission" | "chooseus">("vision");
    const rightRef = useRef(null);
    const rightInView = useInView(rightRef, { once: true });

    const content = {
        vision: {
            logo: "/assets/Aboutus/Ourvisionassets/Vision.png",
            title: "Our Vision",
            text: "SoftWorks provide innovative software solutions to help you and your digital business space. We have been one of the leading Product development and Technology services companies in India since 2019, Serving clients across the globe. We design, develop, launch and enhance your products with our passionate and Technology experts. We also help you accelerate the efficiency and performance of your organization with our skilled Technology services."
        },
        mission: {
            logo: "/assets/Aboutus/Ourvisionassets/Mission.png",
            title: "Our Mission",
            text: "SoftWorks provide innovative software solutions to help you and your digital business space. We have been one of the leading Product development and Technology services companies in India since 2019, Serving clients across the globe. We design, develop, launch and enhance your products with our passionate and Technology experts. We also help you accelerate the efficiency and performance of your organization with our skilled Technology services."
        },
        chooseus: {
            logo: "/assets/Aboutus/Ourvisionassets/Choose.png",
            title: "Why Choose Us",
            text: "SoftWorks provide innovative software solutions to help you and your digital business space. We have been one of the leading Product development and Technology services companies in India since 2019, Serving clients across the globe. We design, develop, launch and enhance your products with our passionate and Technology experts. We also help you accelerate the efficiency and performance of your organization with our skilled Technology services."
        }
    };

    return (
        <div className="w-full py-10 px-4 md:px-12 lg:px-20 xl:px-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Side - Images */}
                <AnimateOnView
                    
                    variants={fadeDown}
                    className="flex flex-col md:flex-row justify-center md:justify-start gap-2"
                >
                    {/* Vision */}
                    <div
                        onClick={() => setSelected("vision")}
                        className="relative cursor-pointer transition-all duration-300"
                    >
                        <img
                            src="/assets/Aboutus/Ourvisionassets/Ourvision.png"
                            alt={content.vision.title}
                            className={`object-cover rounded-lg shadow-md transition-all duration-500 
                                ${selected === "vision"
                                    ? "h-64 sm:h-80 md:h-96 lg:h-[450px] w-full md:w-56 lg:w-[350px]"
                                    : "h-20 md:h-96 lg:h-[450px] w-full md:w-20"} `}
                        />
                        {selected !== "vision" && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                                <span className="text-white font-semibold text-sm md:text-base leading-relaxed 
                                    md:[writing-mode:vertical-rl] md:rotate-180">
                                    {content.vision.title}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Mission */}
                    <div
                        onClick={() => setSelected("mission")}
                        className="relative cursor-pointer transition-all duration-300"
                    >
                        <img
                            src="/assets/Aboutus/Ourvisionassets/Ourmission.png"
                            alt={content.mission.title}
                            className={`object-cover rounded-lg shadow-md transition-all duration-500 
                                ${selected === "mission"
                                    ? "h-64 sm:h-80 md:h-96 lg:h-[450px] w-full md:w-56 lg:w-[350px]"
                                    : "h-20 md:h-96 lg:h-[450px] w-full md:w-20"} `}
                        />
                        {selected !== "mission" && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                                <span className="text-white font-semibold text-sm md:text-base 
                                    md:[writing-mode:vertical-rl] md:rotate-180">
                                    {content.mission.title}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Choose Us */}
                    <div
                        onClick={() => setSelected("chooseus")}
                        className="relative cursor-pointer transition-all duration-300"
                    >
                        <img
                            src="/assets/Aboutus/Ourvisionassets/Chooseus.png"
                            alt={content.chooseus.title}
                            className={`object-cover rounded-lg shadow-md transition-all duration-500 
                                ${selected === "chooseus"
                                    ? "h-64 sm:h-80 md:h-96 lg:h-[450px] w-full md:w-56 lg:w-[350px]"
                                    : "h-20 md:h-96 lg:h-[450px] w-full md:w-20"} `}
                        />
                        {selected !== "chooseus" && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                                <span className="text-white font-semibold text-sm md:text-base 
                                    md:[writing-mode:vertical-rl] md:rotate-180">
                                    {content.chooseus.title}
                                </span>
                            </div>
                        )}
                    </div>
                </AnimateOnView>

                {/* Right Side - Text with AnimatePresence (keep original animation) */}
                <motion.div
                    ref={rightRef}
                    initial={{ opacity: 0 }}
                    animate={rightInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 text-center md:text-left"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex flex-col gap-6"
                        >
                            <div>
                                <img
                                    src={content[selected].logo}
                                    alt={content[selected].title}
                                    className="mx-auto md:mx-0 max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[250px]"
                                />
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                                {content[selected].title}
                            </h1>

                            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                                {content[selected].text}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}

export default Ourvision;
