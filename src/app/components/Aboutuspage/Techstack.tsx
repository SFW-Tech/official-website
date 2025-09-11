"use client";
import React from "react";

function Techstack() {
  return (
    <div className="mt-8 px-4 md:px-16 lg:px-24 xl:px-28">
      {/* Heading */}
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold">
          Our Tech Stack
        </h1>
        <p className="text-sm sm:text-base md:text-md lg:text-lg xl:text-base text-gray-600">
          Your Developers and Our Integration
        </p>
      </div>

      {/* Main Image with overlays */}
      <div className="flex justify-center items-center mt-10 relative w-full h-[300px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
        {/* Main Image */}
        <img
          src={`/assets/Aboutus/Techstackassets/Main image.png`}
          className="h-[300px] md:h-[500px] lg:h-[550px] xl:h-[600px] w-auto"
          alt="Tech Stack"
        />

        {/* Overlay Images */}
        <img
          src={`/assets/Aboutus/Techstackassets/1.png`}
          className="absolute top-[20px] left-[110px] md:top-[60px] md:left-[160px] lg:top-[80px] lg:left-[210px] xl:top-[80px] xl:left-[450px] w-[80px] md:w-[120px] lg:w-[150px] xl:w-[180px]"
          alt="Power bi"
        />
        <img
          src={`/assets/Aboutus/Techstackassets/2.png`}
          className="absolute bottom-[40px] left-[60px] md:bottom-[60px] md:left-[150px] lg:bottom-[80px] lg:left-[200px] xl:bottom-[40px] xl:left-[400px] w-[80px] md:w-[120px] lg:w-[150px] xl:w-[180px]"
          alt="Tech 2"
        />
        <img
          src={`/assets/Aboutus/Techstackassets/3.png`}
          className="absolute top-[45px] right-[115px] md:top-[70px] md:right-[140px] lg:top-[90px] lg:right-[160px] xl:top-[210px] xl:right-[440px] w-[80px] md:w-[120px] lg:w-[150px] xl:w-[180px]"
          alt="Tech 3"
        />
        <img
          src={`/assets/Aboutus/Techstackassets/4.png`}
          className="absolute bottom-[20px] right-[120px] md:bottom-[40px] md:right-[140px] lg:bottom-[60px] lg:right-[160px] xl:bottom-[80px] xl:right-[380px] w-[80px] md:w-[120px] lg:w-[150px] xl:w-[180px]"
          alt="Tech 4"
        />
        <img
          src={`/assets/Aboutus/Techstackassets/5.png`}
          className="absolute bottom-[150px] left-[50%] md:bottom-[250px] lg:bottom-[275px] xl:bottom-[100px] w-[80px] md:w-[120px] lg:w-[150px] xl:w-[180px]"
          alt="Tech 5"
        />

        <img
          src={`/assets/Aboutus/Techstackassets/6.png`}
          className="absolute top-[60px] left-[105px] md:top-[120px] md:left-[160px] lg:top-[150px] lg:left-[200px] xl:top-[260px] xl:left-[420px] w-[80px] md:w-[120px] lg:w-[150px] xl:w-[180px]"
          alt="Tech 6"
        />
      </div>
    </div>
  );
}

export default Techstack;
