"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown, headingVariant, staggerContainer } from "../../../../animations/animations";

function Reasonstochoose() {
  const cards = [
    {
      title: "Software Development",
      text: "We help you create and delivering powerful digital solutions by bringing competent IT specialists and software development team augmentation services to your team. As one of the most reputable staffing firms, we guarantee to deliver committed resources and staff augmentation services that fulfil diverse staffing demands within your existing workforce and at your convenience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="m5 12-3 3 3 3" />
          <path d="m9 18 3-3-3-3" />
        </svg>
      ),
    },
    {
      title: "CuttingEdge Technology",
      text: "Have the greatest tech personnel capable of resolving challenging app development issues with cutting-edge technologies, platforms, libraries, frameworks, and other tools without exceeding your budget. Here are significant reasons to work with us.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
          <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
          <path d="m2 13 6 6" />
        </svg>
      ),
    },
    {
      title: "On-Demand Access",
      text: "We aim to expand the in-house development team by providing on-demand access to a large pool of subject matter professionals for your numerous IT project requirements. This reduces the administrative difficulties of a lengthy hiring process, speeds up the launch of your digital product, and enables high-impact returns.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 20h20" />
          <path d="m9 10 2 2 4-4" />
          <rect x="3" y="4" width="18" height="12" rx="2" />
        </svg>
      ),
    },
  ];






  

  return (
    <div className="px-4 md:px-16 lg:px-20 xl:px-28 my-20 flex flex-col gap-10">
      {/* Headings */}

      <AnimateOnView variants={staggerContainer} className="flex flex-col gap-4 md:gap-6 lg:gap-8 text-center">
        <AnimateOnView variants={headingVariant} className="space-y-4">
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold">
            Reasons to Choose
          </h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#001A5A]">
            SoftWorks Staff Augmentation
          </h3>
        </AnimateOnView>
        <AnimateOnView variants={fadeDown}>
          <p className="text-base md:text-lg lg:text-2xl text-gray-700 leading-relaxed">
            Model for Your Software Development Project
          </p>
        </AnimateOnView>
      </AnimateOnView>

      {/* Cards */}
      
        <AnimateOnView variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-6 items-center text-center p-6 rounded-xl bg-white border border-gray-100 cursor-pointer"
              variants={fadeDown}
             
            >
              {/* Animated SVG wrapper */}
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 bg-[#59D7F7] flex items-center justify-center rounded-full"
                variants={fadeDown}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {card.icon}
                </motion.div>
              </motion.div>

              {/* Animated Heading */}
              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl font-bold"
                variants={fadeDown}
              >
                {card.title}
              </motion.h2>

              {/* Animated Paragraph */}
              <motion.p
                className="text-gray-700 text-sm md:text-base leading-relaxed"
                variants={fadeDown}
              >
                {card.text}
              </motion.p>
            </motion.div>
          ))}
        </AnimateOnView>
      
    </div>
  );
}

export default Reasonstochoose;