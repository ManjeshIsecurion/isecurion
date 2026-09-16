"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import securityvalidation from "../../../assets/services/securityvalidation.jpg";
import React from "react";
import Image from "next/image";

const vapt = [
  {
    no: "500+",
    title: "VAPT Engagements",
  },
  {
    no: "100+",
    title: "Enterprise Customers",
  },
  {
    no: "CERT-In",
    title: "Empanelled",
  },
];

const data = [
  {
    icon: "material-symbols:lock-outline",
    title: "Prevent Breaches",
    description:
      "Proactively detect and remediate high-risk vulnerabilities before attackers exploit them.",
  },
  {
    icon: "material-symbols:lock-outline",
    title: "Build Trust",
    description:
      "Demonstrate security assurance to customers, investors, auditors, and regulators.",
  },
  {
    icon: "material-symbols:lock-outline",
    title: "Stay Compliant",
    description:
      "Meet ISO 27001, SOC 2, PCI DSS, HIPAA, RBI, SEBI, IRDAI, and DPDP requirements effortlessly.",
  },
  {
    icon: "material-symbols:lock-outline",
    title: "Reduce Financial Risk",
    description:
      "Avoid costs from downtime, regulatory penalties, litigation, and breach remediation.",
  },
];

const services = [
  {
    title: "Web Application Penetration Testing",
    description:
      "Identify and exploit vulnerabilities across web applications.",
    list: [
      "OWASP Top 10 testing",
      "Authentication and authorization testing",
      "Business logic and API security testing",
    ],
  },
];

function page() {
  return (
    <div>
      <section className="relative w-full py-14 flex flex-col justify-center items-center min-h-[88vh] 2xl:min-h-[68vh] overflow-hidden bg-linear-to-b from-[#1F407C] to-[#17366E]">
        <div className="absolute top-0 left-0 w-[220px] h-[200px] opacity-20 z-10 pointer-events-none bg-[radial-gradient(circle,#FFFFFF_3px,transparent_3px)] [background-size:20px_20px]"></div>

        <div className="absolute right-0 bottom-0 w-[220px] h-[200px] opacity-20 z-10 pointer-events-none bg-[radial-gradient(circle,#FFFFFF_3px,transparent_3px)] [background-size:20px_20px]"></div>

        {/* Outer Large Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[1000px] h-[1000px] rounded-full bg-[#FFFFFF40]/30 flex justify-center items-center pointer-events-none">
          <div className="w-[550px] h-[550px] rounded-full bg-[#1F407C]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 space-y-8 text-center flex flex-col items-center">
          {/* Heading */}
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
              delay: 0.2,
              ease: "easeOut",
            }}
            className="font-semibold mx-auto text-[#FFFFFF] "
          >
            Vulnerability Assessment & Penetration Testing (VAPT) Services in
            India
          </motion.h1>

          {/* Paragraph */}
          <p className="text-lg font-medium max-w-3xl mx-auto text-[#D9D9D9] leading-[32px]">
            Identify security vulnerabilities before attackers do. Our
            expert-led VAPT services combine automated scanning with manual
            penetration testing to uncover real-world risks across applications,
            networks, cloud environments, and infrastructure.
          </p>

          {/* BUTTONS CONTAINER */}
          <div className="flex flex-wrap gap-4 items-center justify-center pt-2">
            <button className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg cursor-pointer text-base font-semibold text-[#234AA6] bg-[#DDF4FA]  transition duration-200">
              Explore VAPT Services
              <span>
                <Icon icon="ep:right" className="text-lg" />
              </span>
            </button>
            <button className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg cursor-pointer text-base font-semibold text-[#31435C] bg-[#FFFFFF]  transition duration-200">
              Request a Consultation
              <span>
                <Icon icon="ep:right" className="text-lg" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto  py-7  relative -top-15 z-30 rounded-xl bg-[#FFFFFF] shadow-2xl shadow-[#7D70F024]">
        <div className="grid grid-cols-3 items-center justify-around">
          {vapt.map((item, index) => (
            <div
              key={index}
              className={`text-center space-y-2 ${index == 2 ? "" : "border-r border-[#DCDBDF]"}`}
            >
              <h3 className="text-xl font-semibold text-[#0F66EA]">
                {" "}
                {item.no}
              </h3>
              <p className="text-base font-medium text-[#262D3D]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className="pt-5 pb-14 w-full bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="">
            <h2 className="font-medium">
              What is <span className="text-[#0F66EA]"> VAPT?</span>
            </h2>
            <p className="mt-6 text-lg font-normal max-w-3xl leading-[30px] text-[#8F90AB]">
              Vulnerability Assessment and Penetration Testing (VAPT) is a
              comprehensive cybersecurity approach that helps organizations
              identify, validate and remediate security weaknesses before
              attackers can exploit them.
            </p>
            <ul className="space-y-2 mt-3">
              <li className="text-base font-normal  flex items-center gap-2 text-[#636977]">
                <span>
                  <Icon icon="bx:badge" className="text-[#0F66EA]" />
                </span>
                Combines automated vulnerability scanning with expert-led
                penetration testing.
              </li>
              <li className="text-base font-normal  flex items-center gap-2 text-[#636977]">
                <span>
                  <Icon icon="bx:badge" className="text-[#0F66EA]" />
                </span>
                Provides complete visibility of your security posture and
                business risks.
              </li>
            </ul>
          </div>
          <div className="flex mt-10 gap-10">
            <div
              className="flex-1  bg-cover  p-4 flex flex-col justify-around rounded-xl"
              style={{ backgroundImage: `url(${securityvalidation.src})` }}
            >
              <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white">
                <Icon
                  icon="material-symbols:lock-outline"
                  className="text-[#0F66EA] w-[20px] h-[20px]"
                />
              </div>
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-[#0C0407]">
                  Comprehensive Security Validation
                </h3>
                <p className="text-base font-normal leading-[28px] text-[#455F6D]">
                  Gain complete visibility into your organization’s security
                  posture through automated vulnerability discovery and
                  expert-led penetration testing.
                </p>
              </div>
              <button className="text-base font-semibold py-3 rounded-lg cursor-pointer text-[#FFFFFF] bg-linear-to-b from-[#3477C5] to-[#3A84DA]">
                Explore Our Methodology →
              </button>
            </div>
            {/* second  */}
            <div className="flex-2  grid grid-cols-2 gap-5">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="space-y-10 rounded-xl p-5 bg-[#F8F8F8]"
                >
                  <div className="h-[48px] w-[48px] rounded-full flex items-center justify-center shadow-xl  bg-white">
                    <Icon
                      icon={item.icon}
                      className="text-[#0F66EA] w-[20px] h-[20px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#0C0407]">
                      {item.title}
                    </h3>
                    <p className="text-sm font-normal text-[#455F6D]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-14 bg-[#E2F0FF]/10 border border-red-500">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="space-y-3">
            <div className="rounded-4xl px-4 py-2 w-fit bg-[#FFFFFF] border border-[#E3EAF1]">
              <p className="text-sm font-medium flex items-center gap-2  uppercase text-[#636977]">
                <span>
                  <Icon
                    icon="uil:setting"
                    className="text-[#0F66EA] text-[18px]"
                  />
                </span>
                our services
              </p>
            </div>
            <h2 className="text-[38px] font-medium max-w-xl leading-[48px]">
              End-to-End <span className="text-[#0F66EA]">VAPT</span> &
              Penetration Testing Services
            </h2>
            <p className="text-lg font-normal max-w-lg text-[#8F90AB]">
              End-to-end security testing across every layer of your technology
              stack, from Bangalore to New York.
            </p>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default page;
