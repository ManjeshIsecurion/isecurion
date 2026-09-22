import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import titik from "../../../assets/contact/titik.png";
import contactbackground from "../../../assets/contact/contactbackground.png";
import global from "../../../assets/contact/global.png";
import LocationMap from "../../../components/ui/LocationMap";
import leftBackground from "../../../assets/contact/left_background.png"

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
    area: "#2, 6th Main Road, JP Nagar, Bengaluru, Karnataka 560078, India ",
    icon: "material-symbols:star-rounded",
  },
  {
    id: 2,
    city: "Ahmedabad",
    area: "GF-001, Mauryansh Elanza, Shyamal Cross Road,Ahmedabad, Gujarat 380015, India",
    icon: "basil:location-solid",
  },
  {
    id: 3,
    city: "Noida",
    area: "S006, 5th floor, Plot 29, Sector 142,Noida, Uttar Pradesh 201305, India ",
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
    city: "USA",
    area: "1014 N Plum Grove Rd, Schaumburg, IL 60173, United States",
    icon: "basil:location-solid",
  },
];

function page() {
  return (
    <div className="min-h-screen bg-black">
      <section
        className="relative mx-auto max-w-7xl bg-cover py-15"
        style={{ backgroundImage: `url(${contactbackground.src})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#131331] to-[#0C2023]">
          <div className="relative z-10 px-6 py-14 sm:px-10">
            <div className="absolute right-0 top-0 0 w-[200px]">
              <Image src={titik} alt="titik" />
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0  w-[200px]">
          <Image src={titik} alt="titik" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 ">
          <div className="flex flex-col lg:flex-row gap-15">
            {/* left section  */}
            <div className="flex-1 space-y-4">
              <div className="space-y-4 flex flex-col  items-center lg:items-start">
                <div className="w-fit px-4 py-1 rounded-4xl bg-[#161B2F]">
                  <p className="text-sm font-medium flex items-center gap-2 text-[#B4CAFD]">
                    <span>
                      <Icon
                        icon="material-symbols:contact-support-rounded"
                        className="text-[#0F66EA] w-[25px] h-[25px]"
                      />
                    </span>
                    CONTACT US
                  </p>
                </div>
                <h1 className="text-white text-center lg:text-left lg:leading-[56px]">
                  We'd love to hear <br /> from you
                </h1>
                <p className="text-[18px] font-normal text-center lg:text-left leading-7 text-[#D1D1D1] max-w-[424px] leading-[31px]">
                  Have a question, feedback, or need help? Our team is here to
                  assist you. Whether you're a current customer or just
                  exploring ISECURION, we're happy to help.
                </p>
              </div>
              <div className="gap-5 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
                <div className="flex items-center gap-4 p-5 rounded-lg bg-[#0F66EA29]">
                  <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#002A69]">
                    <Icon
                      icon="material-symbols:mail-shield-rounded"
                      className="w-[21px] h-[21px] text-white"
                    />
                  </div>
                  <div className="">
                    <p className="text-sm font-medium text-white">
                      For job related queries:
                    </p>
                    <p className="text font-medium text-[#D1D1D1]">
                      careers@isecurion.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-lg bg-[#0F66EA29]">
                  <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#002A69]">
                    <Icon
                      icon="solar:call-medicine-bold"
                      className="w-[21px] h-[21px] text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-white">
                      Call / Whatsapp
                    </p>
                    <p className="text-sm font-medium text-[#D1D1D1]">
                      8861201570 (Mon-Fri, 10:00 AM - 7:00 PM)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-lg bg-[#0F66EA29]">
                  <div className="w-[45px] h-[45px] shrink-0 rounded-full flex items-center justify-center bg-[#002A69]">
                    <Icon
                      icon="vaadin:office"
                      className="w-[21px] h-[21px] text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-white">
                      Head Office
                    </p>
                    <p className="text-sm font-medium text-[#D1D1D1] max-w-[323px]">
                      6th Main Road, Opp. Elita Promenade, RBI Layout, JP Nagar
                      7th Phase, Bengaluru, Karnataka 560078
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* right section form  */}
            <div className="flex-1 space-y-5 rounded-[23px] p-4 sm:p-7 bg-[#000C1C]">
              <div className="flex flex-col md:flex-row w-full items-center justify-between  gap-5">
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-white"
                  >
                    Full Name <span className="text-[#E42F23]">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    className="text-sm font-normal px-4 py-4 w-full rounded-[10px] outline-none border-[1.14px] border-[#262D3D] text-[#D1D1D1]"
                    placeholder="First name"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-white"
                  >
                    Your Company Name{" "}
                    {/* <span className="text-[#E42F23]">*</span>{" "} */}
                  </label>
                  <input
                    type="text"
                    className="text-sm font-normal px-4 py-4 w-full rounded-[10px] outline-none border-[1.14px] border-[#262D3D] text-[#D1D1D1]"
                    placeholder="Company name"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full items-center justify-between  gap-5">
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-white"
                  >
                    Email <span className="text-[#E42F23]">*</span>{" "}
                  </label>
                  <input
                    type="email"
                    className="text-sm font-normal px-4 py-4 w-full rounded-[10px] outline-none border-[1.14px] border-[#262D3D] text-[#D1D1D1]"
                    placeholder="youremail@gmail.com"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-white"
                  >
                    Phone Number <span className="text-[#E42F23]">*</span>{" "}
                  </label>
                  <input
                    type="tel"
                    className="text-sm font-normal px-4 py-4 w-full rounded-[10px] outline-none border-[1.14px] border-[#262D3D] text-[#D1D1D1]"
                    placeholder="+91 987-654-321"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-white"
                  >
                    Service Interested In
                  </label>
                  <select className="text-sm font-normal px-4 py-4 w-full rounded-[10px] outline-none border-[1.14px] border-[#262D3D] text-[#D1D1D1]">
                    <option value="Select an option">Select an option</option>
                    <option value="1">1</option>
                  </select>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-white"
                  >
                    How Can We Help?{" "}
                    <span className="text-[#E42F23]">*</span>{" "}
                  </label>
                  <textarea
                    rows={10}
                    className="text-sm font-normal px-4 py-2.5 w-full rounded-[10px] outline-none border-[1.14px] border-[#262D3D] text-[#D1D1D1]"
                    placeholder="Leave us a message..."
                  />
                </div>
              </div>
              <div className="flex items-center gap-5">
                <p className="text-sm font-medium text-white">Captcha</p>{" "}
                <span className="px-8 py-1.5 rounded-md text-white bg-[#1F72888A] text-[15px]">
                  ZRLD9Y
                </span>
              </div>
              <input
                type="text"
                className="text-sm font-normal px-4 py-3.5 w-full rounded-[10px] outline-none border-[1.14px] border-[#262D3D] text-[#D1D1D1]"
                placeholder="Enter the text shown above"
              />
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="border-[1.4px] border-[#8F90AB]"
                />
                <p className="text-[11px] font-medium text-[#D1D1D1] max-w-[500px]">
                  By clicking submit below, you agree to our Terms of Use and
                  Privacy Policy. Additionally, you consent to allow ISECURION
                  Technology & Consulting Pvt. Ltd. to store and process the
                  personal information submitted above to provide you the
                  content requested.
                </p>
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-[10px] border-[2px] border-[#3263B1] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] py-3 text-base font-semibold text-white cursor-pointer"
              >
                <span>Send Message</span>

                <Icon
                  icon="at-icons:arrow-right"
                  className="h-[15px] w-[15px]"
                />
              </button>
            </div>
          </div>

          {/* contact cards  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
            {enquiredata.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between space-y-5 p-5 rounded-[12px] bg-[#0F234A]"
              >
                <div className="flex items-center justify-center w-[47px] h-[47px] rounded-[10px] bg-[#002A69]">
                  <Icon
                    icon={item.icon}
                    className=" text-[#0F66EA]"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-[15px] font-medium text-[#D1D1D1] max-w-[200px] mt-2">
                    {item.description}
                  </p>
                </div>
                <button className="text-[15px] font-medium cursor-pointer flex items-center gap-2 text-white mt-6">
                  {item.link}{" "}
                  <span>
                    <Icon icon="at-icons:arrow-right" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-[#070D1A]">
        <div className="px-6 py-14 sm:px-10 flex items-stretch gap-10 flex-col lg:flex-row">
          <div className="flex-1 rounded-[10px] p-7 bg-[#151F4A] relative overflow-hidden">
            {/* <Image
              src={global}
              alt=""
              className="absolute  h-full w-full object-contain z-0"
            /> */}

            <div className="relative z-10 bg-no-repeat bg-right"
              style={{ backgroundImage: `url(${leftBackground.src})` }}>
              <h2 className="text-white text-2xl">Global Presence</h2>

              <p className="text-base font-medium text-[#EBEBEB] mt-2 max-w-[350px]">
                Headquartered in Bangalore, serving clients across India and
                worldwide.
              </p>

              <div className="bg-[#CCCCCC12] mt-6 p-10 rounded-2xl relative z-20 bg-no-repeat"
              >
                <div className="space-y-5">
                  {locations.map((item, index) => (
                    <div key={index}>

                      {/* MOBILE */}
                      <div className="sm:hidden">

                        {/* Icon + City */}
                        <div className="flex items-center gap-4">
                          <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#7D70F0]">
                            <Icon
                              icon={item.icon}
                              className="text-[18px] text-white"
                            />
                          </div>

                          <h4 className="text-base font-medium text-white">
                            {item.city}
                          </h4>
                        </div>

                        {/* Address below icon + city */}
                        <p className="mt-1 text-sm font-medium leading-5 text-[#B9C2D5]">
                          {item.area}
                        </p>

                      </div>


                      {/* DESKTOP */}
                      <div className="hidden sm:flex gap-5">

                        <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#7D70F0]">
                          <Icon
                            icon={item.icon}
                            className="text-[18px] text-white"
                          />
                        </div>

                        <div className="min-w-0 flex-1 space-y-1">
                          <h4 className="text-base font-medium text-white">
                            {item.city}
                          </h4>

                          <p className="text-sm font-medium text-[#B9C2D5] mt-2">
                            {item.area}
                          </p>
                        </div>

                      </div>


                      {/* Divider */}
                      {index !== locations.length - 1 && (
                        <hr className="my-4 border-t border-[#9AA4BA26]" />
                      )}

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
