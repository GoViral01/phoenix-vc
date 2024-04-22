import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

interface IVettedStartup {
  name: string;
  image: string;
  description: string;
  floatingStage: string;
  industry: string;
  href: string;
}

const StartupCard = () => {
  const VETTED_STARTUPS: IVettedStartup[] = [
    {
      image: "/robo-assist.svg",
      name: "RoboAssist",
      description:
        "RoboAssist offers AI-powered robotic automation solutions for industrial manufacturing and logistics, streamlining operations and optimizing efficiency...",
      floatingStage: "Pre-Series A",
      industry: "Fintech, Banking",
      href: "/",
    },
    {
      image: "/fintellia.svg",
      name: "Fintellia",
      description:
        "Fintellia develops AI-driven predictive analytics software for financial institutions, enhancing risk management and investment decision-making.",
      floatingStage: "Series C",
      industry: "Biotech, Health",
      href: "/",
    },
    {
      image: "/neuroBotics.svg",
      name: "NeuroBotics",
      description:
        "NeuroBotics develops AI-powered neurotechnology solutions for enhanced brain-computer interfaces, enabling new possibilities in healthcare.",
      floatingStage: "Series A",
      industry: "Healthtech",
      href: "/",
    },
  ];

  return VETTED_STARTUPS.map((startup, index) => (
    <div
      key={index}
      className="border border-[#F0F0F0] px-4 md:px-6 pt-6 md:pt-10 rounded-lg group hover:shadow-lg"
    >
      <Image
        src={startup.image}
        alt={startup.name}
        width={80}
        height={80}
        fetchPriority="high"
      />

      <div className="py-6 md:py-10">
        <h3 className="text-black-12 font-semibold sm:text-lg md:text-xl mb-3">
          {startup.name}
        </h3>
        <p className="text-black-8 text-sm md:text-base">
          {startup.description}
        </p>

        <div className="flex justify-between gap-4 mt-6 md:mt-8">
          <div>
            <h3 className="uppercase text-xs text-[#595959] font-semibold mb-2">
              floating stage
            </h3>
            <strong className="text-sm sm:text-base">
              {startup.floatingStage}
            </strong>
          </div>
          <div>
            <h3 className="uppercase text-xs text-[#595959] font-semibold mb-2">
              Industry
            </h3>
            <strong className="text-sm sm:text-base">{startup.industry}</strong>
          </div>
        </div>
      </div>

      <Link
        href={startup.href}
        aria-label={`learn more about ${startup.name}`}
        className="group-hover:text-blue-500 flex items-center justify-between gap-3 uppercase transition duration-300 border-t border-t-[#F0F0F0] -mx-6 p-4 md:px-6 md:py-6 text-sm md:text-base text-[#595959] font-semibold"
      >
        Learn more
        <FaChevronRight />
      </Link>
    </div>
  ));
};

export default StartupCard;
