"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from "framer-motion";


function Footer() {

    const [isOpen, setIsOpen] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const { enqueueSnackbar } = useSnackbar();


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
            className='w-full bg-blue-950 bg-cover bg-center'
            style={{ backgroundImage: "url('/assets/Home/footerassets/footerbg.png')" }}
        >
            {/* Top Section */}
            <div className='px-4 sm:px-6 md:px-12 lg:px-20 xl:px-46 py-5'>


                {/* Flex Section */}
                <div className='flex flex-col sm:flex-row justify-between text-white items-start sm:items-center gap-4'>
                    <h3 className='text-lg sm:text-xl text-center sm:text-left'>
                        Need any expert business & Consulting services?
                    </h3>

                    <button className="connectbutton" onClick={() => setIsOpen(true)}>

                        <span className="animatebutton"></span>


                        <span className="buttonbg">
                            Connect with us
                        </span>


                    </button>

                </div>




                {/* Grid ------------ */}

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-10 text-sm'>



                    {/* Quick Links */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold'>Quick Links</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <Link href="/services">Services</Link>
                        <Link href="/careers">Career</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>

                    {/* Services */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold'>Our Services</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <p>Custom Application</p>
                        <p>Mobile Application</p>
                        <p>Web Application</p>
                        <p>Odoo</p>
                        <p>Staff Augmentation</p>
                        <p>Ecommerce Applications</p>
                        <p>ServiceNow</p>
                        <p>UX/UI Designing</p>
                    </div>

                    {/* Contact */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold'>Contact</h2>
                        <hr className="border-gray-400 opacity-40" />
                        <p>Sales: +91 98941 13103 / +91 9994317168</p>
                        <p>Career: +91 73977 20330</p>
                        <p>Mailbox: info@sfwtechnologies.com</p>
                    </div>




                    {/* Address */}
                    <div className='flex flex-col text-white gap-3'>
                        <h2 className='font-semibold'>Find us at</h2>
                        <hr className="border-gray-400 opacity-40" />

                        {/* Registered Office */}
                        <div className='flex gap-3 items-start'>
                            <div className='flex-shrink-0 mt-1'>
                                <img src="/assets/Home/footerassets/location.png" alt="Location" className="w-4 h-4" />
                            </div>
                            <div className='flex-1'>
                                <p className="text-white font-medium mb-1">Registered Office:</p>
                                <p className="text-gray-300 text-xs leading-relaxed">
                                    #6, Ground Floor, Kaanchan, North Huzur Road, Race Course, Coimbatore, Tamil Nadu, 641018
                                </p>
                                <button className="text-cyan-400 text-xs mt-2 flex items-center gap-1 hover:text-cyan-300 transition">
                                    Get Direction
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Development Center */}
                        <div className='flex gap-3 items-start'>
                            <div className='flex-shrink-0 mt-1'>
                                <img src="/assets/Home/footerassets/location.png" alt="Location" className="w-4 h-4" />
                            </div>
                            <div className='flex-1'>
                                <p className="text-white font-medium mb-1">Development Center:</p>
                                <p className="text-gray-300 text-xs leading-relaxed">
                                    7/2A, Shreesha Building, First Floor, Central Studio Road, Dhanalakshmi Puram South, Singanallur, Coimbatore, Tamil Nadu, 641005
                                </p>
                                <button className="text-cyan-400 text-xs mt-2 flex items-center gap-1 hover:text-cyan-300 transition">
                                    Get Direction
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Branch */}
                        <div className='flex gap-3 items-start'>
                            <div className='flex-shrink-0 mt-1'>
                                <img src="/assets/Home/footerassets/location.png" alt="Location" className="w-4 h-4" />
                            </div>
                            <div className='flex-1'>
                                <p className="text-white font-medium mb-1">Branch:</p>
                                <p className="text-gray-300 text-xs leading-relaxed">
                                    C - Block 904 , Riddhi's, Pramukh Elegance, Jeedimetla, Hyderabad, Telangana, 500055
                                </p>
                                <button className="text-cyan-400 text-xs mt-2 flex items-center gap-1 hover:text-cyan-300 transition">
                                    Get Direction
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className='px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-6'>
                <hr className="border-gray-400 opacity-40" />
            </div>

            {/* Bottom Section */}
            <div className='px-4 sm:px-6 md:px-12 lg:px-20 xl:px-36 pb-6 flex flex-col sm:flex-row justify-between items-center gap-4'>
                {/* Left */}
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 text-white text-xs sm:text-sm items-center sm:items-start'>
                    <p>©2025 Softworks Technologies. All Rights Reserved</p>
                    <div className="hidden sm:block h-4 border-l border-gray-400 opacity-40"></div>
                    <p>Terms & Conditions</p>
                    <div className="hidden sm:block h-4 border-l border-gray-400 opacity-40"></div>
                    <p>Privacy Policy</p>
                </div>

                {/* Right Icons */}
                <div className='flex gap-4 items-center text-white'>
                    <Link href="https://www.linkedin.com/company/softworks-technologies/?viewAsMember=true" target='blank'><img src="/assets/Home/footerassets/Linkedin.png" alt="Linkedin" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition" /></Link>
                    <Link href="https://x.com/Softworkstech1" target='blank'><img src="/assets/Home/footerassets/Twitter.png" alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition" /></Link>
                    <Link href="https://www.instagram.com/softworkstech19/" target='blank'><img src="/assets/Home/footerassets/Insta.png" alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition" /></Link>
                    <Link href="https://www.facebook.com/softworkstech19" target='blank'><img src="/assets/Home/footerassets/Facebook.png" alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition" /></Link>
                </div>
            </div>

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
    )
}

export default Footer
