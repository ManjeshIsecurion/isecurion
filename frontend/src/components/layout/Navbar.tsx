"use client";
import React, { useState } from "react";
import isecurionLogo from "../../assets/home/isecurrionwhite_logo.svg";
import { Icon } from "@iconify/react";
import Link from "next/link";
function Navbar() {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="w-full bg-[#161B2F]  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto  h-[68px]  flex items-center justify-between px-6 sm:px-10">
        <div>
          <img
            src={isecurionLogo.src}
            alt="isecurion Logo"
            className="w-[160px] h-[40px] cursor-pointer"
          />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-7 text-[#FFFFFF] text-sm font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              Company{" "}
              <span>
                <Icon icon="mingcute:down-line" />
              </span>{" "}
            </li>
            <li>Services</li>
            <li>
              <Link href="/company/about">About</Link>
            </li>
            <li>
              <Link href="/company/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="px-5 py-2.5 text-base font-medium cursor-pointer rounded-lg bg-gradient-to-l from-[#3477C5] to-[#3A84DA] text-[#FFFFFF] hover:bg-none hover:bg-[#DDF4FA] hover:text-[#234AA6] transition-all">
            Contact Us
          </button>
        </div>
        <div className="block md:hidden">
          <button
            className="cursor-pointer px-2 py-2 rounded-xl bg-gradient-to-l from-[#3477C5] to-[#3A84DA] text-[#FFFFFF]"
            onClick={() => setIsOpen(!open)}
          >
            <Icon
              icon={open ? "at-icons:cross" : "material-symbols:menu-rounded"}
              className="w-[20px] h-[20px]"
            />
          </button>
          <div
            className={`absolute left-0 top-full w-full bg-white shadow-lg transition-all duration-500 ease-in-out px-6 ${
              open
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col gap-5 p-6">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
