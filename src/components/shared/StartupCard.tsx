"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { getAllPartners } from "@/app/action";

export interface IVettedStartup {
  companyName: string;
  imageUrl: string;
  description: string;
  websiteUrl: string;
}

const StartupCard = () => {
  const partners = [
    {
      imageUrl: "/muvarlogo.png",
      companyName: "Muvar",
      description:
        "UK-based pre-seed with partnerships in rail, hotel, and flight booking offers a  complete package that makes the travel experience seamless. They require an investment of  $5 million.",
      websiteUrl: "https://muvar.ai/",
    },
    {
      imageUrl: "/wellLogo.png",
      companyName: "Well Inc.",
      description:
        "US-based seed company with a partnership agreement with IBM, managed by  medical and tech experts, seeking funding of $3 million",
      websiteUrl: "https://www.wellnesswits.com/",
    },
    {
      imageUrl: "/goviralLogo.png",
      companyName: "Goviral",
      description:
        "US-based seed company with a partnership agreement with IBM, managed by  medical and tech experts, seeking funding of $3 million",
      websiteUrl: "#",
    },
    {
      imageUrl: "/dd.png",
      companyName: "Sub-Soft",
      description:
        "Nigerian-based pre-seed AI innovators with two commercially viable proprietary  product. They require funding of $5 million.",
      websiteUrl: "#",
    },
    {
      imageUrl: "/logoNew.png",
      companyName: "State-of-the-art Laboratory",
      description:
        "Integral to Phoenix VC’s strategy for cultivating an ecosystem  that produces cutting-edge AI products and technological services.",
      websiteUrl: "https://phoenixvc.uk/",
    },
  ];

  useEffect(() => {
    console.log(getAllPartners());
  }, []);

  return partners.map((company, index) => (
    <div
      key={index}
      className="border border-[#F0F0F0] px-4 md:px-6 pt-6 md:pt-10 rounded-lg group hover:shadow-lg flex flex-col"
    >
      <div className="h-16 w-52">
        <Image
          src={company.imageUrl}
          alt={company.companyName}
          width={500}
          height={500}
          fetchPriority="high"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="py-6 md:py-10 flex-1">
        <h3 className="text-black-12 font-semibold sm:text-lg md:text-xl mb-3">
          {company.companyName}
        </h3>
        <p className="text-black-8 text-sm md:text-base">
          {company.description}
        </p>

        {/* <div className="flex justify-between gap-4 mt-6 md:mt-8">
          <div>
            <h3 className="uppercase text-xs text-[#595959] font-semibold mb-2">
              floating stage
            </h3>
            <strong className="text-sm sm:text-base">
              {company.floatingStage}
            </strong>
          </div>
          <div>
            <h3 className="uppercase text-xs text-[#595959] font-semibold mb-2">
              Industry
            </h3>
            <strong className="text-sm sm:text-base">{company.industry}</strong>
          </div>
        </div> */}
      </div>

      <Link
        href={company.websiteUrl}
        aria-label={`visit ${company.companyName} website`}
        target="_blank"
        className="group-hover:text-blue-500 flex items-center justify-between gap-3 uppercase transition duration-300 border-t border-t-[#F0F0F0] -mx-6 p-4 md:px-6 md:py-6 text-sm md:text-base text-[#595959] font-semibold"
      >
        View Website
        <FaChevronRight />
      </Link>
    </div>
  ));
};

export default StartupCard;
