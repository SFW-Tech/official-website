import React from 'react'

function Jointeamsection() {
    return (
        <div className='mt-8 px-28 mb-8'>

            <div className='flex items-center gap-18'>

                <div>
                    <img src="/assets/Aboutus/jointeamassets/1.png" alt="" className='h-[380px] w-auto' />

                </div>



                <div className='flex flex-col gap-3'>

                    <div>
                        <h1 className='text-3xl font-bold'>Join Our Team</h1>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p>It will be the best part of your career</p>
                        <button className="flex gap-2 items-center justify-center mb-1 text-sm tracking-tight rounded-md text-white bg-cyan-600 px-2 py-1 w-fit break-words whitespace-normal">
                            View Openings
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                            </svg>


                        </button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Jointeamsection