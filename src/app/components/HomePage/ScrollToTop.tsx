"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scrollToTop"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1, 
            y: [50, -10, 0]  // bounce effect
          }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={scrollToTop}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 p-4 md:p-5 rounded-full bg-[#59D7F7] text-white shadow-lg hover:bg-cyan-400 transition-colors duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* Inline Lucide ArrowUp */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" x2="12" y1="19" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
