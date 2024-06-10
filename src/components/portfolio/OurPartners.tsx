import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getXataClient } from "@/xata";
import { FaChevronRight } from "react-icons/fa6";
import { ImSpinner9 } from "react-icons/im";

export interface IVettedStartup {
  companyName: string;
  imageUrl: string;
  description: string;
  websiteUrl: string;
}

const OurPartners = async () => {
  // get all partners - for portfolio page
  async function getAllPartners() {
    try {
      const xata = getXataClient();

      const data = await xata.db.portfolio
        .select(["companyName", "description", "websiteUrl", "imageUrl"])
        .getAll();

      return data;
    } catch (e) {
      console.error(e);
    }
  }

  const partners = await getAllPartners();

  return partners ? (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mt-7 md:mt-16">
      {partners?.map((company) => (
        <div
          key={company.id}
          className="border border-[#F0F0F0] px-4 md:px-6 pt-6 md:pt-10 rounded-lg group hover:shadow-lg flex flex-col"
        >
          <div className="h-16 w-52">
            <Image
              src={company.imageUrl?.url || ""}
              alt={company.companyName || ""}
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
            href={company.websiteUrl || ""}
            aria-label={`visit ${company.companyName} website`}
            target="_blank"
            className="group-hover:text-blue-500 flex items-center justify-between gap-3 uppercase transition duration-300 border-t border-t-[#F0F0F0] -mx-6 p-4 md:px-6 md:py-6 text-sm md:text-base text-[#595959] font-semibold"
          >
            View Website
            <FaChevronRight />
          </Link>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex items-center justify-center">
      <ImSpinner9 className="animate-spin text-3xl mx-auto" />
    </div>
  );
};

export default OurPartners;
