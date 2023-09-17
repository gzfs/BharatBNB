"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export default function FinishSetup({
  params,
}: {
  params: { listingid: string };
}) {
  return (
    <main className="flex justify-center items-center md:flex-row flex-col-reverse">
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        initial={{ opacity: 0 }}
        className="font-Coolvetica flex flex-col h-full justify-center p-10"
      >
        <p className="text-[#F6762D] text-3xl">Step Three</p>
        <p className="text-6xl my-6 text-[#4BAF32]">
          Finish up and publish
        </p>
        <p className="text-xl text-[#F6762D]">
          Finally, you'll choose booking settings, set up pricing and
          publish your listing.
        </p>
        <Link
          href={`/register/home/${params.listingid}/price`}
          className="font-Coolvetica text-2xl px-10 py-2 border-2 rounded-full border-[#F6762D] w-fit text-[#F6762D] mt-4 hover:text-white hover:bg-[#F6762D] transition-colors"
        >
          Next
        </Link>
      </motion.div>
      <video
        className="md:w-6/12 w-full"
        autoPlay
        crossOrigin="anonymous"
        playsInline
        preload="auto"
        style={{
          objectFit: "cover",
        }}
      >
        <source src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high" />
      </video>
    </main>
  );
}
