"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown, headingVariant, staggerContainer } from "../../../../animations/animations";

function AboutUsComponent() {
  const aboutPoints = [
    {
      icon: "about us icon 1.png",
      text: "With a passionate team of software experts, we design, develop, and enhance digital products to accelerate your business success.",
    },
    {
      icon: "about us icon 2.png",
      text: "We'll help you test bold new ideas while sharing yours.",
    },
    {
      icon: "about us icon 3.png",
      text: "We excel in providing tailored IT solutions, from web and mobile development to cloud and support services.",
    },
  ];

  return (
    <div className="w-full pr-4 sm:pr-8 md:pr-16 lg:pr-20 xl:pr-[120px] relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

        {/* Left Side */}
        <div>
          <div
            className="bg-cover bg-center p-6 sm:p-10 md:p-16 lg:p-20 xl:p-28 text-white"
            style={{ backgroundImage: "url('/assets/Home/aboutusassets/aboutusbg.png')" }}
          >
            <AnimateOnView variants={headingVariant}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-4">
              About Us
            </h1>
            </AnimateOnView>

            <AnimateOnView variants={fadeDown}>
            <p className="text-sm md:text-base leading-relaxed">
              SoftWorks provide innovative software solutions to help you and your digital business space.
              We have been one of the leading Product development and Technology services companies in India since 2019,
              Serving clients across the globe. We design, develop, launch and enhance your products with our passionate
              and Technology experts. We also help you accelerate the efficiency and performance of your organization
              with our skilled Technology services.
            </p>
            </AnimateOnView>


          </div>
        </div>

        {/* Right Side */}
        <div className="flex gap-6 md:gap-12 lg:gap-16 xl:gap-20">
          <div className="pl-6 md:pl-12 lg:pl-20 xl:pl-28">
            <img src="/assets/Home/aboutusassets/Rectangle.png" className="h-full w-20" alt="" />
          </div>

          {/* Stagger Container */}
          <AnimateOnView
            variants={staggerContainer}
            className="flex flex-col gap-12 justify-center"
          >
            {aboutPoints.map((item, index) => (
              <motion.div key={index} variants={fadeDown}>
                <div className="flex gap-4 items-center">
                  <img
                    src={`/assets/Home/aboutusassets/${item.icon}`}
                    className="h-22 w-22"
                    alt=""
                  />
                  <p className="text-sm md:text-base flex items-center leading-relaxed text-gray-950">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimateOnView>
        </div>
      </div>

      {/* Overlay Image */}
      {/* Overlay Image */}
      <AnimateOnView
        variants={fadeDown}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 hidden lg:block"
        once={true}
      >
        <img
          src="/assets/Home/aboutusassets/about us image .png"
          alt="Overlay"
          className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 object-cover shadow-lg"
        />
      </AnimateOnView>
    </div>
  );
}

export default AboutUsComponent;
