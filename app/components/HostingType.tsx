"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export default function HotelType({
  children,
  hostingTypeName,
  structureType,
  setStructureType,
}: {
  children: ReactNode;
  hostingTypeName: string;
  structureType: string;
  setStructureType: CallableFunction;
}) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      initial={{ opacity: 0 }}
      className="border-2 rounded-xl flex items-center p-6 md:pr-20 hover:border-[#4BAF32] transition-colors"
      style={{
        borderColor:
          hostingTypeName === structureType ? "#4BAF32" : "",
      }}
      onClick={() => {
        setStructureType(hostingTypeName);
      }}
    >
      <div>
        {children}
        <p className="font-Coolvetica text-xl text-[#4BAF32]">
          {hostingTypeName}
        </p>
      </div>
    </motion.div>
  );
}
