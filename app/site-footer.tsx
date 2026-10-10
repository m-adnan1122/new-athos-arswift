import Link from "next/link";
import { Entrance, RevealSection } from "./motion-components";

export default function SiteFooter() {
  return (
    <footer className="bg-ink px-4 py-10 text-sand sm:px-8 sm:py-14" id="footer">
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 text-center text-[11px] font-bold tracking-wide text-gold sm:mb-10 sm:text-xs">Griechische Küche und herzliche Gastfreundschaft</p>
        <Link className="group inline-flex flex-col font-serif leading-none" href="/" aria-label="Athos Startseite">
          <span className="text-[27px] tracking-[0.1em] transition-colors group-hover:text-gold">ATHOS</span>
          <span className="mt-1.5 text-[10px] text-gold">Restaurant in Strausberg</span>
        </Link>
        <Entrance className="mb-7 mt-4 max-w-xl text-[12px] leading-relaxed text-sand/80 sm:mb-9 sm:text-sm" delay={0.05}>
          Griechische Küche, besondere Aromen und persönliche Gastfreundschaft – mitten in Strausberg.
        </Entrance>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          <RevealSection className="rounded-md border border-white/20 p-4 sm:p-5">
            <h2 className="mb-3 text-[11px] font-semibold tracking-wide text-gold">◷ &nbsp; ÖFFNUNGSZEITEN</h2>
            <div className="space-y-2 text-[11px] sm:text-xs">
              <div className="flex justify-between gap-3"><span className="text-sand/75">Mittwoch–Freitag</span><span>16:00–22:00 Uhr</span></div>
              <div className="flex justify-between gap-3"><span className="text-sand/75">Samstag und Sonntag</span><span>12:00–22:00 Uhr</span></div>
              <p className="pt-1 text-[10px] leading-5 text-sand/55">Feiertagszeiten bitte telefonisch erfragen.</p>
            </div>
          </RevealSection>

          <RevealSection className="rounded-md border border-white/20 p-4 sm:p-5" delay={0.06}>
            <h2 className="mb-3 text-[11px] font-semibold tracking-wide text-gold">⌖ &nbsp; KONTAKT</h2>
            <p className="text-[11px] leading-relaxed text-sand/80 sm:text-xs">Elisabethstraße 19<br />15344 Strausberg</p>
            <a className="mt-3 block text-[11px] text-gold transition hover:text-sand sm:text-xs" href="tel:+493341390650">☎ &nbsp; 03341 / 39 06 50</a>
            <a className="mt-3 block text-[11px] text-blue-200 transition hover:text-sand sm:text-xs" href="https://maps.google.com/?q=Elisabethstra%C3%9Fe+19,+15344+Strausberg" target="_blank" rel="noreferrer">⌖ &nbsp; In Google Maps ansehen</a>
          </RevealSection>
        </div>

        <Link className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-[11px] font-bold tracking-wide text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8b97f] md:mt-7" href="/kontakt">♟ &nbsp; TISCH RESERVIEREN</Link>
        <nav className="flex items-center justify-between gap-3 py-6 text-[10px] text-sand/85 sm:justify-center sm:gap-9 sm:text-xs" aria-label="Fußnavigation">
          <Link className="transition-colors hover:text-gold" href="/speisekarte">Speisekarte</Link>
          <Link className="transition-colors hover:text-gold" href="/speisekarte">Getränke</Link>
          <Link className="transition-colors hover:text-gold" href="/#about">Über Athos</Link>
          <Link className="transition-colors hover:text-gold" href="/kontakt">Anfahrt</Link>
        </nav>
        <small className="block text-center text-[8px] leading-relaxed text-sand/80 sm:text-[10px]">© Restaurant Athos Strausberg. Alle Rechte vorbehalten.<br />Griechische Gastfreundschaft in Strausberg</small>
      </div>
    </footer>
  );
}
