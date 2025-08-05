import React from 'react'

function Topbar() {
    return (
       <div className="w-full bg-white">



            <div className="px-28 py-2 flex justify-between items-center text-sm text-gray-800">

                {/* Left Side */}

                <div className="flex gap-4 items-center">

                    <div className="flex items-center gap-2">
                        <img src="/assets/Topbarassets/mail logo.png" alt="mail" className="w-4 h-4" />
                        <p>info@sfwtechnologies.com</p>
                    </div>

                    <div className="h-4 border-l border-gray-400"></div>

                    <div className="flex items-center gap-2">
                        <img src="/assets/Topbarassets/phone logo.png" alt="phone" className="w-4 h-4" />
                        <p>+91 98941 13103</p>
                    </div>

                </div>

                {/* Right Side */}

                <div className="flex items-center gap-4">

                    <img src="/assets/Topbarassets/insta logo.png" alt="Instagram" className="w-4 h-4 cursor-pointer" />
                    <img src="/assets/Topbarassets/linkednin.png" alt="LinkedIn" className="w-4 h-4 cursor-pointer" />
                    <img src="/assets/Topbarassets/twitter.png" alt="Twitter" className="w-3 h-3 cursor-pointer" />
                    <img src="/assets/Topbarassets/fb.png" alt="Facebook" className="w-4 h-4 cursor-pointer" />
                    
                </div>



            </div>




        </div>
    )
}

export default Topbar