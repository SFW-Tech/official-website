"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'

function Applicationtypessection() {
    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.3
            }
        }
    }

    const sectionVariants: Variants = {
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

    const imageVariants: Variants = {
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

    const textVariants: Variants = {
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

    const textVariantsLeft: Variants = {
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

    const headingVariants: Variants = {
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

    const paragraphVariants: Variants = {
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
            className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 mt-8 grid gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >

            {/* 1st Section - Custom Enterprise */}
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
                        src="/assets/Webapplications/Applicationtypesassets/1.png"
                        alt="Custom Application for Enterprise"
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
                            color: "#137c9c",
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        Custom Application for Enterprise
                    </motion.h3>
                    <motion.p 
                        className="text-gray-600 text-sm md:text-base"
                        variants={paragraphVariants}
                    >
                        Web applications have become an integral part of businesses in today's
                        world for everything from offering customer support to promoting your brand
                        and Product online. Custom Web apps development is the designing of software
                        applications for users in an organization to fulfill specific business needs.
                        We will provide you with end-to-end web development services and our
                        professional guidance on creating scalable, secure, and user-friendly web apps
                        for your business needs.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* 2nd Section - SAAS Product */}
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
                            color: "#129944",
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        Custom SAAS Product Development
                    </motion.h3>
                    <motion.p 
                        className="text-gray-600 text-sm md:text-base"
                        variants={paragraphVariants}
                    >
                        SoftWorks provide innovative software solutions to help you and your digital
                        business space. We have been one of the leading Product development and
                        Technology services companies in India since 2019, Serving clients across the
                        globe. We design, develop, launch and enhance your products with our passionate
                        and Technology experts. We also help you accelerate the efficiency and
                        performance of your organization with our skilled Technology services.
                    </motion.p>
                </motion.div>

                {/* Right - Image */}
                <motion.div 
                    className="flex justify-center order-1 lg:order-2"
                    variants={imageVariants}
                >
                    <motion.img
                        src="/assets/Webapplications/Applicationtypesassets/2.png"
                        alt="Custom SAAS Product Development"
                        className="w-full max-w-[600px] h-auto rounded-lg"
                        
                        whileTap={{
                            scale: 0.98,
                            transition: { duration: 0.1 }
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* 3rd Section - Progressive Web App */}
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
                        src="/assets/Webapplications/Applicationtypesassets/3.png"
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
                            color: "#6568D4",
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        Progressive Web Application
                    </motion.h3>
                    <motion.p 
                        className="text-gray-600 text-sm md:text-base"
                        variants={paragraphVariants}
                    >
                        Progressive web apps is use for service workers, manifests, and other web
                        platform features in combination with progressive enhancement to give users
                        an experience on par with native apps. PWAs provide a number of advantages
                        to users including being installable, progressively enhanced, responsively
                        designed, re-engageable, linkable, discoverable, network independent, and
                        secure.
                    </motion.p>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default Applicationtypessection