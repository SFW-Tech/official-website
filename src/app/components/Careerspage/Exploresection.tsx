"use client";
import React from "react";
import { motion } from "framer-motion";

function Exploresection() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12 lg:gap-x-20 xl:gap-x-44">
        
        {/* Image Section */}
        <motion.div
          className="order-1 md:order-2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/Careers/Exploresectionassets/1.png"
            className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-auto"
            alt="Explore life at Softworks"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="order-2 md:order-1 flex flex-col justify-center gap-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h3
            className="text-lg sm:text-xl md:text-2xl font-bold"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore Life at Softworks!
          </motion.h3>

          {/* Paragraph */}
          <motion.p
            className="text-sm sm:text-base md:text-md lg:text-lg xl:text-base leading-relaxed"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Softworks offers a wide range of exciting opportunities for young and
            experienced professionals to be part of our team, to bring ideas,
            innovativeness and determination to make a difference. We work with
            exceptional people, the latest and greatest technologies and leading
            companies across industries to create value for our clients, people and
            communities. Choose a career with us and together, let’s create positive,
            long-lasting value.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Exploresection;
