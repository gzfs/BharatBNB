export type Coordinates = {
  longitude: number;
  lattitude: number;
};

export type MaxAccomodation = {
  Bedroom: number;
  Bed: number;
  Bathroom: number;
  Bath: number;
  Guests: number;
};

export type Amenity = {
  amenityType: string;
  amenityName: string;
};

export type Address = {
  houseName: string;
  houseNumber: string;
  streetAddress: string;
  country: string;
  city: string;
  pincode: string;
  landmark: string;
};