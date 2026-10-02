"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";
import {
  AnimatedCard,
  Animation,
  AnimatedHeading1,
} from "../../../components/ui/Animation";
import { motion } from "framer-motion";

const whyRedTeamDifferent = [
  {
    heading: "AI as the Target",
    subheading: "AI as the Target",
    description:
      "Test models, datasets, ML pipelines, and inference environments for supply-chain and integrity risks.",
  },
  {
    heading: "AI as the Attack Surface",
    subheading: "Manipulate what AI can see and do.",
    description:
      "Test prompt injection, jailbreaks, instruction extraction, tool-call hijacking, and excessive agency.",
  },
  {
    heading: "AI as the Weapon",
    subheading: "Use AI to amplify the attack.",
    description:
      "Simulate controlled deepfake vishing, AI-enabled social engineering, and accelerated reconnaissance.",
  },
];

const redTeamTesting = [
  {
    title: "LLM-Powered Products",
    description:
      "Customer-facing or internal products built on LLMs, exposed to direct prompt injection and jailbreak attempts.",
    Icon: "tabler:message-chatbot",
  },
  {
    title: "AI Agents",
    description:
      "Agents with email, code execution, or payment tool-calling capability that could be hijacked into unintended actions",
    Icon: "ic:baseline-support-agent",
  },
  {
    title: "ML / MLOps",
    description:
      "Teams operating model-training or inference pipelines, model registries, & CI/CD integrations vulnerable to supply chain attacks",
    Icon: "akar-icons:data",
  },
  {
    title: "Finance & Treasury",
    description:
      "Organizations where wire transfer or credential reset approvals depend on voice or video confirmation from executives",
    Icon: "mingcute:currency-rupee-line",
  },
  {
    title: "Security & Blue Teams",
    description:
      "SOC teams that need to validate whether their monitoring catches AI-native attack patterns or treats them as background noise",
    Icon: "ic:round-security",
  },
  {
    title: "Executive & Board Teams",
    description:
      "Leadership seeking a measurable view of AI exposure and threat readiness.",
    Icon: "akar-icons:people-group",
  },
];

function AiAugamentedRedTeam() {
  return (
    <div>
      {/* this is the hero section  */}
      <section className="relative h-[100vh] bg-[#000000]">
        <div className="absolute top-0 left-30 w-[650px] h-[600px] blur-[140px] rounded-full pointer-events-none opacity-80 bg-[#E24B4A]/30 "></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex gap-8 sm:gap-10">
          {/* left  */}
          <div className="flex-1 space-y-4">
            <p className="text-base font-semibold text-[#E24B4A]">
              AI-AUGMENTED RED TEAM
            </p>
            <AnimatedHeading1
              text="AI-Augmented Red Team Services"
              className="font-semibold leading-[40px] md:leading-[55px] text-[#FFFFFF]"
            ></AnimatedHeading1>
            <div>
              <p className=" text-base sm:text-lg leading-7 md:leading-8 text-[#D1D1D1]">
                ISECURION’s AI-Augmented Red Team tests AI supply chains, LLMs,
                agents, deepfake-driven social engineering, and AI-accelerated
                reconnaissance.
              </p>
              <p className=" text-base sm:text-lg leading-7 md:leading-8 text-[#D1D1D1]">
                Delivered by CERT-In empanelled AI/ML security specialists
                across global environments, remotely or on-site, as a standalone
                engagement or VAPT/RTaaS add-on.
              </p>
            </div>
            <p className="text-base sm:text-lg text-[#0F66EA]">
              LLM Security · AI Agents · AI Supply Chain · Deepfake Vishing
            </p>
            <div className="flex gap-4">
              <button className="text-[15px] font-medium px-4 py-3 flex items-center gap-3 rounded-[10px] cursor-pointer text-[#31435C] bg-[#FFFFFF]">
                Get AI Red Team Quote{" "}
                <span>
                  <Icon icon="akar-icons:arrow-right" />
                </span>
              </button>
              <button className="text-[15px] font-medium px-4 py-3 flex items-center gap-3 rounded-[10px] cursor-pointer text-[#FFFFFF] border border-[#FFFFFF]/16">
                <span>
                  <Icon icon="flowbite:outgoing-call-outline" />
                </span>
                {""}
                Talk to Us
              </button>
            </div>
          </div>
          {/* right  */}
          <div className="flex-1 rounded-3xl  p-4 bg-[#202123]">
            <div className="space-y-1">
              <h3 className="text-[22px] font-semibold text-[#FFFFFF]">
                Request AI-Augmented Red Team Consultation
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#D9D9D9]">
                Share your AI footprint and get a tailored quote within 24
                hours.
              </p>
            </div>
            <div className="mt-4">
              <form className="space-y-4">
                <div className="flex gap-5 ">
                  <div className="flex flex-col gap-3 w-full">
                    <label
                      htmlFor=""
                      className="text-[15px] font-medium text-[#FEFEFE]"
                    >
                      Work Email <span className="text-[#E42F23]"> *</span>
                    </label>
                    <input
                      type="email"
                      placeholder="youremail@gmail.com"
                      className="px-3 py-2.5  rounded-[10px] outline-none text-[#D1D1D1] border-[1.14px] border-[#262D3D] bg-[#0A0303]"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <label
                      htmlFor=""
                      className="text-[15px] font-medium text-[#FEFEFE]"
                    >
                      Work Email <span className="text-[#E42F23]"> *</span>
                    </label>
                    <input
                      type="email"
                      placeholder="youremail@gmail.com"
                      className="px-3 py-2.5  rounded-[10px] outline-none text-[#D1D1D1] border-[1.14px] border-[#262D3D] bg-[#0A0303]"
                    />
                  </div>
                </div>
                <div className="flex gap-5 ">
                  <div className="flex flex-col gap-3 w-full">
                    <label
                      htmlFor=""
                      className="text-[15px] font-medium text-[#FEFEFE]"
                    >
                      Phone Number <span className="text-[#E42F23]"> *</span>
                    </label>
                    <input
                      type="email"
                      placeholder="youremail@gmail.com"
                      className="px-3 py-2.5  rounded-[10px] outline-none text-[#D1D1D1] border-[1.14px] border-[#262D3D] bg-[#0A0303]"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <label
                      htmlFor=""
                      className="text-[15px] font-medium text-[#FEFEFE]"
                    >
                      Country <span className="text-[#E42F23]"> *</span>
                    </label>
                    <input
                      type="email"
                      placeholder="youremail@gmail.com"
                      className="px-3 py-2.5  rounded-[10px] outline-none text-[#D1D1D1] border-[1.14px] border-[#262D3D] bg-[#0A0303]"
                    />
                  </div>
                </div>
                <div className="flex gap-5 ">
                  <div className="flex flex-col gap-3 w-full">
                    <label
                      htmlFor=""
                      className="text-[15px] font-medium text-[#FEFEFE]"
                    >
                      AI Footprint <span className="text-[#E42F23]"> *</span>
                    </label>
                    <input
                      type="email"
                      placeholder="youremail@gmail.com"
                      className="px-3 py-2.5  rounded-[10px] outline-none text-[#D1D1D1] border-[1.14px] border-[#262D3D] bg-[#0A0303]"
                    />
                  </div>
                </div>
                <div className="flex gap-5">
                  <input
                    type="checkbox"
                    className="px-3 py-4 bg-black cursor-pointer"
                  />{" "}
                  <p className="text-xs font-medium leading-[22px] text-[#D1D1D1]">
                    By clicking submit below, you agree to our Terms of Use and
                    Privacy Policy. Additionally, you consent to allow ISECURION
                    Technology & Consulting Pvt. Ltd. to store and process the
                    personal information submitted above to provide you the
                    content requested.
                  </p>
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-3 w-full cursor-pointer px-4 py-3 justify-center rounded-[10px] text-[#FFFFFF] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70]"
                >
                  Get My AI Red Team Quote{" "}
                  <span>
                    <Icon icon="akar-icons:arrow-right" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* AI has Changed the Attack Surface.  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between gap-10">
          <div className="flex-1 space-y-4">
            <p className="text-sm sm:text-base font-semibold text-[#E24B4A]">
              WHY AI-AUGMENTED RED TEAMING MATTERS
            </p>
            <h2 className="font-medium text-[#FFFFFF]">
              AI has Changed the Attack Surface.
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg font-normal leading-[25px] md:leading-[31px] text-[#D1D1D1]">
                Traditional Red Teaming focuses on people, networks, identities,
                and endpoints. AI introduces new attack paths across models,
                datasets, prompts, agents, connected tools, and human workflows.
              </p>
              <p className="text-base sm:text-lg font-normal leading-[25px] md:leading-[31px] text-[#D1D1D1]">
                AI-Augmented Red Teaming tests these pathways to determine how
                AI can be targeted, manipulated, or weaponized, and whether your
                existing controls can detect and stop the attack. {""}
              </p>
              <div className="mt-2 h-[3px] w-[104px] rounded-[3px] bg-[#E24B4A]"></div>
            </div>
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-medium flex items-center gap-2 mt-8 text-[#E24B4A]">
                TARGET{" "}
                <span>
                  <Icon icon="akar-icons:arrow-right" />
                </span>{" "}
                MANIPULATE{" "}
                <span>
                  <Icon icon="akar-icons:arrow-right" />
                </span>{" "}
                WEAPONIZE
              </p>
              <p className="text-base sm:text-lg text-[#D1D1D1]">
                Test the attack path. Validate the control. Strengthen the
                defense.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm sm:text-base font-semibold text-[#E24B4A]">
              WHY AI-AUGMENTED RED TEAM IS DIFFERENT
            </h3>
            <div className="space-y-4 mt-6">
              {whyRedTeamDifferent.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-[9px]  rounded-2xl bg-linear-to-r from-[#0F66EA] to-[#BFBFBF]"></div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-[#FFFFFF]">
                      {item.heading}
                    </h3>
                    <p className="text-base sm:text-lg font-medium text-[#BFBFBF]">
                      {item.subheading}
                    </p>
                    <p className="text-sm sm:text-base font-medium leading-[31px] text-[#D1D1D1]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}

          <Animation>
            <div className="max-w-xl space-y-4">
              <p className="text-sm sm:text-base font-semibold text-[#E24B4A]">
                OUR CLIENTS
              </p>
              <h2 className="font-medium leading-[40px] md:leading-[55px] text-[#FFFFFF]">
                Who Needs AI-Augmented Red Team Testing?
              </h2>
              <p className="text-sm sm:text-lg font-normal leading-[25px] md:leading-[31px] text-[#D1D1D1]">
                AI-Augmented Red Teaming is designed for organizations where AI
                connects to products, data, infrastructure, business processes,
                or decision-making.
              </p>
            </div>
          </Animation>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {redTeamTesting.map((item, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.12}
                className="relative px-5 py-3 space-y-3 rounded-lg border border-[#0B15301F] bg-[#66666614]"
              >
                <div className="absolute left-0 h-[23px] w-[2px] bg-[#E24B4A]"></div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                    {item.title}
                  </h3>
                  <Icon icon={item.Icon} className="text-3xl text-[#E24B4A]" />
                </div>
                <p className="text-sm sm:text-base font-normal leading-[24px] text-[#D1D1D1]">
                  {item.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiAugamentedRedTeam;
