"use client";
import React, { useState } from "react";
import AnimateOnView from '../../../../animations/AnimateOnView'
import { fadeDown} from "../../../../animations/animations";
import ContactModal from "./ContactModal";

function Calloutsection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full h-[80px] sm:h-[135px] md:h-[145px] lg:h-[150px] xl:h-[155px] 
                 bg-cover bg-no-repeat bg-center flex sm:flex-row items-center 
                 justify-between px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 gap-4 sm:gap-0 text-center sm:text-left mt-8 md:mt-0"
      style={{ backgroundImage: "url('/assets/Home/Calloutassets/Callout section.png')" }}
    >
      {/* Left Text */}
      <AnimateOnView variants={fadeDown} className="max-w-xl">
        <h1 className="text-white font-semibold text-xs sm:text-lg md:text-xl lg:text-2xl">
          Need any expert business & consulting services?
        </h1>
      </AnimateOnView>

      {/* Right Button */}
      <AnimateOnView variants={fadeDown}>
        <button className="connectbutton" onClick={() => setIsOpen(true)}>
          <span className="animatebutton"></span>
          <span className="buttonbg">Connect with us</span>
        </button>
      </AnimateOnView>

      {/* Modal */}
      {isOpen && <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Calloutsection;
