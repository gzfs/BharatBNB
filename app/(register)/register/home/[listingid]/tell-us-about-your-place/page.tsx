"use client";

import { motion } from "framer-motion";
export default function TellUsAboutYourPlace() {
  return (
    <main className="h-[90.2vh] flex justify-center items-center md:flex-row flex-col">
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        initial={{ opacity: 0 }}
        className="font-Coolvetica flex flex-col h-full justify-center p-10"
      >
        <p className="text-[#F6762D] text-3xl">Step One</p>
        <p className="text-6xl my-6 text-[#4BAF32]">
          Tell us about your place.
        </p>
        <p className="text-xl text-[#F6762D]">
          In this step, we'll ask you which type of property you have
          and if guests will book the entire place or just a room.
          Then let us know the location and how many guests can stay.
        </p>
      </motion.div>
      <video
        className="w-6/12"
        autoPlay
        crossOrigin="anonymous"
        playsInline
        preload="auto"
        style={{
          objectFit: "cover",
        }}
      >
        <source src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high" />
      </video>
    </main>
  );
}
