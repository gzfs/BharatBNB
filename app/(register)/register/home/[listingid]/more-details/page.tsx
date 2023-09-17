"use client";

import { motion } from "framer-motion";
import { Bath, BedDouble, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MoreDetails({
  params,
}: {
  params: { listingid: string };
}) {
  const [guestCount, setGuestCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(0);
  const [bedsCount, setBedsCount] = useState(0);
  const [bathroomsCount, setBathroomsCount] = useState(0);
  return (
    <main className="h-[80vh] px-10">
      <div className="h-full flex flex-col items-center justify-evenly">
        <div className="flex flex-col px-5 md:px-0">
          <motion.p
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            className="font-Coolvetica text-5xl text-[#4BAF32] text-center mt-8"
          >
            Share some basics about your place.
          </motion.p>
        </div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0 }}
          className="flex md:w-[700px] w-full justify-around items-center"
        >
          <div className="flex flex-col w-6/12 justify-center">
            <div className="flex py-4 w-full justify-between items-center">
              <p className="font-Coolvetica text-xl text-[#F6762D] w-4/12">
                Guests
              </p>
            </div>
            <div className="flex py-4 w-full justify-between items-center">
              <p className="font-Coolvetica text-xl text-[#F6762D] w-4/12">
                Bedrooms
              </p>
            </div>
            <div className="flex py-4 w-full justify-between items-center mr-4">
              <p className="font-Coolvetica text-xl text-[#F6762D] w-4/12">
                Bathrooms
              </p>
            </div>
            <div className="flex py-4 w-full justify-between items-center mr-4">
              <p className="font-Coolvetica text-xl text-[#F6762D] w-4/12">
                Beds
              </p>
            </div>
          </div>
          <div className="w-6/12">
            <div className="flex justify-around items-center ">
              <img
                src="/assets/imgs/icons/Minus.svg"
                alt="Decrement"
                className="cursor-pointer"
                onClick={() => {
                  if (guestCount > 1) setGuestCount(guestCount - 1);
                }}
              />
              <p className="font-Coolvetica text-xl text-[#F6762D]">
                {guestCount}
              </p>
              <img
                src="/assets/imgs/icons/Plus.svg"
                alt="Increment"
                className="cursor-pointer"
                onClick={() => {
                  setGuestCount(guestCount + 1);
                }}
              />
            </div>
            <div className="flex justify-around items-center pt-6">
              <img
                src="/assets/imgs/icons/Minus.svg"
                alt="Decrement"
                className="cursor-pointer"
                onClick={() => {
                  if (bedroomCount > 0)
                    setBedroomCount(bedroomCount - 1);
                }}
              />
              <p className="font-Coolvetica text-xl text-[#F6762D]">
                {bedroomCount}
              </p>
              <img
                src="/assets/imgs/icons/Plus.svg"
                alt="Increment"
                className="cursor-pointer"
                onClick={() => {
                  setBedroomCount(bedroomCount + 1);
                }}
              />
            </div>
            <div className="flex justify-around items-center pt-7">
              <img
                src="/assets/imgs/icons/Minus.svg"
                alt="Decrement"
                className="cursor-pointer"
                onClick={() => {
                  if (bathroomsCount > 0)
                    setBathroomsCount(bathroomsCount - 1);
                }}
              />
              <p className="font-Coolvetica text-xl text-[#F6762D]">
                {bathroomsCount}
              </p>
              <img
                src="/assets/imgs/icons/Plus.svg"
                alt="Increment"
                className="cursor-pointer"
                onClick={() => {
                  setBathroomsCount(bathroomsCount + 1);
                }}
              />
            </div>
            <div className="flex justify-around items-center pt-7">
              <img
                src="/assets/imgs/icons/Minus.svg"
                alt="Decrement"
                className="cursor-pointer"
                onClick={() => {
                  if (bedsCount > 0) setBedsCount(bedsCount - 1);
                }}
              />
              <p className="font-Coolvetica text-xl text-[#F6762D]">
                {bedsCount}
              </p>
              <img
                src="/assets/imgs/icons/Plus.svg"
                alt="Increment"
                className="cursor-pointer"
                onClick={() => {
                  setBedsCount(bedsCount + 1);
                }}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0 }}
          className="w-full md:w-fit"
        >
          <Link
            href={`/register/home/${params.listingid}/stand-out`}
            className="font-Coolvetica text-xl px-10 py-2 border-2 rounded-xl border-[#F6762D] w-fit text-[#F6762D] hover:text-white hover:bg-[#F6762D] transition-colors"
          >
            Next
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
