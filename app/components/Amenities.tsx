import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { ChefHat } from "lucide-react";

const Amenities = () => {
  return (
    <div className="py-10 flex flex-col">
      <h2 className="text-4xl font-Coolvetica text-[#F6762D]">Amenities</h2>

      <div className="grid grid-cols-2 py-3">
        <div className="flex items-center py-4">
          <span>
            <ChefHat size={40} color="#F6762D" />
          </span>
          <span className="font-Coolvetica text-[#F6762D] text-2xl ml-2">
            Kitchen
          </span>
        </div>
        <div className="flex items-center py-4">
          <span>
            <ChefHat size={40} color="#F6762D" />
          </span>
          <span className="font-Coolvetica text-[#F6762D] text-2xl ml-2">
            Kitchen
          </span>
        </div>
        <div className="flex items-center py-4">
          <span>
            <ChefHat size={40} color="#F6762D" />
          </span>
          <span className="font-Coolvetica text-[#F6762D] text-2xl ml-2">
            Kitchen
          </span>
        </div>
        <div className="flex items-center py-4">
          <span>
            <ChefHat size={40} color="#F6762D" />
          </span>
          <span className="font-Coolvetica text-[#F6762D] text-2xl ml-2">
            Kitchen
          </span>
        </div>
      </div>

      <Button
        className="mt-4 px-8 py-2 bg-[#F6762D] w-fit rounded-full font-Coolvetica text-white hover:no-underline text-lg hover:bg-[#F6762D] hover:bg-opacity-90 transition"
        variant="link"
      >
        Show all
      </Button>
    </div>
  );
};

export default Amenities;
