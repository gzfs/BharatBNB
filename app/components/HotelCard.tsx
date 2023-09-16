import Link from "next/link";

export default function HotelCard({ hotelID }: { hotelID: string }) {
  return (
    <div className="font-Coolvetica flex flex-col items-center">
      <div className="relative">
        <div className="absolute"></div>
        <Link href={`/hotels/hotel/${hotelID}`}>
          <img src="/assets/imgs/dummy/Bruh.png" width="250px" />
        </Link>
        <div className="mt-4">
          <p className="text-lg">Rajbhavan, Chennai</p>
          <p className="text-lg text-[#AC8080]">
            Beach and Ocean Waves
          </p>
          <p className="text-lg text-[#AC8080]">29 Oct - 3 Nov</p>
          <p className="text-lg">₹9,125 per night</p>
        </div>
      </div>
    </div>
  );
}
