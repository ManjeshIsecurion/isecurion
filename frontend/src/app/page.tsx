"use client";
import { Icon } from "@iconify/react";
import herobackground from "../assets/home/homehero.png";
import tokenvalut from "../assets/home/client/tokenvalut.png";
import bookmyshow from "../assets/home/client/bookmyshow.png";
import bosch from "../assets/home/client/bosch.png";
import indegence from "../assets/home/client/indegence.png";
import allianz from "../assets/home/client/allianz.png";
import shellinfo from "../assets/home/client/shellinfo.png";

import indentifyrisk from "../assets/home/indentifyrisk.jpg";
import continuousvalidation from "../assets/home/continuousvalidattion.png";
import defence from "../assets/home/defence.png";
import buildtrust from "../assets/home/buildtrust.png";

import vulnytics from "../assets/home/vulnytics.svg";
import lms from "../assets/home/lms.svg";
import drosera from "../assets/home/droseradashboard.svg";

import left from "../assets/home/left.png";
import right from "../assets/home/right.png";

import IndustriesWeSecure from "../components/home/IndustriesWeSecure";

import iso27001 from "../assets/home/iso27001.png";
import iso90001 from "../assets/home/iso90001.png";

import ceh from "../assets/home/auditorcertifications/ceh.svg";
import ccna from "../assets/home/auditorcertifications/ccna.svg";
import oscp from "../assets/home/auditorcertifications/oscp.svg";
import mobile from "../assets/home/auditorcertifications/mobile.svg";
import cism from "../assets/home/auditorcertifications/cism.svg";
import cissp from "../assets/home/auditorcertifications/cissp.svg";
import cisa from "../assets/home/auditorcertifications/cisa.svg";
import Animation from "../components/ui/Animation";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const capabilities = [
  {
    icon: "si:shield-line",
    title: "Proactive Security Validation",
    description:
      "Identify vulnerabilities before attackers exploit them through continuous testing and real-world simulations.",
  },
  {
    icon: "tabler:brain",
    title: "Intelligent Security Platforms",
    description:
      "Purpose-built platforms that simplify vulnerability management, phishing simulations, and security awareness.",
  },
  {
    icon: "streamline:network",
    title: "Enterprise-Grade Expertise",
    description:
      "Trusted by enterprises to deliver scalable cybersecurity services across industries & evolving digital ecosystems.",
  },
];

const ourExpertise = [
  {
    Icon: "icon-park-outline:lock",
    title: "Offensive Security",
    description:
      "Identify vulnerabilities through proactive security testing and real-world attack simulations.",
    services: [
      "Vulnerability Assessment & Penetration Testing",
      "Data Forensics",
      "Web, Mobile & API Security",
      "Red Teaming",
    ],
    iconColor: "text-[#0F66EA]",
    bgColor: "#FFFFFF",
    descriptionColor: "text-[#90A1B9]",
    headingColor: "text-[#0F172B]",
    listColor: "text-[#232942]",
  },
  {
    Icon: "lucide:monitor-cog",
    title: "Managed Security",
    description:
      "Monitor, detect, and respond to cyber threats with managed security operations.",
    services: ["Managed SOC", "Threat Hunting", "Incident Response", "MDR"],
    iconColor: "text-[#0C3172]",
    bgColor: "#A2FFB82B",
    descriptionColor: "text-[#919292]",
    headingColor: "text-[#0F172B]",
    listColor: "text-[#0C3172]",
  },
  {
    Icon: "gridicons:cloud-outline",
    title: "Cloud & Infrastructure Security",
    description:
      "Secure cloud environments, infrastructure, identities across modern IT ecosystems.",
    services: [
      "Cloud Security Assessment",
      "Configuration Review",
      "Identity Security",
      "Infrastructure Hardening",
    ],
    iconColor: "text-[#F5F3FEAD]",
    bgColor: "#17366E",
    descriptionColor: "text-[#7780A4]",
    headingColor: "text-[#FFFFFF]",
    listColor: "text-[#FFFFFF]",
  },
  {
    Icon: "charm:notes-tick",
    title: "Governance, Risk & Compliance",
    description:
      "Build a compliant and resilient organization with governance frameworks & regulatory expertise.",
    services: ["ISO 27001", "SOC 2", "DPDP", "Risk Assessments"],
    iconColor: "text-[#ABB5D2]",
    bgColor: "#17366E",
    descriptionColor: "text-[#7780A4]",
    headingColor: "text-[#FFFFFF]",
    listColor: "text-[#FFFFFF]",
  },
  {
    Icon: "lucide:users-round",
    title: "Security Advisory",
    description:
      "Develop long-term cybersecurity maturity with strategic leadership and expert security guidance.",
    services: [
      "Virtual CISO",
      "Security Roadmaps",
      "Risk Management",
      "Security Consulting",
    ],
    iconColor: "text-[#0455EB]",
    bgColor: "#FDF3F3D4",
    descriptionColor: "text-[#919292]",
    headingColor: "text-[#0F172B]",
    listColor: "text-[#232942]",
  },
  {
    Icon: "material-symbols:warning-outline-rounded",
    title: "Security Awareness & Human Risk",
    description:
      "Reduce human risk through security awareness and phishing simulations.",
    services: [
      "Security Awareness Training",
      "Phishing Simulations",
      "Human Risk Assessment",
      "Cybersecurity Workshops",
    ],
    iconColor: "text-[#E24B4A]",
    bgColor: "#FFFFFF",
    descriptionColor: "text-[#90A1B9]",
    headingColor: "text-[#0F172B]",
    listColor: "text-[#232942]",
  },
];

const auditorCertificates = [
  {
    img: ceh,
  },
  {
    img: ccna,
  },
  {
    img: oscp,
  },
  {
    img: mobile,
  },
  {
    img: cism,
  },
  {
    img: cissp,
  },
  {
    img: cisa,
  },
];

export default function Home() {
  return (
    <div className="w-full bg-[#FCFCFC]">
      {/* hero section  */}
      <div
        style={{ backgroundImage: `url(${herobackground.src})` }}
        className="w-full bg-cover bg-center"
      >
        <div className="max-w-7xl mx-auto  px-10 flex flex-col min-h-screen 2xl:min-h-[60vh] py-15">
          <div className="flex-1 flex items-center  justify-between">
            <div className="space-y-8">
              <p className="text-base font-semibold text-[#0F66EA]">
                SECURING MODERN ENTERPRISES
              </p>
              <h1 className=" font-semibold text-[#162033]">
                Built for Trust. <br /> Designed for{" "}
                <span className="text-[#0F66EA] ">Resilience.</span>
              </h1>
              <p className="text-lg font-medium text-[#8F90AB] max-w-xl">
                Helping organizations anticipate threats, reduce cyber risk, and
                build lasting resilience through expert cybersecurity
                consulting, continuous validation, and intelligent security
                platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center justify-center gap-3 py-3 px-5 text-base font-medium cursor-pointer rounded-lg text-[#FFFFFF] bg-linear-to-l from-[#3A84DA] to-[#3477C5]">
                  Explore Our Services{" "}
                  <span>
                    <Icon icon="mdi:arrow-right" width={20} />
                  </span>
                </button>
                <button className="flex items-center justify-center gap-3 py-3 px-5 text-base font-medium cursor-pointer text-[#31435C] rounded-lg border border-[#D8E4EF]">
                  <span>
                    <Icon
                      icon="iconamoon:eye"
                      width={20}
                      className="text-[#31435C]"
                    />
                  </span>
                  Explore Platform
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFDFD] py-5 rounded-xl  flex flex-col md:flex-row justify-between w-full max-w-6xl mx-auto shadow-xl shadow-[#00000005] mt-10 px-10">
            <div className="space-y-1">
              <h4 className="text-lg font-semibold text-[#0F66EA]">1K+</h4>
              <p className="text-base font-medium text-[#262D3D]">
                Security Engagements
              </p>
              <p className="text-base font-medium text-[#787891]">
                Across industries worldwide
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-semibold text-[#0F66EA]">20+</h4>
              <p className="text-base font-medium text-[#262D3D]">
                Industry Verticals
              </p>
              <p className="text-base font-medium text-[#787891]">
                Deep domain expertise
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-semibold text-[#0F66EA]">15+</h4>
              <p className="text-base font-medium text-[#262D3D]">
                Years of Cybersecurity Excellence
              </p>
              <p className="text-base font-medium text-[#787891]">
                Proven track record
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-semibold text-[#0F66EA]">99%</h4>
              <p className="text-base font-medium text-[#262D3D]">
                Client Satisfaction
              </p>
              <p className="text-base font-medium text-[#787891]">
                Long-term partnerships built on trust
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* about CERT-In Empanelled and ISO  */}
      <div className="bg-linear-to-t from-[#FFFFFF] to-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14 ">
          <Animation>
            <p className="text-base sm:text-lg max-w-3xl mx-auto leading-[27px] sm:leading-[30px] text-center font-medium text-[#787891]">
              <span className="text-[#0F66EA]">ISECURION</span> is a{" "}
              <span className="text-[#020218]">
                CERT-In Empanelled and ISO 27001:2022 certified
              </span>{" "}
              information security consulting company providing out-most service
              quality, innovation and research in the field of Information
              Security and Technology. We provide a unique blend of services to
              our customers catering to the current information security
              landscape.
            </p>
          </Animation>
          <div className="flex mt-10 gap-5 md:gap-10 flex-col md:flex-row">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            >
              {capabilities.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className=" flex flex-col items-center space-y-3 "
                >
                  <div className="h-[48px] w-[48px] shrink-0 flex items-center justify-center rounded-xl bg-linear-to-b from-[#D6E9FD] to-[#FFFFFF]">
                    <Icon
                      icon={item.icon}
                      className="text-[#000000] w-[24px] h-[27px]"
                    />
                  </div>

                  <h3 className=" text-base sm:text-lg font-semibold text-[#1A1A1A] text-center">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base font-medium text-[#6E7A84] text-center">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* TRUSTED BY LEADING ORGANIZATIONS  */}
      <div className="py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <Animation>
            <div className="mx-auto flex max-w-6xl items-center">
              <div className="hidden sm:block h-[1px] flex-1 bg-[#D8D8D8] bg-linear-to-l from-[#0F66EA] to-[#F1F6FF]"></div>
              <span className="hidden sm:block h-3 w-3 rounded-full bg-[#7C87FF]"></span>

              <div className="mx-6 flex items-center gap-4">
                <h2 className="text-lg sm:text-xl font-semibold text-center text-[#0F66EA]">
                  TRUSTED BY LEADING ORGANIZATIONS
                </h2>
              </div>

              <span className="hidden sm:block h-3 w-3 rounded-full bg-[#7C87FF]"></span>
              <div className="hidden sm:block h-[1px] flex-1 bg-[#D8D8D8] bg-linear-to-l to-[#0F66EA] from-[#F1F6FF]"></div>
            </div>
          </Animation>
          {/* all industries  */}
          <div>
            <Animation>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 py-3 mt-5">
                <div className="text-sm sm:text-base font-medium flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-[#0F66EA] bg-[#53C1DE1C]">
                  <Icon icon="hugeicons:menu-square" />
                  All Industries
                </div>
                <div className="text-sm sm:text-base font-medium  flex items-center justify-center gap-2 px-2 py-2.5 border border-[#EBEBEB] rounded-lg text-[#787891]">
                  <Icon icon="mage:heart-health" />
                  Healthcare
                </div>
                <div className="text-sm sm:text-base font-medium flex items-center justify-center gap-2 px-2 py-2.5 border border-[#EBEBEB] rounded-lg text-[#787891]">
                  <Icon icon="ion:wallet-outline" />
                  FinTech
                </div>
                <div className="text-sm sm:text-base font-medium flex items-center justify-center gap-2 px-2 py-2.5 border border-[#EBEBEB] rounded-lg text-[#787891]">
                  <Icon icon="hugeicons:nano-technology" />
                  Technology
                </div>
                <div className="text-sm sm:text-base font-medium flex items-center gap-2 justify-center px-2 py-2.5 border border-[#EBEBEB] rounded-lg text-[#787891]">
                  <Icon icon="mage:heart-health" />
                  Manufacturing
                </div>
                <div className="text-sm sm:text-base font-medium flex items-center gap-2 justify-center px-2 py-2.5 border border-[#EBEBEB] rounded-lg text-[#787891]">
                  <Icon icon="mage:heart-health" />
                  Education
                </div>
                <div className="text-sm sm:text-base font-medium flex items-center gap-2 justify-center px-2 py-2.5 border border-[#EBEBEB] rounded-lg text-[#787891]">
                  <Icon icon="ri:government-line" />
                  Government
                </div>
              </div>
            </Animation>
            <Animation>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-6 py-3">
                <img
                  src={tokenvalut.src}
                  alt="Tokenvalut"
                  className="h-10 w-35"
                />
                <img
                  src={bookmyshow.src}
                  alt="Bookmyshow"
                  className="h-10 w-35"
                />
                <img src={bosch.src} alt="Bosch" className="h-10 w-35" />
                <img
                  src={indegence.src}
                  alt="Indegence"
                  className="h-10 w-35"
                />
                <img src={allianz.src} alt="Allianz" className="h-10 w-35" />
                <img
                  src={shellinfo.src}
                  alt="ShellInfo"
                  className="h-10 w-35"
                />
              </div>
            </Animation>
          </div>
        </div>
      </div>

      {/* WHY ORGANIZATIONS CHOOSE ISECURION */}
      <div className="py-14 ">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <Animation>
            <p className="flex items-center gap-2">
              <span className="block h-6 w-[2px] bg-[#0F66EA]"></span>

              <span className="text-sm sm:text-base font-semibold uppercase text-[#0F66EA] sectionheading">
                WHY ORGANIZATIONS CHOOSE ISECURION
              </span>
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-between mt-3 gap-5">
              <h2 className="text-2xl sm:text-[38px] text-center lg:text-left font-medium  text-[#202123]">
                Security is more than protection. It's the foundation of{" "}
                <span className="text-[#0F66EA]">confident business.</span>
              </h2>
              <p className="text-base font-medium  lg:max-w-lg text-center lg:text-left text-[#8F90AB] leading-7">
                Organizations rely on applications, cloud infrastructure,
                digital identities, and connected systems to operate.{" "}
                <span className="text-[#455F6D]">ISECURION</span> helps validate
                security continuously, reduce risk proactively, and build
                long-term cyber resilience.
              </p>
            </div>
          </Animation>
          <div>
            <Animation>
              <div className="flex flex-col lg:flex-row gap-5 mt-10">
                <div className="relative group bg-cover flex-2 min-h-[350px] flex flex-col justify-end rounded-xl p-4 cursor-pointer overflow-hidden transition-all duration-500">
                  <div className="absolute inset-0  w-full rounded-2xl ">
                    <Image
                      src={indentifyrisk}
                      alt="indentifyrisk"
                      className="h-full  object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 "
                    />
                  </div>
                  <div className="relative z-10 flex max-w-md rounded-md bg-white p-4 ">
                    <div className="w-full">
                      <h3 className="mb-3 text-base font-medium h-[20px] text-[#080808]">
                        Identify Risk
                      </h3>

                      <div className="flex items-center gap-3 h-[70px] ">
                        <p className=" transition-all duration-300 group-hover:hidden text-sm font-medium text-[#5A5C76]">
                          Uncover exploitable vulnerabilities before they become
                          business disruptions.
                        </p>

                        <button className="ml-auto flex w-auto items-center justify-center rounded-lg bg-[#0F66EA] px-4 py-2.5 text-white transition-[width] duration-1000 ease-in-out group-hover:w-full group-hover:justify-between">
                          <span className="hidden whitespace-nowrap group-hover:block">
                            Explore Risk Identification
                          </span>
                          <Icon
                            icon="bitcoin-icons:arrow-up-filled"
                            className=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative bg-cover flex-1 min-h-[350px] flex flex-col justify-end rounded-xl p-4 cursor-pointer group overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl w-full">
                    <Image
                      src={continuousvalidation}
                      alt="continuousvalidation"
                      className="h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="relative z-10 flex max-w-md rounded-md bg-white p-4 ">
                    <div className="w-full">
                      <h3 className="mb-3 text-base font-medium h-[20px] text-[#080808]">
                        Validate Continuously
                      </h3>

                      <div className="flex items-center gap-3 h-[70px]">
                        <p className=" transition-all duration-300 group-hover:hidden text-sm font-medium text-[#5A5C76]">
                          Continuously test security across applications, cloud,
                          identities and infrastructure.
                        </p>

                        <button className="ml-auto flex w-auto items-center justify-center rounded-lg bg-[#0F66EA] px-4 py-2.5 text-white transition-[width] duration-1000 ease-in-out group-hover:w-full group-hover:justify-between">
                          <span className="hidden whitespace-nowrap group-hover:block">
                            Explore Continuous Validation
                          </span>
                          <Icon
                            icon="bitcoin-icons:arrow-up-filled"
                            className=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
            <Animation>
              <div className="flex flex-col lg:flex-row gap-5 mt-10">
                <div className="relative flex-1 min-h-[350px] flex flex-col justify-end rounded-xl p-4 cursor-pointer group overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={defence}
                      alt="defence"
                      className="h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="relative z-10 flex max-w-md rounded-md bg-white p-4 ">
                    <div className="w-full">
                      <h3 className="mb-3 text-base font-medium h-[20px] text-[#080808]">
                        Strengthen Defenses
                      </h3>

                      <div className="flex items-center gap-3 h-[70px]">
                        <p className=" transition-all duration-300 group-hover:hidden text-sm font-medium text-[#5A5C76]">
                          Offensive security that transforms findings into
                          measurable resilience.
                        </p>

                        <button className="ml-auto flex w-auto items-center justify-center rounded-lg bg-[#0F66EA] px-4 py-2.5 text-white transition-[width] duration-1000 ease-in-out group-hover:w-full group-hover:justify-between">
                          <span className="hidden whitespace-nowrap group-hover:block">
                            Explore Offensive Security
                          </span>
                          <Icon icon="ep:top-right" className="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group bg-cover bg-center flex-2 min-h-[350px] flex flex-col justify-end rounded-xl p-4 cursor-pointer group overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={buildtrust}
                      alt="buildtrust"
                      className="h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="relative z-10 flex max-w-md rounded-md bg-white p-4 ">
                    <div className="w-full">
                      <h3 className="mb-3 text-base font-medium h-[20px] text-[#080808]">
                        Build Trust
                      </h3>

                      <div className="flex items-center gap-3 h-[70px]">
                        <p className=" transition-all duration-300 group-hover:hidden text-sm font-medium text-[#5A5C76]">
                          Protect business continuity while strengthening
                          customer trust and confidence.
                        </p>

                        <button className="ml-auto flex w-auto items-center justify-center rounded-lg bg-[#0F66EA] px-4 py-2.5 text-white transition-[width] duration-1000 ease-in-out group-hover:w-full group-hover:justify-between">
                          <span className="hidden whitespace-nowrap group-hover:block">
                            Explore Compliance & Trust
                          </span>
                          <Icon icon="ep:top-right" className="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </div>

      {/* Capabilities  */}
      <div className="py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <Animation>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
              <div>
                <h2 className="text-4xl font-medium lg:max-w-md text-center lg:text-left text-[#131210] leading-11">
                  Capabilities that strengthen{" "}
                  <span className="bg-linear-to-l to-[#0F66EA] from-[#17366E] bg-clip-text text-transparent">
                    every layer
                  </span>{" "}
                  of your organization.
                </h2>
              </div>
              <div className="lg:max-w-md space-y-2">
                <p className="hidden lg:block  text-base font-semibold text-[#0F66EA] sectionheading">
                  OUR EXPERTISE
                </p>
                <p className="text-center lg:text-left text-base font-medium leading-8 text-[#8F90AB]">
                  A comprehensive portfolio of services and platforms built to
                  reduce risk, improve resilience, and enable secure growth.
                </p>
              </div>
            </div>
          </Animation>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {ourExpertise.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-[#E9E9E973] p-5 cursor-pointer group  hover:bg-linear-to-b from-[#3477C5] to-[#3A84DA] transition-all duration-500"
                style={{ backgroundColor: item.bgColor }}
              >
                <Icon
                  icon={item.Icon}
                  className="absolute -right-8 top-1/2 h-40 w-40 -translate-y-1/2 text-[#62748E0D] group-hover:top-1/3 group-hover:-translate-x-1/2 group-hover:text-[#FFFFFF2B] transition-all duration-500"
                />

                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Icon
                      icon={item.Icon}
                      className={`h-6 w-6 ${item.iconColor} group-hover:text-white transition-colors duration-300`}
                    />
                  </div>

                  <h3
                    className={`mb-3 ${item.headingColor} text-xl font-semibold group-hover:text-white transition-colors duration-300`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm font-medium leading-6 ${item.descriptionColor} group-hover:text-white transition-colors duration-300`}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="mt-4">
                  <ul className="space-y-2">
                    {item.services.map((service, serviceIndex) => (
                      <li
                        key={serviceIndex}
                        className={`flex items-center gap-1 text-sm font-medium ${item.listColor} group-hover:text-white transition-colors duration-300`}
                      >
                        <span
                          className={` group-hover:text-white ${item.iconColor}`}
                        >
                          <Icon icon="mingcute:right-fill" />
                        </span>

                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-5 flex cursor-pointer items-center text-[15px] font-medium text-[#0F66EA] transition-colors duration-300 group-hover:text-white">
                  View Services
                  <span className="ml-1">
                    <Icon icon="solar:arrow-right-bold" />
                  </span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Our platform  */}

      <div className="py-14">
        <div className="container px-6 sm:px-10">
          <div className="space-y-3  lg:max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left">
            <Animation>
              <p className="flex items-center gap-2 sectionheading">
                <span className="block h-6 w-[2px] bg-[#0F66EA]"></span>

                <span className="text-base font-semibold uppercase text-[#0F66EA]">
                  OUR PLATFORMS
                </span>
              </p>
            </Animation>
            <Animation>
              <h2 className="text-4xl font-medium  text-[#131210]">
                Intelligent platforms for{" "}
                <span className="text-[#0F66EA]">continuous</span> security.
              </h2>
            </Animation>
            <Animation>
              <p className="text-lg font-medium leading-7 text-[#8F90AB]">
                Purpose-built platforms that help organizations validate
                security continuously, strengthen cyber resilience, and make
                informed decisions.
              </p>
            </Animation>
          </div>

          <div className="space-y-14 mt-10">
            <Animation>
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-medium text-[#1A1A1A]">
                      Vulnytics
                    </h3>
                    <span className="bg-[#3B9E6A] w-15 h-0.5"></span>
                  </div>
                  <h3 className="text-3xl font-semibold text-center lg:text-left lg:max-w-md  text-[#1A1A1A]">
                    Continuous Vulnerability{" "}
                    <span className="text-[#3B9E6A]">Intelligence</span>.{" "}
                  </h3>
                  <p className="text-base font-medium lg:max-w-md text-center lg:text-left leading-[25px] tracking-[-0.34px] text-[#8F90AB]">
                    Discover, prioritize, and remediate vulnerabilities across
                    your digital assets with actionable insights and real-time
                    visibility.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm font-medium text-[#44697D] gap-2">
                      <Icon
                        icon="teenyicons:tick-circle-solid"
                        className="text-[#C3C3C3] w-[14px] h-[14px]"
                      />
                      <span>Continuous Scanning</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#44697D] gap-2">
                      <Icon
                        icon="teenyicons:tick-circle-solid"
                        className="text-[#C3C3C3] w-[14px] h-[14px]"
                      />
                      <span>Risk Prioritization</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#44697D] gap-2">
                      <Icon
                        icon="teenyicons:tick-circle-solid"
                        className="text-[#C3C3C3] w-[14px] h-[14px]"
                      />
                      <span>Executive Reporting</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#44697D] gap-2">
                      <Icon
                        icon="teenyicons:tick-circle-solid"
                        className="text-[#C3C3C3] w-[14px] h-[14px]"
                      />
                      <span>Seamless Integrations</span>
                    </li>
                  </ul>
                  <button className="flex items-center gap-1 text-base font-medium cursor-pointer text-[#3B9E6A]">
                    Learn More{" "}
                    <span>
                      <Icon icon="ep:right" />
                    </span>
                  </button>
                </div>
                <div className="flex-1   overflow-hidden group">
                  <div className="bg-[#ADF20047] max-h-[400px] rounded-4xl">
                    <img
                      src={vulnytics.src}
                      alt="vulnytics"
                      className="w-full translate-x-[8%] translate-y-[8%] transition-all duration-500 ease-in-out group-hover:translate-x-[3%] group-hover:translate-y-[3%]"
                    />
                  </div>
                </div>
              </div>
            </Animation>

            <Animation>
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-medium text-[#1A1A1A]">
                      Drosera Phishing
                    </h3>
                    <span className="bg-[#0F66EA] w-15 h-0.5"></span>
                  </div>
                  <h3 className="text-3xl font-semibold max-w-md  leading-[40px]">
                    Security Awareness that actually{" "}
                    <span className="text-[#0F66EA]">
                      changes behavior.
                    </span>{" "}
                  </h3>
                  <p className="text-base font-medium max-w-md leading-[25px] tracking-[-0.34px] text-[#8F90AB]">
                    Run realistic phishing simulations, track user behavior, and
                    build a security-aware culture across your organization.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm font-medium text-[#44697D] gap-2">
                      <Icon
                        icon="teenyicons:tick-circle-solid"
                        className="text-[#C3C3C3] w-[14px] h-[14px]"
                      />
                      <span>Phishing Simulations</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#44697D] gap-2">
                      <Icon
                        icon="teenyicons:tick-circle-solid"
                        className="text-[#C3C3C3] w-[14px] h-[14px]"
                      />
                      <span>Campaign Management</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#44697D] gap-2">
                      <Icon
                        icon="teenyicons:tick-circle-solid"
                        className="text-[#C3C3C3] w-[14px] h-[14px]"
                      />
                      <span>Awareness Training</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#44697D] gap-2">
                      <Icon
                        icon="teenyicons:tick-circle-solid"
                        className="text-[#C3C3C3] w-[14px] h-[14px]"
                      />
                      <span>Advanced Reporting</span>
                    </li>
                  </ul>
                  <button className="flex items-center gap-1 text-sm font-medium cursor-pointer text-[#0F66EA]">
                    Learn More{" "}
                    <span>
                      <Icon icon="ep:right" />
                    </span>
                  </button>
                </div>
                <div className="flex-1   overflow-hidden group">
                  <div className="bg-[#DDF1FA80] max-h-[400px] rounded-4xl">
                    <img
                      src={drosera.src}
                      alt="vulnytics"
                      className="w-full translate-x-[8%] translate-y-[8%] transition-all duration-500 ease-in-out group-hover:translate-x-[3%] group-hover:translate-y-[3%]"
                    />
                  </div>
                </div>
              </div>
            </Animation>

            <Animation>
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 space-y-5">
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-medium text-[#1A1A1A]">
                      Learning Management System (LMS)
                    </h3>
                    <span className="bg-[#7D70F0] w-15 h-0.5"></span>
                  </div>
                  <h3 className="text-3xl font-semibold max-w-md  leading-[40px] text-[#1A1A1A]">
                    Security{" "}
                    <span className="text-[#7D70F0]">Learning & Awareness</span>
                    .{" "}
                  </h3>
                  <p className="text-base font-medium max-w-md leading-[25px] tracking-[-0.34px] text-[#8F90AB]">
                    Deliver engaging training, validate knowledge, and empower
                    your teams with role-based learning journeys.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm font-medium text-[#44697D] gap-2">
                      <Icon
                        icon="teenyicons:tick-circle-solid"
                        className="text-[#C3C3C3] w-[14px] h-[14px]"
                      />
                      <span>Role-based Learning</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#44697D] gap-2">
                      <Icon
                        icon="teenyicons:tick-circle-solid"
                        className="text-[#C3C3C3] w-[14px] h-[14px]"
                      />
                      <span>Assessments & Quizzes</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#44697D] gap-2">
                      <Icon
                        icon="teenyicons:tick-circle-solid"
                        className="text-[#C3C3C3] w-[14px] h-[14px]"
                      />
                      <span>Learning Analytics</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#44697D] gap-2">
                      <Icon
                        icon="teenyicons:tick-circle-solid"
                        className="text-[#C3C3C3] w-[14px] h-[14px]"
                      />
                      <span>Mobile Learning</span>
                    </li>
                  </ul>
                  <button className="flex items-center gap-1 text-sm font-medium cursor-pointer text-[#7D70F0]">
                    Learn More{" "}
                    <span>
                      <Icon icon="ep:right" />
                    </span>
                  </button>
                </div>
                <div className="flex-1  overflow-hidden group">
                  <div className="bg-[#7D70F042] max-h-[400px]  rounded-4xl">
                    <img
                      src={lms.src}
                      alt="vulnytics"
                      className="w-full h-full translate-x-[8%] translate-y-[8%] transition-all duration-500 ease-in-out group-hover:translate-x-[3%] group-hover:translate-y-[3%]"
                    />
                  </div>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </div>

      <div className="py-14 bg-linear-to-l to-[#071C41] from-[#092E70]">
        <div className="container px-6 sm:px-10 ">
          <Animation>
            <div className="flex items-center max-w-5xl mx-auto gap-5">
              <div>
                <img
                  src={right.src}
                  alt="right"
                  className="w-[70px] h-[75px]"
                />
              </div>
              <div>
                <p className="text-center text-[22px] font-medium text-[#EBEBEB]">
                  ISECURION helps organizations strengthen their security
                  posture with expert-led services, advanced technology, and a
                  relentless focus on results.
                </p>
              </div>
              <div>
                <img src={left.src} alt="left" className="w-[70px] h-[75px]" />
              </div>
            </div>
          </Animation>
          <Animation>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
              {[
                { value: "50+", label: "Enterprise Customers" },
                { value: "1K+", label: "Projects Completed" },
                { value: "500+", label: "Startup Companies" },
                { value: "5", label: "of the Top 10 Global Tech Companies" },
                { value: "40+", label: "Fintech & Healthcare Companies" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex-1 px-6 text-center ${index !== 4 ? " sm:border-r border-[#888888]" : ""}`}
                >
                  <h3 className="text-3xl font-medium text-[#FFFFFF]">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-base font-medium leading-6 text-[#C5C5C5]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Animation>
        </div>
      </div>
      {/* INDUSTRIES WE SECURE  */}
      <div>
        <IndustriesWeSecure />
      </div>

      <div className="py-14 bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <Animation>
            <div className="flex flex-col  gap-8 lg:flex-row justify-between items-center text-center lg:text-left">
              <h2 className="text-4xl font-semibold  lg:max-w-md leading-12 text-[#162033]">
                Proven Impact. Trusted by Enterprises{" "}
                <span className="text-[#0F66EA] flex flex-col">
                  Worldwide.
                  <span className="hidden lg:block h-1 w-[100px] bg-[#1A56DB]"></span>
                </span>
              </h2>

              <div className="relative flex items-center">
                <img
                  src={iso27001.src}
                  alt="ISO 27001"
                  className="relative z-10 w-[80px] sm:w-[150px]"
                />

                <Icon
                  icon="line-md:star-twotone"
                  className="absolute left-1/2 top-1/2 z-20 h-[150px] w-[80px] sm:w-[150px] -translate-x-1/2 -translate-y-1/2 text-[#0F66EA33]"
                />

                <img
                  src={iso90001.src}
                  alt="ISO 9001"
                  className="relative z-10 ml-16 w-[80px] sm:w-[150px]"
                />
              </div>
            </div>
          </Animation>
          <Animation>
            <div className="bg-linear-to-l p-4 mt-10 from-[#092E70] to-[#000000]">
              <h3 className="text-[22px] font-semibold text-center text-[#FFFFFF]">
                Auditors certifications
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 justify-items-center py-2 mt-10">
                {auditorCertificates.map((item, index) => (
                  <img
                    key={index}
                    src={item.img.src}
                    alt=""
                    className="w-[80px] h-[80px]"
                  />
                ))}
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </div>
  );
}
