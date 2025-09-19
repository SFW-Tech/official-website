"use client";
import React from "react";
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown, headingVariant } from "../../../../animations/animations";

function Applicationtypessection() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 mt-8 grid gap-8">

      {/* 1st Section - Custom Enterprise */}
      <div className="grid grid-cols-1 lg:flex lg:gap-x-6 gap-y-6">
        {/* Left - Image */}
        <AnimateOnView variants={fadeDown} className="flex justify-center">
          <img
            src="/assets/Webapplications/Applicationtypesassets/1.png"
            alt="Custom Application for Enterprise"
            className="w-full max-w-[600px] h-auto rounded-lg"
          />
        </AnimateOnView>

        {/* Right - Text */}
        <div className="flex flex-col justify-center gap-4 lg:w-1/2">
          <AnimateOnView variants={headingVariant}>
            <h3 className="text-gray-800 font-bold text-xl sm:text-2xl hover:text-[#137c9c]">
              Custom Application for Enterprise
            </h3>
          </AnimateOnView>
          <AnimateOnView variants={fadeDown}>
            <p className="text-gray-600 text-sm md:text-base">
              Web applications have become an integral part of businesses in today's
              world for everything from offering customer support to promoting your brand
              and Product online. Custom Web apps development is the designing of software
              applications for users in an organization to fulfill specific business needs.
              We will provide you with end-to-end web development services and our
              professional guidance on creating scalable, secure, and user-friendly web apps
              for your business needs.
            </p>
          </AnimateOnView>
        </div>
      </div>

      {/* 2nd Section - SAAS Product */}
      <div className="grid grid-cols-1 lg:flex lg:gap-x-6 gap-y-6">
        {/* Left - Text */}
        <div className="flex flex-col justify-center gap-4 lg:w-1/2 order-2 lg:order-1">
          <AnimateOnView variants={headingVariant}>
            <h3 className="text-gray-800 font-bold text-xl sm:text-2xl hover:text-[#129944]">
              Custom SAAS Product Development
            </h3>
          </AnimateOnView>
          <AnimateOnView variants={fadeDown}>
            <p className="text-gray-600 text-sm md:text-base">
              SoftWorks provide innovative software solutions to help you and your digital
              business space. We have been one of the leading Product development and
              Technology services companies in India since 2019, Serving clients across the
              globe. We design, develop, launch and enhance your products with our passionate
              and Technology experts. We also help you accelerate the efficiency and
              performance of your organization with our skilled Technology services.
            </p>
          </AnimateOnView>
        </div>

        {/* Right - Image */}
        <AnimateOnView variants={fadeDown} className="flex justify-center order-1 lg:order-2">
          <img
            src="/assets/Webapplications/Applicationtypesassets/2.png"
            alt="Custom SAAS Product Development"
            className="w-full max-w-[600px] h-auto rounded-lg"
          />
        </AnimateOnView>
      </div>

      {/* 3rd Section - Progressive Web App */}
      <div className="grid grid-cols-1 lg:flex lg:gap-x-6 gap-y-6">
        {/* Left - Image */}
        <AnimateOnView variants={fadeDown} className="flex justify-center">
          <img
            src="/assets/Webapplications/Applicationtypesassets/3.png"
            alt="Progressive Web Application"
            className="w-full max-w-[600px] h-auto rounded-lg"
          />
        </AnimateOnView>

        {/* Right - Text */}
        <div className="flex flex-col justify-center gap-4 lg:w-1/2">
          <AnimateOnView variants={headingVariant}>
            <h3 className="text-gray-800 font-bold text-xl sm:text-2xl hover:text-[#6568D4]">
              Progressive Web Application
            </h3>
          </AnimateOnView>
          <AnimateOnView variants={fadeDown}>
            <p className="text-gray-600 text-sm md:text-base">
              Progressive web apps is use for service workers, manifests, and other web
              platform features in combination with progressive enhancement to give users
              an experience on par with native apps. PWAs provide a number of advantages
              to users including being installable, progressively enhanced, responsively
              designed, re-engageable, linkable, discoverable, network independent, and
              secure.
            </p>
          </AnimateOnView>
        </div>
      </div>

    </div>
  );
}

export default Applicationtypessection;
