"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useInView, Variants } from "framer-motion"
import { useRef } from "react"

type Service = {
    id: number
    title: string
    description: string
    icon: string
    image: string
    gradient: string
    shadow: number | string,
    numbercolor: string | number
}

function OurServices() {
    const [selected, setSelected] = useState<number>(1)
    const [isFlipped, setIsFlipped] = useState<boolean>(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    // All services array
    const services: Service[] = [
        {
            id: 1,
            title: "Web Applications",
            description:
                "The creation of application programs that reside on remote servers and are delivered to the user's device.",
            icon: "/assets/Home/Ourservicesassets/service 1 icon.png",
            image: "/assets/Home/Ourservicesassets/services1.png",
            gradient: "bg-gradient-to-r from-[#FCF5F7] to-[#FCBFD0]",
            shadow: "shadow-[0_0_60px_20px_rgba(236,72,153,0.7)]",
            numbercolor: "text-pink-500"
        },
        {
            id: 2,
            title: "Mobile Applications",
            description:
                "Mobile app is developed for Personal Digital Assistants, Enterprise Digital Assistants & mobile phones are Developed.",
            icon: "/assets/Home/Ourservicesassets/service 2 icon.png",
            image: "/assets/Home/Ourservicesassets/services2.png",
            gradient: "bg-gradient-to-r from-violet-50 to-violet-200",
            shadow: "shadow-[0_0_60px_20px_rgba(139,92,246,0.7)]",
            numbercolor: "text-violet-500"
        },
        {
            id: 3,
            title: "Website Development",
            description:
                "Engage your audience with a fluid, responsive, high-performing, appealing, intuitive front-end architecture.",
            icon: "/assets/Home/Ourservicesassets/service 3 icon.png",
            image: "/assets/Home/Ourservicesassets/services3.png",
            gradient: "bg-gradient-to-r from-violet-50 to-violet-200",
            shadow: "shadow-[0_0_60px_20px_rgba(139,92,246,0.7)]",
            numbercolor: "text-violet-500"
        },
        {
            id: 4,
            title: "AI",
            description:
                "Engage your audience with a fluid, responsive, high-performing, appealing, intuitive front-end architecture.",
            icon: "/assets/Home/Ourservicesassets/ai.png",
            image: "/assets/Home/Ourservicesassets/services4.png",
            gradient: "bg-gradient-to-r from-yellow-50 to-yellow-100",
            shadow: "shadow-[0_0_60px_20px_rgba(250,204,21,0.7)]",
            numbercolor: "text-yellow-500"
        },
        {
            id: 5,
            title: "Staff Augmentation",
            description:
                "Skilled developers and technical professionals to extend your team and accelerate project delivery.",
            icon: "/assets/Home/Ourservicesassets/service 5 icon.png",
            image: "/assets/Home/Ourservicesassets/services5.png",
            gradient: "bg-gradient-to-r from-[#F8F0FC] to-[#D0BFFF]",
            shadow: "shadow-[0_0_60px_20px_rgba(147,51,234,0.7)]",
            numbercolor: "text-purple-500"
        },
    ]

    // Auto flip effect for active card only
    useEffect(() => {
        setIsFlipped(false) // reset immediately when changing card

        const timer = setTimeout(() => {
            setIsFlipped(true)
        }, 2000)

        return () => clearTimeout(timer)
    }, [selected])

    // Selected service
    const activeService = services.find((s) => s.id === selected)

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    }

    const serviceItemVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        hover: { scale: 1.02 },
        tap: { scale: 0.98 }
    }

    const cardVariants: Variants = {
        front: { rotateY: 0 },
        back: { rotateY: 180 }
    }

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.1 }
    }


    return (
        <motion.div
            ref={ref}
            className="w-full mt-10 md:mt-20 px-6 md:px-0"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Heading */}
            <motion.div
                className="flex flex-col gap-3 justify-center items-center"
                variants={itemVariants}
            >
                <motion.h1
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold text-gray-700"
                    variants={itemVariants}
                >
                    Our Services
                </motion.h1>
                <motion.p
                    className="text-center text-sm sm:text-base md:text-md lg:text-xl text-gray-500"
                    variants={itemVariants}
                >
                    Transform your Business with Advanced technologies
                </motion.p>
            </motion.div>

            <motion.div
                className="md:pl-28"
                variants={itemVariants}
            >
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] mt-8 md:mt-22"
                    variants={containerVariants}
                >
                    {/* Left Side */}
                    <motion.div
                        className="flex flex-col rounded-lg overflow-hidden"
                        variants={itemVariants}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                onClick={() => setSelected(service.id)}
                                className={`flex items-center gap-4 p-4 cursor-pointer border-b border-gray-200 
                                ${selected === service.id ? service.gradient : ""}`}
                                variants={serviceItemVariants}
                                whileHover="hover"
                                whileTap="tap"
                                custom={index}
                                layout
                                layoutId={`service-${service.id}`}
                            >
                                <motion.img
                                    src={service.icon}
                                    alt={service.title}
                                    whileHover={{
                                        rotate: [0, -10, 10, 0],
                                        scale: 1.1
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.p
                                    className="font-semibold text-lg"
                                    animate={{
                                        color: selected === service.id ? "#374151" : "#6B7280"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {service.title}
                                </motion.p>
                            </motion.div>
                        ))}

                        <motion.div
                            className="flex gap-3 mt-4 items-center cursor-pointer underline"
                            whileHover={{
                                x: 10,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            variants={itemVariants}
                        >
                            <h2 className="font-bold text-black text-md">Learn More</h2>
                            <motion.img
                                src="/assets/Home/Ourservicesassets/arrowicon.png"
                                alt="arrow"
                                className="h-6 w-6"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        className="hidden md:block relative h-[600px] overflow-hidden -mt-20"
                        variants={itemVariants}
                        style={{ perspective: 1000 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selected}
                                className="absolute inset-0"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={imageVariants}
                            >
                                <motion.div
                                    className="w-full h-full"
                                    animate={isFlipped ? "back" : "front"}
                                    variants={cardVariants}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {!isFlipped ? (
                                        <motion.img
                                            src={activeService?.image}
                                            alt={activeService?.title}
                                            className="w-full h-full"
                                            layoutId={`main-image-${selected}`}
                                            whileHover={{
                                                scale: 1.05,
                                                filter: "brightness(1.1)"
                                            }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        />
                                    ) : (
                                        <motion.div
                                            className="w-full h-full flex items-center justify-center p-8"
                                            style={{ transform: "rotateY(180deg)" }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <motion.div
                                                className={`bg-white rounded-lg p-8 max-w-md w-full ${activeService?.shadow}`}
                                                initial={{ y: 50, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 100,
                                                    delay: 0.4
                                                }}
                                                whileHover={{
                                                    y: -10,
                                                    transition: { type: "spring", stiffness: 300 }
                                                }}
                                            >
                                                <motion.div
                                                    className="flex justify-between items-start mb-4"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.6 }}
                                                >
                                                    <h3 className="text-xl font-bold text-gray-800 flex-1 pr-4">
                                                        {activeService?.title}
                                                    </h3>
                                                    <motion.span
                                                        className={`text-7xl font-bold ${activeService?.numbercolor}`}
                                                        initial={{ scale: 0, rotate: -180 }}
                                                        animate={{ scale: 1, rotate: 0 }}
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 200,
                                                            delay: 0.7
                                                        }}
                                                    >
                                                        0{selected}
                                                    </motion.span>
                                                </motion.div>

                                                <motion.p
                                                    className="text-gray-600 text-sm leading-relaxed mb-6"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.8 }}
                                                >
                                                    {activeService?.description}
                                                </motion.p>

                                                <motion.div
                                                    className="flex gap-3 mt-4 items-center cursor-pointer underline"
                                                    whileHover={{
                                                        x: 10,
                                                        transition: { type: "spring", stiffness: 300 }
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.9 }}
                                                >
                                                    <h2 className="font-bold text-black text-xs">Learn More</h2>
                                                    <motion.img
                                                        src="/assets/Home/Ourservicesassets/arrowicon.png"
                                                        alt="arrow"
                                                        className="h-4 w-4"
                                                        whileHover={{ x: 5 }}
                                                        transition={{ type: "spring", stiffness: 300 }}
                                                    />
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default OurServices