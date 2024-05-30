import Image from "next/image";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import LinkButton from "../shared/Button";

const Founders = () => {
  return (
    <section className="bg-darkBg">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
          <span className="uppercase text-black-light text-xs sm:text-sm">
            for founders
          </span>
          <h2 className="text-white text-2xl sm:text-3xl xl:text-[40px] mt-5 md:mt-10 font-semibold sm:leading-[48px] mb-6">
            Gain Access to Funding Knowledge and Networks
          </h2>
          <p className="text-sm sm:text-base text-black-light">
            At Phoenix Venture Capital LTD, we understand that each client's
            investment journey is unique. That's why we've developed a
            streamlined client engagement process to ensure a seamless
            experience from initial consultation to investment execution.
          </p>

          <div className="mt-10 md:mt-16 text-[#D9D9D9] text-sm sm:text-base">
            <ul className="list-none">
              <li className="flex items-center gap-2 mb-6">
                <FaRegCircleCheck />
                Expertise in key industries
              </li>

              <li className="flex items-center gap-2 mb-6">
                <FaRegCircleCheck />
                Strategic Guidance
              </li>

              <li className="flex items-center gap-2 mb-6">
                <FaRegCircleCheck />
                Thorough Due Diligence
              </li>

              <li className="flex items-center gap-2 mb-6">
                <FaRegCircleCheck />
                Diversity and Inclusion
              </li>

              <li className="flex items-center gap-2 mb-6">
                <FaRegCircleCheck />
                Post-fund Support
              </li>
            </ul>
          </div>

          <div className="mt-10 sm:mt-16">
            <LinkButton
              buttonText="Apply for Fund"
              href="/founders/register"
              className="bg-primary w-fit hover:opacity-80 text-white h-11 md:h-14"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 shrink-0 self-stretch">
          <Image
            src="/foundersCover.jpeg"
            alt=""
            width={800}
            height={800}
            fetchPriority="high"
            className="object-cover object-center w-full h-full max-h-[925px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Founders;
