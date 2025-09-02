"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

export default function Experiencesection() {
  const Counter = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const count = useMotionValue(from);
    const [display, setDisplay] = useState(from);

    useEffect(() => {
      let controls: any;
      if (inView) {
        controls = animate(count, to, {
          duration,
          ease: "easeInOut",
          onUpdate(latest) {
            setDisplay(Number(latest.toFixed(0)));
          },
        });
      }
      return () => controls?.stop();
    }, [inView, to, duration, count]);

    return (
      <motion.span ref={ref}>
        {display}+
      </motion.span>
    );
  };

  return (
    <div
      className="mt-8 w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/Aboutus/Experienceassets/background.png')",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center w-full h-full gap-4 md:gap-0 px-4 md:px-30 lg:px-38 xl:px-52 py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="flex flex-col text-white items-center gap-1 justify-self-start">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold">
            <Counter from={0} to={40} duration={1.5} />
          </h1>
          <p className="text-sm md:text-base lg:text-lg">Projects</p>
        </div>

        <div className="flex flex-col text-white items-center gap-1">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold">
            <Counter from={0} to={40} duration={1.5} />
          </h1>
          <p className="text-sm md:text-base lg:text-lg">Software Experts</p>
        </div>

        <div className="flex flex-col text-white items-center gap-1 justify-self-end">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold">
            <Counter from={0} to={6} duration={1.5} />
          </h1>
          <p className="text-sm md:text-base lg:text-lg">Years Of Experience</p>
        </div>
      </div>
    </div>
  );
}
