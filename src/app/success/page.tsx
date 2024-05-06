import LinkButton from "@/components/shared/Button";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  return (
    <div className="flex px-5 justify-center items-center h-[80vh]">
      <div className="max-w-2xl mx-auto text-center ">
        <FaCheckCircle className="text-3xl md:text-5xl text-[#22C55E] block mx-auto" />
        <h2 className="font-semibold text-2xl md:text-3xl mt-6 mb-8">
          Thank you{" "}
        </h2>
        <p className="text-black-8 text-sm sm:tex-base">
          We appreciate your interest in partnering with us to support
          innovative ventures in the AI space. Our team will review your
          application promptly and reach out to you shortly to discuss potential
          investment opportunities.
        </p>
        <LinkButton
          buttonText="go back to homepage"
          href="/"
          className="bg-primary text-white hover:bg-[#003154] w-fit h-11 sm:h-14 tex-sm sm:tex-base mt-10 mx-auto"
        />
      </div>
    </div>
  );
};

export default Success;
