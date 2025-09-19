"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown, staggerContainer } from "../../../../animations/animations";

function Contentsection() {
  const cards = [
    {
      title: "Improve user experience and link IT to larger business goals",
    },
    {
      title: "Boost corporate operations via aggressive automation.",
    },
    {
      title:
        "Reduce overall operational expenses by increasing efficiency and turnaround time.",
    },
  ];

  return (
    <AnimateOnView
      variants={staggerContainer}
      className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-8 mb-10"
    >
      {/* Title */}
      <AnimateOnView variants={fadeDown} className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          About SoftWork&apos;s ServiceNow
        </h2>
      </AnimateOnView>

      {/* Paragraph */}
      <AnimateOnView variants={fadeDown}>
        <p className="mt-8 sm:mt-10 leading-relaxed text-gray-700 text-sm md:text-base text-left">
          <span className="text-cyan-500 font-bold">SoftWorks</span> is a
          ServiceNow Global Sales, Services, Technology, and Service Provide Elite
          Partner that seeks to assist enterprises maximize the value of their
          investment in the ServiceNow platform. Our goal is to assist our customers
          in leapfrogging their digital journeys by upgrading their business and IT
          departments. We install ServiceNow products across an organization,
          including ITSM, ITBM, ITOM, ITAM, HR, GRC/IRM, SecOps, and CSM, to help
          achieve greater ROI and faster business outcomes. Our broad pool of hybrid
          consultants understands how processes and platforms interact with one
          another. With this expertise, we provide specialty consulting services.
        </p>
      </AnimateOnView>

      {/* Cards Section */}
      <AnimateOnView variants={fadeDown}>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-12 sm:mt-16 mb-8 sm:mb-12 text-center">
          Simple-to-implement and adaptable solutions with the following goals:
        </h3>
      </AnimateOnView>

      {/* Cards Grid */}
      <AnimateOnView
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12"
      >
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            variants={fadeDown}
            className="relative bg-slate-800 text-white p-8 sm:p-12 md:p-16 rounded-2xl overflow-hidden bg-gradient-to-br from-[#201A3E] via-[#0B1229] to-[#332452] h-full"
          >
            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-cyan-400 rounded-full opacity-90 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                />
              </svg>
            </div>

            <div className="relative z-10 pr-4 sm:pr-10 md:pr-16 h-full flex items-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug md:leading-tight text-left">
                {card.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </AnimateOnView>
    </AnimateOnView>
  );
}

export default Contentsection;
