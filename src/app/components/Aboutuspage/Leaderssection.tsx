import React from 'react';
import Link from 'next/link';

function Leaderssection() {
    return (
        <div className="mt-10 px-4 md:px-16 lg:px-24 xl:px-28">

            <h1 className="flex justify-center items-center font-bold text-2xl md:text-3xl mb-6">
                Our Leadership Team
            </h1>

            {/* grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

                {/* Leader 1 */}
                <div className="bg-gradient-to-r from-[#7264bb] via-[#3f4c67] to-[#605c9b] p-6 rounded-xl flex flex-col items-center text-white h-full">
                    <img src="/assets/Aboutus/Leadersassets/Leader1.png" alt="Arun Jesuraj" className="w-auto h-auto max-h-72 rounded-xl" />
                    <div className="flex flex-col gap-4 mt-6 text-center flex-grow">
                        <h2 className="font-semibold text-xl md:text-2xl">Arun Jesuraj</h2>
                        <p className="font-medium text-base md:text-lg">Chairman and Managing Director</p>
                        <p className="leading-relaxed text-sm md:text-base">
                            With a digital compass always pointed north, our chairman - Arun Jesuraj is the driving force behind Software's meteoric rise.
                        </p>
                        <div className="flex-grow" /> 
                        <hr className="text-gray-400 opacity-40 mt-auto" />
                        <img src="/assets/Home/footerassets/Linkedin.png" alt="Linkedin" className="w-8 h-8 cursor-pointer hover:scale-110 transition mx-auto mt-2" />
                    </div>
                </div>

                {/* Leader 2 */}
                <div className="bg-gradient-to-r from-[#7264bb] via-[#3f4c67] to-[#605c9b] p-6 rounded-xl flex flex-col items-center text-white h-full">
                    <img src="/assets/Aboutus/Leadersassets/leader2.png" alt="Vivin Richard Thomas" className="w-auto h-auto max-h-72 rounded-xl" />
                    <div className="flex flex-col gap-4 mt-6 text-center flex-grow">
                        <h2 className="font-semibold text-xl md:text-2xl">Vivin Richard Thomas</h2>
                        <p className="font-medium text-base md:text-lg">Co-Founder & CEO</p>
                        <p className="leading-relaxed text-sm md:text-base">
                            With a baton as sharp as a line of code, Vivin Richard orchestrates a harmonious melody of efficiency and effectiveness, ensuring every note resonates with operational excellence.
                        </p>
                        <div className="flex-grow" />
                        <hr className="text-gray-400 opacity-40 mt-auto" />
                        <img src="/assets/Home/footerassets/Linkedin.png" alt="Linkedin" className="w-8 h-8 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition mx-auto mt-2" />
                    </div>
                </div>

                {/* Leader 3 */}
                <div className="bg-gradient-to-r from-[#7264bb] via-[#3f4c67] to-[#605c9b] p-6 rounded-xl flex flex-col items-center text-white h-full">
                    <img src="/assets/Aboutus/Leadersassets/leader3.png" alt="Deepa Ganesh" className="w-auto h-auto max-h-72 rounded-xl" />
                    <div className="flex flex-col gap-4 mt-6 text-center flex-grow">
                        <h2 className="font-semibold text-xl md:text-2xl">Deepa Ganesh</h2>
                        <p className="font-medium text-base md:text-lg">Global HR Head</p>
                        <p className="leading-relaxed text-sm md:text-base">
                            Heading HR division is the linchpin of our leadership team, weaving strategic acumen with visionary talent cultivation to drive our organizational excellence.
                        </p>
                        <div className="flex-grow" />
                        <hr className="text-gray-400 opacity-40 mt-auto" />
                        <img src="/assets/Home/footerassets/Linkedin.png" alt="Linkedin" className="w-8 h-8 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition mx-auto mt-2" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Leaderssection;
