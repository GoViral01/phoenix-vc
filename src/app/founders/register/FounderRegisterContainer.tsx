"use client";

import { useState } from "react";
import BusinessInfoForm from "@/components/founders/BusinessInfoForm";
import ContactForm from "@/components/founders/ContactForm";
import InvestmentDetailsForm from "@/components/founders/InvestmentDetailsForm";
import { twMerge } from "tailwind-merge";
import { FormProvider, useForm } from "react-hook-form";
import {
  TFounderRegistrationSchema,
  founderRegistrationSchema,
} from "@/lib/types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImSpinner9 } from "react-icons/im";
import SuccessModal from "@/components/founders/SuccessModal";
import { handleRegisterFounder } from "@/app/action";
import clsx from "clsx";

const stepFields: Record<number, (keyof TFounderRegistrationSchema)[]> = {
  1: [
    "first_name",
    "last_name",
    "email",
    "phone_number",
    "location",
    "linkedIn",
    "instagram",
    "twitter",
    "facebook",
  ],
  2: [
    "startup_name",
    "website",
    "business_overview",
    "elevator_pitch",
    "business_linkedIn",
    "business_instagram",
    "business_twitter",
  ],
  3: [
    "pitch_deck",
    "niche",
    "business_stage",
    "investment_sought",
    "premoney_valuation",
    "other_niche",
  ],
};

const FounderRegisterContainer = () => {
  const steps: any[] = ["Contact Info", "Business Info", "Investment Details"];
  const [activeStep, setAciveStep] = useState<number>(1);

  const form = useForm<TFounderRegistrationSchema>({
    resolver: zodResolver(founderRegistrationSchema),
    shouldFocusError: true,
    mode: "onTouched",
  });

  const { watch, handleSubmit, reset, formState, trigger, setError } = form;

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmitFounderRegistration = handleSubmit(
    async ({ tos: _tos, ...data }) => {
      try {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          formData.set(key, value);
        });

        const response = await handleRegisterFounder(formData);

        if (response?.fields) {
          Object.entries(response.fields).forEach(([fieldName, errors]) =>
            setError(fieldName as keyof TFounderRegistrationSchema, {
              message: errors?.[0],
            })
          );
        }

        if (response?.error) {
          setError("root.serverError", {
            message: response.error,
          });
        } else {
          setShowSuccessModal(true);
          reset();
        }

        // setTimeout(() => window.location.replace("/"), 3000);
      } catch (err) {
        console.log(err);
      }
    }
  );

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
            <button
              key={i}
              className={twMerge(
                "stepper-item flex  gap-4 items-center  relative stepper_divider",
                activeStep > i + 1 && "after:!bg-primary"
              )}
              onClick={async () => {
                const isStepValid = await trigger(stepFields[activeStep], {
                  shouldFocus: true,
                });
                if (isStepValid || activeStep > i + 1) {
                  setAciveStep(i + 1);
                }
              }}
            >
              <span
                className={twMerge(
                  "w-8 sm:w-10 h-8 sm:h-10 text-sm sm:text-base shrink-0 bg-[#EAECED] rounded-full flex items-center justify-center relative",
                  activeStep >= i + 1 && "bg-primary text-white"
                )}
              >
                {i + 1}
              </span>
            </button>
          ))}
        </div>

        <form method="POST" onSubmit={handleSubmitFounderRegistration}>
          {formState.errors.root?.serverError && (
            <p className="bg-red-700 text-white p-5 rounded-lg mb-5 text-sm">
              {formState.errors.root.serverError.message}
            </p>
          )}
          <FormProvider {...form}>
            {activeStep === 1 && <ContactForm />}
            {activeStep === 2 && <BusinessInfoForm />}
            {activeStep === 3 && <InvestmentDetailsForm />}
          </FormProvider>
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
              type={activeStep === steps.length ? "submit" : "button"}
              onClick={async () => {
                const isStepValid = await trigger(stepFields[activeStep]);
                if (
                  isStepValid &&
                  !formState.errors.root?.isValidatingEmail &&
                  !formState.errors.root?.emailAlreadyExists
                ) {
                  activeStep < steps.length && setAciveStep((prev) => prev + 1);
                }
              }}
              disabled={formState.isSubmitting}
              className={clsx(
                "bg-black-12 hover:bg-black-8 text-white rounded uppercase w-full sm:w-fit py-4 text-sm sm:text-base sm:px-8 font-semibold",
                activeStep === steps.length &&
                  "bg-primary hover:bg-primary-dark text-white rounded uppercase w-full sm:w-fit py-4 text-sm sm:text-base sm:px-8 font-semibold disabled:cursor-not-allowed disabled:opacity-90"
              )}
            >
              {formState.isSubmitting && (
                <ImSpinner9 className="animate-spin text-2xl block mx-auto" />
              )}
              {activeStep === steps.length ? "Apply for funds" : "Next"}
            </button>

            <SuccessModal
              showModal={showSuccessModal}
              setShowModal={setShowSuccessModal}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default FounderRegisterContainer;
