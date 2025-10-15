"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Jobcard from "./Jobcard";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";

interface Job {
  title: string;
  jobId: string;
  jobType: string;
  skills: string[];
  experience: string;
  location: string;
  validthrough?: string;
}

const Jobsection: React.FC = () => {
  const jobref = useRef<HTMLDivElement | null>(null);
  const isalljobsview = useInView(jobref, { once: true });

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const jobsPerPage = 4;

  const jobTypeMap: Record<number, string> = {
    [Number(process.env.NEXT_PUBLIC_JOB_FULLTIME)]: "Full-time",
    [Number(process.env.NEXT_PUBLIC_JOB_PARTTIME)]: "Part-time",
    [Number(process.env.NEXT_PUBLIC_JOB_CONTRACT)]: "Contract",
    [Number(process.env.NEXT_PUBLIC_JOB_INTERNSHIP)]: "Internship",
    [Number(process.env.NEXT_PUBLIC_JOB_REMOTE)]: "Remote",
  };

  const jobLocationMap: Record<number, string> = {
    [Number(process.env.NEXT_PUBLIC_LOCATION_COIMBATORE)]: "Coimbatore",
    [Number(process.env.NEXT_PUBLIC_LOCATION_BENGALURU)]: "Bengaluru",
    [Number(process.env.NEXT_PUBLIC_LOCATION_HYDERABAD)]: "Hyderabad",
    [Number(process.env.NEXT_PUBLIC_LOCATION_HYBRID)]: "Hybrid",
    [Number(process.env.NEXT_PUBLIC_LOCATION_REMOTE)]: "Remote",
  };

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(process.env.NEXT_PUBLIC_ALLJOBS_FETCH_API!);
      const data = res.data.value || [];

      const formattedJobs: Job[] = data.map((item: any) => ({
        title: item.cr276_job_title || "N/A",
        jobId: item.cr276_newcolumn || "N/A",
        jobType: jobTypeMap[item.cr276_job_employmenttype] || "N/A",
        location: jobLocationMap[item.cr276_job_location] || "N/A",
        skills: item.cr276_job_skills?.split(",") || ["Not specified"],
        experience: item.cr276_job_required_experience || "Not mentioned",
        validthrough: item.cr276_job_validthrough || undefined
      }));

      setJobs(formattedJobs);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);



  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <div ref={jobref} className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 mt-8 mb-6 md:mb-16">
      <AnimatePresence mode="wait">
        {isalljobsview && (
          <>
            {loading ? (
              <div className="grid gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-2xl shadow-2xl p-4 md:p-5 lg:p-6 bg-white animate-pulse"
                  >
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
                      <div className="h-5 sm:h-6 md:h-7 bg-gray-200 rounded w-2/3"></div>
                      <div className="h-8 w-28 bg-gray-200 rounded-md"></div>
                    </div>
                    <hr className="mb-4 text-gray-200" />
                    <div className="space-y-3 text-xs sm:text-sm md:text-base">
                      {[...Array(5)].map((_, j) => (
                        <div key={j} className="h-4 bg-gray-200 rounded w-full sm:w-3/4"></div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
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
          </>
        )}
      </AnimatePresence>

      {isalljobsview && !loading && jobs.length > 0 && (
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <nav aria-label="Page navigation">
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 transition"
                >
                  Prev
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-2 leading-tight border transition ${currentPage === i + 1
                      ? "bg-[#59D7F7] text-black border-cyan-400"
                      : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                      }`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
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
};

export default Jobsection;
