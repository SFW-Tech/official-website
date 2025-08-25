"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CaseStudiesSection() {
  const [selected, setSelected] = useState(0);

  const images = [
    { src: "/assets/Home/Casestudyassets/case study 1.png", alt: "Digital Transformation" },
    { src: "/assets/Home/Casestudyassets/case study 2.png", alt: "Field Service Management" },
    { src: "/assets/Home/Casestudyassets/case study 3.png", alt: "Appointment Booking System" },
    { src: "/assets/Home/Casestudyassets/case study 4.png", alt: "Reverse Logistics Management" },
    { src: "/assets/Home/Casestudyassets/case study 5.png", alt: "Food Application" }
  ];

  return (
    <div className="w-full mt-8 md:mt-20 px-6 sm:px-8 md:px-8 lg:px-12 xl:px-28">

      {/* Heading */}
      <div className="flex flex-col gap-3 justify-center items-center text-center leading-relaxed">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 md:mb-10">
          Case Studies
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 md:gap-16 items-center">
        {/* Left Side */}
        <div className="flex flex-col rounded-lg overflow-hidden order-2 md:order-1">
          {[
            "Digital Transformation",
            "Field Service Management",
            "Appointment Booking System",
            "Reverse Logistics Management",
            "Food Application"
          ].map((title, idx) => {
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
        </div>



        {/* Right Side */}


        <div className="relative w-full max-w-[650px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[365px] xl:h-[360px] mx-auto flex justify-center order-1 md:order-2 mt-20 md:mt-0">
          {images.map((img, idx) => {
            // Calculate relative position in stack
            let pos = (idx - selected + images.length) % images.length;

            if (pos === 0) {
              // Active images
              return (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  className="absolute top-0 left-0 w-full h-full object-cover shadow-lg transition-all duration-200 z-50"
                />
              );
            } else if (pos <= 4) {
              // Stack images (only show 4 behind)
              return (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  style={{
                    bottom: `${pos * 24}px`,
                    width: `${100 - pos * 10}%`,
                    zIndex: 50 - pos * 10,
                  }}
                  className="absolute object-cover shadow-lg rounded-lg transition-all duration-500 h-full"
                />

              );
            } else {
              return null;
            }
          })}
        </div>


      </div>
    </div>
  );
}

export default CaseStudiesSection;
