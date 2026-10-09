import Image from "next/image";
import ReservationForm from "./reservation-form";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { Entrance, MotionAnchor, RevealSection } from "../motion-components";

export default function KontaktPage() {
  return (
    <main className="inner-page">
      <SiteHeader />
      <section className="contact-intro">
        <Entrance className="contact-intro-copy" delay={0.1}>
          <p className="eyebrow">Wir freuen uns auf Sie</p>
          <h1>Kontakt & Reservierung</h1>
          <p>Ein besonderer Abend beginnt mit einem guten Platz. Reservieren Sie Ihren Tisch oder planen Sie Ihren Besuch bei uns.</p>
          <a className="button button-gold" href="tel:+493341390650">☎ &nbsp; 03341 / 39 06 50</a>
          <span className="contact-hero-address">Elisabethstraße 19 <i /> 15344 Strausberg</span>
        </Entrance>
        <Entrance className="contact-intro-photo" delay={0.24}>
          <Image src="/home/hero.png" alt="Der stimmungsvoll beleuchtete Gastraum im Restaurant Athos" fill priority sizes="(max-width: 640px) 100vw, 50vw" />
          <span>Ein Stück Griechenland in Strausberg</span>
        </Entrance>
      </section>
      <div className="page-content contact-content">
        <RevealSection className="contact-panel">
          <p className="eyebrow">Ihr Besuch im Athos</p><h2>Tisch anfragen</h2>
          <ReservationForm />
        </RevealSection>
        <aside className="contact-details">
          <RevealSection className="contact-panel" delay={0.08}><p className="eyebrow">Restaurant Athos</p><h2>Besuchen Sie uns</h2>
            <p><strong>Adresse</strong><br />Elisabethstraße 19<br />15344 Strausberg</p>
            <p><strong>Telefon</strong><br /><a href="tel:+493341390650">03341 / 39 06 50</a></p>
            <p><strong>Öffnungszeiten</strong><br />Mittwoch – Freitag: 16:00 – 22:00<br />Samstag: 12:00 – 22:00<br />Montag: Ruhetag</p>
          </RevealSection>
          <MotionAnchor className="contact-map" href="https://maps.google.com/?q=Elisabethstra%C3%9Fe+19,+15344+Strausberg" ariaLabel="Restaurant Athos auf Google Maps öffnen">
            <span className="map-art" aria-hidden="true"><i /><i /><i /><i /></span>
            <span className="map-placeholder-label">Karte · Elisabethstraße 19, Strausberg</span>
            <span className="button button-gold">Route in Google Maps öffnen</span>
          </MotionAnchor>
        </aside>
      </div>
      <SiteFooter />
    </main>
  );
}
