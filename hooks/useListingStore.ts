import { Amenity } from "@/app/_components/AmenitiesType";
import { Point } from "@/app/_types/Bing.types";
import {
  Address,
  Images,
  MaxAcommodation,
} from "@prisma/client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ListingStore {
  // coordinates:Point | undefined
  Description: string;
  Name: string;
  price: number;
  Address: Address;
  Images: any;
  Amenities: {
    amenityType: string;
    amenityName: string;
  }[];
  StructureType: string;
  PrivacyType: string;
  setNameAndDesc: ({ name, desc }: { name: string; desc: string }) => void;
  maxAccomodation: MaxAcommodation;
  setAddress: (addressObj: Address) => void;
  // setCoords: (coords:Point | undefined) => void;
  setPrice: (price: number) => void;
  setImages: (Images: any) => void;
  setAmenities: (amenityList: Amenity[]) => void;
  setPrivacyType: (privacyType: string) => void;
  setStructureType: (structureType: string) => void;
  setMaxAccomodation: (field: string, operation: string) => void;
}

export const useListingStore = create(
  persist<ListingStore>(
    (set, get) => ({
      coordinates:{
        type:'Point',
        coordinates:[1,2]
      },
      Description: "",
      Name: "",
      Address: {
        City: "",
        County: "",
        HouseName: "",
        HouseNumber: "",
        ID: "",
        Pincode: "",
        StreetAddress: "",
        Landmark: "",
      },
      Amenities: [],
      Images: [],
      price: 0,
      StructureType: "",
      PrivacyType: "",
      maxAccomodation: {
        Bath: 0,
        Bed: 0,
        Bedroom: 0,
        Bathroom: 0,
        Guests: 0,
        ID: "",
      },
      // setCoords(coords) {
      //   set({
      //     coordinates:coords
      //   })
      // },
      setNameAndDesc: ({ name, desc }: { name: string; desc: string }) =>
        set({
          Name: name,
          Description: desc,
        }),
      setAddress: (addressObj: Address) =>
        set({
          Address: addressObj,
        }),
      setPrice: (price: number) =>
        set({
          price: price,
        }),
      setImages: (Images: any) =>
        set({
          Images: Images,
        }),
      setAmenities: (amenityList: Amenity[]) =>
        set({
          Amenities: amenityList,
        }),
      setPrivacyType: (privacyType: string) =>
        set({
          PrivacyType: privacyType,
        }),
      setStructureType: (structureType: string) =>
        set({
          StructureType: structureType,
        }),
      setMaxAccomodation(field, operation) {
        set({
          maxAccomodation: {
            ...get().maxAccomodation,
            [field]:
              operation === "+"
                ? get().maxAccomodation[field] + 1
                : get().maxAccomodation[field] - 1,
          },
        });
      },
    }),
    { name: "listingStore", storage: createJSONStorage(() => localStorage) }
  )
);
