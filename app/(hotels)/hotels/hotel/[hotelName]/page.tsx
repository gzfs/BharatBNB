"use client";

import Amenities from "@/app/components/Amenities";
import HotelDetailCard from "@/app/components/HotelDetailCard";
import OwnerDetail from "@/app/components/OwnerDetail";
import ReserveDetails from "@/app/components/ReserveDetails";
import Reviews from "@/app/components/Reviews";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SingleHotel() {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [adultCount, setAdultCount] = useState(1);
  const [infantCount, setInfantCount] = useState(0);
  const [petCount, setPetCount] = useState(0);

  const router = useRouter();
  const params = useParams();

  const handleDateCheck = () => {
    if (checkOutDate && checkInDate && checkOutDate > checkInDate) {
      router.push(`/hotels/hotel/${params.hotelName}/reserve`);
    } else if (checkOutDate && checkInDate && checkOutDate < checkInDate) {
      toast({
        variant: "destructive",
        title: "Check Out Date must be after Check In Date",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Check In and Check Out Date cannot be same",
      });
    }
  };
  return (
    <main className="flex-col max-w-full px-10">
      <p className="pt-5 pb-10 text-4xl font-Coolvetica text-center">
        <span className="text-[#4BAF32]">Rajbhavan, </span>
        <span className="text-[#F6762D]">Chennai</span>
      </p>

      <div className="flex justify-between lg:flex-row flex-col items-center">
        <HotelDetailCard />

        <div className="w-fit lg:mt-0 mt-10">
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

          <div className="flex flex-col gap-y-5 mt-5">
            <div className="flex items-center justify-between">
              <span className="font-Coolvetica text-[#F6762D] text-xl">
                ₹7936 per night x15
              </span>
              <span className="font-Coolvetica text-[#F6762D] text-xl">
                ₹2,63,072
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-Coolvetica text-[#F6762D] text-xl">
                BharatBNB Service Fee
              </span>
              <span className="font-Coolvetica text-[#F6762D] text-xl">
                ₹30
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-Coolvetica text-[#F6762D] text-xl">
                Total Before Taxes
              </span>
              <span className="font-Coolvetica text-[#F6762D] text-xl">
                ₹35161
              </span>
            </div>
          </div>

          <Button
            className="mt-6 px-6 py-7 bg-[#F6762D] w-full rounded-full font-Coolvetica text-white hover:no-underline text-lg hover:bg-[#F6762D] hover:bg-opacity-90 transition"
            variant="link"
            onClick={handleDateCheck}
          >
            Reserve
          </Button>
        </div>
      </div>
      <Amenities />
      <Reviews />
      <OwnerDetail />
    </main>
  );
}
