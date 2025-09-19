"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeDown, headingVariant, staggerContainer } from '../../../../animations/animations'
import AnimateOnView from '../../../../animations/AnimateOnView'

function Whatwedo() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  type ColorVariant = {
    bg: string;
    border: string;
    icon: string;
    text: string;
    accent: string;
  };

  const colorVariants: Record<string, ColorVariant> = {
    blue: { bg: "bg-blue-50", border: "border-blue-100", icon: "bg-blue-500", text: "text-blue-600", accent: "text-blue-500" },
    purple: { bg: "bg-purple-50", border: "border-purple-100", icon: "bg-purple-500", text: "text-purple-600", accent: "text-purple-500" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-100", icon: "bg-emerald-500", text: "text-emerald-600", accent: "text-emerald-500" },
    orange: { bg: "bg-orange-50", border: "border-orange-100", icon: "bg-orange-500", text: "text-orange-600", accent: "text-orange-500" },
    indigo: { bg: "bg-indigo-50", border: "border-indigo-100", icon: "bg-indigo-500", text: "text-indigo-600", accent: "text-indigo-500" },
    cyan: { bg: "bg-cyan-50", border: "border-cyan-100", icon: "bg-cyan-500", text: "text-cyan-600", accent: "text-cyan-500" }
  }

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
      title: "Wordpress Theme Customization",
      description: "Hire WordPress Developers who design your website in various responsive themes and templates to drive more traffic to transform your business.",
      color: "blue",
      delay: 0.1
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
      title: "Wordpress Plugin Development",
      description: "Get customized plugins for your websites uniqueness that goes beyond defaults. Enhance the functionality with feature rich plugins.",
      color: "purple",
      delay: 0.2
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
      title: "Ensuring Website Security",
      description: "Install an SSL certificate to secure transactions.Regularly update WordPress, themes, and plugins to their latest versions.",
      color: "emerald",
      delay: 0.3
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      ),
      title: "Woocommerce Development",
      description: "We help clients to build online store based on WooCommerce with customizable plugins and themes powered by WordPress.",
      color: "orange",
      delay: 0.4
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3V16.5m3-3v3M15 19.128v.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM2.25 12c0 2.652.816 5.11 2.204 7.145" />
        </svg>
      ),
      title: "WordPress Migration Services",
      description: "Switch your existing website to WordPress platform for improving functionality without compromising on data and security.",
      color: "indigo",
      delay: 0.5
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655-5.653a2.548 2.548 0 0 1 0-3.586l.823-.823a2.548 2.548 0 0 1 3.586 0l5.653 4.655-3.586 5.83-3.586.212Z" />
        </svg>
      ),
      title: "WordPress Support & Maintance",
      description: "Boost your business with our extensive maintenance and support for WordPress web development services, offered by expert WordPress developers.",
      color: "cyan",
      delay: 0.6
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-14 lg:mb-16 xl:mb-20"
          variants={headingVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What We
            <span className="block bg-gradient-to-r from-gray-900 to-gray-900 bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl text-gray-600 mx-auto leading-relaxed">
            Custom WordPress Development Services
          </p>
        </motion.div>

        {/* Services Grid */}
        <AnimateOnView
          className="grid lg:grid-cols-3 gap-8 lg:gap-12"
          variants={staggerContainer}
          
          
        >
          {services.map((service, index) => {
            const colors = colorVariants[service.color]
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeDown}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`relative ${colors.bg} ${colors.border} border-2 rounded-2xl p-8 lg:p-10 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-200/50`}>

                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 border-gray-100">
                    <span className={`font-bold text-lg ${colors.accent}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center">
                    <motion.div
                      className={`p-4 ${colors.icon} rounded-xl shadow-lg mb-6 text-white`}
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                  </div>

                  {/* Hover Indicator */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 ${colors.icon} rounded-b-2xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </AnimateOnView>
      </div>
    </section>
  )
}

export default Whatwedo
