import React from "react";
import NewsCard from "@/components/shared/NewsCard";
import Image from "next/image";

const pages = () => {
  return (
    <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28 bg-[#F0F0F0]">
      <h2 className="text-black-12 text-2xl sm:text-3xl xl:text-[40px] mb-6 font-semibold sm:leading-[48px]">
        Latest News
      </h2>

      <div
        className="flex flex-col
       lg:flex-row items-center justify-between gap-5 md:gap-10"
      >
        <div className="bg-gray-200 h-64 sm:h-[636px] rounded-xl overflow-clip w-full lg:w-1/2">
          <Image
            src="/holographic.jpeg"
            alt="holographic rendering"
            width={500}
            height={500}
            fetchPriority="high"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-black-12 text-xl sm:text-2xl xl:text-3xl mb-6 mt-8 md:mt-10 font-semibold sm:leading-[48px]">
            AI Startup NeuroBotics Secures $5 Million in Series A Funding Round
          </h2>

          <div className="text-sm sm:text-base text-black-8">
            <p>
              NeuroBotics, a leading neurotechnology startup specializing in
              AI-powered brain-computer interfaces, announced today the
              successful closure of its Series A funding round, securing $5
              million in investment from a consortium of prominent venture
              capital firms and strategic investors.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 mt-6 md:mt-8">
            <div>
              <h3 className="uppercase text-xs text-[#595959] font-semibold mb-2">
                Raising
              </h3>
              <strong className="text-sm sm:text-base">$3m</strong>
            </div>
            <div>
              <h3 className="uppercase text-xs text-[#595959] font-semibold mb-2">
                Deadline
              </h3>
              <strong className="text-sm sm:text-base">
                19 September, 2024
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 my-20 xl:my-32">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
};

export default pages;
