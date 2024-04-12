import React from "react";

interface IBenefits {
  heading: string;
  text: string;
}

const WhyChooseUs = () => {
  const OUR_BENEFITS: IBenefits[] = [
    {
      heading: "Support for AI Innovstors",
      text: "Phoenix VC is committed to providing comprehensive support to AI innovators from concept to market success.",
    },
    {
      heading: "Strategic Partnerships",
      text: "Investors benefit from strategic partnerships established by Phoenix VC with leading industry players, accelerators, and academic institutions.",
    },
    {
      heading: "Experienced Team",
      text: "Phoenix VC is led by a seasoned team of professionals with deep expertise in venture capital and technology.",
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
