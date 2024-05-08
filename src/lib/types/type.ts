import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 100;
const ACCEPTED_IMAGE_TYPES = [".pdf", ".ppt", ".pptx", ".docx", ".png", ".jpg"];

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
  phone_number: z
    .string()
    .refine(
      (value) =>
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(value),
      { message: "Please enter a valid phone number" }
    ),
  location: z.string().min(1, { message: "Location is required" }),
  linkedIn: z
    .string()
    .min(1, { message: "Location is required" })
    .url({ message: "Enter a valid URL" }),
  twitter: z.string().url({ message: "Enter a valid URL" }).optional(),
  instagram: z.string().url({ message: "Enter a valid URL" }).optional(),
  facebook: z.string().url({ message: "Enter a valid URL" }).optional(),
  startup_name: z.string().min(1, { message: "Startup name is required" }),
  website: z
    .string()
    .min(1, { message: "Website is required" })
    .url({ message: "Enter a valid URL" }),
  business_overview: z
    .string()
    .min(10, { message: "Business overview is required" }),
  elevator_pitch: z
    .string()
    .min(10, { message: "Elevator pitch is required" })
    .max(80, { message: "Charaters cannot exceed 80" }),
  business_linkedIn: z
    .string()
    .min(1, { message: "LinkedIn URL is required" })
    .url({ message: "Enter a valid URL" }),
  business_twitter: z.string().url({ message: "Enter a valid URL" }).optional(),
  business_instagram: z
    .string()
    .url({ message: "Enter a valid URL" })
    .optional(),
  pitch_deck: z
    .instanceof(File)
    .refine(
      (files: File) => !files || files.size <= MAX_FILE_SIZE,
      `Max image size is 100MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files.type),
      "Only .pdf, .ppt, .pptx, .docx, .png and .jpg formats are supported."
    ),
  business_stage: z.string().min(1, { message: "Choose a business stage" }),
  niche: z.string().min(1, { message: "Choose a niche" }),
  business_highlights: z
    .string()
    .min(1, { message: "Business hightlight is required" }),
  investment_sought: z
    .string()
    .min(1, { message: "Please specify the investment sought" }),
  premoney_valuation: z
    .string()
    .min(1, { message: "Pre Money valuation is required" }),
  tos: z.boolean().refine((val) => val === true, {
    message: "Please confirm you have read the Terms and Conditions",
  }),
});

export type TFounderRegistrationSchema = z.infer<
  typeof founderRegistrationSchema
>;
