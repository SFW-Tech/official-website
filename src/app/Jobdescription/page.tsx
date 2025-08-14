"use client";

import React, { useState } from "react";
import Herosection from "../components/Careerspage/Herosection";
import emailjs from "emailjs-com";
import { useSnackbar } from 'notistack';

function Page() {

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    experience: "",
  });

  const [resume, setResume] = useState<File | null>(null);

  const [resumeMessage, setResumeMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [submitted, setSubmitted] = useState(false);

  const { enqueueSnackbar } = useSnackbar();




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
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.resume;
          return newErrors;
        });
      }
    } else {
      setResume(null);
      setResumeMessage("");
    }
  };




  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
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

    try {
      await emailjs.send(
        "service_nw9y07d",
        "template_kizffhh",
        { job_title: "Frontend Developer", ...formData },
        "8J-QHGkIceS0qyv5x"
      );

      setSubmitted(true);
      setFormData({ first_name: "", last_name: "", email: "", phone: "", location: "", message: "", experience: "" });
      setResume(null);
      setResumeMessage("");
      setErrors({});

      enqueueSnackbar("Application submitted successfully", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        autoHideDuration: 3000,
      });

    } catch (err) {
      console.log(err);
      enqueueSnackbar("Failed to send application.", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <div className="w-full">
      <Herosection />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 xl:gap-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 my-12">
        {/* Left Grid */}
        <div className="flex flex-col gap-6 justify-evenly">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold">
              Frontend Developer
            </h1>
            <div className="flex gap-2">
              <h4 className="flex text-sm bg-gray-100 px-3 py-1 rounded-md w-fit font-medium text-gray-700 shadow-sm">
                JD101
              </h4>
            </div>
            <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-lg xl:text-base leading-relaxed">
              We are looking for a passionate and skilled Frontend Developer to join our growing team at Softworks. The ideal candidate will have a strong understanding of modern frontend technologies and frameworks, with a keen eye for design and user experience. You will be responsible for translating UI/UX designs into responsive, interactive web applications. Working closely with designers, backend developers, and product managers, you will help create seamless and engaging digital experiences that meet business goals and user needs.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold">
              Roles & Responsibilities
            </h1>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-md lg:text-lg xl:text-base leading-relaxed text-gray-600">
              <li>Develop responsive user interfaces using HTML, CSS, and JavaScript frameworks.</li>
              <li>Collaborate with UI/UX designers to bring mockups and wireframes to life.</li>
              <li>Optimize web pages for performance, speed, and SEO.</li>
              <li>Integrate frontend components with RESTful APIs.</li>
            </ul>
          </div>
        </div>

        {/* Right Grid - Form */}
        <div className="h-full">
          {submitted ? (
            <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
              <div className="bg-white shadow-2xl rounded-2xl p-8 sm:p-12 text-center max-w-md w-full">
                <div className="bg-gradient-to-r from-[#3CC2A3] to-[#17B791] rounded-full p-3 mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">Thank you for applying</h2>
                <p className="text-gray-700">Our team will review your application and get back to you shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-6 md:p-8 space-y-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">APPLICATION</h1>

              {/* Name */}
              <div className="flex flex-col md:flex-row gap-4 pt-5">
                {["first_name", "last_name"].map((field) => (
                  <div className="w-full md:w-1/2" key={field}>
                    <input
                      type="text"
                      name={field}
                      placeholder={`${field.replace("_", " ")} *`}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none"
                    />
                    {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                  </div>
                ))}
              </div>

              {/* Email & Phone */}
              <div className="flex flex-col md:flex-row gap-4">
                {["email", "phone"].map((field) => (
                  <div className="w-full md:w-1/2" key={field}>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={field === "email" ? "Email Address *" : "Phone/Mobile number *"}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none"
                    />
                    {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                  </div>
                ))}
              </div>

              {/* Location */}
              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="Location *"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-600 outline-none"
                />
                {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 h-28 focus:ring-2 focus:ring-cyan-600 outline-none"
              />

              {/* Resume */}
              <div className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500 cursor-pointer hover:border-cyan-600 hover:text-cyan-700 transition">
                <h2 className="font-semibold">
                  Drop your resume here or{" "}
                  <label className="text-black cursor-pointer">
                    browse
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleResume} />
                  </label>
                </h2>
                <h4 className="text-sm">Max file size: 4MB (pdf, doc, docx)</h4>
                {resumeMessage && <p className="text-green-600 text-sm mt-2">{resumeMessage}</p>}
                {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
              </div>

              {/* Experience */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How much experience do you have?</h3>
                <div className="space-y-2">
                  {["0-2 years", "3-5 years", "5-8 years", "8+ years"].map((exp) => (
                    <label key={exp} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="experience"
                        value={exp}
                        checked={formData.experience === exp}
                        onChange={(e) => handleChange(e as any)}
                        className="accent-cyan-600"
                      />
                      <span>{exp}</span>
                    </label>
                  ))}
                </div>
                {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold px-5 py-3 rounded-2xl shadow-lg cursor-pointer text-sm md:text-base transition-all duration-300"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
