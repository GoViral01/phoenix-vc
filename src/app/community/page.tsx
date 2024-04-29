import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import StartupCard from "@/components/shared/StartupCard";

const page = () => {
  return (
    // <div>
    //   <section className="min-h-[50vh] flex items-center px-5 sm:px-10 xl:px-28 bg-[#E6F6FD]">
    //     <div className="max-w-2xl ">
    //       <h2 className="text-black-12 text-2xl sm:text-3xl xl:text-[48px] mb-6 font-semibold sm:leading-[48px]">
    //         Discover Promising AI Innovators
    //       </h2>

    //       <div className="text-sm sm:text-base text-black-8">
    //         <p>
    //           Explore our curated directory of vetted AI startups, showcasing
    //           cutting-edge technologies and promising ventures in diverse
    //           industries. Find the next wave of innovation and investment
    //           opportunities with confidence
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="py-20 xl:pt-16 xl:pb-32 px-5 sm:px-10 xl:px-28">
    //     <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-10 md:mb-16">
    //       <div className="flex gap-3 flex-1 flex-wrap md:flex-nowrap">
    //         <button className="w-10 h-10 shrink-0 flex justify-center items-center border rounded-full">
    //           <Image
    //             src="/filter.svg"
    //             alt="filter icon"
    //             width={20}
    //             height={20}
    //           />
    //         </button>

    //         <Select>
    //           <SelectTrigger className="w-fit gap-3">
    //             <SelectValue placeholder="Industry" />
    //           </SelectTrigger>
    //           <SelectContent>
    //             <SelectGroup>
    //               <SelectItem value="finech">Fintech</SelectItem>
    //               <SelectItem value="biotech">Biotech</SelectItem>
    //             </SelectGroup>
    //           </SelectContent>
    //         </Select>

    //         <Select>
    //           <SelectTrigger className="w-fit gap-3">
    //             <SelectValue placeholder="Funding stage" />
    //           </SelectTrigger>
    //           <SelectContent>
    //             <SelectGroup>
    //               <SelectItem value="finech">Series A</SelectItem>
    //               <SelectItem value="biotech">Series B</SelectItem>
    //             </SelectGroup>
    //           </SelectContent>
    //         </Select>

    //         <Select>
    //           <SelectTrigger className="w-fit gap-3">
    //             <SelectValue placeholder="Location" />
    //           </SelectTrigger>
    //           <SelectContent>
    //             <SelectGroup>
    //               <SelectItem value="finech">Lagos, Nigeria</SelectItem>
    //               <SelectItem value="biotech">United Kingdom</SelectItem>
    //             </SelectGroup>
    //           </SelectContent>
    //         </Select>
    //       </div>

    //       <div className="relative flex-1 md:self-end md:max-w-md">
    //         <MdSearch className="text-2xl text-black-light absolute top-1/4 left-4" />
    //         <input
    //           type="text"
    //           placeholder="Search for a startup"
    //           className="border rounded py-3 pl-10 pr-4 bg-[#F9FAFB] w-full outline-black-light"
    //         />
    //       </div>
    //     </div>

    //     <div>
    //       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
    //         <StartupCard />
    //         <StartupCard />
    //         <StartupCard />
    //       </div>

    //       <button className="uppercase py-4  px-5 mx-auto block border border-black-8 text-black-8 rounded font-semibold  mt-10 md:mt-16 hover:bg-black-12 hover:text-white transition duration-300">
    //         show more
    //       </button>
    //     </div>
    //   </section>
    // </div>

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
        <span className="uppercase text-black-light text-xs sm:text-sm">
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
