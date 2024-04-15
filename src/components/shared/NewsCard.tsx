import Image from "next/image";
import React from "react";

const NewsCard = () => {
  return (
    <div>
      <div className="rounded-lg overflow-clip bg-gray-200">
        <Image
          src="/articleCover.jpeg"
          alt=""
          width={500}
          height={500}
          className="w-full object-cover object-center"
        />
      </div>

      <div className="pt-7">
        <span className="text-black-light text-xs sm:text-sm uppercase">
          Jasdon Harris . 7 December, 2024
        </span>
        <h3 className="text-black-12 md:text-lg xl:text-2xl mt-6 mb-2 font-semibold">
          AI Startup Secures Funding Through Phoenix VC
        </h3>

        <p className="text-sm sm:text-base text-black-8">
          The SFC Angel Fund SEIS allows you to invest in some of the most
          innovative young companies in the UK, receive full SEIS tax benefits
          on your investment, and mitigate your risk through portfolio
          diversification.
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
