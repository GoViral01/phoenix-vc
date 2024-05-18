import Link from "next/link";
import React from "react";

function CookiePolicy() {
  return (
    <div className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
      <div className="mb-14">
        <h1 className="text-black-12 text-2xl sm:text-3xl xl:text-[48px] font-semibold sm:leading-[48px]">
          Cookie Policy
        </h1>
        <div className="text-sm sm:text-base text-black-8">
          <p>
            Phoenix Ventures Capital Ltd, the owners and providers of this
            website, use cookies and similar technologies to enhance your
            browsing experience and provide personalized content. Our cookies
            policy explains how we use cookies, what information they collect,
            and how you can manage them.
          </p>
          <p>
            Before cookies are placed on your computer while browsing our
            website, a message bar requesting your consent will be presented to
            you. By agreeing to the placement of cookies, you are allowing us to
            provide a better experience and service. However, if you choose to
            deny consent, certain features of the website may not function fully
            as intended.
          </p>
        </div>
      </div>

      <div>
        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">What are cookies?</h2>
          <p className="text-sm sm:text-base text-black-8">
            Cookies are small text files stored on your device (computer,
            tablet, or mobile phone) when you visit a website. They allow us to
            recognize your device and store information about your preferences
            or past actions.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">
            Types of cookies we use:
          </h2>
          <div className="text-sm sm:text-base text-black-8">
            <ol>
              <li className="mt-4">
                <strong>Essential cookies:</strong> Necessary for our website to
                function and provide the services you request.
              </li>
              <li className="mt-4">
                <strong> Functional cookies:</strong> Enhance your experience by
                storing preferences and settings.
              </li>
              <li className="mt-4">
                <strong>Performance cookies:</strong> Analyse website
                performance and user behavior to improve our services.
              </li>
              <li className="mt-4">
                <strong>Targeting cookies:</strong> Used for advertising and
                targeting purposes.
              </li>
            </ol>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">
            Used for advertising and targeting purposes.
          </h2>
          <div className="text-sm sm:text-base text-black-8">
            <ol>
              <li className="mt-4">
                <strong>Accept cookies:</strong> By continuing to use our
                website, you consent to our use of cookies.
              </li>
              <li className="mt-4">
                <strong>Decline cookies:</strong> You can decline cookies by
                adjusting your browser settings.
              </li>
              <li className="mt-4">
                <strong>Delete cookies:</strong> You can delete cookies stored
                on your device at any time.
              </li>
              <li className="mt-4">
                <strong>Disable cookies:</strong> You can delete cookies stored
                on your device at any time.
              </li>
            </ol>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">Third-party cookies</h2>
          <p className="text-sm sm:text-base text-black-8">
            We use third-party services like [Google Analytics, Facebook, and
            other forms of social media analytics services] that may set cookies
            on our website. These cookies are subject to the third-party
            service's privacy policy.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">Your rights</h2>
          <p className="text-sm sm:text-base text-black-8">
            Under the General Data Protection Regulation (GDPR) and the ePrivacy
            Directive, you have the rights to:
          </p>
          <div className="text-sm sm:text-base text-black-8">
            <ol>
              <li className="mt-4">
                <strong>Access:</strong> Request a copy of the information we
                hold about you.
              </li>
              <li className="mt-4">
                <strong>Rectification:</strong> Request correction of inaccurate
                information.
              </li>
              <li className="mt-4">
                <strong>Erasure:</strong> Reviewing and approving investments
                based on risk and return criteria
              </li>
              <li className="mt-4">
                <strong>Restriction:</strong> Request restriction of processing
                your information.
              </li>
              <li className="mt-4">
                <strong>Object:</strong> Object to processing your information
              </li>
            </ol>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">Changes to this policy</h2>
          <p className="text-sm sm:text-base text-black-8">
            We may update this cookies policy periodically and will notify you
            of significant changes through a notice on our website.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">Contact us</h2>
          <div className="text-sm sm:text-base text-black-8">
            <p>
              This website is owned by Phoenix Ventures Capital Ltd incorporated
              in England and Wales, whose registered office is at 71-75 Shelton
              street, Covent garden, London, WC2H 9JQ
            </p>
            <p className="mt-4">
              If you have questions or concerns about our cookies policy, please
              contact us at [
              <a href="mailto:info@phoenixvc.uk">info@phoenixvc.uk</a>]
            </p>

            <p className="mt-4">
              <strong>Effective data:</strong> [April 1ST, 2024]
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-black-8">
          *Last updated*[May 17TH, 2024]
        </p>
      </div>
    </div>
  );
}

export default CookiePolicy;
