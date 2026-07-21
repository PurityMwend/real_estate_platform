import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Homelink<span className="text-gold">Global</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/properties" className="text-slate-300 hover:text-white">Properties</Link>
          <Link href="/admin" className="text-slate-300 hover:text-white">Admin</Link>
          <Link href="#" className="font-semibold hover:text-white">Sign In</Link>
          <Link href="#" className="rounded-lg bg-gold px-4 py-2 font-semibold text-navy hover:bg-gold-light">
            List Property
          </Link>
        </nav>
      </div>
    </header>
  );
}