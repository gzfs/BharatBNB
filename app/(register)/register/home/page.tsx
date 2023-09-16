"use client";

import Divider from "@/app/components/Divider";
import { Home, Copy } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HostHome() {
  const listingid = "sdfjwfhdpwDFH";
  return (
    <main className="flex justify-center items-center flex-col h-[80vh]">
      <div className="flex flex-col mt-10 flex-grow justify-around">
        <motion.p
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          initial={{ opacity: 0 }}
          className="text-6xl font-Coolvetica"
        >
          <span className="text-[#4BAF32]">Welcome Back, </span>
          <span className="text-[#F6762D]">Vishal</span>
        </motion.p>
        <div>
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            initial={{ opacity: 0 }}
          >
            <Link
              href={`/register/home/${listingid}/tell-us-about-your-place`}
              className="font-Coolvetica text-2xl py-3 px-10 border-2 border-[#4BAF32] w-fit rounded-full flex items-center justify-between mt-5"
            >
              <Home size={30} color="#4BAF32" />
              <p className="text-[#4BAF32] ml-5">Beach-Side Villa</p>
            </Link>
          </motion.div>
          <Divider />
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            initial={{ opacity: 0 }}
          >
            <Link
              href={`/register/home/${listingid}/tell-us-about-your-place`}
              className="font-Coolvetica text-2xl py-3 px-10 border-2 border-[#4BAF32] w-fit rounded-full flex items-center justify-between"
            >
              <Home size={30} color="#4BAF32" />
              <p className="text-[#4BAF32] ml-5">
                Create a New Listing
              </p>
            </Link>
            <Link
              href={`/register/home/${listingid}/tell-us-about-your-place`}
              className="font-Coolvetica text-2xl py-3 px-10 border-2 border-[#4BAF32] w-fit rounded-full flex items-center justify-between mt-5"
            >
              <Copy size={30} color="#4BAF32" />
              <p className="text-[#4BAF32] ml-5">
                Duplicate an Existing Listing
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
