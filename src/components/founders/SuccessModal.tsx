import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import LinkButton from "../shared/Button";

const SuccessModal = () => (
  <Dialog.Root open={true}>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0 z-[200]" />
      <Dialog.Content className="z-[200] py-10 px-5 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-2xl translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <div className="mx-auto text-center ">
          <FaCheckCircle className="text-3xl md:text-5xl text-[#22C55E] block mx-auto" />
          <h2 className="font-semibold text-2xl md:text-3xl mt-6 mb-8">
            Thank you
          </h2>
          <p className="text-black-8 text-sm sm:text-base">
            We appreciate your interest in partnering with us to support
            innovative ventures in the AI space. Our team will review your
            application promptly and reach out to you shortly to discuss
            potential investment opportunities.
          </p>
        </div>

        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <LinkButton
              buttonText="go back to homepage"
              href="/"
              className="bg-primary text-white hover:bg-[#003154] w-fit h-11 sm:h-14 text-sm  mt-10 mx-auto"
            />
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default SuccessModal;
