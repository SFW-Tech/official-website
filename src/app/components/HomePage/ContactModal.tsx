"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useSnackbar } from "notistack";
import emailjs from "emailjs-com";

interface ContactModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContactModal({ isOpen, setIsOpen }: ContactModalProps) {
    const { enqueueSnackbar } = useSnackbar();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
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
            setMessage("");
            setErrors({ name: "", email: "", phone: "", message: "" });
            setIsSubmitted(false);
            setIsSubmitting(false);
        }, 300);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const newErrors = { name: "", email: "", phone: "", message: "" };
        if (!name.trim()) newErrors.name = "Please enter your name";
        if (!email.trim()) newErrors.email = "Please enter your email";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
        if (!phone.trim()) {
            newErrors.phone = "Please enter your phone number";
        } else if (!/^\d{10,}$/.test(phone)) {
            newErrors.phone = "Phone number must be at least 10 digits";
        }
        if (!message.trim()) newErrors.message = "Please enter your message";
        setErrors(newErrors);

        if (newErrors.name || newErrors.email || newErrors.phone || newErrors.message) {
            setIsSubmitting(false);
            return;
        }

        const templateParams = { name, email, phone, message };

        try {
            await emailjs.send(
                "service_nw9y07d",
                "template_4do41qh",
                templateParams,
                "8J-QHGkIceS0qyv5x"
            );

            setIsSubmitted(true);

            enqueueSnackbar("Contact Form Submitted successfully", {
                variant: "success",
                anchorOrigin: { vertical: "top", horizontal: "center" },
                autoHideDuration: 3000,
            });

            // Auto close after success animation
            setTimeout(() => {
                handleClose();
            }, 3000);

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
            transition: { duration: 0.3, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.25, ease: "easeIn" }
        }
    };

    const modalVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.85,
            y: -50,
            transition: { duration: 0.2 }
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
                damping: 25
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: -30,
            transition: {
                duration: 0.25,
                ease: "easeIn"
            }
        }
    };

    const formVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut"
            }
        },
        submitting: {
            opacity: 0.7,
            scale: 0.98,
            transition: { duration: 0.3 }
        },
        submitted: {
            opacity: 0,
            scale: 0.95,
            y: -10,
            transition: { duration: 0.4 }
        }
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
                damping: 25
            }
        }
    };

    const inputVariants: Variants = {
        focus: {
            scale: 1.02,
            transition: { duration: 0.2, ease: "easeOut" }
        },
        blur: {
            scale: 1,
            transition: { duration: 0.2, ease: "easeOut" }
        }
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
                        className="bg-white rounded-2xl shadow-2xl w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] relative max-h-[90vh] flex flex-col"
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
                            className="bg-gradient-to-r from-[#221C41] via-[#0D1C3C] to-[#42306A] p-6 text-center flex-shrink-0 rounded-t-2xl"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                            <p className="text-sm text-white/90 mt-1">
                                We'd love to hear from you. Fill out the form below.
                            </p>
                        </motion.div>

                        {/* Content Container - Flexible */}
                        <div className="flex-1 flex flex-col min-h-0">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        variants={formVariants}
                                        initial="hidden"
                                        animate={isSubmitting ? "submitting" : "visible"}
                                        exit="submitted"
                                        onSubmit={handleSubmit}
                                        className="flex-1 flex flex-col min-h-0"
                                    >
                                        {/* Form Fields - Scrollable */}
                                        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-2">
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
                                                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"
                                                            } focus:ring-2 focus:ring-purple-100 focus:outline-none transition-colors duration-200`}
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
                                                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"
                                                            } focus:ring-2 focus:ring-purple-100 focus:outline-none transition-colors duration-200`}
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
                                                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-300"
                                                            } focus:ring-2 focus:ring-purple-100 focus:outline-none transition-colors duration-200`}
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
                                                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"
                                                            } focus:ring-2 focus:ring-purple-100 focus:outline-none h-24 resize-none transition-colors duration-200`}
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
                                                    className="px-8 py-3 bg-gradient-to-r from-[#221C41] via-[#0D1C3C] to-[#42306A] text-white rounded-lg font-medium relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px] cursor-pointer"
                                                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                                                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {isSubmitting && (
                                                        <motion.div
                                                            initial={{ x: "-100%" }}
                                                            animate={{ x: "100%" }}
                                                            transition={{
                                                                duration: 1.5,
                                                                repeat: Infinity,
                                                                ease: "linear"
                                                            }}
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                        />
                                                    )}
                                                    <span className="relative z-10">
                                                        {isSubmitting ? "Submitting..." : "Submit"}
                                                    </span>
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
                                                delay: 0.2
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
                                                <motion.path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
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