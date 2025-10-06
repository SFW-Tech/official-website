"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown, headingVariant, staggerContainer } from "../../../../animations/animations";

function Serviceofferings() {
  return (
    <AnimateOnView
      variants={staggerContainer}
      className="px-6 xl:px-28 bg-blue-50 py-10"
    >
      <div className="flex flex-col gap-10 xl:gap-14 text-center">

        {/* Title */}
        <motion.div variants={headingVariant}>
          <h1 className="text-2xl xl:text-4xl font-bold">
            Our Team Augmentation Service Offerings
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div variants={fadeDown}>
          <p className="text-sm md:text-base text-gray-700">
            Collaborate with SoftWorks Technologies, one of the leading IT staff augmentation businesses, to strengthen the technical workforce capabilities that allow you to move regularly and focus on key business responsibilities. We distinguish ourselves via our values, passion, expertise, broad industry experience, and customer-first approach to providing cutting-edge digital solutions and top league augmentation services to businesses.
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-30"
        >
          {/* Card 1 */}
          <motion.div variants={fadeDown} className="flex flex-col gap-4 border p-6 xl:p-8 border-gray-300">
            <div className="flex justify-center">
              <div className="flex items-center justify-center w-16 h-16 xl:w-22 xl:h-22 rounded-full bg-[#001A5A]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8 xl:w-10 xl:h-10">
                  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 1 1 -6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                </svg>
              </div>
            </div>
            <h1 className="text-lg xl:text-2xl font-medium">Develop a Team</h1>
            <p className="leading-relaxed text-sm md:text-base text-gray-700">
              Make your ideas a reality by creating a fresh team of seasoned IT professionals of your choosing and in the way required by your project. We have a broad selection of professionals and team members available to work on a contract or hourly basis with you.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeDown} className="flex flex-col gap-4 border p-6 xl:p-8 border-gray-300">
            <div className="flex justify-center">
              <div className="flex items-center justify-center w-16 h-16 xl:w-22 xl:h-22 rounded-full bg-[#001A5A]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-8 h-8 xl:w-10 xl:h-10">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h1 className="text-lg xl:text-2xl font-medium">IT Expertise to Existing Team</h1>
            <p className="leading-relaxed text-sm md:text-base text-gray-700">
              Include our experienced IT professionals in your team to fill IT talent gaps and perform specific tasks throughout the software development lifecycle. And utilize our professionals' technical expertise to give your ongoing project an unique push.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeDown} className="flex flex-col gap-4 border p-6 xl:p-8 border-gray-300">
            <div className="flex justify-center">
              <div className="flex items-center justify-center w-16 h-16 xl:w-22 xl:h-22 rounded-full bg-[#001A5A]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-8 h-8 xl:w-10 xl:h-10">
                  <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z" clipRule="evenodd" />
                  <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                </svg>
              </div>
            </div>
            <h1 className="text-lg xl:text-2xl font-medium">Vendor Transition</h1>
            <p className="leading-relaxed text-sm md:text-base text-gray-700">
              Switch your project from an existing IT service provider with the help of our professionals who are experienced. SoftWork's team has extensive experience employing superior approaches to make the transfer more structured, secure, and smooth.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </AnimateOnView>
  );
}

export default Serviceofferings;
