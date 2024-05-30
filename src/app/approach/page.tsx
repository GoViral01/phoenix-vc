import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28 bg-[#FCFCFC]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-black-12 text-2xl sm:text-4xl  xl:text-5xl  mb-6 font-semibold sm:leading-[140%] max-w-3xl">
            Empowering AI innovation through collaborative support and ethical
            guidance
          </h2>

          <div className="max-w-lg">
            <Image
              src="/looper.png"
              alt=""
              width={800}
              height={800}
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
        <div className="max-w-2xl">
          <span className="uppercase text-black-light text-xs sm:text-sm">
            Our approach
          </span>
          <h2 className="text-black-12 text-2xl sm:text-3xl xl:text-[40px] mb-6 mt-8 md:mt-10 font-semibold sm:leading-[48px]">
            Empowering Innovation
          </h2>

          <div className="text-sm sm:text-base text-black-8">
            <p>
              Welcome to the guide for entrepreneurs seeking funding provided by
              Phoenix Ventures Capital Ltd. This document outlines the
              step-by-step process for engaging with our firm to secure
              investment for your business. We look forward to the opportunity
              to collaborate and support your growth journey.
            </p>
          </div>
        </div>

        <div className="mt-20 xl:mt-32">
          {APPROACHES.map((approach) => (
            <div
              key={approach.step}
              className="flex flex-col md:flex-row justify-between gap-5 md:gap-8 border-b border-b-black-light py-5 md:py-8"
            >
              <div className="flex gap-4 items-center md:gap-8 flex-1">
                <span className="text-black-light text-xs md:text-sm">
                  {approach.step}
                </span>
                <h3 className="text-black-12 md:text-xl lg:text-2xl font-semibold">
                  {approach.title}
                </h3>
              </div>

              <div className="text-sm md:text-base text-black-8 flex-1">
                <p>{approach.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const APPROACHES = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "Begin by reaching out to Phoenix Ventures Capital Ltd to schedule an initial consultation. During this meeting, we'll discuss your business, funding needs, and how we can potentially partner together.",
  },
  {
    step: "02",
    title: "Pitch Preparation",
    desc: "Craft a compelling pitch deck highlighting key aspects of your business, including market opportunity, competitive advantage, team expertise, and financial projections. Your pitch should resonate with our investment focus and demonstrate the potential for growth and returns.",
  },
  {
    step: "03",
    title: "Platform Registration",
    desc: "Register on Phoenix Ventures Capital Ltd's online platform to access our funding application process. Complete the necessary forms and provide accurate information about your company and funding requirements. Upload relevant documents such as business plans and financial statements for review.",
  },
  {
    step: "04",
    title: "Investor Matching",
    desc: "Once registered, your company will be matched with potential investors within our network. Expect to receive feedback and inquiries from interested investors and be prepared to engage in discussions and negotiations.",
  },
  {
    step: "05",
    title: "Second Pitch Presentation",
    desc: "Upon investor interest, schedule another pitch presentation specifically for potential investors referred by Phoenix Ventures Capital Ltd. Tailor your presentation to address investor-specific questions and concerns, highlighting aspects that align with their investment preferences.",
  },
  {
    step: "06",
    title: "Due Diligence",
    desc: "Undergo due diligence processes to validate your company's claims, financials, and legal status. Work closely with our due diligence team to provide requested documents and facilitate meetings as needed.",
  },
  {
    step: "07",
    title: "Term Negotiation",
    desc: "Engage in negotiations with potential investors regarding investment terms, including valuation, equity stake, governance rights, and exit strategies. Collaborate with our investment professionals to reach mutually beneficial terms that support your company's growth objectives.",
  },
  {
    step: "08",
    title: "Funding Agreement",
    desc: "Finalize the funding agreement outlining the terms and conditions of the investment. Ensure all parties understand and agree to the terms before proceeding with the investment transaction.",
  },
  {
    step: "09",
    title: "Post-Investment Support",
    desc: "Receive funding from Phoenix Ventures Capital Ltd and begin executing your growth plans. Maintain regular communication with our investment team, providing updates on business performance and leveraging our network and resources for additional support and guidance.",
  },
];
export default page;
