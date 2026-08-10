"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import ceo from "../../../assets/about/ceo.png";
import { motion } from "framer-motion";
import Animation from "../../../components/ui/Animation";
import hacker from "../../../assets/about/abouthacker.png";
import herobackground from "../../../assets/about/abouthero.png";
import TimelineAnimation from "../../../components/ui/TimelineAnimation";

const data = [
  {
    number: "50+",
    description: "Enterprise Clients Protected",
  },
  {
    number: "1.5k+",
    description: "Security Assessments Delivered",
  },
  {
    number: "15+",
    description: "Years of Cybersecurity Expertise",
  },
  {
    number: "5+",
    description: "of the Top 10 Global Tech Companies",
  },
];

const timelineData = [
  {
    id: 1,
    year: "2015",
    position: "bottom",
    description:
      "Founded to strengthen organizations against evolving cyber threats.",
  },
  {
    id: 2,
    year: "2016",
    position: "top",
    description:
      "Named among India's Top 25 Promising Cybersecurity Consultants.",
  },
  {
    id: 3,
    year: "2019",
    position: "bottom",
    description:
      "Achieved ISO 27001 certification for information security excellence.",
  },
  {
    id: 4,
    year: "2021",
    position: "top",
    description:
      "Became a CERT-In Empanelled Information Security Auditing Organization.",
  },
  {
    id: 5,
    year: "2023",
    position: "bottom",
    description:
      "Trusted by 200+ organizations, powered by 75+ cybersecurity experts.",
  },
];

const team = [
  {
    id: 1,
    name: "Manjunath NG",
    img: ceo,
    designation: "Chief Executive Officer (CEO)",
    description:
      "Visionary leader with over 20 years of experience in cybersecurity, helping organizations strengthen resilience through strategic security consulting, innovation, and trusted leadership.",
  },
  {
    id: 2,
    name: "Manjunath NG",
    img: ceo,
    designation: "Chief Executive Officer (CEO)",
    description:
      "Visionary leader with over 20 years of experience in cybersecurity, helping organizations strengthen resilience through strategic security consulting, innovation, and trusted leadership.",
  },
  {
    id: 3,
    name: "Manjunath NG",
    img: ceo,
    designation: "Chief Executive Officer (CEO)",
    description:
      "Visionary leader with over 20 years of experience in cybersecurity, helping organizations strengthen resilience through strategic security consulting, innovation, and trusted leadership.",
  },
];

function page() {
  return (
    <div>
      {/* hero section  */}
      <div
        className="py-16 bg-cover bg-center w-full z-30"
        style={{ backgroundImage: `url(${herobackground.src})` }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-[#FFFFFF] text-center">
            {/* Breadcrumb Animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="space-x-1 text-base sm:text-lg font-semibold"
            >
              <Link href="/">HOME</Link>
              <span>/</span>
              <Link href="/about">ABOUT US</Link>
            </motion.div>

            {/* Heading Animation */}
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
              className=" text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-semibold bg-clip-text max-w-xl mx-auto mt-3 leading-8 md:leading-12 text-transparent bg-linear-to-l from-[#2563EB] to-[#E9E9E9]"
            >
              Securing digital trust for a connected world.
            </motion.h1>
          </div>
        </div>
      </div>

      {/* ABOUT Company */}
      <div className="py-14 relative overflow-hidden bg-[#FCFCFC]">
        <div className="absolute blur-3xl w-[200px] h-[200px] -top-20 -right-10 rounded-full bg-[#4675CE4D]"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 ">
          {/* heading  */}
          <Animation>
            <div className="space-y-3 flex flex-col items-center lg:items-start ">
              <div className="w-fit px-4 py-2 rounded-4xl  bg-[#FFFFFF] border border-[#E3EAF1]">
                <p className="text-sm font-medium flex items-center gap-2 sectionheading uppercase text-[#636977]">
                  {" "}
                  <span>
                    <Icon
                      icon="ri:shield-star-fill"
                      width={25}
                      height={25}
                      className="text-[#0F66EA]"
                    />
                  </span>{" "}
                  ABOUT Company
                </p>
              </div>
              <h2 className=" font-medium mx-auto lg:mx-0 text-center lg:text-left leading-8 sm:leading-12 max-w-md  text-[#100E0E]">
                Building a safer digital tomorrow, today.
              </h2>
              <p className="text-base sm:text-base font-medium max-w-3xl mx-auto lg:mx-0 text-center lg:text-left leading-6 md:leading-7   text-[#8F90AB]">
                ISECURION is an{" "}
                <span className="text-[#262D3D]">
                  CERT-In Empanelled and ISO 27001:2022 certified
                </span>{" "}
                information security consulting company providing out-most
                service quality, innovation and research in the field of
                Information Security and Consultancy. We provide a unique blend
                of services to our customers catering to the current information
                security landscape.
              </p>
            </div>
          </Animation>

          <Animation>
            <div
              className="mt-10 min-h-[550px] w-full  rounded-2xl bg-center bg-cover"
              style={{ backgroundImage: `url(${hacker.src})` }}
            ></div>
          </Animation>
        </div>
      </div>

      {/* our journey  */}
      <div className="py-14 w-full  bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Animation>
              <div className="w-fit px-4 py-2 rounded-4xl  bg-[#FFFFFF] border border-[#E3EAF1]">
                <p className="text-sm font-medium flex items-center gap-2 sectionheading uppercase text-[#636977]">
                  {" "}
                  <span>
                    <Icon
                      icon="ri:shield-star-fill"
                      width={25}
                      height={25}
                      className="text-[#0F66EA]"
                    />
                  </span>{" "}
                  our story
                </p>
              </div>
              <h2 className="max-w-md font-semibold  leading-11.25 text-[#100E0E]">
                Building a more secure digital future
              </h2>
              <p className="text-lg font-medium max-w-lg leading-[28px] text-[#8F90AB]">
                At ISECURION, we help organizations stay resilient against
                evolving cyber threats through expert cybersecurity services and
                purpose-built security solutions.
              </p>
            </Animation>
            <Animation>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="text-2xl font-medium text-[#05011C]">
                      {item.number}
                    </h3>
                    <p className="text-base font-medium text-[#8F90AB]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Animation>
          </div>

          <Animation>
            <div className="flex-1 flex flex-row gap-6 justify-center">
              {/* Timeline */}
              <div className="flex flex-col items-center mt-5 ">
                <div className="h-3 w-3 rounded-full bg-[#2563EB]"></div>

                <div className="h-[500px] sm:h-[230px] lg:h-[330px] xl:h-[250px] w-[8px] border border-dashed border-[#DCE5F3]"></div>

                <div className="h-3 w-3 rounded-full bg-[#2563EB]"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Mission */}
                <div>
                  <h3 className="text-[38px] font-medium text-[#111827]">
                    Our Mission
                  </h3>

                  <p className=" max-w-2xl text-base leading-[25px] text-[#636977]">
                    Dedicated to empowering organizations in navigating today's
                    cybersecurity challenges through trusted consulting,
                    advanced technical services, and innovative security
                    platforms.
                  </p>

                  <ul className="mt-2 space-y-1 text-base font-normal text-[#636977]">
                    <li className="flex items-start gap-3">
                      <Icon
                        icon="iconoir:badge-check"
                        className="mt-1 text-[#07B356] w-[18px] h-[18px]"
                      />
                      <span className=" ">
                        Deliver practical security solutions that reduce cyber
                        risk.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <Icon
                        icon="iconoir:badge-check"
                        className="mt-1 text-[#07B356] w-[18px] h-[18px]"
                      />
                      <span className=" ">
                        Enable organizations to achieve compliance with
                        confidence.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <Icon
                        icon="iconoir:badge-check"
                        className="mt-1 text-[#07B356] w-[18px] h-[18px]"
                      />
                      <span className=" ">
                        Strengthen business resilience through continuous
                        security improvement.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Vision */}
                <div>
                  <h3 className="text-[38px] font-medium text-[#111827]">
                    Our Vision
                  </h3>

                  <p className=" max-w-2xl text-base leading-[25px] text-[#636977]">
                    To become a globally trusted cybersecurity partner by
                    continuously innovating and setting new standards in
                    information security, resilience, and digital trust.
                  </p>

                  <ul className="mt-2 space-y-1 text-base text-[#636977]">
                    <li className="flex items-start gap-3">
                      <Icon
                        icon="iconoir:badge-check"
                        className="mt-1 text-[#07B356] w-[18px] h-[18px]"
                      />
                      <span>
                        Build a safer digital ecosystem for every organization.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <Icon
                        icon="iconoir:badge-check"
                        className="mt-1 text-[#07B356] w-[18px] h-[18px]"
                      />
                      <span>
                        Drive long-term security through expertise, technology,
                        and innovation.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <Icon
                        icon="iconoir:badge-check"
                        className="mt-1 text-[#07B356] w-[18px] h-[18px]"
                      />
                      <span>
                        Lead the future of cybersecurity with innovation and
                        trusted expertise.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Animation>
        </div>
      </div>

      <section className="relative w-full py-14 bg-gradient-to-b from-[#FFFFFF33] to-[#092E70] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="absolute right-0 bottom-0 w-[150px] h-[150px] rounded-full blur-md bg-linear-to-b from-[#22D1EE] to-[#566D98]"></div>
          {/* Heading */}
          <Animation>
            <div className="relative text-center ">
              <h2 className=" font-semibold uppercase tracking-[12px] text-[#9AA4BA] opacity-40">
                Journey Of ISECURION
              </h2>

              <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[32px] font-semibold uppercase tracking-[4px] text-[#111827]">
                Timeline
              </h3>
            </div>
          </Animation>

          {/* Timeline Card */}
          <Animation>
            <div className="relative rounded-[35px] bg-white p-12 shadow-2xl mt-10">
              <div className="absolute -left-5 top-1/4 -translate-y-1/2 h-14 w-14 rounded-full bg-gradient-to-b from-[#22D1EE] to-[#3D5AF1] z-10"></div>

              <div className="absolute left-12 right-12 top-1/2 h-[2px] -translate-y-1/2 bg-[#3D5AF1]"></div>

              <div
                className="relative grid gap-6"
                style={{
                  gridTemplateColumns: `repeat(${timelineData.length}, minmax(0,1fr))`,
                }}
              >
                {timelineData.map((item) => (
                  <div
                    key={item.id}
                    className="relative flex min-h-[350px] flex-col items-center"
                  >
                    {item.position === "bottom" ? (
                      <>
                        <h4 className="absolute bottom-1/2 mb-12 text-2xl font-semibold text-[#3D5AF1]">
                          {item.year}
                        </h4>

                        <p className="absolute top-1/2 mt-12 max-w-[300px] text-center text-base font-medium leading-8 text-[#343434]">
                          {item.description}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="absolute bottom-1/2 mb-12 max-w-[220px] text-center text-base font-medium leading-8 text-[#343434]">
                          {item.description}
                        </p>

                        <h4 className="absolute top-1/2 mt-12 text-2xl font-semibold text-[#3D5AF1]">
                          {item.year}
                        </h4>
                      </>
                    )}

                    <div className="absolute top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full border-4 border-[#55D6FF] bg-white"></div>
                  </div>
                ))}
              </div>
            </div>
          </Animation>
        </div>
      </section>

      <section className="w-full py-14 bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <TimelineAnimation delay={0.3}>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-fit px-4 py-2 rounded-4xl  bg-[#FFFFFF] border border-[#E3EAF1]">
                <p className="text-sm font-medium flex items-center gap-2 sectionheading uppercase text-[#636977]">
                  {" "}
                  <span>
                    <Icon
                      icon="fa-solid:users"
                      width={25}
                      height={25}
                      className="text-[#0F66EA]"
                    />
                  </span>{" "}
                  our Team
                </p>
              </div>
              <h2 className="font-medium text-[#100E0E]">
                The minds behind your security
              </h2>
              <p className="text-lg font-medium leading-7 text-center max-w-2xl text-[#8F90AB]">
                A team of cybersecurity professionals united by passion,
                expertise, and a commitment to protect what matters most.
              </p>
            </div>
          </TimelineAnimation>

          <div className="w-full grid grid-cols-3 justify-items-center mt-10">
            {team.map((item, index) => (
              <div
                key={index}
                className="max-w-[350px] flex w-full flex-col  p-5 rounded-[22px] border border-[#E3EAF1]"
              >
                <div>
                  <Image src={item.img} alt="" className="rounded-3xl" />
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-[#100E0E]">
                    {item.name}
                  </h3>
                  <p className="text-base font-medium text-[#636977]">
                    {item.designation}
                  </p>
                </div>
                <hr className="border border-[#F1F1F1] my-3" />
                <p className="text-base font-normal leading-7 text-[#787891]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
