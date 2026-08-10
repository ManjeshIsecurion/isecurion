import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import titik from "../../../assets/contact/titik.png";
import contactbackground from "../../../assets/contact/contactbackground.png";
import global from "../../../assets/contact/global.png";
import LocationMap from "../../../components/ui/LocationMap";

const enquiredata = [
  {
    id: 1,
    title: "Sales Enquiries",
    description: "Looking for cybersecurity services?",
    link: "Speak with our consultants",
    icon: "flowbite:outgoing-call-outline",
  },
  {
    id: 2,
    title: "Technical Support",
    description: "Need help with an existing service?",
    link: "Submit support ticket",
    icon: "icons8:support",
  },
  {
    id: 3,
    title: "Partnerships",
    description: "Interested in becoming a partner?",
    link: "Partner with us",
    icon: "stash:people-group-light",
  },
  {
    id: 4,
    title: "Careers",
    description: "Want to work at ISECURION?",
    link: "View open positions",
    icon: "hugeicons:job-link",
  },
];

const locations = [
  {
    id: 1,
    city: "Bangalore",
    area: "Bangalore #2, 6th Main Road, JP Nagar, Bengaluru, Karnataka 560078, India ",
    icon: "material-symbols:star-rounded",
  },
  {
    id: 2,
    city: "Ahmedabad",
    area: "Ahmedabad GF-001, Mauryansh Elanza, Shyamal Cross Road,Ahmedabad, Gujarat 380015, India",
    icon: "basil:location-solid",
  },
  {
    id: 3,
    city: "Noida",
    area: "Noida S006, 5th floor, Plot 29, Sector 142,Noida, Uttar Pradesh 201305, India ",
    icon: "basil:location-solid",
  },
  {
    id: 4,
    city: "Kolkata",
    area: "Arch Square, 8th floor, Unit No 809,Kolkata, West Bengal 700091, India",
    icon: "basil:location-solid",
  },
  {
    id: 5,
    city: "USQ",
    area: "1014 N Plum Grove Rd, Schaumburg, IL 60173, United States",
    icon: "basil:location-solid",
  },
];

function page() {
  return (
    <div>
      <section
        className="relative w-full py-14 bg-cover"
        style={{ backgroundImage: `url(${contactbackground.src})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#EBF8FF]/80 to-[#FEF2EA]/80"></div>
        <div className="absolute right-0 top-0 0 w-[200px]">
          <Image src={titik} alt="titik" />
        </div>
        <div className="absolute left-0 bottom-0  w-[200px]">
          <Image src={titik} alt="titik" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 ">
          <div className="flex flex-col lg:flex-row gap-15">
            {/* left section  */}
            <div className="flex-1 space-y-4">
              <div className="space-y-4 flex flex-col  items-center lg:items-start">
                <div className="w-fit px-4 py-1 rounded-4xl bg-[#FFFFFF]">
                  <p className="text-sm font-medium flex items-center gap-2 text-[#636977]">
                    <span>
                      <Icon
                        icon="material-symbols:contact-support-rounded"
                        className="text-[#0F66EA] w-[25px] h-[25px]"
                      />
                    </span>
                    CONTACT US
                  </p>
                </div>
                <h1 className="text-[#100E0E] text-center lg:text-left">
                  We'd love to hear from you
                </h1>
                <p className="text-lg font-normal text-center lg:text-left leading-7 text-[#8F90AB]">
                  Have a question, feedback, or need help? Our team is here to
                  assist you. Whether you're a current customer or just
                  exploring ISECURION, we're happy to help.
                </p>
              </div>
              <div className="gap-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-[#E8E8E83B]">
                  <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#FFFFFF]">
                    <Icon
                      icon="material-symbols:mail-shield-rounded"
                      className="w-[21px] h-[18px] text-[#0F66EA]"
                    />
                  </div>
                  <div className="">
                    <p className="text-sm font-medium text-[#0F66EA]">
                      For job related queries:
                    </p>
                    <p className="text font-medium text-[#475569]">
                      careers@isecurion.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-[#E8E8E83B]">
                  <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#FFFFFF]">
                    <Icon
                      icon="solar:call-medicine-bold"
                      className="w-[21px] h-[18px] text-[#7D70F0]"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-[#0F66EA]">
                      Call / Whatsapp
                    </p>
                    <p className="text-sm font-medium text-[#475569]">
                      8861201570 (Mon-Fri, 10:00 AM - 7:00 PM)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-[#E8E8E83B]">
                  <div className="w-[45px] h-[45px] shrink-0 rounded-full flex items-center justify-center bg-[#FFFFFF]">
                    <Icon
                      icon="vaadin:office"
                      className="w-[21px] h-[18px] text-[#3B9E6A]"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-[#0F66EA]">
                      Head Office
                    </p>
                    <p className="text-sm font-medium text-[#475569]">
                      6th Main Road, Opp. Elita Promenade, RBI Layout, JP Nagar
                      7th Phase, Bengaluru, Karnataka 560078
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* right section form  */}
            <div className="flex-1 space-y-5 rounded-[23px] p-4 sm:p-7 bg-[#FFFFFF]">
              <div className="flex flex-col md:flex-row w-full items-center justify-between  gap-5">
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-[#100E0E]"
                  >
                    Full Name <span className="text-[#E42F23]">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    className="text-sm font-normal px-4 py-2.5 w-full rounded-[10px] outline-none border-[1.14px] border-[#E3EAF1] text-[#636977]"
                    placeholder="First name"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-[#100E0E]"
                  >
                    Your Company Name{" "}
                    <span className="text-[#E42F23]">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    className="text-sm font-normal px-4 py-2.5 w-full rounded-[10px] outline-none border-[1.14px] border-[#E3EAF1] text-[#636977]"
                    placeholder="Company name"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full items-center justify-between  gap-5">
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-[#100E0E]"
                  >
                    Email <span className="text-[#E42F23]">*</span>{" "}
                  </label>
                  <input
                    type="email"
                    className="text-sm font-normal px-4 py-2.5 w-full rounded-[10px] outline-none border-[1.14px] border-[#E3EAF1] text-[#636977]"
                    placeholder="youremail@gmail.com"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-[#100E0E]"
                  >
                    Phone Number <span className="text-[#E42F23]">*</span>{" "}
                  </label>
                  <input
                    type="tel"
                    className="text-sm font-normal px-4 py-2.5 w-full rounded-[10px] outline-none border-[1.14px] border-[#E3EAF1] text-[#636977]"
                    placeholder="+91 987-654-321"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-[#100E0E]"
                  >
                    Service Interested In
                  </label>
                  <select className="text-sm font-normal px-4 py-2.5 w-full rounded-[10px] outline-none border-[1.14px] border-[#E3EAF1] text-[#636977]">
                    <option value="Select an option">Select an option</option>
                    <option value="1">1</option>
                  </select>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-[#100E0E]"
                  >
                    How Can We Help?{" "}
                    <span className="text-[#E42F23]">*</span>{" "}
                  </label>
                  <textarea
                    className="text-sm font-normal px-4 py-1.5 w-full rounded-[10px] outline-none border-[1.14px] border-[#E3EAF1] text-[#636977]"
                    placeholder="First name"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5">
                <p className="text-sm font-medium ">Captcha</p>{" "}
                <span className="px-5 py-2 rounded-md text-[#0F66EA] bg-[#DDF4FA8A]">
                  ZRLD9Y
                </span>
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="border-[1.4px] border-[#8F90AB]"
                />
                <p className="text-sm font-medium text-[#8F90AB]">
                  By clicking submit below, you agree to our Terms of Use and
                  Privacy Policy. Additionally, you consent to allow ISECURION
                  Technology & Consulting Pvt. Ltd. to store and process the
                  personal information submitted above to provide you the
                  content requested.
                </p>
              </div>
              <button
                type="submit"
                className="cursor-pointer w-full py-3 rounded-[10px] text-base font-semibold text-[#FFFFFF] bg-linear-to-l from-[#3A84DA] to-[#3477C5] "
              >
                Send Message →
              </button>
            </div>
          </div>

          {/* contact cards  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
            {enquiredata.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between space-y-5 p-5 rounded-xl border border-[#E3EAF1] bg-[#FFFFFF]"
              >
                <div className="flex items-center justify-center w-[47px] h-[47px] rounded-[10px] bg-[#D6E9FD69]">
                  <Icon
                    icon={item.icon}
                    className=" text-[#0F66EA]"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-[#100E0E]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] font-medium text-[#9AA4BA]">
                    {item.description}
                  </p>
                </div>
                <button className="text-[15px] font-medium cursor-pointer flex items-center gap-2 text-[#0F66EA]">
                  {item.link}{" "}
                  <span>
                    <Icon icon="ep:right" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-14  bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-stretch gap-10 flex-col lg:flex-row">
          <div className="flex-1 rounded-[10px] p-7 bg-[#151F4A] relative overflow-hidden">
            {/* <Image
              src={global}
              alt=""
              className="absolute  h-full w-full object-contain z-0"
            /> */}

            <div className="relative z-10">
              <h2 className="text-white text-2xl">Global Presence</h2>

              <p className="text-base font-medium text-[#EBEBEB]">
                Headquartered in Bangalore, serving clients across India and
                worldwide.
              </p>

              <div className="bg-[#CCCCCC12] mt-6 p-5 rounded-2xl relative z-20">
                <div className="space-y-5">
                  {locations.map((item, index) => (
                    <div key={index} className="flex gap-5">
                      <div className="w-[40px] h-[40px] flex shrink-0 items-center justify-center rounded-full bg-[#7D70F0]">
                        <Icon
                          icon={item.icon}
                          className="text-white text-[18px]"
                        />
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-base font-medium text-white">
                          {item.city}
                        </h4>

                        <p className="max-w-sm text-sm font-medium text-[#B9C2D5]">
                          {item.area}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <LocationMap />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
