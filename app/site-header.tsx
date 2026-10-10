import Image from "next/image";
import Link from "next/link";
import MenuDrawer from "./menu-drawer";

export default function SiteHeader() {
  return (
    <header className="relative z-30 border-b border-white/5 bg-ink text-sand">
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-10">
        <Link className="group flex h-12 shrink-0 items-center" href="/" aria-label="Athos Startseite">
          <Image src="/shared/logo-navbar.png" alt="Athos Strausberg" width={1312} height={482} priority className="h-11 w-auto object-contain transition-opacity group-hover:opacity-85" />
        </Link>

        <nav className="ml-auto hidden items-center gap-8 text-[13px] text-sand/80 md:flex" aria-label="Main navigation">
          <Link className="transition-colors hover:text-gold" href="/speisekarte">Speisekarte</Link>
          <Link className="transition-colors hover:text-gold" href="/kontakt">Kontakt / Reservierung</Link>
        </nav>

        <Link className="hidden rounded-full bg-gold px-6 py-3 text-xs font-bold text-ink shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8b97f] md:inline-flex" href="/kontakt">Tisch reservieren</Link>
        <MenuDrawer />
      </div>
    </header>
  );
}
