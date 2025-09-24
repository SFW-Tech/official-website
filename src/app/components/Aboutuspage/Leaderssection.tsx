"use client";
import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown } from "../../../../animations/animations";

function Leaderssection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const leaders = [
    {
      img: "/assets/Aboutus/Leadersassets/Leader1.png",
      name: "Arun Jesuraj",
      role: "Chairman and Managing Director",
      subtitle: "Visionary Virtuoso",
      description:
        "With a digital compass always pointed north, our chairman – Arun Jesuraj is the driving force behind Software's meteoric rise. A maven of innovation with a penchant for disruptive technologies, he charts the course for our journey to digital dominance, navigating uncharted territories with aplomb. With 15+ Yrs. of expertise in sales and Business Development, he identifies new opportunities and ensures that our solutions meet the needs of our customers.",
      linkedin: "https://www.linkedin.com/in/arun-jesuraj-85840184/",
    },
    {
      img: "/assets/Aboutus/Leadersassets/leader2.png",
      name: "Vivin Richard Thomas",
      role: "Co-Founder & Chief Executive Officer",
      subtitle: "Architect of Digital Realm",
      description:
        "With a baton as sharp as a line of code, Vivin Richard orchestrates a harmonious melody of efficiency and effectiveness, ensuring every note resonates with operational excellence. In his capacity as CEO, he sets strategic direction and manages every facet of Softworks' expansion and advancement. With over 14+ Years of expertise in the software industry, with a proven track record of directing high performing teams and delivering innovative solutions, he ensures that our services remain at the forefront of technology and meet the evolving needs of our clients.",
      linkedin: "https://www.linkedin.com/in/vivinrichardthomas-rajamanickam-5b91771b/",
    },
    {
      img: "/assets/Aboutus/Leadersassets/leader3.png",
      name: "Deepa Ganesh",
      role: "Global HR Head",
      subtitle: "",
      description:
        "Heading HR division is the linchpin of our leadership team, weaving strategic acumen with visionary talent cultivation to drive our organizational excellence. With over 15+ Years of expertise she sculpts an inclusive culture, orchestrating transformative growth and harmonizing human potential with the company’s grand vision.",
      linkedin: "https://www.linkedin.com/in/deepa-ganesh-04563070/",
    },
  ];

  return (
    <div className="mt-15 mb-15 px-4 md:px-16 lg:px-24 xl:px-28">
      {/* Heading */}
      <AnimateOnView variants={fadeDown} className="flex justify-center items-center font-bold text-2xl md:text-3xl mb-6">
        Our Leadership Team
      </AnimateOnView>

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {leaders.map((leader, idx) => (
            <div key={idx} className="flex-[0_0_100%] min-w-0 px-2">
              <div className="bg-gradient-to-r from-[#7264bb] via-[#3f4c67] to-[#605c9b] p-6 rounded-xl flex flex-col lg:flex-row items-center text-white h-full gap-6">
                <img src={leader.img} alt={leader.name} className="h-60 md:h-72 rounded-xl" />
                <div className="flex flex-col gap-3 text-center lg:text-left flex-grow lg:mt-2 justify-center">
                  <h2 className="font-semibold text-xl md:text-2xl">{leader.name}</h2>
                  <p className="font-medium text-base md:text-lg">{leader.role}</p>
                  {leader.subtitle && <p className="font-medium text-base md:text-lg">{leader.subtitle}</p>}
                  <p className="leading-relaxed text-sm md:text-base">{leader.description}</p>
                  <div className="flex-grow" />
                  <hr className="text-gray-400 opacity-40 mt-auto" />
                  <Link href={leader.linkedin} target="_blank">
                    <img
                      src="/assets/Home/footerassets/Linkedin.png"
                      alt="Linkedin"
                      className="w-8 h-8 cursor-pointer hover:scale-110 transition mt-2 lg:mx-0 mx-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {leaders.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`w-3 h-3 rounded-full transition cursor-pointer ${
              selectedIndex === i ? "bg-[#201D42]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Leaderssection;
