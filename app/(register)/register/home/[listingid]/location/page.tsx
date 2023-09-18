"use client";

import {
  BingResponse,
  Resource,
  Point,
} from "@/app/_types/Bing.types";
import ReactBingMap, { Pushpin } from "@3acaga/react-bing-maps";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export default function Location({
  params,
}: {
  params: { listingid: string };
}) {
  const [locationsArray, setLocationsArray]: [
    locationsArray: Resource[] | undefined,
    setLocationsArray: Dispatch<
      SetStateAction<Resource[] | undefined>
    >
  ] = useState();

  const [showResults, setShowResults] = useState(false);

  const [locationString, setLocationString]: [
    locationString: string | undefined,
    setLocationString: Dispatch<SetStateAction<string | undefined>>
  ] = useState();

  const [locationCoords, setLocationCoords]: [
    locationCoords: Point | undefined,
    setLocationCoords: Dispatch<SetStateAction<Point | undefined>>
  ] = useState();

  return (
    <main className="px-10">
      <div className="flex flex-col justify-around px-5 md:px-0">
        <motion.p
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0 }}
          className="font-Coolvetica text-5xl text-[#4BAF32] text-center mt-8 pb-10"
        >
          Where's your place located?
        </motion.p>
      </div>
      {locationCoords ? (
        <div className="w-full flex flex-col items-center overflow-hidden font-Coolvetica ">
          <input
            type="text"
            placeholder="Apartment Number"
            className="border-2 py-3 md:w-[500px] w-full outline-none px-6 rounded-[10px_10px_0px_0px] border-b-0 "
          ></input>
          <input
            type="text"
            placeholder="Street Address"
            className="border-2 py-3 md:w-[500px] w-full outline-none px-6 border-b-0 "
          ></input>
          <input
            type="text"
            placeholder="Landmark"
            className="border-2 py-3 md:w-[500px] w-full outline-none px-6 border-b-0 "
          ></input>
          <input
            type="text"
            placeholder="City"
            className="border-2 py-3 md:w-[500px] w-full outline-none px-6 border-b-0 "
          ></input>
          <input
            type="text"
            placeholder="County/Province"
            className="border-2 py-3 md:w-[500px] w-full outline-none px-6 border-b-0 "
          ></input>
          <input
            type="number"
            placeholder="Pincode"
            className="border-2 py-3 md:w-[500px] w-full outline-none px-6  rounded-[0px_0px_10px_10px]"
          ></input>
          <div className="py-6">
            <Link
              href={`/register/home/${params.listingid}/more-details`}
              className="font-Coolvetica text-xl px-10 py-2 border-2 rounded-xl border-[#F6762D] w-fit text-[#F6762D] hover:text-white hover:bg-[#F6762D] transition-colors"
            >
              Next
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        initial={{ opacity: 0 }}
        className="relative pb-5"
      >
        <div className="w-full flex justify-center absolute z-50 flex-col items-center">
          <input
            type="text"
            className="w-[400px] py-4 px-6 mt-4 rounded-full outline-none shadow-2xl font-Coolvetica"
            onChange={(eV) => {
              setLocationString(JSON.stringify(eV.target.value));
            }}
            onKeyDown={(eV) => {
              if (eV.key === "Enter") {
                if (locationString)
                  fetch(
                    `https://dev.virtualearth.net/REST/v1/Locations/IN/${locationString}/?key=Ahax2zhL02yMoMS_SUD44UtdKrt7aDlcFLWy-tnro1zZzXBN-NYKQJz3XbCO1z6d`
                  )
                    .then((bingRes) => {
                      return bingRes.json();
                    })
                    .then((bingJson: BingResponse) => {
                      setLocationsArray(
                        bingJson.resourceSets[0].resources
                      );
                      setShowResults(true);
                    });
              }
            }}
            placeholder="Search..."
          ></input>
          {showResults ? (
            <motion.div
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              initial={{ opacity: 0 }}
              className="bg-white shadow-2xl rounded-3xl mt-4"
            >
              {locationsArray?.map((locationArray) => {
                return (
                  <motion.div
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    initial={{ opacity: 0 }}
                    className="w-[400px] py-4 px-6 mt-2  outline-none  border-b-1 font-Coolvetica whitespace-nowrap overflow-hidden cursor-pointer"
                    onClick={() => {
                      setShowResults(false);
                      setLocationCoords(locationArray.point);
                    }}
                  >
                    {locationArray.name}
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            ""
          )}
        </div>
        <div
          style={{
            height: "60vh",
            overflow: "hidden",
            borderRadius: "20px",
          }}
          className="mx-auto lg:w-[900px] w-full my-10"
        >
          <ReactBingMap
            apiKey="Ahax2zhL02yMoMS_SUD44UtdKrt7aDlcFLWy-tnro1zZzXBN-NYKQJz3XbCO1z6d"
            credentials="Ahax2zhL02yMoMS_SUD44UtdKrt7aDlcFLWy-tnro1zZzXBN-NYKQJz3XbCO1z6d"
            allowHidingLabelsOfRoad={false}
            showMapTypeSelector={false}
            disableZooming={true}
            disablePanning={true}
            showLocateMeButton={false}
            center={{
              latitude: locationCoords?.coordinates[0] || 28.38,
              longitude: locationCoords?.coordinates[1] || 77.12,
            }}
            zoom={18}
            disableScrollWheelZoom={true}
          >
            {locationCoords ? (
              <Pushpin
                location={{
                  latitude: locationCoords?.coordinates[0],
                  longitude: locationCoords?.coordinates[1],
                }}
              />
            ) : (
              ""
            )}
          </ReactBingMap>
        </div>
      </motion.div>
    </main>
  );
}
