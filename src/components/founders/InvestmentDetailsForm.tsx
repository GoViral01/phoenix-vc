import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineFileUpload } from "react-icons/md";
import { useFormContext } from "react-hook-form";
import { TFounderRegistrationSchema } from "@/lib/types/type";

const InvestmentDetailsForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const {
    register,
    formState: { errors },
  } = useFormContext<TFounderRegistrationSchema>();

  return (
    <form aria-label="investor registration form">
      <label htmlFor="pitchDeckDoc" className="font-medium cursor-pointer mb-1">
        Upload pitch deck
        <div className="rounded border border-dashed border-[#BFBFBF] bg-[#FCFCFC] p-4 mb-6 flex flex-col items-center">
          <MdOutlineFileUpload className="text-black-8 text-2xl" />
          <strong className="text-primary my-1">
            Browse or drag & drop file here
          </strong>
          <span className="text-black-light">
            upload .pdf, .ppt, .pptx, .docx, .png, .jpg
          </span>
          <div>{selectedFile?.name}</div>
          <span className="text-sm text-black-8 mt-6">
            Maximun file size: 100MB
          </span>
        </div>
        <input
          type="file"
          id="pitchDeckDoc"
          accept=".pdf, .ppt, .pptx, .docx, .png, .jpg"
          {...register("pitch_deck")}
          hidden
        />
        {errors?.pitch_deck && (
          <p className="text-sm text-red-600 mt-1">
            {errors.pitch_deck.message}
          </p>
        )}
      </label>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="businessStage">
          Business Stage
        </label>
        <Select {...register("business_stage")}>
          <SelectTrigger id="businessStage" className="w-full gap-3">
            <SelectValue placeholder="Select your business stage" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="finech">Series A</SelectItem>
              <SelectItem value="biotech">Series B</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors?.business_stage && (
          <p className="text-sm text-red-600 mt-1">
            {errors.business_stage.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="niche">
          Niche
        </label>
        <Select {...register("niche")}>
          <SelectTrigger id="niche" className="w-full gap-3">
            <SelectValue placeholder="Select your business niche" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="fintech">Fintech</SelectItem>
              <SelectItem value="biotech">Biotech</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors?.niche && (
          <p className="text-sm text-red-600 mt-1">{errors.niche.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="businessHighlight">
          Business highlights (list the reasons why we should invest)
        </label>
        <textarea
          id="businessHighlight"
          placeholder="In 6-10 paragraph, list the reasons we should invest in your startup"
          {...register("business_highlights")}
          className="w-full rounded border border-[#D1D5DB] p-4 min-h-52 resize-none hover:resize-y"
        />
        {errors?.business_highlights && (
          <p className="text-sm text-red-600 mt-1">
            {errors.business_highlights.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="investmentSought">
          Investment Sought
        </label>
        <input
          type="text"
          id="investmentSought"
          placeholder="Specify the investment sought"
          {...register("investment_sought")}
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
        {errors?.investment_sought && (
          <p className="text-sm text-red-600 mt-1">
            {errors.investment_sought.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="font-medium mb-1" htmlFor="preMoneyValuation">
          Pre-Money Valuation
        </label>
        <input
          type="text"
          id="preMoneyValuation"
          placeholder="Calculated automaically"
          {...register("premoney_valuation")}
          className="w-full rounded border border-[#D1D5DB] p-4"
        />
        {errors?.premoney_valuation && (
          <p className="text-sm text-red-600 mt-1">
            {errors.premoney_valuation.message}
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
            id="tos"
            className="mr-2"
            {...register("tos")}
          />
          <label htmlFor="tos">
            I agree to Phoenix's Venture Capital's Terms of Service and Privacy
            Policy
          </label>
          {errors?.tos && (
            <p className="text-sm text-red-600 mt-1">{errors.tos.message}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default InvestmentDetailsForm;
