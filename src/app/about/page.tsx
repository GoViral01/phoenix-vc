import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
        <div>
          <div className="max-w-2xl">
            <h2 className="text-black-12 text-2xl sm:text-3xl xl:text-[40px] mb-6 mt-8 md:mt-10 font-semibold sm:leading-[48px]">
              Pioneering AI Innovation and Investment
            </h2>

            <div className="text-sm sm:text-base text-black-8">
              <p>
                Our mission is to catalyze the success of innovative start-ups
                in artificial intelligence by connecting them with the resources
                they need to thrive, while delivering unparalleled investment
                opportunities to our network of forward-thinking investors.
              </p>
            </div>
          </div>

          <div className="py-20 xl:py-32">
            <div className="grid sm:grid-cols-2 items-center gap-5 lg:gap-8">
              <div className="rounded-lg overflow-clip max-h-96 bg-gray-100">
                <Image
                  src="/teamMembers.jpeg"
                  alt="Team working together"
                  width={500}
                  height={500}
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid gap-5 lg:gap-8 lg:-mt-28">
                <div className="rounded-lg overflow-clip max-h-44 lg:w-5/6">
                  <Image
                    src="/dataSpace.jpeg"
                    alt=""
                    width={500}
                    height={500}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="rounded-lg overflow-clip max-h-96">
                  <Image
                    src="/coWorker.jpeg"
                    alt="Man working on a desktop"
                    width={500}
                    height={500}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <span className="uppercase text-black-light text-xs sm:text-sm">
            Our story
          </span>
          <h2 className="text-black-12 text-2xl sm:text-3xl xl:text-[40px] mb-6 mt-8 md:mt-10 font-semibold sm:leading-[48px]">
            Unveiling Phoenix VC
          </h2>

          <div className="text-sm sm:text-base text-black-8">
            <p>
              PHOENIX VC is a premier venture capital hub designed to bridge the
              gap between visionary startups and savvy investors. First of its
              kind in the artificial intelligence ecosystem, PHOENIX VC is
              committed to fostering innovation and driving economic growth in
              key sectors like Real Estate, Governance, banking and finance and
              sport betting through chat bot automations and algorithms that
              analyze and predict user patterns. Phoenix VC Ltd provides a
              dynamic platform for strategic partnerships, funding
              opportunities, and mentorship.
            </p>

            <p className="mt-4">
              With a parent company (PHOENIX VENTURES CAPITAL LIMITED)
              headquartered in the United Kingdom and a dynamic team of experts
              from various fields, led by a change and sustainability expert,
              Phoenix VC is positioned to establish partnerships that produce
              global exponential growth.
            </p>

            <p className="mt-4">
              A one stop hub, with a simple but extensive user interface that
              serves as a platform for lead generation, networking and
              visibility for all parties involved in the ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28 bg-[#F0F0F0]">
        <div className="lg:w-1/2 mx-auto text-center">
          <h2 className="text-black-12 text-2xl sm:text-3xl xl:text-[40px] mb-6 font-semibold sm:leading-[48px]">
            Vision Statement
          </h2>

          <p className="text-black-8 text-center text-sm sm:text-base md:text-lg">
            At Phoenix Ventures Capital Ltd, our vision is to become the
            cornerstone of the global artificial intelligence ecosystem,
            empowering startups in that field to realize their full potential
            and revolutionizing the way investments are made. We aspire to
            cultivate a culture of innovation and collaboration, where
            breakthrough ideas thrive, and visionary artificial intelligence
            startups are equipped with the resources they need to create lasting
            impact. Through our unwavering commitment to excellence, integrity,
            and inclusivity, we aim to shape a future where innovation knows no
            bounds, and every idea can change the world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
