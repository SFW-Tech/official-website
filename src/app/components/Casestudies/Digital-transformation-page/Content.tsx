"use client"
import React from 'react'
import { motion } from "framer-motion";
import AnimateOnView from '../../../../../animations/AnimateOnView';
import { fadeDown } from '../../../../../animations/animations';

function Content() {
  return (
    <div className='px-4 py-6 md:px-10 lg:px-16 xl:px-28 xl:py-10'>

      <div className='flex flex-col gap-8 md:gap-10 lg:gap-12 xl:gap-15'>

        {/* Image */}
        <AnimateOnView variants={fadeDown} className='flex justify-center'>
          <img
            src="/assets/Casestudies/Digital-Transformation.png"
            alt="Digital transformation image"
            className='w-full max-w-xs  lg:max-w-base xl:max-w-md'
          />
        </AnimateOnView>

        {/* Text + Button */}
        <AnimateOnView variants={fadeDown} className='flex flex-col gap-4 md:gap-5 lg:gap-6 text-center'>
          <div>
            <p className='text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed text-left'>
              Client is running a Foster care 70+ years in USA. The idea is to protect the children and youths in a community to offer a happy and prosperous lifestyle. Client dealt with lot of documentation in their business process, so they had built their own desktop app. The system typically receive and investigate reports of possible child abuse and neglect.
            </p>
          </div>
          <div>
            <motion.button
              className=" px-6 py-3 md:px-8 md:py-3 lg:px-9 lg:py-3 xl:px-10 xl:py-4 bg-[#59D7F7] text-white rounded-md font-bold cursor-pointer hover:text-gray-600 hover:bg-cyan-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.97 }}
            >
              Download
            </motion.button>
          </div>
        </AnimateOnView>

      </div>
    </div>
  )
}

export default Content
