import React from "react";
import LinkButton from "../shared/Button";

const Hero = () => {
  return (
    <section className="bg-darkBg  bg-no-repeat bg-cover bg-center h-[80vh] flex justify-center items-center pt-5 sm:items-start md:pt-36">
      <div className="text-center w-11/12 md:w-5/6 lg:w-2/3 mx-auto">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl text-white font-semibold">
          Empowering AI Innovators to Shape the Future
        </h1>
        <p className="text-base md:text-xl text-[#f5f5f5] mt-6 mb-10 max-w-2xl mx-auto">
          At Phoenix VC, we empower AI innovators to realize their ideas and
          shape the future of technology.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <LinkButton
            href="/investors/login"
            buttonText="Become an Investor"
            className="bg-primary hover:opacity-80 text-white h-11 md:h-14"
          />
          <LinkButton
            href="#"
            buttonText="Apply for Funds"
            className="bg-transparent text-white h-11 md:h-14 border border-white hover:bg-white hover:text-black-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

//border-b-8 border-primary rounded-bl-[40px] rounded-br-[40px] - might be needed later
