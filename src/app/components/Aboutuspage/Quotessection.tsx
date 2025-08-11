import React from 'react'

function Quotessection() {
    return (
        <div
            className='mt-8 w-full h-80'
            style={{
                backgroundImage: "url('/assets/Aboutus/Quotesassets/1.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}
        >
            <div className='flex justify-center items-center px-75 h-full'>
                <p className='text-white text-center text-2xl'>
                   "We build our Software solutions in a simple, easy-to-use format, uncluttered and easy to comprehend, enabling you to make quick & insightful business decisions. This will help you to stay on track for growth goals, foresee new opportunities & cultivate potential business areas"
                </p>
            </div>
        </div>
    )
}

export default Quotessection
