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

const page = () => {
  return (
    <div>
      <section className="min-h-[50vh] flex items-center px-5 sm:px-10 xl:px-28 bg-[#E6F6FD]">
        <div className="max-w-2xl ">
          <h2 className="text-black-12 text-2xl sm:text-3xl xl:text-[48px] mb-6 font-semibold sm:leading-[48px]">
            Discover Promising AI Innovators
          </h2>

          <div className="text-sm sm:text-base text-black-8">
            <p>
              Explore our curated directory of vetted AI startups, showcasing
              cutting-edge technologies and promising ventures in diverse
              industries. Find the next wave of innovation and investment
              opportunities with confidence
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 xl:pt-16 xl:pb-32 px-5 sm:px-10 xl:px-28">
        <div className="flex justify-between items-center gap-6">
          <div className="flex gap-3 flex-1">
            <button className="w-10 h-10 flex justify-center items-center border rounded-full">
              <Image
                src="/filter.svg"
                alt="filter icon"
                width={20}
                height={20}
              />
            </button>

            <Select>
              <SelectTrigger className="w-fit gap-3">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="finech">Fintech</SelectItem>
                  <SelectItem value="biotech">Biotech</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-fit gap-3">
                <SelectValue placeholder="Funding stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="finech">Series A</SelectItem>
                  <SelectItem value="biotech">Series B</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-fit gap-3">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="finech">Lagos, Nigeria</SelectItem>
                  <SelectItem value="biotech">United Kingdom</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="relative flex-1 self-end max-w-md">
            <MdSearch className="text-2xl text-black-light absolute top-1/4 left-4" />
            <input
              type="text"
              placeholder="Search for a startup"
              className="border rounded py-3 pl-10 pr-4 bg-[#F9FAFB] w-full outline-black-light"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
