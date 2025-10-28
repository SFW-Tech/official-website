"use client";
import React from "react";
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown } from "../../../../animations/animations";

function Exploresection() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12 lg:gap-x-20 xl:gap-x-44">

        {/* Image Section */}
        <AnimateOnView variants={fadeDown} className="order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src="/assets/Careers/Exploresectionassets/1.png"
            className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-auto"
            alt="Explore life at Softworks"
          />
        </AnimateOnView>

        {/* Text Section */}
        <AnimateOnView variants={fadeDown} className="order-2 md:order-1 flex flex-col justify-center gap-4">
          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
            Explore Life at Softworks!
          </h3>

          {/* Paragraph */}
          <p className="text-sm md:text-base leading-relaxed">
            Softworks offers a wide range of exciting opportunities for young and
            experienced professionals to be part of our team, to bring ideas,
            innovativeness and determination to make a difference. We work with
            exceptional people, the latest and greatest technologies and leading
            companies across industries to create value for our clients, people and
            communities. Choose a career with us and together, let’s create positive,
            long-lasting value.
          </p>
        </AnimateOnView>
      </div>
    </div>
  );
}

export default Exploresection;
