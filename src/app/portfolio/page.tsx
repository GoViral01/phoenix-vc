import React from "react";
import OurPartners from "@/components/portfolio/OurPartners";

function Portfolio() {
  return (
    <div>
      <section className="bg-primary flex items-center justify-center h-[248px]">
        <h1 className="text-white text-2xl sm:text-3xl xl:text-[40px] font-semibold sm:leading-[48px]">
          Our Portfolio
        </h1>
      </section>
      <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
        <OurPartners />
      </section>
    </div>
  );
}

export default Portfolio;
