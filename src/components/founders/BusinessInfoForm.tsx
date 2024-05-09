import { TFounderRegistrationSchema } from "@/lib/types/type";
import React from "react";
import { useFormContext } from "react-hook-form";

const BusinessInfoForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFounderRegistrationSchema>();

  return (
    <div aria-label="investor registration form">
      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="startupName">
          Startup Name
        </label>
        <input
          type="text"
          id="startupName"
          placeholder="Enter your startup name"
          {...register("startup_name")}
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
        {errors?.startup_name && (
          <p className="text-sm text-red-600 mt-1">
            {errors.startup_name.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="website">
          Website
        </label>
        <input
          type="text"
          id="website"
          placeholder="https://www.example.com"
          {...register("website")}
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
        {errors?.website && (
          <p className="text-sm text-red-600 mt-1">{errors.website.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="businessOverview">
          Business Overview
        </label>
        <textarea
          id="businessOverview"
          placeholder="Describe what your business does in two paragraphs"
          {...register("business_overview")}
          className="w-full rounded border border-[#D1D5DB] p-4 min-h-52 resize-none hover:resize-y"
        />
        {errors?.business_overview && (
          <p className="text-sm text-red-600 mt-1">
            {errors.business_overview.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="elevatorPitch">
          Elevator Pitch
        </label>
        <textarea
          id="elevatorPitch"
          placeholder="provide your elevator pitch between 50 to 80 characters long"
          {...register("elevator_pitch")}
          className="w-full rounded border border-[#D1D5DB] p-4 min-h-52 resize-none hover:resize-y"
        />
        {errors?.elevator_pitch && (
          <p className="text-sm text-red-600 mt-1">
            {errors.elevator_pitch.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="BlinkedIn">
          LinkedIn
        </label>
        <input
          type="text"
          id="BlinkedIn"
          placeholder="https://www.linkedin.com/my-profile"
          {...register("business_linkedIn")}
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
        {errors?.business_linkedIn && (
          <p className="text-sm text-red-600 mt-1">
            {errors.business_linkedIn.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="Btwitter">
          Twitter (optional)
        </label>
        <input
          type="text"
          id="Btwitter"
          placeholder="https://www.twitter.com/my-profile"
          {...register("business_twitter")}
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
        {errors?.business_twitter && (
          <p className="text-sm text-red-600 mt-1">
            {errors.business_twitter.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="Binstagram">
          Instagram (Optional)
        </label>
        <input
          type="text"
          id="Binstagram"
          placeholder="https://www.instagram.com/my-profile"
          {...register("business_instagram")}
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
        {errors?.business_instagram && (
          <p className="text-sm text-red-600 mt-1">
            {errors.business_instagram.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default BusinessInfoForm;
