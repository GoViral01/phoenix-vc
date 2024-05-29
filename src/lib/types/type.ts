import { z } from "zod";
import isMobilePhone from "validator/lib/isMobilePhone";
import isURL from "validator/lib/isURL";

const MAX_FILE_SIZE = 1024 * 1024 * 100;
const ACCEPTED_IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
];

export const founderRegistrationSchema = z.object({
  first_name: z
    .string()
    .min(3, { message: "First name must be at least 3 characters." }),
  last_name: z
    .string({ required_error: "Last name is required" })
    .min(3, { message: "Last name must be at least 3 characters." }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email address." }),
  phone_number: z.string().refine((value) => isMobilePhone(value), {
    message: "Please enter a valid phone number",
  }),
  location: z.string().min(1, { message: "Location is required" }),
  linkedIn: z
    .string()
    .min(1, { message: "LinkedIn is required" })
    .refine((url) => isURL(url, { require_protocol: false }), "Invalid url")
    .refine(
      (url) => /(https?:\/\/)?(.*?\.)?linkedin\.com\/in\/[\w-_]+\/?$/,
      "Invalid linkedin profile url"
    ),
  twitter: z
    .string()
    .refine(
      (url) => (!url ? true : isURL(url, { require_protocol: false })),
      "Invalid url"
    )
    .refine(
      (url) =>
        !url
          ? true
          : /(https?:\/\/)?(.*?\.)?twitter\.com\/[\w-_]+\/?$/.test(url),
      "Invalid twitter profile url"
    )
    .optional(),
  instagram: z
    .string()
    .refine(
      (url) => (!url ? true : isURL(url, { require_protocol: false })),
      "Invalid url"
    )
    .refine(
      (url) =>
        !url
          ? true
          : /(https?:\/\/)?(.*?\.)?instagram\.com\/[\w-_]+\/?$/.test(url),
      "Invalid instagram profile url"
    )
    .optional(),
  facebook: z
    .string()
    .refine(
      (url) => (!url ? true : isURL(url, { require_protocol: false })),
      "Invalid url"
    )
    .refine(
      (url) =>
        !url
          ? true
          : /(https?:\/\/)?(.*?\.)?facebook\.com\/[\w-_]+\/?$/.test(url),
      "Invalid facebook profile url"
    )
    .optional(),
  startup_name: z
    .string({ required_error: "Startup name is required" })
    .min(1, { message: "Startup name is required" }),
  website: z
    .string({ required_error: "Website is required" })
    .min(1, { message: "Website is required" })
    .url({ message: "Enter a valid URL" }),
  business_overview: z
    .string({ required_error: "Business overview is required" })
    .min(10, {
      message: "Business overview must be at least 10 characters long",
    }),
  elevator_pitch: z
    .string({ required_error: "Elevation pitch is required" })
    .min(10, {
      message: "Elevator pitch must be at least 10 characters long",
    })
    .max(80, { message: "Charaters cannot exceed 80" }),
  business_linkedIn: z
    .string()
    .min(1, { message: "LinkedIn URL is required" })
    .refine(
      (url) => (!url ? true : isURL(url, { require_protocol: false })),
      "Invalid url"
    )
    .refine(
      (url) =>
        !url ? true : /(https?:\/\/)?(.*?\.)?linkedin\.com\/in\/[\w-_]+\/?$/,
      "Invalid linkedin profile url"
    ),
  business_twitter: z
    .string()
    .refine(
      (url) => (!url ? true : isURL(url, { require_protocol: false })),
      "Invalid url"
    )
    .refine(
      (url) =>
        !url
          ? true
          : /(https?:\/\/)?(.*?\.)?twitter\.com\/[\w-_]+\/?$/.test(url),
      "Invalid twitter profile url"
    )
    .optional(),
  business_instagram: z
    .string()
    .refine(
      (url) => (!url ? true : isURL(url, { require_protocol: false })),
      "Invalid url"
    )
    .refine(
      (url) =>
        !url
          ? true
          : /(https?:\/\/)?(.*?\.)?instagram\.com\/[\w-_]+\/?$/.test(url),
      "Invalid instagram profile url"
    )
    .optional(),
  pitch_deck: z
    .instanceof(File, {
      message: "Upload pitch deck file",
    })
    .refine(
      (files: File) => !files || files?.size <= MAX_FILE_SIZE,
      `Max image size is 100MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      "Only .pdf, .ppt, .pptx, .docx, .png and .jpg formats are supported."
    ),
  business_stage: z.string({ required_error: "Select business stage" }),
  niche: z.string({ required_error: "Select business niche" }),
  other_niche: z.string().trim().optional(),
  business_highlights: z
    .string({ required_error: "Business highlight is required" })
    .min(1, { message: "Business hightlight is required" }),
  investment_sought: z
    .string({ required_error: "Investment sought is required" })
    .min(1, { message: "Please specify the investment sought" }),
  premoney_valuation: z
    .string({ required_error: "Premony valuation is required" })
    .min(1, { message: "Pre Money valuation is required" }),
});

export const investorsLoginSchema = z.object({
  first_name: z
    .string()
    .min(3, { message: "First name must be at least 3 characters." }),
  last_name: z
    .string({ required_error: "Last name is required" })
    .min(3, { message: "Last name must be at least 3 characters." }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email address." }),
  contact_number: z.string().refine((value) => isMobilePhone(value), {
    message: "Please enter a valid phone number",
  }),
  address: z.string().min(1, { message: "Address is required" }),
  linkedIn: z
    .string({ required_error: "LinkedIn is required" })
    .refine(
      (url) => isURL(url, { require_protocol: false }),
      "Invalid linkedIn url"
    )
    .refine(
      (url) => /(https?:\/\/)?(.*?\.)?linkedin\.com\/in\/[\w-_]+\/?$/,
      "Invalid linkedin profile url"
    ),
  background: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, { message: "Your story must be at least 20 characters long." }),
  tos: z.boolean().refine((val) => val === true, {
    message: "Please confirm you have read the Terms and Conditions",
  }),
  riskPolicy: z.boolean().refine((val) => val === true, {
    message: "Please confirm you have read the risk warning",
  }),
  legal: z.boolean().refine((val) => val === true, {
    message:
      "Please confirm you have consulted with your legal and financial advisors",
  }),
});

export type TInvestorsLoginSchema = z.infer<typeof investorsLoginSchema>;

export type TFounderRegistrationSchema = z.infer<
  typeof founderRegistrationSchema
>;
