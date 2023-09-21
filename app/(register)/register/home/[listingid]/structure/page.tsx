"use client";

import HotelType from "@/app/_components/HostingType";
import {
  Home,
  Sailboat,
  Castle,
  Hotel,
  Bed,
  Container,
} from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";
import { useListingStore } from "@/hooks/useListingStore";

export default function Structure({
  params,
}: {
  params: { listingid: string };
}) {
  const {StructureType:structureType,setStructureType} = useListingStore();
  return (
    <main className="h-[80vh]">
      <div className="h-full flex flex-col items-center">
        <div className="flex flex-col h-full justify-around px-5 md:px-0">
          <motion.p
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            className="font-Coolvetica text-5xl text-[#4BAF32] text-center mt-8"
          >
            Describe your place.
          </motion.p>
          <div className="grid sm:grid-cols-3 grid-rows-2 mx-auto md:w-fit w-full grid-cols-2 gap-2 ">
            <HotelType
              hostingTypeName="House"
              setStructureType={setStructureType}
              structureType={structureType}
            >
              <Home size={30} color="#4BAF32" />
            </HotelType>
            <HotelType
              hostingTypeName="Boat"
              setStructureType={setStructureType}
              structureType={structureType}
            >
              <Sailboat size={30} color="#4BAF32" />
            </HotelType>
            <HotelType
              hostingTypeName="Castle"
              setStructureType={setStructureType}
              structureType={structureType}
            >
              <Castle size={30} color="#4BAF32" />
            </HotelType>
            <HotelType
              hostingTypeName="Hotel"
              setStructureType={setStructureType}
              structureType={structureType}
            >
              <Hotel size={30} color="#4BAF32" />
            </HotelType>
            <HotelType
              hostingTypeName="Bed"
              setStructureType={setStructureType}
              structureType={structureType}
            >
              <Bed size={30} color="#4BAF32" />
            </HotelType>
            <HotelType
              hostingTypeName="Container"
              setStructureType={setStructureType}
              structureType={structureType}
            >
              <Container size={30} color="#4BAF32" />
            </HotelType>
          </div>
          <div className="">
            <Link
              href={`/register/home/${params.listingid}/privacy`}
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
