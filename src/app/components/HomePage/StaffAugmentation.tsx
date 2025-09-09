"use client"
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";

function StaffAugmentation() {
    
    const imageRef = useRef(null)
    const textRef = useRef(null)

    
    const imageInView = useInView(imageRef, { once: true,  })
    const textInView = useInView(textRef, { once: true,  })

    return (
        <div className="mt-4 px-6 sm:px-8 md:px-8 lg:px-12 xl:px-28 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 items-center mb-6 md:mb-0">

            {/* Image */}
            <motion.div
                ref={imageRef}
                initial={{ opacity: 0, x: -100 }}
                animate={imageInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex justify-center items-center"
            >
                <img
                    src="/assets/Home/Staffaugmentationassets/Grouplogo.png"
                    alt="Staff Augmentation"
                    className="w-[400px] sm:w-[400px] md:w-[500px] lg:w-[500px] xl:w-[700px] 
                               h-auto md:h-[500px] xl:h-[700px] object-contain"
                />
            </motion.div>

            {/* Text */}
            <motion.div
                ref={textRef}
                initial={{ opacity: 0, x: 100 }}
                animate={textInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex flex-col gap-4 p-0 sm:p-0 md:p-4 lg:p-10 xl:p-15 leading-relaxed justify-center"
            >
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-bold">
                    Staff Augmentation Your Developers and Our Integration
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-500">
                    Our staff augmentation services follow a streamlined approach to help you scale efficiently.
                    We consult with you to understand your project goals and skill requirements. Next, we help
                    you select the right talent from our pool of qualified professionals who align with your
                    business needs. Once onboarded, they work seamlessly with your internal teams, ensuring
                    productivity and transparency. Throughout the engagement, we provide continuous support
                    to ensure smooth collaboration, performance tracking, and successful project delivery.
                </p>
            </motion.div>

        </div>
    )
}

export default StaffAugmentation
