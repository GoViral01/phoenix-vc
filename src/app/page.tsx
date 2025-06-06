import Image from "next/image";
import Founders from "@/components/home/Founders";
import Hero from "@/components/home/Hero";
import Investment from "@/components/home/Investment";
import VettedStarups from "@/components/home/VettedStarups";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LinkButton from "@/components/shared/Button";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <section className="py-20 xl:py-32 text-center px-5">
        <h2 className="text-black-12 text-2xl sm:text-5xl font-semibold w-11/12 max-w-3xl mx-auto">
          We empower AI visionaries with resources and support to bring their
          ideas to life.
        </h2>
      </section> */}

      <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28 bg-[#F0F0F0] border border-b-[#D9D9D9]">
        <div className="mb-20 xl:mb-28">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-10">
            <div className="bg-gray-200 h-64 sm:h-[636px] rounded-xl overflow-clip w-full lg:w-1/2">
              <Image
                src="/vrGlass.jpeg"
                alt="woman on VR glass"
                width={500}
                height={500}
                fetchPriority="high"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <span className="uppercase text-black-light text-xs sm:text-sm">
                About us
              </span>
              <h2 className="text-black-12 text-2xl sm:text-3xl xl:text-[40px] mb-6 mt-8 md:mt-10 font-semibold sm:leading-[48px]">
                Empowering AI Innovators to Shape Tomorrow
              </h2>

              <div className="text-sm sm:text-base text-black-8">
                <p>
                  PHOENIX VC is a premier venture capital hub designed to bridge
                  the gap between visionary startups and savvy investors.
                </p>
                <p className="mt-4">
                  First of its kind in the artificial intelligence ecosystem,
                  PHOENIX VC is committed to fostering innovation and driving
                  economic growth in key sectors like Real Estate, Governance,
                  banking and finance and sport betting through chat bot
                  automations and algorithms that analyze and predict user
                  patterns. Phoenix VC Ltd provides a dynamic platform for
                  strategic partnerships, funding opportunities, and mentorship.
                </p>
                <p className="mt-4">
                  With a parent company (PHOENIX VENTURES CAPITAL LIMITED)
                  headquartered in the United Kingdom and a dynamic team of
                  experts from various fields, led by a change and
                  sustainability expert, Phoenix VC is positioned to establish
                  partnerships that produce global exponential growth.
                </p>
              </div>

              <LinkButton
                buttonText="Learn more about us"
                showIcon={true}
                href="/about"
                className="bg-primary text-white hover:bg-[#003154] w-fit h-11 sm:h-14 text-sm sm:tex-base mt-10 hidden lg:flex"
              />
            </div>
          </div>
        </div>

        <WhyChooseUs />
        <LinkButton
          buttonText="Learn more about us"
          href="/about"
          showIcon={true}
          className="bg-primary text-white hover:bg-[#003154] w-fit h-11 sm:h-14 text-sm sm:tex-base mt-10 lg:hidden"
        />
      </section>

      <Investment />
      <Founders />
      <VettedStarups />
      {/* <Investors />
      <Testimonial /> */}

      {/* <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
        <h2 className="text-black-12 text-2xl sm:text-3xl xl:text-[40px] mb-6 mt-8 md:mt-10 font-semibold sm:leading-[48px] text-center">
          Latest News and Developments
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mt-7 md:mt-16">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </section> */}
    </div>
  );
}
