"use client";

import Link from "next/link";
import { NavLinks } from "../_links/NavLinks";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface MenuButtonProps {
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 text-black w-1/3">
        {NavLinks.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={`rounded p-1 ${
              path === link.url && "bg-black text-white"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="md:flex xl:w-1/3 xl:justify-center">
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">LOGO</span>
          <span className="w-20 h-8 rounded bg-white text-black flex items-center justify-center">
            .Designer
          </span>
        </Link>
      </div>

      <div className="md:hidden">
        <MenuButton setIsOpen={setIsOpen} />
        {isOpen && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {NavLinks.map((link) => (
              <Link href={link.url} key={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MenuButton({ setIsOpen }: MenuButtonProps) {
  return (
    <button
      className="w-10 h-8 flex flex-col justify-between z-50 relative"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="w-10 h-1 bg-black rounded"></div>
      <div className="w-10 h-1 bg-black rounded"></div>
      <div className="w-10 h-1 bg-black rounded"></div>
    </button>
  );
}
