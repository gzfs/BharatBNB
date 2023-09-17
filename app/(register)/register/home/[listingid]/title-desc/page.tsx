"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TitleDesc({
  params,
}: {
  params: { listingid: string };
}) {
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
            Give your house a stunning name and description
          </p>
          <p className="font-Coolvetica text-3xl text-[#4BAF32] pt-10">
            Title
          </p>
          <input
            type="text"
            className="outline-none border-2 py-2 mt-2 rounded-full w-full px-5 font-Coolvetica border-[#4BAF32]"
          />
          <p className="font-Coolvetica text-3xl text-[#4BAF32] pt-6">
            Description
          </p>
          <textarea className="resize-none border-2 rounded-3xl w-full mt-2 px-5 py-5 font-Coolvetica outline-none border-[#4BAF32]" />
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
