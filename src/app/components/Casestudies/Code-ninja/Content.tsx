"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import AnimateOnView from '../../../../../animations/AnimateOnView';
import { fadeDown } from '../../../../../animations/animations';
import CaseStudyModalForm from '../CaseStudyModalForm'; 

function Content() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const pdfLink = "/assets/CasestudiesPdf/Code-Ninja.pdf"; 

    return (
        <div className='px-4 py-6 md:px-10 lg:px-16 xl:px-28 xl:py-10'>
            <div className='flex flex-col gap-8 md:gap-10 lg:gap-12 xl:gap-15'>

                {/* Image */}
                <AnimateOnView variants={fadeDown} className='flex justify-center'>
                    <img
                        src="/assets/Casestudies/Code-Ninja.jpg"
                        alt="Code Ninja"
                        className='w-full max-w-xs lg:max-w-base xl:max-w-md rounded-xl'
                    />
                </AnimateOnView>

                {/* Text + Button */}
                <AnimateOnView variants={fadeDown} className='flex flex-col gap-4 md:gap-5 lg:gap-6 text-center'>
                    <div className='flex flex-col gap-2 text-left'>
                        <p className='text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed'>
                            About the Client :
                        </p>
                        <ul className="list-disc pl-5 space-y-2 break-words">
                            <li className='text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed'>
                                The client is a mid-sized Financial Technology company that provides lending services to customers through an online platform.
                            </li>
                            <li className='text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed'>
                                The client’s mission is to offer borrowers a fast and convenient way to access credit while prioritizing customer service and transparency.
                            </li>
                            <li className='text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed'>
                                Their approach is centred around advanced technology and data analytics to evaluate risk and provide personalized loan terms.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <motion.button
                            className="px-6 py-3 md:px-8 md:py-3 lg:px-9 lg:py-3 xl:px-10 xl:py-4 bg-[#59D7F7] text-white rounded-md font-bold cursor-pointer hover:text-gray-600 hover:bg-cyan-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Download
                        </motion.button>
                    </div>
                </AnimateOnView>
            </div>

            {/* Modal */}
            <CaseStudyModalForm
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                pdfLink={pdfLink}
            />
        </div>
    );
}

export default Content;
