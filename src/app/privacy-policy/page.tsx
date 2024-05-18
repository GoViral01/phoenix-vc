import Link from "next/link";
import React from "react";

function PrivacyPolicy() {
  return (
    <div className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
      <div className="mb-16">
        <h1 className="text-black-12 text-2xl sm:text-3xl xl:text-[48px] font-semibold sm:leading-[48px]">
          Privacy Policy
        </h1>
        <div className="text-sm sm:text-base text-black-8">
          <p>
            This privacy statement explains what personal data Cluster Sub
            collects from you and how we use that data.
          </p>
        </div>
      </div>

      <div>
        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">1. Introduction</h2>
          <p className="text-sm sm:text-base text-black-8">
            [Phoenix Ventures Capital Ltd] (“we,” “us,” or “our”) is committed
            to protecting the privacy of our website visitors, investors, and
            business partners. This Privacy Policy explains how we collect, use,
            disclose, and protect your personal information when you visit our
            website [
            <Link
              href="/"
              className="underline text-primary-dark hover:text-primary"
            >
              www.phoenixvc.uk
            </Link>
            ] (the “Website”).
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">
            2. Information We Collect
          </h2>
          <div className="text-sm sm:text-base text-black-8">
            <p>
              We collect two types of information: Personal Information and
              Non-Personal Information.
            </p>
            <ul>
              <li className="mt-4">
                <strong>Personal Information:</strong> This includes your name,
                email address, phone number, company name, job title, and any
                other information that identifies you as an individual.
              </li>
              <li className="mt-4">
                <strong>Non-Personal Information:</strong> This includes your
                browser type, device type, operating system, IP address, and
                website usage data
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">
            3. How We Use Your Information
          </h2>
          <div className="text-sm sm:text-base text-black-8">
            <p>We use your information for the following purposes:</p>
            <ul>
              <li className="mt-4">
                Respond to your inquiries and provide customer support Send
                newsletters, updates, and marketing materials Analyze website
                usage and improve our services Comply with legal obligations and
                regulatory requirements Protect our rights, property, and safety
              </li>
              <li className="mt-4">
                Send newsletters, updates, and marketing materials
              </li>
              <li className="mt-4">
                Analyze website usage and improve our services
              </li>
              <li className="mt-4">
                Comply with legal obligations and regulatory requirements
              </li>
              <li className="mt-4">Protect our rights, property, and safety</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
