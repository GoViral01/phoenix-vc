"use client";

import React from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { TJoinWaitlistSchema, joinWaitlistSchema } from "@/lib/types/type";
import { handleJoinWaitlist } from "../action";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";

const page = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<TJoinWaitlistSchema>({
    resolver: zodResolver(joinWaitlistSchema),
    mode: "onTouched",
  });

  const handleSubmitWaitlist: SubmitHandler<TJoinWaitlistSchema> = async (
    data
  ) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.set(key, value);
    });
    const response = await handleJoinWaitlist(formData);

    if (response?.error) {
      setError("root.serverError", {
        message: response.error,
      });
    }

    if (response.success) {
      reset();
      toast.success("Waitlist joined!");
    }
  };

  return (
    <section className="flex items-center min-h-[60vh]">
      <div className="w-1/2 h-[816px] hidden lg:block">
        <Image
          src="/aiFace.jpeg"
          alt=""
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-5 sm:px-10 w-full lg:w-1/2 max-w-xl mx-auto lg:m-0">
        <span className="uppercase text-black-light text-xs sm:text-sm animate-pulse">
          coming soon
        </span>
        <h2 className="text-black-12 text-xl sm:text-2xl xl:text-3xl mb-6 mt-8 md:mt-10 font-semibold sm:leading-[48px]">
          Startup Community
        </h2>

        <div className="text-sm sm:text-base text-black-8">
          <p>
            Join a robust AI community and access funding, knowledge, and
            networks for startup founders. Sign up now to leverage capital, gain
            a competitive edge, and forge valuable connections.
          </p>
        </div>

        <form
          aria-label="Form - Join waitlist"
          onSubmit={handleSubmit(handleSubmitWaitlist)}
          className="mt-11"
        >
          <div className="flex flex-wrap items-end gap-2">
            <div className="flex-1">
              <label htmlFor="email">
                Email address
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email here"
                  {...register("email")}
                  className="border rounded p-4 w-full mt-1"
                />
              </label>
            </div>
            <button
              type="submit"
              className="uppercase bg-primary text-white hover:bg-primary-dark rounded p-4 w-full sm:w-fit min-w-24 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ImSpinner9 className="animate-spin text-2xl inline-block mx-auto" />
              ) : (
                "notify me"
              )}
            </button>
          </div>
          {errors?.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default page;
