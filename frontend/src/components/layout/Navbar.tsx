"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import isecurionLogo from "../../assets/home/isecurion_logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Company", href: "/company" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-[#020E1C]">
      <div className="mx-auto max-w-7xl ">
      <div className="relative max-w-7xl mx-auto flex h-[65px]  items-center justify-between px-6 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <Image
            src={isecurionLogo}
            alt="Isecurion"
            width={135}
            height={20}
            priority
            className="h-auto w-[130px] sm:w-[145px] lg:w-[150px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-center gap-14">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[16px] font-medium text-white transition-opacity duration-200 hover:opacity-75"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Contact Button */}
        <Link
          href="/company/contact"
          className="hidden lg:flex h-[40px] w-[120px] items-center justify-center rounded-[7px] border-[2px] border-[#3263B1] bg-gradient-to-r from-[#3263B1] to-[#1C3D70] text-[14px] font-semibold text-white shadow-[0_6px_20px_rgba(45,100,180,0.25)] transition-all duration-200 hover:brightness-110"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white lg:hidden"
        >
          <Icon
            icon={isOpen ? "material-symbols:close-rounded" : "material-symbols:menu-rounded"}
            className="h-8 w-8"
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden bg-[#020E1C] transition-all duration-300 lg:hidden ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="border-t border-white/10 px-6 py-6 sm:px-8">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-1 text-[16px] font-medium text-white transition-opacity hover:opacity-75"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="pt-2">
              <Link
                href="/company/contact"
                onClick={closeMenu}
                className="flex h-[50px] w-full items-center justify-center rounded-lg bg-gradient-to-b from-[#3D73BA] to-[#285899] text-[16px] font-semibold text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </header>
  );
}

export default Navbar;