import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <section className="flex items-center min-h-[60vh]">
      <div className="w-1/2 h-[816px] hidden lg:block">
        <Image
          src="/aiFace.jpeg"
          alt=""
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-5 sm:px-10 w-full lg:w-1/2 max-w-xl mx-auto lg:m-0">
        <span className="uppercase text-black-light text-xs sm:text-sm animate-pulse">
          coming soon
        </span>
        <h2 className="text-black-12 text-xl sm:text-2xl xl:text-3xl mb-6 mt-8 md:mt-10 font-semibold sm:leading-[48px]">
          Startup Community
        </h2>

        <div className="text-sm sm:text-base text-black-8">
          <p>
            Lorem ipsum dolor sit amet consectetur. Est enim quis pretium
            consectetur libero lacus nam morbi. Dignissim fringilla quisque
            purus egestas in nibh nunc
          </p>
        </div>

        <form aria-label="Join waitlist" className="mt-11">
          <div className="flex flex-wrap items-end gap-2">
            <label htmlFor="email" className="flex-1">
              Email address
              <input
                id="email"
                type="email"
                placeholder="Enter your email here"
                className="border rounded p-4 w-full mt-1"
              />
            </label>
            <button className="uppercase bg-primary text-white hover:bg-primary-dark rounded p-4 w-full sm:w-fit">
              notify me
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
