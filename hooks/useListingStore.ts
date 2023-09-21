import { Address, Amenities, Coordinates, Images } from "@prisma/client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ListingStore {
  coordinatesLattitude: number;
  coordinatesLongitude: number;
  Description: string;
  Name: string;
  pricePerNight: number;
  Address: Address;
  Images: Images[];
  Amenities: Amenities[];
  StructureType: string;
  PrivacyType: string;
  setNameAndDesc: ({ name, desc }: { name: string; desc: string }) => void;
  setAddress: (addressObj: Address) => void;
  setCoords: (coordsObj: Coordinates) => void;
  setPrice: (price: number) => void;
  setImages: (Images: Images[]) => void;
  setAmenities: (amenityList: Amenities[]) => void;
  setPrivacyType: (privacyType: string) => void;
  setStructureType: (structureType: string) => void;
}

export const useListingStore = create(
  persist<ListingStore>(
    (set) => ({
      coordinatesLattitude: 0.0,
      coordinatesLongitude: 0.0,
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
      pricePerNight: 0,
      StructureType: "",
      PrivacyType: "",
      setNameAndDesc: ({ name, desc }: { name: string; desc: string }) =>
        set({
          Name: name,
          Description: desc,
        }),
      setAddress: (addressObj: Address) =>
        set({
          Address: addressObj,
        }),
      setCoords: (coordsObj: Coordinates) =>
        set({
          coordinatesLattitude: coordsObj.Lattitude,
          coordinatesLongitude: coordsObj.Longitude,
        }),
      setPrice: (price: number) =>
        set({
          pricePerNight: price,
        }),
      setImages: (Images: Images[]) =>
        set({
          Images: Images,
        }),
      setAmenities: (amenityList: Amenities[]) =>
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
    }),
    { name: "listingStore", storage: createJSONStorage(() => localStorage) }
  )
);
