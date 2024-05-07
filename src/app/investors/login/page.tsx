"use client";

import React, { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";

const investorsLoginSchema = z.object({
  first_name: z
    .string()
    .min(3, { message: "First name must be at least 3 characters." }),
  last_name: z
    .string({ required_error: "Last name is required" })
    .min(3, { message: "Last name must be at least 3 characters." }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email address." }),
  location: z.string().min(1, { message: "Location is required" }),
  tos: z.boolean().refine((val) => val === true, {
    message: "Please confirm you have read the Terms and Conditions",
  }),
  riskPolicy: z.boolean().refine((val) => val === true, {
    message: "Please confirm you have read the risk warning",
  }),

  linkedIn: z.string().optional(),
  background: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, { message: "Your story must be at least 20 characters long." }),
});

type TInvestorsLoginSchema = z.infer<typeof investorsLoginSchema>;

const InvestorsLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TInvestorsLoginSchema>({
    resolver: zodResolver(investorsLoginSchema),
    mode: "onChange",
  });

  const handleSubmitLogin: SubmitHandler<TInvestorsLoginSchema> = (data) => {
    fetch("https://api.apispreadsheets.com/data/KVbgNvV9JGxX3lj1/", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 201) {
        // SUCCESS
        console.log(isSubmitting);
        toast.success("Registration sucessful!");
      } else {
        // ERROR
        console.log(isSubmitting);

        toast.error("Something went wrong! Please try again");
      }
    });
  };

  return (
    <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
      <div className="lg:w-3/5 mx-auto">
        <div className="text-center">
          <h1 className="text-black-12 text-2xl sm:text-3xl xl:text-[48px] mb-6 font-semibold sm:leading-[48px]">
            Investor Registration
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

        <div className="rounded-lg text-center text-white  p-4 my-10 md:my-16 bg-[#F39C12]">
          <p>
            Don't invest unless you're prepared to lose all the money you
            invest. This is a high risk investment and you are unlikely to be
            protected if something goes wrong.{" "}
            <Link href="/investors/login" className="font-semibold underline">
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

          <div className="mb-6">
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

          <div className="mb-6">
            <label className="font-medium mb-1" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter your location"
              {...register("location")}
              className="w-full rounded border border-[#D1D5DB] p-4"
            />
            {errors?.location && (
              <p className="text-sm text-red-600 mt-1">
                {errors.location.message}
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
              className="w-full rounded border border-[#D1D5DB] p-4 resize-none hover:resize-y"
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
              />
              <label htmlFor="tosCheckbox">
                I confirm that your data is collected and stored (for more
                details see our Privacy Policy and Terms of Service)
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
              />
              <label htmlFor="tosConfirmCheckbox">
                I confirm that I have read the risk warning above
              </label>
              {errors?.riskPolicy && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.riskPolicy.message}
                </p>
              )}
            </div>

            <div className="text-xs text-black-8 mb-8">
              <p>
                Lorem ipsum dolor sit amet consectetur. Mauris cursus nisi eget
                tellus sagittis. Ultrices tristique eget velit ipsum lacus
                cursus adipiscing sed. Malesuada et commodo velit donec vitae
                ligula. Vel feugiat in pellentesque lacinia sem sagittis tempus.
                Viverra arcu consectetur sed risus tempor odio risus viverra
                aliquam. Vel pretium ut morbi maecenas odio condimentum purus
                ut. Cras et condimentum morbi malesuada. Vel nibh blandit
                scelerisque ut etiam egestas lorem tincidunt.
              </p>
            </div>

            <button
              type="submit"
              className="bg-primary min-w-36 text-center hover:bg-primary-dark font-semibold text-white uppercase rounded px-4 h-11 md:h-[52px] disabled:cursor-not-allowed disabled:opacity-50"
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
