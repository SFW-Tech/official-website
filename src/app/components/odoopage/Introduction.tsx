"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown, staggerContainer } from "../../../../animations/animations";

function Introduction() {
  return (
    <AnimateOnView
      variants={staggerContainer}
      className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {/* Image */}
        <AnimateOnView
          variants={fadeDown}
          className="flex items-center justify-center order-1 lg:order-2"
        >
          <img
            src="/assets/odoo/Introduction/1.png"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded"
            alt="Odoo Introduction"
          />
        </AnimateOnView>

        {/* Text content */}
        <div className="order-2 lg:order-1 flex flex-col gap-6">
          {/* Intro heading + para */}
          <AnimateOnView
            variants={fadeDown}
            className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-8 text-gray-700 justify-center"
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-black">
              Introduction
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Odoo is an open-source suite of business applications designed to
              help businesses manage various aspects of their operations in an
              integrated manner. Originally known as OpenERP, it provides a
              range of modules that cover functions like accounting, inventory
              management, sales, CRM, human resources, manufacturing, and more.
            </p>
          </AnimateOnView>

          {/* Benefits */}
          <AnimateOnView
            variants={fadeDown}
            className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-8 text-gray-700 justify-center"
          >
            <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-black">
              Benefits of Odoo:
            </h2>

            {/* Staggered list */}
            <AnimateOnView
              variants={staggerContainer}
              className="flex flex-col gap-4"
            >
              <motion.p
                variants={fadeDown}
                className="text-gray-700 leading-relaxed text-sm md:text-base"
              >
                <span className="text-gray-800 font-medium">Flexibility: </span>
                Customizable to a wide range of industries and business needs.
              </motion.p>

              <motion.p
                variants={fadeDown}
                className="text-gray-700 leading-relaxed text-sm md:text-base"
              >
                <span className="text-gray-800 font-medium">Cost-effective: </span>
                More affordable compared to many other ERP solutions, especially
                for smaller businesses.
              </motion.p>

              <motion.p
                variants={fadeDown}
                className="text-gray-700 leading-relaxed text-sm md:text-base"
              >
                <span className="text-gray-800 font-medium">
                  All-in-one solution:{" "}
                </span>
                Covers almost every aspect of business operations, making it
                easier to manage everything in one platform.
              </motion.p>

              <motion.p
                variants={fadeDown}
                className="text-gray-700 leading-relaxed text-sm md:text-base"
              >
                <span className="text-gray-800 font-medium">
                  Strong community and support:{" "}
                </span>
                Access to a vast community and resources for help and further
                customization.
              </motion.p>
            </AnimateOnView>
          </AnimateOnView>
        </div>
      </div>

      <AnimateOnView variants={fadeDown}>
        <hr className="border border-gray-300 mt-12" />
      </AnimateOnView>
    </AnimateOnView>
  );
}

export default Introduction;
