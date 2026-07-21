import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center">
      <p className="mb-6 rounded-full border border-white/20 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300">
        50+ Countries · 10,000+ Properties
      </p>
      <h1 className="text-4xl font-bold leading-tight md:text-6xl">
        Your Global Home<br />
        <em className="text-gold">Starts Here.</em>
      </h1>
      <p className="mx-auto mt-8 max-w-2xl rounded-lg bg-white/5 px-6 py-4 text-slate-300 backdrop-blur">
        HomelinkGlobal connects internationally relocating families with premium
        properties and end-to-end relocation support — in every major city on earth.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/properties"
          className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-gold-light"
        >
          Browse Properties
        </Link>
        <button className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
          How It Works
        </button>
      </div>
    </section>
  );
}