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
    <main className="inner-page">
      <SiteHeader />
      <section className="page-hero menu-hero">
        <Image src="/home/1.png" alt="Gegrillter Oktopus mit mediterranen Kräutern" fill priority sizes="100vw" />
        <div className="page-hero-shade" />
        <Entrance className="page-hero-content" delay={0.12}><p className="eyebrow">Authentisch griechisch</p><h1>Unsere Speisekarte</h1><p>Frische Zutaten, ehrliche Rezepte und mediterrane Aromen.</p></Entrance>
      </section>
      <div className="page-content menu-page-content">
        <Entrance delay={0.15}><nav className="category-links" aria-label="Speisekarten Kategorien">{sections.map((section) => <a key={section.title} href={`#${section.title.toLowerCase()}`}>{section.title}</a>)}</nav></Entrance>
        {sections.map((section, sectionIndex) => <RevealSection className="menu-category" id={section.title.toLowerCase()} key={section.title} delay={sectionIndex * 0.04}>
          <p className="eyebrow">Athos Küche</p><h2>{section.title}</h2><p className="category-note">{section.note}</p>
          <div className="menu-items">{section.items.map(([name, description, price]) => <MotionArticle className="menu-item" key={name}><div><h3>{name}</h3><p>{description}</p></div><strong>{price}</strong></MotionArticle>)}</div>
        </RevealSection>)}
        <p className="menu-disclaimer">Alle Preise in Euro. Bei Fragen zu Allergenen oder Unverträglichkeiten sprechen Sie uns gerne an.</p>
        <Link className="button button-gold full-button" href="/kontakt">Tisch reservieren</Link>
      </div>
      <SiteFooter />
    </main>
  );
}
