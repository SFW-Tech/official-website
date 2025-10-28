"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Agendasection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const images = [
    "/assets/Aboutus/Agendaassets/1.png",
    "/assets/Aboutus/Agendaassets/2.png",
    "/assets/Aboutus/Agendaassets/3.png",
    "/assets/Aboutus/Agendaassets/4.png",
    "/assets/Aboutus/Agendaassets/5.png",
  ];

  // Next button
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Prev button
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <div className="relative mt-8 px-2 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              className="min-w-full flex-[0_0_100%] flex justify-center"
              key={index}
            >
              <Image
                src={src}
                alt={`Agenda slide ${index + 1}`}
                width={1200}   
                height={240}  
                className="mx-auto h-[60px] w-[250px] md:h-[100px] md:w-[500px] lg:h-[130px] lg:w-[700px] xl:h-[240px] xl:w-[1200px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-transparent p-2 shadow-none backdrop-blur-none transition hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6 text-gray-700"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>


      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-transparent p-2 shadow-none backdrop-blur-none transition hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6 text-gray-700"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>



    </div>
  );
}
