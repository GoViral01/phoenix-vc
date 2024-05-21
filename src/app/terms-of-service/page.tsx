import Link from "next/link";
import React from "react";

function TermsOfService() {
  return (
    <div className="py-20 xl:py-32 px-5 sm:px-10 xl:px-28">
      <div className="mb-16">
        <h1 className="text-black-12 text-2xl sm:text-3xl xl:text-[48px] font-semibold sm:leading-[48px]">
          Terms Of Service
        </h1>
        <div className="text-sm sm:text-base text-black-8">
          <p>
            This Terms of Service agreement, referred to as the "Agreement," is
            between you, the "User," "You," or "Your," and [PHOENIX VENTURES
            CAPITAL LTD], referred to as the ("Company," "We," or "Us"). The
            Agreement applies to your use of our website or service, accessible
            at
            <Link
              href="/"
              className="underline text-primary-dark hover:text-primary"
            >
              www.phoenixvc.uk
            </Link>
            .
          </p>
          <p className="mt-4">
            By accessing or using the service, you are agreeing to be bound by
            this Agreement, which includes any additional terms and conditions
            referenced herein or available by hyperlink.
          </p>
          <p className="mt-4">
            If you do not agree to these terms, please refrain from using the
            Service.
          </p>
          <p className="mt-4">
            Your use of the website, including the content, materials, and
            information provided on or through this website (collectively
            referred to as the "Materials"), is subject to these Terms of Use
            (referred to as "Terms").
          </p>
          <p className="mt-4">
            By using this website, you acknowledge that you have read and agreed
            to these Terms.
          </p>
        </div>
      </div>

      <div>
        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">1. Use of Service</h2>
          <ul>
            <li className="mt-4">
              You must have legal capacity to use the Service.
            </li>
            <li className="mt-4">
              You agree to comply with all applicable laws and regulations under
              the UK Data protection laws and laws under your local jurisdiction
              and where any of these Terms and Conditions is held to be invalid,
              the remaining terms and conditions shall continue to be valid to
              the fullest extent permitted by law
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">2. User Accounts</h2>
          <ul>
            <li className="mt-4">
              You may be required to create an account to use certain features
              of the Service.
            </li>
            <li className="mt-4">
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">THIRD-PARTY SITES</h2>
          <p className="text-sm sm:text-base text-black-8">
            We accept no responsibility for third-party sites available through
            the Website, via hyperlink or other means. We strongly advise you to
            review the terms of use that apply to those sites. Please note that
            any access to or use of a third-party site is entirely at your own
            risk.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">
            PASSWORD PROTECTED AREAS
          </h2>
          <p className="text-sm sm:text-base text-black-8">
            Please note that certain Materials on this website are accessible
            through a password-protected area. Each password is confidential and
            should only be used by the individual or entity to whom it was
            issued.
          </p>

          <p className="mt-4">
            Do not share your password with anyone who is not authorized to have
            access.
          </p>
          <p className="mt-4">
            If you access Materials through a password-protected area, please be
            aware that the written agreements between you and the relevant
            Venture Capital entities, as well as any provisions set forth in
            those materials, govern the parties' respective rights and
            obligations regarding those materials.
          </p>
          <p className="mt-4">
            Materials provided through a password-protected area are generally
            confidential and subject to limitations on disclosure and use.
            Phoenix Venture Capital Ltd individuals and entities have limited
            liability with respect to the accuracy and completeness of such
            materials.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">VIRUSES</h2>
          <p className="text-sm sm:text-base text-black-8">
            Please note that we cannot guarantee the security of this Website or
            that it is free from bugs or viruses. It is your responsibility to
            properly configure your information technology, computer programs,
            and platform to access the website. Additionally, we highly
            recommend that you use your own virus protection software.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-bold sm:text-lg mb-3">UNAUTHORISED USER</h2>
          <p className="text-sm sm:text-base text-black-8">
            Please be advised that it is strictly prohibited to misuse the
            Website or introduce malicious material such as viruses, trojans,
            worms, logic bombs, or any other technologically harmful content.
          </p>

          <p className="mt-4">
            Additionally, you must not attempt to gain unauthorized access to
            the Website, the server on which the Website is stored, or any
            server, computer, or database connected to the Website.
          </p>
          <p className="mt-4">
            It is also prohibited to attack the Website via a denial-of-service
            or distributed denial-of-service attack.
          </p>
          <p className="mt-4">
            Please note that should you breach this provision, you would be
            committing a criminal offense under the Computer Misuse Act 1990 or
            the comparable legislation in the relevant jurisdictions if you are
            not accessing the Website from within the UK.
          </p>
          <p className="mt-4">
            In such cases, we will report any breach to the relevant law
            enforcement authorities and will cooperate with them by disclosing
            your identity to the extent permitted by law.
          </p>
          <p className="mt-4">
            Finally, please be aware that any breach of this provision will
            result in an immediate cessation of your right to use the Website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
