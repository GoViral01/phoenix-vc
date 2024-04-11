import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface IButton {
  buttonText: string;
  showIcon?: boolean;
  className?: string;
}

const Button = ({ showIcon = false, buttonText, className }: IButton) => {
  return (
    <button
      className={`w-full flex items-center justify-center gap-3 rounded-lg font-semibold px-6 ${className}`}
    >
      {buttonText}
      {showIcon && <FaArrowRight />}
    </button>
  );
};

export default Button;
