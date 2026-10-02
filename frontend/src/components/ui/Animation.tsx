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
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function AnimatedHeading({
  children,
  className = "",
  delay = 0.2,
}: AnimatedHeadingProps) {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: "easeOut",
      }}
      className={`font-semibold mx-auto max-w-2xl text-[#FFFFFF] ${className}`}
    >
      {children}
    </motion.h1>
  );
}

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}
function AnimatedCard({
  children,
  delay = 0,
  className = "",
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface LeftAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

function LeftAnimation({ children, delay = 0 }: LeftAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}

interface LeftAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

function RightAnimation({ children, delay = 0 }: LeftAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedHeading1({
  text,
  className = "",
  delay = 0.1,
}: AnimatedHeadingProps) {
  return (
    <h1 className={className}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * delay,
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
import { Icon } from "@iconify/react";
interface GradientIconProps {
  Icon?: string;
  className?: string;
}

function GradientIcon({
  Icon: iconName,
  className = "w-8 h-8",
}: GradientIconProps) {
  return (
    <div
      className={className}
      style={{
        background: "linear-gradient(180deg, #0FEADB 0%, #0F66EA 100%)",
        WebkitMaskImage: `url("https://api.iconify.design/${iconName}.svg")`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: `url("https://api.iconify.design/${iconName}.svg")`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
      }}
    />
  );
}

export {
  Animation,
  AnimatedHeading,
  AnimatedCard,
  LeftAnimation,
  RightAnimation,
  AnimatedHeading1,
  GradientIcon,
};
