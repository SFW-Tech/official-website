import React from 'react'
import Navbar from './Navbar'

function HeroSection() {
    return (
        <div className="w-full h-screen bg-cover"
            style={{ backgroundImage: "url('/assets/Heroassets/Banner 1.png')" }}
        >

            <Navbar />


            <div className='text-white flex justify-center pt-35 font-bold text-5xl'>

                <h1>Building Smart Solutions for a Digital-First Future</h1>


            </div>


            <div className='text-white flex justify-center pt-4'>
                <p>We craft scalable and secure digital products that solve real business challenges.</p>
            </div>



            <div className="flex justify-center mt-10">
                <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg cursor-pointer">
                    Connect With Us
                </button>
            </div>




        </div>
    )
}

export default HeroSection
