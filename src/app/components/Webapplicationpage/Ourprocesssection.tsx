import React from 'react'

function Ourprocesssection() {
    return (

        <div className="px-4 md:px-8 lg:px-16 xl:px-28 mt-25 grid gap-x-6 gap-y-4 mb-8">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left Content */}
                <div className="flex flex-col justify-evenly">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-3xl text-gray-800">
                        We Organize Our Process
                    </h1>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        We follow a structured and efficient production process to ensure quality,
                        consistency, and timely delivery. From planning and design to development
                        and deployment, every stage is carefully managed with clear communication
                        and agile methodologies, ensuring our clients receive the best outcomes
                        with full transparency.
                    </p>
                </div>

                {/* Right Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Box 1 */}
                    <div className="bg-[#DBEDFF] px-4 py-6 flex flex-col gap-2 items-start rounded-xl">
                        <img
                            src="/assets/Webapplications/Ourprocess/Consult.png"
                            alt=""
                            className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
                        />
                        <div className="flex flex-col gap-1">
                            <h6 className="font-bold text-lg md:text-xl">Consult</h6>
                            <p className="text-sm text-gray-800">
                                We understand your business goals and challenges to provide tailored IT
                                strategies that drive growth and innovation.
                            </p>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-[#FFE9CF] px-4 py-6 flex flex-col gap-2 items-start rounded-xl">
                        <img
                            src="/assets/Webapplications/Ourprocess/Design.png"
                            alt=""
                            className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
                        />
                        <div className="flex flex-col gap-1">
                            <h6 className="font-bold text-lg md:text-xl">Design</h6>
                            <p className="text-sm text-gray-800">
                                Our team crafts user-centric, intuitive, and scalable designs that
                                align with both functionality and aesthetics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Box 1 */}
                <div className="bg-[#F7DFFC] px-4 py-6 flex flex-col gap-2 items-start rounded-xl">
                    <img
                        src="/assets/Webapplications/Ourprocess/Develop.png"
                        alt=""
                        className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
                    />
                    <div className="flex flex-col gap-1">
                        <h6 className="font-bold text-lg md:text-xl">Develop</h6>
                        <p className="text-sm text-gray-800">
                            We build robust, secure, and high-performing applications using the
                            latest technologies and best development practices.
                        </p>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="bg-[#E4F1DD] px-4 py-6 flex flex-col gap-2 items-start rounded-xl">
                    <img
                        src="/assets/Webapplications/Ourprocess/Train.png"
                        alt=""
                        className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
                    />
                    <div className="flex flex-col gap-1">
                        <h6 className="font-bold text-lg md:text-xl">Train</h6>
                        <p className="text-sm text-gray-800">
                            We empower your team with the necessary training and resources to
                            efficiently adopt and manage new systems.
                        </p>
                    </div>
                </div>

                {/* Box 3 */}
                <div className="bg-[#F1D2D3] px-4 py-6 flex flex-col gap-2 items-start rounded-xl">
                    <img
                        src="/assets/Webapplications/Ourprocess/Deploy.png"
                        alt=""
                        className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
                    />
                    <div className="flex flex-col gap-1">
                        <h6 className="font-bold text-lg md:text-xl">Deploy</h6>
                        <p className="text-sm text-gray-800">
                            Our streamlined deployment process ensures smooth transition and
                            integration with minimal downtime or disruption.
                        </p>
                    </div>
                </div>

                {/* Box 4 */}
                <div className="bg-[#E1F7FD] px-4 py-6 flex flex-col gap-2 items-start rounded-xl">
                    <img
                        src="/assets/Webapplications/Ourprocess/Support.png"
                        alt=""
                        className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
                    />
                    <div className="flex flex-col gap-1">
                        <h6 className="font-bold text-lg md:text-xl">Support</h6>
                        <p className="text-sm text-gray-800">
                            Our streamlined deployment process ensures smooth transition and
                            integration with minimal downtime or disruption.
                        </p>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Ourprocesssection