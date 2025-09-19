"use client"
import { Variants } from "framer-motion";


export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },      
  visible: { 
    opacity: 1, 
    y: 0,                              
    transition: { duration: 0.4, ease: "easeOut" } 
  },
};

// animations/animations.ts
export const headingVariant:Variants = {
  hidden: { opacity: 0, y: -30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};
