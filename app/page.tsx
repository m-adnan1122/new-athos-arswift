import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { Entrance, MotionArticle, RevealSection } from "./motion-components";

const dishes = [
  { name: "Garides Saganaki", tag: "Out of the Pan", price: "18,90 €", image: "/home/2.png", text: "Juicy king prawns in a fruity tomato-herb sauce with melted Greek sheep cheese and fresh country bread." },
  { name: "Lammkoteletts & Souvlaki", tag: "From the charcoal grill", price: "22,90 €", image: "/home/3.png", text: "Quality meats grilled over glowing charcoal, finished with wild mountain rosemary, lemon and creamy tzatziki." },
  { name: "Oktopadi Skaras", tag: "Seafood", price: "19,90 €", image: "/home/1.png", text: "Grilled octopus with yellow pea purée, Cretan capers and a finishing touch of olive oil." },
];

const goldButton = "inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-semibold text-ink shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8b97f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";
const lightButton = "inline-flex min-h-12 items-center justify-center rounded-full bg-sand px-7 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sand";

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-ink text-sand">
      <SiteHeader />

      <section className="relative isolate flex min-h-[420px] h-[min(680px,calc(100svh-68px))] items-center justify-center overflow-hidden sm:min-h-[500px] lg:min-h-[540px]">
        <picture className="absolute inset-0 block">
          <source media="(max-width: 1199px)" srcSet="/home/hero.png" />
          <Image className="object-cover object-center" src="/home/hero-dekstop.png" alt="Mediterranean grilled lamb served at Restaurant Athos" fill priority sizes="(max-width: 640px) 100vw, (max-width: 1199px) 61vw, 100vw" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-[#0D1B2A]/55 to-[#092846]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-ink/35" />
        <Entrance className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-14 text-center sm:px-8" delay={0.12}>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">Restaurant Athos · Strausberg</p>
          <h1 className="max-w-full font-serif text-[clamp(2.1rem,4.8vw,4.25rem)] leading-[1.08] tracking-[-0.025em] text-sand">Welcome to the <span className="text-gold">Athos restaurant</span></h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-6 text-sand/95 drop-shadow sm:text-base sm:leading-7">Mediterranean cuisine in the Greek style. Host Dionysios Giantsios and his team welcome you to perfect aromas, fine wines and warm hospitality in Strausberg.</p>
          <div className="mt-8 flex w-full max-w-[340px] flex-col justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row">
            <Link className={`${goldButton} min-h-10 min-w-36 px-6 text-[10px] uppercase tracking-wide`} href="/kontakt">Reserve a table</Link>
            <Link className={`${lightButton} min-h-10 min-w-36 px-6 text-[10px] uppercase tracking-wide`} href="/speisekarte">Discover the menu</Link>
          </div>
        </Entrance>
      </section>

      <div className="border-y border-white/5 bg-deep px-4 py-3 text-[10px] font-medium tracking-[0.12em] text-gold sm:px-8 sm:text-xs">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:justify-between">
          <span>◷ &nbsp; OPEN WED–FRI 4:00 PM–10:00 PM</span><span className="text-sand/70">⌖ &nbsp; ELISABETHSTRASSE 19 · STRAUSBERG</span>
        </div>
      </div>

      <RevealSection className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24" id="about">
        <div className="grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <p className="mb-2 font-serif text-sm text-gold">Restaurant Athos</p>
            <h2 className="font-serif text-3xl leading-tight text-sand sm:text-4xl">Greek hospitality,<br className="hidden sm:block" /> made to be shared.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted">At Elisabethstraße 19, we serve Greek favourites made with fresh ingredients and a deep-rooted passion for the honest flavours of the Eastern Mediterranean.</p>
            <div className="mt-7 grid grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-panel/70 py-4 text-center">
              <div className="px-2"><span className="text-lg text-gold">♨</span><p className="mt-1 text-[9px] font-semibold tracking-wide text-sand sm:text-[10px]">CHARCOAL GRILL</p><p className="text-[10px] text-muted">Made to order</p></div>
              <div className="px-2"><span className="text-lg text-gold">✳</span><p className="mt-1 text-[9px] font-semibold tracking-wide text-sand sm:text-[10px]">MARKET FRESH</p><p className="text-[10px] text-muted">Seasonal produce</p></div>
              <div className="px-2"><span className="text-lg text-gold">◉</span><p className="mt-1 text-[9px] font-semibold tracking-wide text-sand sm:text-[10px]">AEGEAN WINES</p><p className="text-[10px] text-muted">Thoughtfully chosen</p></div>
            </div>
          </div>
          <MotionArticle className="overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-2xl shadow-black/20">
            <div className="relative h-64 sm:h-80"><Image src="/home/1.png" alt="Grilled octopus on creamy yellow pea purée" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" /></div>
            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-semibold tracking-[0.16em] text-gold">ATHOS SIGNATURE</p><h3 className="mt-2 font-serif text-xl text-sand sm:text-2xl">Oktopadi Skaras auf Fava</h3></div><span className="shrink-0 text-sm font-semibold text-gold">19,90 €</span></div>
              <p className="mt-3 text-xs leading-6 text-muted sm:text-sm">Tenderly braised and seared octopus on Santorini yellow lentil fava, finished with wild capers and golden olive oil.</p>
            </div>
          </MotionArticle>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#101f2e] px-4 py-14 sm:px-8 sm:py-20 lg:py-24" id="menu">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 font-serif text-sm text-gold">From our kitchen</p>
          <div className="flex flex-wrap items-end justify-between gap-4"><h2 className="font-serif text-3xl text-sand sm:text-4xl">A taste of Greece</h2><Link className="text-xs text-gold transition hover:text-sand" href="/speisekarte">View the full menu <span aria-hidden="true">→</span></Link></div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">Family favourites, freshly prepared and served with Mediterranean warmth.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {dishes.map((dish) => <MotionArticle className="group overflow-hidden rounded-xl border border-white/10 bg-panel transition-colors hover:border-gold/40" key={dish.name}>
              <div className="relative h-52 overflow-hidden sm:h-56"><Image src={dish.image} alt={dish.name} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, 33vw" /><span className="absolute bottom-3 left-3 rounded-full bg-sand px-3 py-1 text-[10px] font-semibold text-ink">{dish.tag}</span><span className="absolute bottom-3 right-3 rounded-md bg-ink/90 px-2 py-1 text-[11px] font-semibold text-gold">{dish.price}</span></div>
              <div className="p-4"><h3 className="font-serif text-lg text-sand">{dish.name}</h3><p className="mt-2 text-xs leading-5 text-muted">{dish.text}</p><p className="mt-4 text-[10px] text-gold/80">✦ &nbsp; Traditional Athos kitchen</p></div>
            </MotionArticle>)}
          </div>
          <Link className={`${lightButton} mt-8 w-full`} href="/speisekarte">Explore the full menu</Link>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
        <p className="mb-2 font-serif text-sm text-gold">The Athos atmosphere</p><h2 className="font-serif text-3xl text-sand sm:text-4xl">A little moment in Greece</h2>
        <div className="mt-7 grid h-[360px] grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-2xl sm:h-[480px] sm:gap-3 lg:grid-cols-4 lg:grid-rows-1">
          <div className="relative col-span-2 row-span-2 lg:col-span-2"><Image src="/home/hero.png" alt="Warmly lit dining room at Athos" fill className="object-cover" sizes="(max-width: 1024px) 70vw, 50vw" /></div>
          <div className="relative"><Image src="/home/2.png" alt="Prawn saganaki fresh from the pan" fill className="object-cover" sizes="25vw" /></div>
          <div className="relative"><Image src="/home/3.png" alt="Greek grilled meat with lemon and herbs" fill className="object-cover" sizes="25vw" /></div>
        </div>
      </RevealSection>

      <RevealSection className="border-y border-white/5 bg-[#11283b] px-4 py-14 sm:px-8 sm:py-20" id="booking">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_auto]">
          <div><p className="mb-2 font-serif text-sm text-gold">Experience Athos</p><h2 className="font-serif text-3xl text-sand sm:text-4xl">Your table is waiting.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-sand/75">Whether it’s a relaxed dinner for two or a gathering with family and friends, we look forward to welcoming you.</p></div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col"><Link className={goldButton} href="/kontakt">Reserve a table</Link><a className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold/50 px-7 text-sm text-sand transition hover:border-gold hover:bg-white/5" href="tel:+493341390650">Call 03341 / 39 06 50</a></div>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-8 sm:py-20 md:grid-cols-2 lg:px-10" id="visit">
        <div><p className="mb-2 font-serif text-sm text-gold">Plan your visit</p><h2 className="font-serif text-3xl text-sand sm:text-4xl">Find us in Strausberg</h2><p className="mt-4 text-sm leading-6 text-muted">Elisabethstraße 19<br />15344 Strausberg</p><a className="mt-5 inline-flex items-center gap-2 text-sm text-gold transition hover:text-sand" href="https://maps.google.com/?q=Elisabethstra%C3%9Fe+19,+15344+Strausberg" target="_blank" rel="noreferrer">Open directions <span aria-hidden="true">↗</span></a></div>
        <div className="rounded-xl border border-white/10 bg-panel p-5 sm:p-6"><h3 className="mb-4 text-xs font-semibold tracking-[0.14em] text-gold">OPENING HOURS</h3><div className="space-y-3 text-xs"><div className="flex justify-between gap-4"><span className="text-muted">Wednesday – Friday</span><span>4:00 p.m. – 10:00 p.m.</span></div><div className="flex justify-between gap-4"><span className="text-muted">Saturday</span><span>12:00 p.m. – 10:00 p.m.</span></div><div className="flex justify-between gap-4"><span className="text-muted">Monday</span><span className="text-gold">Rest day</span></div></div></div>
      </RevealSection>

      <SiteFooter />
    </main>
  );
}
