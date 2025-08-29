"use client";
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

function Leaderssection() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [Autoplay({ delay: 7000, stopOnInteraction: false })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <div className="mt-15 mb-15 px-4 md:px-16 lg:px-24 xl:px-28">
            <h1 className="flex justify-center items-center font-bold text-2xl md:text-3xl mb-6">
                Our Leadership Team
            </h1>

            {/* Embla carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {/* Leader 1 */}
                    <div className="flex-[0_0_100%] min-w-0 px-2">
                        <div className="bg-gradient-to-r from-[#7264bb] via-[#3f4c67] to-[#605c9b] p-6 rounded-xl flex flex-col lg:flex-row items-center text-white h-full gap-6">
                            <img
                                src="/assets/Aboutus/Leadersassets/Leader1.png"
                                alt="Arun Jesuraj"
                                className="h-60 md:h-72 rounded-xl"
                            />
                            <div className="flex flex-col gap-3 text-center lg:text-left flex-grow lg:mt-2 justify-center">
                                <h2 className="font-semibold text-xl md:text-2xl">Arun Jesuraj</h2>
                                <p className="font-medium text-base md:text-lg">Chairman and Managing Director</p>
                                <p className="font-medium text-base md:text-lg">Visionary Virtuoso</p>

                                <p className="leading-relaxed text-sm md:text-base">
                                    With a digital compass always pointed north, our chairman – Arun Jesuraj is the
                                    driving force behind Software's meteoric rise. A maven of innovation with a
                                    penchant for disruptive technologies, he charts the course for our journey to
                                    digital dominance, navigating uncharted territories with aplomb. With 15+ Yrs. of
                                    expertise in sales and Business Development, he identifies new opportunities and
                                    ensures that our solutions meet the needs of our customers.
                                </p>
                                <div className="flex-grow" />
                                <hr className="text-gray-400 opacity-40 mt-auto" />
                                <Link href="https://www.linkedin.com/in/arun-jesuraj-85840184/" target="blank">
                                <img
                                    src="/assets/Home/footerassets/Linkedin.png"
                                    alt="Linkedin"
                                    className="w-8 h-8 cursor-pointer hover:scale-110 transition mt-2 lg:mx-0 mx-auto"
                                />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Leader 2 */}
                    <div className="flex-[0_0_100%] min-w-0 px-2">
                        <div className="bg-gradient-to-r from-[#7264bb] via-[#3f4c67] to-[#605c9b] p-6 rounded-xl flex flex-col lg:flex-row items-center text-white h-full gap-6">
                            <img
                                src="/assets/Aboutus/Leadersassets/leader2.png"
                                alt="Vivin Richard Thomas"
                                className="h-60 md:h-72 rounded-xl"
                            />
                            <div className="flex flex-col gap-3 text-center lg:text-left flex-grow lg:mt-14 justify-center">
                                <h2 className="font-semibold text-xl md:text-2xl">Vivin Richard Thomas</h2>
                                <p className="font-medium text-base md:text-lg">
                                    Co-Founder & Chief Executive Officer 
                                </p>
                                <p className="font-medium text-base md:text-lg">
                                    Architect of Digital Realm
                                </p>


                                <p className="leading-relaxed text-sm md:text-base">
                                    With a baton as sharp as a line of code, Vivin Richard orchestrates a harmonious
                                    melody of efficiency and effectiveness, ensuring every note resonates with
                                    operational excellence. In his capacity as CEO, he sets strategic direction and
                                    manages every facet of Softworks' expansion and advancement. With over 14+ Years of
                                    expertise in the software industry, with a proven track record of directing high
                                    performing teams and delivering innovative solutions, he ensures that our services
                                    remain at the forefront of technology and meet the evolving needs of our clients.
                                </p>
                                <div className="flex-grow" />
                                <hr className="text-gray-400 opacity-40 mt-auto" />
                                <Link href = "https://www.linkedin.com/in/vivinrichardthomas-rajamanickam-5b91771b/" target="blank">
                                <img
                                    src="/assets/Home/footerassets/Linkedin.png"
                                    alt="Linkedin"
                                    className="w-8 h-8 cursor-pointer hover:scale-110 transition mt-2 lg:mx-0 mx-auto"
                                />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Leader 3 */}
                    <div className="flex-[0_0_100%] min-w-0 px-2">
                        <div className="bg-gradient-to-r from-[#7264bb] via-[#3f4c67] to-[#605c9b] p-6 rounded-xl flex flex-col lg:flex-row items-center text-white h-full gap-6">
                            <img
                                src="/assets/Aboutus/Leadersassets/leader3.png"
                                alt="Deepa Ganesh"
                                className="h-60 md:h-72 rounded-xl"
                            />
                            <div className="flex flex-col gap-3 text-center lg:text-left flex-grow lg:mt-10 justify-center">
                                <h2 className="font-semibold text-xl md:text-2xl">Deepa Ganesh</h2>
                                <p className="font-medium text-base md:text-lg">Global HR Head</p>
                                <p className="leading-relaxed text-sm md:text-base">
                                    Heading HR division is the linchpin of our leadership team, weaving strategic acumen
                                    with visionary talent cultivation to drive our organizational excellence. With over
                                    15+ Years of expertise she sculpts an inclusive culture, orchestrating transformative
                                    growth and harmonizing human potential with the company’s grand vision.
                                </p>
                                <div className="flex-grow" />
                                <hr className="text-gray-400 opacity-40 mt-auto" />
                                <Link href="https://www.linkedin.com/in/deepa-ganesh-04563070/" target="blank">
                                <img
                                    src="/assets/Home/footerassets/Linkedin.png"
                                    alt="Linkedin"
                                    className="w-8 h-8 cursor-pointer hover:scale-110 transition mt-2 lg:mx-0 mx-auto"
                                />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* dots */}
            <div className="flex justify-center gap-2 mt-4">
                <button
                    onClick={() => emblaApi && emblaApi.scrollTo(0)}
                    className={`w-3 h-3 rounded-full transition cursor-pointer ${selectedIndex === 0 ? "bg-[#201D42]" : "bg-gray-400"
                        }`}
                />
                <button
                    onClick={() => emblaApi && emblaApi.scrollTo(1)}
                    className={`w-3 h-3 rounded-full transition cursor-pointer ${selectedIndex === 1 ? "bg-[#201D42]" : "bg-gray-400"
                        }`}
                />
                <button
                    onClick={() => emblaApi && emblaApi.scrollTo(2)}
                    className={`w-3 h-3 rounded-full transition cursor-pointer ${selectedIndex === 2 ? "bg-[#201D42]" : "bg-gray-400"
                        }`}
                />
            </div>
        </div>
    );
}

export default Leaderssection;
