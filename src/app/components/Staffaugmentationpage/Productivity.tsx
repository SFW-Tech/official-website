"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown, headingVariant, staggerContainer } from "../../../../animations/animations";

// Cards array with colors
const cards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-merge-icon lucide-merge"><path d="m8 6 4-4 4 4"/><path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"/><path d="m20 22-5-5"/></svg>
    ),
    text: "Acts as a bridge, saving you time, money, and effort in screening and employing certain skill sets to accomplish jobs.",
    color: "text-blue-700",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-wide-narrow-icon lucide-arrow-up-wide-narrow"><path d="m3 8 4-4 4 4" /><path d="M7 4v16" /><path d="M11 12h10" /><path d="M11 16h7" /><path d="M11 20h4" /></svg>
    ),
    text: "Increases your product development capabilities in response to changing market conditions or project execution.",
    color: "text-green-700",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>
    ),
    text: "Working with a completely flexible and professional staff at an affordable charge, with the ability to enlarge or decrease the workforce on demand.",
    color: "text-red-700",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-pen-icon lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" /><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /></svg>
    ),
    text: "Allows you to hire the best subject matter experts for your project and improve team communication throughout the SDLC.",
    color: "text-purple-700",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hourglass-icon lucide-hourglass"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>
    ),
    text: "Helps you meet your staffing requirements for existing project deadlines in less time while resolving workforce difficulties.",
    color: "text-cyan-700",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-receipt-indian-rupee-icon lucide-receipt-indian-rupee"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 7h8"/><path d="M12 17.5 8 15h1a4 4 0 0 0 0-8"/><path d="M8 11h8"/></svg>
    ),
    text: "Scale your business with minimal operational and administrative costs.",
    color: "text-green-600",
  },
];

function Productivity() {
  return (
    <AnimateOnView
      variants={staggerContainer}



      className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 mt-20"
    >
      {/* Headings */}
      <motion.div variants={fadeDown} className="flex flex-col gap-6 md:gap-12 text-center">


        <motion.div variants={headingVariant} className="flex flex-col gap-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
            Increase Productivity by Using
          </h2>

          <h3 className="text-2xl font-bold text-[#001A5A]">
            Our IT Staff Augmentation Services.
          </h3>
        </motion.div>


        <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
          We aim to expand the in-house development team by providing on-demand access to a large pool of subject matter professionals for your IT projects. This reduces admin burden, speeds up product launch, and enables high-impact returns.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mt-16"
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={fadeDown}
            className="flex flex-col items-center text-center gap-4 p-6 hover:shadow-md hover:rounded-2xl cursor-pointer shadow-sm h-full"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className={`w-12 h-12 ${card.color}`}>{card.icon}</div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{card.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </AnimateOnView>
  );
}

export default Productivity;
