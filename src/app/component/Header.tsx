"use client";

import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full fixed top-0 z-50 bg-transparent">
      <div className="flex justify-between items-center p-4 md:p-8 max-w-full mx-auto">
        <div className="flex flex-row justify-between items-center w-[820px]">
          <img
            className="w-[120px] md:w-[173px] h-auto"
            src="/header-logo.png"
            alt="Logo"
          />
          <ul className="hidden md:flex gap-6 text-[#F5F5F5] text-sm md:text-lg">
            <li className="cursor-pointer hover:text-green-300">Home</li>
            <li className="cursor-pointer hover:text-green-300">About Us</li>
            <li className="cursor-pointer hover:text-green-300">Cooks</li>
            <li className="cursor-pointer hover:text-green-300">Get App</li>
          </ul>
        </div>
        <button className="hidden md:block w-[140px] h-[44px] text-sm md:text-lg font-semibold text-white bg-gradient-to-l from-[#32CD32] to-[#009000] rounded-full shadow-md hover:opacity-90 transition">
          Register
        </button>
        <div
          className="md:hidden text-[#1C391A] text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#111] text-[#F5F5F5] ${
          isOpen ? "max-h-[300px] opacity-200" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 text-base">
          <li className="border-b border-gray-700 pb-2">Home</li>
          <li className="border-b border-gray-700 pb-2">About Us</li>
          <li className="border-b border-gray-700 pb-2">Cooks</li>
          <li className="border-b border-gray-700 pb-2">Get App</li>
          <li className="flex justify-center items-center">
            <button className="mt-2 w-[140px] h-[44px] text-sm font-semibold text-[#F5F5F5] bg-gradient-to-l from-[#32CD32] to-[#009000] py-2 rounded-full hover:opacity-90 transition">
              Register
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
