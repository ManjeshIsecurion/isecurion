import React from "react";
import telecommunication from "../../assets/home/telecommunication.png";
import healthcare from "../../assets/home/healthcare.png";
import fintech from "../../assets/home/fintech.png";
import ecommerce from "../../assets/home/ecommerce.png";
import education from "../../assets/home/education.png";
import government from "../../assets/home/government.png";
import background from "../../assets/home/background.jpg";

function IndustriesWeSecure() {
  return (
    <div className="w-full py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* heading  */}
        <div className="flex">
          <h2 className="text-4xl font-medium leading-12">
            Security expertise across the industries that{" "}
            <span className="bg-linear-to-l to-[#0F66EA] from-[#0C3172] bg-clip-text text-transparent">
              matters.
            </span>
          </h2>
          <div className="space-y-2">
            <p className="text-base  font-medium  text-[#0F66EA]">
              INDUSTRIES WE SECURE
            </p>
            <p className="text-lg font-medium leading-8 text-[#8F90AB]">
              We understand the unique challenges of your industry and deliver
              solutions that protect what matters most.
            </p>
          </div>
        </div>

        <div className="mt-10">
          {/* 1 */}
          <div className="flex">
            <div className="group flex flex-1 h-[280px] overflow-hidden ">
              {/* Image */}
              <div
                className="w-1/2 overflow-hidden transition-all duration-700 ease-in-out group-hover:w-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${telecommunication.src})` }}
              >
                <p className="text-2xl font-medium text-[#FFFFFF] p-5">01</p>
              </div>

              {/* Content */}
              <div className="flex w-1/2 flex-col justify-center bg-[#121D4A] p-8 transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-white">
                <div className="block group-hover:hidden">
                  <h3 className="text-2xl font-medium text-white transition-colors duration-500">
                    Telecommunications
                  </h3>

                  <p className="mt-4 text-base font-medium text-[#FFFFFFBF] transition-colors duration-500 ">
                    Ensure resilient connectivity across complex telecom
                    environments.
                  </p>
                </div>

                <div className="mt-8 hidden  justify-center items-center  gap-10 w-full group-hover:flex h-full">
                  <div>
                    <h2 className="text-3xl font-medium text-[#0F66EA]">12+</h2>
                    <p className="mt-2 text-base font-medium text-[#4B5563]">
                      Customers
                    </p>
                  </div>
                  <div className=" ">
                    <h2 className="text-3xl font-medium text-[#0F66EA]">
                      310+
                    </h2>
                    <p className="mt-2 text-base font-medium text-[#4B5563]">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group flex flex-1 h-[280px] overflow-hidden ">
              <div
                className="w-1/2 overflow-hidden transition-all duration-700 ease-in-out group-hover:w-0"
                style={{ backgroundImage: `url(${healthcare.src})` }}
              >
                <p className="text-2xl font-medium text-[#FFFFFF] p-5">02</p>
              </div>

              <div className="flex w-1/2 flex-col justify-center hover:bg-none bg-linear-to-t from-[#4A81D3] to-[#3B9E6A] p-8 transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-white">
                <div className="block group-hover:hidden">
                  <h3 className="text-2xl font-semibold text-white transition-colors duration-500">
                    Healthcare
                  </h3>

                  <p className="mt-4 text-[#D1D5DB] transition-colors duration-500 text-white">
                    Protect connected medical devices, patient data, and
                    critical healthcare operations.
                  </p>
                </div>

                <div className="mt-8 hidden  justify-center gap-10 w-full group-hover:flex">
                  <div>
                    <h2 className="text-3xl font-medium text-[#0F66EA]">18+</h2>
                    <p className="mt-2 text-base font-medium text-[#4B5563]">
                      Customers
                    </p>
                  </div>

                  <div className=" ">
                    <h2 className="text-3xl font-medium text-[#0F66EA]">
                      400+
                    </h2>
                    <p className="mt-2 text-base font-medium text-[#4B5563]">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2  */}
          <div className="flex">
            <div className="group flex flex-1 h-[280px] overflow-hidden ">
              {/* Content */}
              <div className="flex w-1/2 flex-col justify-center hover:bg-none bg-[#121D4A] p-8 transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-white">
                <div className="block group-hover:hidden">
                  <h3 className="text-2xl font-semibold text-white transition-colors duration-500">
                    FinTech
                  </h3>

                  <p className="mt-4 text-[#FFFFFFBF] transition-colors duration-500 ">
                    Secure digital banking, payment systems, and regulatory
                    compliance.
                  </p>
                </div>

                <div className="mt-8 hidden  justify-center gap-10 w-full group-hover:flex">
                  <div>
                    <h2 className="text-3xl font-medium text-[#0F66EA]">22+</h2>
                    <p className="mt-2 text-base font-medium text-[#4B5563]">
                      Customers
                    </p>
                  </div>

                  <div className=" ">
                    <h2 className="text-3xl font-medium text-[#0F66EA]">
                      460+
                    </h2>
                    <p className="mt-2 text-base font-medium text-[#4B5563]">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </div>
              {/* Image */}
              <div
                className="w-1/2 overflow-hidden transition-all duration-700 ease-in-out group-hover:w-0"
                style={{ backgroundImage: `url(${fintech.src})` }}
              >
                <p className="text-2xl font-medium text-[#FFFFFF] p-5">03</p>
              </div>
            </div>

            <div className="group flex flex-1 h-[280px] overflow-hidden ">
              <div className="flex w-1/2 flex-col justify-center bg-[#1F407C] p-8 transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-white">
                <div className="block group-hover:hidden">
                  <h3 className="text-2xl font-semibold text-white transition-colors duration-500">
                    E-commerce
                  </h3>

                  <p className="mt-4 text-[#FFFFFFBF] transition-colors duration-500 ">
                    Safeguard payments, digital experiences, and customer
                    information.
                  </p>
                </div>

                <div className="mt-8 hidden  justify-center gap-10 w-full group-hover:flex">
                  <div>
                    <h2 className="text-3xl font-medium text-[#0F66EA]">9+</h2>
                    <p className="mt-2 text-base font-medium text-[#4B5563]">
                      Customers
                    </p>
                  </div>

                  <div className=" ">
                    <h2 className="text-3xl font-medium text-[#0F66EA]">
                      280+
                    </h2>
                    <p className="mt-2 text-base font-medium text-[#4B5563]">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="w-1/2 overflow-hidden transition-all duration-700 ease-in-out group-hover:w-0"
                style={{ backgroundImage: `url(${ecommerce.src})` }}
              >
                <p className="text-2xl font-medium text-[#FFFFFF] p-5">04</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="flex">
            <div className="group flex flex-1 h-[280px] overflow-hidden ">
              {/* Image */}
              <div
                className="w-1/2 overflow-hidden transition-all duration-700 ease-in-out group-hover:w-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${education.src})` }}
              >
                <p className="text-2xl font-medium text-[#FFFFFF] p-5">05</p>
              </div>

              {/* Content */}
              <div className="flex w-1/2 flex-col justify-center hover:bg-none bg-linear-to-t from-[#4A81D3] to-[#3B9E6A] p-8 transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-white">
                <div className="block group-hover:hidden">
                  <h3 className="text-2xl font-semibold text-white transition-colors duration-500">
                    Education
                  </h3>

                  <p className="mt-4 text-[#FFFFFFBF] transition-colors duration-500">
                    Ensure resilient connectivity across complex telecom
                    environments.
                  </p>
                </div>

                <div className="mt-8 hidden  justify-center gap-10 w-full group-hover:flex">
                  <div>
                    <h2 className="text-3xl font-medium text-[#0F66EA]">2+</h2>
                    <p className="mt-2 text-base font-medium text-[#4B5563]">
                      Customers
                    </p>
                  </div>

                  <div className=" ">
                    <h2 className="text-3xl font-medium text-[#0F66EA]">25+</h2>
                    <p className="mt-2 text-base font-medium text-[#4B5563]">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group flex flex-1 h-[280px] overflow-hidden ">
              <div
                className="w-1/2 overflow-hidden transition-all duration-700 ease-in-out group-hover:w-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${government.src})` }}
              >
                <p className="text-2xl font-medium text-[#FFFFFF] p-5">06</p>
              </div>

              <div className="flex w-1/2 flex-col justify-center bg-[#1F407C] p-8 transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-white">
                <div className="block group-hover:hidden">
                  <h3 className="text-2xl font-semibold text-white transition-colors duration-500">
                    Government
                  </h3>

                  <p className="mt-4 text-[#FFFFFFBF] transition-colors duration-500">
                    Strengthen cybersecurity posture and safeguard critical
                    public infrastructure.
                  </p>
                </div>

                <div className="mt-8 hidden  justify-center gap-10 w-full group-hover:flex">
                  <div>
                    <h2 className="text-3xl font-medium text-[#0F66EA]">8+</h2>
                    <p className="mt-2 text-base font-medium text-[#4B5563]">
                      Customers
                    </p>
                  </div>

                  <div className=" ">
                    <h2 className="text-3xl font-medium text-[#0F66EA]">
                      200+
                    </h2>
                    <p className="mt-2 text-base font-medium text-[#4B5563]">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustriesWeSecure;
