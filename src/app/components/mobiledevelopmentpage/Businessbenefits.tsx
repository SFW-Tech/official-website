"use client"
import React from 'react'
import { motion,Variants } from 'framer-motion'

function Businessbenefits() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    }

    const headingVariants:Variants = {
        hidden: { 
            opacity: 0, 
            y: -30,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const leftItemVariants:Variants = {
        hidden: { 
            opacity: 0, 
            x: -50,
            scale: 0.8
        },
        visible: { 
            opacity: 1, 
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const rightItemVariants:Variants = {
        hidden: { 
            opacity: 0, 
            x: 50,
            scale: 0.8
        },
        visible: { 
            opacity: 1, 
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const centerImageVariants:Variants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.7
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.3
            }
        }
    }

    const imageHoverVariants:Variants = {
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    const cardHoverVariants:Variants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div
            className="px-6 md:px-12 lg:px-20 xl:px-28 mt-8 mb-20"
            style={{ backgroundImage: "url('/assets/Mobileapplications/Businessbenefitsassets/bg.png')" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Heading */}
            <motion.div 
                className='flex justify-center items-center'
                variants={headingVariants}
            >
                <motion.h2 
                    className='text-2xl md:text-3xl font-bold'
                   
                >
                    Business Benefits
                </motion.h2>
            </motion.div>

            {/* Main Grid */}
            <motion.div 
                className='grid grid-cols-1 lg:grid-cols-3 mt-12 gap-10'
                variants={containerVariants}
            >

                {/* Left Section */}
                <motion.div 
                    className='flex flex-col gap-25'
                    variants={containerVariants}
                >

                    <motion.div 
                        className='flex gap-4 md:translate-x-10 lg:translate-x-16 xl:translate-x-20'
                        variants={leftItemVariants}
                        whileHover="hover"
                    >
                        <motion.div 
                            className='flex flex-col'
                            variants={cardHoverVariants}
                        >
                            <motion.h3 
                                className='text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800'
                                whileHover={{
                                    color: "#3B82F6",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Software as a Service
                            </motion.h3>
                            <motion.p 
                                className='text-sm md:text-base text-right text-gray-700'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                51% of smartphone users have discovered a new company or product.
                            </motion.p>
                        </motion.div>
                        <motion.div
                            variants={imageHoverVariants}
                            whileHover="hover"
                        >
                            <img src="/assets/Mobileapplications/Businessbenefitsassets/Saas.png" 
                                 className='w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20' alt="" />
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className='flex gap-4'
                        variants={leftItemVariants}
                        whileHover="hover"
                    >
                        <motion.div 
                            className='flex flex-col'
                            variants={cardHoverVariants}
                        >
                            <motion.h3 
                                className='text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800'
                                whileHover={{
                                    color: "#10B981",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Internet of Things
                            </motion.h3>
                            <motion.p 
                                className='text-sm md:text-base text-right text-gray-700'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                            >
                                Move your SaaS products to mobile, Companies with a professional mobile.
                            </motion.p>
                        </motion.div>
                        <motion.div
                            variants={imageHoverVariants}
                            whileHover="hover"
                        >
                            <img src="/assets/Mobileapplications/Businessbenefitsassets/iot.png" 
                                 className='w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20' alt="" />
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className='flex gap-4 md:translate-x-10 lg:translate-x-16 xl:translate-x-20'
                        variants={leftItemVariants}
                        whileHover="hover"
                    >
                        <motion.div 
                            className='flex flex-col'
                            variants={cardHoverVariants}
                        >
                            <motion.h3 
                                className='text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800'
                                whileHover={{
                                    color: "#F59E0B",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Sports & Games
                            </motion.h3>
                            <motion.p 
                                className='text-sm md:text-base text-right text-gray-700'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                            >
                                Develop a custom mobile app to thrive in a mobile market worth.
                            </motion.p>
                        </motion.div>
                        <motion.div
                            variants={imageHoverVariants}
                            whileHover="hover"
                        >
                            <img src="/assets/Mobileapplications/Businessbenefitsassets/sports.png" 
                                 className='w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20' alt="" />
                        </motion.div>
                    </motion.div>

                </motion.div>

                {/* Center Image */}
                <motion.div 
                    className='flex justify-center items-end'
                    variants={centerImageVariants}
                >
                    <motion.img 
                        src="/assets/Mobileapplications/Businessbenefitsassets/Heroimage.png" 
                        alt="" 
                        className='h-[250px] md:h-[320px] lg:h-[380px] xl:h-[400px] w-[300px] md:w-[400px] lg:w-[500px] xl:w-[550px]'
                        whileHover={{
                            scale: 1.05,
                            y: -10,
                            transition: {
                                duration: 0.6,
                                ease: "easeIn"
                            }
                        }}
                        animate={{
                            y: [0, -10, 0],
                            transition: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    />
                </motion.div>

                {/* Right Section */}
                <motion.div 
                    className='flex flex-col gap-25'
                    variants={containerVariants}
                >

                    <motion.div 
                        className='flex gap-4 md:-translate-x-10 lg:-translate-x-16 xl:-translate-x-20'
                        variants={rightItemVariants}
                        whileHover="hover"
                    >
                        <motion.div
                            variants={imageHoverVariants}
                            whileHover="hover"
                        >
                            <img src="/assets/Mobileapplications/Businessbenefitsassets/social.png" 
                                 className='w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20' alt="" />
                        </motion.div>
                        <motion.div 
                            className='flex flex-col'
                            variants={cardHoverVariants}
                        >
                            <motion.h3 
                                className='text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800'
                                whileHover={{
                                    color: "#EF4444",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Social Media
                            </motion.h3>
                            <motion.p 
                                className='text-sm md:text-base text-left text-gray-700'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                80% of time users spend in social media from their mobile devices.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className='flex gap-4'
                        variants={rightItemVariants}
                        whileHover="hover"
                    >
                        <motion.div
                            variants={imageHoverVariants}
                            whileHover="hover"
                        >
                            <img src="/assets/Mobileapplications/Businessbenefitsassets/businessmanagement.png" 
                                 className='w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20' alt="" />
                        </motion.div>
                        <motion.div 
                            className='flex flex-col'
                            variants={cardHoverVariants}
                        >
                            <motion.h3 
                                className='text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800'
                                whileHover={{
                                    color: "#8B5CF6",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Business Management
                            </motion.h3>
                            <motion.p 
                                className='text-sm md:text-base text-left text-gray-700'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                            >
                                65% of sales representatives have achieved their quotas by adopting.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className='flex gap-4 md:-translate-x-10 lg:-translate-x-16 xl:-translate-x-20'
                        variants={rightItemVariants}
                        whileHover="hover"
                    >
                        <motion.div
                            variants={imageHoverVariants}
                            whileHover="hover"
                        >
                            <img src="/assets/Mobileapplications/Businessbenefitsassets/trading.png" 
                                 className='w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20' alt="" />
                        </motion.div>
                        <motion.div 
                            className='flex flex-col'
                            variants={cardHoverVariants}
                        >
                            <motion.h3 
                                className='text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800'
                                whileHover={{
                                    color: "#06B6D4",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Trading Systems
                            </motion.h3>
                            <motion.p 
                                className='text-sm md:text-base text-left text-gray-700'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                            >
                                We provide top-tier mobile app development services for brokers.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default Businessbenefits