import React from 'react'

function Imagesection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center px-4 md:px-8 lg:px-16">
      <img
        src="/assets/Casestudies/Food-Application/food-app-poster1.png"
        alt="poster1"
        className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain rounded-2xl"
      />
      <img
        src="/assets/Casestudies/Food-Application/food-app-poster2.png"
        alt="poster2"
        className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain rounded-2xl"
      />
    </div>
  )
}

export default Imagesection
