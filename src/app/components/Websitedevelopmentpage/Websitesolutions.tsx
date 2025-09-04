import React from 'react'

function Websitesolutions() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-8">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Transform your business with high-quality Website Developement solutions
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src="/assets/Websitedevelopment/Websitesolutions/1.jpg"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded"
            alt=""
          />
        </div>

        {/* text content */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 text-gray-700 justify-center">
          <p>
            The Face is the index of mind! The website is the index of your
            business. We understand how the business sector depends primarily on
            creating its own digital presence. With highly experienced web
            designers, Softworks Technologies is one of the leading web design
            and development companies in India.
          </p>

          <p>
            At a reasonable price, we provide you with responsive websites. For
            many global and large Indian companies, we have built websites For
            our clients, our team has completed many projects and best designs
            that are customized to the individual business.
          </p>

          <p>
            Softworks feels privileged to state that we have proven results in
            satisfying our customer’s requirements/demands.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Websitesolutions
