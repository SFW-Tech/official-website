"use client"
import React from "react"

function Whychooseus() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
      title: "Best Coding Practice",
      description:
        "Our eCommerce website developers are trained to write managed code with version control, integration and reuse and follow efficient and best coding practices."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h6l4 4v8a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Custom Business Logic",
      description:
        "Our Ecommerce development services provide infinite possibilities to enhance your ROI by reflecting your business logic in our ecommerce platform."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3m-6 0c0-1.657 1.343-3 3-3m-6 8a9 9 0 1118 0H6z" />
        </svg>
      ),
      title: "Branding & Ownership",
      description:
"The development of our ecommerce websites is highly customized as per your branding guidelines and provides authority to own the IP of the application."    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M9 17a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      ),
      title: "SEO Optimized",
      description:
"Our eCommerce website developers ensure that the code is designed based on eCommerce SEO guidelines guidelines, schema-rich, dynamic on-page SEO optimization to provide better visibility on search engines and higher traffic"    },
  ]

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-12 md:mt-16 lg:mt-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose <span className="text-cyan-600">Softworks</span> for Custom E-commerce Development?
        </h2>

      </div>

      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 md:gap-4 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 bg-white"
          >
            <div className="flex items-center gap-3">
              {feature.icon}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                {feature.title}
              </h3>
            </div>
            <hr className="border border-gray-200" />
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Whychooseus
