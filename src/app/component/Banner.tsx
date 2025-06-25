// เปลี่ยนชื่อไฟล์เป็น Banner.tsx และอัปเดตชื่อ function เป็น Banner (ตัวพิมพ์ใหญ่)
import React from "react";

export default function Banner() {
  return (
    <div className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden">
      <div className="flex justify-start items-center absolute w-full  md:h-[100vh] inset-0 bg-[url('/FirstPage.png')] bg-top md:bg-left  bg-no-repeat bg-contain md:bg-cover">
        <img
          className="absolute top-[4vh] left-1/2 md:top-[12vh] md:left-1/2 -translate-x-1/3 w-[280px] md:w-[967px] md:h-[845px] object-contain"
          src="/Mobile-1.png"
          alt="Mobile 1"
        />
        <img
          className="absolute top-[13vh] left-[50vw] w-[200px] md:w-[728px] md:h-[746px] object-contain"
          src="/Mobile-2.png"
          alt="Mobile 2"
        />
        <div className="absolute top-1/2 md:top-1/3 p-8 mx-auto">
          <div className="w-full flex flex-col justify-between items-center md:items-start gap-4 text-center md:text-left">
            <div className="text-[#C4D600] text-sm md:text-base font-semibold flex flex-row justify-center items-center gap-4">
              <img src="/Vector3.png" alt="" />
              <p>Hello, Amigo !</p>
            </div>
            <p className="text-black md:text-white text-3xl md:text-[64px] font-semibold w-full md:w-[611px] ">
              Delicious Food For Your Life
            </p>
            <p className="text-black md:text-white text-sm md:text-base w-full md:w-[562px]">
              For many, food is an experience. It is both a science and an art.
              It is meant to be savored and enjoyed. In a culture with such
              passion for food, it is no surprise that we also like talking
              about it. While the Chinese share that love of food, they also
              have a love of language.
            </p>
            <button className="mt-[17px] flex items-center gap-3 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-black shadow-xl/30 hover:shadow-lg transition duration-300">
              <img src="/Vector.png" alt="Download Icon" />
              <span className="text-sm md:text-base font-medium">
                Download App
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
