"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { motion, useInView } from "framer-motion"

const Carouselcomp: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });


 const images: string[] = [
  "/assets/e-commerce/carousel/1.png",
  "/assets/e-commerce/carousel/2.png",
  "/assets/e-commerce/carousel/3.png",
  "/assets/e-commerce/carousel/4.png",
  "/assets/e-commerce/carousel/5.png",
 
]

  return (
    <div className="w-full px-6 md:px-28 mt-6"
    >
      

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden mt-3 md:mt-6">
        <div className="flex gap-x-6 md:gap-x-12 xl:gap-9">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_28.333%] md:flex-[0_0_24%]"
            >
              <img
                src={src}
                className="h-22 md:h-32 lg:h-44 xl:h-44 object-cover w-full"
                alt={`Client ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carouselcomp;
