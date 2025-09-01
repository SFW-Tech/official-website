"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { motion, useInView } from "framer-motion"

const ClientsCardComponent: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });


  const clients = [
    "/assets/Home/clientassets/2.png",
    "/assets/Home/clientassets/4.png",
    "/assets/Home/clientassets/5.png",
    "/assets/Home/clientassets/6.png",
    "/assets/Home/clientassets/7.png",
    "/assets/Home/clientassets/8.png",
  ];

  return (
    <div className="w-full px-6 md:px-28 mt-6"
    >
      {/* Heading */}
      <motion.div className="flex justify-center"

        ref={headingRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}

      >

        <h3 className="font-semibold text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl">
          Our Valuable Clients
        </h3>
      </motion.div>

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden mt-6">
        <div className="flex gap-x-6 md:gap-x-12 xl:gap-9">
          {clients.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_33.333%] md:flex-[0_0_20%]"
            >
              <img
                src={src}
                className="h-16 sm:h-20 md:h-32 lg:h-44 xl:h-44 object-cover w-full"
                alt={`Client ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsCardComponent;
