import React from "react";

const Scopesection: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 bg-gray-50  rounded-4xl">
      {/* Heading */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-[2px] w-20 bg-gray-300"></div>
        <h1 className="text-blue-950 text-3xl md:text-4xl font-bold whitespace-nowrap">
          Scope & Limitation
        </h1>
        <div className="h-[2px] w-20 bg-gray-300"></div>
      </div>

      {/* Users */}
      <div className="flex flex-col gap-6">
        <p className="font-medium text-gray-800">There are 3 Primary users of this Platform:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Customers */}
          <div className="flex items-start gap-3 p-4 border border-gray-300 rounded-xl shadow-sm hover:shadow-lg transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyan-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
            </svg>
            <div>
              <h2 className="font-semibold text-gray-900">Customers / Buyers</h2>
              <p className="text-gray-600 text-sm">Search and place an order for food.</p>
            </div>
          </div>

          {/* Restaurant Owners */}
          <div className="flex items-start gap-3 p-4 border border-gray-300 rounded-xl shadow-sm hover:shadow-lg transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyan-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l1-2h16l1 2M4 12h16l1 8H3l1-8z" />
            </svg>
            <div>
              <h2 className="font-semibold text-gray-900">Restaurant Owners / Sellers</h2>
              <p className="text-gray-600 text-sm">Prepare and sell food for customers.</p>
            </div>
          </div>

          {/* Delivery Agents */}
          <div className="flex items-start gap-3 p-4 border border-gray-300 rounded-xl shadow-sm hover:shadow-lg transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyan-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13L17 13M7 13l-4-8m0 0l1.5 6M21 21H7a2 2 0 01-2-2h16a2 2 0 01-2 2z" />
            </svg>
            <div>
              <h2 className="font-semibold text-gray-900">Delivery Agents</h2>
              <p className="text-gray-600 text-sm">Deliver food from the restaurant to the customer's address.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
        <p>
          The solution we propose will consist of a <span className="font-semibold">Buyer (Customer) application</span> for Android and iOS, a <span className="font-semibold">Seller (Restaurant Owner) application</span> for Android, and a <span className="font-semibold">Delivery Agent application</span> for Android.
        </p>

        <p>
          The Delivery application will have a <span className="font-semibold">flip switch</span> allowing delivery agents to operate as (1) independent delivery agents or (2) affiliated only with specific restaurant owners to perform deliveries to customers.
        </p>

        <p>
          There will also be a <span className="font-semibold">Web Backend</span> with an admin dashboard for the Admin and Sub-admins (limited to a maximum of 3) to manage the application and its users.
        </p>
      </div>
    </div>
  );
};

export default Scopesection;
