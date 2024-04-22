"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import LinkButton from "./Button";

interface INav {
  name: string;
  href: string;
}

const Header = () => {
  const NAV_LINKS: INav[] = [
    {
      name: "About us",
      href: "/about",
    },
    {
      name: "Approach",
      href: "/approach",
    },
    {
      name: "Portfolio",
      href: "",
    },
    {
      name: "Community",
      href: "/community",
    },
    {
      name: "News",
      href: "/news",
    },
  ];

  const pathname = usePathname();

  return (
    <header className="h-16 md:h-20 px-5 sm:px-10 xl:px-28 flex items-center">
      <div className="flex gap-6 justify-between items-center w-full self-stretch">
        <Link href="/" aria-label="home" className="w-32 md:w-40">
          <Image
            src="/logo.png"
            alt="Phoenix VC logo"
            width={500}
            height={500}
          />
        </Link>

        <nav
          className="hidden lg:flex gap-5 xl:gap-14 items-center"
          role="menu"
        >
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              role="menuitem"
              className={twMerge(
                "uppercase text-sm font-semibold hover:text-primary transition duration-300",
                pathname === link.href && "text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div>
          <LinkButton
            buttonText="Investor Login"
            href="/"
            showIcon={true}
            className="border border-primary text-primary text-sm h-11 hover:bg-primary hover:text-white transition duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
