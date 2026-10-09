import Image from "next/image";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import { Entrance, MotionArticle, RevealSection } from "./motion-components";

const dishes = [
  { name: "Garides Saganaki", tag: "Out of the Pan", price: "18,90 €", image: "/home/2.png", text: "Juicy king prawns in a fruity tomato-herb sauce, melted Greek sheep cheese and oven-fresh country bread." },
  { name: "Lammkoteletts & Souvlaki", tag: "From The Charcoal Grill", price: "22,90 €", image: "/home/3.png", text: "Tender quality meats freshly grilled over glowing charcoal, refined with wild mountain rosemary, lemon and creamy tzatziki." },
  { name: "Oktopadi Skaras", tag: "Sea Food", price: "19,90 €", image: "/home/1.png", text: "Grilled octopus with the finest five puree made from yellow peas, rounded off with Cretan capers and lemon." },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero">
        <Image className="hero-image" src="/home/hero.png" alt="Warmly lit dining room at Restaurant Athos" fill priority sizes="(max-width: 640px) 100vw, 61vw" />
        <div className="hero-shade" />
        <Entrance className="hero-content" delay={0.12}>
          <p className="eyebrow">Strausberg • Greek Elegance</p>
          <h1>Welcome to<br />Restaurant Athos</h1>
          <p className="hero-copy">Authentic Greek cuisine and Mediterranean hospitality in a quiet atmosphere.</p>
          <a className="button button-gold" href="/kontakt">Reserve Table</a>
          <a className="button button-light" href="/speisekarte">Discover the menu</a>
        </Entrance>
      </section>

      <div className="quick-info"><span>◷ &nbsp; OPEN FROM 4:00 PM TO 10:00 PM</span><span>⌖ &nbsp; Collection service</span></div>

      <RevealSection className="section intro" id="about">
        <p className="eyebrow">Restaurant Athos</p><h2>Greek hospitality</h2>
        <p>At Elisabethstraße 19 we serve you genuine Greek delicacies prepared with market-fresh goods and a deep-rooted passion for the honest quality of the Eastern Mediterranean.</p>
        <div className="features"><div><span>♨</span><b>FROM THE GRILL</b><small>Charcoal</small></div><div><span>◉</span><b>MARKET FRESH</b><small>Daily</small></div><div><span>♜</span><b>AEGEAN WINES</b><small>Selected</small></div></div>
        <div className="signature-card"><Image src="/home/1.png" alt="Charcoal grilled octopus with yellow pea puree" width={1000} height={680} /><div className="dish-heading"><div><small>SIGNATURE COURT</small><h3>Oktopadi Skaras auf Fava</h3></div><b>19,90 €</b></div><p>Tenderly braised and seared octopus on Santorini yellow lentil fava, garnished with wild capers and golden olive oil.</p></div>
      </RevealSection>

      <RevealSection className="section menu-section" id="menu">
        <p className="eyebrow">Culinary</p><div className="title-row"><h2>Our cuisine specialties</h2><span>3 Recommendations</span></div>
        <p className="section-lead">Real classics based on a family recipe, refined with sea salt, fresh herbs and the craftsmanship.</p>
        <div className="dish-list">{dishes.map((dish) => <MotionArticle className="dish-card" key={dish.name}><div className="dish-photo"><Image src={dish.image} alt={dish.name} width={1000} height={680} /><span>{dish.tag}</span><b>{dish.price}</b></div><div className="dish-copy"><h3>{dish.name}</h3><p>{dish.text}</p><small>✦ &nbsp; Traditional home-made taste</small></div></MotionArticle>)}</div>
        <a className="button button-light full-button" href="/speisekarte">⌘ &nbsp; To The Full Menu</a>
      </RevealSection>

      <RevealSection className="section mood-section">
        <p className="eyebrow">Impression</p><h2>Mood</h2>
        <div className="gallery"><Image src="/home/hero.png" alt="The restaurant dining room" width={1000} height={1200} /><Image src="/home/2.png" alt="Fresh prawn skillet" width={700} height={600} /><Image src="/home/3.png" alt="Greek grilled meats" width={700} height={600} /><Image src="/home/1.png" alt="Signature grilled octopus" width={700} height={600} /></div>
      </RevealSection>

      <RevealSection className="section booking-section" id="booking">
        <p className="eyebrow">Experience Hospitality</p><h2>Reserve your table in Athos</h2><p>Whether for romantic hours for two, social gatherings with the family or festive occasions, we look forward to seeing you.</p>
        <a className="button button-gold full-button" href="tel:+493341390650">♟ &nbsp; Tisch Online Reservieren</a>
        <a className="button button-outline full-button" href="tel:+493341390650">☎ &nbsp; Tel. 03341 / 39 06 50</a>
        <div className="booking-note"><span>◷</span><div><b>Pick-up service until 10:00 p.m.</b><small>Order all menu items in advance by phone for your home enjoyment.</small></div></div>
      </RevealSection>

      <RevealSection className="section visit-section" id="visit">
        <p className="eyebrow">Anfahrt & Zeiten</p><h2>⌖ OPENING HOURS</h2><div className="hours"><div><span>Wednesday to Friday</span><b>4:00 p.m. – 10:00 p.m.</b></div><div><span>Saturday</span><b>12:00 p.m. – 10:00 p.m.</b></div><div><span>Monday</span><b className="gold-text">Day off (closed)</b></div></div>
        <h2 className="address-title">⌖ ADDRESS</h2><p>Restaurant Athos<br />Elisabethstraße 19, 15344 Strausberg</p>
        <a className="map-card" href="https://maps.google.com/?q=Elisabethstra%C3%9Fe+19,+15344+Strausberg" target="_blank" rel="noreferrer"><span className="map-art" aria-hidden="true"><i /><i /><i /><i /></span><span className="button button-gold map-button">⌖ &nbsp; Open Google Maps Route</span></a>
      </RevealSection>

      <SiteFooter />
    </main>
  );
}
