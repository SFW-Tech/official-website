"use client";
import React from "react";
import { motion, MotionProps } from "framer-motion";
import Navbar from "../HomePage/Navbar";

interface HeroProps {
  title: string;
  subtitle?: string; // optional
  rightImage: string;
}

// Fix typing for animate
const createFullFloat = (
  delay: number,
  minDuration: number,
  maxDuration: number
): MotionProps["animate"] => {
  const steps = 6;
  const xPath: string[] = [];
  const yPath: string[] = [];
  const duration = Math.random() * (maxDuration - minDuration) + minDuration;

  for (let i = 0; i < steps; i++) {
    xPath.push(`${Math.floor(Math.random() * 120 - 60)}vw`);
    yPath.push(`${Math.floor(Math.random() * 80 - 40)}vh`);
  }

  xPath.push("0vw");
  yPath.push("0vh");

  return {
    x: xPath,
    y: yPath,
    rotate: [0, 180, -90, 270, -180, 0],
    scale: [1, 1.3, 0.9, 1.4, 0.8, 1],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  };
};

const Herocomp: React.FC<HeroProps> = ({ title, subtitle, rightImage }) => {
  return (
    <div className="w-full relative">
      <div className="w-full h-[330px] md:h-[380px] lg:h-[400px] xl:h-[478px] bg-gradient-to-r from-[#221C41] via-[#0D1C3C] to-[#42306A] relative overflow-hidden">
        <Navbar />

        {/* Animated Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src="/assets/Heroassets/Cursor.png"
            alt="Cursor Icon"
            className="absolute top-10 left-20 w-6 md:w-10 lg:w-14"
            initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
            animate={createFullFloat(0, 15, 25)}
            whileInView={{ opacity: 1, scale: 1 }}
          />
          <motion.img
            src="/assets/Heroassets/Helix.png"
            alt="Helix Icon"
            className="absolute bottom-10 left-1/3 w-6 md:w-10 lg:w-14"
            initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
            animate={createFullFloat(2, 20, 30)}
            whileInView={{ opacity: 1, scale: 1 }}
          />
          <motion.img
            src="/assets/Heroassets/Message.png"
            alt="Message Icon"
            className="absolute top-15 right-1/2 w-6 md:w-10 lg:w-14"
            initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
            animate={createFullFloat(4, 18, 28)}
            whileInView={{ opacity: 1, scale: 1 }}
          />
          <motion.img
            src="/assets/Heroassets/Chartgraph.png"
            alt="Chart Icon"
            className="absolute bottom-1/2 right-1/3 w-6 md:w-10 lg:w-14"
            initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
            animate={createFullFloat(1, 22, 32)}
            whileInView={{ opacity: 1, scale: 1 }}
          />
        </div>

        {/* Content wrapper */}
        <div className="h-full px-6 md:px-12 lg:px-20 xl:px-36 relative z-10">
          <div className="flex justify-between items-center h-full ">
            {/* Left side text */}
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-4 xl:gap-6">
              <h1 className="inline-block leading-snug md:leading-[1.6] lg:leading-[1.4] xl:leading-[1.4] text-lg md:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-amber-50">
                {title}
              </h1>
              {subtitle && (
                <p className="inline-block w-fit text-[8px] sm:text-xs md:text-sm lg:text-base px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-white rounded bg-gradient-to-r from-[#6F4124] via-[#6C1867] to-[#372C4B]">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Right side image */}
            <div className="h-full flex items-center">
              <img
                src={rightImage}
                alt="Right Side"
                className="max-x-xs md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] 2xl:max-h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herocomp;
