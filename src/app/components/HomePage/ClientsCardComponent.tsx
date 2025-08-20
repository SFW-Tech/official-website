"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ClientsCardComponent: React.FC = () => {
  return (
    <div className="w-full px-6 md:px-28 mt-6">
      {/* Heading */}
      <div className="flex justify-center">
        <motion.h3
          className="font-semibold text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl"
          initial={{ opacity: 0, y: -20, x: 0 }} 
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Valuable Clients
        </motion.h3>
      </div>

      {/* Grid with animations */}
      <motion.div
        className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 md:gap-x-12 xl:gap-9 mt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <img
            src="/assets/Home/clientassets/1.png"
            className="h-16 sm:h-20 md:h-32 lg:h-44 xl:h-44 object-cover w-full"
            alt="Client 1"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <img
            src="/assets/Home/clientassets/2.png"
            className="h-16 sm:h-20 md:h-32 lg:h-44 xl:h-44 object-cover w-full"
            alt="Client 2"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <img
            src="/assets/Home/clientassets/3.png"
            className="h-16 sm:h-20 md:h-32 lg:h-44 xl:h-44 object-cover w-full"
            alt="Client 3"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <img
            src="/assets/Home/clientassets/4.png"
            className="h-16 sm:h-20 md:h-32 lg:h-44 xl:h-44 object-cover w-full"
            alt="Client 4"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <img
            src="/assets/Home/clientassets/5.png"
            className="h-16 sm:h-20 md:h-32 lg:h-44 xl:h-44 object-cover w-full"
            alt="Client 5"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ClientsCardComponent;
