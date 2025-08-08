import React from 'react'
import Navbar from './Navbar'

function HeroSection() {
    return (
        <div className="w-full h-[800px] md:h-[1000px] lg:h-[900px] bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/Home/Heroassets/Banner 2.png')" }}
        >

            <Navbar />

            <div className='text-white flex justify-center px-4 md:px-14 lg:px-0 pt-19 md:pt-14 lg:pt-35 font-bold text-xl md:text-4xl lg:text-5xl text-center'>
                <h1>Building Smart Solutions for a Digital-First Future</h1>
            </div>

            <div className='text-white flex justify-center px-5 md:px-12 lg:px-0 pt-4 text-center'>
                <p className="text-sm md:text-base lg:text-base">We craft scalable and secure digital products that solve real business challenges.</p>
            </div>

            <div className="flex justify-center mt-6 md:mt-8 lg:mt-8 px-4">
                <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 lg:px-6 lg:py-3 rounded-2xl shadow-lg cursor-pointer text-sm md:text-base lg:text-base transition-all duration-300">
                    Connect With Us
                </button>
            </div>

        </div>
    )
}

export default HeroSection