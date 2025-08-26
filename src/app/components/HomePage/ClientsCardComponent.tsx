"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ClientsCardComponent: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const clients = [

    "/assets/Home/clientassets/2.png",
    "/assets/Home/clientassets/4.png",
    "/assets/Home/clientassets/5.png",
    "/assets/Home/clientassets/6.png",
    "/assets/Home/clientassets/7.png",
    "/assets/Home/clientassets/8.png",
  ];

  return (
    <div className="w-full px-6 md:px-28 mt-6">
      {/* Heading */}
      <div className="flex justify-center">
        <motion.h3
          className="font-semibold text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl"
          initial={{ opacity: 0, y: -20, x: 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Valuable Clients
        </motion.h3>
      </div>

      {/* Carousel */}
      <motion.div
        ref={emblaRef}
        className="overflow-hidden mt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex gap-x-6 md:gap-x-12 xl:gap-9">
          {clients.map((src, index) => (
            <motion.div
              key={index}
              className="flex-[0_0_33.333%] md:flex-[0_0_20%]"
              variants={itemVariants}
            >
              <img
                src={src}
                className="h-16 sm:h-20 md:h-32 lg:h-44 xl:h-44 object-cover w-full"
                alt={`Client ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ClientsCardComponent;
