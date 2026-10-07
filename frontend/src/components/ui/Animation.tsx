"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimationProps {
  delay?: number;
  children: React.ReactNode;
}

function Animation({ delay = 0, children }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 1.2,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default Animation;
