"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function FiltersPanel() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [listingType, setListingType] = useState(searchParams.get("listingType") || "all");
  const [type, setType] = useState(searchParams.get("type") || "all");

  useEffect(() => {
    setLocation(searchParams.get("location") || "");
    setListingType(searchParams.get("listingType") || "all");
    setType(searchParams.get("type") || "all");
  }, [searchParams]);

  function applyFilters() {
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (listingType !== "all") params.set("listingType", listingType);
    if (type !== "all") params.set("type", type);
    router.push(`${pathname}?${params.toString()}`);
  }

  function handleReset() {
    setLocation("");
    setListingType("all");
    setType("all");
    router.push(pathname);
  }

  return (
    <aside className="w-full rounded-xl border border-white/10 bg-navy-light p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="font-semibold text-white">Filters</h2>
        <button onClick={handleReset} className="text-xs text-slate-400 hover:text-white">Reset All</button>
      </div>
      <div className="mt-5 space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase text-slate-400">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Westlands"
            className="mt-1 w-full rounded-lg border border-white/10 bg-navy px-3 py-2 text-sm text-white focus:border-gold outline-none"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-400">Offer Type</label>
          <select
            value={listingType}
            onChange={(e) => setListingType(e.target.value)}
            className="mt-1 w-full rounded-lg border border-white/10 bg-navy px-3 py-2 text-sm text-white focus:border-gold outline-none"
          >
            <option value="all">All Offers</option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-400">Property Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 w-full rounded-lg border border-white/10 bg-navy px-3 py-2 text-sm text-white focus:border-gold outline-none"
          >
            <option value="all">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Office">Office</option>
          </select>
        </div>
        <button onClick={applyFilters} className="mt-6 w-full rounded-lg bg-gold py-2 text-sm font-semibold text-navy hover:bg-gold-light">
          Apply Filters
        </button>
      </div>
    </aside>
  );
}
