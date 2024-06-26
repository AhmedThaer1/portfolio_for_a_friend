"use client";

import { motion, useInView, useScroll } from "framer-motion";
import BrainSvg from "../components/brain";
import PageTransEffect from "../components/pageTransEffect";
import { useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef(null);
  const isSkillVisible = useInView(skillRef, { margin: "-100px" });
  // const isSkillVisible = useInView(skillRef, { once: true });

  const experienceRef = useRef(null);
  const isExperienceVisible = useInView(experienceRef, { margin: "-100px" });

  return (
    <PageTransEffect>
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* text section */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* biography */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Programmer, designer and developer in various fields such as
              programming, games, advertisements, applications, visual effects,
              smart devices and the Internet of Things. I aim to reach the
              highest capabilities and master the highest technical
              specializations to prove that humans are capable of everything.
            </p>
            <motion.div
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "20px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            </motion.div>
          </div>
          {/* skilles */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillVisible ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* skill list */}
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ x: "-300px" }}
              animate={isSkillVisible ? { x: 0 } : {}}
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                3D Artist
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Iot Dev.
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Game Dev.
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Photo Editor
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Video Editor
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vfx Artist
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Game Designer
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Concepts Designer
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Desktop App Programmer
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Highly Skilled Computer Troubleshooter
              </div>
            </motion.div>
            {/* skill scroll */}
            <motion.div
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "20px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            </motion.div>
          </div>
          {/* experience */}
          <div
            className="flex flex-col gap-12 justify-center pb-8"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-400px" }}
              animate={isExperienceVisible ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h1>
            {/* experience list */}
            <motion.div
              className=""
              initial={{ x: "-500px" }}
              animate={isExperienceVisible ? { x: 0 } : {}}
            >
              {/* items */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    3D Motion Designer At HAZE
                  </div>
                  <div className=" p-3 text-sm italic">
                    The task was to make motion videos for the company products
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>

              {/* items */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Game Dev.
                  </div>
                  <div className=" p-3 text-sm italic">
                    Worked as freelancer for many small local studios
                  </div>
                </div>
              </div>

              {/* items */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    IoT Dev.
                  </div>
                  <div className=" p-3 text-sm italic">
                    developing highly innovative
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>

              {/* items */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Color Corrector
                  </div>
                  <div className=" p-3 text-sm italic">
                    Worked as freelancer as a video and images color corrector
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* svg section */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <BrainSvg scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </PageTransEffect>
  );
}
