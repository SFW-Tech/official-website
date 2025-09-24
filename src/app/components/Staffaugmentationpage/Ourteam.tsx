"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown, staggerContainer } from "../../../../animations/animations";

function Ourteam() {
  return (
    <AnimateOnView
      variants={staggerContainer}
      className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mb-10"
    >
      {/* First row */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-5 gap-6 mb-10"
      >
        {/* Card1 */}
        <motion.div
          variants={fadeDown}
          className="flex flex-col gap-4 bg-[#59D7F7] px-4 md:px-6 py-8 md:py-12 rounded-xl"
        >
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 12.5 8 15l2 2.5" />
              <path d="m14 12.5 2 2.5-2 2.5" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
            </svg>
          </div>
          <div className="text-center"><h1 className="text-xl">Dedicated Developer</h1></div>
        </motion.div>

        {/* Card2 */}
        <motion.div
          variants={fadeDown}
          className="flex flex-col gap-4 bg-[#59D7F7] px-4 md:px-6 py-8 md:py-12 rounded-xl"
        >
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
              <path d="m8 6 2-2" />
              <path d="m18 16 2-2" />
              <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
              <path d="m15 5 4 4" />
            </svg>
          </div>
          <div className="text-center"><h1 className="text-xl">UI/UX Designers</h1></div>
        </motion.div>

        {/* Card3 */}
        <motion.div
          variants={fadeDown}
          className="flex flex-col gap-4 bg-[#59D7F7] px-4 md:px-6 py-8 md:py-12 rounded-xl"
        >
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
              <path d="m9 11 3 3L22 4" />
            </svg>
          </div>
          <div className="text-center"><h1 className="text-xl">Quality Assurance</h1></div>
        </motion.div>

        {/* Card4 */}
        <motion.div
          variants={fadeDown}
          className="flex flex-col gap-4 bg-[#59D7F7] px-4 md:px-6 py-8 md:py-12 rounded-xl"
        >
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m11 17 2 2a1 1 0 1 0 3-3" />
              <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
              <path d="m21 3 1 11h-2" />
              <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
              <path d="M3 4h8" />
            </svg>
          </div>
          <div className="text-center"><h1 className="text-xl">Consultant</h1></div>
        </motion.div>

        {/* Card5 */}
        <motion.div
          variants={fadeDown}
          className="flex flex-col gap-4 bg-[#59D7F7] px-4 md:px-6 py-8 md:py-12 rounded-xl"
        >
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />
              <path d="M8 15H7a4 4 0 0 0-4 4v2" />
              <circle cx="10" cy="7" r="4" />
            </svg>
          </div>
          <div className="text-center"><h1 className="text-xl">Scrum Masters</h1></div>
        </motion.div>
      </motion.div>

      {/* Second row */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {/* Card6 */}
        <motion.div
          variants={fadeDown}
          className="flex flex-col gap-4 bg-[#59D7F7] px-6 py-12 rounded-xl"
        >
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" />
            </svg>
          </div>
          <div className="text-center"><h1 className="text-xl">Business Analysts</h1></div>
        </motion.div>

        {/* Card7 */}
        <motion.div
          variants={fadeDown}
          className="flex flex-col gap-4 bg-[#59D7F7] px-6 py-12 rounded-xl"
        >
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="text-center"><h1 className="text-xl">Project Managers</h1></div>
        </motion.div>

        {/* Card8 */}
        <motion.div
          variants={fadeDown}
          className="flex flex-col gap-4 bg-[#59D7F7] px-6 py-12 rounded-xl"
        >
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0" />
              <path d="M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5" />
              <path d="M9 5A2 2 0 1 0 5 5V10" />
              <path d="M9 7V4A2 2 0 1 1 13 4V7.268" />
            </svg>
          </div>
          <div className="text-center"><h1 className="text-xl">Technical Support</h1></div>
        </motion.div>

        {/* Card9 */}
        <motion.div
          variants={fadeDown}
          className="flex flex-col gap-4 bg-[#59D7F7] px-6 py-12 rounded-xl"
        >
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 13v8" />
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              <path d="m8 17 4-4 4 4" />
            </svg>
          </div>
          <div className="text-center"><h1 className="text-xl">Cloud Specialist</h1></div>
        </motion.div>
      </motion.div>
    </AnimateOnView>
  );
}

export default Ourteam;
