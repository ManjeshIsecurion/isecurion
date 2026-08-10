"use client";

import { motion } from "framer-motion";

interface TimelineAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

export default function TimelineAnimation({
  children,
  delay = 0,
}: TimelineAnimationProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
