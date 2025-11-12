"use client"
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import AnimateOnView from '../../../../animations/AnimateOnView';
import { fadeDown, headingVariant, staggerContainer } from '../../../../animations/animations';
import { motion } from 'framer-motion';
import axios from 'axios';

function Contactussection() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const { enqueueSnackbar } = useSnackbar();

    const CONNECT_WITH_US_API = process.env.NEXT_PUBLIC_CONNECT_WITH_US_API

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

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

        // APi Call
        const payload = {
            data: {
                cr276_contact_person: name,
                cr276_email: email,
                cr276_mobile: phone,
                cr276_message: message,
            }
        };

        try {
            setLoading(true);
            const res = await axios.post(CONNECT_WITH_US_API!, payload);

            if (res.status === 200 || res.status === 201) {
                enqueueSnackbar("Form submitted successfully!", {
                    variant: "success",
                    anchorOrigin: { vertical: "top", horizontal: "center" },
                    autoHideDuration: 3000,
                });


                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
                setErrors({ name: "", email: "", phone: "", message: "" });

            } else {
                throw new Error("API error");
            }
        } catch (err) {
            console.error("FAILED...", err);
            enqueueSnackbar("Failed to send message. Please try again later.", {
                variant: "error",
                anchorOrigin: { vertical: "top", horizontal: "center" },
                autoHideDuration: 3000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-full mt-15 mb-4'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 xl:gap-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28'>

                {/* Left Side */}
                <div className='flex flex-col gap-10 lg:gap-12'>

                    {/* Top */}
                    <div className='flex-col gap-4 flex leading-relaxed'>
                        <AnimateOnView variants={headingVariant}>
                            <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>Contact Us</h1>
                        </AnimateOnView>
                        <AnimateOnView variants={fadeDown}>
                            <p className='text-gray-600 text-base md:text-md lg:text-lg '>
                                Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
                            </p>
                        </AnimateOnView>
                    </div>

                    <div className='flex-col'>
                        <AnimateOnView variants={staggerContainer} className='flex flex-col gap-6'>

                            {/* Address */}
                            <motion.div variants={fadeDown} className='flex gap-4 md:gap-6 items-center'>
                                <div className='p-4 md:p-5 rounded-xl border border-gray-200 flex-shrink-0' >
                                    <img
                                        src="assets/Contactus/Contactussectionassets/location.png"
                                        alt="location"
                                        className='h-8 w-8 object-contain'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-gray-900 font-medium'>Our Address</h3>
                                    <p className='text-gray-600 text-base md:text-md lg:text-lg'>
                                        7/2A, Shreesha Building, First Floor, Central Studio Road, Dhanalakshmi Puram South, Singanallur, Coimbatore, TamilNadu, 641005.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Mail */}
                            <motion.div variants={fadeDown} className='flex gap-4 md:gap-6 items-center'>
                                <div className='p-4 md:p-5 rounded-xl border border-gray-200 flex-shrink-0'>
                                    <img
                                        src="assets/Contactus/Contactussectionassets/mail.png"
                                        alt="mail"
                                        className='h-8 w-8 object-contain'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-gray-900 font-medium'>Our Mailbox</h3>
                                    <p className='text-gray-600 text-base md:text-md lg:text-lg'>
                                        Email:{" "}
                                        <a
                                            href="mailto:info@sfwtechnologies.com"
                                            
                                        >
                                            info@sfwtechnologies.com
                                        </a>
                                    </p>
                                </div>
                            </motion.div>

                            {/* Sales */}
                            <motion.div variants={fadeDown} className='flex gap-4 md:gap-6 items-center'>
                                <div className='p-4 md:p-5 rounded-xl border border-gray-200 flex-shrink-0'>
                                    <img
                                        src="assets/Contactus/Contactussectionassets/sales.png"
                                        alt="sales"
                                        className='h-8 w-8 object-contain'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-gray-900 font-medium'>Sales</h3>
                                    <p className='text-gray-600 text-base md:text-md lg:text-lg'>
                                        Mobile / WhatsApp: +91 98941 13103 | 99943 17168
                                    </p>
                                    <p className='text-gray-600 text-base md:text-md lg:text-lg'>
                                        Email: <a href="mailto:sales@sfwtechnologies.com">sales@sfwtechnologies.com</a>
                                    </p>
                                </div>
                            </motion.div>


                            {/* Career */}
                            <motion.div variants={fadeDown} className='flex gap-4 md:gap-6 items-center'>
                                <div className='p-4 md:p-5 rounded-xl border border-gray-200 flex-shrink-0'>
                                    <img
                                        src="assets/Contactus/Contactussectionassets/career.png"
                                        alt="career"
                                        className='h-8 w-8 object-contain'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-gray-900 font-medium'>Career</h3>
                                    <p className='text-gray-600 text-base md:text-md lg:text-lg'>Mobile: +91 73977 20330</p>
                                </div>
                            </motion.div>

                        </AnimateOnView>
                    </div>
                </div>

                {/* Right Side */}
                <div className='h-full'>
                    <AnimateOnView variants={staggerContainer}>
                        <form onSubmit={handleSubmit} className="rounded-2xl h-full w-full bg-violet-50">

                            <AnimateOnView variants={headingVariant}>
                                <h2 className="pt-8 flex justify-center text-2xl md:text-3xl font-semibold text-gray-800">
                                    Ready to Get Started?
                                </h2>
                            </AnimateOnView>
                            <AnimateOnView variants={fadeDown}>
                                <p className="flex justify-center pt-2 text-gray-800 text-sm md:text-base px-4 text-center">
                                    Your email address will not be published. Required fields are marked *
                                </p>
                            </AnimateOnView>

                            <motion.div variants={fadeDown} className="flex-col flex gap-5 md:gap-6 px-6 md:px-10 lg:px-12 xl:px-13 py-5">
                                {/* Name */}
                                <div>
                                    <input
                                        type="text"
                                        className="bg-white rounded-md p-4 focus:outline-none focus:ring focus:ring-gray-400 w-full"
                                        placeholder="Name *"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setErrors(prev => ({ ...prev, name: "" }));
                                        }}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                {/* Email */}
                                <motion.div variants={fadeDown}>
                                    <input
                                        type="email"
                                        className="bg-white rounded-md p-4 focus:outline-none focus:ring focus:ring-gray-400 w-full"
                                        placeholder="Email Address *"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setErrors(prev => ({ ...prev, email: "" }));
                                        }}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </motion.div>

                                {/* Phone */}
                                <motion.div variants={fadeDown}>
                                    <input
                                        type="text"
                                        className="bg-white rounded-md p-4 focus:outline-none focus:ring focus:ring-gray-400 w-full"
                                        placeholder="Phone/Mobile number *"
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                            setErrors(prev => ({ ...prev, phone: "" }));
                                        }}
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </motion.div>

                                {/* Message */}
                                <motion.div variants={fadeDown}>
                                    <textarea
                                        className="bg-white rounded-md p-4 h-32 focus:outline-none focus:ring focus:ring-gray-400 w-full"
                                        placeholder="Please describe your requirement *"
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                            setErrors(prev => ({ ...prev, message: "" }));
                                        }}
                                    />
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </motion.div>

                                {/* Submit */}
                                <motion.div variants={fadeDown} className="flex justify-end py-3">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 lg:px-6 lg:py-3 rounded-2xl shadow-lg cursor-pointer text-sm md:text-base transition-all duration-300 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                                    >
                                        {loading ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                    className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                <span>Submitting...</span>
                                            </>
                                        ) : (
                                            "Submit"
                                        )}
                                    </button>
                                </motion.div>
                            </motion.div>
                        </form>
                    </AnimateOnView>
                </div>
            </div>
        </div>
    )
}

export default Contactussection
