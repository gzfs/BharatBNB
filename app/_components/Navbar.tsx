"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [currentNavSelection, setCurrentNavSelection] =
    useState("Home");
  return (
    <nav className="font-Coolvetica px-10 py-4 flex justify-between items-center w-full">
      <Link href="/" className="text-3xl">
        <span className="text-[#4BAF32]">bharat</span>
        <span className="text-[#F6762D]">bnb</span>
      </Link>
      <div className="border-2 border-[#F6762D] rounded-full justify-between items-center p-1 text-white transition-colors hidden md:flex">
        <div
          className="py-2 px-5 rounded-full cursor-pointer"
          style={{
            backgroundColor:
              currentNavSelection === "Home"
                ? "#F6762D"
                : "transparent",
            color:
              currentNavSelection === "Home" ? "white" : "#F6762D",
          }}
          onClick={() => {
            setCurrentNavSelection("Home");
          }}
        >
          Hotels
        </div>
        <div
          className="py-2 px-6 cursor-pointer rounded-full"
          style={{
            backgroundColor:
              currentNavSelection === "Foods"
                ? "#F6762D"
                : "transparent",
            color:
              currentNavSelection === "Foods" ? "white" : "#F6762D",
          }}
          onClick={() => {
            setCurrentNavSelection("Foods");
          }}
        >
          Foods
        </div>
        <div
          className="py-2 px-4 cursor-pointer rounded-full"
          style={{
            backgroundColor:
              currentNavSelection === "Commute"
                ? "#F6762D"
                : "transparent",
            color:
              currentNavSelection === "Commute" ? "white" : "#F6762D",
          }}
          onClick={() => {
            setCurrentNavSelection("Commute");
          }}
        >
          Commute
        </div>
      </div>
      <div className="flex items-center">
        <Link
          href="/register"
          className="text-lg text-[#F6762D] mr-4"
        >
          <u>Become a Partner</u>
        </Link>
        <Image
          src="/assets/imgs/icons/user.svg"
          alt="Profile"
          width={30}
          height={30}
        />
      </div>
    </nav>
  );
}
