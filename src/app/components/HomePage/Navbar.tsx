import React from "react";

function Navbar() {
    return (
        <div className="sticky top-0 z-50 flex justify-between items-center px-34 py-4 text-white ">


            {/* Logo */}
            <div className="flex items-center">
                <img
                    src="/assets/Navbarassets/logo.png"
                    alt="Softworks Logo"
                    className="h-10 w-auto"
                />

            </div>


            {/* Navigation Menu */}
            <div className="flex gap-12 text-sm font-semibold items-center pr-120">
                <p className="cursor-pointer ">Home</p>
                <p className="cursor-pointer ">Services</p>
                <p className="cursor-pointer ">About Us</p>
                <p className="cursor-pointer ">Careers</p>
                <p className="cursor-pointer ">Contacts</p>
            </div>
        </div>
    );
}

export default Navbar;
