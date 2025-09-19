"use client"
import React from "react"
import AnimateOnView from "../../../../animations/AnimateOnView"
import { fadeDown } from '../../../../animations/animations'

function Quotessection() {
  return (
    <div className="mt-8 w-full h-auto sm:h-72 md:h-80 bg-[#6D62A3]">
      <AnimateOnView
        variants={fadeDown}
        className="flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[75px] py-8 gap-6 md:gap-12 h-full"
      >
        {/* Quote Text */}
        <p className="text-white text-center italic text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed flex-1">
          " We build our Software solutions in a simple, easy-to-use format, uncluttered and easy to comprehend, enabling you to make quick & insightful business decisions. This will help you to stay on track for growth goals, foresee new opportunities & cultivate potential business areas."
        </p>

        {/* Logo */}
        <img
          src="/assets/Aboutus/Quotesassets/logo.png"
          alt="Softworks Logo"
          className="w-26 sm:w-30 md:w-48 lg:w-62"
        />
      </AnimateOnView>
    </div>
  )
}

export default Quotessection
