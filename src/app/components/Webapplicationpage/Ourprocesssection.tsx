"use client";
import React from "react";
import Image from "next/image";

const steps = [
    {
        id: 1,
        title: "Consult",
        desc: "We understand your business goals and challenges to provide tailored IT strategies that drive growth and innovation.",
        color: "bg-blue-500",
        img: "/assets/Webapplications/Ourprocess/process1.png",
    },
    {
        id: 2,
        title: "Design",
        desc: "Our team crafts user-centric, intuitive, and scalable designs that align with both functionality and aesthetics.",
        color: "bg-yellow-500",
        img: "/assets/Webapplications/Ourprocess/process2.png",
    },
    {
        id: 3,
        title: "Develop",
        desc: "We build robust, secure, and high-performing applications using the latest technologies and best development practices.",
        color: "bg-purple-500",
        img: "/assets/Webapplications/Ourprocess/process3.png",
    },
    {
        id: 4,
        title: "Train",
        desc: "We empower your team with the necessary training and resources to efficiently adopt and manage new systems.",
        color: "bg-green-500",
        img: "/assets/Webapplications/Ourprocess/process4.png",
    },
    {
        id: 5,
        title: "Deploy",
        desc: "Our streamlined deployment process ensures smooth transition and integration with minimal downtime or disruption.",
        color: "bg-red-500",
        img: "/assets/Webapplications/Ourprocess/process5.png",
    },
    {
        id: 6,
        title: "Support",
        desc: "Our streamlined deployment process ensures smooth transition and integration with minimal downtime or disruption.",
        color: "bg-cyan-500",
        img: "/assets/Webapplications/Ourprocess/process6.png",
    },
];

function Ourprocesssection() {
    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-18 mb-16">
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    We Organize Our Process
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                    We follow a structured and efficient production process to ensure
                    quality, consistency, and timely delivery. From planning and design to
                    development and deployment, every stage is carefully managed with
                    clear communication and agile methodologies, ensuring our clients
                    receive the best outcomes with full transparency.
                </p>
            </div>

            {/* Wrapper */}
            <div className="relative mt-20">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center relative z-10 gap-12">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="flex flex-col items-center text-center max-w-xs mx-auto relative lg:flex-1"
                        >
                            {/* Circle Image */}
                            <div className="w-32 h-32 rounded-full flex items-center justify-center bg-white z-10">
                                <Image
                                    src={step.img}
                                    alt={step.title}
                                    width={130}
                                    height={130}
                                    className="object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="mt-6">
                                <div
                                    className={`inline-flex items-center px-2 py-1 mt-2 rounded-md text-white text-sm font-bold ${step.color}`}
                                >
                                    {step.id} {step.title}
                                </div>
                                <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
                            </div>

                            {/* Connecting line (except last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-[65%]">
                                    <div className="relative xl:w-[110px] lg:w-[90px] border-t-2 border-dashed border-gray-300">
                                        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 text-gray-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            )}


                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Ourprocesssection;
