import React from "react";

interface IBenefits {
  heading: string;
  text: string;
}

const WhyChooseUs = () => {
  const OUR_BENEFITS: IBenefits[] = [
    {
      heading: "Support for AI Innovators and Tech Startups",
      text: "Phoenix VC is dedicated to offering top-tier support to AI innovators and tech startups,  transforming their ideas into tangible successes.",
    },
    {
      heading: "Strategic Partnerships",
      text: "Investors who partner with Phoenix VC can reap the benefits of our strategic collaborations  with top accelerators, incubators, and academic institutions.",
    },
    {
      heading: "Experienced Team",
      text: "Phoenix VC is led by a team of experienced professionals with decades of expertise in  venture capital, finance, and technology.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 xl:gap-12">
      {OUR_BENEFITS.map((benefit, index) => (
        <div key={index} className="flex-1  border-t border-black-12 pt-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3">
            {benefit.heading}
          </h2>
          <p className="text-sm sm:text-base text-black-8">{benefit.text}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUs;
