"use client";

import ReserveDetails from "@/app/components/ReserveDetails";
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
      <div className="w-[400px] flex justify-center py-8">
        <div className="bg-[#F6762D] h-[3px] rounded-xl w-3/12"></div>
      </div>
      <p className="text-4xl font-Coolvetica text-[#4BAF32] pb-6">
        Sign in with
      </p>
      <div className="flex w-[400px] justify-start">
        <Link
          href="#"
          className="font-Coolvetica text-[#F6762D] text-xl border-2 border-[#F6762D] px-2 py-2 w-[160px] rounded-full flex items-center justify-start"
        >
          <img
            src="/assets/imgs/icons/Biometric.svg"
            alt="Google"
            width="30px"
          />
          <p className="ml-4">Digilocker</p>
        </Link>
        <Link
          href="#"
          className="font-Coolvetica ml-4 text-[#F6762D] text-xl border-2 border-[#F6762D] px-2 py-2 w-[160px] rounded-full flex items-center justify-start"
        >
          <img
            src="/assets/imgs/icons/Google.svg"
            alt="Google"
            width="30px"
          />
          <p className="ml-4">Google</p>
        </Link>
      </div>
    </main>
  );
}
