"use client";

import { motion } from "framer-motion";
import { CheckCircle, Edit } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Price({
  params,
}: {
  params: { listingid: string };
}) {
  const [isEditable, setIsEditable] = useState(false);
  const [stayPrice, setStayPrice] = useState("");
  return (
    <main className="px-10">
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        initial={{ opacity: 0 }}
        className="flex flex-col w-full items-center py-10"
      >
        <div className="md:w-[60%]">
          <p className="font-Coolvetica text-5xl text-[#4BAF32] pt-6">
            Now, set your price
          </p>
          <div className="flex justify-center items-end">
            {!isEditable ? (
              <p className="font-Coolvetica text-[10em] text-[#F6762D] pt-10 text-center">
                {"₹" + stayPrice}
              </p>
            ) : (
              <p>
                <span className="font-Coolvetica text-[10em] text-[#F6762D]">
                  ₹
                </span>
                <input
                  autoFocus
                  type="text"
                  pattern="([0-9]+.{0,1}[0-9]*,{0,1})*[0-9]"
                  className="font-Coolvetica text-[10em] text-[#F6762D] mt-10 text-center outline-none w-[412px]"
                  value={stayPrice}
                  onChange={(eV) => {
                    setStayPrice(eV.target.value);
                  }}
                  onBlur={() => {
                    setIsEditable(false);
                  }}
                />
              </p>
            )}
            {!isEditable ? (
              <div
                className="w-fit bg-[#F6762D] p-4 rounded-full cursor-pointer"
                onClick={() => {
                  setIsEditable(!isEditable);
                }}
              >
                <Edit color="#FFFFFF" />
              </div>
            ) : (
              ""
            )}
          </div>
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            className="w-full md:w-fit py-10"
          >
            <Link
              href={`/register/home/${params.listingid}/finish-setup`}
              className="font-Coolvetica text-xl px-10 py-2 border-2 rounded-xl border-[#F6762D] w-fit text-[#F6762D] hover:text-white hover:bg-[#F6762D] transition-colors"
            >
              Next
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
