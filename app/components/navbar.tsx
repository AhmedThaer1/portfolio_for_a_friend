"use client";

import Link from "next/link";
import { NavLinks } from "../_links/NavLinks";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  listVariants,
  topVartiants,
  centerVartiants,
  bottomVartiants,
  listItemsVariants,
} from "@/framerMotion/variants";
import Image from "next/image";

interface MenuButtonProps {
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  isOpen: boolean;
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

      <div className="md:flex xl:w-1/3 xl:justify-center gap-4">
        <Link
          href={"https://www.artstation.com/mohammadar"}
          target="_blank"
          className="bg-black p-1 flex items-center justify-center rounded-xl"
        >
          <Image
            src={"/ArtStation-H.svg"}
            alt="ArtStation Icon"
            width={35}
            height={35}
          />
        </Link>
        <Link
          href={"https://www.instagram.com/m_ar_95/"}
          target="_blank"
          className="bg-blue-200 p-1 flex items-center justify-center rounded-xl"
        >
          <Image src={"/ig.png"} alt="ArtStation Icon" width={35} height={35} />
        </Link>
      </div>

      <div className="md:hidden">
        <MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />

        {isOpen && (
          <motion.div
            variants={listVariants}
            initial={"closed"}
            animate={"opened"}
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {NavLinks.map((link) => (
              <motion.div
                className=""
                variants={listItemsVariants}
                key={link.url}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

function MenuButton({ setIsOpen, isOpen }: MenuButtonProps) {
  return (
    <button
      className="w-10 h-8 flex flex-col justify-between z-50 relative"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <motion.div
        variants={topVartiants}
        animate={isOpen ? "opened" : "closed"}
        className="w-10 h-1 bg-black rounded origin-left"
      ></motion.div>
      <motion.div
        variants={centerVartiants}
        animate={isOpen ? "opened" : "closed"}
        className="w-10 h-1 bg-black rounded"
      ></motion.div>
      <motion.div
        variants={bottomVartiants}
        animate={isOpen ? "opened" : "closed"}
        className="w-10 h-1 bg-black rounded origin-left"
      ></motion.div>
    </button>
  );
}
