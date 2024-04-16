import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
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

      <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28 bg-[#F0F0F0]">
        <div className="max-w-2xl">
          <span className="uppercase text-black-light text-xs sm:text-sm">
            Our approach
          </span>
          <h2 className="text-black-12 text-2xl sm:text-3xl xl:text-[40px] mb-6 mt-8 md:mt-10 font-semibold sm:leading-[48px]">
            Empowering Innovation
          </h2>

          <div className="text-sm sm:text-base text-black-8">
            <p>
              In our approach, we prioritize collaboration, creativity, and
              cutting-edge technology to drive innovation in the field of
              artificial intelligence.We empower our community to push
              boundaries, solve complex problems, and shape the future of AI.
            </p>
          </div>
        </div>

        <div className="mt-20 xl:mt-32">
          <StepList listNumber="01" title="Initial Consultation" />
          <StepList listNumber="02" title="Pitch Preparation" />
          <StepList listNumber="03" title="Platform Registration" />
          <StepList listNumber="04" title="Investor Matching" />
          <StepList listNumber="05" title="Pitch Presentation" />
          <StepList listNumber="06" title="Due Diligence" />
          <StepList listNumber="07" title="Term Negotiation" />
          <StepList listNumber="08" title="Funding Agreement" />
          <StepList listNumber="09" title="Post-Investment Support" />
        </div>
      </section>
    </div>
  );
};

const StepList = ({
  listNumber,
  title,
}: {
  listNumber: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-8 border-b border-b-black-light py-5 md:py-8">
      <div className="flex gap-4 items-center sm:gap-8 flex-1">
        <span className="text-black-light text-xs sm:text-sm">
          {listNumber}
        </span>
        <h3 className="text-black-12 sm:text-xl lg:text-2xl font-semibold">
          {title}
        </h3>
      </div>

      <div className="text-sm sm:text-base text-black-8 flex-1">
        <p>
          The founder contacts Phoenix VC and schedules an initial consultation.
          During this meeting, they discuss their startup idea, goals, and
          funding needs.
        </p>
      </div>
    </div>
  );
};

export default page;
