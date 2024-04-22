import React from "react";
import LinkButton from "../shared/Button";
import StartupCard from "../shared/StartupCard";

const VettedStarups = () => {
  return (
    <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
      <div className="mb-20 flex flex-col sm:flex-row gap-6 md:gap-10 justify-between sm:items-center">
        <div className="flex-1">
          <span className="uppercase text-black-light text-xs sm:text-sm">
            directory of vetted startups
          </span>
          <h2 className="text-black-12 text-2xl sm:text-3xl xl:text-[40px] mt-5 md:mt-10 font-semibold sm:leading-[48px]">
            Discover Promising AI Innovators
          </h2>
        </div>

        <div className="flex-1 text-sm sm:text-base text-black-8">
          <p>
            Explore our curated directory of vetted AI startups, showcasing
            cutting-edge technologies and promising ventures in diverse
            industries. Find the next wave of innovation and investment
            opportunities with confidence.
          </p>
        </div>
      </div>

      <div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          <StartupCard />
        </div>

        <LinkButton
          buttonText="See all Vetted Startups"
          href="/community"
          className="text-white bg-primary mt-10 md:mt-20 py-4 px-2 block w-fit mx-auto"
        />
      </div>
    </section>
  );
};

export default VettedStarups;
