import Link from "next/link";
import MenuDrawer from "./menu-drawer";

export default function SiteHeader() {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Athos home"><span>ATHOS</span><small>STRAUBING</small></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/speisekarte">Speisekarte</Link>
        <Link href="/kontakt">Kontakt / Reservierung</Link>
      </nav>
      <Link className="button button-gold top-book" href="/kontakt">Tisch reservieren</Link>
      <MenuDrawer />
    </header>
  );
}
