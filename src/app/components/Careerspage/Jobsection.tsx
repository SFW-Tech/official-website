"use client";
import React, { useState, useRef } from "react";
import Jobcard from "./Jobcard";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";

function Jobsection() {
  const jobref = useRef(null);
  const isalljobsview = useInView(jobref, { once: true }); 

  const jobs = [
    {
      title: "Frontend Developer",
      jobId: "JD1023",
      jobType: "Full-time",
      skills: ["React", "Tailwind", "TypeScript"],
      experience: "2+ Years",
      location: "Chennai",
    },
    {
      title: "Backend Developer",
      jobId: "JD1024",
      jobType: "Part-time",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "Python",
        "Nextjs",
        "Nest Js",
        "SQL",
        "NoSql",
      ],
      experience: "3+ Years",
      location: "Bangalore",
    },
    {
      title: "UI/UX Designer",
      jobId: "JD1025",
      jobType: "Contract",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      experience: "1+ Year",
      location: "Remote",
    },
    {
      title: "Full Stack Developer",
      jobId: "JD1026",
      jobType: "Full-time",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      experience: "4+ Years",
      location: "Hyderabad",
    },
    {
      title: "DevOps Engineer",
      jobId: "JD1027",
      jobType: "Full-time",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      experience: "3+ Years",
      location: "Pune",
    },
    {
      title: "Mobile App Developer",
      jobId: "JD1028",
      jobType: "Full-time",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      experience: "2+ Years",
      location: "Delhi",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <div
      ref={jobref}
      className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 mt-8 mb-6 md:mb-16"
    >
      {/* Job Cards with AnimatePresence */}
      <AnimatePresence mode="wait">
        {isalljobsview && ( 
          <motion.div
            key={currentPage} 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-6"
          >
            {currentJobs.map((job, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Jobcard {...job} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination */}
      {isalljobsview && ( 
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <nav aria-label="Page navigation">
            <ul className="inline-flex -space-x-px text-sm">
              {/* Prev Button */}
              <li>
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 transition"
                >
                  Prev
                </button>
              </li>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-2 leading-tight border transition ${
                      currentPage === i + 1
                        ? "bg-cyan-600 text-white border-cyan-600"
                        : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}

              {/* Next Button */}
              <li>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 transition"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </div>
  );
}

export default Jobsection;
