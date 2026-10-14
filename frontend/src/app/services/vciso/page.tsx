import { Icon } from "@iconify/react";

import { AnimatedCard } from "../../../components/ui/Animation";

const cisoServices = [
  {
    Icon: "mingcute:file-security-line",
    heading: "Security Governance",
  },
  {
    Icon: "iconmind:eval-report-outline-regular",
    heading: "Risk & Compliance",
  },
  {
    Icon: "at-icons:line-graph",
    heading: "Security Strategy",
  },
  {
    Icon: "boxicons:lock-keyhole",
    heading: "Security Risk Management",
  },
];

const services = [
  {
    heading: "Security Leadership",
    description:
      "Executive-level cybersecurity strategy and governance without a full-time hire.",
    Icon: "iconmind:security-champion-outline-bold",
    bgColor: "#0F66EA",
  },
  {
    heading: "Risk & Compliance",
    description:
      "Multi-framework compliance management - RBI, CERT-In, ISO 27001, SOC 2 and more.",
    Icon: "fa-solid:shield-alt",
    bgColor: "#C8912A",
  },
  {
    heading: "Flexible Engagement",
    description:
      "Retainer, on-demand, or fully outsourced, designed to scale with your growth.",
    Icon: "boxicons:calendar-check",
    bgColor: "#3B9E6A",
  },
  {
    heading: "Board Reporting",
    description:
      "Executive dashboards and board-level security briefings for confident decisions.",
    Icon: "iconmind:api-analytics-outline-regular",
    bgColor: "#7D70F0",
  },
];

const whoNeedsCiso = [
  {
    Icon: "boxicons:bank",
    heading: "Regulated Organizations",
    description:
      "Banks, NBFCs, fintechs, and regulated entities managing RBI, CERT-In, SEBI/CSCRF, and IRDAI requirements.",
  },
  {
    Icon: "iconmind:compliance-outline-regular",
    heading: "Compliance & Audit Readiness",
    description:
      "Organizations pursuing ISO 27001 or SOC 2, meeting DPDP obligations, or strengthening security documentation and controls.",
  },
  {
    Icon: "healthicons:chart-cured-increasing-24px",
    heading: "Businesses & Startups",
    description:
      "Scaling companies that need investor-ready security, enterprise client assurance, and a roadmap without a full-time CISO.",
  },
  {
    Icon: "akar-icons:people-group",
    heading: "No Security Leadership",
    description:
      "Businesses needing interim CISO support, executive security guidance, and clear board-level accountability.",
  },
  {
    Icon: "ri:global-line",
    heading: "Businesses Serving Global Clients",
    description:
      "Organizations handling security questionnaires, client assessments, & international security expectations across markets.",
  },
  {
    Icon: "charm:shield-warning",
    heading: "Incident-Prone Businesses",
    description:
      "Organizations recovering from cyber incidents that need stronger governance, incident response planning, & measures to prevent recurrence.",
  },
];

function Vicso() {
  return (
    <div>
      {/* hero section  */}
      <section className="relative overflow-hidden min-h-[80vh] py-14 flex items-center  bg-[#000000]">
        <div className="absolute w-[650px] h-[650px] left-20 rounded-full blur-[200px] pointer-events-none bg-[#0F66EA80]"></div>
        <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center gap-15">
          <div className="flex-1">
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#0F66EA]">
                VIRTUAL CISO SERVICES
              </p>
              <h1 className="text-[#FFFFFF]">
                Strategic Security Leadership. Without the Full-Time Overhead.
              </h1>
              <p className="text-base sm:text-lg font-medium leading-[27px] sm:leading-[30px] md:leading-[32px] text-[#D1D1D1]">
                Access experienced cybersecurity leadership to manage risk,
                strengthen governance, and navigate compliance requirements.
                ISECURION’s Virtual CISO services help turn security priorities
                into a practical, business-aligned strategy.
              </p>
            </div>
            <div className="mt-5 flex items-center justify-center lg:justify-start">
              <div className="grid grid-cols-2 gap-y-4">
                {cisoServices.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="w-[48px] h-[48px] flex items-center justify-center rounded-xl bg-[#8D8D8D57]">
                      <Icon
                        icon={item.Icon}
                        className="text-[22px] text-[#FFFFFF]"
                      />
                    </div>
                    <h3 className="text-sm sm:text-base font-medium text-[#F5F0E8]">
                      {item.heading}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  justify-center lg:justify-start gap-4 mt-8">
              <button className="text-[15px] font-medium px-4 py-4 flex items-center gap-2 rounded-[10px] cursor-pointer text-[#31435C] bg-[#FFFFFF]">
                Request a vCISO Consultation{" "}
                <span>
                  <Icon icon="akar-icons:arrow-right" className="text-lg" />
                </span>
              </button>
              <button className="text-[15px] font-medium px-4 py-4  rounded-[10px] cursor-pointer text-[#FFFFFF] border border-[#FFFFFF29]">
                View Scope of Work{" "}
              </button>
            </div>
          </div>
          <div className="flex-1  px-7 py-5 rounded-3xl space-y-5 bg-linear-to-r from-[#7B6FE829] to-[#090B21]">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col w-full gap-3">
                <label
                  htmlFor=""
                  className="text-[#FEFEFE] text-sm font-normal"
                >
                  First Name <span className="text-[#E42F23]">*</span>{" "}
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C]"
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <label
                  htmlFor=""
                  className="text-[#FEFEFE] text-[15px] font-normal"
                >
                  Company Name <span className="text-[#E42F23]">*</span>{" "}
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C]"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col w-full gap-3">
                <label
                  htmlFor=""
                  className="text-[#FEFEFE] text-[15px] font-medium"
                >
                  Email <span className="text-[#E42F23]">*</span>{" "}
                </label>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  className="px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C]"
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <label
                  htmlFor=""
                  className="text-[#FEFEFE] text-[15px] font-medium"
                >
                  Phone Number <span className="text-[#E42F23]">*</span>{" "}
                </label>
                <input
                  type="tel"
                  placeholder="+91 987-654-321"
                  className="px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C]"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col w-full gap-3">
                <label
                  htmlFor=""
                  className="text-[#FEFEFE] text-[15px] font-medium"
                >
                  Location
                </label>
                <select
                  name=""
                  id=""
                  className=" h-12 w-full px-3 rounded-[10px] cursor-pointer outline-none  text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C]"
                >
                  <option value="">Select your loaction</option>
                  <option value="india">India</option>
                </select>
              </div>
              <div className="flex flex-col w-full gap-3">
                <label
                  htmlFor=""
                  className="text-[#FEFEFE] text-[15px] font-medium"
                >
                  Engagement Type <span className="text-[#E42F23]">*</span>{" "}
                </label>
                <select
                  name=""
                  id=""
                  className="h-12 w-full px-3 rounded-[10px] cursor-pointer outline-none text-[#D1D1D1] bg-[#000C1C]"
                >
                  <option value="">Choose enagament type</option>
                  <option value="">Foundational vCISO (Startup / SME)</option>
                  <option value="">Growth vCISO (Mid-Market)</option>
                  <option value="">Enterprise vCISO (Continuous)</option>
                  <option value="">On-demand Advisory / Retainer</option>
                  <option value="">
                    Compliance vCISO (RBI / CERT-In / DPDP / SEBI)
                  </option>
                  <option value="">
                    Compliance vCISO (ISO 27001 / SOC 2 / GDPR)
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-[#FEFEFE] text-[15px] font-medium"
              >
                How Can We Help?
              </label>
              <textarea
                placeholder=" Brief requirement (optional)"
                name=""
                id=""
                className="px-3 py-3 w-full rounded-[10px] text-[#D1D1D1] bg-[#000C1C] border border-[#262D3D] outline-none"
              ></textarea>
            </div>
            <div className="">
              <div className="flex items-center gap-3">
                <span className="text-sm leading-5 text-[#E7E7E7]">
                  Captcha
                </span>

                <span className="flex h-[32px] min-w-[127px] items-center justify-center rounded-[5px] bg-[#E24B4A78] px-5 text-[13px] font-medium tracking-wide text-white">
                  ZRLD9Y
                </span>
              </div>

              <input
                id="captcha"
                name="captcha"
                type="text"
                placeholder="Enter the text shown above"
                required
                className="mt-3 px-3 py-3 w-full rounded-[10px] border border-[#262D3D] bg-[#000C1C]   text-[#D1D1D1] outline-none placeholder:text-[#858585] "
              />
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="border border-[#D1D1D1] bg-none"
              />
              <p className="text-xs font-medium leading-[22px] text-[#D1D1D1]">
                By clicking submit below, you agree to our Terms of Use and
                Privacy Policy. Additionally, you consent to allow ISECURION
                Technology & Consulting Pvt. Ltd. to store and process the
                personal information submitted above to provide you the content
                requested.
              </p>
            </div>
            <button className="text-base sm:text-lg font-medium flex items-center justify-center py-3 w-full rounded-[10px] cursor-pointer text-[#FFFFFF] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] border-2 border-[#577bbd]">
              Request Consultation{" "}
              <span>
                <Icon icon="akar-icons:arrow-right" className="text-lg" />
              </span>{" "}
            </button>
          </div>
        </div>
      </section>

      {/* Understanding vCISO  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-xl mx-auto lg:mx-0 space-y-4 text-center lg:text-left">
            <p className="text-sm sm:text-base font-semibold uppercase text-[#0F66EA]">
              Understanding vCISO
            </p>
            <h2 className="text-[#FEFEFE]">
              Executive-level cybersecurity expertise, built around your
              business.
            </h2>
            <p className="text-base sm:text-lg font-medium leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1]">
              A Virtual Chief Information Security Officer (vCISO) provides
              strategic and operational security leadership on a flexible,
              outsourced basis.
            </p>
            <p className="text-base sm:text-lg font-medium leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1]">
              From risk management and security policies to compliance and
              incident readiness, ISECURION helps your teams build and maintain
              a structured security programme without the cost of a full-time
              executive hire.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {services.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.15}
                  className="space-y-3 pl-6 border-l border-[#0F66EA29]"
                >
                  <div
                    className="w-[48px] h-[48px] flex items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${item.bgColor}` }}
                  >
                    <Icon icon={item.Icon} className="text-xl text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-base font-medium text-[#F5F0E8]">
                    {item.heading}
                  </h3>
                  <p className="text-sm font-normal leading-[21px] text-[#D1D1D1D6]">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO NEEDS A vCISO?  */}
      <section className="relative w-full py-14 overflow-hidden bg-[#060D1B]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 -right-20 w-[300px] h-[300px] rounded-full blur-[100px] bg-[#FFFFFF33]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm sm:text-base font-semibold text-[#0F66EA]">
              WHO NEEDS A vCISO?
            </p>
            <h2 className="text-[#FFFFFF]">
              The right security leadership for your next stage of growth.
            </h2>
            <p className="text-base sm:text-lg font-medium leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1]">
              Whether you're scaling operations, preparing for an audit, or
              strengthening accountability, a vCISO helps your organization take
              a more structured approach to cybersecurity.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whoNeedsCiso.map((item, index) => (
                <AnimatedCard
                  delay={index * 0.15}
                  key={index}
                  className="relative flex flex-col justify-between p-5 space-y-4 rounded-lg bg-[#66666614] border border-[#0B15301F]"
                >
                  <div className="absolute left-0 w-[2.5px] h-[23px] rounded-tr-2xl rounded-br-2xl bg-[#0F66EA]"></div>
                  <div className="flex items-center justify-between gap-10">
                    <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                      {item.heading}
                    </h3>
                    <span>
                      <Icon
                        icon={item.Icon}
                        className="w-[25px] h-[25px] text-[#0F66EA]"
                      />
                    </span>
                  </div>
                  <p className="text-[15px] font-normal leading-[24px] text-[#D1D1D1]">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vicso;
