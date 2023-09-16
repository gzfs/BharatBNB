"use client";

import Image from "next/image";
import React, { useState } from "react";

const HotelDetailCard = () => {
  const [selectedOption, setSelectedOption] = useState("Maps");

  const toggleOption = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="flex relative justify-center">
      <Image
        src="/assets/imgs/dummy/IM.svg"
        width={680}
        height={400}
        alt="Hotel Image"
        quality={100}
      />
      <Image
        src="/assets/imgs/icons/CaretW.svg"
        width={50}
        height={30}
        alt="Left"
        className="absolute top-[45%] left-0 cursor-pointer"
        onClick={() => {}}
      />
      <Image
        src="/assets/imgs/icons/Caret.svg"
        width={50}
        height={30}
        alt="Left"
        className="absolute top-[45%] right-0 cursor-pointer"
        onClick={() => {}}
      />
      <div className="absolute bottom-5 flex p-2 bg-gray-400 backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-100 rounded-full">
        <div
          className="px-8 py-3 font-Coolvetica text-2xl text-white rounded-full cursor-pointer"
          style={{
            backgroundColor:
              selectedOption === "Gallery"
                ? "#F6762D"
                : "transparent",
          }}
          onClick={() => {
            setSelectedOption("Gallery");
          }}
        >
          Gallery
        </div>
        <div
          className="px-10 py-3 font-Coolvetica text-2xl text-white rounded-full cursor-pointer"
          style={{
            backgroundColor:
              selectedOption === "Maps" ? "#F6762D" : "transparent",
          }}
          onClick={() => {
            setSelectedOption("Maps");
          }}
        >
          Maps
        </div>
      </div>
    </div>
  );
};

export default HotelDetailCard;