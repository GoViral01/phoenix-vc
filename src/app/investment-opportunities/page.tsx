import LinkButton from "@/components/shared/Button";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="min-h-[50vh] flex items-center px-5 sm:px-10 xl:px-28 bg-black/40 bg-[url('/3DChart.jpeg')] bg-no-repeat bg-cover bg-center bg-blend-overlay">
        <div className="max-w-2xl text-center mx-auto">
          <h2 className="text-white text-2xl sm:text-3xl xl:text-[48px] mb-6 font-semibold sm:leading-[56px]">
            Expanding AI-Powered Financial Analytics
          </h2>

          <div className="text-sm sm:text-base text-white/90">
            <p>
              Our investment strategy is designed to deliver a well-balanced and
              globally diversified portfolio that will maximize sustained
              long-term returns without incurring undue risk.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row gap-10 xl:gap-14 py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
        <div className="lg:w-3/5">
          <p className="text-black-8">
            We are offering an investment opportunity in an innovative AI
            healthcare startup that leverages cutting-edge artificial
            intelligence (AI) technology to transform patient care and medical
            diagnostics. The startup has developed proprietary AI algorithms
            capable of analyzing medical imaging data with unprecedented
            accuracy and efficiency.
          </p>

          <div>
            <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-8 border-b border-b-black-light py-5 md:pb-8 md:pt-6">
              <h3 className="flex-1 text-black-12 font-semibold">
                Potential for High Returns
              </h3>

              <div className="text-sm sm:text-base text-black-8 flex-1">
                <p>
                  Investors stand to benefit from the potential growth and
                  success of a pioneering AI healthcare startup in a high-demand
                  sector.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-8 border-b border-b-black-light py-5 md:pb-8 md:pt-6">
              <h3 className="flex-1 text-black-12 font-semibold">
                Technology Access
              </h3>

              <div className="text-sm sm:text-base text-black-8 flex-1">
                <p>
                  Gain early access to transformative AI technology that is
                  reshaping the future of medical diagnostics and healthcare
                  delivery.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-8 border-b border-b-black-light py-5 md:pb-8 md:pt-6">
              <h3 className="flex-1 text-black-12 font-semibold">
                Portfolio Diversification
              </h3>

              <div className="text-sm sm:text-base text-black-8 flex-1">
                <p>
                  Diversify investment portfolios with exposure to the
                  burgeoning healthcare AI market and innovative startups.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-8 border-b border-b-black-light py-5 md:pb-8 md:pt-6">
              <h3 className="flex-1 text-black-12 font-semibold">
                Impactful Investment
              </h3>

              <div className="text-sm sm:text-base text-black-8 flex-1">
                <p>
                  Support advancements in healthcare technology that have the
                  potential to improve patient outcomes, reduce healthcare
                  costs, and drive positive societal impact.
                </p>
              </div>
            </div>
          </div>

          <LinkButton
            buttonText="Become an Investor"
            href="/investors/login"
            aria-label="learn more about expansing AI powered financial analytics"
            className="bg-primary text-white hover:bg-primary-dark h-11 sm:h-14 text-sm sm:tex-base mt-10 w-fit"
          />
        </div>

        <div className="lg:w-1/3">
          <div className="bg-[#F5F5F5] p-10 rounded-sm">
            <h3 className="font-semibold sm:text-xl">Key Information</h3>
            <div className="mt-6">
              <h3 className="uppercase text-xs text-[#595959] font-semibold mb-2">
                target fundraise
              </h3>
              <strong className="text-sm sm:text-base">$3 million</strong>
            </div>

            <div className="mt-6">
              <h3 className="uppercase text-xs text-[#595959] font-semibold mb-2">
                minimun investment
              </h3>
              <strong className="text-sm sm:text-base">$10,000</strong>
            </div>

            <div className="mt-6">
              <h3 className="uppercase text-xs text-[#595959] font-semibold mb-2">
                investment type
              </h3>
              <strong className="text-sm sm:text-base">Equity</strong>
            </div>

            <div className="mt-6">
              <h3 className="uppercase text-xs text-[#595959] font-semibold mb-2">
                use of funds
              </h3>
              <strong className="text-sm sm:text-base">
                Closing of fundraising round by Q3 2024
              </strong>
            </div>

            <div className="mt-6">
              <h3 className="uppercase text-xs text-[#595959] font-semibold mb-2">
                Investment Timeline
              </h3>
              <strong className="text-sm sm:text-base">
                The funds will be used to scale operations, accelerate product
                development, and expand market reach.
              </strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
