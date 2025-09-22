// animations/pageTransitions.ts
import { Variants } from "framer-motion";

export const pageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -5, 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1], // custom cubic-bezier for smoother easing
    },
  },
  exit: {
    opacity: 0,
    y: -5, // subtle upward exit motion
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};
