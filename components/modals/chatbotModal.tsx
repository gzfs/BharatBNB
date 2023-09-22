"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components//ui/dialog";
import { useModalStore } from "@/hooks/useModalStore";
import "@uploadthing/react/styles.css";

const ChatBotModal = () => {
  const { isOpen, onClose, type } = useModalStore();

  const isModalOpen = isOpen && type === "chatBot";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black overflow-hidden p-0">
        <DialogHeader className="pt-8">
          <DialogTitle className="text-3xl text-center font-normal font-Coolvetica text-[#4BAF32]">
            ChatBot
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500 font-Coolvetica">
            Get your personalized itineary.
          </DialogDescription>
        </DialogHeader>

        <div>
            {/* Chat bot here */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatBotModal;
