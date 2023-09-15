"use client";

import { useEffect, useState } from "react";
import Map from "./components/Map";
import Link from "next/link";
import { getDistrictFromState } from "./utils/Districts.list";

export default function Home() {
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

  return (
    <main className="flex flex-col">
      <div className="flex justify-around flex-grow p-12">
        <Map
          setSelectedArea={setSelectedState}
          setDistrictArea={setSelectedDistrict}
        />
        <div className="font-Coolvetica class flex flex-col justify-evenly w-4/12">
          <p className="text-3xl">
            <span className="text-[#4BAF32]">Choose your </span>
            <span className="text-[#F6762D]">Destination</span>
          </p>
          <div className="flex flex-col">
            <div>
              <p className="text-[#4BAF32]">Destination</p>
              <p className="text-[#F6762D] text-3xl">
                {selectedState}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-[#4BAF32]">District</p>
              <p className="text-[#F6762D] text-3xl">
                <select
                  className="w-[80%] outline-none"
                  onChange={(eV) => {
                    setSelectedDistrict(eV.target.value);
                  }}
                  value={selectedDistrict}
                >
                  {stateDistricts?.map((stateDistrict, iVal) => {
                    return <option>{stateDistrict}</option>;
                  })}
                </select>
              </p>
            </div>
          </div>
          <Link
            href={`/hotels/${selectedState
              ?.toLowerCase()
              ?.split(" ")
              ?.join("-")}/${selectedDistrict
              .split(" ")
              .join("-")
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
