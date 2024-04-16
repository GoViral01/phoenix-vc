import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface IButton {
  buttonText: string;
  href: string;
  showIcon?: boolean;
  className?: string;
}

// this component will be changed back to a link later

const LinkButton = ({
  showIcon = false,
  buttonText,
  className,
  href,
}: IButton) => {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center gap-3 rounded-lg font-semibold px-3 sm:px-6 transition duration-300 ${className}`}
    >
      {buttonText}
      {showIcon && <FaArrowRight />}
    </Link>
  );
};

export default LinkButton;
