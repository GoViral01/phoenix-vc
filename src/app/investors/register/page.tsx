"use client";

import React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";
import { TInvestorsLoginSchema, investorsLoginSchema } from "@/lib/types/type";
import { handleRegisterInvestor } from "@/app/action";

const InvestorsLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<TInvestorsLoginSchema>({
    resolver: zodResolver(investorsLoginSchema),
    mode: "onTouched",
  });

  const handleSubmitLogin: SubmitHandler<TInvestorsLoginSchema> = async (
    data
  ) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.set(key, value);
    });
    const response = await handleRegisterInvestor(formData);

    if (response?.errorFields) {
      Object.entries(response.errorFields).forEach(([fieldName, errors]) =>
        setError(fieldName as keyof TInvestorsLoginSchema, {
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
      toast.success("Registration successfil");
    }
  };

  return (
    <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
      <div className="lg:w-3/5 mx-auto">
        <div className="text-center">
          <h1 className="text-black-12 text-2xl sm:text-3xl xl:text-[48px] mb-6 font-semibold sm:leading-[48px]">
            Investor Registration
          </h1>
        </div>

        <div className="rounded-lg text-center text-white  p-4 my-10 md:my-16 bg-[#F39C12]">
          <p>
            Don't invest unless you're prepared to lose all the money you
            invest. This is a high risk investment and you are unlikely to be
            protected if something goes wrong.{" "}
            <Link href="/risk-policy" className="font-semibold underline">
              Take 2 minutes to learn more.
            </Link>
          </p>
        </div>

        <form
          aria-label="investor registration form"
          onSubmit={handleSubmit(handleSubmitLogin)}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="font-medium mb-1" htmlFor="firstName">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                {...register("first_name")}
                className="w-full rounded border border-[#D1D5DB] p-4"
              />
              {errors?.first_name && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.first_name.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-medium mb-1" htmlFor="lastName">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                {...register("last_name")}
                className="w-full rounded border border-[#D1D5DB] p-4"
              />
              {errors?.last_name && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.last_name.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                {...register("email")}
                className="w-full rounded border border-[#D1D5DB] p-4"
              />
              {errors?.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-medium mb-1" htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                placeholder="Enter your phone number"
                {...register("contact_number")}
                className="w-full rounded border border-[#D1D5DB] p-4"
              />
              {errors?.contact_number && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.contact_number.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="font-medium mb-1" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              {...register("address")}
              className="w-full rounded border border-[#D1D5DB] p-4"
            />
            {errors?.address && (
              <p className="text-sm text-red-600 mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="font-medium mb-1" htmlFor="linkedIn">
              LinkedIn
            </label>
            <input
              type="text"
              id="linkedIn"
              placeholder="https://www.linkedin.com/my-profile"
              {...register("linkedIn")}
              className="w-full rounded border border-[#D1D5DB] p-4"
            />
            {errors?.linkedIn && (
              <p className="text-sm text-red-600 mt-1">
                {errors.linkedIn.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="font-medium mb-1" htmlFor="message">
              Tell us about your background
            </label>
            <textarea
              id="message"
              placeholder="Please tell us a bit about your background"
              {...register("background")}
              className="w-full rounded border border-[#D1D5DB] p-4 min-h-52 resize-none hover:resize-y"
            />
            {errors?.background && (
              <p className="text-sm text-red-600 mt-1">
                {errors.background.message}
              </p>
            )}
          </div>

          <div className="mt-6">
            <h2 className="font-semibold md:text-2xl xl:text-3xl mb-8">
              Agreements
            </h2>

            <div className="mb-6">
              <input
                type="checkbox"
                id="tosCheckbox"
                {...register("tos")}
                className="mr-2"
                value="true"
              />
              <label htmlFor="tosCheckbox">
                I have read and agree to the terms and conditions outlined in
                the offering memorandum of Phoenix Venture Capital Ltd.
              </label>
              {errors?.tos && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.tos.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <input
                type="checkbox"
                id="tosConfirmCheckbox"
                {...register("riskPolicy")}
                className="mr-2"
                value="true"
              />
              <label htmlFor="tosConfirmCheckbox">
                I understand that investing in early-stage companies carries
                inherent risks, and I am prepared to bear such risks.
              </label>
              {errors?.riskPolicy && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.riskPolicy.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <input
                type="checkbox"
                id="legal"
                {...register("legal")}
                className="mr-2"
                value="true"
              />
              <label htmlFor="legal">
                I acknowledge that I have consulted with legal and financial
                advisors regarding this investment opportunity.
              </label>
              {errors?.legal && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.legal.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-primary min-w-36 text-center hover:bg-primary-dark font-semibold text-white uppercase rounded px-4 h-11 md:h-[52px] disabled:cursor-not-allowed disabled:opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ImSpinner9 className="animate-spin text-2xl block mx-auto" />
              ) : (
                "Become an investor"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InvestorsLogin;
