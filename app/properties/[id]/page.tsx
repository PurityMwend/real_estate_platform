import { notFound } from "next/navigation";
import { properties } from "@/data/properties";
import InquiryModal from "@/components/InquiryModal";

export default async function PropertyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const property = properties.find((p) => p.id === resolvedParams.id);
  if (!property) return notFound();

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <div className="bg-navy-lighter flex items-center justify-center rounded-xl overflow-hidden text-slate-500 h-72 border border-white/10">
           <img src={property.image} alt={property.title} className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {property.images.map((img, i) => (
             <div key={i} className="bg-navy-lighter flex items-center justify-center rounded-lg overflow-hidden text-slate-500 h-24 border border-white/10">
               <img src={img} alt={`${property.title} ${i + 1}`} className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
             </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase text-gold font-semibold tracking-wider">{property.listingType}</p>
        <h1 className="mt-1 text-3xl font-bold text-white">{property.title}</h1>
        <p className="mt-2 text-slate-400">{property.location}</p>
        <p className="mt-3 text-2xl font-bold text-gold-light">
          {property.currency} {property.price.toLocaleString()}
        </p>

        <p className="mt-4 inline-block bg-white/5 px-3 py-1.5 rounded-lg text-sm text-slate-300">
          {property.type} • {property.bedrooms} Bedrooms • {property.bathrooms} Bathrooms
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">
          <h3 className="font-semibold text-white">Amenities</h3>
          <ul className="mt-2 list-inside list-disc text-sm text-slate-400">
            {property.amenities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <h3 className="font-semibold text-white">Description</h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">{property.description}</p>
        </div>

        <div className="mt-8">
          <InquiryModal />
        </div>
      </div>
    </div>
  );
}