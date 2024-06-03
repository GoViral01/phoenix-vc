import LinkButton from "@/components/shared/Button";
import Image from "next/image";
import React from "react";

function NotFound() {
  return (
    <div className="px-5 flex justify-center items-center text-center h-screen">
      <div>
        <div>
          <Image src="/404.svg" alt="404" width={500} height={500} />
        </div>

        <div className="my-10">
          <h1 className="text-2xl md:text-3xl mb-4">Page not found</h1>
          <p className="text">
            Oops! The page you're looking for couldn't be found. Please check
            the URL or return to the homepage.
          </p>
        </div>

        <LinkButton
          buttonText="Go back to homepgae"
          href="/about"
          showIcon={true}
          className="bg-primary text-white hover:bg-[#003154] w-fit h-11 sm:h-14 text-sm sm:tex-base"
        />
      </div>
    </div>
  );
}

export default NotFound;
