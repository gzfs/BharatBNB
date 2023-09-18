"use client";

import { useEffect, useState } from "react";
import Map, { stateCodes } from "./components/Map";
import Link from "next/link";
import { getDistrictFromState } from "./utils/Districts.list";
import Navbar from "./components/Navbar";
import { getCookie, justSignedIn, removeCookie } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const cookie = getCookie();
  const { user } = useUser();
  const router = useRouter();

  const [selectedState, setSelectedState] = useState("Tamil Nadu");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [stateDistricts, setStateDistricts] = useState(
    getDistrictFromState(selectedState)
  );

  useEffect(() => {
    setStateDistricts(getDistrictFromState(selectedState));
    if (getDistrictFromState(selectedState)) {
      setSelectedDistrict(getDistrictFromState(selectedState)[0]);
    }
  }, [selectedState]);

  if(justSignedIn(user?.lastSignInAt!) && cookie){
    removeCookie();
    router.push(cookie)
  }

  return (
    <main className="flex flex-col h-screen md:h-fit mx-auto">
      <Navbar />
      <div className="flex md:justify-around flex-grow p-12 justify-center items-stretch">
        <div className="hidden md:block">
          <Map
            setSelectedArea={setSelectedState}
            setDistrictArea={setSelectedDistrict}
          />
        </div>
        <div className="font-Coolvetica class flex flex-col justify-evenly lg:w-5/12">
          <p className="text-3xl">
            <span className="text-[#4BAF32]">Choose your </span>
            <span className="text-[#F6762D]">Destination</span>
          </p>
          <div className="flex flex-col">
            <div>
              <p className="text-[#4BAF32]">Destination</p>
              <p className="text-[#F6762D] text-3xl">
                <select
                  className="outline-none w-full lg:w-[80%]"
                  onChange={(eV) => {
                    setSelectedState(eV.target.value);
                  }}
                  value={selectedState}
                >
                  {Object.values(stateCodes).map((stateValues) => {
                    return (
                      <option key={stateValues} className="text-lg">
                        {stateValues}
                      </option>
                    );
                  })}
                </select>
              </p>
            </div>
            <div className="mt-4">
              <p className="text-[#4BAF32]">District</p>
              <div className="text-[#F6762D] text-3xl">
                <select
                  className="w-full lg:w-[80%] outline-none"
                  onChange={(eV) => {
                    setSelectedDistrict(eV.target.value);
                  }}
                  value={selectedDistrict}
                >
                  {stateDistricts?.map((stateDistrict, iVal) => {
                    return (
                      <option key={stateDistrict} className="text-lg">
                        {stateDistrict}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <Link
            href={`/hotels/${selectedState
              ?.toLowerCase()
              ?.split(" ")
              ?.join("")}-${selectedDistrict
              .split(" ")
              .join("")
              .toLowerCase()}`}
            className="px-8 py-3 bg-[#F6762D] text-lg rounded-full text-white w-fit"
          >
            Find Hotels
          </Link>
        </div>
      </div>
    </main>
  );
}
