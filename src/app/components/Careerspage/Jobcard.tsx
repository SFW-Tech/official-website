"use client"

import React from 'react'
import { useRouter } from "next/navigation";

interface JobCardProps {
    title: string
    jobId: string
    jobType: string
    skills: string[]
    experience: string
    location: string
    validthrough?: string
}



const Jobcard = ({ title, jobId, jobType, skills, experience, location, validthrough }: JobCardProps) => {
    const router = useRouter()
    return (
        <div className="rounded-2xl shadow-2xl p-4 md:p-5 lg:p-6 bg-white">

            {/* Top section */}
            <div className="flex flex-row justify-between sm:items-center mb-2 gap-2">
                <h1 className="text-base sm:text-lg md:text-xl font-bold">{title}</h1>
                <button className="flex gap-2 items-center justify-center text-xs sm:text-sm font-medium tracking-tight rounded-md text-black bg-[#59D7F7] px-1.5 py-1  sm:px-3 sm:py-1.5 w-fit hover:bg-cyan-400 transition cursor-pointer"
                    onClick={() => router.push(`/Jobdescription/${jobId}`)}
                >
                    Apply Here
                    <div className='p-0.5 sm:p-1 rounded-full bg-black'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 sm:w-3 sm:h-3"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </div>

                </button>
            </div>

            <hr className="mb-4 text-gray-300" />

            {/* Job details */}
            <div className="space-y-3 text-xs sm:text-sm md:text-base">
                <div className="flex flex-wrap gap-2 sm:gap-10">
                    <span className="font-semibold w-20 sm:w-24">Job ID:</span>
                    <span className='text-gray-600'>{jobId}</span>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-10">
                    <span className="font-semibold w-20 sm:w-24">Job type:</span>
                    <span className='text-gray-600'>{jobType}</span>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-10 items-start">
                    <span className="font-semibold w-20 sm:w-24">Skills:</span>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-[#59D7F7] text-gray-700 font-medium px-2 sm:px-3 py-1 rounded text-xs sm:text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-10">
                    <span className="font-semibold w-20 sm:w-24">Experience:</span>
                    <span className='text-gray-600'>{experience}</span>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-10">
                    <span className="font-semibold w-20 sm:w-24">Location:</span>
                    <span className='text-gray-600'>{location}</span>
                </div>


                {validthrough && (
                    <div className="flex flex-wrap gap-2 sm:gap-10">
                        <span className="font-semibold w-20 sm:w-24">Valid:</span>
                        <span className="text-gray-600">
                            {new Date(validthrough).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            })}
                        </span>
                    </div>
                )}


            </div>
        </div>
    )
}

export default Jobcard
