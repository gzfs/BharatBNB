"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export default function PlaceCard({
  children,
  typeOfPlace,
  structureType,
  setStructureType,
  placeDesc,
}: {
  children: ReactNode;
  typeOfPlace: string;
  structureType: string;
  setStructureType: CallableFunction;
  placeDesc: string;
}) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      initial={{ opacity: 0 }}
      className="border-2 rounded-xl flex items-center p-4 hover:border-[#4BAF32] transition-colors col-span-2"
      style={{
        borderColor: typeOfPlace === structureType ? "#4BAF32" : "",
      }}
      onClick={() => {
        setStructureType(typeOfPlace);
      }}
    >
      <div className="flex justify-between w-full items-center">
        <div className="w-10/12">
          <p className="font-Coolvetica text-xl md:text-2xl text-[#4BAF32]">
            {typeOfPlace}
          </p>
          <p className=" text-base md:text-lg font-Coolvetica text-[#AC8080]">
            {placeDesc}
          </p>
        </div>
        <div>{children}</div>
      </div>
    </motion.div>
  );
}
