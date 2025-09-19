"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimateOnView from "../../../../animations/AnimateOnView";
import {
  fadeDown,
  headingVariant,
  staggerContainer,
} from "../../../../animations/animations";

const industries = [
  {
    title: "Wholesale distribution and Retail",
    img: "/assets/odoo/Ourindustry/1.png",
    desc: `For wholesale distribution, Odoo offers powerful features to manage bulk orders,
    complex inventory, multi-warehouse operations, and supplier relationships.`,
    benefits: [
      "Real-Time Inventory Visibility",
      "Efficient Inventory and Supply Chain Management",
      "Streamlined Sales Processes",
      "Enhanced Customer Experience",
      "Accurate Financial Management",
      "Scalability for Growth",
      "Data-Driven Decision Making",
      "Cost Efficiency",
      "Easy to Customize and Adapt",
    ],
  },
  {
    title: "Manufacturing",
    img: "/assets/odoo/Ourindustry/2.png",
    desc: `Odoo Manufacturing (MRP) handles planning, scheduling, inventory control, and
    quality management, ideal for manufacturers of all sizes.`,
    benefits: [
      "Integrated Operations Across Channels",
      "Efficient Inventory and Supply Chain Management",
      "Streamlined Sales Processes",
      "Enhanced Customer Experience",
      "Accurate Financial Management",
      "Scalability for Growth",
      "Data-Driven Decision Making",
      "Cost Efficiency",
      "Easy to Customize and Adapt",
    ],
  },
  {
    title: "Warehouse",
    img: "/assets/odoo/Ourindustry/3.png",
    desc: `Odoo’s Warehouse Management supports logistics, inventory, and stock movements,
    optimizing storage space and streamlining operations.`,
    benefits: [
      "Real-Time Inventory Visibility",
      "Enhanced Efficiency with Automation",
      "Improved Picking, Packing, and Shipping",
      "Barcode and Serial Number Tracking",
      "Multi-Warehouse and Multi-Location Management",
      "Integrated Shipping and Carrier Management",
      "Cost Reduction through Optimized Inventory",
      "Accurate Demand Forecasting",
      "Scalable and Flexible",
      "Data-Driven Decision Making",
    ],
  },
  {
    title: "CRM",
    img: "/assets/odoo/Ourindustry/4.png",
    desc: `Odoo CRM manages the entire sales pipeline, from lead generation to closing deals,
helping businesses maximize sales and customer retention.`,
    benefits: [
      "Centralized Lead and Opportunity Management",
      "Improved Sales Productivity",
      "Enhanced Customer Insights",
      "Data-Driven Decision Making",
      "Seamless Integration with Other Odoo Modules",
      "Efficient Communication and Collaboration",
      "Customizable Sales Pipeline",
      "Enhanced Customer Retention",
      "Scalable and Adaptable",
      "Cost-Effective Solution",
    ],
  },
  {
    title: "Automobiles",
    img: "/assets/odoo/Ourindustry/5.png",
    desc: `Odoo for automotive helps dealerships, rental services, and maintenance centers
streamline operations across inventory, sales, and service.`,
    benefits: [
      "Centralized Inventory and Spare Parts Management",
      "Efficient Sales and CRM",
      "Optimized Fleet and Rental Management",
      "Streamlined Service and Maintenance",
      "Improved Purchase and Supplier Management",
      "Comprehensive Financial Tracking",
      "Enhanced Customer Experience",
      "Scalability for Growth",
      "Data-Driven Decision Making",
      "Reduced Operational Costs",
    ],
  },
  {
    title: "Construction",
    img: "/assets/odoo/Ourindustry/3.png",
    desc: `Odoo for construction helps with project planning, budgeting, resource allocation,
and site management with integrated ERP workflows.`,
    benefits: [
      "Streamlined Project and Task Management",
      "Improved Budgeting and Cost Control",
      "Optimized Inventory and Procurement",
      "Efficient Workforce Allocation",
      "Enhanced Quality and Safety Compliance",
      "Centralized Document Management",
      "Real-Time Project Tracking",
      "Scalability and Customization",
      "Enhanced Collaboration",
      "Client Satisfaction and Transparency",
    ],
  },
];

function OurIndustryservice() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-8 mb-10">
      <div className="text-center mb-10">
        <AnimateOnView variants={headingVariant}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Our Industry Services
          </h2>
        </AnimateOnView>
      </div>

      {/* Desktop Sticky Scroll */}
      <div className="hidden lg:block relative h-[600vh]">
        {industries.map((industry, idx) => (
          <section
            key={idx}
            className="sticky top-0 h-screen flex justify-center items-center px-4 py-8"
          >
            <div>
              <div className="bg-gray-50 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-6 p-18 w-full max-w-7xl shadow-xl">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {industry.title}
                  </h1>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {industry.desc}
                  </p>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-cyan-600">
                      Key Benefits of Odoo
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm md:text-base">
                      {industry.benefits.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src={industry.img}
                    alt={industry.title}
                    className="w-full max-w-md lg:max-w-full h-auto md:h-[500px] rounded-3xl shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Accordion for mobile */}
      <div className="lg:hidden space-y-4">
        {industries.map((industry, idx) => (
          <AnimateOnView key={idx} variants={fadeDown}>
            <div className="bg-gray-100 rounded-3xl shadow-xl overflow-hidden">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full text-left p-4 flex justify-between items-center font-semibold text-lg"
              >
                {industry.title}
                <span>{activeIndex === idx ? "-" : "+"}</span>
              </button>
              {activeIndex === idx && (
                <div className="p-4 border-t border-gray-300">
                  <p className="text-gray-700 mb-4">{industry.desc}</p>
                  <img
                    src={industry.img}
                    alt={industry.title}
                    className="w-full h-auto rounded-2xl mb-4 object-cover"
                  />
                  <h3 className="font-medium mb-2">Key Benefits of Odoo</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {industry.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </AnimateOnView>
        ))}
      </div>
    </div>
  );
}

export default OurIndustryservice;
