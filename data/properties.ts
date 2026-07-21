import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern 2BR Apartment in Westlands",
    location: "Nairobi, Westlands",
    price: 85000,
    currency: "KES",
    type: "Apartment",
    listingType: "rent",
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Parking", "24/7 Security", "Fiber Internet", "Gym"],
    description:
      "A bright and modern apartment close to shopping malls and schools. Ideal for young professionals and small families.",
    image: "/images/property-1.jpg",
    images: ["/images/property-1.jpg", "/images/property-2.jpg", "/images/property-3.jpg"],
  },
  {
    id: "2",
    title: "4BR Family House with Garden",
    location: "Nairobi, Karen",
    price: 32000000,
    currency: "KES",
    type: "House",
    listingType: "sale",
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Garden", "DSQ", "CCTV", "Backup Generator"],
    description:
      "Spacious family home in a quiet neighborhood with easy road access and a mature garden.",
    image: "/images/property-2.jpg",
    images: ["/images/property-2.jpg", "/images/property-1.jpg", "/images/property-3.jpg"],
  },
  {
    id: "3",
    title: "Executive 1BR for City Living",
    location: "Nairobi, Kilimani",
    price: 65000,
    currency: "KES",
    type: "Apartment",
    listingType: "rent",
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Lift", "Rooftop", "Borehole Water", "Smart Lock"],
    description:
      "Executive one-bedroom unit designed for comfort, convenience, and secure urban living.",
    image: "/images/property-3.jpg",
    images: ["/images/property-3.jpg", "/images/property-1.jpg", "/images/property-2.jpg"],
  },
];