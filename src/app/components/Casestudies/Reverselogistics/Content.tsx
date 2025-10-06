"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import AnimateOnView from '../../../../../animations/AnimateOnView';
import { fadeDown } from '../../../../../animations/animations';
import CaseStudyModalForm from '../../ModalForms/CaseStudyModalForm'; 

function Content() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const pdfLink = "/assets/CasestudiesPdf/Reverse-Logistics-Management.pdf"; 

    return (
        <div className='px-4 py-6 md:px-10 lg:px-16 xl:px-28 xl:py-10'>
            <div className='flex flex-col gap-8 md:gap-10 lg:gap-12 xl:gap-15'>

                {/* Image */}
                <AnimateOnView variants={fadeDown} className='flex justify-center'>
                    <img
                        src="/assets/Casestudies/Reverse-Logistics.png"
                        alt="Reverse Logistics"
                        className='w-full max-w-xs lg:max-w-base xl:max-w-md rounded-xl'
                    />
                </AnimateOnView>

                {/* Text + Button */}
                <AnimateOnView variants={fadeDown} className='flex flex-col gap-4 md:gap-5 lg:gap-6 text-center'>
                    <div className='flex flex-col gap-2 text-left'>
                        <p className='text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed'>
                            Client has trouble managing parts for their products after services.
                        </p>
                        <p className='text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed'>
                            <span className='font-medium'>Handling Returns: </span>Handling returns efficiently while minimizing costs and disruptions to operations can be challenging.
                        </p>
                        <p className='text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed'>
                            <span className='font-medium'>Inventory Management: </span>This requires effective inventory management practices to track returned parts, update inventory records, and ensure accurate stock levels.
                        </p>
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
