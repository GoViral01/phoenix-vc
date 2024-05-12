import React from "react";
import LinkButton from "../shared/Button";
import Image from "next/image";

const Investment = () => {
  return (
    <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5 md:gap-10">
        <div className="w-full lg:w-1/2">
          <span className="uppercase text-black-light text-xs sm:text-sm">
            Investment opportunities
          </span>
          <h2 className="text-black-12 text-2xl sm:text-3xl xl:text-[40px] mb-6 mt-8 md:mt-10 font-semibold sm:leading-[48px]">
            Expanding AI-Powered Financial Analytics
          </h2>

          <div className="text-sm sm:text-base text-black-8">
            <p>
              The SFC Angel Fund SEIS allows you to invest in some of the most
              innovative young companies in the UK, receive full SEIS tax
              benefits on your investment, and mitigate your risk through
              portfolio diversification.
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

          <div className="flex gap-5 flex-col sm:flex-row mt-10">
            <LinkButton
              buttonText="Become an Investor"
              href="/investors/login"
              aria-label="learn more about expansing AI powered financial analytics"
              className="bg-primary text-white hover:bg-[#003154] h-11 sm:h-14 text-sm sm:tex-base"
            />
            <LinkButton
              href="/investment-opportunities"
              buttonText="learn more"
              className="bg-black-12 text-white h-11 md:h-14 border border-black-12 hover:bg-transparent hover:text-black-12"
            />
          </div>
        </div>

        <div className="bg-gray-200 h-64 sm:h-[636px] rounded-xl overflow-clip w-full lg:w-1/2">
          <Image
            src="/investmentCover.jpeg"
            alt="Bar chart analytic"
            width={500}
            height={500}
            fetchPriority="high"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Investment;
