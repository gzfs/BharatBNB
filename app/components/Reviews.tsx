import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <>
      <h2 className="text-3xl font-Coolvetica text-[#F6762D] mt-10">Reviews</h2>

      <div className="flex items-center gap-x-5 overflow-x-auto mt-5 w-full ">
        <div className="flex space-x-5">
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </>
  );
};

export default Reviews;
