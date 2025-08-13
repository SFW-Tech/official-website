import React from 'react'

function Quotessection() {
    return (
        <div
            className='mt-8 w-full h-60 sm:h-72 md:h-80'
            style={{
                backgroundImage: "url('/assets/Aboutus/Quotesassets/1.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}
        >
            <div className='flex justify-center items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[75px] h-full'>
                <p className='text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed'>
                   "We build our Software solutions in a simple, easy-to-use format, uncluttered and easy to comprehend, enabling you to make quick & insightful business decisions. This will help you to stay on track for growth goals, foresee new opportunities & cultivate potential business areas"
                </p>
            </div>
        </div>
    )
}

export default Quotessection
