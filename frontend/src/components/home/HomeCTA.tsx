import React from "react";

function HomeCTA() {
  return (
    <section className="bg-[#121828]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        <div className="relative overflow-hidden rounded-t-[42px] bg-[#121828] py-10 sm:py-12">

          <div className="relative z-10 space-y-5">
            <h3 className="max-w-md font-semibold text-white lg:leading-[45px] sm:text-[32px]">
              Ready to strengthen your security posture?
            </h3>

            <p className="max-w-[520px] text-[16px] font-medium leading-7 text-[#8F90AB] sm:text-[18px]">
              Partner with ISECURION to identify risks, close gaps, and build a
              stronger, more resilient organization.
            </p>

            <div className="flex flex-col gap-3 py-3 sm:flex-row">
              <button className="flex cursor-pointer items-center justify-center rounded-lg bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] px-5 py-3 text-base font-semibold text-white">
                Schedule a Consultation →
              </button>

              <button className="flex cursor-pointer items-center justify-center rounded-lg border border-[#D8E4EF] bg-white px-5 py-3 text-base font-semibold text-[#31435C]">
                Talk to an Expert
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeCTA;