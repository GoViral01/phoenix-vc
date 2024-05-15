"use client";

import { useCallback, useEffect, useState } from "react";
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
import SuccessModal from "@/components/founders/SuccessModal";
import { handleRegisterFounder } from "@/app/action";

const FounderRegisterContainer = () => {
  const steps: any[] = ["Contact Info", "Business Info", "Investment Details"];
  const [activeStep, setAciveStep] = useState<number>(1);
  const [completedStep, setCompletedStep] = useState<number>(0);

  const form = useForm<TFounderRegistrationSchema>({
    resolver: zodResolver(founderRegistrationSchema),
  });
  const { handleSubmit, reset, formState, setError, setValue } = form;

  useEffect(() => {
    window.document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeStep]);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.set(key, value);
    });
    const response = await handleRegisterFounder(formData);

    if (response?.errorFields) {
      Object.entries(response.errorFields).forEach(([fieldName, errors]) =>
        setError(fieldName as keyof TFounderRegistrationSchema, {
          message: errors?.[0],
        })
      );
    }

    if (response?.error) {
      setError("root.serverError", {
        message: response.error,
      });
    }

    if (response.success) {
      reset();
      setShowSuccessModal(true);
      setCompletedStep(1);
      setAciveStep(1);
    }
  });

  const onStepFinish = useCallback(
    (data: Partial<TFounderRegistrationSchema>) => {
      Object.entries(data).forEach(([key, value]) => {
        setValue(key as keyof TFounderRegistrationSchema, value);
      });
    },
    [setValue]
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
                "stepper-item flex  gap-4 items-center  relative stepper_divider disabled:cursor-not-allowed",
                activeStep > i + 1 && "after:!bg-primary"
              )}
              disabled={i + 1 > completedStep}
              onClick={async () => {
                const step = i + 1;
                if (step <= completedStep) {
                  setAciveStep(step);
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
        <FormProvider {...form}>
          {formState.errors.root?.serverError && (
            <p className="bg-red-700 text-white p-5 rounded-lg mb-5 text-sm">
              {formState.errors.root.serverError.message}
            </p>
          )}

          {activeStep === 1 && (
            <ContactForm
              onFinish={(data) => {
                onStepFinish(data);
                setAciveStep(2);
                setCompletedStep(1);
              }}
            />
          )}
          {activeStep === 2 && (
            <BusinessInfoForm
              onFinish={(data) => {
                onStepFinish(data);
                setAciveStep(3);
                setCompletedStep(2);
              }}
              onBack={() => setAciveStep(1)}
            />
          )}
          {activeStep === 3 && (
            <InvestmentDetailsForm
              onBack={() => setAciveStep(2)}
              onFinish={async (data) => {
                setCompletedStep(3);
                onStepFinish(data);
                await onSubmit();
                form.reset();
              }}
            />
          )}
        </FormProvider>

        <SuccessModal
          showModal={showSuccessModal}
          setShowModal={setShowSuccessModal}
        />
      </div>
    </section>
  );
};

export default FounderRegisterContainer;
