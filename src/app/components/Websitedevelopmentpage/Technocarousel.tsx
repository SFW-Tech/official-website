"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useSnackbar } from 'notistack';

import { useState } from 'react';
import {motion,AnimatePresence } from "framer-motion"

function Technocarousel() {

    
    const [emblaRef] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 1500 })]
    )

    const images = [1, 2, 3, 4, 5, 6, 7]

    return (
        <div className="px-6 sm:px-12 lg:px-28 mb-10">



            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images.map((num) => (
                        <div
                            key={num}
                            className="
                flex-[0_0_50%] sm:flex-[0_0_33.33%] lg:flex-[0_0_20%] 
                min-w-0 px-2
              "
                        >
                            <Image
                                src={`/assets/Websitedevelopment/Technocarousel/${num}.png`}
                                alt={`Technology ${num}`}
                                width={300}
                                height={200}
                                className="w-full h-auto rounded-xl shadow-md"
                            />
                        </div>
                    ))}
                </div>
            </div>




           

        </div>
    )
}

export default Technocarousel
