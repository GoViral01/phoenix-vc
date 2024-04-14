import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial = () => {
  return (
    <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
      <div className="lg:w-1/2 mx-auto flex flex-col items-center">
        <RiDoubleQuotesL className="text-[#0074C7] text-2xl sm:text-5xl" />
        <p className="text-black-8 text-center text-sm sm:text-base md:text-lg my-8 md:my-12">
          "Phoenix VC's support was crucial for our AI startup, providing
          resources and funding. Grateful for their guidance, we're eager to
          shape AI innovation together."
        </p>

        <div className="flex items-center gap-5 md:gap-6">
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          <div>
            <h3 className="font-semibold md:text-xl">James Scott</h3>
            <span className="uppercase text-black-light text-xs sm:text-sm">
              Chief Executive Officer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
