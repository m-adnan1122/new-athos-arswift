import Link from "next/link";
import { Entrance, RevealSection } from "./motion-components";

export default function SiteFooter() {
  return (
    <footer className="footer site-footer" id="footer">
      <p className="eyebrow">Authentic Mediterranean Kitchen</p>
      <Link className="brand brand-footer" href="/" aria-label="Athos home">
        <span>ATHOS</span><small>Greek restaurant</small>
      </Link>
      <Entrance className="footer-description" delay={0.05}>Experience subtle Hellenic gastronomy, fine Aegean wines and timeless hospitality in the heart of Strausberg.</Entrance>

      <RevealSection className="footer-box">
        <h3>◷ &nbsp; OPENING HOURS</h3>
        <div><span>Wednesday – Friday</span><b>4:00 p.m. – 10:00 p.m.</b></div>
        <div><span>Saturday</span><b>12:00 p.m. – 10:00 p.m.</b></div>
        <div><span>Monday</span><b className="footer-rest-day">Rest day</b></div>
      </RevealSection>

      <RevealSection className="footer-box" delay={0.06}>
        <h3>⌖ &nbsp; CONTACT</h3>
        <p>Elisabethstraße 19<br />15344 Strausberg</p>
        <a href="tel:+493341390650">☎ &nbsp; 03341 / 39 06 50</a>
        <a href="https://maps.google.com/?q=Elisabethstra%C3%9Fe+19,+15344+Strausberg" target="_blank" rel="noreferrer">▣ &nbsp; View on Google Maps</a>
      </RevealSection>

      <Link className="button button-gold full-button" href="/kontakt">♟ &nbsp; RESERVE TABLE</Link>
      <nav className="footer-nav" aria-label="Footer navigation">
        <Link href="/speisekarte">Menu</Link>
        <Link href="/speisekarte#weine">Wine list</Link>
        <Link href="/#about">About Athos</Link>
        <Link href="/kontakt">Directions</Link>
      </nav>
      <small className="copyright">© Restaurant Athos Strausberg. All rights reserved.<br />Greek elegance at Straussee</small>
    </footer>
  );
}
