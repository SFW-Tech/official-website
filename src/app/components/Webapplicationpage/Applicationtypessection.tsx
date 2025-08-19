import React from 'react'

function Applicationtypessection() {
    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 mt-8 grid gap-8">

            {/* 1st Section */}
            <div className="grid grid-cols-1 lg:flex lg:gap-6">
                {/* Left - Image */}
                <div className="flex justify-center ">
                    <img
                        src="/assets/Webapplications/Applicationtypesassets/1.png"
                        alt=""
                        className="w-full max-w-[600px] h-auto rounded-lg"
                    />
                </div>

                {/* Right - Text */}
                <div className="flex flex-col justify-center gap-4 lg:w-1/2">
                    <h3 className="text-gray-800 font-bold text-xl sm:text-2xl">
                        Custom Application for Enterprise
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Web applications have become an integral part of businesses in today’s
                        world for everything from offering customer support to promoting your brand
                        and Product online. Custom Web apps development is the designing of software
                        applications for users in an organization to fulfill specific business needs.
                        We will provide you with end-to-end web development services and our
                        professional guidance on creating scalable, secure, and user-friendly web apps
                        for your business needs.
                    </p>
                </div>
            </div>

            {/* 2nd Section */}
            <div className="grid grid-cols-1 lg:flex lg:gap-6">
                {/* Left - Text */}
                <div className="flex flex-col justify-center gap-4 lg:w-1/2 order-2 lg:order-1">
                    <h3 className="text-gray-800 font-bold text-xl sm:text-2xl">
                        Custom SAAS Product Development
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">
                        SoftWorks provide innovative software solutions to help you and your digital
                        business space. We have been one of the leading Product development and
                        Technology services companies in India since 2019, Serving clients across the
                        globe. We design, develop, launch and enhance your products with our passionate
                        and Technology experts. We also help you accelerate the efficiency and
                        performance of your organization with our skilled Technology services.
                    </p>
                </div>

                {/* Right - Image */}
                <div className="flex justify-center order-1 lg:order-2">
                    <img
                        src="/assets/Webapplications/Applicationtypesassets/2.png"
                        alt=""
                        className="w-full max-w-[600px] h-auto rounded-lg"
                    />
                </div>
            </div>

            {/* 3rd Section */}
            <div className="grid grid-cols-1 lg:flex lg:gap-6">
                {/* Left - Image */}
                <div className="flex justify-center ">
                    <img
                        src="/assets/Webapplications/Applicationtypesassets/3.png"
                        alt="Progressive Web Application"
                        className="w-full max-w-[600px] h-auto rounded-lg"
                    />
                </div>

                {/* Right - Text */}
                <div className="flex flex-col justify-center gap-4 lg:w-1/2">
                    <h3 className="text-gray-800 font-bold text-xl sm:text-2xl">
                        Progressive Web Application
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Progressive web apps is use for service workers, manifests, and other web
                        platform features in combination with progressive enhancement to give users
                        an experience on par with native apps. PWAs provide a number of advantages
                        to users including being installable, progressively enhanced, responsively
                        designed, re-engageable, linkable, discoverable, network independent, and
                        secure.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Applicationtypessection
