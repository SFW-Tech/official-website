"use client";
import React, { CSSProperties, useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
  style?: CSSProperties;
  amount?: number;
  once?: boolean; // optional, default true
}

export default function AnimateOnView({
  children,
  variants,
  className,
  style,
  amount = 0.1,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // triggers on reload if already in view
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
