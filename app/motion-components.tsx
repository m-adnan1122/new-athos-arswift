"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MotionBlockProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Entrance({ children, className, delay = 0, id }: MotionBlockProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function RevealSection({ children, className, delay = 0, id }: MotionBlockProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay, ease }}
    >
      {children}
    </motion.section>
  );
}

export function MotionArticle({ children, className }: Pick<MotionBlockProps, "children" | "className">) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={className}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease }}
    >
      {children}
    </motion.article>
  );
}

export function MotionAnchor({ children, className, href, ariaLabel }: MotionBlockProps & { href: string; ariaLabel?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      className={className}
      aria-label={ariaLabel}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.22, ease }}
    >
      {children}
    </motion.a>
  );
}
