"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["Speisekarte", "/speisekarte"],
  ["Kontakt / Reservierung", "/kontakt"],
];

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-drawer"
        onClick={() => setIsOpen(true)}
      >
        <span /><span /><span />
      </button>
      <AnimatePresence>
      {isOpen && (
        <motion.div className="drawer-layer" initial="hidden" animate="visible" exit="hidden" variants={{ hidden: { transition: { staggerChildren: 0.035, staggerDirection: -1 } }, visible: { transition: { delayChildren: 0.08, staggerChildren: 0.07 } } }}>
          <motion.button
            className="drawer-backdrop"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          />
          <motion.nav className="mobile-drawer" id="mobile-drawer" aria-label="Mobile navigation" role="dialog" aria-modal="true" variants={{ hidden: { x: "100%", transition: { staggerChildren: 0.035, staggerDirection: -1 } }, visible: { x: 0, transition: { delayChildren: 0.16, staggerChildren: 0.065 } } }} transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}>
            <div className="drawer-heading">
              <span className="drawer-brand">ATHOS <small>STRAUBING</small></span>
              <motion.button className="drawer-close" type="button" aria-label="Close menu" onClick={() => setIsOpen(false)} whileTap={{ scale: 0.9 }}>×</motion.button>
            </div>
            {links.map(([label, href]) => (
              <motion.a href={href} key={href} onClick={() => setIsOpen(false)} variants={{ hidden: { opacity: 0, x: 14 }, visible: { opacity: 1, x: 0 } }} whileHover={reduceMotion ? undefined : { x: 4 }} transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}>{label}<span aria-hidden="true">→</span></motion.a>
            ))}
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>Authentic Mediterranean Kitchen</motion.p>
          </motion.nav>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
