import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

interface INav {
  name: string;
  href: string;
}

const Header = () => {
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

  return (
    <header className="h-16 md:h-20 px-5 sm:px-10 2xl:px-20 flex items-center">
      <div className="flex justify-between items-center w-full self-stretch">
        <Link href="/" aria-label="home" className="max-w-40">
          <Image
            src="/logo.png"
            alt="Phoenix VC logo"
            width={500}
            height={500}
          />
        </Link>

        <nav className="flex gap-5 xl:gap-14 items-center" role="menu">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              role="menuitem"
              className="uppercase text-sm font-semibold hover:text-primary transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div>
          <Button
            buttonText="Investor Login"
            showIcon={true}
            className="border border-primary text-primary text-sm h-11 hover:bg-primary hover:text-white transition duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
