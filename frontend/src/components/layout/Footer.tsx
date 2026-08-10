import React from "react";
import Image from "next/image";
import isecurion_logo from "../../assets/home/isecurrionwhite_logo.svg";
import { Icon } from "@iconify/react";
import lock from "../../assets/home/lock.png";
import Link from "next/link";
function Footer() {
  return (
    <div>
      <div className="w-full pt-10 pb-2 bg-[#121828]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold max-w-md text-[#FFFFFF] leading-[45px]">
              Ready to strengthen your security posture?
            </h2>
            <p className="text-lg font-medium max-w-lg leading-7  text-[#8F90AB]">
              Partner with ISECURION to identify risks, close gaps, and build a
              stronger, more resilient organization.
            </p>
            <div className="space-x-10">
              <button className="px-6 py-3 text-base font-semibold rounded-lg cursor-pointer bg-[#FFFFFF] text-[#234AA6]">
                Schedule a Consultation →
              </button>
              <button className="px-6 py-3 text-base font-semibold rounded-lg cursor-pointer border border-[#D8E4EF] bg-[#FFFFFF] text-[#31435C]">
                Talk to an Expert
              </button>
            </div>
          </div>

          {/* <div className="grid grid-cols-12  gap-5 relative overflow-hidden mt-8">
            <div className="col-span-3">
              <Image
                src={isecurion_logo}
                alt="Isecurion"
                className="w-[200px] h-[50px]"
              />

              <p className="mt-5 max-w-xs text-sm leading-7 text-[#9AA4BA]">
                Building cyber resilience through intelligent security services,
                platforms and continuous validation.
              </p>

              <h4 className=" text-sm font-semibold text-[#FFFFFF]">
                CONNECT WITH US
              </h4>

              <div className="mt-5 flex gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full text-[#FFFFFF] bg-[#1E2433]">
                  <Icon icon="iconoir:facebook" width={18} />
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full text-[#FFFFFF] bg-[#1E2433]">
                  <Icon icon="line-md:twitter" width={18} />
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full text-[#FFFFFF] bg-[#1E2433]">
                  <Icon icon="ri:linkedin-line" width={18} />
                </div>
              </div>
            </div>

            <div className="col-span-7">
              <div className="grid grid-cols-4 gap-10">
                <div>
                  <h3 className="mb-5 text-sm font-semibold text-[#FFFFFF]">
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

                <div>
                  <h3 className="mb-5 text-sm font-semibold text-[#FFFFFF]">
                    Capabilities
                  </h3>

                  <ul className="space-y-3 text-sm text-[#BFBFBF]">
                    <li>VAPT</li>
                    <li>Compliance Auditing</li>
                    <li>VCISO Services</li>
                    <li>DPDP Act Compliance</li>
                    <li>Market SOC (MSOC)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-5 text-sm font-semibold text-[#FFFFFF]">
                    Platforms
                  </h3>

                  <ul className="space-y-3 text-sm text-[#BFBFBF]">
                    <li>Vulnytics</li>
                    <li>Drosera Phishing</li>
                    <li>LMS</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-5 text-sm font-semibold text-[#FFFFFF]">
                    Global Presence
                  </h3>

                  <ul className="space-y-3 text-sm  text-[#BFBFBF]">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0D2D7E]"></span>{" "}
                      Bangalore (HQ)
                    </li>

                    <p className="ml-10">
                      #670, 2nd Floor, 6th Main Road, RBI Layout, Opposite Elita
                      Promenade, J P Nagar 7th Phase, Bengaluru - 560078,
                      Karnataka, INDIA
                    </p>

                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0D2D7E]"></span>{" "}
                      Bangalore (HQ)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0D2D7E]"></span>{" "}
                      Bangalore (HQ)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0D2D7E]"></span>{" "}
                      Bangalore (HQ)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0D2D7E]"></span>{" "}
                      Bangalore (HQ)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex w-fit rounded-xl bg-[#1E2433] p-2">
                <div className="flex items-center gap-4 border-r border-[#454D5F] px-6 py-4">
                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#FFFFFF]">
                    <Icon
                      icon="material-symbols:mail-shield-rounded"
                      className="text-[#0F66EA]"
                      width={20}
                    />
                  </div>

                  <span className="text-sm font-medium text-[#FFFFFF]">
                    info@isecurion.com
                  </span>
                </div>

                <div className="flex items-center gap-4 px-6 py-4">
                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#FFFFFF]">
                    <Icon
                      icon="solar:call-medicine-bold"
                      className="text-[#0F66EA]"
                      width={20}
                    />
                  </div>

                  <span className="text-sm text-[#FFFFFF] font-medium">
                    +91 88612 01570
                  </span>
                </div>
              </div>
            </div>

            <Image
              src={lock}
              alt="Lock"
              className="absolute -right-50 z-50 top-35 -bottom-10 w-[380px] h-[300px]"
            />
          </div> */}
          <div className="flex  gap-15 relative overflow-hidden mt-8">
            <div className="w-[25%]">
              <Image
                src={isecurion_logo}
                alt="Isecurion"
                className="w-[200px] h-[50px]"
              />

              <p className="mt-5 max-w-xs text-sm leading-7 text-[#9AA4BA]">
                Building cyber resilience through intelligent security services,
                platforms and continuous validation.
              </p>

              <h4 className=" text-sm font-semibold text-[#FFFFFF] mt-8">
                CONNECT WITH US
              </h4>

              <div className="mt-3 flex gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full text-[#FFFFFF] bg-[#1E2433]">
                  <Icon icon="iconoir:facebook" width={18} />
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full text-[#FFFFFF] bg-[#1E2433]">
                  <Icon icon="line-md:twitter" width={18} />
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full text-[#FFFFFF] bg-[#1E2433]">
                  <Icon icon="ri:linkedin-line" width={18} />
                </div>
              </div>
            </div>

            <div className="w-[40%]">
              <div className="flex justify-between gap-5">
                <div>
                  <h3 className="mb-5 text-sm font-semibold text-[#FFFFFF]">
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

                <div>
                  <h3 className="mb-5 text-sm font-semibold text-[#FFFFFF]">
                    Capabilities
                  </h3>

                  <ul className="space-y-3 text-sm text-[#BFBFBF]">
                    <li>VAPT</li>
                    <li>Compliance Auditing</li>
                    <li>VCISO Services</li>
                    <li>DPDP Act Compliance</li>
                    <li>Market SOC (MSOC)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-5 text-sm font-semibold text-[#FFFFFF]">
                    Platforms
                  </h3>

                  <ul className="space-y-3 text-sm text-[#BFBFBF]">
                    <li>Vulnytics</li>
                    <li>Drosera Phishing</li>
                    <li>LMS</li>
                  </ul>
                </div>
              </div>

              {/* contact card  */}
              <div className="mt-5 flex justify-between items-center rounded-xl bg-[#1E2433] px-5 py-2">
                <div className="flex items-center gap-4 ">
                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#FFFFFF]">
                    <Icon
                      icon="material-symbols:mail-shield-rounded"
                      className="text-[#0F66EA]"
                      width={20}
                    />
                  </div>

                  <span className="text-sm font-medium text-[#FFFFFF]">
                    info@isecurion.com
                  </span>
                </div>
                <div className="w-[2px] h-[50px] bg-[#454D5F]"></div>
                <div className="flex items-center gap-4">
                  <div className="w-[40px] h-[40px] flex items-center shrink-0 justify-center rounded-full bg-[#FFFFFF]">
                    <Icon
                      icon="solar:call-medicine-bold"
                      className="text-[#0F66EA]"
                      width={20}
                    />
                  </div>

                  <span className="text-sm text-[#FFFFFF] font-medium">
                    +91 88612 01570
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[30%]">
              <div>
                <h3 className="mb-5 text-sm font-semibold text-[#FFFFFF]">
                  Global Presence
                </h3>

                <ul className="space-y-3 text-sm  text-[#BFBFBF]">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0D2D7E]"></span>{" "}
                    Bangalore (HQ)
                  </li>

                  <p className="ml-3.5">
                    #670, 2nd Floor, 6th Main Road, RBI Layout, Opposite Elita
                    Promenade, J P Nagar 7th Phase, Bengaluru - 560078,
                    Karnataka, INDIA
                  </p>

                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0D2D7E]"></span>{" "}
                    Kolkta
                  </li>
                  <p className="ml-3.5">
                    Arch Square, 8th Floor, Unit No. 809, Tower 1, Salt Lake
                    City, Sector-V, Kolkata – 700091, West Bengal
                  </p>

                  {/* <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0D2D7E]"></span>{" "}
                    Ahmedabad
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0D2D7E]"></span>{" "}
                    Noida
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0D2D7E]"></span>{" "}
                    United States
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#262D3D]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-3 ">
          <div className="flex gap-3 text-base font-medium text-[#FFFFFF]">
            <p>Copyright ©2026 Isecurion</p>
            <p>All Rights Reserved</p>
          </div>
          <div className="flex gap-3 text-base font-medium text-[#FFFFFF]">
            <Link href="">Privacy & Policy</Link>
            <Link href="">Disclaimer</Link>
            <Link href="">Terms of Use</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
