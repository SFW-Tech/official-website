"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import ContactModal from "./ContactModal";

const images = [
    "/assets/Home/Heroassets/banner1.png",
    "/assets/Home/Heroassets/banner2.png",
];

function HeroSection() {
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[800px] md:h-[1000px] lg:h-[650px] overflow-hidden px-4 md:px-0">
            {/* Background Image Animation */}
            <AnimatePresence>
                <motion.div
                    key={index}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[index]})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                />
            </AnimatePresence>

            {/* Foreground */}
            <div className="relative z-10">
                <Navbar />

                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className={
                        index === 0
                            ? "absolute top-40 md:top-56 lg:top-25 left-1/2 -translate-x-1/2 text-center w-full"
                            : index === 1
                            ? "absolute top-40 md:top-72 lg:top-55 left-0 md:left-20 text-center md:text-left max-w-xl"
                            : ""
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
                        <button className="connectbutton" onClick={() => setIsOpen(true)}>
                            <span className="animatebutton"></span>
                            <span className="buttonbg">Connect with us</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />}
            </AnimatePresence>
        </div>
    );
}

export default HeroSection;
