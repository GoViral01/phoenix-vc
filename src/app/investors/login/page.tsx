import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
      <div className="lg:w-3/5 mx-auto">
        <div className="text-center">
          <h1 className="text-black-12 text-2xl sm:text-3xl xl:text-[48px] mb-6 font-semibold sm:leading-[48px]">
            Investor Registration
          </h1>
          <div className="text-sm sm:text-base text-black-8">
            <p>
              Lorem ipsum dolor sit amet consectetur. Est enim quis pretium
              consectetur libero lacus nam morbi. Dignissim fringilla quisque
              purus egestas in nibh nunc sociis. Lacus hendrerit tortor est sed
              amet.
            </p>
          </div>
        </div>

        <div className="rounded-lg text-center text-white  p-4 my-10 md:my-16 bg-[#F39C12]">
          <p>
            Don't invest unless you're prepared to lose all the money you
            invest. This is a high risk investment and you are unlikely to be
            protected if something goes wrong.{" "}
            <Link href="/investors/login" className="font-semibold underline">
              Take 2 minutes to learn more.
            </Link>
          </p>
        </div>

        <form aria-label="investor registration form">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="font-medium mb-1" htmlFor="firstName">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="w-full rounded border border-[#D1D5DB] p-4"
              />
            </div>

            <div>
              <label className="font-medium mb-1" htmlFor="lastName">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="w-full rounded border border-[#D1D5DB] p-4"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full rounded border border-[#D1D5DB] p-4"
            />
          </div>

          <div className="mb-6">
            <label className="font-medium mb-1" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter your location"
              className="w-full rounded border border-[#D1D5DB] p-4"
            />
          </div>

          <div className="mb-6">
            <label className="font-medium mb-1" htmlFor="linkedIn">
              LinkedIn
            </label>
            <input
              type="text"
              id="linkedIn"
              placeholder="https://www.linkedin.com/my-profile"
              className="w-full rounded border border-[#D1D5DB] p-4"
            />
          </div>

          <div className="mb-6">
            <label className="font-medium mb-1" htmlFor="message">
              Tell us about your background
            </label>
            <textarea
              id="message"
              placeholder="Please tell us a bit about your background"
              className="w-full rounded border border-[#D1D5DB] p-4 resize-none hover:resize-y"
            />
          </div>

          <div className="mt-6">
            <h2 className="font-semibold md:text-2xl xl:text-3xl mb-8">
              Agreements
            </h2>

            <div className="mb-6">
              <input type="checkbox" id="tosCheckbox" className="mr-2" />
              <label htmlFor="tosCheckbox">
                I confirm that your data is collected and stored (for more
                details see our Privacy Policy and Terms of Service)
              </label>
            </div>

            <div className="mb-6">
              <input type="checkbox" id="tosConfirmCheckbox" className="mr-2" />
              <label htmlFor="tosConfirmCheckbox">
                I confirm that I have read the risk warning above
              </label>
            </div>

            <div className="text-xs text-black-8 mb-8">
              <p>
                Lorem ipsum dolor sit amet consectetur. Mauris cursus nisi eget
                tellus sagittis. Ultrices tristique eget velit ipsum lacus
                cursus adipiscing sed. Malesuada et commodo velit donec vitae
                ligula. Vel feugiat in pellentesque lacinia sem sagittis tempus.
                Viverra arcu consectetur sed risus tempor odio risus viverra
                aliquam. Vel pretium ut morbi maecenas odio condimentum purus
                ut. Cras et condimentum morbi malesuada. Vel nibh blandit
                scelerisque ut etiam egestas lorem tincidunt.
              </p>
            </div>

            <button className="bg-primary hover:bg-primary-dark font-semibold text-white uppercase rounded px-4 h-11 md:h-[52px]">
              Become an investor
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
