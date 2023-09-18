"use client";

import { useAuth } from "@clerk/nextjs";
import Auth from "@/app/_components/Auth";
import Convenience from "@/app/_components/Convenience";
import Divider from "@/app/_components/Divider";
import Payment from "@/app/_components/Payment";
import Policies from "@/app/_components/Policies";
import Required from "@/app/_components/Required";
import ReserveDetails from "@/app/_components/ReserveDetails";
import ReserveHotelCard from "@/app/_components/ReserveHotelCard";
import { useState } from "react";

export default function ReservePage() {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [adultCount, setAdultCount] = useState(1);
  const [infantCount, setInfantCount] = useState(0);
  const [petCount, setPetCount] = useState(0);

  const auth = useAuth();

  return (
    <main className="md:px-10 px-5">
      <div className="flex">
        <p className="text-4xl font-Coolvetica text-[#4BAF32] py-6">
          Request to Book
        </p>
      </div>
      <div className="flex w-full lg:flex-row-reverse flex-col">
        <div className="lg:w-6/12 w-full md:pb-0 pb-4">
          <ReserveHotelCard />
        </div>
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
          {auth.isSignedIn ? (
            <div>
              <Payment />
              <Divider />
              <Required />
              <Divider />
              <Convenience />
              <Divider />
              <Policies />
            </div>
          ) : (
            <Auth />
          )}
        </div>
      </div>
    </main>
  );
}
