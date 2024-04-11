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
      className={`flex items-center justify-center gap-3 rounded-lg font-semibold px-6 transition duration-300 ${className}`}
    >
      {buttonText}
      {showIcon && <FaArrowRight />}
    </button>
  );
};

export default Button;
