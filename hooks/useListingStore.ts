import { Address, Amenity, Coordinates, MaxAccomodation } from "@/app/_types/Listing.types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ListingStore {
  coordinatePoint: Coordinates
  Description: string;
  Name: string;
  price: number;
  Address: Address;
  Images: any;
  Amenities: Amenity[];
  StructureType: string;
  PrivacyType: string;
  setNameAndDesc: ({ name, desc }: { name: string; desc: string }) => void;
  maxAccomodation: MaxAccomodation,
  setAddress: (addressObj: Address) => void;
  setCoords: (coords: Coordinates| undefined) => void;
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
      coordinatePoint: {
        lattitude: 0.0,
        longitude: 0.0
      },
      Description: "",
      Name: "",
      Address: {
        city:"",
        country:"",
        houseName:"",
        houseNumber:"",
        landmark:"",
        pincode:"",
        streetAddress:""
      },
      Amenities: [],
      Images: [],
      price: 0,
      StructureType: "",
      PrivacyType: "",
      maxAccomodation: {
        Bath: 1,
        Bed: 1,
        Bedroom: 1,
        Bathroom: 1,
        Guests: 1,
      },
      setCoords(coords:Coordinates  | undefined) {
        set({
          coordinatePoint: coords
        })
      },
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
