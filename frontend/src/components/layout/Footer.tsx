import React from "react";
import Image from "next/image";
import isecurion_logo from "../../assets/home/isecurion_logo.png";
import { Icon } from "@iconify/react";
import lock from "../../assets/home/lock.png";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl bg-[#060D1B]">
        <div className="relative overflow-hidden rounded-t-[42px] bg-[#121828] px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
          {/* CTA */}
          <div className="relative z-10 space-y-5">
            <h3 className="max-w-md font-semibold leading-[45px] text-white sm:text-[32px]">
              Ready to strengthen your security posture?
            </h3>

            <p className="max-w-[520px] text-[16px] font-medium leading-7 text-[#8F90AB] sm:text-[18px]">
              Partner with ISECURION to identify risks, close gaps, and build a
              stronger, more resilient organization.
            </p>

            <div className="flex flex-col gap-3 py-3 sm:flex-row">
              <button className="flex cursor-pointer items-center justify-center rounded-lg bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] px-5 py-3 text-base font-semibold text-white">
                Schedule a Consultation →
              </button>

              <button className="flex cursor-pointer items-center justify-center rounded-lg border border-[#D8E4EF] bg-white px-5 py-3 text-base font-semibold text-[#31435C]">
                Talk to an Expert
              </button>
            </div>
          </div>

          {/* FOOTER CONTENT */}
          <div className="relative z-10 mt-8 flex flex-col gap-10 py-8 lg:flex-row lg:gap-8">
            {/* LEFT - LOGO */}
            <div className="w-full lg:w-[27%]">
              <Image
                src={isecurion_logo}
                alt="Isecurion"
                className="h-[50px] w-[200px]"
              />

              <p className="mt-5 max-w-xs text-sm leading-7 text-[#9AA4BA]">
                Building cyber resilience through intelligent security services,
                platforms and continuous validation.
              </p>

              <h4 className="mt-8 text-sm font-medium text-white">
                CONNECT WITH US
              </h4>

              <div className="mt-3 flex gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1E2433] text-white">
                  <Icon icon="iconoir:facebook" width={18} />
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1E2433] text-white">
                  <Icon icon="line-md:twitter" width={18} />
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1E2433] text-white">
                  <Icon icon="ri:linkedin-line" width={18} />
                </div>
              </div>
            </div>

            {/* CENTER - LINKS + CONTACT */}
            <div className="w-full lg:w-[43%]">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {/* Company */}
                <div>
                  <h3 className="mb-5 text-sm font-semibold text-white">
                    Company
                  </h3>

                  <ul className="space-y-3 text-sm text-[#BFBFBF]">
                    <li>About</li>
                    <li>Industries</li>
                    <li>Case Studies</li>
                    <li>Careers</li>
                    <li>Contact</li>
                  </ul>
                </div>

                {/* Capabilities */}
                <div>
                  <h3 className="mb-5 text-sm font-semibold text-white">
                    Capabilities
                  </h3>

                  <ul className="space-y-3 text-sm text-[#BFBFBF]">
                    <li>VAPT</li>
                    <li>Compliance Auditing</li>
                    <li>VCISO Services</li>
                    <li>DPDP Act Compliance</li>
                    <li>
                      Market SOC
                      <br />
                      (MSOC) Services
                    </li>
                  </ul>
                </div>

                {/* Platforms */}
                <div>
                  <h3 className="mb-5 text-sm font-semibold text-white">
                    Platforms
                  </h3>

                  <ul className="space-y-3 text-sm text-[#BFBFBF]">
                    <li>Vulnytics</li>
                    <li>Drosera Phishing</li>
                    <li>LMS</li>
                  </ul>
                </div>
              </div>

              {/* CONTACT CARD */}
              <div className="mt-10 flex flex-col gap-4 rounded-xl bg-[#1E2433] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                    <Icon
                      icon="material-symbols:mail-shield-rounded"
                      className="text-[#0F66EA]"
                      width={20}
                    />
                  </div>

                  <span className="text-sm font-medium text-white">
                    info@isecurion.com
                  </span>
                </div>

                <div className="hidden h-[40px] w-[2px] bg-[#454D5F] sm:block"></div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                    <Icon
                      icon="solar:call-medicine-bold"
                      className="text-[#0F66EA]"
                      width={20}
                    />
                  </div>

                  <span className="text-sm font-medium text-white">
                    +91 88612 01570
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT - GLOBAL PRESENCE */}
            <div className="w-full lg:flex-1">
              <h3 className="mb-5 text-sm font-semibold text-white">
                Global Presence
              </h3>

              <ul className="space-y-3 text-sm text-[#BFBFBF]">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#0D2D7E]"></span>
                  Bangalore (HQ)
                </li>

                <p className="ml-5 leading-5">
                  #670, 2nd Floor, 6th Main Road, RBI Layout, Opposite Elita
                  Promenade, J P Nagar 7th Phase, Bengaluru - 560078, Karnataka,
                  INDIA
                </p>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#0D2D7E]"></span>
                  Kolkata
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#0D2D7E]"></span>
                  Ahmedabad
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#0D2D7E]"></span>
                  Noida
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#0D2D7E]"></span>
                  United States
                </li>
              </ul>
            </div>
          </div>

          {/* LOCK IMAGE */}
          <Image
            src={lock}
            alt="Lock"
            className="pointer-events-none absolute -bottom-24 -right-40 z-0 hidden h-[350px] w-[380px] lg:block"
          />
        </div>

        {/* COPYRIGHT BAR */}
        <div className="flex flex-col gap-3 bg-[#262D3D] px-6 py-4 text-[13px] text-white sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="flex flex-wrap gap-3">
            <p>Copyright ©2026 Isecurion</p>

            <span className="hidden sm:block">|</span>

            <p>All Rights Reserved</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="">Privacy &amp; Policy</Link>

            <span className="hidden sm:block">|</span>

            <Link href="">Disclaimer</Link>

            <span className="hidden sm:block">|</span>

            <Link href="">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
