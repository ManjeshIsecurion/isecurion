import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import cryptocurrencyexchange from "../../../assets/services/cryptocurrencyexchange.png";

function CryptoCurrencyExchange() {
  return (
    <div>
      <section className="relative w-full min-h-[80vh] py-14 flex items-center">
        <div className="absolute inset-0">
          <Image
            src={cryptocurrencyexchange}
            alt="Cryptocurrency exchange security"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <p className="text-sm sm:text-base font-semibold text-[#0F66EA]">
              Crypto Currency Exchange Security Assessment
            </p>
            <h1 className="font-semibold leading-[40px] md:leading-[50px] lg:leading-[55px] text-[#FFFFFF]">
              Secure your crypto exchange against evolving cyber threats.
            </h1>
            <p className="text-base sm:text-lg text-[#D9D9D9]">
              ISECURION assesses cryptocurrency exchanges across applications,
              APIs, infrastructure, wallets, and business logic to identify
              vulnerabilities before they can impact users, assets, or
              operations.
            </p>
            <button className="text-[15px] font-medium px-4 py-3 flex items-center gap-2 rounded-[10px] cursor-pointer text-[#31435C] bg-[#FFFFFF]">
              Secure Your Exchange{" "}
              <span>
                <Icon icon="akar-icons:arrow-right" />
              </span>{" "}
            </button>
          </div>
          <div className="hidden lg:block flex-1"></div>
        </div>
      </section>
    </div>
  );
}

export default CryptoCurrencyExchange;
