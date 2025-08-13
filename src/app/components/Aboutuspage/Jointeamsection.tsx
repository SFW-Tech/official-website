import React from 'react'

function Jointeamsection() {
  return (
    <div className='mt-8 pr-4 sm:px-8 md:px-16 lg:px-24 xl:px-28 mb-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 gap-y-3 md:gap-x-20 lg:gap-x-32'>

        <div>
          <img
            src="/assets/Aboutus/jointeamassets/1.png"
            alt=""
            className='h-[180px] sm:h-[250px] md:h-[200px] lg:h-[220px] xl:h-[300px] w-auto'
          />
        </div>

        <div className='flex flex-col gap-3 text-center md:text-left'>

          <h1 className='text-2xl sm:text-2.5xl md:text-3xl font-bold'>
            Join Our Team
          </h1>

          <p className='text-sm sm:text-base'>
            It will be the best part of your career
          </p>

          <button className="flex gap-2 items-center justify-center mx-auto md:mx-0 text-xs sm:text-sm tracking-tight rounded-md text-white bg-cyan-600 px-3 py-1.5 w-fit break-words whitespace-normal hover:bg-cyan-700 transition">
            View Openings
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
            </svg>
          </button>

        </div>

      </div>
    </div>
  )
}

export default Jointeamsection
