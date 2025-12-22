"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useSnackbar } from "notistack";
import axios from "axios";

interface ContactModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CONNECT_WITH_US_API = process.env.NEXT_PUBLIC_CONNECT_WITH_US_API

function ContactModal({ isOpen, setIsOpen }: ContactModalProps) {
    const { enqueueSnackbar } = useSnackbar();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [services, setServices] = useState("");
    const [message, setMessage] = useState("");


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        services: "",
        message: "",
    });

    // Prevent background scroll when modal is open & fix page shake
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

    // Reset states when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setIsSubmitting(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        if (isSubmitting) return; // Prevent closing while submitting

        setIsOpen(false);
        // Reset form after close animation completes
        setTimeout(() => {
            setName("");
            setEmail("");
            setPhone("");
            setServices("");
            setMessage("");
            setErrors({ name: "", email: "", phone: "", services: "", message: "" });
            setIsSubmitted(false);
            setIsSubmitting(false);
        }, 300);
    };

    const handleSubmit = async (e: React.FormEvent) => {


        e.preventDefault();
        setIsSubmitting(true);

        const newErrors = { name: "", email: "", phone: "", services: "", message: "" };

        if (!name.trim()) newErrors.name = "Please enter your name";
        if (!email.trim()) newErrors.email = "Please enter your email";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";

        if (!phone.trim()) {
            newErrors.phone = "Please enter your phone number";
        } else if (!/^\d{10,}$/.test(phone)) {
            newErrors.phone = "Phone number must be at least 10 digits";
        }

        if (!services.trim()) newErrors.services = "Please select a service";

        if (!message.trim()) newErrors.message = "Please enter your message";

        setErrors(newErrors);

        if (newErrors.name || newErrors.email || newErrors.phone || newErrors.services || newErrors.message) {
            setIsSubmitting(false);
            return;
        }


        // APi Call

        const payload = {
            data: {

                cr276_contact_person: name,
                cr276_email: email,
                cr276_mobile: phone,
                cr276_services: services,
                cr276_message: message,

            }
        };


        try {
            const res = await axios.post(CONNECT_WITH_US_API!, payload);

            if (res.status === 200 || res.status === 201) {
                setIsSubmitted(true);
                setIsSubmitting(false);
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




    // Animation variants
    const backdropVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.25, ease: "easeIn" },
        },
    };

    const modalVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.85,
            y: -50,
            transition: { duration: 0.2 },
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                type: "spring",
                stiffness: 300,
                damping: 25,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: -30,
            transition: {
                duration: 0.25,
                ease: "easeIn",
            },
        },
    };

    const formVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut",
            },
        },
        submitting: {
            opacity: 0.7,
            scale: 0.98,
            transition: { duration: 0.3 },
        },
        submitted: {
            opacity: 0,
            scale: 0.95,
            y: -10,
            transition: { duration: 0.4 },
        },
    };

    const successVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 25,
            },
        },
    };

    const inputVariants: Variants = {
        focus: {
            scale: 1.02,
            transition: { duration: 0.2, ease: "easeOut" },
        },
        blur: {
            scale: 1,
            transition: { duration: 0.2, ease: "easeOut" },
        },
    };

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4 text-left"
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
                        <motion.button
                            onClick={handleClose}
                            disabled={isSubmitting}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </motion.button>

                        {/* Header - Fixed */}
                        <motion.div
                            className="flex flex-col gap-4 bg-white p-6 text-center flex-shrink-0 rounded-t-2xl"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <div className="flex justify-center">
                                <img src="/assets/Logo1.png" alt="Logo" className="h-10 w-auto" />
                            </div>

                            <p className="text-xs text-gray-400">
                                Thank you for your interest in our services! Please take a few minutes to fill out this short form so we can
                                understand your needs better. Once completed, we will reach out to your schedule to discuss further.
                            </p>
                        </motion.div>

                        {/* Content Container - Flexible */}
                        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        variants={formVariants}
                                        initial="hidden"
                                        animate={isSubmitting ? "submitting" : "visible"}
                                        exit="submitted"
                                        onSubmit={handleSubmit}
                                        className="flex-1 flex flex-col min-h-0 overflow-hidden"
                                    >
                                        {/* Form Fields - Scrollable */}
                                        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-2 form-scrollbar">
                                            <div className="space-y-4">
                                                {/* Name */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.3 }}
                                                >
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
                                                    <AnimatePresence>
                                                        {errors.name && (
                                                            <motion.p
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: "auto" }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                className="text-red-500 text-sm mt-1"
                                                            >
                                                                {errors.name}
                                                            </motion.p>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>

                                                {/* Email */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.4 }}
                                                >
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
                                                    <AnimatePresence>
                                                        {errors.email && (
                                                            <motion.p
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: "auto" }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                className="text-red-500 text-sm mt-1"
                                                            >
                                                                {errors.email}
                                                            </motion.p>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>

                                                {/* Phone */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.5 }}
                                                >
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Phone <span className="text-red-500">*</span>
                                                    </label>
                                                    <motion.input
                                                        variants={inputVariants}
                                                        whileFocus="focus"
                                                        animate="blur"
                                                        type="text"
                                                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-300"} focus:ring-1 focus:ring-cyan-100 focus:outline-none transition-colors duration-200`}
                                                        placeholder="Enter your phone number"
                                                        value={phone}
                                                        onChange={(e) => {
                                                            setPhone(e.target.value);
                                                            setErrors((prev) => ({ ...prev, phone: "" }));
                                                        }}
                                                        disabled={isSubmitting}
                                                    />
                                                    <AnimatePresence>
                                                        {errors.phone && (
                                                            <motion.p
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: "auto" }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                className="text-red-500 text-sm mt-1"
                                                            >
                                                                {errors.phone}
                                                            </motion.p>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>

                                                {/* Services (Fixed dropdown with proper responsive styling) */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.55 }}
                                                    className="relative"
                                                >
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Services <span className="text-red-500">*</span>
                                                    </label>
                                                    <motion.select

                                                        variants={inputVariants}
                                                        whileFocus="focus"
                                                        animate="blur"
                                                        className={`
                                                            w-full px-3 py-3 rounded-lg border 
                                                            ${errors.services ? "border-red-500" : "border-gray-300"} 
                                                            focus:ring-1 focus:ring-cyan-100 focus:outline-none 
                                                            transition-colors duration-200
                                                            text-sm sm:text-base
                                                            bg-white
                                                            appearance-none
                                                            cursor-pointer
                                                            max-w-full
                                                            overflow-hidden
                                                            text-ellipsis
                                                        `}
                                                        style={{
                                                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                                                            backgroundPosition: 'right 0.5rem center',
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundSize: '1.5em 1.5em',
                                                            paddingRight: '2.5rem'
                                                        }}
                                                        value={services}
                                                        onChange={(e) => {
                                                            setServices(e.target.value);
                                                            setErrors((prev) => ({ ...prev, services: "" }));
                                                        }}
                                                        disabled={isSubmitting}
                                                    >
                                                        <option value="" className="text-gray-500">-- Select a Service --</option>

                                                       
                                                        <option value="enterprise-application" className="font-normal text-gray-700 py-2">Enterprise/Custom App Development</option>
                                                        <option value="odoo-services" className="font-normal text-gray-700 py-2">Odoo Services</option>
                                                        <option value="website-development" className="font-normal text-gray-700 py-2">Website Development</option>
                                                        {/*<option value="ecommerce-website" className="font-normal text-gray-700 py-2">Ecommerce</option> */}
                                                        {/* <option value="service-now" className="font-normal text-gray-700 py-2">Service Now</option> */}
                                                        <option value="SAP" className="font-normal text-gray-700 py-2">SAP</option>
                                                        <option value="Artificial-Intelligence" className="font-normal text-gray-700 py-2">Artificial Intelligence</option>
                                                        <option value="staff-augmentation" className="font-normal text-gray-700 py-2">Staff Augmentation</option>
                                                    </motion.select>
                                                    <AnimatePresence>
                                                        {errors.services && (
                                                            <motion.p
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: "auto" }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                className="text-red-500 text-sm mt-1"
                                                            >
                                                                {errors.services}
                                                            </motion.p>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>

                                                {/* Message */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.6 }}
                                                >
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Message <span className="text-red-500">*</span>
                                                    </label>
                                                    <motion.textarea
                                                        variants={inputVariants}
                                                        whileFocus="focus"
                                                        animate="blur"
                                                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"} focus:ring-1 focus:ring-cyan-100 focus:outline-none h-20 resize-none transition-colors duration-200`}
                                                        placeholder="Write your message..."
                                                        value={message}
                                                        onChange={(e) => {
                                                            setMessage(e.target.value);
                                                            setErrors((prev) => ({ ...prev, message: "" }));
                                                        }}
                                                        disabled={isSubmitting}
                                                    />
                                                    <AnimatePresence>
                                                        {errors.message && (
                                                            <motion.p
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: "auto" }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                className="text-red-500 text-sm mt-1"
                                                            >
                                                                {errors.message}
                                                            </motion.p>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Submit Button - Fixed at bottom */}
                                        <motion.div
                                            className="flex-shrink-0 p-6 pt-4 bg-white border-t border-gray-100 rounded-b-2xl"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.7 }}
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
                                        variants={successVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="flex-1 p-6 flex flex-col items-center justify-center text-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                duration: 0.6,
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20,
                                                delay: 0.2,
                                            }}
                                            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4"
                                        >
                                            <motion.svg
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 0.8, delay: 0.5 }}
                                                className="w-10 h-10 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </motion.svg>
                                        </motion.div>
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.6 }}
                                            className="text-xl font-bold text-gray-800 mb-2"
                                        >
                                            Message Sent!
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.7 }}
                                            className="text-gray-600"
                                        >
                                            Thank you for reaching out. We'll get back to you soon!
                                        </motion.p>
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

export default ContactModal;