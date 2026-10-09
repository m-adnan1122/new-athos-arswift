import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { Entrance, MotionArticle, RevealSection } from "../motion-components";

const sections = [
  { title: "Vorspeisen", note: "Zum Teilen und Genießen", items: [
    ["Tzatziki", "Griechischer Joghurt mit Gurke, Knoblauch und Kräutern.", "6,50 €"],
    ["Garides Saganaki", "Königsgarnelen in fruchtiger Tomatensauce mit Feta.", "18,90 €"],
    ["Gegrillter Halloumi", "Würziger Grillkäse mit Zitrone und frischen Kräutern.", "9,50 €"],
  ] },
  { title: "Hauptgerichte", note: "Frisch vom Grill und aus der Küche", items: [
    ["Oktopadi Skaras", "Gegrillter Oktopus auf gelbem Erbsenpüree mit Kapern.", "19,90 €"],
    ["Lammkoteletts & Souvlaki", "Vom Holzkohlegrill mit Tzatziki und Beilage.", "22,90 €"],
    ["Moussaka", "Griechischer Auflauf mit Aubergine, Kartoffeln und Béchamel.", "16,90 €"],
  ] },
  { title: "Desserts", note: "Ein süßer Abschluss", items: [
    ["Baklava", "Knuspriger Blätterteig mit Nüssen und Honig.", "7,50 €"],
    ["Griechischer Joghurt", "Mit Honig und Walnüssen.", "6,90 €"],
  ] },
  { title: "Getränke", note: "Erfrischendes und ausgewählte Weine", items: [
    ["Hausgemachte Limonade", "Zitrone, Minze und Soda.", "5,50 €"],
    ["Aegean Weißwein", "Griechischer Weißwein, 0,2 l.", "7,90 €"],
    ["Mineralwasser", "Still oder prickelnd, 0,75 l.", "6,50 €"],
  ] },
];

export default function SpeisekartePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-sand">
      <SiteHeader />
      <section className="relative isolate flex min-h-[330px] items-end overflow-hidden sm:min-h-[390px] lg:min-h-[460px]">
        <Image src="/home/1.png" alt="Gegrillter Oktopus mit mediterranen Kräutern" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/10" />
        <Entrance className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 sm:pb-14 lg:px-10" delay={0.12}>
          <p className="mb-2 font-serif text-sm text-gold">Authentisch griechisch</p>
          <h1 className="font-serif text-4xl leading-tight tracking-tight text-sand sm:text-5xl lg:text-6xl">Unsere Speisekarte</h1>
          <p className="mt-3 max-w-lg text-sm leading-6 text-sand/85 sm:text-base">Frische Zutaten, ehrliche Rezepte und mediterrane Aromen – jeden Tag mit Sorgfalt zubereitet.</p>
        </Entrance>
      </section>

      <div className="sticky top-0 z-20 border-y border-white/10 bg-ink/95 px-4 py-3 backdrop-blur-lg sm:px-8">
        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-0.5 sm:justify-center sm:gap-3" aria-label="Speisekarten Kategorien">
          {sections.map((section) => <a className="shrink-0 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[11px] text-sand/85 transition hover:border-gold/60 hover:text-gold sm:px-5 sm:text-xs" key={section.title} href={`#${section.title.toLowerCase()}`}>{section.title}</a>)}
        </nav>
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-8 sm:pb-24">
        {sections.map((section, sectionIndex) => <RevealSection className="scroll-mt-24 py-9 sm:py-12" id={section.title.toLowerCase()} key={section.title} delay={sectionIndex * 0.035}>
          <p className="mb-2 font-serif text-xs text-gold">Aus der Athos Küche</p>
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-white/10 pb-4"><div><h2 className="font-serif text-3xl text-sand sm:text-4xl">{section.title}</h2><p className="mt-2 text-xs text-muted sm:text-sm">{section.note}</p></div><span className="hidden font-serif text-4xl text-white/10 sm:block">0{sectionIndex + 1}</span></div>
          <div className="grid gap-3 sm:gap-4">
            {section.items.map(([name, description, price]) => <MotionArticle className="flex items-start justify-between gap-5 rounded-xl border border-white/10 bg-panel/65 p-4 transition-colors hover:border-gold/30 sm:p-5" key={name}>
              <div><h3 className="font-serif text-base text-sand sm:text-lg">{name}</h3><p className="mt-1.5 max-w-2xl text-xs leading-5 text-muted sm:text-sm sm:leading-6">{description}</p></div>
              <strong className="shrink-0 pt-0.5 text-sm font-semibold text-gold">{price}</strong>
            </MotionArticle>)}
          </div>
        </RevealSection>)}
        <p className="border-t border-white/10 pt-5 text-[11px] leading-5 text-muted">Alle Preise in Euro. Bei Fragen zu Allergenen oder Unverträglichkeiten sprechen Sie uns gerne an.</p>
        <Link className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-semibold text-ink transition hover:bg-[#d8b97f]" href="/kontakt">Tisch reservieren</Link>
      </div>
      <SiteFooter />
    </main>
  );
}
