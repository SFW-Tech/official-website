"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const images: string[] = [
  "/assets/e-commerce/carousel/1.png",
  "/assets/e-commerce/carousel/2.png",
  "/assets/e-commerce/carousel/3.png",
  "/assets/e-commerce/carousel/4.png",
  "/assets/e-commerce/carousel/5.png",
  "/assets/e-commerce/carousel/6.svg",
  "/assets/e-commerce/carousel/7.png",
]

function Carouselcomp() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 1500 })]
  )

  return (
    <div className="px-6 sm:px-12 lg:px-28 mb-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_50%] sm:flex-[0_0_33.33%] lg:flex-[0_0_20%] min-w-0 px-2"
            >
              <div className="w-full h-40 sm:h-48 lg:h-56 flex items-center justify-center bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={src}
                  alt={`Technology ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carouselcomp
