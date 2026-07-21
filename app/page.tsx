import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <SearchBar />
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-800">Featured Properties</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}