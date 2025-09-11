"use client";
import React, { useState, useEffect } from "react";

const features = [
  {
    title: "Product Listing",
    description:
      "Detailed pages showcasing products or services, including descriptions, images, pricing, and availability.",
    image: "/assets/e-commerce/Features/1.png",
  },
  {
    title: "Shopping Cart",
    description:
      "A feature that allows customers to add items they wish to purchase, review their selections, and proceed to checkout.",
    image: "/assets/e-commerce/Features/2.jpg",
  },
  {
    title: "Payment Gateway",
    description:
      "Secure systems for processing payments, accepting various methods such as credit/debit cards, digital wallets, and other online payment options.",
    image: "/assets/e-commerce/Features/3.png",
  },
  {
    title: "User Account",
    description:
      "Options for customers to create accounts, manage their profiles, track orders, and save payment information for future purchases.",
    image: "/assets/e-commerce/Features/4.png",
  },
  {
    title: "Search and Filters",
    description:
      "Advanced product search with filters such as category, price range, brand, and ratings to enhance shopping convenience.",
    image: "/assets/e-commerce/Features/5.png",
  },
  {
    title: "Order Management",
    description:
      "Backend systems for managing orders, tracking inventory, and processing returns or exchanges.",
    image: "/assets/e-commerce/Features/6.png",
  },
  {
    title: "Customer Support",
    description:
      "Features such as live chat, contact forms, and FAQs to assist customers with inquiries or issues.",
    image: "/assets/e-commerce/Features/7.png",
  },
  {
    title: "Security",
    description:
      "Measures to protect sensitive information, such as encryption and secure login protocols.",
    image: "/assets/e-commerce/Features/8.png",
  },
  {
    title: "Responsive Design",
    description:
      "Ensures the website is accessible and functional across various devices, including desktops, tablets, and smartphones.",
    image: "/assets/e-commerce/Features/9.png",
  },
  {
    title: "Integration",
    description:
      "The process of connecting two or more applications or systems using APIs (Application Programming Interfaces) to exchange data and perform actions like Payment gateways, WhatsApp and other tools.",
    image: "/assets/e-commerce/Features/10.png",
  },
  {
    title: "Analytics and Reporting",
    description:
      "Tools for monitoring website performance, sales data, and customer behavior to inform business decisions and marketing strategies.",
    image: "/assets/e-commerce/Features/11.png",
  },
];

function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto rotate logic
  useEffect(() => {
    if (!autoPlay) return; // stop if user clicked
    const interval = setInterval(() => {
      setSelectedFeature((prev) => (prev + 1) % features.length);
    }, 2000); // change every 4s

    return () => clearInterval(interval);
  }, [autoPlay]);

  // Split features into left and right columns
  const leftFeatures = features.slice(0, 6);
  const rightFeatures = features.slice(6);

  // Handle click -> stop autoplay
  const handleClick = (index: number) => {
    setSelectedFeature(index);
    setAutoPlay(false); // stop auto rotate after user interaction
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-10 md:mt-16 lg:mt-20 mb-4 md:mb-8 lg:mb-10 xl:mb-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Features of E-Commerce
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[600px]">
          {/* Left Column */}
          <div className="space-y-4">
            {leftFeatures.map((feature, idx) => (
              <button
                key={idx}
                onClick={() => handleClick(idx)}
                className={`w-full p-4 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${selectedFeature === idx
                  ? "bg-gradient-to-r from-cyan-400 to-blue-900 text-white shadow-xl scale-105"
                  : "bg-[#59d7f7] hover:bg-cyan-300 text-gray-800"
                  }`}
              >
                <h3 className="font-semibold text-sm md:text-base">
                  {feature.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-2xl p-8 min-h-[500px] transition-all duration-500"
            onClick={() => setAutoPlay(false)}
          >
            <div className="w-full max-w-md">
              <img
                src={features[selectedFeature].image}
                alt={features[selectedFeature].title}
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg mb-6 transition-all duration-500"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                {features[selectedFeature].title}
              </h2>
              <p className="text-gray-600 text-center leading-relaxed">
                {features[selectedFeature].description}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 ">
            {rightFeatures.map((feature, idx) => {
              const actualIndex = idx + 6;
              return (
                <button
                  key={actualIndex}
                  onClick={() => handleClick(actualIndex)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${selectedFeature === actualIndex
                    ? "bg-gradient-to-r from-cyan-400 to-blue-900 text-white shadow-xl scale-105"
                    : "bg-cyan-200 hover:bg-cyan-300 text-gray-800"
                    }`}
                >
                  <h3 className="font-semibold text-sm md:text-base">
                    {feature.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Features;
