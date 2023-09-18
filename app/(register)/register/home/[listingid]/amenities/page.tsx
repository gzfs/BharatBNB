"use client";

import { Home } from "lucide-react";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { Amenity } from "@/app/_components/AmenitiesType";
import AmenitiesRender from "@/app/_components/AmenitiesType";

export default function Amenities({
  params,
}: {
  params: { listingid: string };
}) {
  const [amenitiesList, setAmenitiesList]: [
    amenitiesList: Amenity[] | undefined,
    setAmenitiesList: Dispatch<SetStateAction<Amenity[] | undefined>>
  ] = useState();

  const totalAmenities: Amenity[] = [
    {
      amenityName: "Wi-fi",
      amenityType: "Convenience",
    },
    {
      amenityName: "First Aid Kit",
      amenityType: "Security",
    },
    {
      amenityName: "Fire Extinguisher",
      amenityType: "Security",
    },
    {
      amenityName: "Carbon Monoxide Alarm",
      amenityType: "Security",
    },
    {
      amenityName: "Smoke Detector",
      amenityType: "Security",
    },
    {
      amenityName: "Beach",
      amenityType: "Standout",
    },
  ];

  return (
    <main className="pb-10">
      <div className="h-full flex flex-col items-center">
        <div className="flex flex-col h-full justify-around px-5 md:px-0">
          <motion.p
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            className="font-Coolvetica text-5xl text-[#4BAF32] text-center mt-8"
          >
            Tell guests what your place has to offer
          </motion.p>
          <div className="mt-10">
            <AmenitiesRender
              amenitiesList={amenitiesList}
              setAmenitiesList={setAmenitiesList}
              totalAmenities={totalAmenities}
            />
          </div>
          <div className="my-4">
            <Link
              href={`/register/home/${params.listingid}/photos`}
              className="font-Coolvetica text-xl px-10 py-2 border-2 rounded-xl border-[#F6762D] w-fit text-[#F6762D] hover:text-white hover:bg-[#F6762D] transition-colors"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
