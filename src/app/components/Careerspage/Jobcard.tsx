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
}



const Jobcard = ({ title, jobId, jobType, skills, experience, location }: JobCardProps) => {
    const router = useRouter()
    return (
        <div className="rounded-2xl shadow-2xl p-4 md:p-5 lg:p-6 bg-white">

            {/* Top section */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
                <h1 className="text-base sm:text-lg md:text-xl font-bold">{title}</h1>
                <button className="flex gap-2 items-center justify-center text-xs sm:text-sm tracking-tight rounded-md text-white bg-cyan-600 px-3 py-1.5 w-fit hover:bg-cyan-700 transition cursor-pointer"
                    onClick={() => router.push("/Jobdescription")}
                >
                    Apply Here
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            <hr className="mb-4 text-gray-300" />

            {/* Job details */}
            <div className="space-y-3 text-xs sm:text-sm md:text-base">
                <div className="flex flex-wrap gap-2 sm:gap-4">
                    <span className="font-semibold w-20 sm:w-24">Job ID:</span>
                    <span className='text-gray-600'>{jobId}</span>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4">
                    <span className="font-semibold w-20 sm:w-24">Job type:</span>
                    <span className='text-gray-600'>{jobType}</span>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4 items-start">
                    <span className="font-semibold w-20 sm:w-24">Skills:</span>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-cyan-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4">
                    <span className="font-semibold w-20 sm:w-24">Experience:</span>
                    <span className='text-gray-600'>{experience}</span>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4">
                    <span className="font-semibold w-20 sm:w-24">Location:</span>
                    <span className='text-gray-600'>{location}</span>
                </div>
            </div>
        </div>
    )
}

export default Jobcard
