import React from "react";
import StartupCard from "@/components/shared/StartupCard";

function Portfolio() {
  return (
    <div>
      <section className="bg-primary flex items-center justify-center h-[248px]">
        <h1 className="text-white text-2xl sm:text-3xl xl:text-[40px] font-semibold sm:leading-[48px]">
          Our Portfolio
        </h1>
      </section>
      <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mt-7 md:mt-16">
          <StartupCard />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
