"use client";

import Auth from "@/app/components/Auth";
import Divider from "@/app/components/Divider";
import ReserveDetails from "@/app/components/ReserveDetails";
import ReserveHotelCard from "@/app/components/ReserveHotelCard";
import Link from "next/link";
import { useState } from "react";

export default function ReservePage() {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [adultCount, setAdultCount] = useState(1);
  const [infantCount, setInfantCount] = useState(0);
  const [petCount, setPetCount] = useState(0);

  return (
    <main className="px-10">
      <div className="flex">
        <img src="/assets/imgs/icons/Caret.svg" alt="Back" />
        <p className="text-4xl font-Coolvetica text-[#4BAF32] py-6">
          Request to Book
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-6/12">
          <ReserveDetails
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
            adultCount={adultCount}
            setAdultCount={setAdultCount}
            infantCount={infantCount}
            setInfantCount={setInfantCount}
            petCount={petCount}
            setPetCount={setPetCount}
          />
          <Divider />
          <Auth />
        </div>
        <ReserveHotelCard />
      </div>
    </main>
  );
}
