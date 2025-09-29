"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { useRouter } from 'next/navigation'
import AnimateOnView from '../../../../../animations/AnimateOnView'
import { fadeDown, headingVariant, staggerContainer } from '../../../../../animations/animations'

const caseStudies = [
    {
        id: 'Digital-transformation',
        title: 'Digital Transformation',
        description: 'Comprehensive digital transformation strategy for enterprise modernization and workflow optimization',
        image: '/assets/Casestudies/Digital-Transformation.png',
        tags: ['Strategy', 'Digital', 'Enterprise']
    },
    {
        id: 'Reverse-logistics',
        title: 'Reverse Logistics',
        description: 'Optimizing return processes and supply chain efficiency through smart automation',
        image: '/assets/Casestudies/Reverse-Logistics.png',
        tags: ['Logistics', 'Supply Chain', 'Optimization']
    },
    {
        id: 'Appointment-booking',
        title: 'Appointment Booking System',
        description: 'Streamlined scheduling platform with real-time availability and automated notifications',
        image: '/assets/Casestudies/Appointment-Booking.png',
        tags: ['SaaS', 'Scheduling', 'Web App']
    },
    {
        id: 'Application-system',
        title: 'Application System',
        description: 'End-to-end application management and workflow automation for seamless operations',
        image: '/assets/Casestudies/Application-development.png',
        tags: ['Automation', 'Workflow', 'Management']
    },
    {
        id: 'Food-application',
        title: 'Food App Project',
        description: 'Mobile-first food delivery platform with seamless ordering and real-time tracking',
        image: '/assets/Home/Casestudyassets/case study 5.png',
        tags: ['Mobile', 'Food Tech', 'E-commerce']
    },
    {
        id: 'Code-ninja',
        title: 'Code Ninja',
        description: 'Developer productivity tools and code optimization platform for enhanced workflow',
        image: '/assets/Casestudies/Code-Ninja.jpg',
        tags: ['Developer Tools', 'Productivity', 'Platform']
    },
    {
        id: 'Kiosk',
        title: 'Kiosk',
        description: 'Interactive self-service kiosk solution for retail environments and customer engagement',
        image: '/assets/Casestudies/Kiosk.jpg',
        tags: ['Retail', 'Self-Service', 'Interactive']
    },
    {
        id: 'Field-Service-Management',
        title: 'Field Service Management',
        description: 'Customer support and issue resolution management system with intelligent routing',
        image: '/assets/Casestudies/Resolve.png',
        tags: ['Support', 'CRM', 'Management']
    },
    {
        id: 'Token-management',
        title: 'Token Management',
        description: 'Secure token-based authentication and access control system with advanced encryption',
        image: '/assets/Casestudies/Token-Management.png',
        tags: ['Security', 'Authentication', 'Backend']
    }
]

function Content() {
    const router = useRouter()

    const handleCaseStudyClick = (caseStudyId: string) => {
        router.push(`/case-studies/${caseStudyId}`)
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.08
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    }

    return (
        <AnimateOnView variants={staggerContainer} className='px-4 sm:px-8 lg:px-28 py-16 min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50'>
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center mb-20"
            >
                <motion.div
                    variants={headingVariant}
                    className="inline-block"
                >
                    <h1 className="text-3xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
                        Our Solutions
                    </h1>
                </motion.div>
                <motion.p
                    variants={fadeDown}
                    className="text-lg md:xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light"
                >
                    Discover how we transform ideas into impactful digital solutions. Each case study reflects our commitment to innovation, quality, and measurable results.
                </motion.p>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-1 bg-gradient-to-r from-blue-900 to-purple-600 mx-auto mt-10 rounded-full"
                ></motion.div>
            </motion.div>

            {/* Case Studies Grid */}
            <AnimateOnView
                variants={staggerContainer}

                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
                {caseStudies.map((study, index) => (
                    <motion.div
                        key={study.id}
                        variants={fadeDown}
                        whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }}
                        className="group cursor-pointer"
                        onClick={() => handleCaseStudyClick(study.id)}
                    >
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 transition-all duration-500 hover:border-gray-400 hover:shadow-2xl">
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                    onError={(e) => (e.currentTarget.style.display = 'none')}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="p-7">
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {study.tags.map((tag, tagIndex) => (
                                        <motion.span
                                            key={tagIndex}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                                            className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100/80 backdrop-blur-sm rounded-full border border-gray-200/50 hover:bg-gray-200/80 transition-colors duration-300"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
                                    {study.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {study.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors duration-300">
                                        <span>View Case Study</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12,5 19,12 12,19"></polyline>
                                        </svg>
                                    </div>
                                    <div className="text-xs text-gray-400 font-medium">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimateOnView>
        </AnimateOnView>
    )
}

export default Content
