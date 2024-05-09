"use client";

import { useRef } from "react";
import PageTransEffect from "../components/pageTransEffect";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioLinks } from "../_links/portfolioLinks";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <PageTransEffect>
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-4 items-center justify-center text-8xl text-center">
          My Works
          <span className="uppercase text-xl">
            if you can imagine something , I can make it even better
          </span>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"></div>
            {portfolioLinks.map((link) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${link.color}`}
                key={link.id}
              >
                <div className="flex flex-col gap-8 text-white justify-center items-center">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {link.title}
                  </h1>
                  <div
                    className={`relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[${link.width}] xl:h-[${link.height}]`}
                  >
                    {link.img && (
                      <Image src={link.img} alt="Work Images" fill />
                    )}
                  </div>
                  <p
                    className={`w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[${link.width}]`}
                  >
                    {link.desc}
                  </p>
                  <Link href={link.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-2 md:text-lg lg:p-6 lg:text-xl bg-white text-gray-600 font-semibold m-4 rounded hover:bg-black hover:text-white">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1>Do You Want a Designer?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Graphic Designer And More
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </PageTransEffect>
  );
}
