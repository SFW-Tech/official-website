"use client"
import React, { useState, useEffect } from "react";

function CaseStudiesSection() {
  const [selected, setSelected] = useState(0);

  const images = [
    {
      src: "/assets/Home/Casestudyassets/case study 1.png",
      alt: "Digital Transformation",
      link: "/case-studies/digital-transformation"
    },
    {
      src: "/assets/Home/Casestudyassets/case study 2.png",
      alt: "Field Service Management",
      link: "/case-studies/field-service-management"
    },
    {
      src: "/assets/Home/Casestudyassets/case study 3.png",
      alt: "Appointment Booking System",
      link: "/case-studies/appointment-booking"
    },
    {
      src: "/assets/Home/Casestudyassets/case study 4.png",
      alt: "Reverse Logistics Management",
      link: "/case-studies/reverse-logistics"
    },
    {
      src: "/assets/Home/Casestudyassets/case study 5.png",
      alt: "Food Application",
      link: "/case-studies/food-application"
    },

    {
      src: "/assets/Home/Casestudyassets/case6.jpg",
      alt: "Code Ninja",
      link: "/case-studies/codeninja"
    },
    {
      src: "/assets/Home/Casestudyassets/case study 7.jpg",
      alt: "Kisok",
      link: "/case-studies/Kisok"
    },
    {
      src: "/assets/Home/Casestudyassets/case study 8.jpg",
      alt: "Resolve",
      link: "/case-studies/Resolve"
    }
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

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
            "Food Application",
            "Code Ninja",
            "Kisok",
            "Resolve",
          ].map((title, idx) => {
            const gradients = [
              "from-blue-100 to-blue-900",
              "from-teal-100 to-teal-700",
              "from-rose-100 to-rose-900",
              "from-amber-100 to-amber-900",
              "from-indigo-100 to-indigo-900",
              "from-gray-100 to-gray-700",
              "from-amber-100 to-amber-800",
              "from-gray-100 to-gray-700",
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

        <div className="relative w-full max-w-[650px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[365px] xl:h-[360px] mx-auto flex justify-center order-1 md:order-2 mt-20 md:mt-0 lg:mt-44">
          {images.map((img, idx) => {
            let pos = (idx - selected + images.length) % images.length;

            if (pos === 0) {
              return (
                <div
                  key={idx}
                  className="absolute top-0 left-0 w-full h-full z-50"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover shadow-lg transition-all duration-500"
                  />
                  <button
                    onClick={() => (window.location.href = img.link)}
                    className="absolute bottom-0 left-0 w-full 
              bg-black/80 hover:bg-black/70 
              text-white py-3 
              flex items-center justify-center 
              transition-all duration-300 cursor-pointer"
                  >
                    <span className="font-semibold text-sm mr-2">View Case Study</span>
                    <span className="font-bold text-lg">›</span>
                  </button>
                </div>
              );
            }

            else if (pos <= 7) {
              return (
                <div
                  key={idx}
                  style={{
                    bottom: `${pos * 24}px`,
                    width: `${100 - pos * 10}%`,
                    zIndex: 50 - pos * 10,
                  }}
                  className="absolute h-full"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover shadow-lg rounded-lg transition-all duration-500"
                  />
                  <button
                    onClick={() => (window.location.href = img.link)}
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
        </div>

      </div>
    </div>
  );
}

export default CaseStudiesSection;
