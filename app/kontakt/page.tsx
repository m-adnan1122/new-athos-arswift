import Image from "next/image";
import ReservationForm from "./reservation-form";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { Entrance, MotionAnchor, RevealSection } from "../motion-components";

export default function KontaktPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-sand">
      <SiteHeader />
      <section className="relative isolate overflow-hidden bg-ink">
        <div className="mx-auto grid min-h-[410px] max-w-7xl items-center gap-8 px-4 py-12 sm:px-8 md:grid-cols-[1fr_0.95fr] md:gap-10 md:py-14 lg:min-h-[520px] lg:gap-14 lg:px-10">
          <Entrance className="relative z-10" delay={0.08}>
            <p className="mb-3 font-serif text-sm text-gold">Wir freuen uns auf Sie</p>
            <h1 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-tight text-sand sm:text-5xl lg:text-6xl">Ein Platz für<br className="hidden sm:block" /> gute Gespräche.</h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-sand/75 sm:text-base">Reservieren Sie Ihren Tisch im Athos und genießen Sie einen entspannten Abend mit griechischer Küche und herzlicher Gastfreundschaft.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8b97f]" href="tel:+493341390650">☎ &nbsp; 03341 / 39 06 50</a>
              <span className="text-xs text-sand/60">Elisabethstraße 19 · Strausberg</span>
            </div>
          </Entrance>
          <Entrance className="relative h-[260px] overflow-hidden rounded-[2rem] rounded-bl-sm border border-white/10 shadow-2xl shadow-black/30 sm:h-[340px] md:h-[360px] lg:h-[420px]" delay={0.2}>
            <Image src="/kontact-hero.png" alt="Stimmungsbild eines griechisch inspirierten Gastraums" fill priority sizes="(max-width: 768px) 100vw, 48vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 font-serif text-lg italic text-sand">Ein Stück Griechenland in Strausberg</span>
          </Entrance>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-10">
        <RevealSection className="rounded-2xl border border-white/10 bg-panel p-5 shadow-xl shadow-black/10 sm:p-8">
          <p className="mb-2 font-serif text-sm text-gold">Ihr Besuch im Athos</p>
          <h2 className="font-serif text-3xl text-sand sm:text-4xl">Tisch anfragen</h2>
          <p className="mt-3 text-sm leading-6 text-muted">Teilen Sie uns Ihre Wünsche mit. Wir freuen uns auf Ihren Besuch.</p>
          <ReservationForm />
        </RevealSection>

        <aside className="grid content-start gap-5">
          <RevealSection className="rounded-2xl border border-white/10 bg-panel p-5 sm:p-7" delay={0.08}>
            <p className="mb-2 font-serif text-sm text-gold">Restaurant Athos</p>
            <h2 className="font-serif text-3xl text-sand">Besuchen Sie uns</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div><h3 className="text-[10px] font-semibold tracking-[0.14em] text-gold">ANSCHRIFT</h3><p className="mt-2 text-sm leading-6 text-sand/80">Elisabethstraße 19<br />15344 Strausberg</p></div>
              <div><h3 className="text-[10px] font-semibold tracking-[0.14em] text-gold">TELEFON</h3><a className="mt-2 inline-block text-sm text-sand/80 transition hover:text-gold" href="tel:+493341390650">03341 / 39 06 50</a></div>
              <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2"><h3 className="text-[10px] font-semibold tracking-[0.14em] text-gold">ÖFFNUNGSZEITEN</h3><div className="mt-2 space-y-2 text-xs"><div className="flex justify-between gap-4"><span className="text-muted">Mittwoch – Freitag</span><span>16:00 – 22:00 Uhr</span></div><div className="flex justify-between gap-4"><span className="text-muted">Samstag und Sonntag</span><span>12:00 – 22:00 Uhr</span></div><p className="pt-1 text-[10px] leading-5 text-muted">Feiertagszeiten bitte telefonisch erfragen.</p></div></div>
            </div>
          </RevealSection>

          <MotionAnchor className="group relative flex min-h-[250px] overflow-hidden rounded-2xl border border-white/10 bg-[#d7d3bf] p-4 sm:min-h-[280px]" href="https://maps.google.com/?q=Elisabethstra%C3%9Fe+19,+15344+Strausberg" ariaLabel="Restaurant Athos in Google Maps öffnen">
            <div className="absolute inset-0 bg-[#cbd3c0]" aria-hidden="true">
              <span className="absolute -left-10 top-1/3 h-7 w-[120%] rotate-[-13deg] bg-[#f2eddd] shadow-sm" />
              <span className="absolute -left-6 top-[68%] h-5 w-[120%] rotate-[8deg] bg-[#f2eddd] shadow-sm" />
              <span className="absolute left-[28%] -top-12 h-[150%] w-6 rotate-[19deg] bg-[#f2eddd] shadow-sm" />
              <span className="absolute left-[72%] -top-12 h-[150%] w-4 rotate-[7deg] bg-[#f2eddd] shadow-sm" />
              <span className="absolute left-[48%] top-[44%] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full rounded-bl-none rotate-[-45deg] bg-gold shadow-lg"><span className="rotate-45 text-sm text-ink">A</span></span>
              <span className="absolute left-5 top-5 rounded-md bg-sand/95 px-3 py-2 text-xs font-semibold text-ink shadow">Elisabethstraße 19, Strausberg</span>
            </div>
            <span className="relative z-10 mt-auto inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-xs font-semibold text-sand transition group-hover:bg-panel">Route in Google Maps öffnen <span className="ml-3 text-gold">↗</span></span>
          </MotionAnchor>
        </aside>
      </div>
      <SiteFooter />
    </main>
  );
}
