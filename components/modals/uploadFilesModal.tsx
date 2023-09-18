"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components//ui/dialog";
import { useModalStore } from "@/hooks/useModalStore";
import { Dispatch, SetStateAction, useState } from "react";
import { UploadDropzone } from "@/app/_utils/uploadthing";
import { cn } from "@/lib/utils";
import "@uploadthing/react/styles.css";
import { toast } from "../ui/use-toast";

const UploadFilesModal = ({
  setUploadFiles,
}: {
  setUploadFiles: Dispatch<SetStateAction<any>>;
}) => {
  const { isOpen, onClose, type } = useModalStore();
  const [loading, setLoading] = useState(false);

  const isModalOpen = isOpen && type === "uploadFiles";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black overflow-hidden p-0">
        <DialogHeader className="pt-8">
          <DialogTitle className="text-3xl text-center font-normal font-Coolvetica text-[#4BAF32]">
            Upload your Images
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500 font-Coolvetica">
            Showcase your beautiful pictures of the hotel and its surroundings.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center">
          <UploadDropzone
            className="bg-white text-[#4BAF32] hover:cursor-pointer"
            endpoint="imageUploader"
            appearance={{
              allowedContent: "text-[#F6762D]",
              label: "text-[#F6762D] hover:text-none",
              button: cn(
                "bg-[#F6762D] p-3 rounded-md w-[100%]",
                loading && "opacity-50 bg-[#F6762D] cursor-not-allowed"
              ),
              container: "w-[60%] mb-10",
              uploadIcon: "w-35 h-20 text-[#4BAF32]]",
            }}
            onClientUploadComplete={(res) => {
              setLoading(false);
              setUploadFiles(res);
              onClose();
              toast({
                title: "Success!",
                description: "Your images have been uploaded.",
              })
            }}
            onUploadBegin={() => {
              setLoading(true);
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadFilesModal;
