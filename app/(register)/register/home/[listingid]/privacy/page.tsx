"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import PlaceCard from "@/app/components/PlaceCard";
import { Home } from "lucide-react";
import { useState } from "react";

export default function Privacy({
  params,
}: {
  params: { listingid: string };
}) {
  const [structureType, setStructureType] = useState("");
  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-around px-5 md:px-0">
          <motion.p
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            className="font-Coolvetica text-5xl text-[#4BAF32] text-center mt-8 pb-10"
          >
            What type of place will guests have?
          </motion.p>
          <div className="grid sm:grid-cols-1 grid-rows-3 mx-auto w-full grid-cols-1 gap-2 ">
            <PlaceCard
              typeOfPlace="An entire place"
              setStructureType={setStructureType}
              structureType={structureType}
              placeDesc="Guests have the whole place to themselves"
            >
              <Home size={40} color="#4BAF32" />
            </PlaceCard>
            <PlaceCard
              typeOfPlace="A room"
              setStructureType={setStructureType}
              structureType={structureType}
              placeDesc="Guests have their own room, plus access to shared spaces."
            >
              <Home size={40} color="#4BAF32" />
            </PlaceCard>
            <PlaceCard
              typeOfPlace="A shared room"
              setStructureType={setStructureType}
              structureType={structureType}
              placeDesc="Guests sleep in a room or common area that may be shared with you or others"
            >
              <Home size={40} color="#4BAF32" />
            </PlaceCard>
          </div>
          <div className="py-6">
            <Link
              href={`/register/home/${params.listingid}/location`}
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
