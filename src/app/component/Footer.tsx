import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#172E15]  w-full h-[474px] mt-20">
      <div className="flex flex-col md:flex-row justify-center items-center md:p-16 gap-8">
        <div className="w-full flex flex-col justify-around items-center text-center md:text-left md:items-start gap-8 md:min-h-[300px] px-4 md:px-0">
          <img
            className="w-[120px] md:w-[173px] h-auto"
            src="/header-logo.png"
            alt="Logo"
          />
          <p className="text-sm md:text-base font-light text-white md:max-w-[432px]">
            From your neighborhood sushi spot to the burger you crave, Choose
            from over +000K local and national favotuite across India , Us and
            UK.
          </p>
        </div>
        <div className=" w-full flex flex-col justify-around items-center gap-10 md:min-h-[300px]">
          <p className="text-lg md:text-xl font-semibold text-white">
            Subscribe to our newsletter
          </p>
          <div className="grid  grid-cols-4 md:grid-cols-3 gap-2 md:gap-4">
            <p className="text-xs md:text-base font-light text-white">
              SOFTWARE
            </p>
            <p className="text-xs md:text-base font-light text-white">
              ABOUT US
            </p>
            <p className="text-xs md:text-base font-light text-white">
              TWITTER
            </p>
            <p className="text-xs md:text-base font-light text-white">
              HARDWARE
            </p>
            <p className="text-xs md:text-base font-light text-white">
              HOW IT WORKS
            </p>
            <p className="text-xs md:text-base font-light text-white">
              FACEBOOK
            </p>
            <p className="text-xs md:text-base font-light text-white">
              COMPANY
            </p>
            <p className="text-xs md:text-base font-light text-white">
              CONTACT
            </p>
            <p className="text-xs md:text-base font-light text-white">
              INSTAGRAM
            </p>
            <p className="text-xs md:text-base font-light text-white">
              PROGRAMS
            </p>
            <p className="text-xs md:text-base font-light text-white">BLOG</p>
            <p className="text-xs md:text-base font-light text-white">
              LOCATION
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-stretch items-center md:items-end gap-2 md:gap-10 md:min-h-[300px]">
          <div className="flex items-center  bg-[rgba(255,255,255,0.2)]  rounded-full overflow-hidden shadow-md w-full max-w-[375px] max-h-[53px]">
            <input
              type="text"
              placeholder="Your Email"
              className="flex-1 p-2 text-black placeholder-gray-500 bg-transparent focus:outline-none text-center"
            />
            <button className="bg-[#32CD32] hover:bg-green-700 text-white font-semibold px-4 py-2 transition duration-200 rounded-full">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col justify-between items-center md:items-end">
            <p className="text-sm md:text-lg font-bold text-white">
              OUR OFFICE
            </p>
            <p className="text-sm md:text-base font-light text-white">
              Birmingham south, England, UK.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-2 mt-2">
        <img src="/Multinationalcorporation.png" />
        <p className="text-sm md:text-base font-semibold text-white">
          All Rights Reserved 2021 - Paru Corp
        </p>
      </div>
    </div>
  );
}
