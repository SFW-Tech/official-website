import React from 'react'

function Applicationtypessection() {
    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 mt-8 grid gap-8 mb-10">

            {/* 1st Section */}
            <div className="grid grid-cols-1 lg:flex lg:gap-6">
                {/* Left - Image */}
                <div className="flex justify-center ">
                    <img
                        src="/assets/Mobileapplications/Applicationtypesassets/android.png"
                        alt=""
                        className="w-full max-w-[600px] h-auto rounded-lg"
                    />
                </div>

                {/* Right - Text */}
                <div className="flex flex-col justify-center gap-4 lg:w-1/2">
                    <h3 className="text-gray-800 font-bold text-xl sm:text-2xl">
                        Android Native App
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">
                        With SoftWorks the native mobile app development, the app is created and optimized for a specific platform. As a result, the app demonstrates an extremely high level of performance. Native apps are very fast and responsive because they are built for that specific platform and are compiled using platforms core programming language and APIs. As a result, the app is much more efficient. The device stores the app allowing the software to leverage the device’s processing speed. As users navigate through a native mobile app, the contents and visual elements are already stored on their phone which means load times are quick, SoftWorks build more advanced and user friendly apps helps to optimize your business venture.
                    </p>
                </div>
            </div>

            {/* 2nd Section */}
            <div className="grid grid-cols-1 lg:flex lg:gap-6">
                {/* Left - Text */}
                <div className="flex flex-col justify-center gap-4 lg:w-1/2 order-2 lg:order-1">
                    <h3 className="text-gray-800 font-bold text-xl sm:text-2xl">
                        IOS Native App
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">
                        SoftWorks builds native mobile applications for iOS  have special operating system-specific features. Guidelines by Apple and Google recommend to use platform-standard navigation controls whenever possible: page controls, tab bars, segmented controls, table views, collection views, and split views. Users are familiar with how these controls typically work on each platform, so if you use the standard controls, your users will intuitively know how to get around your app. We focus on the main differences between interaction design patterns on iOS and Android to clarify why apps look different on iOS.Our Developers watch closely the activity of the app and analysis the functionality of the app, to find the user experience and the interface objective obtained.
                    </p>
                </div>

                {/* Right - Image */}
                <div className="flex justify-center order-1 lg:order-2">
                    <img
                        src="/assets/Mobileapplications/Applicationtypesassets/ios.png"
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
                        src="/assets/Mobileapplications/Applicationtypesassets/hybrid.png"
                        alt="Progressive Web Application"
                        className="w-full max-w-[600px] h-auto rounded-lg"
                    />
                </div>

                {/* Right - Text */}
                <div className="flex flex-col justify-center gap-4 lg:w-1/2">
                    <h3 className="text-gray-800 font-bold text-xl sm:text-2xl">
                        Hybrid App
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">
                        A (hybrid app) is a software application that combines elements of both native apps and web applications. Hybrid apps are essentially web apps that have been put in a native app shell. Once they are downloaded from an app store and installed locally, the shell is able to connect to whatever capabilities the mobile platform provides through a browser that’s embedded in the app. The browser and its plug-ins run on the back end and are invisible to the end user.
                        <br />
                        Hybrid apps are popular because they allow developers to write code for a mobile app once and still accommodate multiple platforms. Because hybrid apps add an extra layer between the source code and the target platform, SoftWorks develops the app to user-center and progressive while users find it easy and the developers feels it’s efficiency.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Applicationtypessection
