import React, { useMemo, useState } from "react";
import {
  TFounderRegistrationSchema,
  founderRegistrationSchema,
} from "@/lib/types/type";
import { useForm, useFormContext } from "react-hook-form";
import debounce from "lodash.debounce";
import { getRecordByEmail } from "@/app/action";
import FormNavigation from "@/app/founders/register/FormNavigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormLabel from "../shared/FormLabel";

interface Props {
  onFinish: (data: ContactFormSchema) => void;
}

export const contactFormSchema = founderRegistrationSchema.pick({
  first_name: true,
  last_name: true,
  email: true,
  phone_number: true,
  location: true,
  linkedIn: true,
  twitter: true,
  instagram: true,
  facebook: true,
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

const ContactForm = ({ onFinish }: Props) => {
  const {
    getValues,
    formState: { errors: mainFormError },
  } = useFormContext<TFounderRegistrationSchema>();
  const {
    register,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors, isValid: isFormValid },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: async () => getValues(),
    shouldFocusError: true,
    mode: "onTouched",
    errors: mainFormError,
  });
  const [isValidatingEmail, setIsValidatingEmail] = useState(false);

  const debouncedOnEmailChanaged = useMemo(
    () =>
      debounce(async (email: string) => {
        const { exist, message } = await getRecordByEmail(email).catch(() => ({
          exist: false,
          message: "Failed to validate email",
        }));
        if (exist) {
          setError("root.emailAlreadyExists", { message });
        }
        setIsValidatingEmail(false);
      }, 1000),
    [setError]
  );

  const onSubmit = handleSubmit(onFinish);

  return (
    <div>
      <h2 className="text-black-12 mb-6 md:text-xl font-semibold">
        Contact Details
      </h2>
      <form onSubmit={onSubmit} aria-label="founders registration form">
        <div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <FormLabel
                inputId="firstName"
                labelText="First name"
                required={true}
              />
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
              <FormLabel
                inputId="lastName"
                labelText="Last name"
                required={true}
              />
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
            <FormLabel inputId="email" labelText="Email" required={true} />
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              {...register("email", {
                onChange(event) {
                  setIsValidatingEmail(true);
                  clearErrors("root.emailAlreadyExists");
                  debouncedOnEmailChanaged(event.target.value);
                },
              })}
              className="w-full rounded border border-[#D1D5DB] p-4"
            />
            {(errors?.email || errors.root?.emailAlreadyExists) && (
              <p className="text-sm text-red-600 mt-1">
                {errors.email?.message ||
                  errors.root?.emailAlreadyExists.message}
              </p>
            )}

            {!errors.email &&
              !errors.root?.emailAlreadyExists &&
              isValidatingEmail && (
                <p className="text-sm text-green-600 mt-1">Validating</p>
              )}
          </div>

          <div className="mb-6">
            <FormLabel
              inputId="phoneNumber"
              labelText="Phone number"
              required={true}
            />
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
            <FormLabel
              inputId="location"
              labelText="Location"
              required={true}
            />
            <input
              type="text"
              id="location"
              placeholder="Ikeja, Lagos"
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
            <FormLabel
              inputId="linkedIn"
              labelText="LinkedIn"
              required={true}
            />
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
              <p className="text-sm text-red-600 mt-1">
                {errors.twitter.message}
              </p>
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
              <p className="text-sm text-red-600 mt-1">
                {errors.facebook.message}
              </p>
            )}
          </div>
        </div>

        <FormNavigation
          hasPrev={false}
          hasNext={true}
          nextBtnProps={{
            disabled: !isFormValid || isValidatingEmail,
            type: "submit",
          }}
        />
      </form>
    </div>
  );
};

export default ContactForm;
