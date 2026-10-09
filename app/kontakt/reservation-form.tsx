"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function ReservationForm() {
  const [showNotice, setShowNotice] = useState(false);
  const reduceMotion = useReducedMotion();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowNotice(true);
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <label>Name<input name="name" autoComplete="name" required placeholder="Ihr Name" /></label>
      <div className="form-row">
        <label>Datum<input name="date" type="date" required /></label>
        <label>Uhrzeit<input name="time" type="time" required /></label>
      </div>
      <label>Anzahl Personen<select name="guests" defaultValue="2" required>{[1, 2, 3, 4, 5, 6, 7, 8].map((count) => <option key={count} value={count}>{count} {count === 1 ? "Person" : "Personen"}</option>)}</select></label>
      <label>Nachricht<textarea name="message" rows={4} placeholder="Besondere Wünsche oder Hinweise" /></label>
      <motion.button className="button button-gold" type="submit" whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.99 }} transition={{ duration: 0.2 }}>Reservierungsanfrage vorbereiten</motion.button>
      {showNotice && <motion.p className="form-notice" role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.3 }}>Das Formular ist noch nicht mit einem Reservierungssystem verbunden. Bitte rufen Sie uns für Ihre Reservierung unter <a href="tel:+493341390650">03341 / 39 06 50</a> an.</motion.p>}
    </form>
  );
}
