import Link from "next/link";
import { Property } from "@/types/property";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-navy-light">
      <div className="h-48 w-full bg-navy-lighter flex items-center justify-center text-slate-500 text-sm">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold uppercase text-gold">{property.listingType}</p>
        <h3 className="mt-1 text-lg font-semibold text-white">{property.title}</h3>
        <p className="mt-1 text-sm text-slate-400">{property.location}</p>
        <p className="mt-2 font-bold text-gold-light">
          {property.currency} {property.price.toLocaleString()}
        </p>
        <p className="mt-1 text-sm text-slate-400">
          {property.type} · {property.bedrooms} bed · {property.bathrooms} bath
        </p>
        <Link
          href={`/properties/${property.id}`}
          className="mt-4 inline-block rounded-lg border border-gold/40 px-4 py-2 text-sm font-semibold text-gold hover:bg-gold hover:text-navy"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}