"use client";
import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown, headingVariant } from "../../../../animations/animations";

function Techstack() {
  const [currentImage, setCurrentImage] = useState("whole1");

  // Switch image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === "whole1" ? "whole2" : "whole1"));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 px-4 md:px-16 lg:px-24 xl:px-28">
      {/* Heading */}
      <AnimateOnView variants={headingVariant} className="flex flex-col gap-2 items-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold">
          Our Tech Stack
        </h1>
        <p className="text-sm sm:text-base md:text-md lg:text-lg xl:text-base text-gray-600">
          Your Developers and Our Integration
        </p>
      </AnimateOnView>

      {/* Image Switch */}
      <div className="flex justify-center items-center mt-10 relative w-full h-[300px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
        <AnimateOnView variants={fadeDown} className="absolute">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={`/assets/Aboutus/Techstackassets/${currentImage}.png`}
              className="h-[300px] md:h-[500px] lg:h-[550px] xl:h-[600px] w-auto"
              alt="Tech Stack"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </AnimateOnView>
      </div>
    </div>
  );
}

export default Techstack;
