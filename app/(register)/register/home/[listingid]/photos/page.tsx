"use client";

import UploadFilesModal from "@/components/modals/uploadFilesModal";
import { useListingStore } from "@/hooks/useListingStore";
import { useModalStore } from "@/hooks/useModalStore";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Photos({
  params,
}: {
  params: { listingid: string };
}) {
  const {onOpen} = useModalStore();

  // The uploaded images (URL) will be stored over here.
  const {setImages} =  useListingStore();

  return (
    <main className="px-10">
      <UploadFilesModal setUploadFiles={setImages}/>
      <div className="flex flex-col h-full px-5 md:px-0">
        <motion.p
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0 }}
          className="font-Coolvetica text-5xl text-[#4BAF32] text-center mt-8"
        >
          Add some photos of your house.
        </motion.p>
      </div>
      <div className="w-full flex justify-center flex-col items-center">
        <div>
          <div className="rounded-2xl w-full border-[1px] border-dashed mt-20 border-[#4BAF32] flex justify-center items-center flex-col">
            <div className="p-10 my-20 flex justify-center flex-col">
              <p className="font-Coolvetica sm:text-3xl text-2xl text-[#4BAF32] w-full" onClick={() => onOpen("uploadFiles")}>
                Upload some of photos of your Awesome House.
              </p>
              <p className="font-Coolvetica text-[#AC8080] py-2 text-lg">
                Add atleast 5 Photos
              </p>
              <p className="font-Coolvetica text-[#4BAF32] cursor-pointer" onClick={() => onOpen("uploadFiles")}>
                <u>Click here to upload images</u>
              </p>
            </div>
          </div>
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            className="w-full md:w-fit py-10"
          >
            <Link
              href={`/register/home/${params.listingid}/title-desc`}
              className="font-Coolvetica text-xl px-10 py-2 border-2 rounded-xl border-[#F6762D] w-fit text-[#F6762D] hover:text-white hover:bg-[#F6762D] transition-colors"
            >
              Next
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
