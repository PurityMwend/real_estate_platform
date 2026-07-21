export type ListingType = "rent" | "sale";

export type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  currency: string;
  type: "Apartment" | "House" | "Villa" | "Office";
  listingType: ListingType;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  description: string;
  image: string;
  images: string[];
};