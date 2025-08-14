import React from 'react';

function Leaderssection() {
    return (
        <div className="mt-10 px-4 md:px-16 lg:px-24 xl:px-28">

            <h1 className="flex justify-center items-center font-bold text-2xl md:text-3xl">
                Our Leadership Team
            </h1>

            <div className="grid gap-1">
                
                {/* Leader 1 */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] bg-gradient-to-r from-[#7264bb] via-[#3f4c67] to-[#605c9b] p-6 mt-6 rounded-xl">
                    
                    <div className="flex justify-center md:justify-start">
                        <img src="/assets/Aboutus/Leadersassets/Leader1.png" alt="Arun Jesuraj" className="w-auto h-auto max-h-72 rounded-xl" />
                    </div>

                    <div className="flex flex-col text-white justify-center gap-4 mt-6 md:mt-0 md:pl-6">
                        <h2 className="font-semibold text-xl md:text-2xl">Arun Jesuraj</h2>
                        <p className="font-medium text-base md:text-lg">Chairman and Managing Director</p>
                        <p className="leading-relaxed text-sm md:text-base">With a digital compass always pointed north, our chairman – Arun Jesuraj is the driving force behind Software's meteoric rise. A maven of innovation with a penchant for disruptive technologies, he charts the course for our journey to digital dominance, navigating uncharted territories with aplomb. With 15 + Yrs. of expertise in sales and Business Development, he identifies new opportunities and ensures that our solutions meet the needs of our customers.</p>
                        
                        <hr className="text-gray-400 opacity-40" />

                        <div>
                            <img src="/assets/Home/footerassets/Linkedin.png" alt="Linkedin" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition" />
                        </div>
                    </div>
                </div>

                {/* Leader 2 */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] bg-gradient-to-r from-[#7264bb] via-[#3f4c67] to-[#605c9b] p-6 mt-6 rounded-xl">
                    
                    <div className="flex justify-center md:justify-start">
                        <img src="/assets/Aboutus/Leadersassets/leader2.png" alt="Vivin Richard Thomas" className="w-auto h-auto max-h-72 rounded-xl" />
                    </div>

                    <div className="flex flex-col text-white justify-center gap-4 mt-6 md:mt-0 md:pl-6">
                        <h2 className="font-semibold text-xl md:text-2xl">Vivin Richard Thomas</h2>
                        <p className="font-medium text-base md:text-lg">Co-Founder & Chief Executive Officer Architect of Digital Realm</p>
                        <p className="leading-relaxed text-sm md:text-base">With a baton as sharp as a line of code, Vivin Richard orchestrates a harmonious melody of efficiency and effectiveness, ensuring every note resonates with operational excellence. In his capacity as CEO, he sets strategic direction and manages every facet of Softworks' expansion and advancement. With over 14+ Years of expertise in the software industry, with a proven track record of directing high performing teams and delivering innovative solutions, he ensures that our services remain at the forefront of technology and meet the evolving needs of our client</p>
                        
                        <hr className="text-gray-400 opacity-40" />
                        
                        <div>
                            <img src="/assets/Home/footerassets/Linkedin.png" alt="Linkedin" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition" />
                        </div>
                    </div>
                </div>

                {/* Leader 3 */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] bg-gradient-to-r from-[#7264bb] via-[#3f4c67] to-[#605c9b] p-6 mt-6 rounded-xl">
                    
                    <div className="flex justify-center md:justify-start">
                        <img src="/assets/Aboutus/Leadersassets/leader3.png" alt="Deepa Ganesh" className="w-auto h-auto max-h-72 rounded-xl" />
                    </div>

                    <div className="flex flex-col text-white justify-center gap-4 mt-6 md:mt-0 md:pl-6">
                        <h2 className="font-semibold text-xl md:text-2xl">Deepa Ganesh</h2>
                        <p className="font-medium text-base md:text-lg">Global HR Head</p>
                        <p className="leading-relaxed text-sm md:text-base">Heading HR division is the linchpin of our leadership team, weaving strategic acumen with visionary talent cultivation to drive our organizational excellence. With over 15+ Years of expertise she sculpts an inclusive culture, orchestrating transformative growth and harmonizing human potential with the company’s grand vision.</p>
                        
                        <hr className="text-gray-400 opacity-40" />

                        <div>
                            <img src="/assets/Home/footerassets/Linkedin.png" alt="Linkedin" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Leaderssection;