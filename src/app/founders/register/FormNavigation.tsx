import clsx from "clsx";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface Props {
  hasNext: boolean;
  nextBtnLabel?: React.ReactNode;
  nextBtnProps?: React.ComponentProps<"button">;

  hasPrev: boolean;
  prevBtnLabel?: React.ReactNode;
  prevBtnProps?: React.ComponentProps<"button">;
}

export default function FormNavigation({
  hasNext,
  hasPrev,
  nextBtnLabel,
  prevBtnLabel,
  nextBtnProps,
  prevBtnProps,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
      {hasPrev && (
        <button
          {...prevBtnProps}
          className={clsx(
            "border border-black-12 rounded flex items-center gap-2 uppercase w-full sm:w-fit py-4 text-sm sm:text-base sm:px-8 font-semibold hover:bg-black-12 hover:text-white disabled:bg-black-12/60 disabled:cursor-not-allowed",
            prevBtnProps?.className
          )}
        >
          <FaArrowLeft />
          {prevBtnLabel || "Back"}
        </button>
      )}
      {hasNext && (
        <button
          {...nextBtnProps}
          className={clsx(
            "ml-auto bg-primary text-white rounded flex items-center gap-2 uppercase w-full sm:w-fit py-4 text-sm sm:text-base sm:px-8 font-semibold disabled:bg-primary/85 disabled:cursor-not-allowed",
            nextBtnProps?.className
          )}
        >
          {nextBtnLabel || "Next"}
          <FaArrowRight />
        </button>
      )}
    </div>
  );
}
