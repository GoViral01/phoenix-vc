import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface IButton {
  buttonText: string;
  showIcon?: boolean;
}

const Button = ({ showIcon, buttonText, ...props }: IButton) => {
  return (
    <button className="flex items-center gap-3" {...props}>
      {buttonText}
      {showIcon && <FaArrowRight />}
    </button>
  );
};

export default Button;
