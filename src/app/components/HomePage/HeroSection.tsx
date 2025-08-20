"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const images = [
    "/assets/Home/Heroassets/banner1.png",
    "/assets/Home/Heroassets/banner3.png",
    "/assets/Home/Heroassets/banner2.png",
];

function HeroSection() {
    const [index, setIndex] = useState(0);

    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);



    return (
        <div className="relative w-full h-[800px] md:h-[1000px] lg:h-[900px] overflow-hidden px-4 md:px-0">
            

            <AnimatePresence>
                <motion.div
                    key={index}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[index]})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 ,ease:"anticipate"}}
                />
            </AnimatePresence>

          
            <div className="relative z-10">
                <Navbar />

                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50,x:50 }}
                    animate={{ opacity: 1, y: 0, x:0 }}
                    transition={{ duration: 2 }}
                    className={
                        index === 0
                            ? "absolute top-40 md:top-56 lg:top-54 left-1/2 -translate-x-1/2 text-center w-full"
                            : index === 1
                                ? "absolute top-40 md:top-72 lg:top-100 left-0 md:left-20 text-center md:text-left max-w-xl"
                                : "absolute top-40 md:top-72 lg:top-80 left-0 md:left-20 text-center md:text-right max-w-xl"
                    }
                >
                    {/* Heading */}
                    <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl">
                        Building Smart Solutions for a Digital-First Future
                    </h1>

                    {/* Paragraph */}
                    <p className="text-white mt-4 text-sm md:text-base lg:text-lg">
                        We craft scalable and secure digital products that solve real
                        business challenges.
                    </p>

                    {/* Button */}
                    <div className="mt-6">
                        <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 lg:px-6 lg:py-3 rounded-2xl shadow-lg cursor-pointer text-sm md:text-base transition-all duration-300">
                            Connect With Us
                        </button>
                    </div>
                </motion.div>

            </div>

            
        </div>
    );
}

export default HeroSection;
