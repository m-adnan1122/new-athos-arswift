"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const links = [
  ["Startseite", "/"],
  ["Speisekarte", "/speisekarte"],
  ["Kontakt & Reservierung", "/kontakt"],
];

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <button
        className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-white/15 text-sand transition hover:border-gold hover:text-gold md:hidden"
        type="button"
        aria-label="Navigationsmenü öffnen"
        aria-expanded={isOpen}
        aria-controls="mobile-drawer"
        onClick={() => setIsOpen(true)}
      >
        <span className="h-px w-[18px] bg-current" /><span className="h-px w-[18px] bg-current" /><span className="h-px w-[18px] bg-current" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{ hidden: { transition: { staggerChildren: 0.025, staggerDirection: -1 } }, visible: { transition: { delayChildren: 0.04, staggerChildren: 0.055 } } }}
          >
            <motion.button
              className="absolute inset-0 h-full w-full cursor-default bg-black/65 backdrop-blur-sm"
              type="button"
              aria-label="Navigationsmenü schließen"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            />
            <motion.nav
              className="absolute inset-y-0 right-0 flex w-[min(88vw,24rem)] flex-col border-l border-white/10 bg-ink px-6 pb-7 pt-6 shadow-2xl shadow-black/40"
              id="mobile-drawer"
              aria-label="Navigationsmenü"
              role="dialog"
              aria-modal="true"
              variants={{ hidden: { x: "100%" }, visible: { x: 0 } }}
              transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <span className="flex flex-col font-serif text-xl tracking-[0.15em]">ATHOS<small className="mt-1 font-sans text-[8px] tracking-[0.25em] text-gold">STRAUSBERG</small></span>
                <motion.button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-2xl text-sand transition hover:border-gold hover:text-gold" type="button" aria-label="Menü schließen" onClick={() => setIsOpen(false)} whileTap={{ scale: 0.92 }}>×</motion.button>
              </div>
              {links.map(([label, href]) => (
                <motion.a
                  className="flex items-center justify-between border-b border-white/10 py-5 font-serif text-lg text-sand transition-colors hover:text-gold"
                  href={href}
                  key={href}
                  onClick={() => setIsOpen(false)}
                  variants={{ hidden: { opacity: 0, x: 14 }, visible: { opacity: 1, x: 0 } }}
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                  transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
                >
                  {label}<span className="font-sans text-base text-gold">→</span>
                </motion.a>
              ))}
              <p className="mt-auto pt-8 font-serif text-sm italic text-gold">Griechische Küche mit Herz</p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
