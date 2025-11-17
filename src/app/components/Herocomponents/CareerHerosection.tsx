"use client";
import React from "react";
import { motion, MotionProps } from "framer-motion";
import Navbar from "../HomePage/Navbar";

interface HeroProps {
  title: string;
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

const CareerHerosection: React.FC<HeroProps> = ({ title }) => {
  // safe split logic
  const parts = title.split(" Build ");
  const firstLine = parts[0];
  const secondLine = parts[1] ?? "";

  const hasBuild = title.includes(" Build ");

  return (
    <div className="w-full relative">
      <div className="w-full h-[280px] md:h-[380px] lg:h-[400px] xl:h-[478px] bg-gradient-to-r from-[#221C41] via-[#0D1C3C] to-[#42306A] relative overflow-hidden">
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
        <div className="h-full flex items-center justify-center relative z-10 px-6 md:px-12 lg:px-20 xl:px-36">
          <h2 className="text-center leading-snug text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold space-y-2">
            {hasBuild ? (
              <>
                <span className="block text-white">{firstLine}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-amber-50">
                  {"Build " + secondLine}
                </span>
              </>
            ) : (
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-amber-50">
                {title}
              </span>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CareerHerosection;
