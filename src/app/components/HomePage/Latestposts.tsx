import React from 'react'

function Latestposts() {
    return (
        <div className='w-full bg-[#d5e1ea]'>

            {/* Heading */}
            <div className='flex justify-center py-10 md:py-12 lg:py-14 xl:py-15 items-center text-center px-4'>
                <h1 className='text-gray-950 font-semibold text-xl md:text-2xl lg:text-3xl'>
                    Stay updated with our latest posts
                </h1>
            </div>

            {/* Posts Grid */}
            <div className='px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 pb-10'>

                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="max-w-xs mx-auto">
                        <div className="relative">
                            <img
                                className="rounded-lg h-44 sm:h-48 md:h-52 w-full object-cover"
                                src={`/assets/Home/Latestpostsassets/${item}.png`}
                                alt=""
                            />
                            <div className="absolute -top-6 left-4 bg-cyan-600 text-white font-bold px-4 py-1 md:px-5 md:py-2 rounded-xl shadow flex flex-col justify-center items-center">
                                <p className="text-lg md:text-xl lg:text-2xl">28</p>
                                <p className="text-[10px] md:text-xs">AUG</p>
                            </div>
                        </div>
                        <div className="p-2">
                            <a href="#">
                                <h5 className="mb-1 text-xs md:text-sm tracking-tight text-white bg-cyan-600 rounded-md px-2 py-1 w-fit break-words whitespace-normal">
                                    Design , Branding
                                </h5>
                            </a>
                            <p className="mb-1 text-sm md:text-md font-medium text-gray-900 py-2">
                                Four Ways a Clean Workplace Makes Employees Happy and Healthy
                            </p>
                            <a href="#" className="inline-flex items-center py-1 text-xs md:text-sm font-medium text-gray-600 rounded-lg">
                                READ MORE
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Latestposts
