import HotelCard from "@/app/_components/HotelCard";
import HotelHeading from "@/app/_components/HotelHeading";
import { capitalizeString } from "@/app/_utils/Helper.funcs";

export default function hotelsBasedOnLocationPage({
  params,
}: {
  params: { locationData: string };
}) {
  return (
    <main>
      <HotelHeading
        districtName={params.locationData.split("-")[1]}
      />
      <p className="py-10 text-4xl font-Coolvetica text-center">
        <span className="text-[#4BAF32]">Explore, </span>
        <span className="text-[#F6762D]">
          {capitalizeString(params.locationData.split("-")[1])
            .split("-")
            .map((seperateString) => {
              return capitalizeString(seperateString);
            })
            .join(" ")}
        </span>
      </p>
      <div className="grid grid-cols-4 content-center justify-center gap-y-10">
        <HotelCard hotelID="sjfhwuiqyr9q273" />
      </div>
    </main>
  );
}
