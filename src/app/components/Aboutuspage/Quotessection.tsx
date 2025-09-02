"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"



function Quotessection() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (

        <div
            className='mt-8 w-full h-60 sm:h-72 md:h-80'
            style={{
                backgroundImage: "url('/assets/Aboutus/Quotesassets/1.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
            ref={ref}
        >
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='flex justify-center items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[75px] h-full'>
                <p className='text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed'>
                    "We build our Software solutions in a simple, easy-to-use format, uncluttered and easy to comprehend, enabling you to make quick & insightful business decisions. This will help you to stay on track for growth goals, foresee new opportunities & cultivate potential business areas"
                </p>
            </motion.div>
        </div>
    )
}

export default Quotessection
