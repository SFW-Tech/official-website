"use client";
import React from "react";

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
    title: "Intergration",
    description:
      "The process of connecting two or more applications or systems using APIs (Application Programming Interfaces) to exchange data and perform actions like Payment gatways, Whatsapp and other tools.",
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
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-10 md:mt-16 lg:mt-20">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Features of E-Commerce
        </h2>
      </div>

      {/* Scrollytelling Container */}
      <div className="relative h-[1100vh]">
        {features.map((feature, idx) => (
          <section
            key={idx}
            className="sticky top-0 h-screen flex justify-center items-center"
          >
            <div className="bg-gray-100 rounded-4xl grid grid-cols-1 md:grid-cols-2 gap-6 p-8 w-full max-w-7xl shadow-xl">
              {/* Text */}
              <div className="flex flex-col justify-center gap-6">
                <h1 className="text-3xl md:text-4xl font-bold">
                  {feature.title}
                </h1>
                <p className="text-base md:text-lg">{feature.description}</p>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-4xl h-[300px] md:h-[400px] w-full object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Features;
