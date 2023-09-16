import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SelectSingleEventHandler } from "react-day-picker";

export default function ReserveDetails({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  adultCount,
  setAdultCount,
  infantCount,
  setInfantCount,
  petCount,
  setPetCount,
}: {
  checkInDate: Date | undefined;
  setCheckInDate: SelectSingleEventHandler;
  checkOutDate: Date | undefined;
  setCheckOutDate: SelectSingleEventHandler;
  adultCount: number;
  setAdultCount: CallableFunction;
  infantCount: number;
  setInfantCount: CallableFunction;
  petCount: number;
  setPetCount: CallableFunction;
}) {
  return (
    <div className="rounded-[30px] border-[#F6762D] border-2 w-[400px] ">
      <div className="flex">
        <div className=" w-[200px] py-1 border-b-2 border-[#F6762D] px-4">
          <p className="text-xs font-Coolvetica text-[#4BAF32] ml-4 mt-2">
            CHECK - IN
          </p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={null}
                className={cn(
                  "justify-start text-left font-normal",
                  !checkInDate &&
                    "text-muted-foreground font-Coolvetica text-2xl text-[#F6762D]"
                )}
              >
                {checkInDate ? (
                  <span className="font-Coolvetica text-2xl text-[#F6762D] mt-[-20px] mb-[-20px]">
                    {checkInDate.toLocaleDateString("en-US")}
                  </span>
                ) : (
                  <span>Pick a Date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkInDate}
                onSelect={setCheckInDate}
                initialFocus
                style={{
                  fontFamily: "Coolvetica",
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="border-l-2 border-b-2  py-1 px-4 border-[#F6762D] w-[200px]">
          <p className="text-xs font-Coolvetica text-[#4BAF32] ml-4 mt-2">
            CHECK - OUT
          </p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={null}
                className={cn(
                  "justify-start text-left font-normal",
                  !checkOutDate &&
                    "text-muted-foreground font-Coolvetica text-2xl text-[#F6762D]"
                )}
              >
                {checkOutDate ? (
                  <span className="font-Coolvetica text-2xl text-[#F6762D] mt-[-20px] mb-[-20px]">
                    {checkOutDate.toLocaleDateString("en-US")}
                  </span>
                ) : (
                  <span>Pick a Date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkOutDate}
                onSelect={setCheckOutDate}
                initialFocus
                style={{
                  fontFamily: "Coolvetica",
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex w-full justify-around">
        <div className="flex flex-col w-5/12 items-center justify-center">
          <div className="flex py-4 w-full justify-evenly items-center">
            <img
              src="/assets/imgs/icons/Vector.svg"
              alt="User"
              width="25px"
            />
            <p className="font-Coolvetica text-xl text-[#F6762D]">
              Adults
            </p>
          </div>
          <div className="flex py-4 w-full justify-evenly items-center">
            <img
              src="/assets/imgs/icons/Child.svg"
              alt="User"
              width="25px"
            />
            <p className="font-Coolvetica text-xl text-[#F6762D]">
              Infants
            </p>
          </div>
          <div className="flex py-4 w-full justify-start items-center">
            <img
              src="/assets/imgs/icons/Dog.svg"
              alt="User"
              width="40px"
              className="ml-[20px]"
            />
            <p className="font-Coolvetica text-xl text-[#F6762D] ml-5">
              Pets
            </p>
          </div>
        </div>
        <div className="w-5/12">
          <div className="flex justify-around items-center pt-4">
            <img
              src="/assets/imgs/icons/Minus.svg"
              alt="Decrement"
              className="cursor-pointer"
              onClick={() => {
                if (adultCount > 1) setAdultCount(adultCount - 1);
              }}
            />
            <p className="font-Coolvetica text-xl text-[#F6762D]">
              {adultCount}
            </p>
            <img
              src="/assets/imgs/icons/Plus.svg"
              alt="Increment"
              className="cursor-pointer"
              onClick={() => {
                setAdultCount(adultCount + 1);
              }}
            />
          </div>
          <div className="flex justify-around items-center pt-6">
            <img
              src="/assets/imgs/icons/Minus.svg"
              alt="Decrement"
              className="cursor-pointer"
              onClick={() => {
                if (infantCount > 0) setInfantCount(infantCount - 1);
              }}
            />
            <p className="font-Coolvetica text-xl text-[#F6762D]">
              {infantCount}
            </p>
            <img
              src="/assets/imgs/icons/Plus.svg"
              alt="Increment"
              className="cursor-pointer"
              onClick={() => {
                setInfantCount(infantCount + 1);
              }}
            />
          </div>
          <div className="flex justify-around items-center pt-7">
            <img
              src="/assets/imgs/icons/Minus.svg"
              alt="Decrement"
              className="cursor-pointer"
              onClick={() => {
                if (petCount > 0) setPetCount(petCount - 1);
              }}
            />
            <p className="font-Coolvetica text-xl text-[#F6762D]">
              {petCount}
            </p>
            <img
              src="/assets/imgs/icons/Plus.svg"
              alt="Increment"
              className="cursor-pointer"
              onClick={() => {
                setPetCount(petCount + 1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
