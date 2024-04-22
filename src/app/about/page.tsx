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
                At Phoenix VC, we are driven by a shared passion for innovation
                and a vision to revolutionize the future of technology through
                artificial intelligence. Founded with a commitment to empowering
                AI entrepreneurs and investors, our platform serves as a
                catalyst for transformative ideas to take flight.
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
              Our journey began with a simple yet profound belief in the power
              of AI to reshape industries, solve complex challenges, and create
              positive societal impact. Fueled by this conviction, we embarked
              on a mission to build a vibrant ecosystem where visionary
              innovators could thrive and collaborate, supported by strategic
              partnerships and resources. What sets Phoenix VC apart is our
              unwavering dedication to the success of our community. We
              understand the unique needs and aspirations of AI startups,
              providing them with tailored support, mentorship, and access to
              funding opportunities. Likewise, we connect investors with
              promising ventures aligned with their investment goals,
              facilitating meaningful connections and driving innovation
              forward. Beyond our commitment to fostering AI entrepreneurship,
              we are guided by principles of ethical innovation and responsible
              AI development. We believe in harnessing the potential of AI for
              the betterment of humanity while addressing ethical considerations
              and ensuring inclusivity and fairness in technology adoption. As
              we continue to grow and evolve, our focus remains on building a
              future where AI innovation knows no bounds. We invite you to join
              us on this journey of exploration, collaboration, and discovery as
              we shape the future of technology together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28 bg-[#F0F0F0]">
        <div className="lg:w-1/2 mx-auto text-center">
          <h2 className="text-black-12 text-2xl sm:text-3xl xl:text-[40px] mb-6 font-semibold sm:leading-[48px]">
            our Mission
          </h2>

          <p className="text-black-8 text-center text-sm sm:text-base md:text-lg">
            At Phoenix VC, our mission is to empower AI innovators to realize
            their full potential and shape the future of technology. We are
            committed to providing the resources, support, and connections
            needed to fuel innovation, drive growth, and create lasting impact
            in the AI startup ecosystem.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
