"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export type Amenity = {
  amenityType: string;
  amenityName: string;
};

export default function AmenitiesRender({
  amenitiesList,
  setAmenitiesList,
  totalAmenities,
}: {
  amenitiesList: Amenity[] | undefined;
  setAmenitiesList: CallableFunction;
  totalAmenities: Amenity[];
}) {
  return (
    <div className="flex flex-col font-Coolvetica text-[#F6762D] text-xl">
      <div className="grid sm:grid-cols-4 grid-rows-1  md:w-fit w-full grid-cols-2 gap-2 ">
        {totalAmenities?.map((amenityElement) => {
          return amenityElement.amenityType === "Convenience" ? (
            <div
              className="border-2 rounded-xl flex items-center p-6 hover:border-[#4BAF32] transition-colors cursor-pointer"
              style={{
                borderColor: amenitiesList?.find((amenity) => {
                  return (
                    amenity.amenityName === amenityElement.amenityName
                  );
                })
                  ? "#4BAF32"
                  : "",
              }}
              onClick={() => {
                if (
                  amenitiesList?.find((amenity) => {
                    return (
                      amenity.amenityName ===
                      amenityElement.amenityName
                    );
                  })
                ) {
                  setAmenitiesList(
                    amenitiesList.filter((amenity) => {
                      return (
                        amenity.amenityName !==
                        amenityElement.amenityName
                      );
                    })
                  );
                } else {
                  if (amenitiesList) {
                    setAmenitiesList([
                      ...amenitiesList,
                      amenityElement,
                    ]);
                  } else {
                    setAmenitiesList([amenityElement]);
                  }
                }
              }}
            >
              {amenityElement.amenityName}
            </div>
          ) : (
            ""
          );
        })}
      </div>
      <p className="font-Coolvetica text-3xl text-[#4BAF32] mt-4">
        Security
      </p>
      <div className="grid sm:grid-cols-3 grid-rows-1 md:w-fit w-full grid-cols-2 gap-2 my-4">
        {totalAmenities?.map((amenityElement) => {
          return amenityElement.amenityType === "Security" ? (
            <div
              className="border-2 rounded-xl flex items-center p-6 hover:border-[#4BAF32] transition-colors cursor-pointer"
              style={{
                borderColor: amenitiesList?.find((amenity) => {
                  return (
                    amenity.amenityName === amenityElement.amenityName
                  );
                })
                  ? "#4BAF32"
                  : "",
              }}
              onClick={() => {
                if (
                  amenitiesList?.find((amenity) => {
                    return (
                      amenity.amenityName ===
                      amenityElement.amenityName
                    );
                  })
                ) {
                  setAmenitiesList(
                    amenitiesList.filter((amenity) => {
                      return (
                        amenity.amenityName !==
                        amenityElement.amenityName
                      );
                    })
                  );
                } else {
                  if (amenitiesList) {
                    setAmenitiesList([
                      ...amenitiesList,
                      amenityElement,
                    ]);
                  } else {
                    setAmenitiesList([amenityElement]);
                  }
                }
              }}
            >
              {amenityElement.amenityName}
            </div>
          ) : (
            ""
          );
        })}
      </div>
      <p className="font-Coolvetica text-3xl text-[#4BAF32] mt-4">
        Standout
      </p>
      <div className="grid sm:grid-cols-3 grid-rows-1 md:w-fit w-full grid-cols-2 gap-2 my-4">
        {totalAmenities?.map((amenityElement) => {
          return amenityElement.amenityType === "Standout" ? (
            <div
              className="border-2 rounded-xl flex items-center p-6 hover:border-[#4BAF32] transition-colors cursor-pointer"
              style={{
                borderColor: amenitiesList?.find((amenity) => {
                  return (
                    amenity.amenityName === amenityElement.amenityName
                  );
                })
                  ? "#4BAF32"
                  : "",
              }}
              onClick={() => {
                if (
                  amenitiesList?.find((amenity) => {
                    return (
                      amenity.amenityName ===
                      amenityElement.amenityName
                    );
                  })
                ) {
                  setAmenitiesList(
                    amenitiesList.filter((amenity) => {
                      return (
                        amenity.amenityName !==
                        amenityElement.amenityName
                      );
                    })
                  );
                } else {
                  if (amenitiesList) {
                    setAmenitiesList([
                      ...amenitiesList,
                      amenityElement,
                    ]);
                  } else {
                    setAmenitiesList([amenityElement]);
                  }
                }
              }}
            >
              {amenityElement.amenityName}
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}
