"use client"
import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion'
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown, staggerContainer ,headingVariant} from "../../../../animations/animations";

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  bgColor: string;
}

const services: Service[] = [
  {
    title: "Website Development",
    description: "Engage your audience with a fluid, responsive, high-performing, appealing, intuitive front-end architecture. Our developers ensure to create a compelling digital presence with their engaging front-end development expertise.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "SEO Friendly Website",
    description: "The code is devised to be SEO-Friendly to help you connect with the accurate audience and provide them with optimum navigation and engaging experience on your website which is search engine friendly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6m3-3v6" />
      </svg>
    ),
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    title: "Custom Website Development",
    description: "We help you digitally transform with our domain expertise and several years of experience to provide you with web development consultation to drive business growth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    title: "Hosting & Maintenance",
    description: "We have the hosting feature available to help your website go live and create a strong digital impact and gives you scalability. We also offer round-the-clock support for your website for a consistent and smooth customer experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    title: "Responsive Website Development",
    description: "We help you develop websites that can be accessed on any digital platform or device, irrespective of your customers' preferences. Amplify your audience connect by reaching out to them in the best possible way.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0015 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    gradient: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
  },
  {
    title: "API Integration",
    description: "We can integrate third-party integrations to maximize the value of your marketing solutions by getting more visibility from various other platforms like Facebook, Google, payment gateway, email and SMS gateways, etc.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    gradient: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
  }
];




const Expertcustomwebsite = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-12 md:mt-16 lg:mt-20  py-16">
      {/* Header Section */}
      <AnimateOnView variants={headingVariant} className="text-center mb-16">
        <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
          Expert custom website development services for your{' '}
          <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
            unique needs
          </span>
        </motion.h2>
        <motion.p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
          Transform your digital presence with our comprehensive web development solutions
        </motion.p>
      </AnimateOnView>

      {/* Services Grid */}
      <AnimateOnView
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto mt-12"
        amount={0.2}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={fadeDown}>
            <div className="group relative rounded-2xl p-0.5 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full">
              <div className={`relative z-10 bg-white rounded-[calc(1rem-2px)] p-8 h-full transition-all duration-300 transform group-hover:scale-[0.99]`}>

                {/* Background hover effects */}
                <div className={`absolute inset-0 ${service.bgColor} opacity-0 transition-opacity duration-300 rounded-[calc(1rem-2px)] group-hover:opacity-10`} />
                <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-5`} />

                {/* Icon */}
                <div className="relative mb-6 inline-block z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-md group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </AnimateOnView>

    </div>
  )
}

export default Expertcustomwebsite;