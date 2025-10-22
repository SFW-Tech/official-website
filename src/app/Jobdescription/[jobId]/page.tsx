"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Herosection from "../../components/Careerspage/Herosection";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";
import { useParams } from "next/navigation";
import axios from "axios";

interface Job {
  title: string;
  jobId: string;
  jobType?: string;
  skills?: string[];
  experience?: string;
  location?: string;
  jobdescription?: string;
  rolesAndresponsibilities?: string[] | string;
}

function Page() {
  const [formData, setFormData] = useState({
    First_name: "",
    Last_name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    experience: "",
  });
  const [jobs, setJobs] = useState<Job[]>([]);
  const [resume, setResume] = useState<File | null>(null);
  const [resumeMessage, setResumeMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  const { enqueueSnackbar } = useSnackbar();
  const { jobId } = useParams();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Animation variants
  const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
  const formVariants: Variants = { hidden: { opacity: 0, x: 50, scale: 0.95 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } };
  const successVariants: Variants = { hidden: { opacity: 0, scale: 0.8, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, exit: { opacity: 0, scale: 0.8, y: -20, transition: { duration: 0.3 } } };
  const buttonVariants: Variants = { idle: { scale: 1 }, hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } }, tap: { scale: 0.95 }, loading: { scale: 1, transition: { duration: 0.2 } } };

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
        rolesAndresponsibilities: item.cr276_job_responsibilities || []
      }));

      setJobs(formattedJobs);

      const job = formattedJobs.find((job) => job.jobId === jobId);
      if (job) setSelectedJob(job);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [jobId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleResume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        setResume(null);
        setResumeMessage("");
        setErrors((prev) => ({ ...prev, resume: "File must be 4MB or less" }));
      } else {
        setResume(file);
        setResumeMessage(`Resume uploaded (${file.name})`);
        setErrors((prev) => { const newErrors = { ...prev }; delete newErrors.resume; return newErrors; });
      }
    } else {
      setResume(null);
      setResumeMessage("");
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.First_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.Last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.experience) newErrors.experience = "Select your experience";
    if (!resume) newErrors.resume = "Resume is required";
    else if (resume.size > 4 * 1024 * 1024) newErrors.resume = "File must be < 4MB";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_nw9y07d",
        "template_kizffhh",
        { job_title: selectedJob?.title || "", ...formData },
        "8J-QHGkIceS0qyv5x"
      );

      setSubmitted(true);
      setFormData({ First_name: "", Last_name: "", email: "", phone: "", location: "", message: "", experience: "" });
      setResume(null);
      setResumeMessage("");
      setErrors({});

      enqueueSnackbar("Application submitted successfully", { variant: "success", anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 3000 });
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Failed to send application.", { variant: "error", anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 3000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Left-side skeleton
  const JobSkeleton = () => (
    <div className="rounded-2xl p-5 bg-white shadow-sm animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-3/4"></div>
      <div className="h-6 bg-gray-300 rounded w-1/3"></div>
      <hr className="border-gray-200" />
      <div className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-100 rounded w-full"></div>
        ))}
      </div>
      <div className="h-6 bg-gray-200 rounded w-1/2 mt-4"></div>
      <ul className="space-y-2 mt-2">
        {[...Array(5)].map((_, i) => (
          <li key={i} className="h-3 bg-gray-100 rounded w-5/6"></li>
        ))}
      </ul>
    </div>
  );

  // Right-side skeleton
  // Right-side skeleton
const FormSkeleton: React.FC = () => (
  <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-10 space-y-6 animate-pulse">
    {/* Title */}
    <div className="h-8 sm:h-10 md:h-12 bg-gray-200 rounded w-1/2 mx-auto"></div>

    {/* Name fields */}
    <div className="flex flex-col md:flex-row gap-4 pt-5">
      <div className="h-12 bg-gray-200 rounded w-full md:w-1/2"></div>
      <div className="h-12 bg-gray-200 rounded w-full md:w-1/2"></div>
    </div>

    {/* Email & Phone */}
    <div className="flex flex-col md:flex-row gap-4">
      <div className="h-12 bg-gray-200 rounded w-full md:w-1/2"></div>
      <div className="h-12 bg-gray-200 rounded w-full md:w-1/2"></div>
    </div>

    {/* Location */}
    <div className="h-12 bg-gray-200 rounded w-full"></div>

    {/* Message */}
    <div className="h-28 bg-gray-200 rounded w-full"></div>

    {/* Resume */}
    <div className="h-24 bg-gray-200 rounded w-full flex items-center justify-center"></div>

    {/* Experience */}
    <div className="space-y-2">
      <div className="h-5 bg-gray-200 rounded w-1/3"></div>
      <div className="flex flex-wrap gap-2 mt-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-10 w-28 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>

    {/* Submit button */}
    <div className="h-12 bg-gray-200 rounded w-full mt-4"></div>
  </div>
);


  return (
    <div className="w-full">
      <Herosection />

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 xl:gap-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 my-12" variants={containerVariants} initial="hidden" animate="visible">
        {/* Left Grid */}
        <motion.div className="flex flex-col gap-6 " variants={itemVariants}>
          {loading ? <JobSkeleton /> : selectedJob ? (
            <>
              <motion.h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold">{selectedJob.title}</motion.h1>
              <motion.div className="flex gap-2">
                <motion.h4 className="flex text-xs md:text-sm bg-gray-100 px-3 py-1 rounded-md w-fit font-medium text-gray-700 shadow-sm">{selectedJob.jobId}</motion.h4>
                <motion.h4 className="flex items-center gap-1 md:gap-2 bg-gray-100 px-3 py-1 rounded-md w-fit font-medium text-gray-700 shadow-sm">
                  <img src="/assets/Careers/Jobsectionassets/Jobtype.png" alt="Job Type" className="w-5 h-5" />
                  <span className="text-xs md:text-sm">{selectedJob.jobType}</span>
                </motion.h4>
                <motion.h4 className="flex items-center gap-1 md:gap-2 bg-gray-100 px-3 py-1 rounded-md w-fit font-medium text-gray-700 shadow-sm">
                  <img src="/assets/Careers/Jobsectionassets/Location.png" alt="Location" className="w-4 h-4" />
                  <span className="text-xs md:text-sm">{selectedJob.location}</span>
                </motion.h4>
              </motion.div>
              <motion.p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-lg xl:text-base leading-relaxed">{selectedJob.jobdescription}</motion.p>
              <motion.div className="flex flex-col gap-6">
                <motion.h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold">Roles & Responsibilities</motion.h1>
                <motion.ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-md lg:text-lg xl:text-base leading-relaxed text-gray-600">
                  {Array.isArray(selectedJob.rolesAndresponsibilities)
                    ? selectedJob.rolesAndresponsibilities.map((item, index) => <motion.li key={index} whileHover={{ x: 5, color: "#374151" }} transition={{ duration: 0.2 }}>{item}</motion.li>)
                    : typeof selectedJob.rolesAndresponsibilities === "string"
                      ? selectedJob.rolesAndresponsibilities.split(".").filter(item => item.trim() !== "").map((item, index) => <motion.li key={index} whileHover={{ color: "#374151" }} transition={{ duration: 0.2 }}>{item.trim()}.</motion.li>)
                      : null}
                </motion.ul>
              </motion.div>
            </>
          ) : (
            <motion.div className="flex flex-col items-center justify-center py-20 text-gray-500" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <motion.p className="text-lg font-semibold">No jobs found</motion.p>
              <motion.p className="text-sm text-gray-400">Please check back later for new openings.</motion.p>
            </motion.div>
          )}
        </motion.div>

        {/* Right Grid */}
        <motion.div className="h-full" variants={formVariants}>
          <AnimatePresence mode="wait">
            {loading ? <FormSkeleton /> : submitted ? (
              <motion.div className="flex items-center justify-center min-h-screen bg-white px-4" variants={successVariants} initial="hidden" animate="visible" exit="exit" key="success">
                <motion.div className="bg-white shadow-2xl rounded-2xl p-8 sm:p-12 text-center max-w-md w-full" transition={{ duration: 0.2 }}>
                  <motion.div className="bg-gradient-to-r from-[#3CC2A3] to-[#17B791] rounded-full p-3 mx-auto mb-6 w-16 h-16 flex items-center justify-center" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  </motion.div>
                  <motion.h2 className="text-2xl font-medium text-gray-900 mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.4 }}>Thank you for applying</motion.h2>
                  <motion.p className="text-gray-700" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.4 }}>Our team will review your application and get back to you shortly.</motion.p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-2xl p-6 md:p-8 space-y-6"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                key="form"
                layout
              >
                <motion.h1
                  className="text-2xl font-bold text-gray-800 mb-4 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  APPLICATION
                </motion.h1>

                {/* Name */}
                <motion.div
                  className="flex flex-col md:flex-row gap-4 pt-5"
                  variants={itemVariants}
                >
                  {["First_name", "Last_name"].map((field, index) => (
                    <motion.div
                      className="w-full md:w-1/2"
                      key={field}
                      initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    >
                      <motion.input
                        type="text"
                        name={field}
                        placeholder={`${field.replace("_", " ")} *`}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-200"
                        whileFocus={{ scale: 1.02 }}

                      />
                      <AnimatePresence>
                        {errors[field] && (
                          <motion.p
                            className="text-red-500 text-sm"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {errors[field]}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Email & Phone */}
                <motion.div
                  className="flex flex-col md:flex-row gap-4"
                  variants={itemVariants}
                >
                  {["email", "phone"].map((field, index) => (
                    <motion.div
                      className="w-full md:w-1/2"
                      key={field}
                      initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    >
                      <motion.input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        placeholder={field === "email" ? "Email Address *" : "Phone/Mobile number *"}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-200"
                        whileFocus={{ scale: 1.02 }}

                      />
                      <AnimatePresence>
                        {errors[field] && (
                          <motion.p
                            className="text-red-500 text-sm"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {errors[field]}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <motion.input
                    type="text"
                    name="location"
                    placeholder="Location *"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-200"
                    whileFocus={{ scale: 1.02 }}

                  />
                  <AnimatePresence>
                    {errors.location && (
                      <motion.p
                        className="text-red-500 text-sm"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {errors.location}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <motion.textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 h-28 focus:ring-1 focus:ring-cyan-500 outline-none resize-none transition-all duration-200"
                    whileFocus={{ scale: 1.02 }}

                  />
                </motion.div>

                {/* Resume */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <motion.label
                    className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500 cursor-pointer hover:border-cyan-600 hover:text-cyan-700 transition-all duration-300 block"
                    whileHover={{
                      scale: 1.02,
                      borderColor: "#0891b2",
                      backgroundColor: "#f8fafc"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleResume} />
                    <h2 className="font-semibold">
                      Drop your resume here or{" "}
                      <span className="text-black hover:text-cyan-400 transition-colors duration-200">
                        browse
                      </span>
                    </h2>
                    <h4 className="text-sm">Max file size: 4MB (pdf, doc, docx)</h4>
                    <AnimatePresence>
                      {resumeMessage && (
                        <motion.p
                          className="text-green-600 text-sm mt-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        >
                          {resumeMessage}
                        </motion.p>
                      )}
                      {errors.resume && (
                        <motion.p
                          className="text-red-500 text-sm mt-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        >
                          {errors.resume}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.label>
                </motion.div>

                {/* Experience */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                >
                  <motion.h3
                    className="font-semibold text-gray-800 mb-2"
                    variants={itemVariants}
                  >
                    How much experience do you have?
                  </motion.h3>
                  <motion.div
                    className="space-y-2"
                    variants={containerVariants}
                  >
                    {["0-2 years", "3-5 years", "5-8 years", "8+ years"].map((exp, index) => (
                      <motion.label
                        key={exp}
                        className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        variants={itemVariants}
                        whileHover={{ x: 5, backgroundColor: "#f9fafb" }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 + index * 0.05, duration: 0.3 }}
                      >
                        <motion.input
                          type="radio"
                          name="experience"
                          value={exp}
                          checked={formData.experience === exp}
                          onChange={(e) => handleChange(e as any)}
                          className="accent-cyan-600"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        />
                        <span>{exp}</span>
                      </motion.label>
                    ))}
                  </motion.div>
                  <AnimatePresence>
                    {errors.experience && (
                      <motion.p
                        className="text-red-500 text-sm mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {errors.experience}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Submit */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold px-5 py-3 rounded-2xl shadow-lg cursor-pointer text-sm md:text-base transition-all duration-300 w-full relative overflow-hidden"
                    variants={buttonVariants}
                    initial="idle"
                    whileHover={!isSubmitting ? "hover" : "loading"}
                    whileTap={!isSubmitting ? "tap" : "loading"}
                    animate={isSubmitting ? "loading" : "idle"}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Submitting...
                        </motion.div>
                      ) : (
                        <motion.span
                          key="submit"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Submit
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>


      </motion.div>
    </div>
  );
}

export default Page;
