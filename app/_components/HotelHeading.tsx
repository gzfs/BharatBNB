import { capitalizeString } from "../_utils/Helper.funcs";

export default function HotelHeading({
  districtName,
}: {
  districtName: string;
}) {
  return (
    <div className="relative">
      <img src="/assets/imgs/dummy/Beach.jpg" className="" />
      <div className="bg-black w-full absolute top-0 left-0 h-full opacity-60" />
      <div className="w-full absolute top-0 left-0 h-full vignette" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center font-Coolvetica text-white">
        <div className="leading-[100px]">
          <p className="text-xl">Welcome to</p>
          <p className="text-[100px]">
            {capitalizeString(districtName)
              .split("-")
              .map((seperateString) => {
                return capitalizeString(seperateString);
              })
              .join(" ")}
            .
          </p>
          <p className="text-xl mt-2">Vaa Mame Fun Panlam 🔥</p>
        </div>
      </div>
    </div>
  );
}
