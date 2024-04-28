"use client";

import React, { useState } from "react";
import BusinessInfoForm from "@/components/founders/BusinessInfoForm";
import ContactForm from "@/components/founders/ContactForm";
import InvestmentDetailsForm from "@/components/founders/InvestmentDetailsForm";
import { twMerge } from "tailwind-merge";

const FounderRegister = () => {
  const steps: any[] = ["Contact Info", "Business Info", "Investment Details"];
  const [activeStep, setAciveStep] = useState<number>(1);

  return (
    <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
      <div className="lg:w-3/5 mx-auto">
        <div className="text-center">
          <h1 className="text-black-12 text-2xl sm:text-3xl xl:text-[48px] mb-6 font-semibold sm:leading-[48px]">
            Startup Registration
          </h1>
          <div className="text-sm sm:text-base text-black-8">
            <p>
              Lorem ipsum dolor sit amet consectetur. Est enim quis pretium
              consectetur libero lacus nam morbi. Dignissim fringilla quisque
              purus egestas in nibh nunc sociis. Lacus hendrerit tortor est sed
              amet.
            </p>
          </div>
        </div>

        <div className="text-center p-4 my-10 md:my-16 flex items-center justify-center gap-4">
          {steps.map((_, i) => (
            <div
              key={i}
              className={twMerge(
                "stepper-item flex  gap-4 items-center  relative stepper_divider",
                activeStep > i + 1 && "after:!bg-primary"
              )}
            >
              <div
                className={twMerge(
                  "w-8 sm:w-10 h-8 sm:h-10 text-sm sm:text-base shrink-0 bg-[#EAECED] rounded-full flex items-center justify-center relative",
                  activeStep >= i + 1 && "bg-primary text-white"
                )}
              >
                {i + 1}
              </div>
            </div>
          ))}
        </div>

        {activeStep === 1 && <ContactForm />}
        {activeStep === 2 && <BusinessInfoForm />}
        {activeStep === 3 && <InvestmentDetailsForm />}

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
          {activeStep > 1 && (
            <button
              onClick={() => setAciveStep((prev) => prev - 1)}
              className="border border-black-12 rounded uppercase w-full sm:w-fit py-4 text-sm sm:text-base sm:px-8 font-semibold hover:bg-black-12 hover:text-white"
            >
              Back
            </button>
          )}
          <button
            onClick={() => setAciveStep((prev) => prev + 1)}
            disabled={activeStep > steps.length - 1}
            className={twMerge(
              "bg-black-12 hover:bg-black-8 text-white rounded uppercase w-full sm:w-fit py-4 text-sm sm:text-base sm:px-8 font-semibold",
              activeStep === steps.length &&
                "bg-primary hover:bg-primary-dark text-white"
            )}
          >
            {activeStep === steps.length ? "Apply for funds" : "Next"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FounderRegister;
