import Link from "next/link";
import React from "react";

function PrivacyPolicy() {
  return (
    <div className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28 mx-auto">
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
            2.1. Information Sharing
          </h2>
          <div className="text-sm sm:text-base text-black-8">
            <p>We may share your information with:</p>
            <ul>
              <li className="mt-4">
                Our affiliates, partners, and service providers
              </li>
              <li className="mt-4">Legal and regulatory authorities</li>
              <li className="mt-4">Third-party vendors and contractors</li>
              <li className="mt-4">
                In the event of a merger, acquisition, or bankruptcy{" "}
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
                Respond to your inquiries and provide customer support
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

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">4. Data Security</h2>
          <div className="text-sm sm:text-base text-black-8">
            <p>
              We implement appropriate technical and organizational measures to
              ensure the security and confidentiality of your information,
              including:
            </p>
            <ul>
              <li className="mt-4">Encryption</li>
              <li className="mt-4">Firewalls</li>
              <li className="mt-4">Access controls</li>
              <li className="mt-4">Secure servers</li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">5. Data Retention</h2>
          <div className="text-sm sm:text-base text-black-8">
            <p>
              We retain your information for as long as necessary to fulfill the
              purposes outlined in this Privacy Policy unless a longer retention
              period is required by law.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">6. Your rights</h2>
          <div className="text-sm sm:text-base text-black-8">
            <p>You have the right to:</p>
            <ul>
              <li className="mt-4">
                Access and correct your personal information
              </li>
              <li className="mt-4">
                Request deletion of your personal information
              </li>
              <li className="mt-4">
                Object to or restrict processing of your personal information
              </li>
              <li className="mt-4">
                Request a copy of your personal information in a structured,
                machine-readable format
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">
            7. Changes to This Privacy Policy
          </h2>
          <div className="text-sm sm:text-base text-black-8">
            <p>
              We may update this Privacy Policy periodically and will notify you
              of significant changes through our Website or email.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">8. Contact Us</h2>
          <div className="text-sm sm:text-base text-black-8">
            <p>
              If you have questions or concerns about this Privacy Policy,
              please contact us at [
              <a
                className="underline text-primary-dark hover:text-primary"
                href="mailto:info@phoenixventurecapital.uk"
              >
                info@phoenixventurecapital.uk
              </a>
              ] or [ contact phone number ].
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">Effective Date</h2>
          <div className="text-sm sm:text-base text-black-8">
            <p>[April 1ST, 2024]</p>

            <p className="mt-4">
              Please read the{" "}
              <Link
                className="underline text-primary-dark hover:text-primary"
                href="/terms-of-service"
              >
                Phoenix ventures Capital Ltd Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
