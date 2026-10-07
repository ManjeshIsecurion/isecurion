import React from 'react'
import { Icon } from '@iconify/react'
import icsBg from "../../../assets/services/ot-security-illustration-colorful.png"
import { main } from 'framer-motion/m'
import Animation from '../../../components/ui/Animation'
import methodologyDesktop from "../../../assets/services/methedologyDesktop.png"
import methodologyMobile from "../../../assets/services/methedologyMobile.png"
import Image from "next/image";

const cards = [
    {
        icon: "fa-solid:shield-alt",
        iconBg: "#022D6C",
        title: "Compliance Readiness",
        description:
            "Identify compliance gaps across your ICS environment and strengthen regulatory alignment.",
    },
    {
        icon: "iconmind:hazard-outline-regular",
        iconBg: "#3B9E6A",
        title: "Risk Visibility",
        description:
            "Gain clearer visibility into ICS security risks, vulnerabilities, and potential exposure.",
    },
    {
        icon: "akar-icons:people-group",
        iconBg: "#E24B4A",
        title: "Stakeholder Confidence",
        description:
            "Demonstrate effective ICS risk management & build confidence with customers & stakeholders.",
    },
    {
        icon: "fluent:arrow-trending-lines-24-filled",
        iconBg: "#0F66EA",
        title: "Better Business Decisions",
        description:
            "Get actionable security insights to support informed and confident business decisions.",
    },
    {
        icon: "iconmind:compliance-outline-regular",
        iconBg: "#C8912A",
        title: "Optimized Security Investment",
        description:
            "Maximize security ROI with effective controls and the right protection levels.",
    },
    {
        icon: "bx:lock",
        iconBg: "#959EFE",
        title: "Actionable Security Report",
        description:
            "Receive a detailed report outlining identified risks, recommendations, & remediation support.",
    },
];

const governanceCards = [
    {
        icon: "lucide:triangle-alert",
        title: "Governance & Risk",
        items: [
            "ICS policies & standards",
            "Risk management",
            "Security controls",
            "Compliance alignment"
        ]
    },
    {
        icon: "lucide:layers",
        title: "Asset & Architecture",
        items: [
            "ICS inventory",
            "Network architecture",
            "Authorized / unauthorized devices",
            "SCADA environment"
        ]
    },
    {
        icon: "material-symbols:folder-managed-outline-rounded",
        title: "Access and Configuration",
        items: [
            "Identity & access management",
            "Secure configurations",
            "Network ports & protocols",
            "Wireless access"
        ]
    },
    {
        icon: "lucide:lock",
        title: "Resilience & Response",
        items: [
            "Endpoint security",
            "Data protection",
            "Recovery capability",
            "Incident response"
        ]
    }
];

function page() {
    return (
        <main className="bg-black">
            <section className="relative overflow-hidden bg-[#07101D]">
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat bg-[position:center_center] lg:bg-[position:center_center]"
                    style={{
                        backgroundImage: `url(${icsBg.src})`,
                    }}
                />

                <div className="absolute inset-0 bg-[#07101D]/10" />

                <div className="relative z-10 mx-auto flex  max-w-7xl items-center px-6 py-16 sm:px-8  md:px-10
                     lg:px-[26px] lg:py-[48px]">

                    <div className="w-full max-w-[590px] md:max-w-[560px] lg:max-w-[570px]">

                        {/* EYEBROW */}
                        <p className="text-[12px] font-medium uppercase leading-[18px] text-[#0F66EA] sm:text-[14px]">
                            Industrial Control System Security Assessment
                        </p>

                        {/* HEADING */}
                        <h1
                            className="mt-[18px] max-w-[570px] text-[38px] font-medium leading-[1.2] tracking-[-0.02em] text-white sm:text-[32px] md:text-[36px] lg:mt-[22px] lg:text-[38px] lg:leading-[1.4]">
                            Secure your ICS/SCADA before vulnerabilities impact operations.
                        </h1>

                        {/*DESCRIPTION */}
                        <p
                            className="mt-[24px] max-w-[460px] text-[14px] font-normal leading-[1.75] text-[#D1D1D1] sm:text-[15px] lg:mt-[26px]  lg:text-[16px] lg:leading-[1.72]">
                            ISECURION helps identify, assess, and prioritize security risks across critical industrial systems, networks, applications, and infrastructure.
                        </p>

                        <div className="mt-[30px] sm:mt-[34px]">

                            <button
                                className="inline-flex h-[54px] items-center justify-center rounded-[9px] bg-white px-[20px] py-[12px] text-[15px] font-medium text-[#31435C] transition-all duration-200 hover:bg-[#F3F5F8] sm:min-h-[54px] sm:px-[21px] lg:px-[20px]">
                                <span>
                                    Schedule an ICS Assessment
                                </span>

                                <span className="ml-[8px] text-[20px]">
                                    <Icon icon="mdi:arrow-right" width={20} />
                                </span>
                            </button>

                        </div>

                    </div>

                </div>
            </section>

            <section className="bg-[#07101D] text-white">
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">

        {/* SECTION HEADER & OVERVIEW */}
        <Animation>
            <div>
                <p className="text-[14px] font-medium uppercase leading-[18px] tracking-[0.2px] text-[#0F66EA] sm:text-[15px]">
                    OVERVIEW
                </p>

                <h2 className="mt-3 text-2xl font-normal leading-tight text-white sm:text-3xl lg:text-[32px]">
                    What Is ICS Security Assessment?
                </h2>

                <p className="mt-4 max-w-[580px] text-sm leading-relaxed text-[#D1D1D1] sm:text-[15px]">
                    Modern ICS/SCADA environments are increasingly connected to corporate networks and the Internet, creating new opportunities for cyber threats. ISECURION assesses these environments to identify vulnerabilities and security gaps before they can impact critical operations.
                </p>
            </div>
        </Animation>


        {/* WE ASSESS LIST */}
        <Animation>
            <div className="mt-8">
                <p className="text-[14px] font-medium text-white sm:text-[15px]">
                    We Assess
                </p>

                {/* Stacks to 1 column on mobile, expands to 2 columns on tablet/desktop */}
                <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 text-xs text-[#D1D1D1] sm:grid-cols-2 sm:text-[13px] lg:max-w-3xl">

                    <li className="flex items-center gap-2.5">
                        <Icon
                            icon="boxicons:seal-check"
                            className="shrink-0 text-[18px] text-[#0F66EA]"
                        />
                        <span>ICS network architecture</span>
                    </li>

                    <li className="flex items-center gap-2.5">
                        <Icon
                            icon="boxicons:seal-check"
                            className="shrink-0 text-[18px] text-[#0F66EA]"
                        />
                        <span>Identity & access management</span>
                    </li>

                    <li className="flex items-center gap-2.5">
                        <Icon
                            icon="boxicons:seal-check"
                            className="shrink-0 text-[18px] text-[#0F66EA]"
                        />
                        <span>PLCs, RTUs, HMIs & Historians</span>
                    </li>

                    <li className="flex items-center gap-2.5">
                        <Icon
                            icon="boxicons:seal-check"
                            className="shrink-0 text-[18px] text-[#0F66EA]"
                        />
                        <span>Endpoint and malware protection</span>
                    </li>

                    <li className="flex items-center gap-2.5">
                        <Icon
                            icon="boxicons:seal-check"
                            className="shrink-0 text-[18px] text-[#0F66EA]"
                        />
                        <span>SCADA applications</span>
                    </li>

                    <li className="flex items-center gap-2.5">
                        <Icon
                            icon="boxicons:seal-check"
                            className="shrink-0 text-[18px] text-[#0F66EA]"
                        />
                        <span>Firewalls, routers & switches</span>
                    </li>

                    <li className="flex items-center gap-2.5">
                        <Icon
                            icon="boxicons:seal-check"
                            className="shrink-0 text-[18px] text-[#0F66EA]"
                        />
                        <span>Network ports, protocols & services</span>
                    </li>

                    <li className="flex items-center gap-2.5">
                        <Icon
                            icon="boxicons:seal-check"
                            className="shrink-0 text-[18px] text-[#0F66EA]"
                        />
                        <span>Wireless access controls</span>
                    </li>
                </ul>
            </div>
        </Animation>


        {/* CARDS GRID */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
                <Animation key={card.title} delay={index * 0.12}>
                    <div
                        className="flex h-full flex-col justify-between rounded-[15px] border border-[#002C8C] bg-gradient-to-b from-[#0A1119] to-[#17366E] p-5 sm:p-6 transition-all duration-300 hover:border-[#0F66EA]"
                    >
                        {/* Icon */}
                        <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                            style={{ backgroundColor: card.iconBg }}
                        >
                            <Icon
                                icon={card.icon}
                                className="text-[22px] text-white"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="mt-6 sm:mt-8">
                            <h3 className="text-sm font-medium text-white sm:text-[16px]">
                                {card.title}
                            </h3>

                            <p className="mt-2 text-[12px] leading-relaxed text-[#D1D1D1] sm:text-[13px]">
                                {card.description}
                            </p>
                        </div>
                    </div>
                </Animation>
            ))}
        </div>

    </div>
</section>

            <section className="relative bg-[#07101D] text-white pb-16 sm:pb-20 lg:pb-24">
                <div
                    className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[1086px] h-[352px] rounded-full bg-[#A250ED]/12 pointer-events-none z-0 blur-[140px]"
                />
                <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-[26px]">

                    {/* SECTION HEADER */}
                    <div className="max-w-4xl">
                        <p className="text-[14px] font-medium uppercase leading-[18px] tracking-[0.2px] text-[#0F66EA] sm:text-[15px]">
                            OUR METHODOLOGY
                        </p>

                        <h2 className="mt-[16px] text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-white sm:text-[38px] lg:text-[42px]">
                            Audit the Control. <br />
                            Test the Attack Path.
                        </h2>

                        <p className="mt-[18px] text-[15px] font-normal leading-[1.7] text-[#D1D1D1] sm:text-[16px] max-w-[850px]">
                            A dual-track methodology combining compliance assurance and controlled offensive testing for industrial control environments.
                        </p>
                    </div>

                    {/* TRACK 01 */}
                    <div className="mt-6 sm:mt-8">
                        <div className="flex items-baseline gap-3">
                            <span className="text-[16px] font-semibold text-[#0F66EA]">01</span>
                            <p className="text-[15px] font-normal uppercase text-white">
                                COMPLIANCE &amp; SECURITY GOVERNANCE
                            </p>
                        </div>
                        <p className="mt-2 text-[14px] text-[#D1D1D1]">
                            Ensure the right controls, policies and processes are in place.
                        </p>

                        {/* 4 CARDS GRID */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {governanceCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="border-l border-[#0F66EA29] p-6 "
                                >
                                    {/* ICON BADGE */}
                                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#8D8D8D57] text-gray-300">
                                        <Icon icon={card.icon} className="h-4 w-4" />
                                    </div>

                                    {/* CARD TITLE */}
                                    <h4 className="mt-5 text-[16px] font-medium text-[#F5F0E8]">
                                        {card.title}
                                    </h4>

                                    {/* BULLET LIST */}
                                    <ul className="mt-4 space-y-2 text-[13px] text-[#D1D1D1D6]">
                                        {card.items.map((item, itemIdx) => (
                                            <li key={itemIdx} className="flex items-start gap-2">
                                                <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#94A3B8]" />
                                                <span className="leading-tight">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TRACK 02 */}
                    <div className="mt-8 sm:mt-16 ">
                        <div className="flex items-baseline gap-3">
                            <span className="text-[16px] font-semibold text-[#0F66EA]">02</span>
                            <p className="text-[15px] font-normal uppercase text-white">
                                ICS VULNERABILITY ASSESSMENT &amp; PENETRATION TESTING
                            </p>
                        </div>
                        <p className="mt-2 text-[14px] text-[#D1D1D1]">
                            Find and validate what can be exploited, before attackers do.
                        </p>
                    </div>

                </div>
            </section>

            <section className=''>
                <div className="relative overflow-hidden bg-[linear-gradient(110deg,#050B18_0%,#071321_48%,#06383C_100%)]">

                    <Animation>
                        {/* Methodology Heading */}
                        <div className="relative mx-auto max-w-7xl px-6 pt-16 text-center sm:px-10 lg:px-12 lg:pt-20">

                            {/* Subtle background glow */}

                            <div className="pointer-events-none absolute right-0 top-0 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[100px]" />

                            <h2 className="relative text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-[36px]">
                                Our Security Assessment Methodology
                            </h2>

                            <p className="relative mx-auto mt-5 max-w-[850px] text-sm leading-6 text-white/70 sm:text-base">
                                At ISECURION, we combine{" "}
                                <span className="font-medium text-white">
                                    OWASP-aligned testing
                                </span>
                                ,{" "}
                                <span className="font-medium text-white">
                                    automated tools
                                </span>
                                , and{" "}
                                <span className="font-medium text-white">
                                    expert-led manual assessment
                                </span>{" "}
                                to uncover and validate web application security risks.
                            </p>
                        </div>
                    </Animation>


                    <div className="hidden px-6 pb-12 pt-10 sm:px-10 lg:block lg:px-12 lg:pb-15">
                        <Image
                            src={methodologyDesktop}
                            alt="Our Security Assessment Methodology"
                            className="mx-auto h-auto w-full max-w-[1000px]"
                        />
                    </div>


                    <div className="relative px-6 pb-14 pt-10 sm:px-10 lg:hidden">

                        {/* Central Graphic + Numbers */}
                        <div className="relative mx-auto w-full max-w-[430px]">

                            <Image
                                src={methodologyMobile}
                                alt="Web application security assessment methodology"
                                className="h-auto w-full"
                            />

                            {/* 01 - Top */}
                            <span className="absolute left-1/2 top-[4%] -translate-x-1/2 text-sm font-medium text-[#3D73BA]">
                                01
                            </span>

                            {/* 02 - Top Right */}
                            <span className="absolute right-[9%] top-[28%] text-sm font-medium text-[#3D73BA]">
                                02
                            </span>

                            {/* 03 - Bottom Right */}
                            <span className="absolute right-[9%] bottom-[24%] text-sm font-medium text-[#3D73BA]">
                                03
                            </span>

                            {/* 04 - Bottom */}
                            <span className="absolute left-1/2 bottom-[4%] -translate-x-1/2 text-sm font-medium text-[#3D73BA]">
                                04
                            </span>

                            {/* 05 - Bottom Left */}
                            <span className="absolute left-[9%] bottom-[24%] text-sm font-medium text-[#3D73BA]">
                                05
                            </span>

                            {/* 06 - Top Left */}
                            <span className="absolute left-[9%] top-[28%] text-sm font-medium text-[#3D73BA]">
                                06
                            </span>

                        </div>


                        {/* Methodology Items */}
                        <div className="mt-10 space-y-8">

                            <div>
                                <span className="text-sm text-[#3D73BA]">01</span>
                                <h3 className="text-base font-medium text-white">
                                    Reconnaissance
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/65">
                                    Identify remote and local entry points across the ICS/SCADA environment.
                                </p>
                            </div>

                            <div>
                                <span className="text-sm text-[#3D73BA]">02</span>
                                <h3 className="text-base font-medium text-white">
                                    Network Mapping
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/65">
                                    Map ICS networks, exposed services, protocols, communication paths, and connected systems.
                                </p>
                            </div>

                            <div>
                                <span className="text-sm text-[#3D73BA]">03</span>
                                <h3 className="text-base font-medium text-white">
                                    System Enumeration
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/65">
                                    Assess PLCs, RTUs, HMIs, historians, SCADA applications, databases, credentials, and wireless connections.
                                </p>
                            </div>

                            <div>
                                <span className="text-sm text-[#3D73BA]">04</span>
                                <h3 className="text-base font-medium text-white">
                                    Vulnerability Analysis
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/65">
                                    Identify weaknesses across network protocols, systems, applications, configurations, and access mechanisms.
                                </p>
                            </div>


                            <div>
                                <span className="text-sm text-[#3D73BA]">05</span>
                                <h3 className="text-base font-medium text-white">
                                   Controlled Exploitation
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/65">
                                    Safely validate exploitable weaknesses, remote-access paths, and diagnostic mechanisms within agreed rules of engagement.
                                </p>
                            </div>


                            {/* Reporting & Deliverables */}
                            <div>
                                <span className="text-sm text-[#3D73BA]">06</span>
                                <h3 className="text-base font-medium text-white">
                                    Reporting & Deliverables
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/65">
                                    Correlate findings with potential operational impact, prioritize vulnerabilities, and deliver evidence-based recommendations & corrective actions.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    )
}

export default page