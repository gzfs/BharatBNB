import { Clock, Clock1, ShieldCheck, Star, Zap } from "lucide-react";
import React from "react";
import UserAvatar from "./UserAvatar";

const OwnerDetail = () => {
  return (
    <>
      <h2 className="text-3xl font-Coolvetica text-[#F6762D] mt-16">
        Hosted By
      </h2>

      <div className="flex flex-col">
        <div className="flex items-center mt-8">
          {/* Avatar */}
          <UserAvatar />

          <div className="flex flex-col leading-tight ml-4">
            <p className="font-Coolvetica text-[#F6762D] text-2xl">
              Chad Murugan
            </p>
            <p className="font-Coolvetica text-[#AC8080] text-lg">
              Joined in September 11,2001
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-x-5 mt-5">
          <div className="flex items-center gap-x-3">
            <Star className="w-4 h-4 fill-[#F6762D] text-[#F6762D]" />
            <span className="font-Coolvetica text-[#AC8080]">69 Reviews</span>
          </div>

          <div className="flex items-center gap-x-3">
            <Clock className="w-4 h-4  text-[#F6762D]" />
            <span className="font-Coolvetica text-[#AC8080]">
              100% Response Rate
            </span>
          </div>

          <div className="flex items-center gap-x-3">
            <ShieldCheck className="w-4 h-4 text-[#F6762D]" />
            <span className="font-Coolvetica text-[#AC8080]">
              BharatBNB Verified
            </span>
          </div>

          <div className="flex items-center gap-x-3">
            <Zap className="w-4 h-4 fill-[#F6762D] text-[#F6762D]" />
            <span className="font-Coolvetica text-[#AC8080]">
              Fast Response Time
            </span>
          </div>
        </div>

        <p className="font-Coolvetica text-[#F6762D] text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur. Semper ut duis senectus
          interdum quis sit sit cursus ut. Massa sed semper congue porttitor
          pulvinar. Turpis id pellentesque tellus ut fusce interdum at dui in.
          At purus quis id nulla.
        </p>
      </div>
    </>
  );
};

export default OwnerDetail;
