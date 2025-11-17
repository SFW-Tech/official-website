"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

function Techstack() {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });
 

  // Array of images
  const images = ["TechStack1", "TechStack2", "TechStack3", "TechStack4"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Switch image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length); 
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mt-8 px-4 md:px-16 lg:px-24 xl:px-28">
      {/* Heading */}
      <motion.div
        className="flex flex-col gap-2 items-center"
        ref={headingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold">
          Our Tech Stack
        </h2>
        <p className="text-sm sm:text-base md:text-md lg:text-lg xl:text-base text-gray-600">
          Your Developers and Our Integration
        </p>
      </motion.div>

      {/* Image Switch */}
      <div className="flex justify-center items-center relative w-full h-[300px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
        <motion.div ref={imageRef} style={{ position: "absolute" }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentIndex]}
              src={`/assets/Aboutus/Techstackassets/${images[currentIndex]}.png`}
              className="h-[300px] md:h-[500px] lg:h-[550px] xl:h-[600px] w-auto"
              alt="Tech Stack"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default Techstack;
