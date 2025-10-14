"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Jobcard from "./Jobcard";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";

// ✅ Define Job type for TypeScript
interface Job {
  title: string;
  jobId: string;
  jobType: string;
  skills: string[];
  experience: string;
  location: string;
}

const Jobsection: React.FC = () => {
  const jobref = useRef<HTMLDivElement | null>(null);
  const isalljobsview = useInView(jobref, { once: true });

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const jobsPerPage = 4;

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://azure-proxy-production.up.railway.app/api/proxy/dynamics?endPoint=cr276_sfjobdetailses"
      );

      const data = res.data.value || [];

      const formattedJobs: Job[] = data.map((item: any) => ({
        title: item.cr276_job_title || "N/A",
        jobId: item.cr276_newcolumn || "N/A",
        jobType: item.cr276_job_employmenttype,
        skills: item.cr276_job_skills
          ? item.cr276_job_skills.split(",")
          : ["Not specified"],
        experience: item.cr276_job_required_experience || "Not mentioned",
        location: item.cr276_job_location
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

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // ✅ Spinner animation variant
  const spinnerVariants: Variants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div
      ref={jobref}
      className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 mt-8 mb-6 md:mb-16"
    >
      <AnimatePresence mode="wait">
        {isalljobsview && (
          <>
            {/* ✅ Show spinner while loading */}
            {loading ? (
              <div className="flex flex-col items-center justify-center h-48">
                <motion.div
                  variants={spinnerVariants}
                  animate="animate"
                  className="w-10 h-10 border-4 border-cyan-600 border-t-transparent rounded-full"
                ></motion.div>
                <p className="mt-3 text-gray-500">Loading jobs...</p>
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

      {/* Pagination */}
      {isalljobsview && !loading && jobs.length > 0 && (
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
                    className={`px-3 py-2 leading-tight border transition ${currentPage === i + 1
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
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
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
