"use client";

import { motion } from "framer-motion";

export default function PageTransEffect({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
