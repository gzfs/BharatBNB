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
import { useState } from "react";
import { Button } from "../ui/button";
import { SendHorizonal } from "lucide-react";
import { ChatCompletion } from "openai/resources/chat/index.mjs";

type Message = {
  role: "user" | "bot";
  message: string;
};

const ChatBotModal = () => {
  const { isOpen, onClose, type } = useModalStore();

  const [isLoading,setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([]);
  const [userMessage, setUserMessage] = useState("");

  const isModalOpen = isOpen && type === "chatBot";

  const sendMessage = async () => {
    setIsLoading(true)
    setMessages((prev) => [...prev, { role: "user", message: userMessage }]);

    const res = await fetch("/api/openai", {
      method: "POST",
      body: JSON.stringify({ userPrompt: userMessage }),
    });
    const data:ChatCompletion = await res.json()
    setMessages((prev) => [...prev,{role:'bot',message:data.choices[0].message.content!}])
    setUserMessage("")
    setIsLoading(false)
  };

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

        <div className="flex flex-col">
          <div className="flex-1">{/* Messages go here */}</div>
          <div className="flex">
            <input
              className="flex-1 border-0 outline-none p-2"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <Button disabled={isLoading} onClick={sendMessage} className="bg-[#4BAF32]">
              <SendHorizonal />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatBotModal;
