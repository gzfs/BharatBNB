import { Star } from "lucide-react";
import React from "react";
import UserAvatar from "./UserAvatar";

const ReviewCard = () => {
  return (
    <div className="border border-[#F6762D] px-7 pt-5 pb-7 rounded-3xl flex-col w-[450px] module">
      <div className="flex items-center">
        <UserAvatar />

        {/* User Detail */}
        <div className="ml-4 mt-4">
          <div className="leading-[18px]">
            <p className="font-Coolvetica text-[#F6762D] text-xl">
              Timothy
            </p>
            <p className="font-Coolvetica text-[#AC8080]">
              Joined in September 11,2001
            </p>
          </div>
          <div className="flex items-center mt-2">
            <Star className="w-4 h-4 fill-[#F6762D] text-[#F6762D]" />
            <Star className="w-4 h-4 fill-[#F6762D] text-[#F6762D]" />
            <Star className="w-4 h-4 fill-[#F6762D] text-[#F6762D]" />
          </div>
        </div>
      </div>

      {/* Review Detail */}
      <p className="mt-4 font-Coolvetica text-[#F6762D] text-xl">
        Lorem ipsum dolor sit amet consectetur. Semper ut duis
        senectus interdum quis sit sit cursus ut
      </p>
    </div>
  );
};

export default ReviewCard;
