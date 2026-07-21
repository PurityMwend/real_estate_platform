import PropertyCard from "@/components/PropertyCard";
import FiltersPanel from "@/components/FiltersPanel";
import { properties } from "@/data/properties";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function PropertiesPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;

  const location = typeof resolvedParams.location === "string" ? resolvedParams.location : undefined;
  const listingType = typeof resolvedParams.listingType === "string" ? resolvedParams.listingType : undefined;
  const type = typeof resolvedParams.type === "string" ? resolvedParams.type : undefined;

  const filtered = properties.filter((p) => {
    if (location && !p.location.toLowerCase().includes(location.toLowerCase())) return false;
    if (listingType && listingType !== "all" && p.listingType !== listingType) return false;
    if (type && type !== "all" && p.type !== type) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-5">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Explore Properties</h1>
        <p className="mt-2 text-sm text-slate-400">
          Find your next rental home, apartment, or purchase opportunity.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Left Column - Filters */}
        <div className="md:col-span-1">
          <FiltersPanel />
        </div>

        {/* Right Column - Results */}
        <div className="md:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-400">
              Showing <span className="font-semibold text-gold">{filtered.length}</span> properties
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 py-16 px-4 text-center bg-navy-light">
              <h3 className="mt-4 text-lg font-semibold text-white">No properties match your criteria</h3>
              <p className="mt-2 text-sm text-slate-400 max-w-sm">
                Try widening your search or choosing different property types.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}