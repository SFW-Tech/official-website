import React from 'react'
import AnimateOnView from '../../../../animations/AnimateOnView'
import { fadeDown } from '../../../../animations/animations'

function Resourcesolution() {
  return (
    <AnimateOnView variants={fadeDown}
      className="my-6 md:my-10 w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/assets/Home/Calloutassets/Callout section.png')" }}
    >
      <div className="flex flex-col gap-5 md:gap-8 text-center text-white py-6 sm:py-8 md:py-10 lg:py-12 xl:py-5 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
        
        {/* Small Title */}
        <div>
          <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-2xl font-bold">
            Individual Resource Solutions for Your
          </h2>
        </div>

        {/* Main Title */}
        <div>
          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-3xl font-bold">
            Software Development Project in One Place
          </h1>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-sm md:text-lg lg:text-xl xl:text-xl font-medium">
            We have various professionals with holistic skill sets, industry experience, 
            and technical expertise for all your project needs.
          </h3>
        </div>
      </div>
    </AnimateOnView>
  )
}

export default Resourcesolution
