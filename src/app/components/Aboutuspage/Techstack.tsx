"use client";
import React from "react";

function Techstack() {
  return (
    <div className="mt-8 px-4 md:px-16 lg:px-24 xl:px-28 mb-50">
      {/* Heading */}
      <div className="flex flex-col gap-2 items-center text-center">
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-3xl font-bold">
          Our Tech Stack
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-base text-gray-600">
          Your Developers and Our Integration
        </p>
      </div>

      {/* Main Image with overlays */}
      <div className="flex justify-center items-center mt-10 relative w-full h-[220px] sm:h-[280px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
        {/* Main Image */}
        <img
          src={`/assets/Aboutus/Techstackassets/Main image.png`}
          className="h-[350px] sm:h-[310px] md:h-[500px] lg:h-[550px] xl:h-[600px] w-auto"
          alt="Tech Stack"
        />

        {/* Overlay Images */}
        <img
          src={`/assets/Aboutus/Techstackassets/PowerBi.png`}
          className="absolute top-6 left-[-2] w-[100px] md:top-26 md:left-26 lg:top-[130px] lg:left-[150px] xl:left-110 md:w-[120px] lg:w-[140px] xl:w-[150px]"
          alt="PowerBi"
        />
        <img
          src={`/assets/Aboutus/Techstackassets/Tableau.png`}
          className="absolute bottom-6 left-4 w-[100px] md:bottom-10 md:left-[100px] lg:bottom-15 lg:left-[160px] xl:left-[430px] md:w-[120px] lg:w-[140px] xl:w-[150px]"
          alt="Tableau"
        />
        <img
          src={`/assets/Aboutus/Techstackassets/FireBase.png`}
          className="absolute top-12 right-8 w-[100px] md:top-[180px] md:right-[115px] xl:right-[390px] md:w-[120px] lg:w-[140px] xl:w-[150px]"
          alt="FireBase"
        />
        <img
          src={`/assets/Aboutus/Techstackassets/Selenium.png`}
          className="absolute bottom-[-36] right-[-1] w-[100px] md:bottom-20 md:right-[70] lg:right-[135] xl:right-[400px] md:w-[120px] lg:w-[140px] xl:w-[150px]"
          alt="Selenium"
        />
        <img
          src={`/assets/Aboutus/Techstackassets/Swift.png`}
          className="absolute top-8 w-[100px] md:w-[130px] lg:w-[150px] xl:w-[150px] md:top-36 md:left-63 lg:top-40 lg:left-83 xl:left-155 xl:top-43"
          alt="Swift"
        />
        <img
          src={`/assets/Aboutus/Techstackassets/Js.png`}
          className="absolute top-60 w-[100px] md:top-[240px] md:left-[85px] xl:top-[280px] xl:left-[420px] md:w-[140px] lg:w-[160px] xl:w-[180px]"
          alt="Js"
        />
      </div>
    </div>
  );
}

export default Techstack;
