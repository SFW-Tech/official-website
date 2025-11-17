"use client";
import React from "react";
import { useRouter } from "next/navigation";
import AnimateOnView from "../../../../animations/AnimateOnView"
import { fadeDown, staggerContainer } from "../../../../animations/animations"

function Content() {
  const router = useRouter();

  return (
    <AnimateOnView
      variants={staggerContainer}
      
      className="w-full py-16 px-4 md:px-12 lg:px-20 xl:px-28 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Title */}
      <AnimateOnView variants={fadeDown} className="flex justify-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Our SAP Practices
        </h2>
      </AnimateOnView>

      {/* SAP Implementation + Benefits */}
      <AnimateOnView
        variants={fadeDown}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-stretch"
      >
        {/* Left Column - SAP Implementation */}
        <div className="h-full bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                SAP Implementation
              </h2>
            </div>
          </div>

          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            End-to-end SAP implementation services designed to transform your
            business operations and drive digital excellence.
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              Key Features
            </h4>
            <div className="space-y-3">
              {[
                "SAP B1",
                "SAP R/3 / ECC",
                "SAP S/4 HANA",
                "SAP Fiori",
                "SAP Analytics Cloud",
                "SAP ABAP Enhancements",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Benefits */}
        <div className="h-full bg-blue-100 rounded-2xl shadow-xl p-8 md:p-10 text-gray-800 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Benefits You'll Experience
          </h2>

          <div className="space-y-6 mb-10">
            {[
              "Streamlined business processes",
              "Improved operational efficiency",
              "Better decision-making capabilities",
              "Reduced operational costs",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                <span className="text-base md:text-lg font-medium leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-blue-400 backdrop-blur-sm rounded-xl p-6 mb-6">
            <p className="text-white text-base md:text-lg leading-relaxed mb-6">
              Contact us today for a free consultation and discover how we can
              transform your business.
            </p>
            <button
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </AnimateOnView>

      {/* Expertise Section */}
      <AnimateOnView variants={fadeDown} className="mt-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Expertise in Industries
          </h2>
        </div>

        {/* Industries Grid */}
        <AnimateOnView
          variants={fadeDown}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {[
            {
              title: "Manufacturing",
              desc: "Production planning, inventory management, quality control",
              icon: (
                <path d="M12 16h.01M16 16h.01M3 19a2 2 0 002 2h14a2 2 0 002-2V8.5a.5.5 0 00-.769-.422l-4.462 2.844A.5.5 0 0115 10.5v-2a.5.5 0 00-.769-.422L9.77 10.922A.5.5 0 019 10.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2zM8 16h.01" />
              ),
            },
            {
              title: "Finance",
              desc: "Financial reporting, compliance, risk management, audit trails",
              icon: (
                <>
                  <path d="M3.85 8.62a4 4 0 014.78-4.77 4 4 0 016.74 0 4 4 0 014.78 4.78 4 4 0 010 6.74 4 4 0 01-4.77 4.78 4 4 0 01-6.75 0 4 4 0 01-4.78-4.77 4 4 0 010-6.76Z" />
                  <path d="M8 8h8M8 12h8m5 5-5-1h1a4 4 0 000-8" />
                </>
              ),
            },
            {
              title: "Retail",
              desc: "Supply chain optimization, customer management, POS integration",
              icon: (
                <>
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57l1.65-7.43H5.12" />
                </>
              ),
            },
            {
              title: "Real Estate and Construction",
              desc: "Property management, lease tracking, financial reporting",
              icon: (
                <>
                  <path d="M10 12h4M10 8h4M14 21v-3a2 2 0 00-4 0v3M6 10H4a2 2 0 00-2 2v7a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-2M6 21V5a2 2 0 012-2h8a2 2 0 012 2v16" />
                </>
              ),
            },
            {
              title: "Logistics",
              desc: "Fleet management, route optimization, warehouse management",
              icon: (
                <>
                  <path d="M12 12H5a2 2 0 00-2 2v5" />
                  <circle cx="13" cy="19" r="2" />
                  <circle cx="5" cy="19" r="2" />
                  <path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" />
                </>
              ),
            },
            {
              title: "Healthcare",
              desc: "Patient management, compliance, billing and revenue cycle",
              icon: (
                <>
                  <path d="M2 9.5a5.5 5.5 0 019.591-3.676.56.56 0 00.818 0A5.49 5.49 0 0122 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 01-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                  <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                </>
              ),
            },
            {
              title: "Textiles",
              desc: "Inventory control, production planning, fabric sourcing, supply chain tracking",
              icon: (
                <path d="M20.38 3.46 16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
              ),
            },
            {
              title: "Aerospace & Defence",
              desc: "Project lifecycle management, compliance, defense logistics, quality assurance",
              icon: (
                <>
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z" />
                  <path d="m14.5 9.5-5 5m0-5 5 5" />
                </>
              ),
            },
            {
              title: "Food and Beverages",
              desc: "Recipe management, quality assurance, traceability, production scheduling",
              icon: (
                <>
                  <path d="m16 2-2.3 2.3a3 3 0 000 4.2l1.8 1.8a3 3 0 004.2 0L22 8" />
                  <path d="M15 15 3.3 3.3a4.2 4.2 0 000 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
                  <path d="m2.1 21.8 6.4-6.3M19 5l-7 7" />
                </>
              ),
            },
          ].map((industry, index) => (
            <AnimateOnView
              key={index}
              variants={fadeDown}
              className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-gray-600 group-hover:text-black transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {industry.icon}
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black text-center mb-4">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed">
                {industry.desc}
              </p>
            </AnimateOnView>
          ))}
        </AnimateOnView>
      </AnimateOnView>
    </AnimateOnView>
  );
}

export default Content;
