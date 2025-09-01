"use client"
import React from 'react';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from 'react';


function Calloutsection() {

    const [isOpen, setIsOpen] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const { enqueueSnackbar } = useSnackbar();

    const textref = useRef(null)
    const buttonref = useRef(null)


    const textinview = useInView(textref, { once: true, margin: "-100px" })
    const buttoninview = useInView(buttonref, { once: true, margin: "-100px" })



    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = { name: "", email: "", phone: "", message: "" };

        if (!name.trim()) newErrors.name = "Please enter your name";
        if (!email.trim()) newErrors.email = "Please enter your email";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
        if (!phone.trim()) newErrors.phone = "Please enter your phone number";
        if (!message.trim()) newErrors.message = "Please enter your message";

        setErrors(newErrors);

        if (newErrors.name || newErrors.email || newErrors.phone || newErrors.message) {

            return;
        }

        const templateParams = {
            name,
            email,
            phone,
            message,
        };

        try {
            const response = await emailjs.send(
                "service_nw9y07d",
                "template_4do41qh",
                templateParams,
                "8J-QHGkIceS0qyv5x"
            );

            console.log("SUCCESS!", response.status, response.text);
            setIsOpen(false);

            enqueueSnackbar("Contact Form Submitted successfully", {
                variant: "success",
                anchorOrigin: { vertical: "top", horizontal: "center" },
                autoHideDuration: 3000,
            });


            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setErrors({ name: "", email: "", phone: "", message: "" });
        } catch (err) {
            console.error("FAILED...", err);
            enqueueSnackbar("Failed to send message. Please try again later.", {
                variant: "error",
                anchorOrigin: { vertical: "top", horizontal: "center" },
                autoHideDuration: 3000,
            });
        }
    };

    return (
        <div
            className="w-full h-[80px] sm:h-[135px] md:h-[145px] lg:h-[150px] xl:h-[155px] 
                       bg-cover bg-no-repeat bg-center flex sm:flex-row items-center 
                       justify-between px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 gap-4 sm:gap-0 text-center sm:text-left mt-8 md:mt-0"

            style={{ backgroundImage: "url('/assets/Home/Calloutassets/Callout section.png')" }}
        >
            {/* Left Text */}
            <motion.div className="max-w-xl"
                ref={textref}
                initial={{ opacity: 0, x: -100 }}
                animate={textinview ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-white font-semibold text-xs sm:text-lg md:text-xl lg:text-2xl">
                    Need any expert business & consulting services?
                </h1>
            </motion.div>

            {/* Right Button */}
            <motion.div
                ref={buttonref}
                initial={{ opacity: 0, x: 100 }}
                animate={buttoninview ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >

                <button className="connectbutton" onClick={() => setIsOpen(true)}>

                    <span className="animatebutton"></span>


                    <span className="buttonbg" >
                        Connect with us
                    </span>


                </button>

            </motion.div>

            {/* Modal */}

            <AnimatePresence>

                {isOpen && (


                    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-60 px-2 md:px-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>


                            {/* Header */}
                            <div className="bg-gradient-to-r from-[#16122d] via-[#122044] to-[#221839] p-6 text-center">
                                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                                <p className="text-sm text-white/90 mt-1">
                                    We'd love to hear from you. Fill out the form below.
                                </p>
                            </div>

                            {/* Form */}
                            <form
                                onSubmit={handleSubmit}
                                className="p-6 space-y-5"
                            >
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-purple-100 focus:outline-none`}
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setErrors((prev) => ({ ...prev, name: "" }));
                                        }}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-purple-100 focus:outline-none`}
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setErrors((prev) => ({ ...prev, email: "" }));
                                        }}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-purple-100 focus:outline-none`}
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                            setErrors((prev) => ({ ...prev, phone: "" }));
                                        }}
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-purple-100 focus:outline-none h-28 resize-none`}
                                        placeholder="Write your message..."
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                            setErrors((prev) => ({ ...prev, message: "" }));
                                        }}
                                    />
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>

                                {/* Submit */}
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-orange-600 hover:to-purple-700 transition-all duration-300"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>


        </div>
    );
}

export default Calloutsection;
