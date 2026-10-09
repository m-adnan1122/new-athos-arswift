"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

const controlClass = "mt-2 min-h-12 w-full rounded-lg border border-white/15 bg-ink px-4 py-3 text-sm text-sand outline-none transition placeholder:text-sand/35 focus:border-gold focus:ring-2 focus:ring-gold/20";
const labelClass = "block text-xs font-medium text-sand/85";

export default function ReservationForm() {
  const [showNotice, setShowNotice] = useState(false);
  const reduceMotion = useReducedMotion();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowNotice(true);
  }

  return (
    <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
      <label className={labelClass}>Name<input className={controlClass} name="name" autoComplete="name" required placeholder="Ihr Name" /></label>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className={labelClass}>Datum<input className={controlClass} name="date" type="date" required /></label>
        <label className={labelClass}>Uhrzeit<input className={controlClass} name="time" type="time" required /></label>
      </div>
      <label className={labelClass}>Anzahl Personen<select className={controlClass} name="guests" defaultValue="2" required>{[1, 2, 3, 4, 5, 6, 7, 8].map((count) => <option key={count} value={count}>{count} {count === 1 ? "Person" : "Personen"}</option>)}</select></label>
      <label className={labelClass}>Nachricht<textarea className={`${controlClass} min-h-28 resize-y`} name="message" rows={4} placeholder="Besondere Wünsche oder Hinweise" /></label>
      <motion.button className="flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-ink transition-colors hover:bg-[#d8b97f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" type="submit" whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.99 }} transition={{ duration: 0.2 }}>Reservierungsanfrage vorbereiten</motion.button>
      {showNotice && <motion.p className="rounded-lg border border-gold/25 bg-gold/10 p-4 text-xs leading-5 text-sand/85" role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.3 }}>Das Formular ist noch nicht mit einem Reservierungssystem verbunden. Bitte rufen Sie uns unter <a className="font-semibold text-gold underline underline-offset-2" href="tel:+493341390650">03341 / 39 06 50</a> an.</motion.p>}
    </form>
  );
}
