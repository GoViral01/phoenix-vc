import React, { useMemo, useState } from "react";
import { TFounderRegistrationSchema } from "@/lib/types/type";
import { useFormContext } from "react-hook-form";
import debounce from "lodash.debounce";
import { getRecordByEmail } from "@/app/action";

const ContactForm = () => {
  const {
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<TFounderRegistrationSchema>();

  const debouncedOnEmailChanaged = useMemo(
    () =>
      debounce(async (email: string) => {
        const { exist, message } = await getRecordByEmail(email);
        if (exist) {
          setError("root.emailAlreadyExists", { message });
        }
        clearErrors("root.isValidatingEmail");
      }, 1000),
    [setError, clearErrors]
  );

  return (
    <div aria-label="founders registration form">
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
          {...register("email", {
            onChange(event) {
              setError("root.isValidatingEmail", {
                message: "Validating email",
              });
              clearErrors("root.emailAlreadyExists");
              debouncedOnEmailChanaged(event.target.value);
            },
          })}
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
        {(errors?.email || errors.root?.emailAlreadyExists) && (
          <p className="text-sm text-red-600 mt-1">
            {errors.email?.message || errors.root?.emailAlreadyExists.message}
          </p>
        )}

        {!errors.email &&
          !errors.root?.emailAlreadyExists &&
          errors.root?.isValidatingEmail && (
            <p className="text-sm text-green-600 mt-1">Validating</p>
          )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="phoneNumber">
          Phone number
        </label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="+2348123424823"
          {...register("phone_number")}
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
        {errors?.phone_number && (
          <p className="text-sm text-red-600 mt-1">
            {errors.phone_number.message}
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
          placeholder="Ikeja, Lagos"
          {...register("location")}
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
        {errors?.location && (
          <p className="text-sm text-red-600 mt-1">{errors.location.message}</p>
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
          <p className="text-sm text-red-600 mt-1">{errors.linkedIn.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="twitter">
          Twitter (optional)
        </label>
        <input
          type="text"
          id="twitter"
          placeholder="https://www.twitter.com/my-profile"
          {...register("twitter")}
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
        {errors?.twitter && (
          <p className="text-sm text-red-600 mt-1">{errors.twitter.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="instagram">
          Instagram (Optional)
        </label>
        <input
          type="text"
          id="instagram"
          placeholder="https://www.instagram.com/my-profile"
          {...register("instagram")}
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
        {errors?.instagram && (
          <p className="text-sm text-red-600 mt-1">
            {errors.instagram.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="facebook">
          Facebook (Optional)
        </label>
        <input
          type="text"
          id="facebook"
          placeholder="https://www.facebook.com/my-profile"
          {...register("facebook")}
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
        {errors?.facebook && (
          <p className="text-sm text-red-600 mt-1">{errors.facebook.message}</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
