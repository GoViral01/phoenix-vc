import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";

interface INav {
  name: string;
  href: string;
}

interface ISocials {
  name: string;
  href: string;
  icon: React.JSX.Element;
}

const Footer = () => {
  const NAV_LINKS: INav[] = [
    {
      name: "About us",
      href: "/",
    },
    {
      name: "Approach",
      href: "/",
    },
    {
      name: "Portfolio",
      href: "/",
    },
    {
      name: "Community",
      href: "/",
    },
    {
      name: "News",
      href: "/",
    },
  ];

  const SOCIAL_LINKS: ISocials[] = [
    {
      name: "LinkedIn",
      href: "/",
      icon: <IoLogoLinkedin />,
    },
    {
      name: "Facebook",
      href: "/",
      icon: <IoLogoFacebook />,
    },
    {
      name: "Instagram",
      href: "/",
      icon: <IoLogoInstagram />,
    },
    {
      name: "Twitter",
      href: "/",
      icon: <FaXTwitter />,
    },
  ];

  return (
    <footer className="bg-darkBg text-white px-5 sm:px-10 xl:px-28 flex items-center py-20">
      <div className="w-full">
        <div className="flex justify-between lg:w-3/4">
          <Link
            href="/"
            aria-label="home"
            className="max-w-[122px] max-h-[122px]"
          >
            <Image
              src="/logo-for-footer.png"
              alt="Phoenix VC logo"
              width={500}
              height={500}
            />
          </Link>

          <div>
            <h2 className="uppercase mb-4 text-black-light">Links</h2>
            <nav className="flex flex-col gap-4" role="menu">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  role="menuitem"
                  className="text-sm font-semibold hover:text-black-light transition duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="uppercase mb-4 text-black-light">Socials</h2>
            <nav className="flex flex-col gap-4" role="menu">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  href={social.href}
                  key={social.name}
                  role="menuitem"
                  className="flex items-center gap-3 text-sm font-semibold hover:text-black-light transition duration-300"
                >
                  {social.icon}
                  {social.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="uppercase mb-5 text-black-light">Visit us</h2>
            <p className="text-sm font-semibold">
              123 Main Street, <br /> Anytown, USA 12345
            </p>
          </div>
        </div>

        <div className="bg-black-light w-full h-[1px] my-16" />

        <div className="flex justify-between items-center">
          <div className="text-black-light text-sm">
            &copy; 2024 Phoenix Venture Capital LTD. All rights reserved
          </div>

          <div className="flex gap-4 items-center text-sm text-[#BFBFBF]">
            <Link
              href="/"
              className="hover:text-black-light transition duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="hover:text-black-light transition duration-300 border-r border-l border-black-light px-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="hover:text-black-light transition duration-300"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
