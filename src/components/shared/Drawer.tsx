"use client";

import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";

interface INav {
  name: string;
  href: string;
}

export function NavDrawer() {
  const NAV_LINKS: INav[] = [
    {
      name: "Home",
      href: "/",
    },
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
      href: "/community",
    },
    {
      name: "Community",
      href: "/community",
    },
  ];

  const pathname = usePathname();
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      {!open ? (
        <DrawerTrigger asChild>
          <button className="text-3xl">
            <HiOutlineMenu />
          </button>
        </DrawerTrigger>
      ) : (
        <DrawerClose>
          <button className="text-3xl text-black-8">
            <IoCloseOutline />
          </button>
        </DrawerClose>
      )}
      <DrawerContent className="top-0 right-0 ml-auto mt-16 h-fit rounded-none">
        <nav className="flex flex-col gap-6 px-5 pb-8">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={twMerge(
                "uppercase text-sm font-semibold hover:text-primary transition duration-300",
                pathname === link.href && "text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
