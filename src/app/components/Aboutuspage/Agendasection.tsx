"use client";

import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Next arrow component
function NextArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-md transition hover:bg-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-5 w-5 text-gray-700"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

// Previous arrow component
function PrevArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-md transition hover:bg-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-5 w-5 text-gray-700"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

export default function Agendasection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "/assets/Aboutus/Agendaassets/1.png",
    "/assets/Aboutus/Agendaassets/2.png",
    "/assets/Aboutus/Agendaassets/3.png",
    "/assets/Aboutus/Agendaassets/4.png",
    "/assets/Aboutus/Agendaassets/5.png",
  ];

  return (
<div className="relative mt-8 px-2 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Agenda slide ${index + 1}`} className="mx-auto h-[60px] w-[220px] md:h-[100px] md:w-[500px] lg:h-[130px] lg:w-[700px] xl:h-60 xl:w-[1200px]" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
