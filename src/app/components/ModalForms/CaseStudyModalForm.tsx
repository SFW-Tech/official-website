"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

interface ContactModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    pdfLink: string;
}


const CONNECT_WITH_US_API = process.env.NEXT_PUBLIC_CONNECT_WITH_US_API

function CaseStudyModalForm({ isOpen, setIsOpen, pdfLink }: ContactModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({ name: "", email: "" });

    // Prevent background scroll
    useEffect(() => {
        if (isOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isOpen]);

    const handleClose = () => {
        if (isSubmitting) return;
        setIsOpen(false);
        setTimeout(() => {
            setName("");
            setEmail("");
            setErrors({ name: "", email: "" });
            setIsSubmitted(false);
            setIsSubmitting(false);
        }, 300);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const newErrors = { name: "", email: "" };
        if (!name.trim()) newErrors.name = "Please enter your name";
        if (!email.trim()) newErrors.email = "Please enter your email";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";

        setErrors(newErrors);

        if (newErrors.name || newErrors.email) {
            setIsSubmitting(false);
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitted(true);
            setIsSubmitting(false);
        }, 800);

        // APi Call

        const payload = {
            data: {

                cr276_contact_person: name,
                cr276_email: email,


            }
        };


        try {
            const res = await axios.post(CONNECT_WITH_US_API!, payload);

            if (res.status === 200 || res.status === 201) {
                setIsSubmitted(true);
                enqueueSnackbar("Form submitted successfully!", {
                    variant: "success",
                    anchorOrigin: { vertical: "top", horizontal: "center" },
                    autoHideDuration: 3000,
                });
                setTimeout(() => handleClose(), 5000);
            } else {
                throw new Error("API error");
            }
        } catch (err) {
            console.error("FAILED...", err);
            setIsSubmitting(false);
            enqueueSnackbar("Failed to send message. Please try again later.", {
                variant: "error",
                anchorOrigin: { vertical: "top", horizontal: "center" },
                autoHideDuration: 3000,
            });
        }
    };

    const backdropVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.25 } },
    };

    const modalVariants: Variants = {
        hidden: { opacity: 0, scale: 0.85, y: -50 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 25 } },
        exit: { opacity: 0, scale: 0.9, y: -30, transition: { duration: 0.25 } },
    };

    const inputVariants: Variants = {
        focus: { scale: 1.02, transition: { duration: 0.2 } },
        blur: { scale: 1, transition: { duration: 0.2 } },
    };

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4"
                    onClick={(e) => e.target === e.currentTarget && handleClose()}
                >
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-white rounded-2xl shadow-2xl w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:max-w-2xl relative max-h-[90vh] flex flex-col overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            disabled={isSubmitting}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer z-10 disabled:opacity-50"
                        >
                            ✕
                        </button>

                        {/* Header */}
                        <div className="flex flex-col gap-4 bg-white p-6 text-center flex-shrink-0 rounded-t-2xl"
                        >
                            <div className="flex  justify-center">
                                <img src="/assets/Logo1.png" alt="Logo" className="h-10 w-auto" />
                            </div>



                            <p className="text-xs text-gray-400">

                                Fill out your name and email to access the download.
                            </p>
                        </div>

                        {/* Form / Success */}
                        <div className="flex-1 flex flex-col min-h-0">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        onSubmit={handleSubmit}
                                        className="flex-1 flex flex-col min-h-0"
                                    >
                                        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-2 space-y-4  form-scrollbar">
                                            {/* Name */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Name <span className="text-red-500">*</span>
                                                </label>
                                                <motion.input
                                                    variants={inputVariants}
                                                    whileFocus="focus"
                                                    animate="blur"
                                                    type="text"
                                                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"} focus:ring-1 focus:ring-cyan-100 focus:outline-none transition-colors duration-200`}
                                                    placeholder="Enter your name"
                                                    value={name}
                                                    onChange={(e) => {
                                                        setName(e.target.value);
                                                        setErrors((prev) => ({ ...prev, name: "" }));
                                                    }}
                                                    disabled={isSubmitting}
                                                />
                                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email <span className="text-red-500">*</span>
                                                </label>
                                                <motion.input
                                                    variants={inputVariants}
                                                    whileFocus="focus"
                                                    animate="blur"
                                                    type="email"
                                                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"} focus:ring-1 focus:ring-cyan-100 focus:outline-none transition-colors duration-200`}
                                                    placeholder="Enter your email"
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                        setErrors((prev) => ({ ...prev, email: "" }));
                                                    }}
                                                    disabled={isSubmitting}
                                                />
                                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <motion.div
                                            className="flex-shrink-0 p-6 pt-4 bg-white border-t border-gray-100 rounded-b-2xl"
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, delay: 0.2 }}
                                        >
                                            <div className="flex justify-end">
                                                <motion.button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className={`cursor-pointer px-8 py-3 bg-[#59D7F7] text-white rounded-lg font-medium relative min-w-[140px] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed`}
                                                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                                                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <svg
                                                                className="animate-spin h-5 w-5 text-white"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <circle
                                                                    className="opacity-25"
                                                                    cx="12"
                                                                    cy="12"
                                                                    r="10"
                                                                    stroke="currentColor"
                                                                    strokeWidth="4"
                                                                ></circle>
                                                                <path
                                                                    className="opacity-75"
                                                                    fill="currentColor"
                                                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                                ></path>
                                                            </svg>
                                                            <span>Submitting</span>
                                                        </>
                                                    ) : (
                                                        <span>Submit</span>
                                                    )}
                                                </motion.button>

                                            </div>
                                        </motion.div>

                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex-1 p-6 flex flex-col items-center justify-center text-center"
                                    >
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up-icon lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Form Submitted!</h3>
                                        <p className="text-gray-600 mb-4">
                                            Thank you! Your download is ready.
                                        </p>
                                        <motion.a
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.97 }}
                                            href={pdfLink}
                                            download
                                            className="px-4 py-2 bg-[#59D7F7] text-white rounded-md font-medium hover:bg-cyan-400"
                                        >
                                            Click here to download PDF
                                        </motion.a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default CaseStudyModalForm;
