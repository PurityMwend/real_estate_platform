"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [listingType, setListingType] = useState("all");
  const [type, setType] = useState("all");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (listingType !== "all") params.set("listingType", listingType);
    if (type !== "all") params.set("type", type);
    router.push(`/properties?${params.toString()}`);
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-4xl grid gap-3 rounded-xl border border-white/10 bg-navy-light p-4 md:grid-cols-4">
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location (e.g. Westlands)"
        className="rounded-lg border border-white/10 bg-navy px-3 py-2 text-sm text-white placeholder-slate-400 outline-none focus:border-gold"
      />
      <select
        value={listingType}
        onChange={(e) => setListingType(e.target.value)}
        className="rounded-lg border border-white/10 bg-navy px-3 py-2 text-sm text-white"
      >
        <option value="all">Rent or Sale</option>
        <option value="rent">Rent</option>
        <option value="sale">Sale</option>
      </select>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="rounded-lg border border-white/10 bg-navy px-3 py-2 text-sm text-white"
      >
        <option value="all">Property Type</option>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
        <option value="Villa">Villa</option>
        <option value="Office">Office</option>
      </select>
      <button className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy hover:bg-gold-light">
        Search
      </button>
    </form>
  );
}