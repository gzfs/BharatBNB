"use client";

import React from "react";
import IndiaMap from "react-svgmap-india";

export default function Map({
  setSelectedArea,
  setDistrictArea,
}: {
  setSelectedArea: CallableFunction;
  setDistrictArea: CallableFunction;
}) {
  return (
    <main>
      <IndiaMap
        selectedState={(stateValue: any) =>
          setSelectedArea(() => {
            setDistrictArea("");
            return convertAbbrToFN(stateValue);
          })
        }
        size={"450px"}
        mapColor={"#FFFFFF"}
        strokeColor={"#4BAF32"}
        strokeWidth={"1"}
        hoverColor={"#4BAF32"}
      />
    </main>
  );
}

function convertAbbrToFN(abbrName: string) {
  const stateCodes = {
    AN: "Andaman and Nicobar Islands",
    AP: "Andhra Pradesh",
    AR: "Arunachal Pradesh",
    AS: "Assam",
    BR: "Bihar",
    CG: "Chandigarh",
    CT: "Chhattisgarh",
    DN: "Dadra and Nagar Haveli",
    DD: "Daman and Diu",
    DL: "Delhi",
    GA: "Goa",
    GJ: "Gujarat",
    HR: "Haryana",
    HP: "Himachal Pradesh",
    JK: "Jammu and Kashmir",
    JH: "Jharkhand",
    KA: "Karnataka",
    KL: "Kerala",
    LA: "Ladakh",
    LD: "Lakshadweep",
    MP: "Madhya Pradesh",
    MH: "Maharashtra",
    MN: "Manipur",
    ML: "Meghalaya",
    MZ: "Mizoram",
    NL: "Nagaland",
    OR: "Odisha",
    PY: "Puducherry",
    PB: "Punjab",
    RJ: "Rajasthan",
    SK: "Sikkim",
    TN: "Tamil Nadu",
    TG: "Telangana",
    TR: "Tripura",
    UP: "Uttar Pradesh",
    UT: "Uttarakhand",
    WB: "West Bengal",
  };

  const abbrFind = Object.keys(stateCodes).find((stateCode) => {
    return stateCode === abbrName;
  }) as string;
  return stateCodes[abbrFind];
}
