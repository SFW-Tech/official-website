"use client"
import React from 'react'
import { motion,Variants } from 'framer-motion'

function Applicationtypessection() {
    
    const containerVariants:Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.3
            }
        }
    }

    const sectionVariants :Variants = {
        hidden: {
            opacity: 0,
            y: 60
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const imageVariants:Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            rotateY: -15
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const textVariants :Variants= {
        hidden: {
            opacity: 0,
            x: 50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: 0.2
            }
        }
    }

    const textVariantsLeft :Variants= {
        hidden: {
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: 0.2
            }
        }
    }

    const headingVariants :Variants= {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

     

    const paragraphVariants:Variants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3
            }
        }
    }

    return (
        <motion.div
            className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 mt-8 grid gap-8 mb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >

            {/* 1st Section - Android */}
            <motion.div
                className="grid grid-cols-1 lg:flex lg:gap-x-6 gap-y-6"
                variants={sectionVariants}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Left - Image */}
                <motion.div
                    className="flex justify-center"
                    variants={imageVariants}
                >
                    <motion.img
                        src="/assets/Mobileapplications/Applicationtypesassets/android.png"
                        alt="Android Native App"
                        className="w-full max-w-[600px] h-auto rounded-lg"

                        whileTap={{
                            scale: 0.98,
                            transition: { duration: 0.1 }
                        }}
                    />
                </motion.div>

                {/* Right - Text */}
                <motion.div
                    className="flex flex-col justify-center gap-4 lg:w-1/2"
                    variants={textVariants}
                >
                    <motion.h3
                        className="text-gray-800 font-bold text-xl sm:text-2xl"
                        variants={headingVariants}
                        whileHover={{
                            color: "#22C55E",
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        Android Native App
                    </motion.h3>
                    <motion.p
                        className="text-gray-600 text-sm md:text-base"
                        variants={paragraphVariants}
                    >
                        With SoftWorks the native mobile app development, the app is created and optimized for a specific platform. As a result, the app demonstrates an extremely high level of performance. Native apps are very fast and responsive because they are built for that specific platform and are compiled using platforms core programming language and APIs. As a result, the app is much more efficient. The device stores the app allowing the software to leverage the device's processing speed. As users navigate through a native mobile app, the contents and visual elements are already stored on their phone which means load times are quick, SoftWorks build more advanced and user friendly apps helps to optimize your business venture.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* 2nd Section - iOS */}
            <motion.div
                className="grid grid-cols-1 lg:flex lg:gap-x-6 gap-y-6"
                variants={sectionVariants}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Left - Text */}
                <motion.div
                    className="flex flex-col justify-center gap-4 lg:w-1/2 order-2 lg:order-1"
                    variants={textVariantsLeft}
                >
                    <motion.h3
                        className="text-gray-800 font-bold text-xl sm:text-2xl"
                        variants={headingVariants}
                        whileHover={{
                            color: "#3B82F6",
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        IOS Native App
                    </motion.h3>
                    <motion.p
                        className="text-gray-600 text-sm md:text-base"
                        variants={paragraphVariants}
                    >
                        SoftWorks builds native mobile applications for iOS have special operating system-specific features. Guidelines by Apple and Google recommend to use platform-standard navigation controls whenever possible: page controls, tab bars, segmented controls, table views, collection views, and split views. Users are familiar with how these controls typically work on each platform, so if you use the standard controls, your users will intuitively know how to get around your app. We focus on the main differences between interaction design patterns on iOS and Android to clarify why apps look different on iOS.Our Developers watch closely the activity of the app and analysis the functionality of the app, to find the user experience and the interface objective obtained.
                    </motion.p>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                    className="flex justify-center order-1 lg:order-2"
                    variants={imageVariants}
                >
                    <motion.img
                        src="/assets/Mobileapplications/Applicationtypesassets/ios.png"
                        alt="iOS Native App"
                        className="w-full max-w-[600px] h-auto rounded-lg"

                        whileTap={{
                            scale: 0.98,
                            transition: { duration: 0.1 }
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* 3rd Section - Hybrid */}
            <motion.div
                className="grid grid-cols-1 lg:flex lg:gap-x-6 gap-y-6"
                variants={sectionVariants}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Left - Image */}
                <motion.div
                    className="flex justify-center"
                    variants={imageVariants}
                >
                    <motion.img
                        src="/assets/Mobileapplications/Applicationtypesassets/hybrid.png"
                        alt="Progressive Web Application"
                        className="w-full max-w-[600px] h-auto rounded-lg"

                        whileTap={{
                            scale: 0.98,
                            transition: { duration: 0.1 }
                        }}
                    />
                </motion.div>

                {/* Right - Text */}
                <motion.div
                    className="flex flex-col justify-center gap-4 lg:w-1/2"
                    variants={textVariants}
                >
                    <motion.h3
                        className="text-gray-800 font-bold text-xl sm:text-2xl"
                        variants={headingVariants}
                        whileHover={{
                            color: "#8B5CF6",
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        Hybrid App
                    </motion.h3>
                    <motion.p
                        className="text-gray-600 text-sm md:text-base"
                        variants={paragraphVariants}
                    >
                        A (hybrid app) is a software application that combines elements of both native apps and web applications. Hybrid apps are essentially web apps that have been put in a native app shell. Once they are downloaded from an app store and installed locally, the shell is able to connect to whatever capabilities the mobile platform provides through a browser that's embedded in the app. The browser and its plug-ins run on the back end and are invisible to the end user.
                        <br />
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            Hybrid apps are popular because they allow developers to write code for a mobile app once and still accommodate multiple platforms. Because hybrid apps add an extra layer between the source code and the target platform, SoftWorks develops the app to user-center and progressive while users find it easy and the developers feels it's efficiency.
                        </motion.span>
                    </motion.p>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default Applicationtypessection