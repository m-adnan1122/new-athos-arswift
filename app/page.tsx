import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { Entrance, MotionArticle, RevealSection } from "./motion-components";

const dishes = [
  { name: "Garides Saganaki", tag: "Aus der Pfanne", price: "18,90 €", image: "/home/2.png", text: "Saftige Garnelen in fruchtiger Tomatensoße, mit griechischem Schafskäse und frischem Bauernbrot." },
  { name: "Lammkoteletts & Souvlaki", tag: "Vom Holzkohlegrill", price: "22,90 €", image: "/home/3.png", text: "Zart gegrilltes Fleisch mit Zitrone, Kräutern und cremigem Tzatziki." },
  { name: "Oktopadi Skaras", tag: "Aus dem Meer", price: "19,90 €", image: "/home/1.png", text: "Gegrillter Oktopus auf gelbem Erbsenpüree, mit Kapern und gutem Olivenöl." },
];

const goldButton = "inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-semibold text-ink shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8b97f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";
const lightButton = "inline-flex min-h-12 items-center justify-center rounded-full bg-sand px-7 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sand";

const exteriorPhotos = [
  { src: "/shared/image%20(2).png", alt: "Außenansicht des Restaurant Athos mit Terrasse", caption: "Das Athos an der Elisabethstraße" },
  { src: "/shared/image%20(1).png", alt: "Überdachte Terrasse mit Sitzplätzen und Blick ins Grüne", caption: "Draußen sitzen und den Abend genießen" },
  { src: "/shared/image%20(3).png", alt: "Eingangsbereich des Restaurant Athos", caption: "Wir freuen uns auf Ihren Besuch" },
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-ink text-sand">
      <SiteHeader />

      <section className="relative isolate flex min-h-[420px] h-[min(680px,calc(100svh-68px))] items-center justify-center overflow-hidden sm:min-h-[500px] lg:min-h-[540px]">
        <picture className="absolute inset-0 block">
          <Image className="object-cover object-center" src="/HOME.png" alt="Griechisches Grillgericht in stimmungsvoller Atmosphäre" fill priority sizes="100vw" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-[#0D1B2A]/55 to-[#092846]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-ink/35" />
        <Entrance className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-14 text-center sm:px-8" delay={0.12}>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">Restaurant Athos · Strausberg</p>
          <h1 className="max-w-full font-serif text-[clamp(2.1rem,4.8vw,4.25rem)] leading-[1.08] tracking-[-0.025em] text-sand">Willkommen im <span className="text-gold">Restaurant Athos</span></h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-6 text-sand/95 drop-shadow sm:text-base sm:leading-7">Gastgeber Dionysios Giantsios und sein Team begrüßen Sie mit griechischer Küche, besonderen Aromen und herzlicher Gastfreundschaft.</p>
          <div className="mt-8 flex w-full max-w-[340px] flex-col justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row">
            <Link className={`${goldButton} min-h-10 min-w-36 px-6 text-[10px] uppercase tracking-wide`} href="/kontakt">Tisch reservieren</Link>
            <Link className={`${lightButton} min-h-10 min-w-36 px-6 text-[10px] uppercase tracking-wide`} href="/speisekarte">Speisekarte ansehen</Link>
          </div>
        </Entrance>
      </section>

      <div className="border-y border-white/5 bg-deep px-4 py-3 text-[10px] font-medium tracking-[0.12em] text-gold sm:px-8 sm:text-xs">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:justify-between">
          <span>◷ &nbsp; MITTWOCH–FREITAG AB 16 UHR</span><span className="text-sand/70">⌖ &nbsp; ELISABETHSTRASSE 19 · STRAUSBERG</span>
        </div>
      </div>

      <RevealSection className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24" id="about">
        <div className="grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <p className="mb-2 font-serif text-sm text-gold">Gastfreundschaft, wie sie sein soll</p>
            <h2 className="font-serif text-3xl leading-tight text-sand sm:text-4xl">Ankommen, Platz nehmen und sich wohlfühlen.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted">Im Athos verbinden wir griechische Küche mit persönlicher Gastfreundschaft. Gastgeber Dionysios empfängt seine Gäste mit viel Humor und Herzlichkeit – damit sich jeder willkommen fühlt, ob beim Essen vor Ort oder bei einer Bestellung zum Mitnehmen.</p>
            <div className="mt-7 grid grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-panel/70 py-4 text-center">
              <div className="px-2"><span className="text-lg text-gold">♨</span><p className="mt-1 text-[9px] font-semibold tracking-wide text-sand sm:text-[10px]">GRILLGERICHTE</p><p className="text-[10px] text-muted">Frisch zubereitet</p></div>
              <div className="px-2"><span className="text-lg text-gold">✳</span><p className="mt-1 text-[9px] font-semibold tracking-wide text-sand sm:text-[10px]">GRIECHISCHE KÜCHE</p><p className="text-[10px] text-muted">Mit eigenem Charakter</p></div>
              <div className="px-2"><span className="text-lg text-gold">≈</span><p className="mt-1 text-[9px] font-semibold tracking-wide text-sand sm:text-[10px]">MIT HERZ</p><p className="text-[10px] text-muted">Persönlich willkommen</p></div>
            </div>
          </div>
          <MotionArticle className="overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-2xl shadow-black/20">
            <div className="relative h-64 sm:h-80"><Image src="/home/1.png" alt="Gegrillter Oktopus mit Erbsenpüree" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" /></div>
            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-semibold tracking-[0.16em] text-gold">AUS UNSERER KÜCHE</p><h3 className="mt-2 font-serif text-xl text-sand sm:text-2xl">Oktopadi Skaras auf Fava</h3></div><span className="shrink-0 text-sm font-semibold text-gold">19,90 €</span></div>
              <p className="mt-3 text-xs leading-6 text-muted sm:text-sm">Zart gegrillter Oktopus auf Fava, verfeinert mit Kapern und Olivenöl – griechische Aromen auf einem Teller.</p>
            </div>
          </MotionArticle>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#101f2e] px-4 py-14 sm:px-8 sm:py-20 lg:py-24" id="menu">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 font-serif text-sm text-gold">Aus unserer Küche</p>
          <div className="flex flex-wrap items-end justify-between gap-4"><h2 className="font-serif text-3xl text-sand sm:text-4xl">Griechische Lieblingsgerichte</h2><Link className="text-xs text-gold transition hover:text-sand" href="/speisekarte">Zur Speisekarte <span aria-hidden="true">→</span></Link></div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">Mit Sorgfalt zubereitet und am liebsten in guter Gesellschaft genossen.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {dishes.map((dish) => <MotionArticle className="group overflow-hidden rounded-xl border border-white/10 bg-panel transition-colors hover:border-gold/40" key={dish.name}>
              <div className="relative h-52 overflow-hidden sm:h-56"><Image src={dish.image} alt={dish.name} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, 33vw" /><span className="absolute bottom-3 left-3 rounded-full bg-sand px-3 py-1 text-[10px] font-semibold text-ink">{dish.tag}</span><span className="absolute bottom-3 right-3 rounded-md bg-ink/90 px-2 py-1 text-[11px] font-semibold text-gold">{dish.price}</span></div>
              <div className="p-4"><h3 className="font-serif text-lg text-sand">{dish.name}</h3><p className="mt-2 text-xs leading-5 text-muted">{dish.text}</p><p className="mt-4 text-[10px] text-gold/80">✦ &nbsp; Griechische Küche</p></div>
            </MotionArticle>)}
          </div>
          <Link className={`${lightButton} mt-8 w-full`} href="/speisekarte">Alle Gerichte ansehen</Link>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-8 sm:py-20 lg:px-10" id="terrasse">
        <p className="mb-2 font-serif text-sm text-gold">Ein Stück Griechenland in Strausberg</p>
        <div className="flex flex-wrap items-end justify-between gap-4"><h2 className="font-serif text-3xl text-sand sm:text-4xl">Unsere Terrasse und der Eingang</h2><p className="max-w-xl text-sm leading-6 text-muted">Genießen Sie griechische Küche drinnen oder draußen auf unserer Terrasse. Die Fotos zeigen den Außenbereich und den Eingang des Athos.</p></div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {exteriorPhotos.map((photo) => <MotionArticle key={photo.src} className="group overflow-hidden rounded-xl border border-white/10 bg-panel">
            <div className="relative aspect-[4/3] overflow-hidden"><Image src={photo.src} alt={photo.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div>
            <p className="px-4 py-3 text-sm text-sand">{photo.caption}</p>
          </MotionArticle>)}
        </div>
      </RevealSection>

      <RevealSection className="bg-[#101f2e] px-4 py-14 sm:px-8 sm:py-20 lg:py-24" id="gemeinsam">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <p className="mb-2 font-serif text-sm text-gold">Gemeinsam schmeckt es am besten</p>
            <h2 className="font-serif text-3xl leading-tight text-sand sm:text-4xl">Ein Tisch für Familie, Freunde und Kollegen.</h2>
            <p className="mt-5 text-sm leading-7 text-muted">Ein gutes Essen bringt Menschen zusammen. Ob Familienabend, Treffen mit Freunden oder Firmenfeier zum Jahresausklang – im Athos ist Platz für gemeinsame Stunden und griechische Gastfreundschaft.</p>
            <Link className={`${goldButton} mt-6`} href="/kontakt">Zusammenkommen & reservieren</Link>
          </div>
          <MotionArticle className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/20">
            <div className="relative aspect-[16/10]">
              <Image src="/shared/Cosy%20Greek%20Family%20Dinner.png" alt="Stimmungsbild eines gemeinsamen Abendessens in einem griechisch gestalteten Restaurant" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-ink/75 px-3 py-1.5 text-[10px] font-medium text-sand/90 backdrop-blur-sm">Stimmungsbild</span>
            </div>
          </MotionArticle>
        </div>
      </RevealSection>

      <RevealSection className="border-y border-white/5 bg-[#11283b] px-4 py-14 sm:px-8 sm:py-20" id="booking">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_auto]">
          <div><p className="mb-2 font-serif text-sm text-gold">Wir freuen uns auf Sie</p><h2 className="font-serif text-3xl text-sand sm:text-4xl">Ihr Tisch ist bereit.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-sand/75">Ob Abendessen zu zweit, ein Treffen mit Freunden oder die nächste Firmenfeier: Wir heißen Sie herzlich willkommen. Viele Gerichte gibt es auch zum Mitnehmen – rufen Sie uns dafür gern an.</p></div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col"><Link className={goldButton} href="/kontakt">Tisch reservieren</Link><a className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold/50 px-7 text-sm text-sand transition hover:border-gold hover:bg-white/5" href="tel:+493341390650">Anrufen: 03341 / 39 06 50</a></div>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-8 sm:py-20 md:grid-cols-2 lg:px-10" id="visit">
        <div><p className="mb-2 font-serif text-sm text-gold">Ihr Besuch im Athos</p><h2 className="font-serif text-3xl text-sand sm:text-4xl">So finden Sie zu uns</h2><p className="mt-4 text-sm leading-6 text-muted">Elisabethstraße 19<br />15344 Strausberg</p><a className="mt-5 inline-flex items-center gap-2 text-sm text-gold transition hover:text-sand" href="https://maps.google.com/?q=Elisabethstra%C3%9Fe+19,+15344+Strausberg" target="_blank" rel="noreferrer">Route in Google Maps öffnen <span aria-hidden="true">↗</span></a></div>
        <div className="rounded-xl border border-white/10 bg-panel p-5 sm:p-6"><h3 className="mb-4 text-xs font-semibold tracking-[0.14em] text-gold">ÖFFNUNGSZEITEN</h3><div className="space-y-3 text-xs"><div className="flex justify-between gap-4"><span className="text-muted">Mittwoch–Freitag</span><span>16:00–22:00 Uhr</span></div><div className="flex justify-between gap-4"><span className="text-muted">Samstag und Sonntag</span><span>12:00–22:00 Uhr</span></div><p className="pt-2 text-[10px] leading-5 text-muted">Für Feiertage und kurzfristige Änderungen rufen Sie uns bitte an.</p></div></div>
      </RevealSection>

      <SiteFooter />
    </main>
  );
}
