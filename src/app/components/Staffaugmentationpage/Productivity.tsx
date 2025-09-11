"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

// Cards array with individual colors
const cards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
    text: "Acts as a bridge, saving you time, money, and effort in screening and employing certain skill sets to accomplish jobs.",
    color: "text-blue-700",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    text: "Increases your product development capabilities in response to changing market conditions or project execution.",
    color: "text-green-700",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    text: "Working with a completely flexible and professional staff at an affordable charge, with the ability to enlarge or decrease the workforce on demand.",
    color: "text-red-700",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
    text: "Allows you to hire the best subject matter experts for your project and improve team communication throughout the SDLC.",
    color: "text-purple-700",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    text: "Helps you meet your staffing requirements for existing project deadlines in less time while resolving workforce difficulties.",
    color: "text-cyan-700",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 9h3.75m-4.5 2.625h4.5M12 18.75 9.75 16.5h.375a2.625 2.625 0 0 0 0-5.25H9.75m.75-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    text: "Scale your business with minimal operational and administrative costs.",
    color: "text-teal-700",
  },
];

function Productivity() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 mt-20">
      {/* Headings */}
      <div className="flex flex-col gap-6 md:gap-12 text-center">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
          Increase Productivity by Using
        </h1>
        <h3 className="text-2xl font-bold text-[#001A5A]">
          Our IT Staff Augmentation Services.
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
          We aim to expand the in-house development team by providing on-demand
          access to a large pool of subject matter professionals for your numerous
          IT project requirements. This reduces the administrative difficulties of
          a lengthy hiring process, speeds up the launch of your digital product,
          and enables high-impact returns.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mt-16">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center gap-4 p-6 hover:shadow-md hover:rounded-2xl cursor-pointer shadow-sm"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            whileHover={{ scale: 1.08, }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className={`w-12 h-12 ${card.color}`}>{card.icon}</div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Productivity;
